import { localeHrefLang, type Locale } from '@/i18n/config'
import { sprintClosedMondays, sprintExcludedMondays } from '@/content/sprintLanding'

/**
 * The sprint calendar: every sprint starts on a MONDAY, one week is one slot and
 * one slot is one client (khufu HQ decisions cmu0fbad and cmu0fugh).
 *
 * The dated slot is the page's central argument — a week you can name turns an
 * abstract delay into a decision to take now.
 *
 * ⛔ WHAT MAKES IT HONEST, AND IT IS THE HALF THAT MATTERS.
 *
 * The strip shows four Mondays and two states: open, or full. What the page
 * never does, and must never start doing: say a CLIENT took the week, show a
 * booking counter, or publish a client count (decision cmu1qo9r). It says the
 * week is taken, never by whom.
 *
 * ⚠️ AND WHICH WEEKS ARE TAKEN IS NOW A RULE, NOT A LIST (2026-09-15, pass 4).
 * Adrien read the live page and found too many weeks open: « je veux environ
 * une sur deux, avec une règle déterministe et cohérente d'une visite à
 * l'autre ». `isHeldByRule` below is that rule — a pure function of the Monday
 * itself, so the same week reads the same way on every visit, from every
 * machine, for ever. The hand-maintained table it replaces had two defects that
 * a rule does not: it ran out (every week past 2027-04-05 showed open), and a
 * week could silently flip from full to open the day somebody edited it, which
 * is precisely the statement this page must never take back.
 *
 * ⛔ THE RULE IS ONLY TRUE IF ADRIEN HOLDS THOSE WEEKS. One week in two is
 * blocked for Khufu's own products, and a week he is building Traqio or Hive TCG
 * in is exactly as unavailable to a client as a week that was sold — that is
 * what makes « Complet » a fact rather than a device. The corollary is
 * operational, not cosmetic: a week shown full is not opened for a prospect who
 * asks for it on the grounds that it was "only marketing".
 *
 * ⛔ AND ONE STATE IS FORBIDDEN OUTRIGHT: a strip where every week is full.
 * Adrien, 2026-09-14: « zéro disponibilité affichée = impasse de conversion,
 * c'est le seul état à interdire par le code ». Under the rule this is true BY
 * CONSTRUCTION — see `isHeldByRule` for the proof — and
 * `scripts/checkSprintSlots.ts` re-proves it for every day over three years.
 *
 * ⚠️ Dates are COMPUTED, never written by hand. The landing is statically
 * generated, so it is revalidated hourly (see `revalidate` on the sprint page) —
 * otherwise these dates would freeze at build time and the page would be
 * advertising a Monday in the past a fortnight later, which tells a prospect
 * nobody is minding the shop.
 *
 * All arithmetic is in UTC: the page is prerendered on a server whose timezone is
 * not the visitor's, and "which day is it" must not depend on that. The sprint
 * itself starts Monday 06:00 UTC (decision cmu0fbad).
 */

const DAY_MS = 86_400_000
const WEEK_MS = 7 * DAY_MS

/** How many Mondays the page shows at a time. */
export const BOOKING_WINDOW_WEEKS = 4

/**
 * Bookings close five days before the Monday they are for.
 *
 * Day 0 — scoping call, written scope, signed quote — happens BEFORE the Monday
 * (decision cmu0fbad), and it cannot be squeezed into a long weekend. So a
 * Monday less than five days out is not sellable, is not offered as a start, and
 * drops out of the window on its own. The cutoff needs no maintenance and
 * nothing on the page has to explain it.
 */
const MIN_LEAD_DAYS = 5

/**
 * The Monday every week index is counted from. Arbitrary, fixed for ever:
 * moving it would re-roll which weeks are held, and a week that was full last
 * month must not be open this month.
 */
const EPOCH_MONDAY = Date.UTC(2026, 0, 5)

/** A continuous count of Mondays since `EPOCH_MONDAY` — negative before it. */
function weekIndex(iso: string): number {
  return Math.round((Date.parse(`${iso}T00:00:00Z`) - EPOCH_MONDAY) / WEEK_MS)
}

/**
 * Is this Monday held? One week in two — and, on screen, exactly two of the four.
 *
 * ⚠️ WHY IT IS NOT `week % 2`, WHICH IS WHAT ADRIEN SUGGESTED, AND NOT A HASH
 * EITHER. Three things had to be true at once and only one shape gives all three.
 *
 *   1. ~HALF THE WEEKS OPEN, ON THE STRIP — not just on average. The complaint
 *      was about what is on screen (« trop de semaines s'affichent
 *      disponibles »), so a rule that is 50% over a decade but shows three open
 *      weeks out of four today has not answered it. A pseudo-random draw per
 *      week does exactly that, which is why the first version of this was
 *      thrown away.
 *   2. NO METRONOME. `week % 2` gives open, full, open, full for ever. That is a
 *      mechanism and it reads as one — Adrien's own instruction on this strip
 *      (2026-09-14) was that a regular pattern « fait dispositif ». It also
 *      inherits the ISO calendar's 52/53-week wobble, which doubles a week once
 *      every few years for a reason nobody can explain.
 *   3. NEVER ZERO AVAILABILITY, by construction rather than by a test.
 *
 * So weeks are held in FORTNIGHTS: two held, two open, rolling. Exactly two of
 * any four consecutive Mondays are open — so the strip reads the same density
 * whatever day it is rendered, it can never be full, and it never has to slide.
 * The arrangement still changes from week to week as the window rolls (full,
 * open, open, full → open, open, full, full → …), so the visitor sees a diary
 * and not a comb.
 *
 * ⚠️ AND THE FORTNIGHT IS THE HONEST UNIT, which is the argument for it over
 * single weeks. The badge is only true because Adrien really does block those
 * weeks for Khufu's own products (decision cmu1qo9r), and nobody builds a
 * product in isolated single weeks. Two weeks on his own products, two weeks
 * open to clients, is a rhythm that can actually be kept — which matters,
 * because everything this strip claims rests on it being kept.
 *
 * Pure, and a function of the date alone: no stored state, no draw, no cookie.
 * Two visitors on two continents see the same calendar, and so does the same
 * visitor a month later. ⛔ The phase is arbitrary but FROZEN: flipping it, or
 * moving `EPOCH_MONDAY`, re-rolls the whole calendar and re-opens weeks the page
 * has already called full.
 */
