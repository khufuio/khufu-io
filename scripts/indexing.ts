#!/usr/bin/env node
// Indexing, as a step of the CD (decision cmvg4x1e, 2026-10-20) — the REFERENCE
// script, meant to be copied onto every khufu showcase with only CONFIG changed.
//
//   pnpm --filter @onestorelink/web indexing indexnow   # diff + push to IndexNow
//   pnpm --filter @onestorelink/web indexing gsc        # resubmit the sitemap to Google
//
// i.e. `node --experimental-strip-types --disable-warning=MODULE_TYPELESS_PACKAGE_JSON
// scripts/indexing.ts <command>`. The first flag is a no-op on Node ≥ 23.6 (CI
// runs 24) and lets Node 22 run this file as is; the second silences the
// "reparsing as ES module" notice of a package without `"type": "module"`.
// Plain Node, no dependency: the file is copied, not installed.
//
// ── 1. `indexnow` — only what changed ──────────────────────────────────────
// IndexNow (Bing, Yandex, Seznam, Naver… and through Bing, ChatGPT search)
// wants the URLs that were added, updated or deleted — pushing the whole
// sitemap on every deploy is what its guidelines call spam. So:
//
//   fetch every sitemap URL → fingerprint its CONTENT → compare with the
//   manifest the previous run left → push the difference (new + changed +
//   removed) → save the manifest.
//
// The fingerprint is what a crawler indexes, not the bytes: the head's title,
// indexing metas, canonical/hreflang links, the JSON-LD, and the body's visible
// text plus its link targets and image sources. Scripts, styles, SVG paths and
// every attribute but those are dropped — that is where a build's volatile
// bytes live (build id, RSC payload, hashed chunk names, CSP nonces, React ids)
// and where a pure styling change lives too. What remains is normalised by
// VOLATILE below (hashed asset paths, cache-busting query tokens, timestamps
// with a time of day). Proof it works: two runs against an unchanged
// production → 0 URLs (see the journal of 2026-10-20).
//
//   - No manifest (first run, or the cache expired) → ONE full baseline push.
//   - Nothing changed → IndexNow is not called at all, and the log says so.
//   - The IndexNow call fails (429, 5xx, network) → `::warning::` annotation,
//     exit 0: indexing must not fail a deploy that already shipped. The URLs
//     it carried keep their PREVIOUS fingerprint in the manifest, so the next
//     run pushes them again.
//   - The SCRIPT is broken (key file not served, empty sitemap, > 20 % of the
//     pages unreachable, an exception) → exit 1, red job. Visible on purpose.
//
// Step outputs (GITHUB_OUTPUT): `changed` = URLs detected new/changed/removed,
// `submitted` = URLs IndexNow accepted. The `gsc` step runs only if changed > 0.
//
// ── 2. `gsc` — tell Google the sitemap moved ───────────────────────────────
// Search Console API `sitemaps.submit` (PUT), then `sitemaps.get` to print the
// new `lastSubmitted` as evidence. The token comes from GSC_ACCESS_TOKEN — in
// CI, a short-lived token minted by keyless GitHub OIDC → GCP Workload Identity
// Federation impersonating a service account that is a user (Owner) of the
// Search Console property. No JSON key exists anywhere. The token is never
// printed. A 401/403 means the setup is broken (exit 1); any other failure is a
// warning, like IndexNow.
//
// ── Copying this to another project ────────────────────────────────────────
// 1. Copy this file, change CONFIG only:
//      origin       production origin, no trailing slash
//      sitemapPath  usually /sitemap.xml (a sitemap index is followed)
//      indexNowKey  a fresh 32-hex key; serve it as `<origin>/<key>.txt`
//                   (body = the key) — e.g. public/<key>.txt in Next/Vite
//      gscSite      the Search Console property: `sc-domain:example.com` for a
//                   Domain property, `https://example.com/` for a URL-prefix one
//      volatile     extra [RegExp, replacement] pairs if two runs against an
//                   unchanged production do not give 0 URLs
// 2. Copy the `indexing` job of .github/workflows/deploy.yml: after the
//    production deploy, actions/cache restore + save of the manifest (immutable
//    keys: `indexing-manifest-<run_id>`, restored by prefix), the `indexnow`
//    step, then — only when changed > 0 — google-github-actions/auth + `gsc`.
//    It needs `permissions: id-token: write`.
// 3. Google prerequisite, per repository and per property:
//      - the repository may impersonate the service account (one IAM binding
//        on the SA for `attribute.repository/<owner>/<repo>`);
//      - the SA is a user with the OWNER permission on the GSC property
//        (Settings → Users and permissions). sitemaps.submit needs it.
// 4. Run `indexnow` twice against production before trusting it: the second
//    run must report 0 URLs. If it does not, the diff names the pages — add the
//    volatile pattern to CONFIG.volatile.
// 5. Exact sitemap dates are a separate, per-framework piece (here:
//    lib/sitemapLastModified.ts + app/sitemap.ts).
//
// ⚠️ The manifest lives in the GitHub Actions cache, which evicts an entry not
// read for 7 days: a showcase that goes a week without a deploy does one more
// full baseline push on the next. Accepted — it is at most weekly, and it is
// exactly the push a never-seen site gets.
//
// ⚠️ onestore.link specifics: the key file does NOT come from Next directly —
// the worker owns `onestore.link/*` and hands a path to Next only when it is
// not a slug. `<key>.txt` contains a dot, which the claim-page regex in
// utils/slug.ts rejects, so it falls through to proxyToPages() and Next serves
// it from public/. That is why the key check reads the BODY and not just the
// status: a worker-served page (claim 404, bridge, desktop) would be HTML.

