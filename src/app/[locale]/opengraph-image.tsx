import { ImageResponse } from 'next/og'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { ARABIC, ARABIC_FALLBACK } from '@/lib/ogImage'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Khufu — Votre V1 en 1 semaine'

export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = getDictionary(isLocale(locale) ? locale : 'fr')
  // satori can't shape arabic — fall back to a latin brand card (see ogImage.tsx).
  const isArabic = ARABIC.test(dict.home.heroTitle)
  const title = isArabic ? ARABIC_FALLBACK.title : dict.home.heroTitle
  const subtitle = isArabic ? ARABIC_FALLBACK.eyebrow : `${dict.home.heroKicker} · ${dict.home.heroProof}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#fbfbf9',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#4c30ff',
              color: '#fff',
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 6, color: '#0e0e10' }}>KHUFU</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1, color: '#0e0e10' }}>
            {title}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: '#3a3a40', maxWidth: 900 }}>
            {subtitle}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
