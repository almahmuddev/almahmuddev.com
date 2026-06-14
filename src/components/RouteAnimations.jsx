'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const TRIGGER_CLASS   = 'tmp-scroll-trigger'
const OFFSCREEN_CLASS = 'tmp-scroll-trigger--offscreen'

export default function RouteAnimations() {
  const pathname = usePathname()
  const isFirstRun = useRef(true)

  useEffect(() => {
    // Skip the very first run — the original main.js / animation.js
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }

    const elements = document.querySelectorAll(`.${TRIGGER_CLASS}`)
    if (!elements.length) return

    elements.forEach((el) => el.classList.add(OFFSCREEN_CLASS))

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(OFFSCREEN_CLASS)
            obs.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -50px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    // Refresh GSAP ScrollTrigger positions for the new page layout
    if (typeof window !== 'undefined' && window.ScrollTrigger) {
      window.ScrollTrigger.refresh()
    }

    return () => observer.disconnect()
  }, [pathname])

  // Always scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
