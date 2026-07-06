import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href, site } from '@/content/site'
import { projects, getProject } from '@/content/projects'
import { getClient } from '@/content/clients'
import { buildMetadata } from '@/lib/metadata'
import { ui } from '@/i18n/ui'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { JsonLd, BreadcrumbJsonLd } from '@/components/seo/jsonLd'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const project = getProject(slug)
  if (!project) return {}
  return buildMetadata({
    locale: loc,
    routeKey: 'work',
    slug,
    title: `${project.name} — ${project.tagline[loc]}`,
    description: project.description[loc],
  })
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: raw, slug } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const project = getProject(slug)
  if (!project) notFound()
  const logo = project.logo ?? getClient(project.slug)?.logo

  const creativeWork = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description[locale],
    ...(project.url && { url: project.url }),
    creator: { '@type': 'Organization', name: site.name, url: site.url },
    keywords: project.stack.join(', '),
    ...(project.year && { dateCreated: String(project.year) }),
  }

  return (
    <>
      <JsonLd data={creativeWork} />
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.work, url: `${site.url}${href(locale, 'work')}` },
          { name: project.name, url: `${site.url}${href(locale, 'work', project.slug)}` },
        ]}
      />

      <section className="border-b border-[var(--color-line)]">
        <Container className="pt-14 pb-14 sm:pt-20 sm:pb-16">
          <ButtonLink href={href(locale, 'work')} variant="ghost" className="-ml-3 mb-8">
            ← {dict.work.backToWork}
          </ButtonLink>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
              {project.type[locale]}
            </span>
            <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-accent-ink)]">
              {project.internal ? dict.work.internalLabel : dict.work.clientLabel}
            </span>
            {project.year && <span className="text-xs text-[var(--color-muted)]">{project.year}</span>}
          </div>

          {logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} alt={project.name} className="mt-6 h-10 w-auto max-w-[220px] object-contain" />
          )}

          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold tracking-[-0.03em] sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-[var(--color-ink-2)] text-pretty">{project.tagline[locale]}</p>

          {project.url && (
            <div className="mt-8">
              <ButtonLink href={project.url} target="_blank" rel="noreferrer">
                {dict.work.visitLabel} ↗
              </ButtonLink>
            </div>
          )}
        </Container>
      </section>

      {project.image && (
        <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-2)]">
          <Container className="py-10 sm:py-14">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white">
              <Image src={project.image} alt={project.name} fill sizes="100vw" className="object-cover" priority />
            </div>
          </Container>
        </section>
      )}

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div className="max-w-2xl space-y-10">
              <p className="text-lg text-[var(--color-ink-2)] text-pretty">{project.description[locale]}</p>

              {project.challenge && (
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">
                    {ui.challenge[locale]}
                  </h2>
                  <p className="mt-4 text-lg text-[var(--color-ink-2)] text-pretty">{project.challenge[locale]}</p>
                </div>
              )}

              {project.approach && (
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">
                    {ui.approach[locale]}
                  </h2>
                  <p className="mt-4 text-lg text-[var(--color-ink-2)] text-pretty">{project.approach[locale]}</p>
                </div>
              )}

              {project.results && project.results.length > 0 && (
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">
                    {ui.results[locale]}
                  </h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.results.map((r, i) => (
                      <li
                        key={i}
                        className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-5 text-base font-medium text-[var(--color-ink)]"
                      >
                        {r[locale]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <aside>
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-paper-2)] p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  {dict.work.stackLabel}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-full bg-white px-3 py-1.5 text-sm text-[var(--color-ink-2)]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
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
