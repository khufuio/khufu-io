import { isLocale, type Locale } from '@/i18n/config'
import { comparisons, getComparison } from '@/content/geo'
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Khufu'

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }))
}

export default async function OgImage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const c = getComparison(slug)
  const labels: Record<Locale, string> = {
    fr: 'Comparatif',
    en: 'Comparison',
    es: 'Comparativa',
    de: 'Vergleich',
    it: 'Confronto',
    pt: 'Comparação',
    nl: 'Vergelijking',
    ar: 'مقارنة',
    pl: 'Porównanie',
    tr: 'Karşılaştırma',
  }
  return renderOg({
    eyebrow: labels[loc],
    title: c ? c.title[loc] : 'Khufu',
  })
}
