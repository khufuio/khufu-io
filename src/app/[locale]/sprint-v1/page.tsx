import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, site } from '@/content/site'
import { projects } from '@/content/projects'
import { sprintLanding, sprintLandingFlags, sprintProductSlugs, traqioProduct } from '@/content/sprintLanding'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/sectionHeading'
import { Price } from '@/components/ui/price'
import { FaqAccordion } from '@/components/sections/faqAccordion'
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd, ServiceJsonLd } from '@/components/seo/jsonLd'
import { SprintCta, SPRINT_FORM_ANCHOR } from '@/components/sprint/sprintCta'
import { SprintComparison } from '@/components/sprint/sprintComparison'
import { SprintLandingView } from '@/components/sprint/sprintLandingView'
import { SprintLeadForm, type SprintFormCopy } from '@/components/sprint/sprintLeadForm'

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
 * Every claim here is traceable: prices from `site.ts`, revenue from `site.ts`
 * (invoiced AND collected, with its date), cases from `projects.ts`. The two
 * promises that are not yet contractual live behind `sprintLandingFlags`.
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
    company: c.form.company[locale],
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

  // Day 0 (scoping + signature) is landing-only; days 1→7 are the shared method,
  // already translated in all ten locales.
  const timeline = [
    { day: c.timeline.dayZero.day[locale], title: c.timeline.dayZero.title[locale], body: c.timeline.dayZero.body[locale] },
    ...dict.method.days.map((d) => ({ day: d.day, title: d.title, body: d.body })),
  ]

  // Khufu's own live products — no client references on this page, and no
  // duration claimed for any of them. See the note in sprintLanding.ts.
  // Traqio joins only when its flag is on (its showcase is not online yet).
  const ownProducts: { key: string; name: string; type: string; tagline: string; url?: string; stack: readonly string[] }[] = [
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
          },
        ]
      : []),
  ]

  const faqItems = c.faq.items.map((i) => ({ q: i.q[locale], a: i.a[locale] }))

  return (
    <>
      <SprintLandingView locale={locale} />
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

      {/* Hero — the promise, the figures and the form, all above the fold on desktop. */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-2)]">
        <Container className="grid gap-10 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-ink)]">
              {s.kicker}
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[length:clamp(2.3rem,4.8vw,4rem)]/[1.02] font-bold tracking-[-0.03em] text-balance">
              {s.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg/[1.6] text-[var(--color-ink-2)] text-pretty">{s.subtitle}</p>

            <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-6">
              <div className="border-l-2 border-[var(--color-accent)] pl-4">
                <dt className="sr-only">{dict.home.heroFigures[0].label}</dt>
                <dd>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
                    {site.v1Days} {dict.common.days}
                  </p>
                  <p className="mt-1 max-w-[16ch] text-sm text-[var(--color-muted)]">
                    {dict.home.heroFigures[0].label}
                  </p>
                </dd>
              </div>
              <div className="border-l-2 border-[var(--color-accent)] pl-4">
                <dt className="sr-only">{dict.home.heroFigures[1].label}</dt>
                <dd>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em]">
                    <Price eur={site.v1PriceEUR} locale={locale} />
                  </p>
                  <p className="mt-1 max-w-[16ch] text-sm text-[var(--color-muted)]">
                    {dict.home.heroFigures[1].label}
                  </p>
                </dd>
              </div>
            </dl>

            <p className="mt-6 max-w-md text-sm text-[var(--color-muted)] text-pretty">{c.hero.trust[locale]}</p>

            <div className="mt-9 lg:hidden">
              <SprintCta placement="hero" label={c.hero.ctaLabel[locale]} />
              <p className="mt-3 max-w-sm text-sm text-[var(--color-muted)]">{c.hero.ctaNote[locale]}</p>
            </div>
          </div>

          {/* On desktop the form is the hero's right column: cold traffic should
              never have to scroll to find the action. */}
          <div className="hidden lg:block">
            <SprintLeadForm copy={formCopy} locale={locale} placement="hero" />
            <p className="mt-3 text-center text-sm text-[var(--color-muted)]">{c.hero.ctaNote[locale]}</p>
          </div>
        </Container>
      </section>

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

      {/* Day 0 → day 7 */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHeading title={c.timeline.title[locale]} subtitle={c.timeline.subtitle[locale]} />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((step) => (
              <li
                key={step.day}
                className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-ink)]">
                  {step.day}
                </p>
                <h3 className="mt-1 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-2)] text-pretty">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col gap-3">
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
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {ownProducts.map((p) => (
              <article
                key={p.key}
                className="flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7"
              >
                <div className="flex items-center gap-2">
                  <span aria-hidden className="size-2 shrink-0 rounded-full bg-[#16a34a]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    {c.products.liveLabel[locale]}
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
                value: <Price eur={site.v1PriceEUR} locale={locale} />,
                label: c.proof.priceLabel[locale],
              },
              {
                value: c.proof.codeValue[locale],
                label: c.proof.codeLabel[locale],
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7"
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
            {c.objections.items.map((item) => (
              <article key={item.q[locale]} className="max-w-3xl border-l-2 border-[var(--color-accent)] pl-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-balance">
                  {item.q[locale]}
                </h3>
                <p className="mt-3 text-[17px]/[1.7] text-[var(--color-ink-2)] text-pretty">{item.a[locale]}</p>
              </article>
            ))}
          </div>

          {/* Not contractual yet — see sprintLandingFlags (khufu HQ todo cmtt6tt9). */}
          {sprintLandingFlags.deliveryGuarantee && (
            <div className="mt-12 rounded-[var(--radius-xl)] bg-[var(--color-ink)] p-8 text-[var(--color-paper)] sm:p-10">
              <h3 className="max-w-2xl font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em] text-balance">
                {c.guarantee.title[locale]}
              </h3>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-paper-2)] text-pretty">
                {c.guarantee.body[locale]}
              </p>
              <ul className="mt-6 flex max-w-2xl flex-col gap-2 text-sm text-[color-mix(in_srgb,var(--color-paper)_70%,transparent)]">
                {c.guarantee.terms.map((term) => (
                  <li key={term[locale]}>— {term[locale]}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12">
            <SprintCta placement="objections" label={c.midCta.objections[locale]} />
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

            {/* Not contractual yet — see sprintLandingFlags (khufu HQ todo cmtt6tt9). */}
            {sprintLandingFlags.prototypeOffer && (
              <div className="mt-8 rounded-[var(--radius-lg)] border border-[color-mix(in_srgb,var(--color-paper)_25%,transparent)] p-5">
                <p className="font-semibold">{c.prototype.title[locale]}</p>
                <p className="mt-2 text-sm text-[var(--color-paper-2)]">{c.prototype.body[locale]}</p>
              </div>
            )}
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
