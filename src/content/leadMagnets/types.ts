/**
 * Lead magnets — the downloadable guides behind the cold-ads funnel.
 *
 * One typed source per guide feeds three outputs: the landing page (free
 * chapters + outline), the generated PDF (every chapter) and the structured
 * data. Writing the content once is the point — a page that promises something
 * the PDF doesn't deliver is how a funnel loses trust on the first click.
 */

import type { LeadMagnetSlug } from './slugs'

export type GuideBlock =
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { quote: string }
  | { callout: { title: string; body: string } }
  | { table: { head: string[]; rows: string[][]; note?: string } }
  /**
   * A numbered vetting question. `n` is explicit rather than derived from the
   * array index: the numbering runs across chapters, and the count is a claim
   * we make in the title — it should be checkable in the source.
   */
  | { checklist: { n: number; q: string; why: string; redFlag: string }[] }

export type GuideChapter = {
  /** Stable anchor id — also the PostHog property when a chapter is linked to. */
  id: string
  title: string
  /** One line shown in the "what's inside" outline, on the page and in the PDF. */
  summary: string
  /** Rendered in full on the landing page. The rest is PDF-only. */
  free?: boolean
  blocks: GuideBlock[]
}

export type LeadMagnet = {
  /**
   * URL path (/{slug}) and PDF filename (khufu-{slug}.pdf). Typed against the
   * middleware's list so a guide can never ship with a slug the proxy would
   * redirect into a locale.
   */
  slug: LeadMagnetSlug
  /** Short label used in analytics and email subjects. */
  label: string
  eyebrow: string
  /** Landing page H1 + PDF cover title. */
  title: string
  /** Sub-headline: the concrete promise, in one sentence. */
  subtitle: string
  /** Who this is for — stated plainly so the wrong reader self-selects out. */
  audience: string
  /** Bullets under the form: what the reader walks away with. */
  takeaways: string[]
  metaTitle: string
  metaDescription: string
  /** Real page count of the generated PDF — filled from the build script output. */
  pdfPages: number
  /** ISO date of the last content revision. */
  updated: string
  /** Intro paragraphs, above the outline, shown on the page and in the PDF. */
  intro: string[]
  chapters: GuideChapter[]
  faq: { q: string; a: string }[]
  /** Closing CTA copy, shared by the page footer and the PDF's last page. */
  cta: { title: string; body: string }
}
