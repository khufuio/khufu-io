import { sitemapSources } from '@/lib/sitemapPages'

/**
 * What every sitemap URL was built from, and its lastmod — published with each
 * deploy so the NEXT production build can tell which pages it changes and carry
 * the others' dates over (lib/sitemapLastModified.ts). A build artifact, not a
 * page: never indexed.
 */
export const dynamic = 'force-static'

export async function GET(): Promise<Response> {
  const { manifest } = await sitemapSources()
  return Response.json(manifest, { headers: { 'X-Robots-Tag': 'noindex' } })
}
