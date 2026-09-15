'use client'

import { buttonClasses } from '@/components/ui/button'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'
import { SPRINT_FORM_ANCHOR } from '@/lib/sprintAnchors'
import { SPRINT_EVENTS } from '@/lib/sprintContactEvents'
import { useSprintContact } from '@/components/sprint/sprintContact'

/* ⛔ DO NOT RE-EXPORT `SPRINT_FORM_ANCHOR` FROM THIS FILE. It is imported here,
   from the directive-free module that owns it, and server components import it
   from there too. Re-exporting it from a client module is what put a thrown
   error into the page's href in production — the whole story is in
   lib/sprintAnchors.ts. */

/**
 * The one action of the Sprint V1 landing, repeated down the page.
 *
 * ⚠️ IT OPENS THE CONTACT MODAL, IT NO LONGER SCROLLS. Adrien, 2026-09-15: « les
 * CTA qui t'emmènent juste à la section contact, ça te semble pertinent ? un mec
 * qui voit la page défiler va juste vouloir lire… ». A button that scrolls asks
 * the visitor to start reading again somewhere else; the modal answers the click.
 *
 * ⛔ AND IT IS STILL A REAL ANCHOR. `href="#start"` is what runs when JavaScript
 * does not: the browser jumps to the form at the foot of the page, which is
 * exactly why that form stays there. Never turn this into a `<button>`.
 *
 * ⚠️ `placement` IS PRESERVED EXACTLY AS IT WAS — it is what makes the repetition
 * measurable (which of the CTAs actually carries the campaign), and renaming one
 * would silently break the comparison with everything already recorded. Every
 * event fired from inside the modal carries the same `placement` verbatim, plus
 * its own `surface`, so "which CTA" and "which UI" stay two separate questions
 * (lib/sprintContactEvents.ts).
 *
 * ⚠️ AND THE LOCALE COMES FROM THE CONTEXT, not from a prop. It is `null` only
 * when there is no provider — the same state in which the click is a plain
 * anchor jump — so a missing locale in the data is itself the signal that the
 * degraded path was taken.
 */
export function SprintCta({
  placement,
  label,
  variant = 'primary',
  size = 'lg',
  className,
  /** The week this button sells, carried into the modal and the prefilled message. */
  week,
}: {
  placement: string
  label: string
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  className?: string
  week?: string
}) {
  const contact = useSprintContact()

  return (
    <a
      href={`#${SPRINT_FORM_ANCHOR}`}
      data-cta={placement}
      onClick={(e) => {
        track(SPRINT_EVENTS.ctaClicked, {
          placement,
          week: week ?? null,
          locale: contact?.locale ?? null,
          ...campaignProps(),
        })
        // No provider (or no JS) → the anchor does its job untouched.
        if (!contact) return
        e.preventDefault()
        contact.open({ placement, week })
      }}
      className={buttonClasses(variant, size, className)}
    >
      {label}
    </a>
  )
}
