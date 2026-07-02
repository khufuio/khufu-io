import { renderK, BRAND_INDIGO } from '@/lib/brandMark'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// Apple touch icon (must be opaque): white "K" on the brand indigo.
export default function AppleIcon() {
  return renderK({ size: 180, fg: '#ffffff', bg: BRAND_INDIGO, radius: 40 })
}
