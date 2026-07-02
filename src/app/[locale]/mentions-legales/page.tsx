import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { site } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)
  return buildMetadata({
    locale: loc,
    routeKey: 'legal',
    title: dict.legalPage.metaTitle,
    description: dict.legalPage.metaDescription,
  })
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const l = getDictionary(locale).legalPage
  const { legal } = site

  const rows: { label: string; value: React.ReactNode }[] = [
    { label: l.editorLabel, value: legal.entity },
    { label: l.addressLabel, value: legal.address },
    { label: l.licenseLabel, value: legal.tradeLicense },
    { label: l.directorLabel, value: legal.publicationDirector },
    {
      label: l.hostLabel,
      value: (
        <>
          {legal.host.name} — {legal.host.address}
        </>
      ),
    },
    {
      label: l.contactLabel,
      value: (
        <a href={`mailto:${site.email}`} className="text-[var(--color-accent-ink)] hover:underline">
          {site.email}
        </a>
      ),
    },
  ]

  return (
    <>
      <PageHeader title={l.title} subtitle={l.intro} />
      <section>
        <Container className="py-16 sm:py-20">
          <dl className="max-w-2xl divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {rows.map((r) => (
              <div key={r.label} className="grid gap-1 py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-[var(--color-ink)]">{r.label}</dt>
                <dd className="text-[var(--color-ink-2)]">{r.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 max-w-2xl">
            <h2 className="text-lg font-semibold">{l.ipTitle}</h2>
            <p className="mt-3 text-[var(--color-ink-2)]">{l.ipBody}</p>
          </div>
        </Container>
      </section>
    </>
  )
}
