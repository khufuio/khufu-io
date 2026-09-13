import type { MetadataRoute } from 'next'
import { locales, defaultLocale, localeHrefLang } from '@/i18n/config'
import { site, href, routes, type RouteKey } from '@/content/site'
import { projects } from '@/content/projects'
import { comparisons, useCases } from '@/content/geo'
import { articleDatedSlugs } from '@/content/articles'
import { leadMagnets } from '@/content/leadMagnets'

// Top-level routes that exist for every locale.
const topRoutes = Object.keys(routes) as RouteKey[]

// Legal pages are low-value for crawl/ranking — keep them indexable but deprioritized.
const lowPriorityRoutes = new Set<RouteKey>(['legal', 'privacy'])

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

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

  // No `lastModified` on evergreen pages: Google prefers no lastmod over a fake one
  // (a build-time `new Date()` would falsely bump every URL on each deploy). Only blog
  // articles, which have a real publication date, carry lastModified.
  for (const key of topRoutes) {
    // `sprint` is the paid-traffic landing and the page the whole offer hangs
    // off — it outranks the other top-level pages on purpose.
    const priority = key === 'home' ? 1 : key === 'sprint' ? 0.9 : lowPriorityRoutes.has(key) ? 0.3 : 0.7
    for (const locale of locales) {
      entries.push({
        url: `${site.url}${href(locale, key)}`,
        changeFrequency: key === 'home' ? 'weekly' : 'monthly',
        priority,
        alternates: alt(key),
      })
    }
  }

  for (const p of projects) {
    for (const locale of locales) {
      entries.push({
        url: `${site.url}${href(locale, 'work', p.slug)}`,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: alt('work', p.slug),
      })
    }
  }

  const dynamic: { key: RouteKey; slug: string }[] = [
    ...comparisons.map((c) => ({ key: 'comparisons' as RouteKey, slug: c.slug })),
    ...useCases.map((u) => ({ key: 'useCases' as RouteKey, slug: u.slug })),
  ]
  for (const { key, slug } of dynamic) {
    for (const locale of locales) {
      entries.push({
        url: `${site.url}${href(locale, key, slug)}`,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alt(key, slug),
      })
    }
  }

  for (const { slug, date } of articleDatedSlugs()) {
    for (const locale of locales) {
      entries.push({
        url: `${site.url}${href(locale, 'blog', slug)}`,
        lastModified: date,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alt('blog', slug),
      })
    }
  }

  // Lead-magnet landing pages: single-language (English), no locale prefix and
  // no alternates. High priority — these are the paid-traffic entry points.
  for (const magnet of leadMagnets) {
    entries.push({
      url: `${site.url}/${magnet.slug}`,
      lastModified: magnet.updated,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  return entries
}
