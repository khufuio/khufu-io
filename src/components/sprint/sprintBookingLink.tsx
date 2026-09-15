'use client'

import { buttonClasses } from '@/components/ui/button'
import type { Locale } from '@/i18n/config'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'
import { SPRINT_EVENTS } from '@/lib/sprintContactEvents'

/**
 * A direct link to the booking page, tracked.
 *
 * ⚠️ IT IS AN `<a href>` AND NOTHING ELSE, which is the whole point: it works
 * with JavaScript disabled, and it is what the page's `#start` fallback lands on.
 * The click handler only records the event — it never intercepts the navigation,
 * so a tracking failure can never cost a booking.
 *
 * ⛔ The URL comes from `lib/sprintBooking.ts` and is passed IN by the server
 * page. Do not read it from a client module here: a value exported from a
 * `'use client'` file and read on the server is what shipped a thrown error into
 * the page's href on 2026-09-15 (lib/sprintAnchors.ts tells the story).
 *
 * ⚠️ IT REPORTS `surface: 'closing'` AND THAT IS NOT COSMETIC. This is the ONE
 * route to the calendar that skips the contact modal, so the same event split by
 * `surface` is what tells us, in a month, whether the briefing step is winning
 * bookings or costing them. ⛔ Do not give this its own event name to make the
 * split easier to read — a separate name makes the two uncomparable.
 */
export function SprintBookingLink({
  href,
  label,
  locale,
  week,
}: {
  href: string
  label: string
  locale: Locale
  /** The week the page is selling, recorded with the click. */
  week?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-cta="closing"
      onClick={() =>
        track(SPRINT_EVENTS.bookingOpened, {
          placement: 'closing',
          surface: 'closing',
          week: week ?? null,
          locale,
          ...campaignProps(),
        })
      }
      className={buttonClasses('primary', 'lg', 'w-full')}
    >
      {label}
    </a>
  )
}
