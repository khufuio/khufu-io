import type { LeadMagnetSlug } from './slugs'

/**
 * Which guide gets offered at the end of which article.
 *
 * Keyed by article slug, never by tag: tags are translated per locale
 * ('Coûts' / 'Kosten' / 'Costi' / 'قرار'), so a tag-based mapping would match
 * on French and silently offer nothing on the nine other locales — which is
 * most of the traffic the blog is built to earn.
 *
 * Only the exceptions are listed. Anything absent falls back to the playbook,
 * the broadest of the three, so a new article can never ship with no offer
 * attached to it.
 */
const BY_ARTICLE: Record<string, LeadMagnetSlug> = {
  // Cost and route decisions → the comparison guide.
  'combien-coute-un-saas-2026': 'build-vs-buy',
  'combien-coute-app-mobile-2026': 'build-vs-buy',
  'prix-mvp-selon-methode': 'build-vs-buy',
  'cout-cache-mvp-mal-code': 'build-vs-buy',
  'forfait-vs-regie': 'build-vs-buy',
  'no-code-ou-vrai-code-mvp': 'build-vs-buy',
  'quand-migrer-de-bubble-vers-du-code': 'build-vs-buy',
  'limites-du-no-code': 'build-vs-buy',
  'developper-en-interne-ou-externaliser-v1': 'build-vs-buy',

  // "Who do I trust to build this" → the vetting questions.
  'cto-technique-ou-agence': 'hire-checklist',
  'lancer-son-saas-en-solo-quoi-externaliser': 'hire-checklist',
  'agence-ai-native-c-est-quoi': 'hire-checklist',
  'erreurs-qui-tuent-un-produit': 'hire-checklist',

  // Everything else — scoping, shipping, stack, AI, go-to-market — is the
  // playbook's territory and is covered by the fallback below.
}

export const defaultGuide: LeadMagnetSlug = 'playbook'

export function guideForArticle(slug: string): LeadMagnetSlug {
  return BY_ARTICLE[slug] ?? defaultGuide
}
