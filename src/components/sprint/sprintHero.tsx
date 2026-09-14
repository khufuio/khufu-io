import { Container } from '@/components/ui/container'
import { SprintCta, SPRINT_FORM_ANCHOR } from '@/components/sprint/sprintCta'
import { SprintBuildSequence } from '@/components/sprint/sprintBuildSequence'
import type { SprintSlot } from '@/lib/sprintSlots'

/**
 * The first screen of the Sprint V1 landing — the one thing a visitor coming
 * from an ad judges before reading a word.
 *
 * ⚠️ WHY IT LOOKS LIKE THIS, AND WHAT MUST NOT COME BACK.
 *
 * It used to be a dark canvas, and Adrien was right about why that failed
 * (2026-09-13): « tu as juste mis en dark, là où tout le reste est light […]
 * c'est pas réfléchi ». Dark was decoration, not a decision. The page now runs
 * ONE system — paper ground, one accent, a lot of air — and the dark is spent
 * deliberately, once, on the products section.
 *
 * ⛔ THE HERO SHOWS THE BUILD, NOT A FINISHED PRODUCT. It used to be a capture of
 * Clokizi, and Adrien took that apart on 2026-09-14: « tu trouves ça pertinent
 * que ce soit la première image ? […] un truc qui fait direct comprendre l'offre
 * en mode on fast build un truc de fou ». What is being sold is speed of
 * construction, and a finished screenshot is the one thing every agency can also
 * show. So the visual is a day 1 → day 7 sequence ending on a real capture — see
 * sprintBuildSequence.tsx for the honesty and performance bounds on it.
 *
 * ⛔ AND IT EXPLAINS NOTHING ABOUT THE SLOTS. The strip is dates and their state,
 * full stop. Adrien: « ça perd l'avantage des slots ». The "full" badge is a
 * fact, not a device — see lib/sprintSlots.ts before touching it.
 *
 * ⚠️ MOBILE ORDER IS DELIBERATE, and it is the acceptance criterion for the whole
 * page: title → one line → button → SEQUENCE → figures → dates. No screen of this
 * page may be nothing but text at 390×844, and on the first screen the visual is
 * what guarantees it.
 */

export type SprintHeroFigure = { value: React.ReactNode; label: string }