export function isHeldByRule(iso: string): boolean {
  const fortnight = Math.floor(weekIndex(iso) / 2)
  return (fortnight & 1) === 0
}

export type SprintSlot = {
  /** `YYYY-MM-DD`, for the <time datetime> attribute. */
  iso: string
  /** Short weekday, localized — "lun.", "Mon". */
  weekday: string
  /** Day of the month — "22". */
  day: string
  /** Short month, localized — "sept.", "Sep". */
  month: string
  /** Full date without the year — "22 septembre", "September 22". */
  dateLabel: string
  /** The week is held and shows as full. */
  held: boolean
}

/** The next `count` Mondays a sprint could start on: far enough out for a day 0, not excluded. */
export function nextSprintMondays(count: number, from: Date = new Date()): Date[] {
  const today = Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate())
  const weekday = new Date(today).getUTCDay() // 0 = Sunday, 1 = Monday

  // Strictly in the future: a sprint starting today is already running.
  let offset = (8 - weekday) % 7 || 7
  // …and far enough out to fit a day 0 in front of it.
  if (offset < MIN_LEAD_DAYS) offset += 7

  const excluded = new Set(sprintExcludedMondays)
  const mondays: Date[] = []
  // Bounded: excluding a year of Mondays is not a configuration, it is a bug.
  for (let week = 0; mondays.length < count && week < count + 52; week += 1) {
    const date = new Date(today + (offset + week * 7) * DAY_MS)
    if (!excluded.has(date.toISOString().slice(0, 10))) mondays.push(date)
  }
  return mondays
}

/**
 * How far the window may slide looking for a sellable week before giving up.
 *
 * Under the rule alone it never slides at all (see `isHeldByRule`). It exists
 * for `sprintClosedMondays`, the hand list that can still close a week the rule
 * left open — and closing a year of consecutive Mondays by hand is not a
 * configuration, it is a mistake.
 */
const MAX_SLIDE_WEEKS = 52

/** Is this Monday full — by the rule, or because it was closed by hand? */
export function isHeld(iso: string): boolean {
  return isHeldByRule(iso) || iso in sprintClosedMondays
}

/** The booking window, formatted for the visitor's locale. */
export function sprintSlots(locale: Locale, count = BOOKING_WINDOW_WEEKS, from?: Date): SprintSlot[] {
  const tag = localeHrefLang[locale]
  const part = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(tag, { ...options, timeZone: 'UTC' })

  const weekday = part({ weekday: 'short' })
  const day = part({ day: 'numeric' })
  const month = part({ month: 'short' })
  const dateLabel = part({ day: 'numeric', month: 'long' })

  /*
   * Pull enough Mondays to slide over a run of held ones, then take the first
   * window of `count` that contains a week we can actually sell. The rule never
   * needs the slide; the hand list can.
   */
  const candidates = nextSprintMondays(count + MAX_SLIDE_WEEKS, from).map((date) => {
    const iso = date.toISOString().slice(0, 10)
    return {
      iso,
      weekday: weekday.format(date),
      day: day.format(date),
      month: month.format(date),
      dateLabel: dateLabel.format(date),
      held: isHeld(iso),
    }
  })

  return pickSellableWindow(candidates, count)
}

/**
 * The first window of `count` consecutive Mondays that contains a week we can
 * actually sell.
 *
 * Exported because it is the rule Adrien asked to be enforced BY CODE rather
 * than by the shape of the data — « zéro disponibilité affichée = impasse de
 * conversion » — and a rule that only ever runs on data that already satisfies
 * it is a rule nobody has tested. `scripts/checkSprintSlots.ts` drives it with a
 * held run long enough to make it slide.
 *
 * Sliding by one drops the nearest date and brings a new one in at the end,
 * which is exactly what the J-5 cutoff does on its own as the weeks pass.
 */
export function pickSellableWindow<T extends { held: boolean }>(candidates: readonly T[], count: number): T[] {
  for (let start = 0; start + count <= candidates.length; start += 1) {
    const window = candidates.slice(start, start + count)
    if (window.some((slot) => !slot.held)) return window
  }
  // Every Monday we looked at is held: show the nearest weeks rather than
  // nothing. A blank calendar is worse than a full one, and this state means
  // somebody mis-edited the hand list — see MAX_SLIDE_WEEKS.
  return candidates.slice(0, count)
}

/**
 * The week the CTA points at: the nearest one that is actually open.
 *
 * ⚠️ IT NO LONGER NAMES A DATE IN A BUTTON LABEL (2026-09-15, pass 4 — Adrien:
 * « ça présume la date que veut le prospect »). The call being booked is a
 * 30-minute scoping call, not the sprint itself, so the label stays neutral and
 * this week travels as CONTEXT instead: the chip in the modal, the prefilled
 * WhatsApp message, the callback note, the analytics property.
 *
 * Falls back to nothing rather than to a held week — carrying a week the strip
 * right above it calls full is the one mistake this whole file exists to
 * prevent.
 */
export function firstOpenSlot(slots: readonly SprintSlot[]): SprintSlot | undefined {
  return slots.find((slot) => !slot.held)
}
