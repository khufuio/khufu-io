import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { Price, PricedText } from '@/components/ui/price'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)
  return buildMetadata({
    locale: loc,
    routeKey: 'remote',
    title: dict.remotePage.metaTitle,
    description: dict.remotePage.metaDescription,
  })
}

export default async function RemotePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const r = dict.remotePage
  const offer = dict.offers.items.find((o) => o.id === 'regie')!

  return (
    <>
      <PageHeader kicker={r.kicker} title={r.title} subtitle={r.subtitle} />

      <section>
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-8">
              <p className="text-sm text-[var(--color-muted)]">{offer.name}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold">
                  <Price eur={offer.priceEur} locale={locale} />
                </span>
                <span className="text-[var(--color-muted)]">{offer.priceNote}</span>
              </div>
              <p className="mt-4 text-[var(--color-ink-2)]">
                <PricedText text={offer.pitch} locale={locale} />
              </p>
              <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)]">{dict.offers.remoteNote}</p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">
              {r.includesTitle}
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {offer.features.map((f) => (
                <li key={f} className="flex gap-3 text-lg text-[var(--color-ink-2)]">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs text-[var(--color-accent-ink)]">
                    ✓
                  </span>
                  <PricedText text={f} locale={locale} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBanner title={r.ctaTitle} body={r.ctaBody} buttonLabel={r.ctaButton} href={href(locale, 'contact')} />
    </>
  )
}
