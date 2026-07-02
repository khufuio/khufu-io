import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, site } from '@/content/site'
import { comparisons, getComparison } from '@/content/geo'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { ButtonLink } from '@/components/ui/button'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { BreadcrumbJsonLd } from '@/components/seo/jsonLd'

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const c = getComparison(slug)
  if (!c) return {}
  return buildMetadata({
    locale: loc,
    routeKey: 'comparisons',
    slug,
    title: c.metaTitle[loc],
    description: c.metaDescription[loc],
  })
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: raw, slug } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const c = getComparison(slug)
  if (!c) notFound()

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.geo.comparisonsMetaTitle, url: `${site.url}${href(locale, 'comparisons')}` },
          { name: c.title[locale], url: `${site.url}${href(locale, 'comparisons', c.slug)}` },
        ]}
      />
      <PageHeader kicker={dict.geo.comparisonsMetaTitle} title={c.title[locale]} subtitle={c.intro[locale]} />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--color-line)]">
                  <th className="py-4 pr-4 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    {dict.geo.aspectLabel}
                  </th>
                  <th className="py-4 pr-4 font-[family-name:var(--font-display)] text-base font-bold text-[var(--color-accent-ink)]">
                    {c.khufuLabel[locale]}
                  </th>
                  <th className="py-4 font-[family-name:var(--font-display)] text-base font-bold text-[var(--color-ink-2)]">
                    {c.otherLabel[locale]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((row) => (
                  <tr key={row.aspect[locale]} className="border-b border-[var(--color-line)] align-top">
                    <td className="py-4 pr-4 text-sm font-medium text-[var(--color-ink)]">{row.aspect[locale]}</td>
                    <td className="py-4 pr-4 text-[var(--color-ink)]">
                      <span className="mr-2 text-[var(--color-accent-ink)]" aria-hidden>
                        ✓
                      </span>
                      {row.khufu[locale]}
                    </td>
                    <td className="py-4 text-[var(--color-muted)]">{row.other[locale]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 max-w-2xl">
            <p className="text-lg text-[var(--color-ink-2)] text-pretty">{c.conclusion[locale]}</p>
            <div className="mt-6">
              <ButtonLink href={href(locale, c.cta)} size="lg">
                {dict.offers.sprintCta}
              </ButtonLink>
            </div>
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
