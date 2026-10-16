import type { Locale } from '@/i18n/config'
import type { SprintTimelineStep } from '@/components/sprint/sprintTimeline'
import { sprintLanding } from '@/content/sprintLanding'

/**
 * The sprint week, day 0 → day 7, resolved for one locale — THE single source
 * of the run for every page that tells it (/sprint-v1 draws it, /methode lists
 * it). The copy itself is authored once, in all ten locales, in
 * `sprintLanding.timeline` (decision cmu0fbad: Monday → Sunday, Friday is the
 * client's acceptance-testing day, the weekend applies its fixes, production by
 * Sunday evening).
 *
 * ⛔ DO NOT GIVE ANOTHER PAGE ITS OWN COPY OF THE DAYS. /methode used to carry
 * one in `dict.method.days`, translated separately in the ten dictionaries, and
 * it drifted from the landing as soon as the calendar changed. Change the week
 * in `sprintLanding.timeline` and every page follows.
 */
export function sprintRunSteps(locale: Locale): SprintTimelineStep[] {
  const t = sprintLanding.timeline
  return [
    {
      day: t.dayZero.day[locale],
      weekday: t.dayZero.weekday[locale],
      title: t.dayZero.title[locale],
      body: t.dayZero.body[locale],
      // Day 0 is the client's: their brief, their answers, their signature.
      // Adrien, 2026-09-14: « ajoute un badge "Vous" au jour 0 ».
      actor: 'you',
    },
    ...t.days.map((d) => ({
      day: d.day[locale],
      weekday: d.weekday[locale],
      title: d.title[locale],
      body: d.body?.[locale],
      lanes: d.lanes ? { you: d.lanes.you[locale], us: d.lanes.us[locale] } : undefined,
      // Every other day is ours. Friday says so twice, on two tracks.
      actor: 'us' as const,
    })),
  ]
}

/** One step as plain text, for the HowTo JSON-LD both pages emit. */
export function sprintRunStepText(step: SprintTimelineStep): string {
  return step.body ?? [step.lanes?.you, step.lanes?.us].filter(Boolean).join(' ')
}
