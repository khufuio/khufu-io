import { isLocale, type Locale } from '@/i18n/config'
import { projects, getProject } from '@/content/projects'
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Khufu'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function OgImage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const project = getProject(slug)
  return renderOg({
    eyebrow: project ? project.type[loc] : 'Khufu',
    title: project ? project.name : 'Khufu',
    footer: project ? project.tagline[loc] : undefined,
  })
}
