import { useCallback, useEffect, useMemo, type RefObject } from 'react'
import {
  buildSpans,
  copyStateAt,
  fogAt,
  mixHue,
  poseAt,
  presentProgress,
  sceneAt,
  trackAt,
  clamp01,
} from '@/components/ScrollWorld/flightMath'
import { poseFor, sceneGroups, type Scene } from '@/components/ScrollWorld/scenes'

const narrowQuery = '(max-width: 767px)'

function scrollRange(root: HTMLElement) {
  return Math.max(1, root.offsetHeight - window.innerHeight)
}

/**
 * Drives the scroll world: one rAF-coalesced scroll handler writes transforms straight to
 * the DOM (no React state), so scrubbing never re-renders the tree.
 */
export function useFlight(rootRef: RefObject<HTMLElement | null>, scenes: Scene[]) {
  const spans = useMemo(() => buildSpans(scenes.map((scene) => scene.length)), [scenes])

  const goTo = useCallback(
    (index: number) => {
      const root = rootRef.current
      if (!root) return
      const top = root.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: top + presentProgress(index, spans) * scrollRange(root), behavior: 'smooth' })
    },
    [rootRef, spans],
  )

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const camera = root.querySelector<HTMLElement>('[data-world-camera]')
    const sky = root.querySelector<HTMLElement>('[data-world-sky]')
    const copies = Array.from(root.querySelectorAll<HTMLElement>('[data-scene-copy]'))
    const sceneries = Array.from(root.querySelectorAll<HTMLElement>('[data-scene-scenery]'))
    const fogged = Array.from(root.querySelectorAll<HTMLElement>('[data-fog-z]'))
    const railItems = Array.from(root.querySelectorAll<HTMLElement>('[data-rail-group]'))
    const railLabel = root.querySelector<HTMLElement>('[data-rail-label]')
    const groupOrder = sceneGroups.map(({ group }) => group)
    const narrow = window.matchMedia(narrowQuery)
    let poses = scenes.map((scene) => poseFor(scene, narrow.matches))
    let frame = 0

    const render = () => {
      frame = 0
      const progress = clamp01(-root.getBoundingClientRect().top / scrollRange(root))
      const pose = poseAt(progress, spans, poses)
      const { index, local } = sceneAt(progress, spans)

      if (sky) {
        const { segment, t } = trackAt(progress, spans, scenes.length)
        const from = scenes[segment].sky
        const to = scenes[Math.min(segment + 1, scenes.length - 1)].sky
        const glowA = mixHue(from[0], to[0], t)
        const glowB = mixHue(from[1], to[1], t)
        sky.style.setProperty('--sky-a-x', glowA.a.toFixed(3))
        sky.style.setProperty('--sky-a-y', glowA.b.toFixed(3))
        sky.style.setProperty('--sky-b-x', glowB.a.toFixed(3))
        sky.style.setProperty('--sky-b-y', glowB.b.toFixed(3))
      }

      if (camera) {
        camera.style.transform = `rotateY(${pose.yaw}deg) translate3d(${-pose.x}px, ${-pose.y}px, ${-pose.z}px)`
      }

      // Fog goes on the children: opacity on a preserve-3d parent would flatten its depth.
      sceneries.forEach((element, i) => {
        const fog = String(fogAt(pose.z - scenes[i].focal.z))
        for (const child of element.children) {
          if (child instanceof HTMLElement) child.style.opacity = fog
        }
      })

      fogged.forEach((element) => {
        element.style.opacity = String(fogAt(pose.z - Number(element.dataset.fogZ)))
      })

      copies.forEach((element, i) => {
        const isActive = i === index
        const state = isActive
          ? copyStateAt(local, i === 0, i === copies.length - 1)
          : { opacity: 0, shift: 0, blur: 0 }
        element.style.opacity = String(state.opacity)
        element.style.transform = `translate3d(0, ${state.shift}px, 0)`
        element.style.filter = state.blur > 0.05 ? `blur(${state.blur}px)` : ''
        element.style.pointerEvents = isActive && state.opacity > 0.5 ? 'auto' : 'none'
      })

      const group = scenes[index].group
      const activeOrder = groupOrder.indexOf(group)
      railItems.forEach((element) => {
        const order = groupOrder.findIndex((name) => name === element.dataset.railGroup)
        switch (Math.sign(order - activeOrder)) {
          case -1:
            element.dataset.state = 'past'
            element.removeAttribute('aria-current')
            break
          case 0:
            element.dataset.state = 'current'
            element.setAttribute('aria-current', 'step')
            break
          default:
            element.dataset.state = 'upcoming'
            element.removeAttribute('aria-current')
        }
      })
      const activeLabel = sceneGroups[activeOrder]?.label ?? ''
      if (railLabel && railLabel.textContent !== activeLabel) railLabel.textContent = activeLabel
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onNarrowChange = () => {
      poses = scenes.map((scene) => poseFor(scene, narrow.matches))
      schedule()
    }

    // Keyboard users land on links in faded scenes; bring that scene to its peak.
    const onFocusIn = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return
      const copy = event.target.closest<HTMLElement>('[data-scene-copy]')
      const index = copy ? copies.indexOf(copy) : -1
      if (index >= 0) goTo(index)
    }

    render()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    narrow.addEventListener('change', onNarrowChange)
    root.addEventListener('focusin', onFocusIn)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      narrow.removeEventListener('change', onNarrowChange)
      root.removeEventListener('focusin', onFocusIn)
    }
  }, [rootRef, scenes, spans, goTo])

  return goTo
}
