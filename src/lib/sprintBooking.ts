/**
 * The Sprint V1 booking page — Google Workspace appointment schedule
 * « Sprint V1 — 30 min », with the Meet link generated automatically.
 *
 * ⛔ NO DIRECTIVE IN THIS FILE, ON PURPOSE. The URL is read by the client modal
 * AND rendered as a plain `<a href>` by the server page, so it cannot live in a
 * `'use client'` module — that is exactly the defect that shipped
 * `#function(){throw Error("Attempted to call SPRINT_FORM_ANCHOR()…")}` into
 * production on 2026-09-15 (see lib/sprintAnchors.ts for the full story).
 *
 * ⚠️ THE FALLBACK IS HARD-CODED DELIBERATELY. `NEXT_PUBLIC_*` values are inlined
 * at BUILD time, so a deploy that forgets the variable would ship a page whose
 * main CTA has silently disappeared — on the one page carrying an ad budget. The
 * literal below is the real, current schedule; the variable exists to change it
 * without a code edit, and setting it to a blank value is the supported way to
 * take bookings offline (the button then hides rather than 404s).
 *
 * ⛔ NEVER point this at Clokizi's schedule (calendar.app.google/X3mc…): a Khufu
 * prospect must not land on a Clokizi slot.
 *
 * ⛔ AND DO NOT RESTATE ON THE LANDING WHAT THIS PAGE ALREADY ENFORCES: slots of
 * 30 minutes, 7 days a week, 10:00–14:00 UTC, a minimum 24h notice so the
 * earliest slot is tomorrow, a 14-day booking horizon, and the required fields
 * (first name, last name, e-mail, « Where is your project today? »).
 *
 * ⛔ THE LANDING SAYS ONE THING ABOUT THIS PAGE AND IT IS NOT THE HOURS: that it
 * is IN ENGLISH, because Google has a single, non-localisable description field
 * and that is the one fact a visitor cannot discover before arriving. « 7 j/7,
 * 10 h – 14 h UTC » used to sit next to it and Adrien pulled it on 2026-09-15 —
 * opening hours in UTC ask the reader to do arithmetic before they know whether
 * to care, and Google shows the real availability in their own clock anyway.
 */
const FALLBACK =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dzMGhDku3YG8gWaKNH2sIr5HvZY6b_gYOfcXMkDPPXutNIaKENIf1Njo4iPi9c2eiSGnLqoCv?gv=true'

/** The booking URL, or an empty string when bookings are deliberately closed. */
export const sprintBookingUrl: string =
  (process.env.NEXT_PUBLIC_SPRINT_BOOKING_URL ?? '').trim() || FALLBACK
