import type { MetadataRoute } from 'next'
import { locales, localeHrefLang } from '@/i18n/config'
import { site, href, routes, type RouteKey } from '@/content/site'
import { projects } from '@/content/projects'
import { comparisons, useCases } from '@/content/geo'

// Top-level routes that exist for every locale.
const topRoutes = Object.keys(routes) as RouteKey[]

// Legal pages are low-value for crawl/ranking — keep them indexable but deprioritized.
const lowPriorityRoutes = new Set<RouteKey>(['legal', 'privacy'])

// Build-time timestamp shared by every entry; bump happens naturally on redeploy.
const lastModified = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  const alt = (key: RouteKey, slug?: string) => ({
    languages: Object.fromEntries(
      locales.map((l) => [localeHrefLang[l], `${site.url}${href(l, key, slug)}`]),
    ),
  })

  for (const key of topRoutes) {
    const priority = key === 'home' ? 1 : lowPriorityRoutes.has(key) ? 0.3 : 0.7
    for (const locale of locales) {
      entries.push({
        url: `${site.url}${href(locale, key)}`,
        lastModified,
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
        lastModified,
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
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: alt(key, slug),
      })
    }
  }

  return entries
}
