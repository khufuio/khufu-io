import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, type Locale } from '@/i18n/config'
import { href, site } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { articleSlugs, getArticle, relatedArticles, blogUi, type ArticleBlock } from '@/content/articles'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { GuideCta } from '@/components/leadMagnets/guideCta'
import { getLeadMagnet, guideForArticle } from '@/content/leadMagnets'
import { ui } from '@/i18n/ui'
import { getDictionary } from '@/i18n/getDictionary'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/jsonLd'

export function generateStaticParams() {
  return articleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const a = getArticle(loc, slug)
  if (!a) return {}
  return buildMetadata({ locale: loc, routeKey: 'blog', slug, title: a.title, description: a.excerpt })
}

function Block({ block }: { block: ArticleBlock }) {
  if ('h2' in block) {
    return (
      <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em] text-balance">
        {block.h2}
      </h2>
    )
  }
  if ('ul' in block) {
    return (
      <ul className="mt-4 flex flex-col gap-2.5">
        {block.ul.map((item) => (
          <li key={item} className="flex gap-2.5 text-[var(--color-ink-2)]">
            <span className="mt-0.5 shrink-0 text-[var(--color-accent-ink)]" aria-hidden>
              •
            </span>
            <span className="text-pretty">{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  if ('quote' in block) {
    return (
      <blockquote className="mt-8 border-l-2 border-[var(--color-accent)] pl-5 text-lg font-medium text-[var(--color-ink)] text-pretty">
        {block.quote}
      </blockquote>
    )
  }
  return <p className="mt-5 text-lg text-[var(--color-ink-2)] text-pretty">{block.p}</p>
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: raw, slug } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const a = getArticle(locale, slug)
  if (!a) notFound()
  const related = relatedArticles(locale, slug, 3)
  const articleUrl = `${site.url}${href(locale, 'blog', a.slug)}`
  const guide = getLeadMagnet(guideForArticle(slug))

  return (
    <>
      <ArticleJsonLd
        headline={a.title}
        description={a.excerpt}
        url={articleUrl}
        image={`${articleUrl}/opengraph-image`}
        datePublished={a.date}
        locale={locale}
      />
      <BreadcrumbJsonLd
        items={[
          { name: blogUi.title[locale], url: `${site.url}${href(locale, 'blog')}` },
          { name: a.title, url: `${site.url}${href(locale, 'blog', a.slug)}` },
        ]}
      />

      <PageHeader kicker={blogUi.navLabel[locale]} title={a.title} subtitle={a.excerpt} />

      <section>
        <Container className="py-12 sm:py-16">
          <p className="text-sm text-[var(--color-muted)]">
            {a.readingMinutes} {blogUi.minRead[locale]}
          </p>
          <article className="mt-6 max-w-2xl">
            {a.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>

          {/* Contextual offer at the end of the read: the guide matching the
              article's subject. The contact CTA is not repeated here — the
              CtaBanner at the bottom of the page already carries that copy. */}
          {guide && <GuideCta locale={locale} magnet={guide} source="blog-article" />}

          <div className="mt-12">
            <Link href={href(locale, 'blog')} className="text-sm font-medium text-[var(--color-accent-ink)] hover:underline">
              ← {blogUi.backToBlog[locale]}
            </Link>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-[var(--color-paper-2)]">
          <Container className="py-16 sm:py-20">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              {ui.relatedResources[locale]}
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={href(locale, 'blog', r.slug)}
                  className="group flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-6 transition-colors hover:border-[var(--color-ink)]"
                >
                  <div className="flex flex-wrap gap-2">
                    {r.tags.slice(0, 2).map((t) => (
                      <span key={t} className="rounded-full bg-[var(--color-paper-2)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink-2)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.01em] text-balance">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-[var(--color-ink-2)] text-pretty">{r.excerpt}</p>
                  <span className="mt-4 text-xs text-[var(--color-muted)]">
                    {r.readingMinutes} {blogUi.minRead[locale]}
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBanner
        title={dict.home.finalCtaTitle}
        body={dict.home.finalCtaBody}
        buttonLabel={dict.home.finalCtaButton}
        href={href(locale, 'contact')}
      />
    </>
  )
}
