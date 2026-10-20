// The `lastmod` of every sitemap entry: the date that page's CONTENT last
// changed on the live site — never the build time (decision cmvg4x1e,
// 2026-10-20). Adapted from the OneStoreLink reference
// (apps/web/lib/sitemapLastModified.ts); same import-graph walk, different
// source of time, because of where this site is built.
//
// Before this file, evergreen pages carried no lastmod at all, blog articles
// their PUBLICATION date (never moved by a later edit) and the guides a
// hand-kept `updated` field. A lastmod that is too EARLY tells a crawler that
// already has the page there is nothing new to fetch, so the rule is:
// over-approximating is acceptable, under-reporting is not.
//
// ── Why not git history, as on OSL ─────────────────────────────────────────
// OSL dates a page by the git history of its sources, which needs a full
// clone. Vercel builds this site from a shallow clone (`git clone --depth=10`),
// so the history is not there, and its Git integration leaves no CI step
// before the build that could hand a lastmod manifest in. `VERCEL_DEEP_CLONE`
// would fix the clone but is an undocumented project setting outside the repo.
// A commit date is also not a go-live date: a change written on an hq/<id>
// branch reaches production days later, and dating it by its commit
// under-reports for those days (OSL has to correct for it with the last
// deployed sha).
//
// ── The source: the previous production deploy ─────────────────────────────
// Every deploy publishes, next to the sitemap, a manifest of what each URL was
// built from (app/sitemap-sources.json/route.ts): a fingerprint of the page's
// sources and its lastmod. The next production build reads it back from
// `site.url` and, per URL:
//
//   - same fingerprint      → the page did not change: its previous lastmod
//                             is carried over, unchanged.
//   - other fingerprint, or
//     a URL not seen before → it changes with THIS deploy: lastmod = the build
//                             time (SITEMAP_BUILD_TIME, next.config.ts), which
//                             is when it goes live, give or take the build.
//
// So a page's date is the deploy that last changed what it is built from. No
// git, no clone depth, no CI step: it works the same locally and on Vercel.
//
// The fingerprint is a sha256 of every source file in the page's import graph
// (walked from its page.tsx through `@/` and relative imports), plus the
// values of the NEXT_PUBLIC_* variables those files read, plus `extra` — the
// inputs a page computes from the clock (the Sprint V1 start dates). Not
// walked: the site-wide chrome (`CHROME` in app/sitemap.ts) — Google defines
// lastmod as "the last significant update to the main content", and a nav
// tweak re-dating every URL is exactly the noise this exists to remove. A
// locale's own file (`dictionaries/fr.ts`, or an overlay `foo.fr.ts`) only
// counts for that locale.
//
// ── When it cannot carry anything over ─────────────────────────────────────
//   - First deploy with this file (no manifest yet: 404), or the previous one
//     unreadable after retries → every URL is dated by this build. One-time
//     over-approximation, logged; the deploy after it carries dates again.
//   - A manifest written for another origin (a preview pointing elsewhere) is
//     ignored the same way.
//
// Known over-approximations, accepted: any byte of a file in the graph (a
// refactor, a type, a comment) re-dates the page; a file holding a whole
// family (content/geo.ts, content/projects.ts, the articles index) re-dates
// every page of that family — a blog article lists the others' titles, so
// that one is real.
//
// ⚠️ Known gap, accepted: /sprint-v1 is regenerated hourly (ISR) and its start
// dates roll every Monday, but the sitemap is only rebuilt by a deploy. The
// dates enter the fingerprint, so the first deploy after a roll re-dates the
// page; between two deploys the sitemap does not see the roll.
//
// ⚠️ Build-time only, Node only: both routes that call this are force-static.

import { createHash } from 'node:crypto'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { request as httpRequest } from 'node:http'
import { request as httpsRequest } from 'node:https'
import path from 'node:path'

export interface SitemapPage {
  /** Absolute URL, as listed in the sitemap. */
  url: string
  /** Project-relative route file that renders it, e.g. `src/app/[locale]/blog/[slug]/page.tsx`. */
  entry: string
  /** Its locale, to keep only that locale's dictionary. Undefined = single-language page. */
  locale?: string
  /** Inputs the page derives from the clock, in their current rendered form. */
  extra?: readonly string[]
}

export interface PageDatesOptions {
  /** Absolute path of the project (the Next root). */
  rootDir: string
  /** Origin whose previous manifest is read back, e.g. https://khufu.io. */
  origin: string
  /** Every locale, to tell a locale's own files apart from shared code. */
  locales: readonly string[]
  /** Project-relative files, or folders ending in `/`, never walked into (site-wide chrome). */
  chrome: readonly string[]
  /** Path aliases, e.g. `{ '@/': 'src/' }`. */
  aliases: Readonly<Record<string, string>>
  /** When this build's changes go live. */
  buildTime: Date
}

export interface SourcesManifest {
  version: 1
  origin: string
  builtAt: string
  pages: Record<string, { sources: string; lastmod: string }>
}

/** Path of the published manifest, relative to the origin. */
export const SOURCES_MANIFEST_PATH = '/sitemap-sources.json'

const RESOLVE_EXTENSIONS = ['', '.ts', '.tsx', '.js', '.mjs', '.json', '/index.ts', '/index.tsx']