import { createHash } from "node:crypto";
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { pathToFileURL } from "node:url";

// ── CONFIG — the only block that changes from one project to the next ──────
const CONFIG = {
  origin: (process.env.SITE_ORIGIN ?? "https://www.khufu.io").replace(/\/+$/, ""),
  sitemapPath: "/sitemap.xml",
  indexNowKey: "311e551de16e349ccd7b493d3399758b",
  gscSite: "sc-domain:khufu.io",
  // Extra volatile patterns, applied after the generic ones below.
  volatile: [] as Array<[RegExp, string]>,
};

const MANIFEST_PATH = process.env.INDEXING_MANIFEST ?? ".indexing/manifest.json";
// INDEXING_DRY_RUN=1: fetch, diff and write the manifest, but send nothing.
// The way to check a copy against production without spamming anyone.
const DRY_RUN = process.env.INDEXING_DRY_RUN === "1";
const USER_AGENT = "khufu-indexing/1.0 (+https://khufu.io)";
const CONCURRENCY = 8;
const FETCH_TIMEOUT_MS = 20_000;
// Above this share of unreachable pages, the run is broken rather than flaky.
const MAX_FAILURE_RATIO = 0.2;
// IndexNow accepts up to 10 000 URLs per request.
const INDEXNOW_BATCH = 10_000;

