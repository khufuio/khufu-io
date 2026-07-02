import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { OfferCards } from '@/components/sections/offerCards'
import { FaqAccordion } from '@/components/sections/faqAccordion'
import { SectionHeading } from '@/components/ui/sectionHeading'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { FaqJsonLd } from '@/components/seo/jsonLd'

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

  return (
    <>
      <FaqJsonLd items={dict.faq.items.map((i) => ({ q: i.q, a: i.a }))} />
      <PageHeader kicker={dict.nav.offers} title={o.title} subtitle={o.subtitle} />

      <section>
        <Container className="py-16 sm:py-20">
          <OfferCards locale={locale} dict={dict} />
        </Container>
      </section>

      <section className="bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={o.guaranteesTitle} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {o.guarantees.map((g) => (
              <li
                key={g}
                className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-6 text-[var(--color-ink-2)]"
              >
                <span className="mb-3 block text-[var(--color-accent-ink)]" aria-hidden>
                  ✓
                </span>
                {g}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading title={dict.faq.title} />
          <div className="mt-10">
            <FaqAccordion items={dict.faq.items} />
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
