import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { SectionHeading } from '@/components/ui/sectionHeading'
import { FaqAccordion } from '@/components/sections/faqAccordion'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { FaqJsonLd } from '@/components/seo/jsonLd'
import { Price } from '@/components/ui/price'
import { stripPriceTokens } from '@/lib/currency'

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

export default async function SprintPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const s = dict.sprintPage
  const offer = dict.offers.items.find((o) => o.id === 'sprint')!
  const m = dict.method

  return (
    <>
      <FaqJsonLd items={dict.faq.items.map((i) => ({ q: i.q, a: stripPriceTokens(i.a, locale) }))} />
      <PageHeader kicker={s.kicker} title={s.title} subtitle={s.subtitle} />

      {/* Price + includes */}
      <section>
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-ink)] p-8 text-[var(--color-paper)]">
              <p className="text-sm text-[var(--color-paper-2)]">{offer.name}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold">
                  <Price eur={offer.priceEur} locale={locale} />
                </span>
                <span className="text-[var(--color-paper-2)]">{offer.priceNote}</span>
              </div>
              <p className="mt-4 text-[var(--color-paper-2)]">{offer.pitch}</p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">
              {s.includesTitle}
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {offer.features.map((f) => (
                <li key={f} className="flex gap-3 text-lg text-[var(--color-ink-2)]">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs text-[var(--color-accent-ink)]">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Day-by-day process */}
      <section className="bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={s.processTitle} />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {m.days.map((d) => (
              <li key={d.day} className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-ink)]">{d.day}</p>
                <h3 className="mt-1 font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-2)]">{d.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-sm text-[var(--color-muted)]">{m.storeNote}</p>
        </Container>
      </section>

      {/* FAQ */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading title={dict.faq.title} />
          <div className="mt-10">
            <FaqAccordion items={dict.faq.items} locale={locale} />
          </div>
        </Container>
      </section>

      <CtaBanner title={s.ctaTitle} body={s.ctaBody} buttonLabel={s.ctaButton} href={href(locale, 'contact')} />
    </>
  )
}