// Generic volatile bytes, left in the fingerprint text after extraction.
const VOLATILE: Array<[RegExp, string]> = [
  // Hashed build assets (Next, Vite, Astro…).
  [/\/_next\/[^\s"'<>)]*/g, "/_next/*"],
  [/\/(?:assets|_astro)\/[\w.-]+-[\w-]{6,}\.(?:js|css|woff2?|png|jpe?g|webp|avif|svg)/g, "/assets/*"],
  // A query that is only a content hash (`opengraph-image?60bdaecb2013edcf`).
  [/\?[0-9a-f]{8,64}(?=$|[\s"'&<>])/g, ""],
  // Vercel skew-protection deployment id.
  [/[?&]dpl=[\w-]+/g, ""],
  // A timestamp WITH a time of day is a build/request time; a bare date is content.
  [/\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?/g, "<time>"],
];

// ── Fingerprint ────────────────────────────────────────────────────────────

const INDEXED_META = /^(?:description|robots|googlebot|bingbot|og:[\w:]+|twitter:[\w:]+|keywords)$/i;

function attr(tag: string, name: string): string | undefined {
  const m = new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i").exec(tag);
  return m ? (m[1] ?? m[2] ?? m[3]) : undefined;
}

/** What a crawler indexes of an HTML page, as one normalised string. */
export function indexedContent(html: string): string {
  const parts: string[] = [];
  const headEnd = html.search(/<\/head\s*>/i);
  const head = headEnd >= 0 ? html.slice(0, headEnd) : "";
  const body = headEnd >= 0 ? html.slice(headEnd) : html;

  // Head — and the title wherever Next streamed it (it can land in <body>).
  for (const m of html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)) parts.push(`title:${m[1].trim()}`);
  for (const m of head.matchAll(/<meta\b[^>]*>/gi)) {
    const key = attr(m[0], "name") ?? attr(m[0], "property");
    if (key && INDEXED_META.test(key)) parts.push(`meta:${key}=${attr(m[0], "content") ?? ""}`);
  }
  for (const m of head.matchAll(/<link\b[^>]*>/gi)) {
    const rel = attr(m[0], "rel")?.toLowerCase();
    if (rel === "canonical" || rel === "alternate") {
      parts.push(`link:${rel}:${attr(m[0], "hreflang") ?? ""}=${attr(m[0], "href") ?? ""}`);
    }
  }
  // Structured data, wherever it sits.
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/application\/ld\+json/i.test(m[1])) parts.push(`ld:${m[2].trim()}`);
  }

  // Body: visible text + where its links and images point.
  const visible = body
    .replace(/<(script|style|noscript|template|svg)\b[\s\S]*?<\/\1\s*>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<a\b[^>]*>/gi, (tag) => ` [href=${attr(tag, "href") ?? ""}] `)
    .replace(/<img\b[^>]*>/gi, (tag) => ` [img=${attr(tag, "src") ?? ""}|${attr(tag, "alt") ?? ""}] `)
    .replace(/<[^>]+>/g, " ");
  parts.push(`body:${visible}`);

  let text = parts.join("\n").replace(/[ \t\r\f\v]+/g, " ").replace(/\s*\n\s*/g, "\n");
  for (const [re, by] of [...VOLATILE, ...CONFIG.volatile]) text = text.replace(re, by);
  return text;
}

/** Fingerprint of a fetched URL. A redirect or an error status is content too. */
export function fingerprint(status: number, location: string | null, contentType: string, body: string): string {
  const content = status >= 300 && status < 400
    ? `redirect:${location ?? ""}`
    : /html/i.test(contentType)
      ? indexedContent(body)
      : body;
  return createHash("sha256").update(`${status}\n${content}`).digest("hex").slice(0, 32);
}

// ── Manifest ───────────────────────────────────────────────────────────────

interface Manifest {
  version: 1;
  origin: string;
  updatedAt: string;
  /** url → fingerprint, and when that fingerprint was first seen. */
  urls: Record<string, { hash: string; changedAt: string }>;
}

function loadManifest(): Manifest | null {
  if (!existsSync(MANIFEST_PATH)) return null;
  const m = JSON.parse(readFileSync(MANIFEST_PATH, "utf8")) as Manifest;
  // A manifest from another origin (a copied cache key, a staging run) says nothing about this one.
  return m.version === 1 && m.origin === CONFIG.origin ? m : null;
}

function saveManifest(urls: Manifest["urls"]): void {
  mkdirSync(dirname(MANIFEST_PATH), { recursive: true });
  const manifest: Manifest = { version: 1, origin: CONFIG.origin, updatedAt: new Date().toISOString(), urls };
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 1) + "\n");
}

export interface Diff {
  added: string[];
  changed: string[];
  removed: string[];
}

/** What to push, given the previous manifest and this run's fingerprints (a failed fetch is absent from `now`). */
export function diffManifest(previous: Manifest["urls"], sitemapUrls: readonly string[], now: ReadonlyMap<string, string>): Diff {
  const inSitemap = new Set(sitemapUrls);
  const diff: Diff = { added: [], changed: [], removed: [] };
  for (const url of sitemapUrls) {
    const hash = now.get(url);
    if (hash === undefined) continue; // unreachable this run: decide next run
    const before = previous[url];
    if (!before) diff.added.push(url);
    else if (before.hash !== hash) diff.changed.push(url);
  }
  for (const url of Object.keys(previous)) if (!inSitemap.has(url)) diff.removed.push(url);
  return diff;
}

// ── GitHub Actions plumbing (inert outside CI) ─────────────────────────────

