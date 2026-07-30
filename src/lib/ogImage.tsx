import { ImageResponse } from 'next/og'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

const INDIGO = '#4c30ff'

// satori (behind next/og) can't shape arabic — it needs contextual letter
// joining its font engine doesn't support, so an arabic string either tofus or
// crashes the renderer. Rather than that, arabic copy falls back to a clean
// latin brand card (see ARABIC_FALLBACK).
export const ARABIC = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/
export const ARABIC_FALLBACK = {
  eyebrow: 'AI-native product agency',
  title: 'Your V1 in one week.',
  footer: 'khufu.io · Your V1 in one week',
}

/** Shared Open Graph image renderer (brand-consistent, default sans font). */
export function renderOg({
  title,
  eyebrow,
  footer,
  titleSize = 68,
}: {
  title: string
  eyebrow?: string
  footer?: string
  /** Lower it for long headlines (guide titles) so the card stays on one screen. */
  titleSize?: number
}): ImageResponse {
  if (ARABIC.test(`${title} ${eyebrow ?? ''} ${footer ?? ''}`)) {
    title = ARABIC_FALLBACK.title
    eyebrow = ARABIC_FALLBACK.eyebrow
    footer = footer && ARABIC.test(footer) ? ARABIC_FALLBACK.footer : footer
  }
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
          padding: 72,
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
              background: INDIGO,
              color: '#fff',
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            K
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 6, color: '#0e0e10' }}>KHUFU</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {eyebrow && (
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: INDIGO }}>
              {eyebrow}
            </div>
          )}
          <div style={{ marginTop: 14, fontSize: titleSize, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, color: '#0e0e10', maxWidth: 1000 }}>
            {title}
          </div>
        </div>

        <div style={{ fontSize: 26, color: '#6b6b73' }}>{footer ?? 'khufu.io · Votre V1 en 1 semaine'}</div>
      </div>
    ),
    { ...OG_SIZE },
  )
}