export function SprintHero({
  kicker,
  title,
  subtitle,
  figures,
  ctaLabel,
  ctaLabelSlot,
  ctaAvailable,
  ctaNote,
  slots,
  slotOpenLabel,
  slotHeldLabel,
  shot,
  buildDayLabel,
}: {
  kicker: string
  title: string
  subtitle: string
  /** Delay, price, and the one client a week — the only figures this page allows. */
  figures: SprintHeroFigure[]
  ctaLabel: string
  /** Dated variant of the CTA, carrying `{date}` (decision cmu0fugh). */
  ctaLabelSlot: string
  /** The state of that week, on its own line. Never inside the button label. */
  ctaAvailable: string
  ctaNote: string
  /** The booking window — the next Mondays, computed, with their state. */
  slots: SprintSlot[]
  slotOpenLabel: string
  slotHeldLabel: string
  shot: { src: string; alt: string; domain: string }
  buildDayLabel: string
}) {
  /*
   * The CTA names the week it is selling (decision cmu0fugh) and it names the
   * ACTION, not the state — Adrien, 2026-09-14: « pas sûr que les CTA du style
   * "Slot du 21 septembre encore disponible" soit vraiment vendeur ». The week
   * it points at is the nearest OPEN one, never a held one; it falls back to the
   * plain label if the window ever comes back with nothing open, because a
   * button naming no week beats a button naming a week we cannot sell.
   */
  const next = slots.find((slot) => !slot.held)
  const ctaText = next ? ctaLabelSlot.replace('{date}', next.dateLabel) : ctaLabel

  return (
    <section className="sprint-hero relative isolate overflow-hidden">
      <span aria-hidden className="sprint-hero-grid" />
      <span aria-hidden className="sprint-hero-glow" />

      <Container className="relative grid gap-10 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:grid-cols-[1fr_1.04fr] lg:items-start lg:gap-x-16 lg:gap-y-9 lg:pt-20 lg:pb-28">
        {/* Text + action. On a phone this is everything above the sequence. */}
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
            <span aria-hidden className="h-px w-7 bg-[var(--color-accent)]" />
            {kicker}
          </p>

          <h1 className="mt-5 font-[family-name:var(--font-display)] text-[length:clamp(2.5rem,5.4vw,4.25rem)]/[1.0] font-bold tracking-[-0.035em] text-balance">
            {title}
          </h1>

          <p className="mt-5 max-w-md text-lg/[1.55] text-[var(--color-ink-2)] text-pretty">{subtitle}</p>

          {/* Full width and centred on a phone, inline on a desktop. Adrien on
              the old button: « surtout en bouton align left comme ça ». */}
          <div className="mt-8 text-center sm:text-left">
            <SprintCta placement="hero" label={ctaText} className="w-full sm:w-auto" />
            {/* Two short lines, never one long one. Joined with a separator
                this wrapped to three lines at 390px — an orphan "h." on the
                last — and the wrap count changed when the webfont swapped in,
                which is a layout shift on the first screen for a cosmetic
                comma. Measured: it was the page's only CLS contributor. */}
            {next && (
              <p className="mt-3 text-sm font-medium text-[var(--color-accent-ink)]">{ctaAvailable}</p>
            )}
            <p className="mt-1 text-sm text-[var(--color-muted)]">{ctaNote}</p>
          </div>
        </div>

        {/* The build, shown. Second in the DOM so it lands directly under the
            button on a phone — the first screen is never text alone. */}
        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
          <SprintBuildSequence shot={shot} dayLabel={buildDayLabel} />
        </div>

        {/* The figures and the calendar: two graphic objects, no sentence. */}
        <div className="lg:col-start-1 lg:row-start-2">
          <dl className="grid grid-cols-3 divide-x divide-[var(--color-line)] border-y border-[var(--color-line)] py-5">
            {figures.map((figure) => (
              <div key={figure.label} className="px-3 first:pl-0 last:pr-0">
                <dt className="sr-only">{figure.label}</dt>
                <dd>
                  <p className="font-[family-name:var(--font-display)] text-[length:clamp(1.5rem,5.2vw,2.25rem)]/[1.05] font-bold tracking-[-0.03em] whitespace-nowrap">
                    {figure.value}
                  </p>
                  <p className="mt-1.5 text-[11px]/[1.35] tracking-wide text-[var(--color-muted)] uppercase">
                    {figure.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

          <SprintSlotStrip slots={slots} openLabel={slotOpenLabel} heldLabel={slotHeldLabel} />
        </div>
      </Container>
    </section>
  )
}

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
 */
function SprintSlotStrip({
  slots,
  openLabel,
  heldLabel,
}: {
  slots: SprintSlot[]
  openLabel: string
  heldLabel: string
}) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
      {slots.map((slot) => {
        const label = slot.held ? heldLabel : openLabel
        const date = (
          <time dateTime={slot.iso}>
            <span className="block text-[10px] tracking-[0.12em] text-[var(--color-muted)] uppercase">
              {slot.weekday}
            </span>
            <span className="mt-0.5 block font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em]">
              {slot.day}
            </span>
            <span className="block text-[10px] tracking-[0.12em] text-[var(--color-muted)] uppercase">
              {slot.month}
            </span>
          </time>
        )
        const state = (
          <span
            className={`mt-2 flex items-center justify-center gap-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase ${
              slot.held ? 'text-[var(--color-muted)]' : 'text-[var(--color-accent-ink)]'
            }`}
          >
            <span
              aria-hidden
              className={`size-1.5 rounded-full ${
                slot.held
                  ? 'bg-[color-mix(in_srgb,var(--color-muted)_55%,transparent)]'
                  : 'bg-[var(--color-accent)]'
              }`}
            />
            {label}
          </span>
        )

        return (
          <li key={slot.iso}>
            {slot.held ? (
              <div
                aria-label={`${label} — ${slot.dateLabel}`}
                className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-line)] bg-[var(--color-paper-2)] px-2 py-3 text-center opacity-70"
              >
                {date}
                {state}
              </div>
            ) : (
              <a
                href={`#${SPRINT_FORM_ANCHOR}`}
                aria-label={`${label} — ${slot.dateLabel}`}
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
