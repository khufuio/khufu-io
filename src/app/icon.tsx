import { renderK, BRAND_INDIGO } from '@/lib/brandMark'

export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

// Favicon: white "K" on the brand indigo — filled square reads clearly on any tab.
export default function Icon() {
  return renderK({ size: 512, fg: '#ffffff', bg: BRAND_INDIGO, radius: 112 })
}
