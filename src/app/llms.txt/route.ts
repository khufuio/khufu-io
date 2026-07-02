import { site, entityDefinition, foundingLocation, href } from '@/content/site'
import { projects } from '@/content/projects'

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
  lines.push('')

  lines.push('## Offres et tarifs')
  lines.push(`- Sprint V1 : forfait à prix fixe de ${site.v1PriceEUR.toLocaleString('fr-FR')} € pour un SaaS ou une app mobile conçu, développé et mis en production en ${site.v1Days} jours.`)
  lines.push('- Full Maintenance : abonnement mensuel (engagement 6 mois) — infrastructure managée, support avec SLA et heures de dev incluses. Paliers : Starter 1 490 €/mois (7 h dev), Growth 3 900 €/mois (21 h dev), Scale sur devis. Mise en place des outils de tracking obligatoire au démarrage (1 jour, 1 200 €), heures de dev supplémentaires 200 €/h.')
  lines.push(`- Renfort remote : ${site.dailyRateEUR.toLocaleString('fr-FR')} €/jour, soit 200 €/h en granularité horaire, 100 % remote. Régie sur site possible (1 semaine minimum, +50 %, frais à la charge du client).`)
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
  lines.push(`- À propos : ${site.url}${href('fr', 'about')}`)
  lines.push(`- Contact : ${site.url}${href('fr', 'contact')}`)
  lines.push('')

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
