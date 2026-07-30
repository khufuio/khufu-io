import type { Metadata } from 'next'
import { hireChecklist } from '@/content/leadMagnets'
import { buildLeadMagnetMetadata } from '@/lib/metadata'
import { LeadMagnetLanding } from '@/components/leadMagnets/leadMagnetLanding'

export const metadata: Metadata = buildLeadMagnetMetadata(hireChecklist)

export default function HireChecklistPage() {
  return <LeadMagnetLanding magnet={hireChecklist} />
}
