/**
 * Asserts the Sprint V1 landing has a non-empty string in ALL TEN locales for
 * every piece of visitor-facing copy.
 *
 * The copy is authored in fr/en/es and `fillLocaleDeep` fills the other seven
 * from French, so a gap here is never a translation that is late — it is a leaf
 * the fill did not reach, which renders as an empty element on a live page in a
 * language nobody on the team reads. Cheap to check, invisible to catch by eye:
 *   npx tsx scripts/checkSprintLocales.ts
 *
 * ⚠️ IT ALSO GUARDS THE ONE LIST THE TYPE SYSTEM CANNOT. Each card of the
 * contract section wears an icon named in `sprintCommitmentIcons`, one per item,
 * and nothing in TypeScript ties a component to the LENGTH of a copy array — so
 * when that section grew from three cards to four, the fourth shipped to
 * production with an empty circle and no error anywhere. That mismatch is now a
 * red recipe.
 */
import { sprintCommitmentIcons, sprintLanding } from '../src/content/sprintLanding'
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

/* One icon per contract card — see the header note. */
if (sprintLanding.commitments.items.length !== sprintCommitmentIcons.length) {
  problems.push(
    `commitments — ${sprintLanding.commitments.items.length} cards but ${sprintCommitmentIcons.length} icons; ` +
      'a card without an icon renders an empty circle (sprintCommitments.tsx)',
  )
}

/* And the grid is three wide: a count that is not a multiple of three leaves a
   ragged last row, which is what made the section read as unfinished. */
if (sprintLanding.commitments.items.length % 3 !== 0) {
  problems.push(
    `commitments — ${sprintLanding.commitments.items.length} cards in a three-wide grid leaves a ragged row`,
  )
}

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) across ${locales.length} locales:`)
  for (const problem of problems) console.error(`   ${problem}`)
  process.exit(1)
}
console.log(`✓ every leaf resolves in all ${locales.length} locales (${locales.join(', ')})`)
console.log(`✓ ${sprintLanding.commitments.items.length} contract cards, ${sprintCommitmentIcons.length} icons, full rows`)
