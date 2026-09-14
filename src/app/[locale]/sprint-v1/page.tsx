import type { Metadata } from 'next'
import { isLocale, localeHrefLang, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, site } from '@/content/site'
import { sprintLanding } from '@/content/sprintLanding'
import { buildMetadata } from '@/lib/metadata'
import { dualPriceTokens } from '@/lib/currency'
import { firstOpenSlot, sprintSlots } from '@/lib/sprintSlots'
import { sprintBookingUrl } from '@/lib/sprintBooking'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/sectionHeading'
import { Price } from '@/components/ui/price'
import { FaqAccordion } from '@/components/sections/faqAccordion'
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd, ServiceJsonLd } from '@/components/seo/jsonLd'
import { SprintCta } from '@/components/sprint/sprintCta'
import {
  SPRINT_DAY7_ANCHOR,
  SPRINT_FORM_ANCHOR,
  SPRINT_SYSTEM_ANCHOR,
  SPRINT_TIMELINE_ANCHOR,
} from '@/lib/sprintAnchors'
import { SprintCommitments } from '@/components/sprint/sprintCommitments'
import { SprintComparison } from '@/components/sprint/sprintComparison'
import { SprintDay7 } from '@/components/sprint/sprintDay7'
import { SprintDelayChart } from '@/components/sprint/sprintDelayChart'
import { SprintHero } from '@/components/sprint/sprintHero'
import { SprintLandingView } from '@/components/sprint/sprintLandingView'
import { SprintMotion } from '@/components/sprint/sprintMotion'
import { SprintProductWall } from '@/components/sprint/sprintProductWall'
import { SprintSystem } from '@/components/sprint/sprintSystem'
import { SprintContactProvider, type SprintContactCopy } from '@/components/sprint/sprintContact'
import { SprintBookingLink } from '@/components/sprint/sprintBookingLink'
import { SprintTimeline, type SprintTimelineStep } from '@/components/sprint/sprintTimeline'

/**
 * The hero shows the next Mondays a sprint can start on, and they are computed
 * (lib/sprintSlots.ts). Without a revalidation window this statically generated
 * page would freeze them at build time and end up advertising a Monday in the
 * past — hourly is far more often than a week, and costs nothing.
 */
export const revalidate = 3600

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)
  return buildMetadata({
    locale: loc,
    routeKey: 'sprint',
    title: dict.sprintPage.metaTitle,
    description: dict.sprintPage.metaDescription,
  })
}

/**
 * Sprint V1 — the landing page PAID traffic lands on (LinkedIn Ads first).
 *
 * ⛔ THIS PAGE IS A SHOP WINDOW, NOT A DOCUMENT (khufu HQ decision cmu0hv4c).
 *
 * It was rebuilt on 2026-09-14 after Adrien took the production version apart
 * point by point. The cause he identified is the one to keep fixed: every
 * previous session on this page had been a WRITING session, each adding copy and
 * none removing any, until a shop window had become a well-set document. The
 * rewrite cut the visitor-facing French copy by roughly two thirds
 * (`scripts/measureSprintCopy.ts` measures it — run it before and after).
 *
 * WHAT THE STRUCTURE IS FOR, section by section:
 *   hero        — SHOWS a whole product being built AND put online, plus three
 *                 figures. One sentence, one dated button, the calendar. No
 *                 paragraph, no slot mechanics.
 *   system      — where the seven days come from, drawn. It REPLACED the « vous
 *                 parlez au founder qui écrit le code » line (decision cmu1u21i):
 *                 the claim was false and "solo" argues against a $17k sale, but
 *                 deleting it without an explanation leaves "7 days" reading as
 *                 bluff. ⛔ No invented headcount, never autonomous-without-human.
 *   products    — the work itself, in full scope (platform + app + site), and
 *                 the ONE dark section of the page.
 *   timeline    — the week drawn, with Friday's two parallel tracks.
 *   day7        — one icon grid where two prose sections used to say the same
 *                 nine things twice.
 *   comparison  — a chart for the delay (the only sourceable axis) and a matrix
 *                 of marks for the rest. Not one unsourced figure.
 *   audience    — who it is for, in chips.
 *   faq         — the ONE question zone. The « trois questions » block that sat
 *                 on top of it is merged in.
 *   commitments — what the contract says, as cards, immediately before the form:
 *                 the reminder someone who entered mid-page needs in order to
 *                 decide (cmu0jo1w). It re-presents the hero's promise in
 *                 another shape — never the same object twice.
 *
 * ⛔ ONE OFFER, NOTHING AROUND IT. No delivery guarantee and no 48h prototype;
 * neither comes back without a new decision replacing cmu0exke and cmu0fcvk.
 * ⛔ NO TIME OF DAY anywhere on the page (the 06:00 UTC kickoff is contractual
 * and stays off the page). ⛔ No claim, anywhere, about how long our own products
 * took to build.
 *
 * ⛔ EVERY CTA OPENS THE CONTACT MODAL (2026-09-15), it does not scroll. Adrien:
 * « un mec qui voit la page défiler va juste vouloir lire… ». The whole page is
 * therefore wrapped in `SprintContactProvider`. ⚠️ The form at the foot STAYS —
 * it is the net for a visitor who scrolled past every button, and it is the
 * no-JavaScript target of `href="#start"`.
 *
 * ⚠️ AND THE ANCHOR CONSTANTS COME FROM `lib/sprintAnchors.ts`, a module with NO
 * directive. Importing them from the client CTA module is what shipped
 * `#function(){throw Error("Attempted to call SPRINT_FORM_ANCHOR()…")}` into the
 * live page's href AND into this section's own `id`, killing every CTA silently.
 * `scripts/checkSprintHtml.ts` now fails the recipe if that ever renders again.
 *
 * The site header and footer are kept rather than stripped as on the lead-magnet
 * landings: a €15k decision needs the legal pages and the rest of the company
 * reachable.
 */
