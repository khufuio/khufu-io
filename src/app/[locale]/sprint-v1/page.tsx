import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, site } from '@/content/site'
import { projects } from '@/content/projects'
import { sprintLanding, sprintLandingFlags, sprintProductSlugs, traqioProduct } from '@/content/sprintLanding'
import { buildMetadata } from '@/lib/metadata'
import { sprintSlots } from '@/lib/sprintSlots'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/sectionHeading'
import { Price } from '@/components/ui/price'
import { FaqAccordion } from '@/components/sections/faqAccordion'
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd, ServiceJsonLd } from '@/components/seo/jsonLd'
import { SprintCta, SPRINT_FORM_ANCHOR } from '@/components/sprint/sprintCta'
import { SprintComparison } from '@/components/sprint/sprintComparison'
import { SprintHero } from '@/components/sprint/sprintHero'
import { SprintLandingView } from '@/components/sprint/sprintLandingView'
import { SprintLeadForm, type SprintFormCopy } from '@/components/sprint/sprintLeadForm'
import { SprintMotion } from '@/components/sprint/sprintMotion'
import { SprintTimeline } from '@/components/sprint/sprintTimeline'
import { SprintIncluded } from '@/components/sprint/sprintIncluded'
import { SprintDelayChart } from '@/components/sprint/sprintDelayChart'
import { CountUpPrice } from '@/components/sprint/countUpPrice'
import Image from 'next/image'

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
 * Written for cold visitors, so it breaks from the rest of the site on purpose:
 * one offer, one action repeated five times, and a page long enough to answer
 * every objection before the visitor has to ask. The home page still presents
 * the three offers; this one sells exactly one.
 *
 * The site header and footer are kept rather than stripped as on the lead-magnet
 * landings: a €17k decision needs the legal pages, the address and the rest of
 * the work reachable, and the chrome is what makes this page look like part of a
 * real company rather than a funnel.
 *
 * Every claim here is traceable: prices from `site.ts`, the run and the copy
 * from `sprintLanding.ts`, Khufu's own products from `projects.ts`, the start
 * dates computed in `lib/sprintSlots.ts`.
 *
 * ⛔ ONE OFFER, NOTHING AROUND IT. There is no delivery guarantee and no 48h
 * prototype on this page any more, and neither comes back without a new khufu HQ
 * decision replacing cmu0exke and cmu0fcvk. Both were deleted rather than hidden
 * behind a flag, precisely so they cannot be switched back on by accident.
 */
