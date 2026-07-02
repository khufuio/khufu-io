import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)
  return buildMetadata({
    locale: loc,
    routeKey: 'privacy',
    title: dict.privacyPage.metaTitle,
    description: dict.privacyPage.metaDescription,
  })
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const p = getDictionary(locale).privacyPage

  return (
    <>
      <PageHeader title={p.title} subtitle={p.updated} />
      <section>
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl space-y-10">
            {p.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-lg font-semibold">{s.heading}</h2>
                <p className="mt-3 text-[var(--color-ink-2)] text-pretty">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
