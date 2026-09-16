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
 * ⛔ THE HERO CARRIES NO PRODUCT CAPTURE AT ALL SINCE 2026-09-15 (pass 5). The
 * sequence used to dissolve into a real screenshot of Traqio; Adrien: « l'écran
 * de produit à la fin n'aide pas à comprendre le process ». It now holds on the
 * finished system instead — and since there is no image left, the hero's LCP
 * element is the `<h1>` above. ⛔ Do not reintroduce a capture here to "warm up"
 * the first screen: it would take LCP back off text and onto an image, and it
 * would end a demonstration with an illustration, which is what was removed.
 *
 * ⛔ THE HERO SHOWS A WHOLE SYSTEM BEING BUILT AND PUT INTO PRODUCTION. It used
 * to be a capture of Clokizi, which Adrien took apart on 2026-09-14 (« un truc
 * qui fait direct comprendre l'offre en mode on fast build un truc de fou »); the
 * sequence that replaced it drew a single screen, which he took apart too (« il
 * manque pas l'app et le showcase ? et aussi montrer le côté infra, CD… »); and
 * the one after that he called « trop pauvre ». It now draws the surfaces, then
 * the eight things underneath them that make a product a product, then the
 * go-live. See sprintBuildSequence.tsx for the honesty and performance bounds.
 *
 * ⛔ AND IT EXPLAINS NOTHING ABOUT THE SLOTS. The strip is dates and their state,
 * full stop. Adrien: « ça perd l'avantage des slots ». The "full" badge is a
 * fact, not a device — see lib/sprintSlots.ts before touching it.
 *
 * ⚠️ MOBILE ORDER IS DELIBERATE, and it is the acceptance criterion for the whole
 * page: title → one line → button → SEQUENCE → figures → dates. No screen of this
 * page may be nothing but text at 390×844, and on the first screen the visual is
 * what guarantees it.
 *
 * ⛔ THE FIGURE ROW CARRIES TWO ENTRIES SINCE 2026-09-15, not three. « 1 — projet
 * à la fois, le vôtre » is gone: on a row of what the buyer gets, the one number
 * about our own capacity read as an apology for the size of the shop, and « 1 »
 * set in the display face reads as a magnitude before the label is read at all.
 * The claim it made — you are not queued — is still on the page twice, made
 * better: the calendar strip under this row, and the comparison matrix's
 * « Votre place dans la file ». See `hero` in sprintLanding.ts.
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
  shotLabel,
  shotUrl,
}: {
  kicker: string
  title: string
  subtitle: string
  /**
   * The delay and the price — the only two figures this page allows.
   *
   * ⛔ THERE WERE THREE UNTIL 2026-09-15 and the third is not coming back: « 1 »,
   * labelled « projet à la fois — le vôtre ». The full argument sits on `hero` in
   * sprintLanding.ts. The row is sized from this array's length rather than by a
   * hard-coded column count, so a figure can be dropped without a layout edit —
   * but dropping one is a copy decision, never a styling one.
   */
  figures: SprintHeroFigure[]
  ctaLabel: string
  ctaNote: string
  /** The booking window — the next Mondays, computed, with their state. */
  slots: SprintSlot[]
  slotOpenLabel: string
  slotHeldLabel: string
  /**
   * What the sequence is, in one sentence, for a screen reader. It used to be the
   * capture's `alt`; with the capture gone it is the hero visual's ONLY
   * accessible description, so it describes the system being assembled rather
   * than naming a product.
   */
  shotLabel: string
  /**
   * The fictional address written in the sequence's frame — « votre projet », in
   * the visitor's language. ⛔ Never a real domain, and never a progress bar
   * again: see `hero.shotUrl` in sprintLanding.ts for what it replaced.
   */
  shotUrl: string
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
          <SprintBuildSequence label={shotLabel} url={shotUrl} />
        </div>

        {/* The figures and the calendar: two graphic objects, no sentence. */}
        <div className="lg:col-start-1 lg:row-start-2">
          <dl
            className="grid divide-x divide-[var(--color-line)] border-y border-[var(--color-line)] py-5"
            style={{ gridTemplateColumns: `repeat(${figures.length}, minmax(0, 1fr))` }}
          >
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
