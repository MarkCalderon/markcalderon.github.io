import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

/** Viewport heights scrolled per second while playing. */
const SPEED = 0.2

/**
 * Scrolls the page through the world on its own. Opt-in only; any wheel, touch, key or
 * pointer input from the visitor hands control back, as does reaching the end.
 */
export function useAutoplay(rootRef: RefObject<HTMLElement | null>, toggleRef: RefObject<HTMLElement | null>) {
  const [isPlaying, setIsPlaying] = useState(false)
  const frame = useRef(0)

  const stop = useCallback(() => {
    cancelAnimationFrame(frame.current)
    frame.current = 0
    setIsPlaying(false)
  }, [])

  const play = useCallback(() => {
    const root = rootRef.current
    if (!root) return

    const end = root.getBoundingClientRect().top + window.scrollY + root.offsetHeight - window.innerHeight
    // Track a float target: browsers round scroll positions, which stalls slow scrolling.
    let target = window.scrollY >= end - 1 ? root.getBoundingClientRect().top + window.scrollY : window.scrollY
    let last = performance.now()

    const step = (now: number) => {
      target = Math.min(end, target + ((now - last) / 1000) * SPEED * window.innerHeight)
      last = now
      window.scrollTo(0, target)
      if (target >= end) stop()
      else frame.current = requestAnimationFrame(step)
    }

    window.scrollTo(0, target)
    setIsPlaying(true)
    frame.current = requestAnimationFrame(step)
  }, [rootRef, stop])

  const toggle = useCallback(() => (isPlaying ? stop() : play()), [isPlaying, play, stop])

  useEffect(() => {
    if (!isPlaying) return

    const interrupt = (event: Event) => {
      if (event.target instanceof Node && toggleRef.current?.contains(event.target)) return
      stop()
    }
    const events: (keyof WindowEventMap)[] = ['wheel', 'touchstart', 'keydown', 'pointerdown']
    events.forEach((name) => window.addEventListener(name, interrupt, { passive: true }))

    return () => events.forEach((name) => window.removeEventListener(name, interrupt))
  }, [isPlaying, stop, toggleRef])

  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  return { isPlaying, toggle }
}
