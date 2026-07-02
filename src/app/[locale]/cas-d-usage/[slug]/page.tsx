import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, site } from '@/content/site'
import { useCases, getUseCase } from '@/content/geo'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { ButtonLink } from '@/components/ui/button'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { BreadcrumbJsonLd } from '@/components/seo/jsonLd'

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const u = getUseCase(slug)
  if (!u) return {}
  return buildMetadata({
    locale: loc,
    routeKey: 'useCases',
    slug,
    title: u.metaTitle[loc],
    description: u.metaDescription[loc],
  })
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: raw, slug } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const u = getUseCase(slug)
  if (!u) notFound()
  const g = dict.geo

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: g.useCasesMetaTitle, url: `${site.url}${href(locale, 'useCases')}` },
          { name: u.title[locale], url: `${site.url}${href(locale, 'useCases', u.slug)}` },
        ]}
      />
      <PageHeader kicker={u.persona[locale]} title={u.title[locale]} subtitle={u.intro[locale]} />

      <section>
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">{g.problemLabel}</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {u.problems.map((p) => (
                <li key={p[locale]} className="flex gap-3 text-[var(--color-ink-2)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-muted)]" aria-hidden />
                  {p[locale]}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">{g.outcomesLabel}</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {u.outcomes.map((o) => (
                <li key={o[locale]} className="flex gap-3 text-[var(--color-ink)]">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs text-[var(--color-accent-ink)]">
                    ✓
                  </span>
                  {o[locale]}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
              {g.approachLabel}
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-2)] text-pretty">{u.approach[locale]}</p>
            <div className="mt-8">
              <ButtonLink href={href(locale, u.cta)} size="lg">
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
