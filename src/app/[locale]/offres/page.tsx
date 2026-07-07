import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, type RouteKey } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { SectionHeading } from '@/components/ui/sectionHeading'
import { ButtonLink } from '@/components/ui/button'
import { FaqAccordion } from '@/components/sections/faqAccordion'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { FaqJsonLd, ServiceJsonLd } from '@/components/seo/jsonLd'
import { Price, FirmPriceNote, PricedText } from '@/components/ui/price'
import { stripPriceTokens, dualPriceTokens } from '@/lib/currency'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)
  return buildMetadata({
    locale: loc,
    routeKey: 'offers',
    title: dict.offers.metaTitle,
    description: dict.offers.metaDescription,
  })
}

export default async function OffersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const o = dict.offers

  const sprint = o.items.find((i) => i.id === 'sprint')!
  const maintenance = o.items.find((i) => i.id === 'maintenance')!
  const remote = o.items.find((i) => i.id === 'regie')!

  const renderSecondary = (offer: typeof maintenance, routeKey: RouteKey) => (
    <div className="flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7">
      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">{offer.name}</h3>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-[family-name:var(--font-display)] text-2xl font-bold">
          {'pricePrefix' in offer ? offer.pricePrefix : null}
          <Price eur={offer.priceEur} locale={locale} />
        </span>
        <span className="text-sm text-[var(--color-muted)]">{offer.priceNote}</span>
      </div>
      <p className="mt-3 text-sm text-[var(--color-ink-2)]">
        <PricedText text={offer.pitch} locale={locale} />
      </p>
      <ul className="mt-5 flex flex-1 flex-col gap-2.5">
        {offer.features.slice(0, 4).map((f) => (
          <li key={f} className="flex gap-2 text-sm text-[var(--color-ink-2)]">
            <span className="mt-0.5 shrink-0 text-[var(--color-accent-ink)]" aria-hidden>
              ✓
            </span>
            <PricedText text={f} locale={locale} />
          </li>
        ))}
      </ul>
      <ButtonLink href={href(locale, routeKey)} variant="secondary" className="mt-6 w-full">
        {o.detailCta} →
      </ButtonLink>
    </div>
  )

  return (
    <>
      <FaqJsonLd items={dict.faq.items.map((i) => ({ q: i.q, a: dualPriceTokens(i.a, locale) }))} />
      <ServiceJsonLd name={sprint.name} description={sprint.pitch} priceEUR={sprint.priceEur} />
      <ServiceJsonLd name={maintenance.name} description={maintenance.pitch} priceEUR={maintenance.priceEur} />
      <ServiceJsonLd name={remote.name} description={stripPriceTokens(remote.pitch, locale)} priceEUR={remote.priceEur} />
      <PageHeader kicker={dict.nav.offers} title={o.title} subtitle={o.subtitle} />

      {/* Offers: Sprint V1 emphasised in the centre, the two others smaller on the sides */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_1.35fr_1fr]">
            <div className="lg:order-1">{renderSecondary(maintenance, 'maintenance')}</div>

            {/* Sprint V1 — flagship */}
            <div className="lg:order-2 lg:-my-6">
              <div className="flex flex-col rounded-[var(--radius-xl)] bg-[var(--color-ink)] p-9 text-[var(--color-paper)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
                <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-accent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                  ★ {o.flagshipBadge}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold">{sprint.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-bold">
                    <Price eur={sprint.priceEur} locale={locale} />
                  </span>
                  <span className="text-[var(--color-paper-2)]">{sprint.priceNote}</span>
                </div>
                <p className="mt-4 text-[var(--color-paper-2)]">{sprint.pitch}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {sprint.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden>
                        ✓
                      </span>
                      <span className="text-[var(--color-paper)]">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3">
                  <ButtonLink href={href(locale, 'sprint')} size="lg" className="w-full">
                    {o.sprintCta}
                  </ButtonLink>
                  <ButtonLink href={href(locale, 'contact')} variant="ghost" className="w-full text-[var(--color-paper)] hover:bg-white/10">
                    {sprint.cta}
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="lg:order-3">{renderSecondary(remote, 'remote')}</div>
          </div>
          <FirmPriceNote className="mt-8 text-center text-xs text-[var(--color-muted)]">{o.firmPriceNote}</FirmPriceNote>
        </Container>
      </section>

      {/* Guarantees */}
      <section className="border-t border-[var(--color-line)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={o.guaranteesTitle} />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {o.guarantees.map((g) => (
              <div key={g} className="flex flex-col gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)] text-lg text-white" aria-hidden>
                  ✓
                </span>
                <p className="text-lg text-[var(--color-ink)] text-pretty">{g}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={dict.faq.title} />
          <div className="mt-10">
            <FaqAccordion items={dict.faq.items} locale={locale} />
          </div>
        </Container>
      </section>

      <CtaBanner
        title={dict.home.finalCtaTitle}
        body={dict.home.finalCtaBody}
        buttonLabel={dict.home.finalCtaButton}
        href={href(locale, 'contact')}
      />
    </>
  )
}
