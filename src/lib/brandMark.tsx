import { readFile } from 'fs/promises'
import { join } from 'path'
import { ImageResponse } from 'next/og'

export const BRAND_INDIGO = '#4c30ff'

let fontCache: ArrayBuffer | null = null

async function spaceGroteskBold(): Promise<ArrayBuffer> {
  if (!fontCache) {
    const buf = await readFile(join(process.cwd(), 'src/assets/fonts/SpaceGrotesk-700.woff'))
    // Slice to a clean ArrayBuffer — passing a Node Buffer directly trips satori.
    fontCache = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer
  }
  return fontCache
}

/**
 * Renders the Khufu "K" monogram in the wordmark font (Space Grotesk Bold).
 * Used for the favicon, the Apple touch icon, and the downloadable brand files.
 */
export async function renderK({
  size,
  fg = BRAND_INDIGO,
  bg = 'transparent',
  radius = 0,
}: {
  size: number
  fg?: string
  bg?: string
  radius?: number
}): Promise<ImageResponse> {
  const font = await spaceGroteskBold()
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: bg,
          borderRadius: radius,
        }}
      >
        <div
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: size * 0.72,
            letterSpacing: -size * 0.02,
            color: fg,
            lineHeight: 1,
            // Optical centering for the letter K
            marginTop: -size * 0.04,
          }}
        >
          K
        </div>
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: 'Space Grotesk', data: font, weight: 700, style: 'normal' }],
    },
  )
}
