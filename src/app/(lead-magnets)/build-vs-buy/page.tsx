import type { Metadata } from 'next'
import { buildVsBuy } from '@/content/leadMagnets'
import { buildLeadMagnetMetadata } from '@/lib/metadata'
import { LeadMagnetLanding } from '@/components/leadMagnets/leadMagnetLanding'

export const metadata: Metadata = buildLeadMagnetMetadata(buildVsBuy)

export default function BuildVsBuyPage() {
  return <LeadMagnetLanding magnet={buildVsBuy} />
}
