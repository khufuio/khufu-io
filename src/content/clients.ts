import type { LocalizedText } from '@/content/projects'

export type Client = {
  slug: string
  name: string
  url?: string
  /** Logo asset in /public (e.g. "/images/clients/flatchr.svg"). Falls back to the name. */
  logo?: string
  /** Visual size multiplier in the trust band (to compensate logos with lots of whitespace). Default 1. */
  logoScale?: number
  /** Optional one-line context / result — shown on hover or case list. */
  note?: LocalizedText
  /** Adrien confirmed these can be displayed. */
  approved: boolean
}

// ⚠️ `approved` is OFF on every row since 2026-09-13, on Adrien's call: client
// references leave the public pages entirely — they are not degraded to
// secondary proof, they are pulled. Two reasons, and the second is the one that
// matters for acquisition: the work behind them is on other use cases than the
// Sprint V1, so a logo band builds expectation for something we do not sell.
// The logos stay in the file (and keep feeding `getClient` on the case pages)
// so nothing has to be reconstructed if he reverses it — do NOT flip these back
// to true without him.
export const clients: Client[] = [
  { slug: 'flatchr', name: 'Flatchr', approved: false, logo: '/images/clients/flatchr.webp' },
  { slug: 'mojo', name: 'Mojo', approved: false, logo: '/images/clients/mojo.png', logoScale: 2 },
  { slug: 'tim-management', name: 'Tim Management', approved: false, logo: '/images/clients/tim-management.webp' },
  { slug: 'pandore', name: 'Pandore', approved: false, logo: '/images/clients/pandore.png', logoScale: 4.5 },
]

export const approvedClients = () => clients.filter((c) => c.approved)

export function getClient(slug: string): Client | undefined {
  return clients.find((c) => c.slug === slug)
}
