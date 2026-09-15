/**
 * The PostHog vocabulary of the Sprint V1 contact funnel.
 *
 * ⛔ NO DIRECTIVE IN THIS FILE, ON PURPOSE — same rule as lib/sprintAnchors.ts.
 * These names are read by client components today and may be read by a server
 * one tomorrow; a value exported from a `'use client'` module and read on the
 * server is what shipped a thrown error into a live `href` on 2026-09-15.
 *
 * ⚠️ WHY A MODULE RATHER THAN STRING LITERALS AT THE CALL SITES. This page is the
 * only one with an ad budget pointed at it, and in a month the question asked of
 * the data will not be "how many leads" — it will be the four arbitrations this
 * pass made by argument and could not make by measurement:
 *
 *   1. Does the net earn its place? → `sprint_callback_requested` against
 *      `sprint_booking_opened`. Before this pass there was NOTHING to compare
 *      against a booking, so the question was structurally unanswerable.
 *   2. Is the modal a click too many? → `sprint_contact_dismissed` against
 *      `sprint_contact_opened`, and `dwell_ms` to tell a mis-click from a read.
 *   3. Does WhatsApp help or cheapen? → `sprint_whatsapp_opened` broken down by
 *      `locale`; the answer is very unlikely to be the same in fr and in tr.
 *   4. Is the intermediate step costing bookings? → `sprint_booking_opened`
 *      split by `surface`: `modal` (one click of delay) vs `closing` (the direct
 *      link at the foot of the page). Same event, same button, two routes.
 *
 * ⛔ SO: NEVER RENAME ONE OF THESE, and never fold two paths onto one event.
 * A renamed event silently starts a new series and the comparison above dies
 * with it; a shared event makes the split above impossible after the fact.
 * Adding one is free — that is what this object is for.
 */

/** Every distinct way a visitor can reach us from this landing. */
export type SprintContactPath = 'booking' | 'callback' | 'whatsapp' | 'email'

/**
 * Where the click physically happened. ⚠️ This is NOT `placement` — `placement`
 * says which CTA started the journey (hero, products, day7…), `surface` says
 * which UI the exit was taken from. Both are needed: the first attributes the
 * campaign, the second judges the modal.
 */
export type SprintContactSurface = 'modal' | 'closing'

export const SPRINT_EVENTS = {
  /** A CTA was clicked. Fires whether or not the modal then opens (it does not without JS). */
  ctaClicked: 'sprint_cta_clicked',
  /** The contact modal actually opened. */
  contactOpened: 'sprint_contact_opened',
  /** The modal was closed without taking any path — the cost of the extra step. */
  contactDismissed: 'sprint_contact_dismissed',
  /** The Google appointment page was opened. */
  bookingOpened: 'sprint_booking_opened',
  /** The net was unfolded — demand for it, independent of whether it was completed. */
  callbackRevealed: 'sprint_callback_revealed',
  /** The net was submitted and recorded. */
  callbackRequested: 'sprint_callback_requested',
  /** The net was submitted and the endpoint refused or failed — the mailto is shown. */
  callbackFailed: 'sprint_callback_failed',
  /** The mailto rescue link was taken after a failure. */
  emailFallbackOpened: 'sprint_email_fallback_opened',
  /** WhatsApp was opened from this landing. */
  whatsappOpened: 'sprint_whatsapp_opened',
} as const

/** The properties every contact event on this page carries, without exception. */
export type SprintContactProps = {
  /** Which CTA started the journey — preserved verbatim across passes. */
  placement: string
  /** Which UI the exit was taken from. */
  surface: SprintContactSurface
  /** The week the click was carrying, when it was carrying one. */
  week: string | null
  /** The language the visitor is reading in — the axis the WhatsApp question turns on. */
  locale: string | null
}
