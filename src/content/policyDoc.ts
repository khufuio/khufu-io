/**
 * Shape of a legal text rendered block by block (privacy policies, terms),
 * see `components/ui/policyBlocks.tsx`.
 *
 * Inline markup inside a string: `**bold**` and `[text](/path)` links only.
 */
export type PolicyBlock =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { table: { head: string[]; rows: string[][] } }

export type PolicyDoc = {
  title: string
  metaTitle: string
  metaDescription: string
  updated: string
  blocks: PolicyBlock[]
}
