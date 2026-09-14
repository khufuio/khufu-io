'use client'

import type { SprintSlot } from '@/lib/sprintSlots'
import { SPRINT_FORM_ANCHOR } from '@/lib/sprintAnchors'
import { useSprintContact } from '@/components/sprint/sprintContact'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'

/**
 * The calendar: the next Mondays and their state, and nothing else.
 *
 * ⛔ NO HEADING, NO EXPLANATION, NO COUNT. Adrien, 2026-09-13: the strip's whole
 * value is the impression it leaves, and commenting the mechanic destroys it.
 *
 * ⛔ A HELD WEEK IS REALLY HELD (decision cmu1qo9r). Only the Mondays listed in
 * `sprintHeldMondays` wear « Complet », and those are weeks Adrien blocks for
 * Khufu's own products — as unavailable to a client as a week that was sold. The
 * badge says the week is taken and never by whom: no client, no counter, no
 * number of sprints. Held chips are not links, because there is nothing to book.
 *
 * ⚠️ THE TWO STATES NOW READ APART AT A GLANCE, and that is the 2026-09-15
 * change. « Complet » used to be grey-on-grey at 70% opacity, which made a full
 * week look like a disabled control rather than like a week that is gone — so the
 * scarcity argument, which is the entire point of the strip, did not land. It is
 * now a pale red ground with a strong red text; « Disponible » keeps the accent.
 * ⚠️ BOTH PAIRS ARE AA AT THIS SIZE, and the ratios were computed, not eyeballed:
 * `--color-full-ink` (#a3161d) on `--color-full-soft` (#fdf1f1) is 7.1:1 for the
 * badge and the day number; the weekday and month lines sit at 80% of that ink
 * over the same ground, which lands at 5.0:1 — still AA for small text, while
 * keeping a hierarchy inside the chip. ⛔ The first draft used 62% and measured
 * 3.4:1, i.e. a fail: these are 10px uppercase labels, the smallest text on the
 * page. Re-compute before lightening the text or deepening the ground.
 *
 * ⚠️ IT IS A CLIENT COMPONENT because an open chip opens the contact modal
 * carrying ITS date, so the WhatsApp message and the confirmation both name the
 * week the visitor actually pointed at. The `href` fallback is preserved: with no
 * JavaScript, the chip is a plain anchor to the form — which is precisely the
 * link that broke in production when the anchor constant was read out of a client
 * module (lib/sprintAnchors.ts).
 */
export function SprintSlotStrip({
  slots,
  openLabel,
  heldLabel,
}: {
  slots: SprintSlot[]
  openLabel: string
  heldLabel: string
}) {
  const contact = useSprintContact()

  return (
    <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
      {slots.map((slot) => {
        const label = slot.held ? heldLabel : openLabel
        const date = (
          <time dateTime={slot.iso}>
            <span
              className={`block text-[10px] tracking-[0.12em] uppercase ${
                slot.held ? 'text-[color-mix(in_srgb,var(--color-full-ink)_80%,transparent)]' : 'text-[var(--color-muted)]'
              }`}
            >
              {slot.weekday}
            </span>
            <span
              className={`mt-0.5 block font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em] ${
                slot.held ? 'text-[var(--color-full-ink)]' : ''
              }`}
            >
              {slot.day}
            </span>
            <span
              className={`block text-[10px] tracking-[0.12em] uppercase ${
                slot.held ? 'text-[color-mix(in_srgb,var(--color-full-ink)_80%,transparent)]' : 'text-[var(--color-muted)]'
              }`}
            >
              {slot.month}
            </span>
          </time>
        )
        const state = (
          <span
            className={`mt-2 flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase ${
              slot.held ? 'text-[var(--color-full-ink)]' : 'text-[var(--color-accent-ink)]'
            }`}
          >
            <span
              aria-hidden
              className={`size-1.5 rounded-full ${slot.held ? 'bg-[var(--color-full-ink)]' : 'bg-[var(--color-accent)]'}`}
            />
            {label}
          </span>
        )

        return (
          <li key={slot.iso}>
            {slot.held ? (
              <div
                aria-label={`${label} — ${slot.dateLabel}`}
                className="rounded-[var(--radius-lg)] border border-[var(--color-full-line)] bg-[var(--color-full-soft)] px-2 py-3 text-center"
              >
                {date}
                {state}
              </div>
            ) : (
              <a
                href={`#${SPRINT_FORM_ANCHOR}`}
                aria-label={`${label} — ${slot.dateLabel}`}
                onClick={(e) => {
                  track('sprint_cta_clicked', { placement: 'slot', ...campaignProps() })
                  if (!contact) return
                  e.preventDefault()
                  contact.open({ placement: 'slot', week: slot.dateLabel })
                }}
                className="block rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white px-2 py-3 text-center transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]"
              >
                {date}
                {state}
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}
