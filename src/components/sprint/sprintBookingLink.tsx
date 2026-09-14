'use client'

import { buttonClasses } from '@/components/ui/button'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'

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
 */
export function SprintBookingLink({
  href,
  label,
  week,
}: {
  href: string
  label: string
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
        track('sprint_booking_opened', { placement: 'closing', week: week ?? null, ...campaignProps() })
      }
      className={buttonClasses('primary', 'lg', 'w-full')}
    >
      {label}
    </a>
  )
}
