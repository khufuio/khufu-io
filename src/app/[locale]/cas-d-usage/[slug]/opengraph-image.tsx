import { isLocale, type Locale } from '@/i18n/config'
import { useCases, getUseCase } from '@/content/geo'
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Khufu'

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }))
}

export default async function OgImage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const u = getUseCase(slug)
  return renderOg({
    eyebrow: u ? u.persona[loc] : 'Khufu',
    title: u ? u.title[loc] : 'Khufu',
  })
}
