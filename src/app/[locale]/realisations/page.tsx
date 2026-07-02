import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, site } from '@/content/site'
import { projects } from '@/content/projects'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { ProjectCard } from '@/components/sections/projectCard'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { BreadcrumbJsonLd } from '@/components/seo/jsonLd'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)
  return buildMetadata({
    locale: loc,
    routeKey: 'work',
    title: dict.work.metaTitle,
    description: dict.work.metaDescription,
  })
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.offers, url: `${site.url}/${locale}` },
          { name: dict.nav.work, url: `${site.url}${href(locale, 'work')}` },
        ]}
      />
      <PageHeader kicker={dict.nav.work} title={dict.work.title} subtitle={dict.work.subtitle} />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} locale={locale} dict={dict} />
            ))}
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
