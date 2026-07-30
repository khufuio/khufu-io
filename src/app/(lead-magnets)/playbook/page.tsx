import type { Metadata } from 'next'
import { playbook } from '@/content/leadMagnets'
import { buildLeadMagnetMetadata } from '@/lib/metadata'
import { LeadMagnetLanding } from '@/components/leadMagnets/leadMagnetLanding'

export const metadata: Metadata = buildLeadMagnetMetadata(playbook)

export default function PlaybookPage() {
  return <LeadMagnetLanding magnet={playbook} />
}
