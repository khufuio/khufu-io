import type { LeadMagnet } from './types'
import type { LeadMagnetSlug } from './slugs'
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

/**
 * Internal link to a guide, tagged with the surface the click came from.
 *
 * Deliberately NOT a `utm_*` param. A visitor who lands on an ad, reads two
 * blog posts and only then downloads must keep the campaign that paid for
 * them — tagging our own links with `utm_source=khufu.io` would overwrite that
 * on the converting event (see hq docs/tools/utm-conventions.md). `src` records
 * the internal surface alongside the campaign instead of on top of it.
 */
export function guidePath(slug: LeadMagnetSlug, source: string): string {
  return `/${slug}?src=${source}`
}

export { guideForArticle, defaultGuide } from './articleGuides'
export { playbook, buildVsBuy, hireChecklist }
