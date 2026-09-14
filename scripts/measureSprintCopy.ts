/**
 * Counts the visitor-facing copy of the Sprint V1 landing, in characters.
 *
 * The page's problem was volume of prose, so the number that matters is the
 * FRENCH text a visitor actually reads — not the size of the file, which is
 * mostly comments and ten-locale plumbing. Run before and after a rewrite:
 *   npx tsx scripts/measureSprintCopy.ts
 */
import { sprintLanding } from '../src/content/sprintLanding'

type Node = unknown

let total = 0
const perSection: Record<string, number> = {}

function walk(node: Node, section: string): void {
  if (node == null) return
  if (typeof node === 'string') return
  if (Array.isArray(node)) {
    node.forEach((n) => walk(n, section))
    return
  }
  const obj = node as Record<string, unknown>
  // A localized leaf: { fr: '…', en: '…', … }. Only French is counted — the
  // other locales are the same copy, so counting them would triple the figure.
  if (typeof obj.fr === 'string') {
    const len = (obj.fr as string).length
    total += len
    perSection[section] = (perSection[section] ?? 0) + len
    return
  }
  for (const value of Object.values(obj)) walk(value, section)
}

for (const [key, value] of Object.entries(sprintLanding)) walk(value, key)

for (const [key, len] of Object.entries(perSection).sort((a, b) => b[1] - a[1])) {
  console.log(String(len).padStart(6), key)
}
console.log('—'.repeat(20))
console.log(String(total).padStart(6), 'TOTAL (fr characters)')
