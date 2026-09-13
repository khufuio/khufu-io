import { Container } from '@/components/ui/container'
import { SprintCta, SPRINT_FORM_ANCHOR } from '@/components/sprint/sprintCta'
import type { SprintSlot } from '@/lib/sprintSlots'

/**
 * The first screen of the Sprint V1 landing — the one thing a visitor coming
 * from an ad judges before reading a word.
 *
 * ⚠️ WHY IT LOOKS LIKE THIS, AND WHAT MUST NOT BE ADDED.
 *
 * The page used to read as a well-set document: correct, and flat. What is sold
 * here is a product WE build, at $17k, to someone who decides alone and fast —
 * so the first screen has to carry the level of the work before it carries the
 * argument. The register is deliberately PRO / LUXURY, not "startup that moves":
 *   - one dark canvas, hairlines, a single accent (#4C30FF), lots of air;
 *   - motion so slow it reads as depth rather than as animation (the grid drifts
 *     one cell every 90s);
 *   - a fine grain, which is what keeps a flat dark surface from looking cheap.
 * ⛔ No particles, no animated blob, no loud gradient, no bouncing micro-
 * interaction. Anything that reads "template" costs more than it returns here.
 *
 * ⚠️ PERFORMANCE. Every layer is CSS — no image, no library, no extra request —
 * and the only animated property is `transform` on a decorative, aria-hidden
 * element. Nothing above the fold is hidden behind a scroll reveal, so nothing
 * here can delay LCP, and nothing can shift layout (this page measures CLS 0).
 *
 * ⚠️ MOBILE FIRST, AND THE ORDER IS DELIBERATE. LinkedIn Ads traffic is mostly
 * on a phone: title → subtitle → the two figures (delay and price) → CTA. The
 * price and the delay must stay readable on the first screen, and the button has
 * to follow them directly. The form is the hero's right column on desktop only.
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
  trust,
  slots,
  slotsTitle,
  slotsNote,
  slotOpenLabel,
  formTitle,
  form,
}: {
  kicker: string
  title: string
  subtitle: string
  /** Delay and price, in that order — the two numbers allowed on this page. */
  figures: [SprintHeroFigure, SprintHeroFigure]
  ctaLabel: string
  /** Dated variant of the CTA, carrying `{date}` — see the note on the button. */
  ctaLabelSlot: string
  ctaNote: string
  trust: string
  /** The booking window — the next open Mondays, computed. */
  slots: SprintSlot[]
  slotsTitle: string
  slotsNote: string
  slotOpenLabel: string
  /** Heading above the form card — the card used to open straight on "Name". */
  formTitle: string
  /** The lead form, rendered by the page (it is a client component). */
  form: React.ReactNode
}) {
  /*
   * The CTA names the week it is selling (decision cmu0fugh): a dated slot turns
   * an abstract delay into a decision to take now. It names the next open Monday,
   * and falls back to the plain label only if the window somehow comes back empty
   * — a label naming no week beats a label naming a wrong one.
   */
  const next = slots[0]
  const ctaText = next ? ctaLabelSlot.replace('{date}', next.dateLabel) : ctaLabel

  return (
    <section className="sprint-hero relative isolate overflow-hidden bg-[#0b0b0e] text-[var(--color-paper)]">
      {/* Three decorative layers, in depth order. All aria-hidden: they carry no
          information, only the impression the copy then has to live up to. */}
      <span aria-hidden className="sprint-hero-grid" />
      <span aria-hidden className="sprint-hero-glow" />
      <span aria-hidden className="sprint-hero-grain" />

      <Container className="relative grid gap-12 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[color-mix(in_srgb,var(--color-paper)_62%,transparent)] uppercase">
            <span aria-hidden className="h-px w-7 bg-[var(--color-accent)]" />
            {kicker}
          </p>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[length:clamp(2.4rem,5vw,4.2rem)]/[1.02] font-bold tracking-[-0.03em] text-balance">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-lg/[1.6] text-[color-mix(in_srgb,var(--color-paper)_72%,transparent)] text-pretty">
            {subtitle}
          </p>

          {/* Side by side on a phone: stacked, the two figures pushed the CTA off
              the first screen, and price + delay are exactly what has to be read
              before the button. */}
          <dl className="mt-9 grid grid-cols-2 gap-x-6 sm:flex sm:flex-wrap sm:gap-x-12 sm:gap-y-6">
            {figures.map((figure) => (
              <div key={figure.label} className="border-l-2 border-[var(--color-accent)] pl-4">
                <dt className="sr-only">{figure.label}</dt>
                <dd>
                  <p className="font-[family-name:var(--font-display)] text-[length:clamp(1.9rem,3.2vw,2.5rem)] font-bold tracking-[-0.02em]">
                    {figure.value}
                  </p>
                  <p className="mt-1 max-w-[16ch] text-sm text-[color-mix(in_srgb,var(--color-paper)_55%,transparent)]">
                    {figure.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 lg:hidden">
            <SprintCta placement="hero" label={ctaText} className="w-full sm:w-auto" />
            <p className="mt-3 max-w-sm text-sm text-[color-mix(in_srgb,var(--color-paper)_55%,transparent)]">
              {ctaNote}
            </p>
          </div>

          <SprintSlotStrip
            slots={slots}
            title={slotsTitle}
            note={slotsNote}
            openLabel={slotOpenLabel}
          />

          <p className="mt-8 max-w-md text-sm text-[color-mix(in_srgb,var(--color-paper)_50%,transparent)] text-pretty">
            {trust}
          </p>
        </div>

        {/* On desktop the form is the hero's right column: cold traffic should
            never have to scroll to find the action. On the dark canvas the white
            card reads as the one thing to touch. */}
        <div className="hidden lg:block">
          <p className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-balance">
            {formTitle}
          </p>
          {form}
          <p className="mt-3 text-center text-sm text-[color-mix(in_srgb,var(--color-paper)_55%,transparent)]">
            {ctaNote}
          </p>
        </div>
      </Container>
    </section>
  )
}

/**
 * The calendar, staged: the next open Mondays.
 *
 * ⛔ EVERY CHIP IS OPEN, AND NONE IS EVER LABELLED TAKEN. No booking state exists
 * (decision cmu0fugh — Adrien refused a tool to maintain), so the page states
 * which weeks are open and never claims the others are gone: a "full" badge on a
 * free week is a false claim anyone can check by reloading the page two weeks
 * running. The scarcity effect comes from the DATE and from showing only three
 * weeks, both of which are true. The single lever is `sprintExcludedMondays`.
 *
 * Each chip is a link to the form: the dated slot IS the call to action.
 */
function SprintSlotStrip({
  slots,
  title,
  note,
  openLabel,
}: {
  slots: SprintSlot[]
  title: string
  note: string
  openLabel: string
}) {
  return (
    <div className="mt-10 border-t border-[color-mix(in_srgb,var(--color-paper)_14%,transparent)] pt-7">
      <p className="text-xs font-semibold tracking-[0.16em] text-[color-mix(in_srgb,var(--color-paper)_55%,transparent)] uppercase">
        {title}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {slots.map((slot) => (
          <li key={slot.iso}>
            <a
              href={`#${SPRINT_FORM_ANCHOR}`}
              aria-label={`${openLabel} — ${slot.dateLabel}`}
              className="block min-w-[5.25rem] rounded-[var(--radius-lg)] border border-[color-mix(in_srgb,var(--color-paper)_18%,transparent)] bg-[color-mix(in_srgb,var(--color-paper)_5%,transparent)] px-4 py-3 text-center transition-colors hover:border-[var(--color-accent)] hover:bg-[color-mix(in_srgb,var(--color-accent)_16%,transparent)]"
            >
              <time dateTime={slot.iso}>
                <span className="block text-[11px] tracking-[0.12em] text-[color-mix(in_srgb,var(--color-paper)_50%,transparent)] uppercase">
                  {slot.weekday}
                </span>
                <span className="mt-0.5 block font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em]">
                  {slot.day}
                </span>
                <span className="block text-[11px] tracking-[0.12em] text-[color-mix(in_srgb,var(--color-paper)_50%,transparent)] uppercase">
                  {slot.month}
                </span>
              </time>
              <span className="mt-2 block text-[10px] font-semibold tracking-[0.12em] text-[color-mix(in_srgb,var(--color-accent)_70%,white)] uppercase">
                {openLabel}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 max-w-md text-sm text-[color-mix(in_srgb,var(--color-paper)_55%,transparent)] text-pretty">
        {note}
      </p>
    </div>
  )
}
