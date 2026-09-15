import { Container } from '@/components/ui/container'
import { SprintCta } from '@/components/sprint/sprintCta'
import { SprintBuildSequence } from '@/components/sprint/sprintBuildSequence'
import { SprintSlotStrip } from '@/components/sprint/sprintSlotStrip'
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
 * ⚠️ THE SEQUENCE ENDS ON TRAQIO SINCE 2026-09-15, not on Clokizi — Adrien's
 * call, and the reason is the only one that matters on a first screen: it is the
 * better-looking product. ⛔ It is a DIFFERENT capture from the one on Traqio's
 * own card below (home page here, pricing page there): the same screenshot twice
 * reads as a template rather than as two things.
 *
 * ⛔ THE HERO SHOWS A WHOLE PRODUCT BEING BUILT AND PUT ONLINE. It used to be a
 * capture of Clokizi, which Adrien took apart on 2026-09-14 (« un truc qui fait
 * direct comprendre l'offre en mode on fast build un truc de fou »), and the
 * first sequence that replaced it drew a single screen — which he then took apart
 * too, on 2026-09-15: « il manque pas l'app et le showcase ? et aussi montrer le
 * côté infra, CD… ». The sequence now delivers an ENSEMBLE and then ships it.
 * See sprintBuildSequence.tsx for the honesty and performance bounds on it.
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
  ctaNote,
  slots,
  slotOpenLabel,
  slotHeldLabel,
  shot,
}: {
  kicker: string
  title: string
  subtitle: string
  /** Delay, price, and the one client a week — the only figures this page allows. */
  figures: SprintHeroFigure[]
  ctaLabel: string
  ctaNote: string
  /** The booking window — the next Mondays, computed, with their state. */
  slots: SprintSlot[]
  slotOpenLabel: string
  slotHeldLabel: string
  shot: { src: string; alt: string; domain: string }
}) {
  /*
   * ⛔ THE BUTTON NO LONGER NAMES A DATE (2026-09-15, reversing decision
   * cmu0fugh's dated label). Adrien: « "Réserver la semaine du 5 octobre",
   * ça présume la date que veut le prospect — et l'appel est un cadrage de
   * 30 min, pas la réservation du sprint. » The label says what pressing it
   * books; the week is still CARRIED, into the modal's chip, the prefilled
   * WhatsApp message and the analytics, where it is context and not a promise.
   *
   * It is still the nearest OPEN week, never a held one: a click travelling
   * with a week the strip right below it calls full is the contradiction the
   * whole calendar exists to avoid.
   */
  const next = slots.find((slot) => !slot.held)

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
            <SprintCta placement="hero" label={ctaLabel} week={next?.dateLabel} className="w-full sm:w-auto" />
            {/* ⛔ « Encore disponible » USED TO SIT HERE and Adrien pulled it
                (2026-09-15: « je doute du libellé »). « Encore » advertises a
                countdown this page does not run, and the state it announced was
                already written on the chips in the strip below — so it bought a
                third statement of the same fact at the price of the one word
                that made it a device. What is left is one line, and it is a
                promise rather than a pressure. */}
            <p className="mt-3 text-sm text-[var(--color-muted)]">{ctaNote}</p>
          </div>
        </div>

        {/* The build, shown. Second in the DOM so it lands directly under the
            button on a phone — the first screen is never text alone. */}
        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
          <SprintBuildSequence shot={shot} />
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
