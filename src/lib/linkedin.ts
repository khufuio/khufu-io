import { CONSENT_KEY, REGION_COOKIE } from '@/lib/consent'

/**
 * LinkedIn Insight Tag — retargeting audiences and Campaign Manager conversions.
 *
 * ⛔ NO DIRECTIVE IN THIS FILE, ON PURPOSE — same rule as lib/sprintContactEvents.ts:
 * the constants below may be read by a server module one day.
 *
 * Every value is `NEXT_PUBLIC_*`, inlined at build time: unset = the tag never
 * loads and every conversion call is a no-op. Nothing here is a secret — the
 * partner id and conversion ids ship in LinkedIn's own snippet — they live in the
 * environment so a preview deployment cannot feed the production ad account.
 */
export const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? ''

/**
 * The conversions Campaign Manager optimises on, keyed by what happened on the
 * site. Each id is created in Campaign Manager (Conversion tracking → "Define
 * with JavaScript event") and pasted into the environment.
 *
 * `contact` — « un contact a été pris » (decision cmu7x1yj): ONE conversion for
 * the three exits of /sprint-v1, fired at the same point as their PostHog event
 * so the two tools can be reconciled:
 *   - `sprint_booking_opened`     (sprintContact.tsx modal, sprintBookingLink.tsx closing)
 *   - `sprint_callback_requested` (sprintCallback.tsx, only after the server said yes)
 *   - `sprint_whatsapp_opened`    (sprintWhatsappLink.tsx, modal + closing)
 *
 * ⚠️ WHY ONE AND NOT THREE: ~$1,000 at $8-15 a click buys 70-125 clicks, and
 * LinkedIn needs 15-50 conversions to leave its learning phase. Only the three
 * exits together have that volume. The campaign OPTIMISES on this; it is JUDGED
 * on booked calls, which this site cannot see.
 *
 * ⚠️ A BOOKING HERE IS THE GOOGLE PAGE OPENING, NOT AN APPOINTMENT. The slot is
 * picked on Google's side, out of the site's reach, so `sprint_booking_opened`
 * also counts every visitor who opened the calendar and left. A cost per
 * conversion read off this number is a cost per contact ATTEMPT — the booked
 * calls are counted in the Google calendar, not here.
 *
 * ⛔ The hire-checklist download is deliberately NOT a LinkedIn conversion any
 * more: cmu7x1yj took the lead magnets out of the paid funnel. Its env var
 * (NEXT_PUBLIC_LINKEDIN_CONVERSION_CHECKLIST) stays documented in .env.example
 * and is read nowhere — wire it back here only if a paid flight points at a
 * guide again.
 */
const CONVERSION_IDS = {
  contact: process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_CONTACT ?? '',
} as const

export type LinkedInConversion = keyof typeof CONVERSION_IDS

type Lintrk = ((action: 'track', data: { conversion_id: number }) => void) & { q?: unknown[] }

declare global {
  interface Window {
    lintrk?: Lintrk
    _linkedin_data_partner_ids?: string[]
  }
}

function readCookie(name: string): string | undefined {
  return document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`))?.[1]
}

/**
 * Whether the ad tag may run, read off the SAME consent state as PostHog
 * (lib/consent.ts, written by the cookie banner) — no second mechanism.
 *
 * ⚠️ ONE DELIBERATE DIFFERENCE with PostHog, and it is the threshold, not the
 * mechanism: where the banner is shown (EU/EEA/UK), PostHog runs until refused
 * (audience measurement), but an advertising tracker waits for an explicit
 * "Accept" — a third-party ad cookie before consent is exactly what the CNIL
 * fines. Everywhere else (no banner) it runs unless the visitor refused, like
 * PostHog.
 */
export function linkedInAllowed(): boolean {
  if (typeof window === 'undefined') return false
  let consent: string | null = null
  try {
    consent = localStorage.getItem(CONSENT_KEY)
  } catch {
    return false
  }
  if (consent === 'granted') return true
  if (consent === 'denied') return false
  return readCookie(REGION_COOKIE) !== '1'
}

/**
 * Report a conversion to LinkedIn. Never throws, never blocks the caller: a
 * missing id, a refused consent or a blocked script just means nothing is sent.
 * Calls made before the script has loaded are queued by the snippet's stub.
 */
export function trackLinkedInConversion(conversion: LinkedInConversion): void {
  if (typeof window === 'undefined' || !window.lintrk) return
  const id = Number(CONVERSION_IDS[conversion])
  if (!id || !linkedInAllowed()) return
  try {
    window.lintrk('track', { conversion_id: id })
  } catch {
    // Third-party script — a failure here must never reach the page.
  }
}
