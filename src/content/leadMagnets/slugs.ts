/**
 * Lead-magnet slugs, standalone from the guide content.
 *
 * The proxy needs this list to leave /playbook, /build-vs-buy and
 * /hire-checklist un-redirected (they are not locale-prefixed). Importing it
 * from the content index would pull every guide's copy into the middleware
 * bundle, so the list lives on its own and the registry is checked against it.
 */
export const leadMagnetSlugs = ['playbook', 'build-vs-buy', 'hire-checklist'] as const

export type LeadMagnetSlug = (typeof leadMagnetSlugs)[number]

export function isLeadMagnetPath(pathname: string): boolean {
  const first = pathname.split('/')[1]
  return (leadMagnetSlugs as readonly string[]).includes(first)
}
