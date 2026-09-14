import { Container } from '@/components/ui/container'
import { SprintCta, SPRINT_FORM_ANCHOR } from '@/components/sprint/sprintCta'
import { ProductShot } from '@/components/sprint/productShot'
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
 * deliberately, once, on the products section. The "pro / luxury" register comes
 * from space and restraint, not from a black background.
 *
 * ⛔ THE HERO SHOWS THE PRODUCT, IT DOES NOT DESCRIBE IT. A real capture of a
 * site that is online, in a browser frame, plus three figures and a dated
 * button. A prospect has to get the offer in three seconds without reading a
 * paragraph, so there is exactly one sentence here and it stays one sentence.
 *
 * ⛔ AND IT EXPLAINS NOTHING ABOUT THE SLOTS. The strip is dates and their state,
 * full stop — no "a sprint starts on a Monday and only three weeks are open".
 * Adrien: « ça perd l'avantage des slots ». Silence is not a false claim: no week
 * is ever labelled taken (decision cmu0fugh).
 *
 * ⚠️ MOBILE ORDER IS DELIBERATE, and it is the acceptance criterion for the whole
 * page: title → one line → button → CAPTURE → figures → dates. No screen of this
 * page may be nothing but text at 390×844, and on the first screen the capture is
 * what guarantees it.
 *
 * ⚠️ PERFORMANCE. The capture is the LCP element and is served pre-encoded
 * (AVIF ~18 kB) with its dimensions set; the decorative layers are two CSS
 * gradients on an aria-hidden element whose only animated property is
 * `transform`. Nothing above the fold is hidden behind a scroll reveal.
 */

export type SprintHeroFigure = { value: React.ReactNode; label: string }

export function SprintHero({
  kicker,
  title,
  subtitle,
  figures,
  ctaLabel,
  ctaLabelSlot,
  ctaNote,
  slots,
  slotOpenLabel,
  shot,
}: {
  kicker: string
  title: string
  subtitle: string
  /** Delay, price, and the one client a week — the only figures this page allows. */
  figures: SprintHeroFigure[]
  ctaLabel: string
  /** Dated variant of the CTA, carrying `{date}` (decision cmu0fugh). */
  ctaLabelSlot: string
  ctaNote: string
  /** The booking window — the next open Mondays, computed. */
  slots: SprintSlot[]
  slotOpenLabel: string
  shot: { src: string; alt: string; domain: string }
}) {
  /*
   * The CTA names the week it is selling (decision cmu0fugh): a dated slot turns
   * an abstract delay into a decision to take now. It falls back to the plain
   * label only if the window ever comes back empty — a label naming no week beats
   * a label naming a wrong one.
   */
  const next = slots[0]
  const ctaText = next ? ctaLabelSlot.replace('{date}', next.dateLabel) : ctaLabel

  return (
    <section className="sprint-hero relative isolate overflow-hidden">
      <span aria-hidden className="sprint-hero-grid" />
      <span aria-hidden className="sprint-hero-glow" />

      <Container className="relative grid gap-10 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:grid-cols-[1fr_1.04fr] lg:items-start lg:gap-x-16 lg:gap-y-9 lg:pt-20 lg:pb-28">
        {/* Text + action. On a phone this is everything above the capture. */}
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
            <span aria-hidden className="h-px w-7 bg-[var(--color-accent)]" />
            {kicker}
          </p>

          <h1 className="mt-5 font-[family-name:var(--font-display)] text-[length:clamp(2.5rem,5.4vw,4.25rem)]/[1.0] font-bold tracking-[-0.035em] text-balance">
            {title}
          </h1>

          <p className="mt-5 max-w-md text-lg/[1.55] text-[var(--color-ink-2)] text-pretty">{subtitle}</p>

          <div className="mt-8">
            <SprintCta placement="hero" label={ctaText} className="w-full sm:w-auto" />
            <p className="mt-3 text-sm text-[var(--color-muted)]">{ctaNote}</p>
          </div>
        </div>

        {/* The product, shown. Second in the DOM so it lands directly under the
            button on a phone — the first screen is never text alone. */}
        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
          <ProductShot
            src={shot.src}
            alt={shot.alt}
            domain={shot.domain}
            priority
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="sprint-shot--hero"
          />
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

          <SprintSlotStrip slots={slots} openLabel={slotOpenLabel} />
        </div>
      </Container>
    </section>
  )
}

/**
 * The calendar: the next open Mondays, and nothing else.
 *
 * ⛔ NO HEADING, NO EXPLANATION, NO COUNT. Adrien, 2026-09-13: the strip's whole
 * value is the impression it leaves, and commenting the mechanic destroys it.
 * It shows dates and one state.
 *
 * ⛔ EVERY CHIP IS OPEN, AND NONE IS EVER LABELLED TAKEN. No booking state exists
 * (decision cmu0fugh — Adrien refused a tool to maintain), so the page states
 * which weeks are open and never claims the others are gone: a "full" badge on a
 * free week is a false claim anyone can check by reloading the page two weeks
 * running. The single lever is `sprintExcludedMondays`.
 *
 * Each chip is a link to the form: the dated slot IS the call to action.
 */
function SprintSlotStrip({ slots, openLabel }: { slots: SprintSlot[]; openLabel: string }) {
  return (
    <ul className="mt-6 grid grid-cols-3 gap-2.5">
      {slots.map((slot) => (
        <li key={slot.iso}>
          <a
            href={`#${SPRINT_FORM_ANCHOR}`}
            aria-label={`${openLabel} — ${slot.dateLabel}`}
            className="block rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white px-2 py-3 text-center transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]"
          >
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
            <span className="mt-2 flex items-center justify-center gap-1.5 text-[10px] font-semibold tracking-[0.1em] text-[var(--color-accent-ink)] uppercase">
              <span aria-hidden className="size-1.5 rounded-full bg-[var(--color-accent)]" />
              {openLabel}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