export default async function SprintPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const s = dict.sprintPage
  const c = sprintLanding
  const offer = dict.offers.items.find((o) => o.id === 'sprint')!

  const formCopy: SprintFormCopy = {
    title: c.form.title[locale],
    body: c.form.body[locale],
    name: c.form.name[locale],
    email: c.form.email[locale],
    project: c.form.project[locale],
    projectPlaceholder: c.form.projectPlaceholder[locale],
    submit: c.form.submit[locale],
    sending: c.form.sending[locale],
    invalidEmail: c.form.invalidEmail[locale],
    successTitle: c.form.successTitle[locale],
    successBody: c.form.successBody[locale],
    privacy: c.form.privacy[locale],
    whatsapp: c.form.whatsapp[locale],
  }

  /*
   * The run is authored on this page rather than reused from `method.days`.
   *
   * Since khufu HQ decision cmu0fbad the landing's week is CALENDAR-BOUND —
   * Monday 06:00 UTC → Sunday, Friday is the client's acceptance-testing day,
   * the weekend is where their feedback is applied — and the shared /methode
   * page still describes the generic run. Reusing it would have meant either
   * losing the calendar here or rewriting a ten-locale dictionary that serves
   * another page. See the note on `timeline` in sprintLanding.ts.
   */
  const timeline = [
    {
      day: c.timeline.dayZero.day[locale],
      weekday: c.timeline.dayZero.weekday[locale],
      title: c.timeline.dayZero.title[locale],
      body: c.timeline.dayZero.body[locale],
    },
    ...c.timeline.days.map((d) => ({
      day: d.day[locale],
      weekday: d.weekday[locale],
      title: d.title[locale],
      body: d.body[locale],
      client: d.client,
    })),
  ]

  /*
   * The booking window, computed at render time (decision cmu0fugh): the next
   * three Mondays, all shown as open. Nothing here knows or claims that any week
   * is taken — see the header note in lib/sprintSlots.ts before touching it.
   */
  const slots = sprintSlots(locale)
  /** The dated CTA; falls back to a plain label if the window is ever empty. */
  const ctaWithSlot = (fallback: string): string =>
    slots[0] ? c.hero.ctaLabelSlot[locale].replace('{date}', slots[0].dateLabel) : fallback

  // Khufu's own live products — no client references on this page, and no
  // duration claimed for any of them. See the note in sprintLanding.ts.
  // Traqio joins only when its flag is on (its showcase is not online yet).
  const ownProducts: {
    key: string
    name: string
    type: string
    tagline: string
    url?: string
    stack: readonly string[]
    image?: string
    /** Overrides the shared "in production" badge — see Traqio below. */
    status?: string
  }[] = [
    ...sprintProductSlugs
      .map((slug) => projects.find((p) => p.slug === slug))
      .filter((p): p is (typeof projects)[number] => Boolean(p))
      .map((p) => ({
        key: p.slug,
        name: p.name,
        type: p.type[locale],
        tagline: p.tagline[locale],
        url: p.url,
        stack: p.stack,
        image: p.image,
      })),
    ...(sprintLandingFlags.traqioProduct
      ? [
          {
            key: 'traqio',
            name: traqioProduct.name,
            type: c.products.traqioType[locale],
            tagline: c.products.traqioTagline[locale],
            url: traqioProduct.url,
            stack: traqioProduct.stack,
            // Its SITE is live; the product is a prelaunch (decision cmu0fqj7).
            // It must never wear the same badge as the three shipped products.
            status: c.products.traqioStatus[locale],
          },
        ]
      : []),
  ]

  const faqItems = c.faq.items.map((i) => ({ q: i.q[locale], a: i.a[locale] }))

  return (
    <>
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
        steps={timeline.map((t) => ({ name: `${t.day} — ${t.title}`, text: t.body }))}
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
        subtitle={s.subtitle}
        figures={[
          { value: `${site.v1Days} ${dict.common.days}`, label: dict.home.heroFigures[0].label },
          { value: <Price eur={site.v1PriceEUR} locale={locale} />, label: dict.home.heroFigures[1].label },
        ]}
        ctaLabel={c.hero.ctaLabel[locale]}
        ctaLabelSlot={c.hero.ctaLabelSlot[locale]}
        ctaNote={c.hero.ctaNote[locale]}
        trust={c.hero.trust[locale]}
        slots={slots}
        slotsTitle={c.hero.slotsTitle[locale]}
        slotsNote={c.hero.slotsNote[locale]}
        slotOpenLabel={c.hero.slotOpen[locale]}
        formTitle={c.form.title[locale]}
        form={<SprintLeadForm copy={formCopy} locale={locale} placement="hero" />}
      />

      {/* Who it's for / who it isn't — filtering upfront raises lead quality. */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.audience.title[locale]} subtitle={c.audience.subtitle[locale]} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                {c.audience.forTitle[locale]}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {c.audience.forItems.map((item) => (
                  <li key={item[locale]} className="flex gap-3 text-[var(--color-ink-2)]">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs text-[var(--color-accent-ink)]"
                    >
                      ✓
                    </span>
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-paper-2)] p-7">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                {c.audience.notForTitle[locale]}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {c.audience.notForItems.map((item) => (
                  <li key={item[locale]} className="flex gap-3 text-[var(--color-muted)]">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-sm leading-none text-[var(--color-muted)]"
                    >
                      ×
                    </span>
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-sm text-[var(--color-muted)] text-pretty">{c.audience.note[locale]}</p>
        </Container>
      </section>

      {/* What is delivered on day 7 */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.deliverables.title[locale]} subtitle={c.deliverables.subtitle[locale]} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.deliverables.items.map((item, i) => (
              <div
                key={item.title[locale]}
                className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7"
                data-reveal
                style={{ '--reveal-delay': `${(i % 3) * 110}ms` } as React.CSSProperties}
              >
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent-ink)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.title[locale]}</h3>
                <p className="mt-2 text-[var(--color-ink-2)] text-pretty">{item.body[locale]}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <SprintCta placement="deliverables" label={c.midCta.deliverables[locale]} />
            <p className="text-sm text-[var(--color-muted)]">{c.hero.ctaNote[locale]}</p>
          </div>
        </Container>
      </section>

      {/* What comes with it. Three FIXED deliverables and only three — Stripe,
          analytics and light branding were deliberately kept out and answered in
          one FAQ entry instead (khufu HQ decisions cmu09gb6 / cmu09gn1 / cmu09j84). */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.included.title[locale]} subtitle={c.included.subtitle[locale]} />
          <div className="mt-12">
            <SprintIncluded locale={locale} />
          </div>
        </Container>
      </section>

      {/* Day 0 → day 7, drawn rather than listed. The schema is what makes the
          offer's central claim visible — the clock only starts once the scope is
          settled — which seven equal cards could not say. Sits on a plain
          background directly after the "included" section, hence the top rule.

          The run is the part of the page that sells on its own, so it carries an
          id: a post, an ad or an email can point a reader straight at it. */}
      <section id="deroule" className="scroll-mt-20 border-t border-[var(--color-line)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.timeline.title[locale]} subtitle={c.timeline.subtitle[locale]} />
          <div className="mt-14">
            <SprintTimeline
              steps={timeline}
              scopeLabel={c.timeline.scopeLabel[locale]}
              spanLabel={c.timeline.spanLabel[locale]}
              clientLabel={c.timeline.clientLabel[locale]}
            />
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <p className="max-w-3xl text-sm text-[var(--color-ink-2)] text-pretty">{c.timeline.note[locale]}</p>
            <p className="max-w-3xl text-sm text-[var(--color-muted)] text-pretty">{dict.method.storeNote}</p>
          </div>
        </Container>
      </section>

      {/* Khufu's own products. Replaces the client case studies, which were pulled
          wholesale (2026-09-13). Deliberately carries NO timeline: none of these
          was built in seven days, and this section sits right after the J0→J7
          run, so `note` says it in as many words rather than letting adjacency
          imply it. The domains are plain text, not links — an outbound click
          from a paid visitor is a lost lead. */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.products.title[locale]} subtitle={c.products.subtitle[locale]} />
          <div
            className={`mt-12 grid gap-5 sm:grid-cols-2 ${
              ownProducts.length % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
            }`}
          >
            {ownProducts.map((p, i) => (
              <article
                key={p.key}
                className="flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white"
                data-reveal
                style={{ '--reveal-delay': `${i * 130}ms` } as React.CSSProperties}
              >
                {/* The product as it actually looks. Below the fold and lazy, so
                    it cannot enter the LCP calculation; width/height are fixed so
                    it cannot shift anything either. */}
                {p.image && (
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.tagline}`}
                    width={1400}
                    height={1050}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    loading="lazy"
                    className="aspect-[4/3] w-full border-b border-[var(--color-line)] object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col p-7">
                {/* Green dot = in production. A product whose site is live but
                    which has not launched gets a neutral dot and says so — the
                    two are not the same claim (decision cmu0fqj7). */}
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className={`size-2 shrink-0 rounded-full ${p.status ? 'bg-[var(--color-muted)]' : 'bg-[#16a34a]'}`}
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    {p.status ?? c.products.liveLabel[locale]}
                  </span>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  {p.type}
                </p>
                <p className="mt-3 flex-1 text-[var(--color-ink-2)] text-pretty">{p.tagline}</p>
                {p.url && (
                  <p className="mt-4 font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent-ink)]">
                    {p.url.replace(/^https?:\/\//, '')}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[var(--color-paper-2)] px-2.5 py-1 text-xs text-[var(--color-ink-2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 max-w-3xl rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-5 sm:p-6">
            <p className="text-sm/[1.6] text-[var(--color-ink-2)] text-pretty">{c.products.note[locale]}</p>
          </div>

          <div className="mt-8">
            <SprintCta placement="products" label={c.midCta.products[locale]} variant="secondary" />
          </div>
        </Container>
      </section>

      {/* Proof */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.proof.title[locale]} subtitle={c.proof.subtitle[locale]} />
          {/* Commitments, not activity stats: the only figures on this page are a
              price or a delay (see the header note in sprintLanding.ts). */}
          <dl className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                value: `${site.v1Days} ${dict.common.days}`,
                label: c.proof.dateLabel[locale],
              },
              {
                value: <CountUpPrice eur={site.v1PriceEUR} locale={locale} />,
                label: c.proof.priceLabel[locale],
              },
              {
                value: c.proof.codeValue[locale],
                label: c.proof.codeLabel[locale],
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7"
                data-reveal
                style={{ '--reveal-delay': `${i * 130}ms` } as React.CSSProperties}
              >
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <p className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.02em]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[var(--color-ink-2)] text-pretty">{item.label}</p>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-2xl text-sm text-[var(--color-muted)] text-pretty">{c.proof.note[locale]}</p>
        </Container>
      </section>

      {/* Honest comparison with the real alternatives */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.comparison.title[locale]} subtitle={c.comparison.subtitle[locale]} />

          {/* The one axis where the answer is not a matter of taste: time. Delay
              only, never a price — see the note on `delayChart` in sprintLanding.ts
              for why, and for where the two third-party figures come from. */}
          <div className="mt-12 rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6 sm:p-9">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-balance sm:text-2xl">
              {c.delayChart.title[locale]}
            </h3>
            <div className="mt-8">
              <SprintDelayChart locale={locale} />
            </div>
          </div>

          <div className="mt-12">
            <SprintComparison locale={locale} />
          </div>
        </Container>
      </section>

      {/* Objections, head-on */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.objections.title[locale]} subtitle={c.objections.subtitle[locale]} />
          <div className="mt-12 flex flex-col gap-10">
            {c.objections.items.map((item, i) => (
              <article
                key={item.q[locale]}
                className="max-w-3xl border-l-2 border-[var(--color-accent)] pl-6"
                data-reveal
                style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-balance">
                  {item.q[locale]}
                </h3>
                <p className="mt-3 text-[17px]/[1.7] text-[var(--color-ink-2)] text-pretty">{item.a[locale]}</p>
              </article>
            ))}
          </div>

          {/* The last CTA before the FAQ names the week too (decision cmu0fugh):
              it lands exactly where the visitor has run out of objections. The
              two mid-page CTAs above keep their plain labels — repeating the date
              five times would wear it out. */}
          <div className="mt-12">
            <SprintCta placement="objections" label={ctaWithSlot(c.midCta.objections[locale])} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--color-line)]">
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.faq.title[locale]} />
          <div className="mt-10">
            <FaqAccordion items={faqItems} locale={locale} />
          </div>
        </Container>
      </section>

      {/* Final conversion point — the same form, the same action. */}
      <section id={SPRINT_FORM_ANCHOR} className="scroll-mt-20 bg-[var(--color-ink)] text-[var(--color-paper)]">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
              {c.finalCta.title[locale]}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[var(--color-paper-2)] text-pretty">{c.finalCta.body[locale]}</p>
            <p className="mt-6 max-w-xl text-[var(--color-paper-2)] text-pretty">{c.form.body[locale]}</p>

            <ul className="mt-8 flex flex-col gap-2 text-sm text-[color-mix(in_srgb,var(--color-paper)_70%,transparent)]">
              {offer.features.map((f) => (
                <li key={f}>— {f}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold lg:hidden">
              {c.form.title[locale]}
            </p>
            <SprintLeadForm copy={formCopy} locale={locale} placement="footer" />
          </div>
        </Container>
      </section>
    </>
  )
}
