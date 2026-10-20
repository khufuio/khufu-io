import type { MetadataRoute } from 'next'
import { locales, defaultLocale, localeHrefLang, type Locale } from '@/i18n/config'
import { site, href, routes, type RouteKey } from '@/content/site'
import { projects } from '@/content/projects'
import { comparisons, useCases } from '@/content/geo'
import { articleSlugs } from '@/content/articles'
import { leadMagnets } from '@/content/leadMagnets'
import { sprintSlots } from '@/lib/sprintSlots'
import { computeSources, type SitemapPage, type SourcesManifest } from '@/lib/sitemapLastModified'

/**
 * Every URL of the sitemap, with the route file that renders it — shared by
 * app/sitemap.ts and the manifest it is dated from (app/sitemap-sources.json),
 * so the two can never list different pages. How `lastModified` is derived:
 * lib/sitemapLastModified.ts.
 */
export type SitemapEntry = MetadataRoute.Sitemap[number] & SitemapPage

// Top-level routes that exist for every locale.
const topRoutes = Object.keys(routes) as RouteKey[]

// Legal pages are low-value for crawl/ranking — keep them indexable but deprioritized.
const lowPriorityRoutes = new Set<RouteKey>(['legal', 'privacy'])

// Site-wide chrome: not the page's main content, so its edits do not re-date
// every URL (Google: lastmod is "the last significant update" of the content).
// The [locale] layout is not walked either — it is never an entry.
const CHROME = ['src/components/layout/', 'src/components/analytics/', 'src/lib/analytics.ts']

function entryFor(key: RouteKey, slug?: string): string {
  const segment = routes[key] === '' ? '' : `/${routes[key]}`
  return `src/app/[locale]${segment}${slug === undefined ? '' : '/[slug]'}/page.tsx`
}

function pages(): SitemapEntry[] {
  const entries: SitemapEntry[] = []

  // `x-default` must match what the pages themselves declare (see lib/metadata.ts):
  // Google treats sitemap and on-page hreflang as one set, and a missing x-default
  // here made the two disagree on every localized URL.
  const alt = (key: RouteKey, slug?: string) => ({
    languages: {
      ...Object.fromEntries(
        locales.map((l) => [localeHrefLang[l], `${site.url}${href(l, key, slug)}`]),
      ),
      'x-default': `${site.url}${href(defaultLocale, key, slug)}`,
    },
  })

  const localized = (
    key: RouteKey,
    slug: string | undefined,
    fields: Pick<SitemapEntry, 'changeFrequency' | 'priority'>,
    extra?: (locale: Locale) => string[],
  ): void => {
    for (const locale of locales) {
      entries.push({
        url: `${site.url}${href(locale, key, slug)}`,
        entry: entryFor(key, slug),
        locale,
        extra: extra?.(locale),
        ...fields,
        alternates: alt(key, slug),
      })
    }
  }

  for (const key of topRoutes) {
    // `sprint` is the paid-traffic landing and the page the whole offer hangs
    // off — it outranks the other top-level pages on purpose.
    const priority = key === 'home' ? 1 : key === 'sprint' ? 0.9 : lowPriorityRoutes.has(key) ? 0.3 : 0.7
    localized(
      key,
      undefined,
      { changeFrequency: key === 'home' ? 'weekly' : 'monthly', priority },
      // Its hero lists the next open start dates, computed from the clock.
      key === 'sprint' ? (locale) => [JSON.stringify(sprintSlots(locale))] : undefined,
    )
  }

  for (const p of projects) localized('work', p.slug, { changeFrequency: 'monthly', priority: 0.6 })

  const dynamic: { key: RouteKey; slug: string }[] = [
    ...comparisons.map((c) => ({ key: 'comparisons' as RouteKey, slug: c.slug })),
    ...useCases.map((u) => ({ key: 'useCases' as RouteKey, slug: u.slug })),
  ]
  for (const { key, slug } of dynamic) localized(key, slug, { changeFrequency: 'monthly', priority: 0.7 })

  for (const slug of articleSlugs()) localized('blog', slug, { changeFrequency: 'monthly', priority: 0.7 })

  // Lead-magnet landing pages: single-language (English), no locale prefix and
  // no alternates. High priority — these are the paid-traffic entry points.
  for (const magnet of leadMagnets) {
    entries.push({
      url: `${site.url}/${magnet.slug}`,
      entry: `src/app/(lead-magnets)/${magnet.slug}/page.tsx`,
      // Its footer prints the current year.
      extra: [String(new Date().getUTCFullYear())],
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  return entries
}

let sources: Promise<{ entries: SitemapEntry[]; manifest: SourcesManifest }> | undefined

/** The sitemap's pages and the manifest they are dated from, computed once per build process. */
export function sitemapSources(): Promise<{ entries: SitemapEntry[]; manifest: SourcesManifest }> {
  sources ??= (async () => {
    const entries = pages()
    const manifest = await computeSources(entries, {
      rootDir: process.cwd(),
      origin: site.url,
      locales,
      chrome: CHROME,
      aliases: { '@/': 'src/' },
      // Inlined at compile time (next.config.ts), so the sitemap and the
      // manifest — prerendered in different workers — stamp the same instant.
      buildTime: new Date(process.env.SITEMAP_BUILD_TIME ?? Date.now()),
    })
    return { entries, manifest }
  })()
  return sources
}
