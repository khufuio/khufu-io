import { localeHrefLang, type Locale } from '@/i18n/config'
import { sprintExcludedMondays } from '@/content/sprintLanding'

/**
 * The sprint calendar: every sprint starts on a MONDAY, one week is one slot and
 * one slot is one client (khufu HQ decisions cmu0fbad and cmu0fugh).
 *
 * The dated slot is the page's central argument — "slot of 28 September still
 * open" turns an abstract delay into a decision to take now.
 *
 * ⛔ WHAT MAKES IT HONEST, AND IT IS THE HALF THAT MATTERS.
 *
 * The page shows the next three Mondays AS OPEN, and says nothing else. It never
 * labels a week "booked", "full" or "2 places left" — no booking state exists
 * anywhere in this codebase, Adrien explicitly refused a tool to maintain one
 * (cmu0fugh), and a "full" badge on a week that is free is a false claim anyone
 * can check by reloading the page two weeks running. On the one page carrying an
 * ad budget, that is the most expensive kind of mistake. The calendar effect
 * comes from the DATE, not from a badge.
 *
 * The one lever is `sprintExcludedMondays` in the content file: put a Monday
 * there and it drops out of the window, showing the next one instead. A config
 * value, not a feature.
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
export const BOOKING_WINDOW_WEEKS = 3

/**
 * Day 0 — scoping call, written scope, signed quote — happens BEFORE the Monday
 * (decision cmu0fbad). A Monday less than three days out could not have a day 0
 * in front of it, so it is not offered as a start.
 */
const MIN_LEAD_DAYS = 3

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
}

/** The next `count` bookable Mondays: future enough for a day 0, not excluded. */
export function nextSprintMondays(count: number, from: Date = new Date()): Date[] {
  const today = Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate())
  const weekday = new Date(today).getUTCDay() // 0 = Sunday, 1 = Monday

  // Strictly in the future: a sprint starting today is already running.
  let offset = (8 - weekday) % 7 || 7
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

/** The booking window, formatted for the visitor's locale. */
export function sprintSlots(locale: Locale, count = BOOKING_WINDOW_WEEKS, from?: Date): SprintSlot[] {
  const tag = localeHrefLang[locale]
  const part = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(tag, { ...options, timeZone: 'UTC' })

  const weekday = part({ weekday: 'short' })
  const day = part({ day: 'numeric' })
  const month = part({ month: 'short' })
  const dateLabel = part({ day: 'numeric', month: 'long' })

  return nextSprintMondays(count, from).map((date) => ({
    iso: date.toISOString().slice(0, 10),
    weekday: weekday.format(date),
    day: day.format(date),
    month: month.format(date),
    dateLabel: dateLabel.format(date),
  }))
}
