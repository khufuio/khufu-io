/**
 * Asserts the Sprint V1 landing has a non-empty string in ALL TEN locales for
 * every piece of visitor-facing copy.
 *
 * The copy is authored in fr/en/es and `fillLocaleDeep` fills the other seven
 * from French, so a gap here is never a translation that is late — it is a leaf
 * the fill did not reach, which renders as an empty element on a live page in a
 * language nobody on the team reads. Cheap to check, invisible to catch by eye:
 *   npx tsx scripts/checkSprintLocales.ts
 */
import { sprintLanding } from '../src/content/sprintLanding'
import { locales } from '../src/i18n/config'

const problems: string[] = []

function walk(node: unknown, path: string): void {
  if (node == null) {
    problems.push(`${path} — null`)
    return
  }
  if (Array.isArray(node)) {
    node.forEach((child, i) => walk(child, `${path}[${i}]`))
    return
  }
  if (typeof node !== 'object') return

  const obj = node as Record<string, unknown>
  // A resolved localized leaf carries every locale as a string key.
  const isLeaf = locales.some((locale) => typeof obj[locale] === 'string')
  if (isLeaf) {
    for (const locale of locales) {
      const value = obj[locale]
      if (typeof value !== 'string') problems.push(`${path}.${locale} — missing`)
      else if (!value.trim()) problems.push(`${path}.${locale} — empty`)
    }
    return
  }
  for (const [key, value] of Object.entries(obj)) walk(value, `${path}.${key}`)
}

for (const [key, value] of Object.entries(sprintLanding)) walk(value, key)

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) across ${locales.length} locales:`)
  for (const problem of problems) console.error(`   ${problem}`)
  process.exit(1)
}
console.log(`✓ every leaf resolves in all ${locales.length} locales (${locales.join(', ')})`)
