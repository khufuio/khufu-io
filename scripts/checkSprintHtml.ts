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
 * ⚠️ AND IT BURNED US A SECOND TIME, DIFFERENTLY (2026-09-15). The header's
 * « Réserver un sprint » was a `next/link` to `#start`: the first click scrolled
 * to the closing block and wrote `#start` into the address bar, and every click
 * after that did NOTHING — the router sees the same URL and stands down, and a
 * browser does not re-run a hash jump for an unchanged hash. Adrien: « le bouton
 * du header ne fait RIEN ». The first check below could not see it: the href was
 * present and it resolved. What distinguishes the fixed button from the broken
 * one is that the fixed one is a plain `<a>` carrying `data-cta="header"`, so
 * that marker is what gets asserted.
 *
 * ⛔ AND THE CENSUS IS THE POINT, not the marker. A CTA that disappears from the
 * page entirely is as expensive as one that does nothing, and both are invisible
 * to a type-check, a lint and a build — the whole reason this script exists. So
 * every CTA the page is supposed to carry is named, counted and resolved.
 * ⚠️ WHAT IT STILL CANNOT SEE, said plainly rather than implied: the built HTML
 * does not record whether an anchor was rendered by `next/link` or by hand, so
 * "clicking it twice works" is not provable here. It is prevented structurally
 * instead — see the note in siteHeader.tsx — and this census fails the day that
 * structure is undone, because `data-cta` goes with it.
 *
 * Five assertions, in order of how badly they burned us:
 *   1. no client-reference proxy stringified into the markup;
 *   2. every same-page `href="#…"` resolves to an `id` that exists in the page;
 *   3. no empty or placeholder href on the page;
 *   4. every CTA the page owes is present, `data-cta` by `data-cta`;
 *   5. every one of them has an href that goes somewhere.
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

/**
 * Every CTA the page owes, by its `data-cta`.
 *
 * ⛔ THESE NAMES ARE THE ANALYTICS `placement` VALUES and they are preserved
 * verbatim across passes (lib/sprintContactEvents.ts) — renaming one here means
 * renaming it there, which silently starts a new series. `slot` is not listed:
 * the open chips in the calendar are the one CTA whose number depends on the
 * date, and a census cannot assert a count that legitimately changes.
 */
const EXPECTED_CTAS = ['header', 'hero', 'products', 'day7', 'closing'] as const

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

  /*
   * 4 & 5. The CTA census.
   *
   * ⛔ `header` IS THE ONE THAT MATTERS MOST HERE and it is the newest: it is the
   * only CTA rendered by the shared layout rather than by the page, so it is the
   * one a future refactor can drop without touching this page at all — which is
   * how it was allowed to sit dead in production. The others are counted with it
   * because the same accident costs the same money wherever it happens.
   */
  const ctas = new Map<string, string[]>()
  for (const match of html.matchAll(/<a\s[^>]*>/g)) {
    const tag = match[0]
    const name = /data-cta="([^"]+)"/.exec(tag)?.[1]
    if (!name) continue
    const target = /href="([^"]*)"/.exec(tag)?.[1] ?? ''
    ctas.set(name, [...(ctas.get(name) ?? []), target])
  }

  for (const expected of EXPECTED_CTAS) {
    const targets = ctas.get(expected)
    if (!targets?.length) {
      problems.push(`${locale} — no CTA carrying data-cta="${expected}" is rendered`)
      continue
    }
    for (const target of targets) {
      if (!target) {
        problems.push(`${locale} — the "${expected}" CTA has no href`)
      } else if (target.startsWith('#') && !ids.has(target.slice(1))) {
        problems.push(`${locale} — the "${expected}" CTA points at ${target}, which is not in the page`)
      }
    }
  }
}

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) in the built /sprint-v1 HTML:`)
  for (const problem of problems) console.error(`   ${problem}`)
  process.exit(1)
}
console.log(`✓ ${pages.length} locales: no client-reference proxy, every in-page anchor resolves, no empty href`)
console.log(`✓ ${pages.length} locales: all ${EXPECTED_CTAS.length} CTAs present and pointing somewhere (${EXPECTED_CTAS.join(', ')})`)
