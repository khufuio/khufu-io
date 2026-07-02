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

// Displayed on the site (Adrien confirmed). Drop a logo file in
// public/images/clients/<slug>.svg (or .png) and set `logo` to show it.
export const clients: Client[] = [
  { slug: 'flatchr', name: 'Flatchr', approved: true, logo: '/images/clients/flatchr.webp' },
  { slug: 'mojo', name: 'Mojo', approved: true, logo: '/images/clients/mojo.png', logoScale: 2 },
  { slug: 'tim-management', name: 'Tim Management', approved: true, logo: '/images/clients/tim-management.webp' },
  { slug: 'pandore', name: 'Pandore', approved: true, logo: '/images/clients/pandore.png', logoScale: 3 },
]

export const approvedClients = () => clients.filter((c) => c.approved)

export function getClient(slug: string): Client | undefined {
  return clients.find((c) => c.slug === slug)
}
