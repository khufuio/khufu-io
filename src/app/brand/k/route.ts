import type { NextRequest } from 'next/server'
import { renderK, BRAND_INDIGO } from '@/lib/brandMark'

export const runtime = 'nodejs'

// Downloadable "K" monogram. Variants:
//   ?variant=indigo   → indigo K, transparent bg (default)
//   ?variant=onwhite  → indigo K on white, rounded
//   ?variant=onindigo → white K on indigo, rounded
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  const size = Math.min(2048, Math.max(64, Number(sp.get('size') ?? 1024)))
  const variant = sp.get('variant') ?? 'indigo'

  const opts =
    variant === 'onwhite'
      ? { fg: BRAND_INDIGO, bg: '#ffffff', radius: size * 0.22 }
      : variant === 'onindigo'
        ? { fg: '#ffffff', bg: BRAND_INDIGO, radius: size * 0.22 }
        : { fg: BRAND_INDIGO, bg: 'transparent', radius: 0 }

  return renderK({ size, ...opts })
}
