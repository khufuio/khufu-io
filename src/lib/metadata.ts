import type { Metadata } from 'next'
import { locales, localeHrefLang, type Locale } from '@/i18n/config'
import { site, href, type RouteKey } from '@/content/site'

/**
 * Build per-page metadata with correct canonical + hreflang alternates.
 * Reused by every route's generateMetadata.
 */
export function buildMetadata({
  locale,
  routeKey,
  slug,
  title,
  description,
}: {
  locale: Locale
  routeKey: RouteKey
  slug?: string
  title: string
  description: string
}): Metadata {
  const path = href(locale, routeKey, slug)
  const canonical = `${site.url}${path}`

  const languages = Object.fromEntries(
    locales.map((l) => [localeHrefLang[l], `${site.url}${href(l, routeKey, slug)}`]),
  )

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, 'x-default': `${site.url}${href('fr', routeKey, slug)}` },
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: site.name,
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}
