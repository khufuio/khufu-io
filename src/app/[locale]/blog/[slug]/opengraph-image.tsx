import { isLocale, type Locale } from '@/i18n/config'
import { articleSlugs, getArticle, blogUi } from '@/content/articles'
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Khufu'

export function generateStaticParams() {
  return articleSlugs().map((slug) => ({ slug }))
}

export default async function OgImage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const article = getArticle(loc, slug)
  return renderOg({
    eyebrow: blogUi.navLabel[loc],
    title: article ? article.title : 'Khufu',
  })
}
