'use client'

import { useEffect } from 'react'

/**
 * The only client-side JavaScript the Sprint V1 landing's motion needs.
 *
 * Mounted once per page, it observes every `[data-reveal]` element with a
 * SINGLE IntersectionObserver and flips `data-in="true"` when one scrolls into
 * view. Everything else — the fade, the SVG line drawing itself, the comparison
 * bars filling — is CSS reacting to that attribute (see globals.css).
 *
 * Why this shape rather than a hook per animated block: it keeps every section
 * of the page a server component. The page ships the finished HTML and SVG, and
 * the motion costs one observer and no extra hydration on an ad landing where
 * every kilobyte is paid for twice — once in LCP, once in cost per lead.
 *
 * A revealed element is unobserved immediately: this animates on the way in,
 * once, and never plays anything back on the way out.
 */
export function SprintMotion() {
  useEffect(() => {
    // Reduced motion is handled entirely in CSS (the hidden state only exists
    // inside `prefers-reduced-motion: no-preference`), so there is nothing to
    // reveal here — bail before creating an observer at all.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!targets.length || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.setAttribute('data-in', 'true'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-in', 'true')
          observer.unobserve(entry.target)
        }
      },
      // Fires a little before the element is fully on screen, so the motion is
      // already settling by the time the visitor's eye reaches it.
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
