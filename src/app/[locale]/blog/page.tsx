import Link from 'next/link'
import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { href } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { publishedArticles, blogUi } from '@/content/articles'
import { getDictionary } from '@/i18n/getDictionary'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { GuideStrip } from '@/components/leadMagnets/guideStrip'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  return buildMetadata({
    locale: loc,
    routeKey: 'blog',
    title: blogUi.metaTitle[loc],
    description: blogUi.metaDescription[loc],
  })
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const posts = publishedArticles(locale)

  return (
    <>
      <PageHeader kicker={blogUi.navLabel[locale]} title={blogUi.title[locale]} subtitle={blogUi.subtitle[locale]} />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={href(locale, 'blog', post.slug)}
                className="group flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white p-7 transition-colors hover:border-[var(--color-ink)]"
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[var(--color-paper-2)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink-2)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-balance">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-[var(--color-ink-2)] text-pretty">{post.excerpt}</p>
                <p className="mt-5 text-xs text-[var(--color-muted)]">
                  {post.readingMinutes} {blogUi.minRead[locale]}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <GuideStrip locale={locale} source="blog-index" />

      <CtaBanner
        title={dict.home.finalCtaTitle}
        body={dict.home.finalCtaBody}
        buttonLabel={dict.home.finalCtaButton}
        href={href(locale, 'contact')}
      />
    </>
  )
}
