import type { LeadMagnet } from './types'
import { playbook } from './playbook'
import { buildVsBuy } from './buildVsBuy'
import { hireChecklist } from './hireChecklist'

export type { LeadMagnet, GuideBlock, GuideChapter } from './types'
export { leadMagnetSlugs, isLeadMagnetPath, type LeadMagnetSlug } from './slugs'

/**
 * The three lead magnets behind the cold-ads funnel. Each one is a different
 * content angle on the same offer (process / decision / trust) rather than a
 * copy variant, so the comparison between them measures something real.
 */
export const leadMagnets: LeadMagnet[] = [playbook, buildVsBuy, hireChecklist]

export function getLeadMagnet(slug: string): LeadMagnet | undefined {
  return leadMagnets.find((m) => m.slug === slug)
}

/** Public path of the generated PDF (see scripts/buildLeadMagnetPdfs.ts). */
export function pdfPath(slug: string): string {
  return `/downloads/khufu-${slug}.pdf`
}

export { playbook, buildVsBuy, hireChecklist }
