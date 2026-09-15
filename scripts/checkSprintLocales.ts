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
import { sprintCommitmentIcons, sprintLanding, sprintProducts } from '../src/content/sprintLanding'
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

/*
 * ⚠️ THE ONE FIGURE ON THIS PAGE THAT IS DERIVED RATHER THAN WRITTEN.
 *
 * The system section closes on « les {count} produits Khufu », and `{count}` is
 * replaced at render with `sprintProducts.length` — the cards the products
 * section actually shows (sprintSystem.tsx). Adrien's bound on that retour was
 * that a quantity on this page is true and verifiable or it is not shown at all,
 * so the token is the mechanism that keeps it true: a product added to or pulled
 * from the wall corrects the sentence on its own.
 *
 * ⛔ A LOCALE THAT LOSES THE TOKEN IS THE FAILURE THIS CATCHES, and it is silent
 * without a check: the sentence still renders, still reads as a claim, and simply
 * stops carrying a number — or worse, carries one somebody typed by hand and that
 * nothing updates. Both are exactly the false figure the rule exists to prevent.
 */
for (const locale of locales) {
  if (!sprintLanding.system.note[locale].includes('{count}')) {
    problems.push(
      `system.note.${locale} — lost the {count} token; the product figure would render as written text ` +
        'and stop tracking sprintProducts (sprintSystem.tsx)',
    )
  }
}

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) across ${locales.length} locales:`)
  for (const problem of problems) console.error(`   ${problem}`)
  process.exit(1)
}
console.log(`✓ every leaf resolves in all ${locales.length} locales (${locales.join(', ')})`)
console.log(`✓ ${sprintLanding.commitments.items.length} contract cards, ${sprintCommitmentIcons.length} icons, full rows`)
console.log(`✓ the product figure is derived in all ${locales.length} locales ({count} → ${sprintProducts.length})`)
