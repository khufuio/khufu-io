/**
 * Proves the Sprint V1 calendar can never reach the one state that kills the
 * page: a strip on which every week is full.
 *
 * Adrien, 2026-09-14: « zéro disponibilité affichée = impasse de conversion,
 * c'est le seul état à interdire par le code ». It is not enough for the held
 * list to happen to leave gaps today — the list is hand-edited, the window
 * rolls every Monday, and the J-5 cutoff walks the start of it forward on its
 * own. So this simulates EVERY DAY over several years and asserts, for each one:
 *
 *   1. the strip carries at least one « Disponible » week;
 *   2. the CTA therefore has a week to name, and it is one of the open ones;
 *   3. no offered Monday is inside the J-5 cutoff, i.e. none of them could be
 *      sold without a day 0 in front of it;
 *   4. the window is `BOOKING_WINDOW_WEEKS` distinct, strictly increasing
 *      Mondays — a slide that duplicated or reordered a date would show a
 *      calendar nobody could read.
 *
 * Run it before shipping a change to `sprintHeldMondays`, `sprintSlots` or the
 * cutoff:
 *   npx tsx scripts/checkSprintSlots.ts
 */
import { BOOKING_WINDOW_WEEKS, firstOpenSlot, pickSellableWindow, sprintSlots } from '../src/lib/sprintSlots'

const DAY_MS = 86_400_000
/** Well past the end of the held list, so the horizon covers it running out too. */
const FIRST_DAY = Date.UTC(2026, 8, 14)
const DAYS = 365 * 3

const problems: string[] = []

for (let i = 0; i < DAYS; i += 1) {
  const from = new Date(FIRST_DAY + i * DAY_MS)
  const today = from.toISOString().slice(0, 10)
  const slots = sprintSlots('fr', BOOKING_WINDOW_WEEKS, from)

  if (slots.length !== BOOKING_WINDOW_WEEKS) {
    problems.push(`${today} — ${slots.length} weeks shown, expected ${BOOKING_WINDOW_WEEKS}`)
    continue
  }

  const open = slots.filter((slot) => !slot.held)
  if (!open.length) {
    problems.push(`${today} — every week full: ${slots.map((s) => s.iso).join(', ')}`)
  }

  const cta = firstOpenSlot(slots)
  if (!cta) {
    problems.push(`${today} — the CTA has no week to name`)
  } else if (cta.held) {
    problems.push(`${today} — the CTA names a held week (${cta.iso})`)
  }

  for (const slot of slots) {
    const lead = (Date.parse(`${slot.iso}T00:00:00Z`) - Date.parse(`${today}T00:00:00Z`)) / DAY_MS
    if (lead < 5) problems.push(`${today} — ${slot.iso} is only ${lead} day(s) out, inside the cutoff`)
  }

  const isos = slots.map((slot) => slot.iso)
  if (new Set(isos).size !== isos.length) problems.push(`${today} — duplicate Monday: ${isos.join(', ')}`)
  for (let n = 1; n < isos.length; n += 1) {
    if (isos[n] <= isos[n - 1]) problems.push(`${today} — out of order: ${isos.join(', ')}`)
  }
}

/*
 * The four checks above run on the REAL held list, which today already leaves a
 * gap in every window — so they never make the guard slide. These drive
 * `pickSellableWindow` directly with a held run long enough that it has to, which
 * is the case that matters the day somebody edits the table by hand.
 */
const held = (n: number, first: boolean[]) =>
  Array.from({ length: n }, (_, i) => ({ held: first[i] ?? false, i }))

const slid = pickSellableWindow(held(12, [true, true, true, true, true, true]), BOOKING_WINDOW_WEEKS)
if (!slid.some((slot) => !slot.held)) {
  problems.push('pickSellableWindow — returned an all-full window it could have slid past')
}
if (slid.length !== BOOKING_WINDOW_WEEKS) {
  problems.push(`pickSellableWindow — returned ${slid.length} weeks, expected ${BOOKING_WINDOW_WEEKS}`)
}
if (slid[0]?.i !== 3) {
  problems.push(`pickSellableWindow — slid to index ${slid[0]?.i}, expected the first window reaching an open week`)
}

/* And it never returns an empty strip, even when everything it can see is held. */
const allHeld = pickSellableWindow(
  Array.from({ length: 8 }, (_, i) => ({ held: true, i })),
  BOOKING_WINDOW_WEEKS,
)
if (allHeld.length !== BOOKING_WINDOW_WEEKS) {
  problems.push('pickSellableWindow — showed a blank calendar when every week was held')
}

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) over ${DAYS} simulated days:`)
  for (const problem of problems.slice(0, 40)) console.error(`   ${problem}`)
  if (problems.length > 40) console.error(`   … and ${problems.length - 40} more`)
  process.exit(1)
}
console.log(`✓ ${DAYS} simulated days: always ${BOOKING_WINDOW_WEEKS} Mondays, always at least one open, cutoff held`)
console.log('✓ the window slides past a run of held weeks rather than showing a full strip')
