import { localeHrefLang, type Locale } from '@/i18n/config'
import { sprintExcludedMondays, sprintHeldMondays } from '@/content/sprintLanding'

/**
 * The sprint calendar: every sprint starts on a MONDAY, one week is one slot and
 * one slot is one client (khufu HQ decisions cmu0fbad and cmu0fugh).
 *
 * The dated slot is the page's central argument — a week you can name turns an
 * abstract delay into a decision to take now.
 *
 * ⛔ WHAT MAKES IT HONEST, AND IT IS THE HALF THAT MATTERS.
 *
 * The strip shows four Mondays and two states: open, or full. A week is full
 * when it appears in `sprintHeldMondays`, and those weeks are genuinely held —
 * Adrien blocks them for Khufu's own products, and a week he is building in is
 * exactly as unavailable as a week that was sold (decision cmu1qo9r). So the
 * badge is a fact. What the page never does, and must never start doing: say a
 * CLIENT took the week, show a booking counter, or publish a client count. It
 * says the week is taken, never by whom.
 *
 * There are two levers and they are not the same thing:
 *   - `sprintHeldMondays` — the week is SHOWN, labelled full.
 *   - `sprintExcludedMondays` — the week is not shown at all (holidays), and the
 *     window slides on to the next Monday instead.
 *
 * ⛔ AND ONE STATE IS FORBIDDEN OUTRIGHT: a strip where every week is full.
 * Adrien, 2026-09-14: « zéro disponibilité affichée = impasse de conversion,
 * c'est le seul état à interdire par le code ». It is not a data rule, because
 * data drifts — `sprintSlots` slides the window forward a Monday at a time until
 * a sellable week is in it, so the near dates roll off the front and a new open
 * one appears at the end. `scripts/checkSprintSlots.ts` proves it holds for
 * every day over several years.
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
  /** The week is held and shows as full. See `sprintHeldMondays`. */
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
 * Holding a year of consecutive Mondays is not a configuration, it is a mistake,
 * and at that point showing the window unchanged is more useful than looping.
 */
const MAX_SLIDE_WEEKS = 52

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
   * window of `count` that contains a week we can actually sell. Sliding by one
   * drops the nearest date and brings a new one in at the end, which is exactly
   * what happens on its own as the J-5 cutoff walks forward — the guard just
   * makes it true on the first render too, whatever the table says.
   */
  const candidates = nextSprintMondays(count + MAX_SLIDE_WEEKS, from).map((date) => {
    const iso = date.toISOString().slice(0, 10)
    return {
      iso,
      weekday: weekday.format(date),
      day: day.format(date),
      month: month.format(date),
      dateLabel: dateLabel.format(date),
      held: iso in sprintHeldMondays,
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
  // somebody mis-edited the table — see MAX_SLIDE_WEEKS.
  return candidates.slice(0, count)
}

/**
 * The week the CTA sells: the nearest one that is actually open.
 *
 * Falls back to nothing rather than to a held week — a button offering to book a
 * week the strip right above it calls full is the one mistake this whole file
 * exists to prevent.
 */
export function firstOpenSlot(slots: readonly SprintSlot[]): SprintSlot | undefined {
  return slots.find((slot) => !slot.held)
}
