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
 * ⚠️ AND SINCE 2026-09-15 IT ALSO PROVES THE RULE ITSELF. Which weeks are full
 * is no longer a table but `isHeldByRule` — one Monday in two, decided by a pure
 * function of the date (Adrien: « une règle déterministe et cohérente d'une
 * visite à l'autre »). Three properties the page leans on are asserted over a
 * decade of Mondays rather than argued in a comment: EVERY window of four shows
 * exactly two open weeks — which is the complaint that produced the rule, and an
 * average of a half would not have answered it — a held week is never followed
 * by more than one more, and the same Monday always gives the same answer.
 *
 * Run it before shipping a change to `isHeldByRule`, `sprintSlots` or the
 * cutoff:
 *   npx tsx scripts/checkSprintSlots.ts
 */
import {
  BOOKING_WINDOW_WEEKS,
  firstOpenSlot,
  isHeldByRule,
  pickSellableWindow,
  sprintSlots,
} from '../src/lib/sprintSlots'

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
 * ── THE RULE ────────────────────────────────────────────────────────────────
 * A decade of Mondays, checked for the three properties the strip depends on.
 * ⛔ The third one is the one that would be a broken promise rather than a bug:
 * a week shown « Complet » must still read « Complet » on the next visit, which
 * is exactly what a stored or drawn state cannot guarantee and a pure function
 * gives for free.
 */
const RULE_FIRST = Date.UTC(2026, 0, 5) // a Monday
const RULE_WEEKS = 52 * 10
const isos: string[] = Array.from({ length: RULE_WEEKS }, (_, i) =>
  new Date(RULE_FIRST + i * 7 * DAY_MS).toISOString().slice(0, 10),
)
const heldFlags = isos.map((iso) => isHeldByRule(iso))

const heldCount = heldFlags.filter(Boolean).length
if (heldCount * 2 !== RULE_WEEKS) {
  problems.push(`isHeldByRule — ${heldCount}/${RULE_WEEKS} weeks held, expected exactly half`)
}

/* ⛔ THE ONE THAT ANSWERS THE COMPLAINT. « Trop de semaines s'affichent
   disponibles » is about the strip, not about a long-run average, so the density
   is asserted on every window the strip could ever show. */
for (let i = 0; i + BOOKING_WINDOW_WEEKS <= heldFlags.length; i += 1) {
  const open = heldFlags.slice(i, i + BOOKING_WINDOW_WEEKS).filter((held) => !held).length
  if (open * 2 !== BOOKING_WINDOW_WEEKS) {
    problems.push(`isHeldByRule — the window from ${isos[i]} shows ${open}/${BOOKING_WINDOW_WEEKS} open, expected half`)
    break
  }
}

let run = 0
for (let i = 0; i < heldFlags.length; i += 1) {
  run = heldFlags[i] ? run + 1 : 0
  if (run > 2) {
    problems.push(`isHeldByRule — ${run} held weeks in a row at ${isos[i]}; at most 2 keeps the window sellable`)
    break
  }
}

/* The consequence the page actually needs: no three consecutive Mondays are all
   held, so a four-week window can never be full and never has to slide. */
for (let i = 0; i + 3 <= heldFlags.length; i += 1) {
  if (heldFlags[i] && heldFlags[i + 1] && heldFlags[i + 2]) {
    problems.push(`isHeldByRule — three full weeks in a row from ${isos[i]}`)
    break
  }
}

/* Stable: same Monday, same answer, however many times it is asked. */
for (const iso of isos.slice(0, 40)) {
  if (isHeldByRule(iso) !== isHeldByRule(iso)) problems.push(`isHeldByRule — ${iso} is not deterministic`)
}

/* And not a metronome: a strict alternation would read as a device rather than
   as a diary (the reason the rule is not `week % 2` — see lib/sprintSlots.ts). */
const alternating = heldFlags.every((held, i) => (i === 0 ? true : held !== heldFlags[i - 1]))
if (alternating) problems.push('isHeldByRule — the pattern is a strict alternation, which reads as a mechanism')

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
console.log(`✓ ${RULE_WEEKS} Mondays of the rule: every window half open, never 3 full in a row, stable, not a metronome`)
console.log('✓ the window slides past a run of held weeks rather than showing a full strip')
