import { describe, expect, it } from 'vitest'
import {
  buildSpans,
  copyStateAt,
  fogAt,
  mixHue,
  linger,
  poseAt,
  presentProgress,
  sceneAt,
  segmentBetween,
  yearTicks,
  type Pose,
} from './flightMath'
import { endYear, firstSentence, startYear } from './scenes'

const spans = buildSpans([1, 2, 1])
const poses: Pose[] = [
  { x: 0, y: 0, z: 0, yaw: 0 },
  { x: 100, y: 0, z: -1000, yaw: 4 },
  { x: 0, y: 0, z: -2000, yaw: 0 },
]

describe('buildSpans', () => {
  it('normalizes lengths into back-to-back spans', () => {
    expect(spans).toEqual([
      { start: 0, end: 0.25 },
      { start: 0.25, end: 0.75 },
      { start: 0.75, end: 1 },
    ])
  })
})

describe('sceneAt', () => {
  it('owns seams with the next scene and clamps the ends', () => {
    expect(sceneAt(0, spans)).toEqual({ index: 0, local: 0 })
    expect(sceneAt(0.25, spans)).toEqual({ index: 1, local: 0 })
    expect(sceneAt(0.5, spans)).toEqual({ index: 1, local: 0.5 })
    expect(sceneAt(1, spans)).toEqual({ index: 2, local: 1 })
    expect(sceneAt(-1, spans).index).toBe(0)
    expect(sceneAt(2, spans).index).toBe(2)
  })
})

describe('linger', () => {
  it('keeps endpoints and stays monotonic', () => {
    expect(linger(0, 0.6)).toBe(0)
    expect(linger(1, 0.6)).toBeCloseTo(1)
    expect(linger(0.5, 0.6)).toBeCloseTo(0.5)
    let previous = -Infinity
    for (let t = 0; t <= 1; t += 0.01) {
      const value = linger(t, 0.6)
      expect(value).toBeGreaterThanOrEqual(previous)
      previous = value
    }
  })
})

describe('poseAt', () => {
  it('holds the first and last poses at the ends and lands on each pose mid-scene', () => {
    expect(poseAt(0, spans, poses)).toEqual(poses[0])
    expect(poseAt(1, spans, poses)).toEqual(poses[2])
    expect(poseAt(0.5, spans, poses).z).toBeCloseTo(-1000)
  })

  it('is continuous across a seam', () => {
    const before = poseAt(0.25 - 1e-6, spans, poses)
    const after = poseAt(0.25 + 1e-6, spans, poses)
    expect(Math.abs(before.z - after.z)).toBeLessThan(1)
  })
})

describe('copyStateAt', () => {
  it('is visible mid-scene and hidden at middle seams', () => {
    expect(copyStateAt(0.5, false, false).opacity).toBe(1)
    expect(copyStateAt(0, false, false).opacity).toBe(0)
    expect(copyStateAt(1, false, false).opacity).toBe(0)
  })

  it('greets on the first scene and holds on the last', () => {
    expect(copyStateAt(0, true, false).opacity).toBe(1)
    expect(copyStateAt(1, false, true).opacity).toBe(1)
  })
})

describe('presentProgress', () => {
  it('lands the first scene at the top and others mid-span', () => {
    expect(presentProgress(0, spans)).toBe(0)
    expect(presentProgress(1, spans)).toBe(0.5)
  })
})

describe('fogAt', () => {
  it('fades behind the camera and in the far distance', () => {
    expect(fogAt(500)).toBe(1)
    expect(fogAt(-240)).toBe(0)
    expect(fogAt(5000)).toBe(0)
  })
})

describe('copy helpers', () => {
  it('takes the first sentence and start year', () => {
    expect(firstSentence('Built 70+ CMS projects. Promoted within 6 months.')).toBe('Built 70+ CMS projects.')
    expect(firstSentence('No period here')).toBe('No period here')
    expect(startYear('Oct 2021 - Jan 2026')).toBe('2021')
  })
})

describe('segmentBetween', () => {
  it('measures and points a line along x and into depth', () => {
    expect(segmentBetween({ x: 0, y: 0, z: 0 }, { x: 100, y: 0, z: 0 })).toMatchObject({ length: 100, yaw: 0 })
    const intoDepth = segmentBetween({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: -200 })
    expect(intoDepth.length).toBe(200)
    expect(intoDepth.yaw).toBeCloseTo(90)
    expect(intoDepth.mid).toEqual({ x: 0, y: 0, z: -100 })
  })
})

describe('yearTicks', () => {
  it('places every year between anchors, newest first, marking anchors', () => {
    const ticks = yearTicks([
      { year: 2026, point: { x: 0, y: 0, z: 0 } },
      { year: 2022, point: { x: 0, y: 0, z: -400 } },
      { year: 2021, point: { x: 0, y: 0, z: -500 } },
    ])
    expect(ticks.map((tick) => tick.year)).toEqual([2026, 2025, 2024, 2023, 2022, 2021])
    expect(ticks[1].point.z).toBe(-100)
    expect(ticks.filter((tick) => tick.isAnchor).map((tick) => tick.year)).toEqual([2026, 2022, 2021])
  })
})

describe('endYear', () => {
  it('reads the end of a period, with Present as the current year', () => {
    expect(endYear('Oct 2021 - Jan 2026')).toBe('2026')
    expect(endYear('Feb 2026 - Present')).toBe('Present')
  })
})

describe('mixHue', () => {
  it('hits each end exactly and passes through neutral between opposite hues', () => {
    expect(mixHue(0, 180, 0).a).toBeCloseTo(1)
    expect(mixHue(0, 180, 1).a).toBeCloseTo(-1)
    const middle = mixHue(0, 180, 0.5)
    expect(Math.hypot(middle.a, middle.b)).toBeCloseTo(0)
  })
})
