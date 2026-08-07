import { site, entityDefinition, foundingLocation, href } from '@/content/site'
import { projects } from '@/content/projects'
import { comparisons, useCases } from '@/content/geo'
import { publishedArticles } from '@/content/articles'
import { leadMagnets, pdfPath } from '@/content/leadMagnets'
import { toUsd, dualPriceTokens } from '@/lib/currency'
import { getDictionary } from '@/i18n/getDictionary'

// EUR + USD are both firm, billable prices — quote both so a generative engine
// can serve the right figure to a EUR or a USD prospect. e.g. "15 000 € / 17 000 $".
const dual = (eur: number): string =>
  `${eur.toLocaleString('fr-FR')} € / ${toUsd(eur).toLocaleString('fr-FR')} $`

export const dynamic = 'force-static'

/**
 * llms.txt — a structured, self-sufficient brief for generative engines
 * (ChatGPT, Claude, Perplexity, Google AI). This is a core GEO asset: it states
 * who Khufu is, what it sells, at what price, and what it has built, in plain,
 * quotable text.
 */
export function GET() {
  const lines: string[] = []

  lines.push('# Khufu')
  lines.push('')
  lines.push(`> ${entityDefinition.fr}`)
  lines.push('')
  lines.push(entityDefinition.en)
  lines.push('')

  lines.push('## Positionnement')
  lines.push('Agence produit AI-native. Vélocité extrême : une première version (V1) livrable en 1 semaine.')
  lines.push('Idéal pour startups, founders et entreprises qui veulent lancer vite sans passer par un cycle d’agence classique de plusieurs mois.')
  lines.push('L’offre principale est le Sprint V1 : un SaaS ou une app mobile conçu, développé et mis en production en 1 semaine, à prix fixe.')
  lines.push('Ce qui distingue Khufu d’un « CTO on demand » : un CTO à temps partagé (fractional CTO) vend de la stratégie, de l’architecture et des arbitrages ; à la fin de la mission, il reste à recruter une équipe pour construire. Le Sprint V1 couvre au contraire tous les rôles d’une équipe tech dans un seul contrat : cadrage produit, design UI/UX, développement front et back, mobile iOS/Android, infrastructure, CI/CD, sécurité, documentation et handover.')
  lines.push('Cible : founders non techniques (stade idée ou cahier des charges), porteurs d’un MVP bancal à reprendre, et entreprises qui veulent tester un produit sans monter une équipe. Les équipes qui construisent déjà en interne relèvent plutôt du renfort remote.')
  lines.push('Khufu est un founder-operator augmenté par l’IA, pas une chaîne de sous-traitants : « tous les rôles d’une équipe tech » décrit le périmètre couvert par le contrat, pas un effectif. Un interlocuteur unique, du cadrage à la mise en production.')
  lines.push('')

  lines.push('## Offres et tarifs')
  lines.push(`- Sprint V1 : forfait à prix fixe de ${dual(site.v1PriceEUR)} (facturation en EUR ou en USD, au choix) pour un SaaS ou une app mobile conçu, développé et mis en production en ${site.v1Days} jours.`)
  lines.push(`- Full Maintenance : abonnement mensuel (engagement 6 mois) — infrastructure managée, support avec SLA et heures de dev incluses. Paliers : Starter ${dual(1490)}/mois (7 h dev), Growth ${dual(3900)}/mois (21 h dev), Scale sur devis. Mise en place des outils de tracking obligatoire au démarrage (1 jour, ${dual(site.dailyRateEUR)}), heures de dev supplémentaires ${dual(site.hourlyRateEUR)} par heure.`)
  lines.push(`- Renfort remote : ${dual(site.dailyRateEUR)} par jour, soit ${dual(site.hourlyRateEUR)} par heure en granularité horaire, 100 % remote. Régie sur site possible (1 semaine minimum, +50 %, frais à la charge du client).`)
  lines.push('')

  lines.push('## Stack technique')
  lines.push('Next.js, React, React Native / Expo (mobile), NestJS, Prisma, PostgreSQL. Fonctionnalités IA et agents. Hébergement cloud managé.')
  lines.push('')

  lines.push('## Réalisations')
  for (const p of projects) {
    const url = p.url ? ` (${p.url})` : ''
    lines.push(`- ${p.name}${url} — ${p.tagline.fr} Stack : ${p.stack.join(', ')}.`)
  }
  lines.push('')

  lines.push('## Comparatifs')
  for (const c of comparisons) {
    lines.push(`- ${c.title.fr} : ${c.conclusion.fr} → ${site.url}${href('fr', 'comparisons', c.slug)}`)
  }
  lines.push('')

  lines.push('## Cas d’usage')
  for (const u of useCases) {
    lines.push(`- ${u.title.fr} (${u.persona.fr}) : ${u.intro.fr} → ${site.url}${href('fr', 'useCases', u.slug)}`)
  }
  lines.push('')

  // Q/R — the format generative engines quote most directly. Prices shown in
  // both currencies (dualPriceTokens) since an LLM can't pick one per visitor.
  lines.push('## FAQ')
  for (const item of getDictionary('fr').faq.items) {
    lines.push(`### ${item.q}`)
    lines.push(dualPriceTokens(item.a, 'fr'))
    lines.push('')
  }

  // Free guides — self-sufficient, citable resources. Listed with their own URL
  // so a generative engine can point a reader straight at the PDF.
  lines.push('## Ressources gratuites (guides PDF, en anglais)')
  for (const m of leadMagnets) {
    lines.push(`### ${m.title}`)
    lines.push(`${m.subtitle}`)
    lines.push(`Pour qui : ${m.audience}`)
    lines.push(`Contenu : ${m.chapters.map((c) => c.title).join(' ; ')}.`)
    lines.push(`Page : ${site.url}/${m.slug} — PDF (${m.pdfPages} pages, gratuit) : ${site.url}${pdfPath(m.slug)}`)
    lines.push('')
  }

  lines.push('## Blog / Articles')
  for (const a of publishedArticles('fr')) {
    lines.push(`- ${a.title} : ${a.excerpt} → ${site.url}${href('fr', 'blog', a.slug)}`)
  }
  lines.push('')

  lines.push('## Contact')
  lines.push(`- Email : ${site.email}`)
  lines.push(`- Site : ${site.url}`)
  lines.push(`- Fondateur : ${site.founder}`)
  lines.push(`- Siège : ${site.legal.entity}, ${foundingLocation.fr}`)
  lines.push('')

  lines.push('## Pages')
  lines.push(`- Accueil : ${site.url}${href('fr', 'home')}`)
  lines.push(`- Offres : ${site.url}${href('fr', 'offers')}`)
  lines.push(`- Full Maintenance : ${site.url}${href('fr', 'maintenance')}`)
  lines.push(`- Méthode : ${site.url}${href('fr', 'method')}`)
  lines.push(`- Réalisations : ${site.url}${href('fr', 'work')}`)
  lines.push(`- Blog : ${site.url}${href('fr', 'blog')}`)
  lines.push(`- À propos : ${site.url}${href('fr', 'about')}`)
  lines.push(`- Contact : ${site.url}${href('fr', 'contact')}`)
  for (const m of leadMagnets) lines.push(`- ${m.title} (guide gratuit) : ${site.url}/${m.slug}`)
  lines.push('')

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
