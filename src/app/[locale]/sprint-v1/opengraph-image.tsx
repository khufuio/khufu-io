import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Khufu — Sprint V1'

/**
 * Own card for the paid-traffic landing.
 *
 * `buildMetadata` sets `openGraph` explicitly, which stops Next from inheriting
 * the locale-level opengraph-image — so every page built on that helper ships
 * without a card. This page is the one with an ad budget behind it and gets
 * shared into LinkedIn feeds, so it carries its own.
 */
export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)

  return renderOg({
    eyebrow: dict.offers.items.find((o) => o.id === 'sprint')?.name ?? 'Sprint V1',
    title: dict.sprintPage.title,
    footer: dict.home.heroProof,
  })
}
