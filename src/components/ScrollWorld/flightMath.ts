export type Vec3 = { x: number; y: number; z: number }

export type Pose = Vec3 & { yaw: number }

export type Span = { start: number; end: number }

export type CopyState = { opacity: number; shift: number; blur: number }

export const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

const lerp = (from: number, to: number, t: number) => from + (to - from) * t

/** Scroll lengths (any unit) to normalized 0..1 spans, back to back. */
export function buildSpans(lengths: number[]): Span[] {
  const total = lengths.reduce((sum, length) => sum + length, 0)
  let cursor = 0

  return lengths.map((length) => {
    const start = cursor / total
    cursor += length
    return { start, end: cursor / total }
  })
}

/** Which scene owns this progress, and how far through it (0..1). */
export function sceneAt(progress: number, spans: Span[]) {
  const p = clamp01(progress)
  const found = spans.findIndex((span) => p < span.end)
  const owner = found === -1 ? spans.length - 1 : found
  const span = spans[owner]

  return { index: owner, local: clamp01((p - span.start) / (span.end - span.start)) }
}

/**
 * Slows the camera around the middle of a scene (while copy peaks) and speeds it up
 * toward the seams. Keeps f(0) = 0 and f(1) = 1, monotonic for amount <= 1.
 */
export function linger(t: number, amount: number) {
  return t + (amount * Math.sin(2 * Math.PI * t)) / (2 * Math.PI)
}

/**
 * Position along the chain of scene keyframes. Scene i's keyframe is reached at its middle,
 * so the flight travels between neighbours across each seam and never cuts.
 */
export function trackAt(progress: number, spans: Span[], count: number, lingerAmount = 0.6) {
  const { index, local } = sceneAt(progress, spans)
  const track = Math.min(count - 1, Math.max(0, index + linger(local, lingerAmount) - 0.5))
  const segment = Math.max(0, Math.min(count - 2, Math.floor(track)))
  return { segment, t: count < 2 ? 0 : track - segment }
}

export function poseAt(progress: number, spans: Span[], poses: Pose[], lingerAmount = 0.6): Pose {
  if (poses.length < 2) return poses[0]

  const { segment, t } = trackAt(progress, spans, poses.length, lingerAmount)
  const from = poses[segment]
  const to = poses[segment + 1]

  return {
    x: lerp(from.x, to.x, t),
    y: lerp(from.y, to.y, t),
    z: lerp(from.z, to.z, t),
    yaw: lerp(from.yaw, to.yaw, t),
  }
}

/**
 * Blends two hues as colour directions (oklab a/b), not round the hue wheel, so a move
 * from coral to sky blue fades through a soft neutral instead of detouring via magenta.
 */
export function mixHue(from: number, to: number, t: number) {
  const angle = (deg: number) => (deg * Math.PI) / 180
  return {
    a: lerp(Math.cos(angle(from)), Math.cos(angle(to)), t),
    b: lerp(Math.sin(angle(from)), Math.sin(angle(to)), t),
  }
}

/** Copy fades in, holds while the camera lingers, fades out before the seam. */
export function copyStateAt(local: number, isFirst: boolean, isLast: boolean): CopyState {
  const fadeIn = isFirst ? 1 : clamp01((local - 0.08) / 0.22)
  const fadeOut = isLast ? 1 : clamp01((0.92 - local) / 0.22)
  const opacity = Math.min(fadeIn, fadeOut)
  const direction = fadeIn < 1 ? 1 : -1

  return { opacity, shift: (1 - opacity) * 24 * direction, blur: (1 - opacity) * 6 }
}

/** Scroll progress at which a scene is fully presented. The first scene greets at 0. */
export function presentProgress(index: number, spans: Span[]) {
  if (index === 0) return 0
  const span = spans[index]
  return span.start + (span.end - span.start) * 0.5
}

/** Scenery visibility from how far in front of the camera it sits (px). */
export function fogAt(distanceAhead: number) {
  // Fades out before reaching the camera so layers placed in front of an anchor never fill the screen.
  if (distanceAhead < 300) return clamp01(distanceAhead / 300)
  return clamp01(1 - (distanceAhead - 700) / 1700)
}

/** A straight 3D line as a CSS plane: centre, length and the yaw that points it from a to b. */
export function segmentBetween(a: Vec3, b: Vec3) {
  const dx = b.x - a.x
  const dz = b.z - a.z

  return {
    mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, z: (a.z + b.z) / 2 },
    length: Math.hypot(dx, b.y - a.y, dz),
    yaw: (Math.atan2(a.z - b.z, dx) * 180) / Math.PI,
  }
}

export type YearAnchor = { year: number; point: Vec3 }

/**
 * One tick per calendar year between anchors (newest first), placed by interpolating
 * between the anchors either side of it.
 */
export function yearTicks(anchors: YearAnchor[]) {
  const ticks: { year: number; point: Vec3; isAnchor: boolean }[] = []

  anchors.forEach((from, index) => {
    const to = anchors[index + 1]
    if (!to) {
      ticks.push({ year: from.year, point: from.point, isAnchor: true })
      return
    }

    for (let year = from.year; year > to.year; year -= 1) {
      const t = (from.year - year) / (from.year - to.year)
      ticks.push({
        year,
        point: {
          x: lerp(from.point.x, to.point.x, t),
          y: lerp(from.point.y, to.point.y, t),
          z: lerp(from.point.z, to.point.z, t),
        },
        isAnchor: year === from.year,
      })
    }
  })

  return ticks
}
