import type { MetadataRoute } from 'next'
import { sitemapSources } from '@/lib/sitemapPages'

// Prerendered at build only: the dates are read from the source files, which a
// serverless function does not ship.
export const dynamic = 'force-static'

// `lastModified` is the date the page's CONTENT last changed on the live site —
// never the build time (decision cmvg4x1e): the deploy that last changed what
// the page is built from, carried over from the previous deploy's manifest.
// See lib/sitemapLastModified.ts; the page list is lib/sitemapPages.ts.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { entries, manifest } = await sitemapSources()
  return entries.map((e) => ({
    url: e.url,
    lastModified: manifest.pages[e.url].lastmod,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
    alternates: e.alternates,
  }))
}
