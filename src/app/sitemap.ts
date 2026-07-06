import type { MetadataRoute } from 'next'
import { locales, localeHrefLang } from '@/i18n/config'
import { site, href, routes, type RouteKey } from '@/content/site'
import { projects } from '@/content/projects'
import { comparisons, useCases } from '@/content/geo'
import { articleDatedSlugs } from '@/content/articles'

// Top-level routes that exist for every locale.
const topRoutes = Object.keys(routes) as RouteKey[]

// Legal pages are low-value for crawl/ranking — keep them indexable but deprioritized.
const lowPriorityRoutes = new Set<RouteKey>(['legal', 'privacy'])

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  const alt = (key: RouteKey, slug?: string) => ({
    languages: Object.fromEntries(
      locales.map((l) => [localeHrefLang[l], `${site.url}${href(l, key, slug)}`]),
    ),
  })

  // No `lastModified` on evergreen pages: Google prefers no lastmod over a fake one
  // (a build-time `new Date()` would falsely bump every URL on each deploy). Only blog
  // articles, which have a real publication date, carry lastModified.
  for (const key of topRoutes) {
    const priority = key === 'home' ? 1 : lowPriorityRoutes.has(key) ? 0.3 : 0.7
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

  return entries
}