export default async function SprintPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const s = dict.sprintPage
  const c = sprintLanding
  const offer = dict.offers.items.find((o) => o.id === 'sprint')!

  /*
   * The copy is resolved HERE, on the server, and handed to the client components
   * as plain strings. That is deliberate: `sprintLanding` is a ten-locale object
   * and shipping it into the bundle to pick one language would be paying for nine
   * translations nobody on this page will read.
   */
  const contactCopy: SprintContactCopy = {
    title: c.contact.title[locale],
    weekNote: c.contact.weekNote[locale],
    bookLabel: c.contact.bookLabel[locale],
    bookNote: c.contact.bookNote[locale],
    bookingLangNote: c.contact.bookingLangNote[locale],
    bookingHours: c.contact.bookingHours[locale],
    whatsappLabel: c.contact.whatsappLabel[locale],
    close: c.contact.close[locale],
    fallback: c.contact.fallback[locale],
  }

  /*
   * The run is authored on this page rather than reused from `method.days`: the
   * landing's week is calendar-bound (decision cmu0fbad — Monday → Sunday,
   * Friday is the client's acceptance-testing day and runs alongside our
   * technical track) and the shared /methode page describes the generic run.
   */
  const timeline: SprintTimelineStep[] = [
    {
      day: c.timeline.dayZero.day[locale],
      weekday: c.timeline.dayZero.weekday[locale],
      title: c.timeline.dayZero.title[locale],
      body: c.timeline.dayZero.body[locale],
      // Day 0 is the client's: their brief, their answers, their signature.
      // Adrien, 2026-09-14: « ajoute un badge "Vous" au jour 0 ».
      actor: 'you',
    },
    ...c.timeline.days.map((d) => ({
      day: d.day[locale],
      weekday: d.weekday[locale],
      title: d.title[locale],
      body: d.body?.[locale],
      lanes: d.lanes ? { you: d.lanes.you[locale], us: d.lanes.us[locale] } : undefined,
      // Every other day is ours. Friday says so twice, on two tracks.
      actor: 'us' as const,
    })),
  ]

  /*
   * The booking window, computed at render time (decisions cmu0fugh, cmu1qo9r):
   * the next four Mondays with their real state. A week shows as full only if it
   * is genuinely held — read the header note in lib/sprintSlots.ts before
   * touching any of this.
   */
  const slots = sprintSlots(locale)
  /** Every dated CTA sells the nearest OPEN week, never a held one. */
  const openSlot = firstOpenSlot(slots)
  const ctaWithSlot = (fallback: string): string =>
    openSlot ? c.hero.ctaLabelSlot[locale].replace('{date}', openSlot.dateLabel) : fallback

  /*
   * Monday → Sunday as one narrow letter each, for the timeline's week strip on
   * small screens. Computed rather than written: ten locales, zero copy, and a
   * fixed UTC week in 2024 so the labels can never depend on today's date or on
   * the server's timezone.
   */
  const weekLetters = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(localeHrefLang[locale], { weekday: 'narrow', timeZone: 'UTC' }).format(
      new Date(Date.UTC(2024, 0, 1 + i)),
    ),
  )

  /*
   * The JSON-LD wants questions and answers only, so the link rides alongside in
   * `faqRows`. ⚠️ And the answers go through `dualPriceTokens` on the way: a
   * `[[1490]]` marker renders as a price for a visitor but would reach a crawler
   * verbatim, and a machine-readable surface cannot pick a currency per visitor
   * — so it advertises both, exactly as the home page and llms.txt do.
   */
  const faqItems = c.faq.items.map((i) => ({ q: i.q[locale], a: dualPriceTokens(i.a[locale], locale) }))
  const faqRows = c.faq.items.map((i) => ({
    q: i.q[locale],
    a: i.a[locale],
    link:
      i.linkLabel && i.linkRoute
        ? { href: href(locale, i.linkRoute), label: i.linkLabel[locale] }
        : undefined,
  }))

  return (
    /* Every CTA on this page opens the modal rather than scrolling (2026-09-15).
       The provider wraps the whole tree so a trigger anywhere — hero button, slot
       chip, mid-page CTA — reaches the same dialog and carries its own week into
       it. ⚠️ A trigger rendered OUTSIDE this provider silently degrades to the
       `#start` anchor, which is a legitimate state, not a bug. */
    <SprintContactProvider locale={locale} copy={contactCopy}>
      <SprintLandingView locale={locale} />
      <SprintMotion />
      {/* The reveal animations hide their element until the observer marks it in
          view. Without JS there is no observer, so the page would read blank —
          this puts every one of them back. Crawlers get the markup either way;
          only the opacity is scripted. */}
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: '[data-reveal],[data-fade]{opacity:1!important;transform:none!important}[data-bar]{transform:scaleX(1)!important}[data-rail-y]{transform:scaleY(1)!important}[data-draw]{stroke-dashoffset:0!important}',
          }}
        />
      </noscript>
      <ServiceJsonLd name={offer.name} description={s.subtitle} priceEUR={offer.priceEur} />
      <HowToJsonLd
        name={s.title}
        description={s.metaDescription}
        steps={timeline.map((t) => ({
          name: `${t.day} — ${t.title}`,
          text: t.body ?? [t.lanes?.you, t.lanes?.us].filter(Boolean).join(' '),
        }))}
      />
      <FaqJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: site.name, url: `${site.url}${href(locale, 'home')}` },
          { name: offer.name, url: `${site.url}${href(locale, 'sprint')}` },
        ]}
      />

      {/* Hero. Everything about its look — and what must never be added to it —
          is documented in sprintHero.tsx. */}
      <SprintHero
        kicker={s.kicker}
        title={s.title}
        subtitle={c.hero.subtitle[locale]}
        figures={[
          { value: `${site.v1Days} ${dict.common.days}`, label: dict.home.heroFigures[0].label },
          { value: <Price eur={site.v1PriceEUR} locale={locale} />, label: dict.home.heroFigures[1].label },
          { value: '1', label: c.hero.clientsPerWeek[locale] },
        ]}
        ctaLabel={c.hero.ctaLabel[locale]}
        ctaLabelSlot={c.hero.ctaLabelSlot[locale]}
        ctaAvailable={c.hero.ctaAvailable[locale]}
        ctaNote={c.hero.ctaNote[locale]}
        slots={slots}
        slotOpenLabel={c.hero.slotOpen[locale]}
        slotHeldLabel={c.hero.slotHeld[locale]}
        /* ⚠️ NOT the same capture as any product card below it. The sequence and
            the first card sat on the identical screenshot, which read as a
            template rather than as two things. Another screen of the same
            live product keeps both real and neither repeated. */
        shot={{ src: '/images/sprint/clokizi-planning', alt: c.hero.shotAlt[locale], domain: 'app.clokizi.com' }}
      />

      {/* The work itself — and the one dark section of the page. See the note in
          sprintProductWall.tsx for why dark is spent here and nowhere else. */}
      <section className="bg-[#0b0b0e]">
        <Container className="py-16 sm:py-24">
          <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance text-[var(--color-paper)]">
            {c.products.title[locale]}
          </h2>
          <div className="mt-10 sm:mt-12">
            <SprintProductWall locale={locale} />
          </div>
          <div className="mt-10 text-center sm:text-left">
            <SprintCta
              placement="products"
              label={c.midCta.products[locale]}
              week={openSlot?.dateLabel}
              className="w-full sm:w-auto"
            />
          </div>
        </Container>
      </section>

      {/* Day 0 → day 7, drawn rather than listed. It carries an id so a post, an
          ad or an email can point a reader straight at it. */}
      <section id={SPRINT_TIMELINE_ANCHOR} className="scroll-mt-20">
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.timeline.title[locale]} subtitle={c.timeline.subtitle[locale]} />
          <div className="mt-12 sm:mt-14">
            <SprintTimeline
              steps={timeline}
              scopeLabel={c.timeline.scopeLabel[locale]}
              spanLabel={c.timeline.spanLabel[locale]}
              youLabel={c.timeline.youLabel[locale]}
              usLabel={c.timeline.usLabel[locale]}
              weekLetters={weekLetters}
            />
          </div>
          <p className="mt-10 text-sm text-[var(--color-muted)]">{c.timeline.note[locale]}</p>
        </Container>
      </section>

      {/* WHERE THE SPEED COMES FROM — placed immediately after the week, because
          that is the moment the reader thinks "seven days, really?". It replaced
          the « vous parlez au founder qui écrit le code » line (decision
          cmu1u21i): that claim was inaccurate AND argued against a $17k sale, but
          removing it with nothing in its place leaves the delay unexplained.
          ⛔ Read the bounds in sprintSystem.tsx before touching it: no invented
          headcount, never autonomous without a human, no developer vocabulary. */}
      <section id={SPRINT_SYSTEM_ANCHOR} className="scroll-mt-20 border-t border-[var(--color-line)] bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.system.title[locale]} subtitle={c.system.subtitle[locale]} />
          <div className="mt-12 sm:mt-14">
            <SprintSystem locale={locale} />
          </div>
        </Container>
      </section>

      {/* What is in the box on day 7 — one grid where two prose sections used to
          say the same things twice. */}
      <section id={SPRINT_DAY7_ANCHOR} className="scroll-mt-20 border-t border-[var(--color-line)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.day7.title[locale]} />
          <div className="mt-10 sm:mt-12">
            <SprintDay7 locale={locale} />
          </div>
          <div className="mt-10 text-center sm:text-left">
            <SprintCta
              placement="day7"
              label={ctaWithSlot(c.midCta.day7[locale])}
              week={openSlot?.dateLabel}
              className="w-full sm:w-auto"
            />
          </div>
        </Container>
      </section>

      {/* The alternatives: a chart for the delay — the only axis we can source —
          then a matrix of marks for everything else. */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.comparison.title[locale]} />

          <div className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6 sm:mt-12 sm:p-9">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.01em] text-balance sm:text-xl">
              {c.delayChart.title[locale]}
            </h3>
            <div className="mt-8">
              <SprintDelayChart locale={locale} />
            </div>
          </div>

          <div className="mt-6">
            <SprintComparison locale={locale} />
          </div>
        </Container>
      </section>

      {/* Who it's for / who it isn't — filtering upfront raises lead quality, and
          it is four chips a side, not ten sentences. */}
      <section className="border-t border-[var(--color-line)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.audience.title[locale]} />
          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
            {[
              { title: c.audience.forTitle[locale], items: c.audience.forItems, yes: true },
              { title: c.audience.notForTitle[locale], items: c.audience.notForItems, yes: false },
            ].map((col) => (
              <div
                key={col.title}
                className={`rounded-[var(--radius-xl)] border p-6 sm:p-7 ${
                  col.yes
                    ? 'border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)]'
                    : 'border-[var(--color-line)] bg-[var(--color-paper-2)]'
                }`}
                data-reveal
              >
                <h3
                  className={`font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.14em] uppercase ${
                    col.yes ? 'text-[var(--color-accent-ink)]' : 'text-[var(--color-muted)]'
                  }`}
                >
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.items.map((item) => (
                    <li
                      key={item[locale]}
                      className={`flex gap-2.5 text-[15px]/[1.45] ${col.yes ? 'text-[var(--color-ink)]' : 'text-[var(--color-muted)]'}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className={`mt-[3px] size-4 shrink-0 ${col.yes ? 'stroke-[var(--color-accent)]' : 'stroke-[var(--color-muted)]'}`}
                        fill="none"
                        strokeWidth={2.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {col.yes ? <path d="m5 12.5 4.5 4.5L19 7.5" /> : <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />}
                      </svg>
                      {item[locale]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The ONE question zone of the page. */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.faq.title[locale]} />
          <div className="mt-10">
            {/* Closed on arrival: on a phone an open answer turns the one
                question zone into the wall of text the page was rebuilt to
                remove. Every answer ships in the markup regardless. */}
            <FaqAccordion items={faqRows} locale={locale} defaultOpen={null} dense />
          </div>
        </Container>
      </section>

      {/* What the contract says — the reminder, next to the decision.
          Deliberately NOT the hero's figures a second time: cards, another
          angle, and only here (khufu HQ decision cmu0jo1w, see the component). */}
      <section className="border-t border-[var(--color-line)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={c.commitments.title[locale]} />
          <div className="mt-9 sm:mt-10">
            <SprintCommitments locale={locale} />
          </div>
        </Container>
      </section>

      {/* The page's last word, and the `#start` target every CTA falls back to
          when JavaScript never runs — which is why the booking link is RENDERED
          here as a plain anchor rather than behind the modal.
          ⛔ There is no form of ours on this page (see sprintContact.tsx): the
          Google booking page already asks for the name, the e-mail and where the
          project stands, so a form here would ask the same things one step
          earlier and make the better path look like the longer one. */}
      {/* `data-flush-footer`: this section paints its own full-bleed ground, so
          the footer's paper top margin would read as an empty white band under
          it — the layout bug Adrien reported on 2026-09-14. The rule that kills
          it is in globals.css, next to this attribute's explanation. */}
      <section
        id={SPRINT_FORM_ANCHOR}
        data-flush-footer
        className="scroll-mt-20 bg-[var(--color-ink)] text-[var(--color-paper)]"
      >
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
              {c.finalCta.title[locale]}
            </h2>
            {/* ⛔ « Le formulaire prend deux minutes. » used to sit here and Adrien
                removed it (« tu es sûr de ce genre de sentence ? x) ») — it
                advertises effort at the exact moment someone decides to spend
                some, and the form it described no longer exists. */}
            <p className="mt-4 text-lg text-[color-mix(in_srgb,var(--color-paper)_70%,transparent)] text-pretty">
              {c.closing.body[locale]}
            </p>
          </div>

          <div className="rounded-[var(--radius-xl)] bg-[color-mix(in_srgb,var(--color-paper)_8%,transparent)] p-6 sm:p-8">
            <p className="font-[family-name:var(--font-display)] text-xl font-bold text-balance">
              {c.closing.title[locale]}
            </p>
            {/* ⚠️ A REAL LINK TO THE CALENDAR, not a modal trigger. This block is
                the `#start` target every CTA falls back to when JavaScript never
                runs — a trigger here would anchor back to this same section and
                do nothing, which is the shape of the bug that just cost the page
                every one of its CTAs. Hidden rather than disabled when bookings
                are closed. */}
            {sprintBookingUrl && (
              <div className="mt-5">
                <SprintBookingLink
                  href={sprintBookingUrl}
                  label={c.contact.bookLabel[locale]}
                  week={openSlot?.dateLabel}
                />
              </div>
            )}
            <p className="mt-3 text-sm text-[color-mix(in_srgb,var(--color-paper)_62%,transparent)] text-pretty">
              {c.contact.bookingHours[locale]} · {c.contact.bookingLangNote[locale]}
            </p>
          </div>
        </Container>
      </section>
    </SprintContactProvider>
  )
}
