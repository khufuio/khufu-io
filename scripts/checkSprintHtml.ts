/**
 * Asserts the BUILT HTML of /sprint-v1 is sane, in all ten locales.
 *
 * ⚠️ WHY THIS EXISTS, AND IT IS NOT A HYPOTHETICAL. On 2026-09-15 every CTA on
 * the production page was dead. `SPRINT_FORM_ANCHOR` was exported from a
 * `'use client'` module and read by two SERVER components, so React handed them
 * its client-reference proxy instead of the string; the proxy stringified into
 * both the `href` and the section's `id`, and the address bar showed
 * `#function(){throw Error("Attempted to call SPRINT_FORM_ANCHOR() from the
 * server…")}`. Nothing failed: not the type-check, not the lint, not the build.
 * Only the rendered HTML shows it — so the rendered HTML is what gets checked.
 *
 * Three assertions, in order of how badly they burned us:
 *   1. no client-reference proxy stringified into the markup;
 *   2. every same-page `href="#…"` resolves to an `id` that exists in the page;
 *   3. no empty or placeholder href on the page.
 *
 * Run it AFTER `npm run build`:
 *   npx tsx scripts/checkSprintHtml.ts
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { locales } from '../src/i18n/config'

const BUILD = '.next/server/app'

/** The stringified client-reference proxy, in raw and URL-encoded form. */
const POISON = ['Attempted to call', 'Attempted%20to%20call', 'function(){throw', 'function()%7Bthrow']

function findPages(): { locale: string; file: string }[] {
  const found: { locale: string; file: string }[] = []
  for (const locale of locales) {
    // Next writes `<locale>/sprint-v1.html` for a prerendered route.
    for (const candidate of [
      join(BUILD, locale, 'sprint-v1.html'),
      join(BUILD, locale, 'sprint-v1', 'index.html'),
    ]) {
      try {
        if (statSync(candidate).isFile()) {
          found.push({ locale, file: candidate })
          break
        }
      } catch {
        /* not this shape */
      }
    }
  }
  return found
}

const problems: string[] = []
const pages = findPages()

if (!pages.length) {
  console.error(`✗ no prerendered /sprint-v1 page found under ${BUILD} — run \`npm run build\` first.`)
  let listing: string[] = []
  try {
    listing = readdirSync(BUILD)
  } catch {
    /* no build at all */
  }
  if (listing.length) console.error(`  ${BUILD} contains: ${listing.join(', ')}`)
  process.exit(1)
}

if (pages.length !== locales.length) {
  const missing = locales.filter((l) => !pages.some((p) => p.locale === l))
  problems.push(`missing prerendered page for: ${missing.join(', ')}`)
}

for (const { locale, file } of pages) {
  const html = readFileSync(file, 'utf8')

  // 1. The proxy stub, in any encoding.
  for (const needle of POISON) {
    if (html.includes(needle)) problems.push(`${locale} — rendered HTML contains "${needle}"`)
  }

  // 2. Every in-page anchor has a target. `#` alone is a deliberate no-op nowhere
  //    on this page, so it counts as a break too.
  const ids = new Set(Array.from(html.matchAll(/\sid="([^"]+)"/g), (m) => m[1]))
  const anchors = new Set(Array.from(html.matchAll(/href="#([^"]*)"/g), (m) => m[1]))
  for (const anchor of anchors) {
    if (!anchor) {
      problems.push(`${locale} — an href="#" points at nothing`)
      continue
    }
    if (!ids.has(anchor)) problems.push(`${locale} — href="#${anchor}" has no matching id in the page`)
  }

  // 3. No empty href anywhere.
  if (/href=""/.test(html)) problems.push(`${locale} — an empty href="" is rendered`)
}

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) in the built /sprint-v1 HTML:`)
  for (const problem of problems) console.error(`   ${problem}`)
  process.exit(1)
}
console.log(`✓ ${pages.length} locales: no client-reference proxy, every in-page anchor resolves, no empty href`)
