import { defaultLocale, isLocale, type Locale } from '@/i18n/config'
import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage'
import { proofCopy, proofProducts } from '@/content/proof'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Khufu — Proof'

/**
 * Own card: this is the link pasted into LinkedIn DMs and emails, so the
 * preview carries the answer itself — every V1 with its real duration.
 */
export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : defaultLocale

  return renderOg({
    eyebrow: proofCopy.kicker[loc],
    title: proofCopy.title[loc],
    footer: proofProducts.map((p) => `${p.name} ${p.duration[loc]}`).join(' · '),
    titleSize: 60,
  })
}