function annotate(level: "warning" | "error" | "notice", message: string): void {
  if (process.env.GITHUB_ACTIONS) console.log(`::${level} title=indexing::${message.replace(/\r?\n/g, "%0A")}`);
  else console[level === "notice" ? "log" : level === "warning" ? "warn" : "error"](`${level}: ${message}`);
}

function output(key: string, value: string | number): void {
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
}

function summary(markdown: string): void {
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, markdown + "\n");
}

// ── Fetching ───────────────────────────────────────────────────────────────

async function get(url: string, redirect: "manual" | "follow" = "manual"): Promise<Response> {
  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, {
        redirect,
        headers: { "User-Agent": USER_AGENT },
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
      if (res.status < 500) return res;
      lastError = new Error(`HTTP ${res.status}`);
    } catch (err) {
      lastError = err;
    }
    await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
  }
  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

async function sitemapUrls(url: string, depth = 0): Promise<string[]> {
  const res = await get(url, "follow");
  if (!res.ok) throw new Error(`${url} answered ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(([, u]) => u.replace(/&amp;/g, "&"));
  if (/<sitemapindex\b/i.test(xml) && depth === 0) {
    return (await Promise.all(locs.map((child) => sitemapUrls(child, 1)))).flat();
  }
  return locs;
}

async function mapPool<T, R>(items: readonly T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out = new Array<R>(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i]);
      }
    })
  );
  return out;
}

// ── Commands ───────────────────────────────────────────────────────────────

async function indexNow(): Promise<void> {
  const { origin, indexNowKey: key } = CONFIG;
  const keyLocation = `${origin}/${key}.txt`;
  const keyRes = await get(keyLocation, "follow");
  if (!keyRes.ok || (await keyRes.text()).trim() !== key) {
    throw new Error(`${keyLocation} does not serve the key — deploy the key file first`);
  }

  const urls = [...new Set(await sitemapUrls(`${origin}${CONFIG.sitemapPath}`))];
  if (urls.length === 0) throw new Error(`${origin}${CONFIG.sitemapPath} has no <loc> entries`);
  const foreign = urls.filter((u) => new URL(u).host !== new URL(origin).host);
  if (foreign.length) throw new Error(`sitemap lists ${foreign.length} URL(s) outside ${origin}, e.g. ${foreign[0]}`);

  const previous = loadManifest();
  const started = Date.now();
  const fetched = await mapPool(urls, CONCURRENCY, async (url) => {
    try {
      const res = await get(url);
      const body = await res.text();
      return { url, hash: fingerprint(res.status, res.headers.get("location"), res.headers.get("content-type") ?? "", body) };
    } catch (err) {
      return { url, error: (err as Error).message };
    }
  });
  const now = new Map<string, string>();
  const failures: string[] = [];
  for (const f of fetched) {
    if ("hash" in f && f.hash) now.set(f.url, f.hash);
    else failures.push(`${f.url} (${"error" in f ? f.error : "?"})`);
  }
  console.log(`Fetched ${urls.length} sitemap URLs in ${((Date.now() - started) / 1000).toFixed(1)}s (${failures.length} unreachable)`);
  if (failures.length > urls.length * MAX_FAILURE_RATIO) {
    throw new Error(`${failures.length}/${urls.length} pages unreachable, e.g. ${failures.slice(0, 3).join(", ")}`);
  }
  if (failures.length) annotate("warning", `${failures.length} page(s) unreachable, re-checked next run: ${failures.slice(0, 5).join(", ")}`);

  const stamp = new Date().toISOString();
  const prevUrls = previous?.urls ?? {};
  const diff = diffManifest(prevUrls, urls, now);
  // No manifest = the baseline: everything this run could read is "added".
  const toPush = [...diff.added, ...diff.changed, ...diff.removed];
  const label = previous
    ? `${diff.added.length} new · ${diff.changed.length} changed · ${diff.removed.length} removed`
    : `no manifest — baseline of ${diff.added.length} URLs`;
  console.log(label);
  for (const u of toPush.slice(0, 50)) console.log(`  ${u}`);
  if (toPush.length > 50) console.log(`  … and ${toPush.length - 50} more`);

  // Next manifest: this run's fingerprints; unreachable URLs keep their old entry.
  const next: Manifest["urls"] = {};
  for (const url of urls) {
    const hash = now.get(url);
    if (hash === undefined) {
      if (prevUrls[url]) next[url] = prevUrls[url];
    } else {
      next[url] = prevUrls[url]?.hash === hash ? prevUrls[url] : { hash, changedAt: stamp };
    }
  }

  output("changed", toPush.length);
  let accepted = 0;
  if (toPush.length === 0) {
    console.log("Nothing changed — IndexNow not called.");
  } else if (DRY_RUN) {
    console.log(`Dry run — IndexNow not called (${toPush.length} URLs would be pushed).`);
  } else {
    const rejected: string[] = [];
    for (let i = 0; i < toPush.length; i += INDEXNOW_BATCH) {
      const urlList = toPush.slice(i, i + INDEXNOW_BATCH);
      let status = 0;
      let detail = "";
      try {
        const res = await fetch("https://api.indexnow.org/indexnow", {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8", "User-Agent": USER_AGENT },
          body: JSON.stringify({ host: new URL(origin).host, key, keyLocation, urlList }),
          signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
        });
        status = res.status;
        detail = (await res.text()).slice(0, 300);
      } catch (err) {
        detail = (err as Error).message;
      }
      // 200 = accepted, 202 = accepted (key validation pending).
      if (status === 200 || status === 202) {
        accepted += urlList.length;
        console.log(`✓ IndexNow ${status} — ${urlList.length} URLs`);
      } else {
        rejected.push(...urlList);
        annotate("warning", `IndexNow ${status || "network error"} on ${urlList.length} URLs — retried next run. ${detail}`);
      }
    }
    // Rejected URLs keep their previous state, so the next run pushes them again.
    for (const url of rejected) {
      if (prevUrls[url]) next[url] = prevUrls[url];
      else delete next[url];
    }
  }
  // A removed URL leaves the manifest once IndexNow has been told.
  saveManifest(next);
  output("submitted", accepted);
  summary(`### Indexing — IndexNow\n${label}. Submitted: **${accepted}**/${toPush.length}.`);
}

async function gsc(): Promise<void> {
  const token = process.env.GSC_ACCESS_TOKEN;
  if (!token) throw new Error("GSC_ACCESS_TOKEN is not set (CI: google-github-actions/auth, token_format: access_token)");
  const feed = `${CONFIG.origin}${CONFIG.sitemapPath}`;
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(CONFIG.gscSite)}/sitemaps/${encodeURIComponent(feed)}`;
  const headers = { Authorization: `Bearer ${token}` };

  const put = await fetch(endpoint, { method: "PUT", headers, signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  if (!put.ok) {
    const detail = (await put.text()).slice(0, 300);
    const message = `Search Console sitemaps.submit ${put.status} for ${feed} on ${CONFIG.gscSite}: ${detail}`;
    // 401/403: the service account is not (or no longer) an owner of the property — setup broken.
    if (put.status === 401 || put.status === 403) throw new Error(message);
    annotate("warning", message);
    return;
  }
  const res = await fetch(endpoint, { headers, signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  const info = (await res.json()) as { lastSubmitted?: string; lastDownloaded?: string; isPending?: boolean; errors?: string; warnings?: string };
  console.log(`✓ Search Console: ${feed} submitted — lastSubmitted ${info.lastSubmitted ?? "?"}, lastDownloaded ${info.lastDownloaded ?? "?"}, pending ${info.isPending ?? "?"}, errors ${info.errors ?? 0}, warnings ${info.warnings ?? 0}`);
  summary(`### Indexing — Google\n\`${feed}\` resubmitted to \`${CONFIG.gscSite}\` — lastSubmitted ${info.lastSubmitted ?? "?"}.`);
}

async function main(): Promise<void> {
  const command = process.argv[2];
  if (command === "indexnow") await indexNow();
  else if (command === "gsc") await gsc();
  else throw new Error(`usage: indexing.ts indexnow | gsc (got ${command ?? "nothing"})`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err: unknown) => {
    annotate("error", (err as Error).message);
    process.exit(1);
  });
}
