/**
 * Guards /preuve (src/content/proof.ts) on what neither the type system nor the
 * build sees:
 *   1. every copy leaf is non-empty in all ten locales;
 *   2. every templated string carries, in every locale, exactly the `{tokens}`
 *      of its French source — a translation that drops `{verified}` would print
 *      a sentence with no date, one that keeps a stray token prints `{osl}`;
 *   3. no V1 longer than the offer is labelled with the offer's figure — the
 *      ruling this page exists under (cmuwqh6x): Clokizi and HerbaCRM took ~3
 *      weeks, never write 7 days as their history.
 *   npx tsx scripts/checkProofLocales.ts
 */
import { proofCopy, proofProducts, proofSurfaceLabel } from '../src/content/proof'
import { site } from '../src/content/site'
import { locales } from '../src/i18n/config'

const problems: string[] = []
const tokensOf = (text: string): string => [...text.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',')

function walk(node: unknown, path: string): void {
  if (node == null) return
  if (Array.isArray(node)) return node.forEach((child, i) => walk(child, `${path}[${i}]`))
  if (typeof node !== 'object') return
  const obj = node as Record<string, unknown>
  if (locales.some((locale) => typeof obj[locale] === 'string')) {
    const source = tokensOf(String(obj.fr ?? ''))
    for (const locale of locales) {
      const value = obj[locale]
      if (typeof value !== 'string') problems.push(`${path}.${locale} — missing`)
      else if (!value.trim()) problems.push(`${path}.${locale} — empty`)
      else if (tokensOf(value) !== source) problems.push(`${path}.${locale} — tokens {${tokensOf(value)}} ≠ fr {${source}}`)
    }
    return
  }
  for (const [key, value] of Object.entries(obj)) walk(value, `${path}.${key}`)
}

walk(proofCopy, 'proofCopy')
walk(proofSurfaceLabel, 'proofSurfaceLabel')
proofProducts.forEach((p) => walk(p, `proofProducts.${p.slug}`))

for (const p of proofProducts) {
  if (p.days <= site.v1Days) continue
  for (const locale of locales) {
    if (new RegExp(`\\b${site.v1Days}\\b`).test(p.duration[locale]))
      problems.push(`${p.slug}.duration.${locale} — « ${p.duration[locale]} » shows the offer's ${site.v1Days} on a ${p.days}-day V1 (cmuwqh6x)`)
  }
  if (p.bound === 'exact') problems.push(`${p.slug} — over the offer and marked exact; its figure is an approximation (~)`)
}

if (problems.length) {
  console.error(`✗ /preuve copy — ${problems.length} problem(s):`)
  for (const p of problems) console.error(`   ${p}`)
  process.exit(1)
}
console.log(`✓ /preuve copy — ${locales.length} locales, tokens consistent, no 7-day label on a longer V1`)
