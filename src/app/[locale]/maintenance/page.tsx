import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { cn } from '@/lib/cn'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { SectionHeading } from '@/components/ui/sectionHeading'
import { ButtonLink } from '@/components/ui/button'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { Price, FirmPriceNote } from '@/components/ui/price'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)
  return buildMetadata({
    locale: loc,
    routeKey: 'maintenance',
    title: dict.maintenance.metaTitle,
    description: dict.maintenance.metaDescription,
  })
}

export default async function MaintenancePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const m = dict.maintenance

  return (
    <>
      <PageHeader kicker={m.kicker} title={m.title} subtitle={m.subtitle} />

      {/* What's included */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading title={m.includesTitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {m.includes.map((it, i) => (
              <div key={it.title} className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent-ink)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-[var(--color-ink-2)]">{it.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tiers */}
      <section className="bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={m.tiersTitle} subtitle={m.tiersSubtitle} />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {m.tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  'flex flex-col rounded-[var(--radius-xl)] border p-7',
                  tier.featured
                    ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]'
                    : 'border-[var(--color-line)] bg-white',
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">{tier.name}</h3>
                  {tier.featured && (
                    <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      {m.popularBadge}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-bold">
                    {tier.priceEur != null ? <Price eur={tier.priceEur} locale={locale} /> : tier.price}
                  </span>
                  {tier.priceNote && (
                    <span className={cn('text-sm', tier.featured ? 'text-[var(--color-paper-2)]' : 'text-[var(--color-muted)]')}>
                      {tier.priceNote}
                    </span>
                  )}
                </div>
                <p className={cn('mt-3 text-sm', tier.featured ? 'text-[var(--color-paper-2)]' : 'text-[var(--color-ink-2)]')}>
                  {tier.pitch}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <span
                        className={cn('mt-0.5 shrink-0', tier.featured ? 'text-[var(--color-accent)]' : 'text-[var(--color-accent-ink)]')}
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span className={tier.featured ? 'text-[var(--color-paper)]' : 'text-[var(--color-ink-2)]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={href(locale, 'contact')}
                  variant={tier.featured ? 'primary' : 'secondary'}
                  className="mt-7 w-full"
                >
                  {dict.common.getStarted}
                </ButtonLink>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm text-[var(--color-muted)]">{m.devNote}</p>
          <FirmPriceNote className="mt-3 max-w-3xl text-xs text-[var(--color-muted)]">{dict.offers.firmPriceNote}</FirmPriceNote>
        </Container>
      </section>

      <CtaBanner title={m.ctaTitle} body={m.ctaBody} buttonLabel={m.ctaButton} href={href(locale, 'contact')} />
    </>
  )
}
