/**
 * Checks, on a LIVE deployment, that the LinkedIn Insight Tag loads with a real
 * partner id and that the « contact taken » conversion (decision cmu7x1yj)
 * actually leaves the browser on the /sprint-v1 exits.
 *
 * ⚠️ WHY THIS NEEDS A BROWSER. Every LinkedIn value is `NEXT_PUBLIC_*`, inlined
 * at BUILD time: an env var set on Vercel after the last build changes nothing
 * until a redeploy, and a missing one fails silently (no tag, no error). The
 * only proof is the network of a real page. Before the flight of 2026-09-21,
 * this is that proof.
 *
 * What it does, per locale:
 *   1. loads the page and reports what the tag state is BEFORE consent;
 *   2. clicks « Accept » on the cookie banner (the tag waits for it in the EU);
 *   3. clicks the modal booking link, the closing booking link and the WhatsApp
 *      link. ⛔ Navigation is cancelled AFTER the page's own handlers ran, so no
 *      Google page and no WhatsApp tab open, and nothing is sent to anyone.
 *      The callback form is never touched: it notifies Adrien and schedules
 *      follow-ups.
 * Every request to LinkedIn is printed with the phase it left in.
 *
 * Driving: the host's scratch Chrome (`hq browser ensure --need public`) over raw
 * CDP, like checkSprintHeroTitle.mjs. Only the tab this script opens is closed.
 *   npm run check:linkedin -- --origin=https://www.khufu.io --locales=en,fr
 * To prove the wiring before the real ids exist, run `next dev` with dummy
 * `NEXT_PUBLIC_LINKEDIN_*` values and pass `--origin=http://localhost:<port>`.
 * ⚠️ `localhost`, NOT `127.0.0.1`: Next blocks its dev resources for any other
 * origin, the page never hydrates and every check reads as a false FAIL.
 * Exits 1 when the tag did not load or a click sent no conversion.
 */

const args = process.argv.slice(2)
const flag = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : fallback
}

const origin = flag('origin', 'https://www.khufu.io')
const cdp = flag('cdp', 'http://127.0.0.1:9412')
const LOCALES = flag('locales', 'en,fr').split(',')

const target = await (await fetch(`${cdp}/json/new?about:blank`, { method: 'PUT' })).json()
const ws = new WebSocket(target.webSocketDebuggerUrl)
let seq = 0
const pending = new Map()
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const i = ++seq
    pending.set(i, resolve)
    ws.send(JSON.stringify({ id: i, method, params }))
  })
await new Promise((r) => (ws.onopen = r))

let phase = 'load'
let requests = []
ws.onmessage = (e) => {
  const m = JSON.parse(e.data)
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m.result ?? m.error)
    pending.delete(m.id)
  }
  if (m.method === 'Network.requestWillBeSent') {
    const { url, method, postData } = m.params.request
    if (/licdn\.com|linkedin\.com/i.test(url)) requests.push({ phase, method, url, postData })
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const evaluate = async (expression) =>
  (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }))?.result?.value

/** Cancels any link navigation AFTER React's handlers (bubble phase, window level). */
const BLOCK_NAVIGATION = `window.addEventListener('click', (e) => { if (e.target.closest('a')) e.preventDefault() }); true`

const tagState = `JSON.stringify({
  lintrk: typeof window.lintrk,
  realLib: !!window.lintrk && !Array.isArray(window.lintrk.q),
  partnerIds: window._linkedin_data_partner_ids ?? null,
  script: !!document.querySelector('script[src*="snap.licdn.com"]'),
  consent: localStorage.getItem('khufu-consent'),
})`

const clickLink = (selector, label) => `(() => {
  const a = ${selector}
  if (!a) return 'MISSING: ${label}'
  a.click()
  return a.getAttribute('href')
})()`

await send('Network.enable')
await send('Page.enable')

let failed = false
for (const locale of LOCALES) {
  requests = []
  phase = 'load'
  const url = `${origin}/${locale}/sprint-v1`
  console.log(`\n=== ${url}`)
  await send('Page.navigate', { url })
  await sleep(8000)
  console.log('before consent :', await evaluate(tagState))

  phase = 'consent'
  console.log(
    'accept         :',
    await evaluate(`(() => {
      const b = [...document.querySelectorAll('button')].find((b) => /^(Accept|Accepter|Aceptar)$/.test(b.textContent.trim()))
      if (!b) return 'no banner button (already decided, or outside the banner region)'
      b.click()
      return 'clicked ' + b.textContent.trim()
    })()`),
  )
  await sleep(10000)
  console.log('after consent  :', await evaluate(tagState))
  await evaluate(BLOCK_NAVIGATION)

  const exits = [
    {
      name: 'booking-modal',
      open: `document.querySelector('[data-cta="hero"]')?.click(); 'opened'`,
      link: `document.querySelector('[role="dialog"] a[href*="calendar"], [role="dialog"] a[target="_blank"]:not([href*="wa.me"])')`,
    },
    { name: 'booking-closing', link: `document.querySelector('a[data-cta="closing"]')` },
    { name: 'whatsapp', link: `[...document.querySelectorAll('a')].find((a) => /wa\\.me|whatsapp/i.test(a.href))` },
  ]
  for (const exit of exits) {
    if (exit.open) {
      await evaluate(exit.open)
      await sleep(800)
    }
    phase = exit.name
    console.log(`${exit.name.padEnd(15)}:`, await evaluate(clickLink(exit.link, exit.name)))
    await sleep(4000)
    await evaluate(`document.querySelector('.sprint-modal-close')?.click(); true`)
  }

  console.log('LinkedIn requests:')
  for (const r of requests) {
    const body = r.postData ? `  body=${r.postData.slice(0, 300)}` : ''
    console.log(`  [${r.phase}] ${r.method} ${r.url.slice(0, 300)}${body}`)
  }
  if (!requests.some((r) => r.phase === 'consent' || r.phase === 'load')) failed = true
  for (const exit of exits) if (!requests.some((r) => r.phase === exit.name)) failed = true
}

await fetch(`${cdp}/json/close/${target.id}`)
console.log(failed ? '\nFAIL — the tag or a conversion request is missing (see above).' : '\nOK')
process.exit(failed ? 1 : 0)
