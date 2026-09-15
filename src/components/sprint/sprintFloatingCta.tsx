'use client'

import { useEffect, useState } from 'react'
import { SPRINT_FORM_ANCHOR } from '@/lib/sprintAnchors'
import { SprintCta } from '@/components/sprint/sprintCta'
import { useSprintContact } from '@/components/sprint/sprintContact'

/**
 * The floating « Réserver un appel » button, bottom right, on every width.
 *
 * ⚠️ WHY IT EXISTS (2026-09-15). The site-wide WhatsApp bubble does not render on
 * this page (whatsappButton.tsx says why, and that stays true). Adrien did not
 * want the corner left empty: put a button there that OPENS THE MODAL instead —
 * on a desktop a wa.me deep link is a bad exit (WhatsApp Web, or an install
 * prompt), while the modal offers both doors and lets the visitor pick.
 *
 * ⛔ IT IS NOT A SECOND CONVERSION PATH. It is `SprintCta` itself: same anchor,
 * same modal, same state, same events. Its only own property is `placement:
 * 'floating'`, NEW and stable, so PostHog can tell whether it earns its place —
 * ⛔ never recycle an existing placement for it, and never rename this one.
 *
 * ⚠️ ON EVERY WIDTH, NOT ONLY DESKTOP — and mobile is where it matters most. The
 * header is sticky and carries its CTA on desktop, so a desktop reader always has
 * one in view; on a phone that CTA lives behind the menu button, so past the hero
 * a mobile reader had NO visible way to act until the next inline CTA. One door,
 * the same everywhere.
 *
 * WHEN IT SHOWS, all three at once:
 *   - the hero's own CTA has scrolled ABOVE the viewport (it would duplicate it);
 *   - neither the closing block nor the footer is in view (it must not sit on top
 *     of the booking link at the foot of the page, nor over the legal lines);
 *   - the modal is closed (it steps aside rather than hovering under the veil).
 *
 * ⚠️ PERFORMANCE. `position: fixed`, so it never takes part in layout — CLS stays
 * 0 whatever it does. Two IntersectionObservers, no scroll listener. It fades and
 * lifts on opacity/transform only, and not at all under reduced motion. Hidden, it
 * is `inert`, so it is out of the tab order and the accessibility tree.
 */
export function SprintFloatingCta({ label }: { label: string }) {
  const contact = useSprintContact()
  const [heroPassed, setHeroPassed] = useState(false)
  const [endInView, setEndInView] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('[data-cta="hero"]')
    const ends = [document.getElementById(SPRINT_FORM_ANCHOR), document.querySelector('footer')].filter(
      (el): el is HTMLElement => el !== null,
    )

    const heroObserver = new IntersectionObserver(([entry]) => {
      // Passed = out of view AND above the viewport, not merely below it on load.
      setHeroPassed(!entry.isIntersecting && entry.boundingClientRect.bottom < 0)
    })
    // The hero CTA is always rendered; without it the button simply never shows.
    if (hero) heroObserver.observe(hero)

    const visibleEnds = new Set<Element>()
    const endObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleEnds.add(entry.target)
        else visibleEnds.delete(entry.target)
      }
      setEndInView(visibleEnds.size > 0)
    })
    ends.forEach((el) => endObserver.observe(el))

    return () => {
      heroObserver.disconnect()
      endObserver.disconnect()
    }
  }, [])

  const shown = heroPassed && !endInView && !contact?.isOpen

  return (
    <div className="sprint-floating-cta" data-shown={shown} inert={!shown}>
      <SprintCta
        placement="floating"
        label={label}
        size="md"
        className="shadow-[0_14px_34px_-12px_rgba(14,14,16,0.45)]"
      />
    </div>
  )
}
