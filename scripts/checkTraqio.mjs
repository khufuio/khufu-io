/**
 * Checks, on a LIVE deployment, that the Traqio web SDK (run beside PostHog, see
 * src/lib/traqio.ts) actually sends page views and custom events, and what the
 * ingest answers. Prints every request to the Traqio endpoint with its status
 * and response body, plus the page's console warnings/errors.
 *
 * Driving: the host's scratch Chrome (`hq browser ensure --need public`) over raw
 * CDP, like checkLinkedInTag.mjs. Only the tab this script opens is closed.
 *   npm run check:traqio -- --origin=https://www.khufu.io --path=/en
 *   … --ua="Mozilla/5.0 (X11; Linux x86_64) … Chrome/147.0.0.0 Safari/537.36" (rows are recorded)
 * Exits 1 when no Traqio request left the page or none was accepted.
 */

const args = process.argv.slice(2)
const flag = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : fallback
}

const origin = flag('origin', 'https://www.khufu.io')
const path = flag('path', '/en')
const cdp = flag('cdp', 'http://127.0.0.1:9412')
const waitMs = Number(flag('wait', '12000'))
// A headless UA is dropped as a bot by Traqio (outcome "bot"): pass --ua=<a desktop
// Chrome UA> to see what a real visitor's batch gets. Its rows ARE then recorded.
const ua = flag('ua', '')

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

/** requestId → { method, url, postData, status, body } */
const traqio = new Map()
const consoleLines = []
ws.onmessage = async (e) => {
  const m = JSON.parse(e.data)
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m.result ?? m.error)
    pending.delete(m.id)
  }
  if (m.method === 'Network.requestWillBeSent') {
    const { url, method, postData, headers } = m.params.request
    if (/traqio|\/tq\//i.test(url)) traqio.set(m.params.requestId, { method, url, postData, origin: headers?.Origin })
  }
  if (m.method === 'Network.responseReceived' && traqio.has(m.params.requestId)) {
    traqio.get(m.params.requestId).status = m.params.response.status
  }
  if (m.method === 'Network.loadingFinished' && traqio.has(m.params.requestId)) {
    const r = await send('Network.getResponseBody', { requestId: m.params.requestId })
    traqio.get(m.params.requestId).body = r?.body
  }
  if (m.method === 'Network.loadingFailed' && traqio.has(m.params.requestId)) {
    traqio.get(m.params.requestId).failed = m.params.errorText + (m.params.blockedReason ? ` (${m.params.blockedReason})` : '')
  }
  if (m.method === 'Runtime.consoleAPICalled' && ['warning', 'error'].includes(m.params.type)) {
    consoleLines.push(`[${m.params.type}] ${m.params.args.map((a) => a.value ?? a.description ?? '').join(' ')}`)
  }
  if (m.method === 'Runtime.exceptionThrown') {
    consoleLines.push(`[exception] ${m.params.exceptionDetails?.exception?.description ?? m.params.exceptionDetails?.text}`)
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const evaluate = async (expression) =>
  (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }))?.result?.value

await send('Network.enable')
await send('Runtime.enable')
await send('Page.enable')
if (ua) await send('Network.setUserAgentOverride', { userAgent: ua })
await send('Page.navigate', { url: `${origin}${path}` })
await sleep(waitMs)

const state = await evaluate(`JSON.stringify({
  consent: localStorage.getItem('khufu-consent'),
  storageKeys: Object.keys(localStorage).filter((k) => /traqio|tq/i.test(k)),
  cookies: document.cookie.split('; ').filter((c) => /traqio|tq/i.test(c)).map((c) => c.split('=')[0]),
})`)
// Page going away: the SDK flushes what is queued with keepalive.
await send('Page.navigate', { url: 'about:blank' })
await sleep(2000)

console.log(`page: ${origin}${path}`)
console.log(`state: ${state}`)
console.log(`traqio requests: ${traqio.size}`)
for (const r of traqio.values()) {
  console.log(`- ${r.method} ${r.url} origin=${r.origin ?? '-'} → ${r.status ?? r.failed ?? 'no answer'}`)
  if (r.postData) console.log(`  sent: ${r.postData.slice(0, 400)}`)
  if (r.body) console.log(`  got:  ${r.body.slice(0, 400)}`)
}
if (consoleLines.length) console.log(`console:\n  ${consoleLines.join('\n  ')}`)

await fetch(`${cdp}/json/close/${target.id}`).catch(() => {})
ws.close()
const accepted = [...traqio.values()].some((r) => r.status && r.status < 300)
process.exit(traqio.size && accepted ? 0 : 1)