const IMPORT_RE = /(?:import|export)\s[^'"]*?from\s*["']([^"']+)["']|import\s*\(\s*["']([^"']+)["']\s*\)|import\s+["']([^"']+)["']/g
const PUBLIC_ENV_RE = /process\.env\.(NEXT_PUBLIC_\w+)/g

/** Import specifiers of a source file (packages included; the caller filters). */
export function importsIn(source: string): string[] {
  return [...source.matchAll(IMPORT_RE)].map((m) => m[1] ?? m[2] ?? m[3])
}

/** Locale a file belongs to — `fr.ts` or `name.fr.ts` — if `fr` is one of ours. */
export function fileLocale(file: string, locales: readonly string[]): string | undefined {
  const m = /(?:^|[/.])([A-Za-z]{2,3}(?:-[A-Za-z]+)?)\.(?:ts|tsx|json)$/.exec(file)
  return m && locales.includes(m[1]) ? m[1] : undefined
}

/** The manifest this build publishes, and the lastmod of every page. */
export async function computeSources(
  pages: readonly SitemapPage[],
  opts: PageDatesOptions,
): Promise<SourcesManifest> {
  const previous = await readPrevious(opts.origin)
  const built = opts.buildTime.toISOString()
  const graphs = new Map<string, { files: string[]; env: Set<string> }>()
  const out: SourcesManifest = { version: 1, origin: opts.origin, builtAt: built, pages: {} }
  let carried = 0

  for (const page of pages) {
    let g = graphs.get(page.entry)
    if (!g) {
      g = graph(page.entry, opts)
      graphs.set(page.entry, g)
    }
    const hash = createHash('sha256')
    const files = g.files
      .filter((f) => {
        const own = fileLocale(f, opts.locales)
        return own === undefined || own === page.locale
      })
      .sort()
    for (const f of files) hash.update(`file:${f}\0`).update(readFileSync(path.join(opts.rootDir, f))).update('\0')
    for (const name of [...g.env].sort()) hash.update(`env:${name}=${process.env[name] ?? ''}\0`)
    for (const e of page.extra ?? []) hash.update(`extra:${e}\0`)
    const sources = hash.digest('hex').slice(0, 32)

    const before = previous?.pages[page.url]
    if (before?.sources === sources) carried++
    out.pages[page.url] = { sources, lastmod: before?.sources === sources ? before.lastmod : built }
  }

  console.log(
    `[sitemap] lastmod: ${carried}/${pages.length} carried over from the live manifest, ` +
      `${pages.length - carried} dated by this build (${built})`,
  )
  return out
}

/** Every project file a route entry is built from, chrome excluded, and the NEXT_PUBLIC_* variables they read. */
function graph(entry: string, opts: PageDatesOptions): { files: string[]; env: Set<string> } {
  const isChrome = (file: string): boolean =>
    opts.chrome.some((c) => (c.endsWith('/') ? file.startsWith(c) : file === c))
  const resolve = (from: string, spec: string): string | undefined => {
    let base: string | undefined
    for (const [alias, target] of Object.entries(opts.aliases)) {
      if (spec.startsWith(alias)) base = target + spec.slice(alias.length)
    }
    if (base === undefined && spec.startsWith('.')) base = path.posix.join(path.posix.dirname(from), spec)
    if (base === undefined) return undefined
    for (const ext of RESOLVE_EXTENSIONS) {
      const abs = path.join(opts.rootDir, base + ext)
      if (existsSync(abs) && statSync(abs).isFile()) return base + ext
    }
    return undefined
  }

  const seen = new Set<string>()
  const env = new Set<string>()
  const stack = [entry]
  while (stack.length) {
    const file = stack.pop()!
    if (seen.has(file) || isChrome(file)) continue
    // Throws on a route file that does not exist: a wrong entry must fail the build, not date a page by nothing.
    const source = readFileSync(path.join(opts.rootDir, file), 'utf8')
    seen.add(file)
    if (!/\.(?:ts|tsx|js|mjs)$/.test(file)) continue
    for (const m of source.matchAll(PUBLIC_ENV_RE)) env.add(m[1])
    for (const spec of importsIn(source)) {
      const next = resolve(file, spec)
      if (next) stack.push(next)
    }
  }
  return { files: [...seen], env }
}

/** The manifest the live deploy published, or null when there is none to trust. */
async function readPrevious(origin: string): Promise<SourcesManifest | null> {
  const url = `${origin}${SOURCES_MANIFEST_PATH}`
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const { status, body } = await get(url)
      if (status === 404) {
        console.warn(`[sitemap] ${url} not found (first deploy?) — every page dated by this build`)
        return null
      }
      if (status !== 200) throw new Error(`HTTP ${status}`)
      const m = JSON.parse(body) as SourcesManifest
      if (m.version !== 1 || m.origin !== origin || typeof m.pages !== 'object') {
        console.warn(`[sitemap] ${url} is not a manifest of ${origin} — every page dated by this build`)
        return null
      }
      return m
    } catch (err) {
      if (attempt === 3) {
        console.warn(`[sitemap] ${url} unreadable (${(err as Error).message}) — every page dated by this build`)
        return null
      }
      await new Promise((r) => setTimeout(r, 1000 * attempt))
    }
  }
  return null
}

// node:http(s) rather than fetch: Next patches fetch with its data cache,
// which on Vercel survives across deployments — a cached previous manifest
// would carry over dates for pages that have since changed.
function get(url: string): Promise<{ status: number; body: string }> {
  const request = url.startsWith('http:') ? httpRequest : httpsRequest
  return new Promise((resolve, reject) => {
    const req = request(url, { headers: { 'User-Agent': 'khufu-sitemap/1.0' }, timeout: 10_000 }, (res) => {
      const chunks: Buffer[] = []
      res.on('data', (c: Buffer) => chunks.push(c))
      res.on('end', () => resolve({ status: res.statusCode ?? 0, body: Buffer.concat(chunks).toString('utf8') }))
      res.on('error', reject)
    })
    req.on('timeout', () => req.destroy(new Error('timeout')))
    req.on('error', reject)
    req.end()
  })
}
