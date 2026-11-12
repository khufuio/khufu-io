/**
 * Reseller / subcontractor lead generator (todo cmwe2tqo, decision cmwe2u4v).
 *
 * Source: BOAMP award notices ("avis d'attribution"), open data from DILA, no key:
 *   https://boamp-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/boamp/records
 *
 * Why this source: an eForms award notice is PUBLIC and DATED, and it publishes the
 * winner's contact (name, e-mail, website). Winning a contract is exactly the moment
 * a company needs delivery capacity, which is what khufu sells to both segments:
 *   - "agency"  : web / digital / communication agencies and studios that just won a
 *                 website, app or digital-platform contract -> white-label Sprint V1.
 *   - "esn"     : ESN / consulting firms that just won an IT framework or software
 *                 build contract -> packaged capacity, DC4 subcontracting.
 *
 * Address rules (decisions cmuk4wtk, cmvbh74s, cmuwqshu, cmw3pf1t):
 *   - an address is SENDABLE only if it was PUBLISHED and the row says where
 *     (`emailSource` = the BOAMP notice URL) and it is NOMINATIVE (no contact@, ao@…);
 *   - a pattern-built address (firstname.lastname@ from a named contact + a pattern
 *     seen on the same domain in the same dataset) is kept, marked `pattern`, and is
 *     NEVER sendable: it serves LinkedIn / manual outreach only. No verifier is used.
 *
 * Usage:
 *   npm run leads:resellers -- [--days 60] [--out <dir>] [--today YYYY-MM-DD] [--research <dir>]
 *   --research merges the CSVs of the research waves (agent web research, same header
 *   as the output), re-applies every rule and re-reads each published address on its page.
 * Output: <out>/leads-agencies.csv, <out>/leads-esn.csv, <out>/leads-rejected.csv, <out>/leadgen-funnel.json
 * Default out: ~/code/projects/hq/scratchpad/khufu-resellers
 */
import fs from 'node:fs'
import path from 'node:path'

const API = 'https://boamp-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/boamp/records'
const PAGE = 100
const MAX_OFFSET = 9900

type Segment = 'agency' | 'esn'
type EmailStatus = 'published' | 'pattern'

interface Org {
  id: string
  name: string
  email: string
  contactName: string
  website: string
  city: string
}

interface Notice {
  idweb: string
  objet: string
  dateparution: string
  nomacheteur: string
  descripteurs: string[]
  url: string
  winners: Org[]
  /** E-mail domains of the notice's other parties (buyer, review body): never a winner's. */
  otherDomains: Set<string>
}

/** checked = the address was found again on its source page by this script; a GitHub source is never usable (its terms). */
type Provenance = 'checked' | 'not-found' | 'unreachable' | 'source-terms-forbid' | 'n/a'

interface Lead {
  segment: Segment
  sendable: 'yes' | 'no'
  firstName: string
  lastName: string
  role: string
  email: string
  emailStatus: EmailStatus
  emailSource: string
  provenance: Provenance
  company: string
  website: string
  city: string
  country: string
  signalFr: string
  signalEn: string
  signalDate: string
  signalDateFr: string
  signalDateEn: string
  signalUrl: string
  contractObject: string
  source: 'boamp' | 'research'
  locale: 'fr' | 'en'
}

// ---------------------------------------------------------------- args

function arg(name: string, fallback: string): string {
  const i = process.argv.indexOf(`--${name}`)
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}

const DAYS = Number(arg('days', '60'))
const TODAY = arg('today', new Date().toISOString().slice(0, 10))
const RESEARCH = arg('research', '')
const OUT = arg('out', path.join(process.env.HOME ?? '', 'code/projects/hq/scratchpad/khufu-resellers'))
const SINCE = new Date(Date.parse(TODAY) - DAYS * 86_400_000).toISOString().slice(0, 10)

// ---------------------------------------------------------------- query

/** Descriptors that carry IT / digital / communication awards on BOAMP. */
const DESCRIPTORS = [
  'Logiciel',
  'Informatique (prestations de services)',
  'Informatique (assistance)',
  'Publicité, Communication',
  'Informatique (maintenance serveurs et réseaux)',
]

/** Substrings searched in the contract object, on top of the descriptors. */
const OBJECT_TERMS = [
  'site', 'web', 'internet', 'application', 'numérique', 'digital', 'logiciel', 'plateforme',
  'portail', 'développement', 'TMA', 'refonte', 'information', 'intellectuelles', 'AMOA',
  'data', 'mobile', 'extranet', 'intranet', 'agence', 'communication', 'informatique',
  'outil', 'système', 'solution', 'données', 'sociaux', 'SI ', 'digitale', 'appli',
]

function whereClause(): string {
  const desc = DESCRIPTORS.map((d) => `descripteur_libelle="${d}"`).join(' or ')
  const terms = OBJECT_TERMS.map((t) => `objet like "*${t}*"`).join(' or ')
  return `nature="ATTRIBUTION" and dateparution>="${SINCE}" and dateparution<="${TODAY}" and (${desc} or ${terms})`
}

interface ApiRecord {
  idweb: string
  objet: string | null
  dateparution: string
  nomacheteur: string | null
  descripteur_libelle: string[] | null
  url_avis: string | null
  donnees: string | null
}

async function fetchAll(): Promise<{ records: ApiRecord[]; total: number }> {
  const records: ApiRecord[] = []
  let total = 0
  for (let offset = 0; offset <= MAX_OFFSET; offset += PAGE) {
    const qs = new URLSearchParams({
      where: whereClause(),
      select: 'idweb,objet,dateparution,nomacheteur,descripteur_libelle,url_avis,donnees',
      order_by: 'dateparution desc',
      limit: String(PAGE),
      offset: String(offset),
    })
    const res = await fetch(`${API}?${qs.toString()}`)
    if (!res.ok) throw new Error(`BOAMP ${res.status}: ${(await res.text()).slice(0, 300)}`)
    const body = (await res.json()) as { total_count: number; results: ApiRecord[] }
    total = body.total_count
    records.push(...body.results)
    if (body.results.length < PAGE || records.length >= total) break
  }
  return { records, total }
}

// ---------------------------------------------------------------- eForms parsing

type Json = string | number | boolean | null | Json[] | { [k: string]: Json }

function text(node: Json | undefined): string {
  if (node === undefined || node === null) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node).trim()
  if (Array.isArray(node)) return text(node[0])
  if (typeof node === 'object' && '#text' in node) return text(node['#text'])
  return ''
}

function get(node: Json | undefined, ...keys: string[]): Json | undefined {
  let cur: Json | undefined = node
  for (const k of keys) {
    if (cur === null || cur === undefined || typeof cur !== 'object' || Array.isArray(cur)) return undefined
    cur = cur[k]
  }
  return cur
}

function asArray(node: Json | undefined): Json[] {
  if (node === undefined || node === null) return []
  return Array.isArray(node) ? node : [node]
}

/** Every value found under a key named `key`, anywhere in the tree. */
function collect(node: Json | undefined, key: string, out: Json[] = []): Json[] {
  if (node === null || node === undefined || typeof node !== 'object') return out
  if (Array.isArray(node)) {
    for (const n of node) collect(n, key, out)
    return out
  }
  for (const [k, v] of Object.entries(node)) {
    if (k === key) out.push(...asArray(v))
    collect(v, key, out)
  }
  return out
}

function parseOrgs(tree: Json): Map<string, Org> {
  const orgs = new Map<string, Org>()
  for (const o of collect(tree, 'efac:Organization')) {
    const c = get(o, 'efac:Company')
    if (!c) continue
    const id = text(get(c, 'cac:PartyIdentification', 'cbc:ID'))
    orgs.set(id, {
      id,
      name: text(get(c, 'cac:PartyName', 'cbc:Name')),
      email: text(get(c, 'cac:Contact', 'cbc:ElectronicMail')).toLowerCase(),
      contactName: text(get(c, 'cac:Contact', 'cbc:Name')),
      website: text(get(c, 'cbc:WebsiteURI')),
      city: text(get(c, 'cac:PostalAddress', 'cbc:CityName')),
    })
  }
  return orgs
}

function parseNotice(r: ApiRecord): Notice | null {
  if (!r.donnees) return null
  let tree: Json
  try {
    tree = JSON.parse(r.donnees) as Json
  } catch {
    return null
  }
  if (!get(tree, 'EFORMS')) return null // FNSimple notices publish no winner contact
  const orgs = parseOrgs(tree)
  const winnerIds = new Set(
    collect(tree, 'efac:Tenderer').map((t) => text(get(t, 'cbc:ID'))).filter(Boolean),
  )
  const winners = [...winnerIds].map((id) => orgs.get(id)).filter((o): o is Org => Boolean(o))
  const otherDomains = new Set(
    [...orgs.values()]
      .filter((o) => !winnerIds.has(o.id) && o.email.includes('@'))
      .map((o) => o.email.split('@')[1]),
  )
  return {
    idweb: r.idweb,
    objet: (r.objet ?? '').replace(/\s+/g, ' ').trim(),
    dateparution: r.dateparution,
    nomacheteur: (r.nomacheteur ?? '').trim(),
    descripteurs: r.descripteur_libelle ?? [],
    url: r.url_avis ?? `https://www.boamp.fr/pages/avis/?q=idweb:${r.idweb}`,
    winners,
    otherDomains,
  }
}

// ---------------------------------------------------------------- classification

const GENERIC_LOCAL =
  /^(contact|hello|bonjour|info|infos|information|admin|team|equipe|ao|aos|appel|appels|appeloffres?|appelsdoffres|marches?|marche|marchespublics|commande|commercial|commerciale|sales|vente|ventes|devis|compta|comptabilite|facturation|accueil|direction|support|secretariat|rh|juridique|legal|service|services|consultation|consultations|tender|tenders|bid|bids|offre|offres|reponse|reponses|candidature|candidatures|agence|studio|projets?|news|noreply|no-reply|office|mail|email|publications?|cellule|dao|achats?|business|partenariat|partners?|presse|communication|web|digital|it|dsi|gestion|administration|adv|commerce|public|secteur|pole|support-client|clients?|serviceclient|correspondre|reception|accueil|standard|secretariat|assistante?|direction-generale)([._-].*)?$/i

const PERSONAL_DOMAINS = /@(gmail|hotmail|yahoo|outlook|live|orange|free|wanadoo|laposte|sfr|icloud|protonmail)\./i

/** Large ESN / consulting firms: subcontracting angle whatever the object. */
const ESN_NAME =
  /\b(capgemini|sopra|steria|inetum|cgi|atos|eviden|accenture|theodo|octo|devoteam|onepoint|wavestone|sia partners|bearing ?point|alten|akkodis|extia|solutec|econocom|klee|mc2i|tasmane|eurogroup|umanis|neurones|aubay|sqli|smile|alter ?way|ippon|zenika|publicis sapient|deloitte|kpmg|pwc|ernst|\bey\b|mazars|forvis|talan|keyrus|micropole|omnicit[eé]|sword|cgi france|nextedia|open ?groupe|groupe open|astek|expleo|altran|scc|bechtle|spie|orange business|business software consulting|niji|davidson|magellan|infotel|visiativ|hardis|apside|cooptalis|consort|ausy|randstad digital|klanik|squad|groupe sii|\bsii\b|metsys|exakis|elca|adista|computacenter|axians|ineo|claranet|tinqin|beta\.gouv)\b/i

/** Wording that marks a web / digital / communication agency or studio. */
const AGENCY_NAME =
  /\b(agence|agency|studio|web|digital|num[eé]rique|communication|com\b|design|cr[eé]ati|interactive|lab|media|m[eé]dia|factory|atelier|collectif|bureau|graphi|marketing|pixel|app)\b/i

/** Objects that describe building something digital (what an agency sells). */
const DIGITAL_BUILD =
  /(site (internet|web)|sites? internet|\bweb\b|application|appli\b|portail|extranet|intranet|num[eé]rique|digital|r[eé]seaux sociaux|\bux\b|e-?commerce|wordpress|drupal|plateforme (num[eé]rique|web|digitale|collaborative|en ligne)|outil (num[eé]rique|en ligne|informatique)|logiciel|communication digitale|campagne digitale)/i

/** Objects an IT-services firm wins (TMA, AMOA, frameworks, build). */
const IT_SERVICES =
  /(\btma\b|amoa|\bmoe\b|prestations? intellectuelles? (informatiques?|en informatique)|syst[eè]mes? d'information|\bsi\b|logiciel|applicati|informatique|\bdata\b|donn[eé]es|cloud|num[eé]rique|digital|portail|plateforme (num[eé]rique|web|digitale)|d[eé]veloppement (informatique|logiciel|applicatif|web)|maintenance (applicative|[eé]volutive|corrective))/i

/** Physical works and supplies: a "site" or a "plateforme" there is a building, not a website. */
const EXCLUDE_OBJECT =
  /(impression|imprim|affich|reprograph|routage|signal[eé]tique|mat[eé]riel|fourniture|licences?|abonnement|t[eé]l[eé]phonie|t[eé]l[eé]surveillance|vid[eé]oprotection|nettoyage|mobilier|v[eé]hicule|carburant|restauration|objets? publicitaires?|goodies|traduction|annonces? l[eé]gales|presse|achat d'espace|espaces? publicitaires|c[aâ]blage|copieurs?|photocop|ascenseur|portes?\b|portails? (automatiques|et barri)|espaces verts|d[eé]chets|travaux|r[eé]habilitation|[eé]lectricit[eé]|climatisation|chauffage|d[eé]ratisation|approvisionnement|courants faibles|b[aâ]timent|vitre|menuiserie|plomberie|gardiennage|incendie|semi-rigides|monte-charge|escaliers|stockage et distribution|collecte|transport|d[eé]m[eé]nagement|assurance)/i

/** Software editors, print/media houses, utilities, building trades: not buyers of build capacity. */
const EXCLUDE_NAME =
  /\b(imprimerie|imprim|print|graphigroup|r[eé]gie|journal|hebdos?|presse|radio|tv|t[eé]l[eé]vision|affichage|mediapost|la poste|engie|edf|orange sa|hitachi|siemens|otis|schindler|kone|ascenseurs?|idverde|veolia|eiffage|bouygues|equans|vinci|spie|sonepar|foussier|paprec|derichebourg|sciex|planisware)\b/i

function isNominative(email: string): boolean {
  if (!email || !email.includes('@')) return false
  if (PERSONAL_DOMAINS.test(email)) return false
  const local = email.split('@')[0]
  if (GENERIC_LOCAL.test(local)) return false
  // firstname.lastname / f.lastname / firstname-lastname / firstname_lastname / flastname
  if (/^[a-z][a-z'-]+[._-][a-z][a-z'-]+$/i.test(local)) return true
  // flastname / f.lastname / a first name alone (max@, xavier@): the generic list above already ran
  if (/^[a-z][._-]?[a-z]{2,}$/i.test(local)) return true
  return false
}

/** A first name we can greet: letters only, at least two, with a vowel ("Dnmp", "M." are not). */
function isGreetable(first: string): boolean {
  return /^[\p{L}' -]{2,}$/u.test(first) && /[aeiouyàâéèêëîïôöûüÿ]/i.test(first)
}

function cap(s: string): string {
  return s
    .split(/([-' ])/)
    .map((p) => (p.length > 1 ? p[0].toUpperCase() + p.slice(1).toLowerCase() : p.toUpperCase()))
    .join('')
}

/** Name from the address (firstname.lastname@) or from the contact field, never invented. */
function nameOf(org: Org): { first: string; last: string } {
  const local = org.email.split('@')[0]
  const m = local.match(/^([a-z][a-z'-]+)[._]([a-z][a-z'-]+)$/i)
  if (m && m[1].length > 1) return { first: cap(m[1]), last: cap(m[2]) }
  const parts = org.contactName.split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    // eForms contact names are often "NOM Prénom" or "Prénom NOM"
    const upper = parts.filter((p) => p === p.toUpperCase() && p.length > 1)
    const other = parts.filter((p) => !(p === p.toUpperCase() && p.length > 1))
    if (upper.length && other.length) return { first: cap(other.join(' ')), last: cap(upper.join(' ')) }
    return { first: cap(parts[0]), last: cap(parts.slice(1).join(' ')) }
  }
  return { first: '', last: '' }
}

function classify(org: Org, n: Notice): Segment | null {
  if (EXCLUDE_NAME.test(org.name)) return null
  if (EXCLUDE_OBJECT.test(n.objet) && !/(site (internet|web)|application|\btma\b|d[eé]veloppement (informatique|logiciel|applicatif|web))/i.test(n.objet)) return null
  // Supplies and licences bought off the shelf: the winner sells its own product, not capacity.
  if (/^(fourniture|acquisition|achat|location)/i.test(n.objet) && !/(d[eé]veloppement|r[eé]alisation|conception|\btma\b)/i.test(n.objet)) return null
  const it = IT_SERVICES.test(n.objet)
  const digital = DIGITAL_BUILD.test(n.objet)
  if (!it && !digital) return null
  if (ESN_NAME.test(org.name)) return 'esn'
  if (AGENCY_NAME.test(org.name) && digital) return 'agency'
  if (n.descripteurs.includes('Publicité, Communication') && digital) return 'agency'
  if (/(site (internet|web)|sites? internet|\bweb\b|application mobile|appli\b|extranet|intranet|r[eé]seaux sociaux|e-?commerce)/i.test(n.objet)) return 'agency'
  return 'esn'
}

// ---------------------------------------------------------------- wording

const MONTHS_FR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function dateFr(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`)
  return `${d.getUTCDate()} ${MONTHS_FR[d.getUTCMonth()]}`
}
function dateEn(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`)
  return `${d.getUTCDate()} ${MONTHS_EN[d.getUTCMonth()]}`
}

/** Contract object shortened at a word boundary, without the boilerplate prefixes. */
function shortObject(objet: string, max = 70): string {
  let s = objet
    .replace(/^(avis d'attribution|attribution|r[eé]sultat de march[eé])\s*[:-]\s*/i, '')
    .replace(/^(march[eé]|accord-cadre)\s+(public\s+)?(de|d'|relatif [aà]|portant sur|pour)\s+/i, '')
    .replace(/\s+/g, ' ')
    .trim()
  s = s.charAt(0).toLowerCase() + s.slice(1)
  if (s.length <= max) return s
  const cut = s.slice(0, max)
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\-–(]+$/, '').trim()}…`
}

/** "DROP TEAM DROP TEAM SAS" -> "Drop Team": how a person writes their company's name. */
function displayCompany(name: string): string {
  let s = name.replace(/\s*\(.*?\)\s*/g, ' ').replace(/\b(SAS|SASU|SARL|SA|EURL|SCOP)\b\.?/gi, '').replace(/\s+/g, ' ').trim()
  const words = s.split(' ')
  const half = words.length / 2
  if (words.length % 2 === 0 && words.slice(0, half).join(' ').toLowerCase() === words.slice(half).join(' ').toLowerCase()) {
    s = words.slice(0, half).join(' ')
  }
  if (s === s.toUpperCase() && /[A-Z]{4,}/.test(s)) s = cap(s.toLowerCase()).replace(/\b(Et|De|Du|Des|La|Le|Les)\b/g, (m) => m.toLowerCase())
  return s.replace(/[–-]\s*$/, '').trim()
}

/** Research waves sometimes repeat the date inside the signal; the copy adds it once. */
function stripTrailingDate(signal: string): string {
  return signal.replace(/\s*\((offre|annonce|publi|posted|announced|du|on|le)\b[^)]*\)\s*$/i, '').trim()
}

function buyerShort(buyer: string): string {
  return buyer.length > 60 ? `${buyer.slice(0, buyer.lastIndexOf(' ', 60))}…` : buyer
}

// ---------------------------------------------------------------- csv

const COLUMNS: (keyof Lead)[] = [
  'segment', 'sendable', 'firstName', 'lastName', 'role', 'email', 'emailStatus', 'emailSource',
  'provenance', 'company', 'website', 'city', 'country', 'signalFr', 'signalEn', 'signalDate',
  'signalDateFr', 'signalDateEn', 'signalUrl', 'contractObject', 'source', 'locale',
]

function csvCell(v: string): string {
  return /[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v
}

function toCsv(rows: Lead[]): string {
  return [COLUMNS.join(','), ...rows.map((r) => COLUMNS.map((c) => csvCell(String(r[c]))).join(','))].join('\n') + '\n'
}

// ---------------------------------------------------------------- research waves

/** khufu customers are never cold-mailed (decisions cmvbqno2, cmvbq9pc). */
const CUSTOMERS = /(igocreate|qwenty|peach ?farmer|tarokai|flatchr|orv[eé]a)/i

function parseCsv(textIn: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ''
  let quoted = false
  for (let i = 0; i < textIn.length; i++) {
    const c = textIn[i]
    if (quoted) {
      if (c === '"' && textIn[i + 1] === '"') {
        cell += '"'
        i++
      } else if (c === '"') quoted = false
      else cell += c
    } else if (c === '"') quoted = true
    else if (c === ',') {
      row.push(cell)
      cell = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && textIn[i + 1] === '\n') i++
      row.push(cell)
      if (row.some((x) => x.trim())) rows.push(row)
      row = []
      cell = ''
    } else cell += c
  }
  row.push(cell)
  if (row.some((x) => x.trim())) rows.push(row)
  return rows
}

/**
 * Rows from the research waves (one CSV per wave, same header). Every rule of the
 * BOAMP pass applies again here: dated signal inside the window, nominative address,
 * a source for it, a greetable first name, no khufu customer.
 */
function readResearch(dir: string, rejected: { reason: string; row: string }[]): Lead[] {
  const out: Lead[] = []
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.csv')).sort()) {
    const [header, ...rows] = parseCsv(fs.readFileSync(path.join(dir, file), 'utf8'))
    const idx = (k: string): number => header.findIndex((h) => h.trim() === k)
    for (const r of rows) {
      const v = (k: string): string => (idx(k) >= 0 ? (r[idx(k)] ?? '').trim() : '')
      const email = v('email').toLowerCase().replace(/^mailto:/, '')
      const label = `${file}: ${v('firstName')} ${v('lastName')} <${email}> ${v('company')}`
      const status = v('emailStatus') as EmailStatus
      const segment = v('segment') as Segment
      const date = v('signalDate')
      const reject = (reason: string): void => {
        rejected.push({ reason, row: label })
      }
      if (segment !== 'agency' && segment !== 'esn') reject('unknown segment')
      else if (!email) reject('no address')
      else if (!isNominative(email)) reject('generic or non-nominative address')
      else if (status !== 'published' && status !== 'pattern') reject('emailStatus is neither published nor pattern')
      else if (!v('emailSource')) reject('no source for the address')
      else if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < SINCE || date > TODAY) reject(`signal date ${date || 'missing'} outside ${SINCE}..${TODAY}`)
      else if (!v('signalUrl')) reject('no proof URL for the signal')
      else if (!isGreetable(v('firstName'))) reject('first name not greetable')
      else if (CUSTOMERS.test(`${v('company')} ${email}`)) reject('khufu customer')
      else
        out.push({
          segment,
          sendable: 'no',
          firstName: v('firstName'),
          lastName: v('lastName'),
          role: v('role'),
          email,
          emailStatus: status,
          emailSource: v('emailSource'),
          provenance: 'n/a',
          company: v('company'),
          website: v('website'),
          city: v('city'),
          country: v('country') || (v('locale') === 'en' ? '' : 'FR'),
          signalFr: stripTrailingDate(v('signalFr')),
          signalEn: stripTrailingDate(v('signalEn')),
          signalDate: date,
          signalDateFr: dateFr(date),
          signalDateEn: dateEn(date),
          signalUrl: v('signalUrl'),
          contractObject: '',
          source: 'research',
          locale: v('locale') === 'en' ? 'en' : 'fr',
        })
    }
  }
  return out
}

/** Decodes what pages do to addresses: entities, [at]/(at), percent-encoding. */
function normalisePage(html: string): string {
  return html
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCharCode(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h: string) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&commat;|&#64;/gi, '@')
    .replace(/&period;/gi, '.')
    .replace(/%40/g, '@')
    .replace(/\s*[[(]\s*(at|arobase)\s*[\])]\s*/gi, '@')
    .replace(/\s*[[(]\s*(dot|point)\s*[\])]\s*/gi, '.')
    .toLowerCase()
}

/**
 * Re-reads the source page of every "published" address and looks for it. Not an
 * address verifier (no SMTP, no third party — cmuwqshu): it only proves the address
 * is where the row says it was read, which is the condition of cmuk4wtk.
 */
async function checkProvenance(leads: Lead[]): Promise<void> {
  const cache = new Map<string, string | null>()
  const fetchPage = async (url: string): Promise<string | null> => {
    if (cache.has(url)) return cache.get(url) ?? null
    let body: string | null = null
    // boamp.fr notice pages render in the browser: read the same notice from the open-data API.
    const idweb = url.match(/boamp\.fr\/.*idweb[:=]([\w-]+)/i)?.[1] ?? url.match(/boamp\.fr\/avis\/detail\/([\w-]+)/i)?.[1]
    if (idweb) url = `${API}?${new URLSearchParams({ where: `idweb="${idweb}"`, select: 'donnees', limit: '1' }).toString()}`
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': 'Mozilla/5.0 (compatible; lead-provenance-check)' },
        signal: AbortSignal.timeout(20_000),
        redirect: 'follow',
      })
      body = res.ok ? normalisePage(await res.text()) : null
    } catch {
      body = null
    }
    cache.set(url, body)
    return body
  }
  const queue = leads.filter((l) => l.emailStatus === 'published')
  const workers = Array.from({ length: 6 }, async () => {
    for (let l = queue.shift(); l; l = queue.shift()) {
      if (l.source === 'boamp') {
        l.provenance = 'checked' // read from the notice's own data by this script
        continue
      }
      const url = l.emailSource.match(/https?:\/\/\S+/)?.[0]
      const page = url ? await fetchPage(url) : null
      l.provenance = page === null ? 'unreachable' : page.includes(l.email) ? 'checked' : 'not-found'
    }
  })
  await Promise.all(workers)
}

// ---------------------------------------------------------------- HQ import

/** The paused HQ campaigns these lists are written for (created 2026-11-12). */
const CAMPAIGN: Record<Segment, string> = {
  agency: 'khufu-resellers-agencies',
  esn: 'khufu-subcontracting-esn',
}
const SEGMENT_MARK: Record<Segment, string> = { agency: 'reseller-agency', esn: 'subcontractor-esn' }

/**
 * HQ's ContactInput columns (hq docs/tools/cold-outbound.md, `outbound:csv`): only
 * sendable rows, the signal in the contact's own language, and its provenance page.
 * Import: `npm run outbound:csv -- khufu <file> --campaign <key>` (dry run), then
 * `--import` once Adrien has said go on the list.
 */
function toImportCsv(rows: Lead[], seg: Segment): string {
  const head = ['email', 'locale', 'sourceUrl', 'sourceNote', 'sendable', 'vars_firstName', 'vars_company', 'vars_signal', 'vars_signalDate', 'vars_segment']
  const body = rows.map((r) =>
    [
      r.email,
      r.locale,
      r.emailSource.match(/https?:\/\/\S+/)?.[0] ?? '',
      `Address published at the source page; signal: ${r.signalUrl}`,
      'yes',
      r.firstName,
      r.company,
      r.locale === 'en' ? r.signalEn : r.signalFr,
      r.locale === 'en' ? r.signalDateEn : r.signalDateFr,
      SEGMENT_MARK[seg],
    ]
      .map(csvCell)
      .join(','),
  )
  return [head.join(','), ...body].join('\n') + '\n'
}

// ---------------------------------------------------------------- main

async function main(): Promise<void> {
  const { records, total } = await fetchAll()
  const funnel: Record<string, number> = { awardNoticesMatched: total, fetched: records.length }

  const notices = records.map(parseNotice).filter((n): n is Notice => n !== null)
  funnel.eformsWithParsableData = notices.length
  funnel.winnerOrgs = notices.reduce((s, n) => s + n.winners.length, 0)

  // Domain patterns observed in the dataset itself, for pattern-marked rows only.
  const domainPattern = new Map<string, 'first.last'>()
  for (const n of notices) {
    for (const w of n.winners) {
      const [local, domain] = w.email.split('@')
      if (domain && /^[a-z]+\.[a-z-]+$/i.test(local) && isNominative(w.email)) domainPattern.set(domain, 'first.last')
    }
  }

  const leads: Lead[] = []
  const seen = new Set<string>()
  let noEmail = 0
  let generic = 0
  let unclassified = 0
  let buyerAddress = 0
  for (const n of notices) {
    for (const w of n.winners) {
      const segment = classify(w, n)
      if (!segment) {
        unclassified++
        continue
      }
      if (w.email && n.otherDomains.has(w.email.split('@')[1])) {
        buyerAddress++
        continue
      }
      let email = w.email
      let status: EmailStatus = 'published'
      if (!isNominative(email)) {
        const domain = email.split('@')[1]
        const { first, last } = nameOf({ ...w, email: '' })
        // The contact field sometimes repeats the company name: that is not a person.
        const isCompanyName = w.contactName.toLowerCase().split(/\s+/).some((t) => t.length > 2 && w.name.toLowerCase().includes(t))
        if (domain && first && last && !isCompanyName && domainPattern.has(domain) && !PERSONAL_DOMAINS.test(email)) {
          email = `${first}.${last}@${domain}`.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-')
          status = 'pattern'
        } else {
          if (email) generic++
          else noEmail++
          continue
        }
      }
      const { first, last } = status === 'published' ? nameOf(w) : nameOf({ ...w, email: '' })
      if (!isGreetable(first) || !isGreetable(last)) continue
      const key = email
      if (seen.has(key)) continue // newest signal wins: records are sorted desc
      seen.add(key)
      const obj = shortObject(n.objet)
      const buyer = buyerShort(n.nomacheteur)
      leads.push({
        segment,
        sendable: status === 'published' ? 'yes' : 'no',
        firstName: first,
        lastName: last,
        role: 'contact named on the award notice',
        email,
        emailStatus: status,
        emailSource: status === 'published' ? n.url : `pattern first.last seen on ${email.split('@')[1]} in BOAMP; contact named in ${n.url}`,
        provenance: 'n/a',
        company: displayCompany(w.name),
        website: w.website,
        city: w.city,
        country: 'FR',
        signalFr: `a remporté le marché « ${obj} » pour ${buyer}`,
        signalEn: `won the public contract "${obj}" for ${buyer}`,
        signalDate: n.dateparution,
        signalDateFr: dateFr(n.dateparution),
        signalDateEn: dateEn(n.dateparution),
        signalUrl: n.url,
        contractObject: n.objet,
        source: 'boamp',
        locale: 'fr',
      })
    }
  }
  Object.assign(funnel, { droppedUnclassified: unclassified, droppedBuyerAddressOnWinner: buyerAddress, droppedGenericOnly: generic, droppedNoEmail: noEmail })

  funnel['boamp.leads'] = leads.length
  const rejected: { reason: string; row: string }[] = []
  if (RESEARCH) leads.push(...readResearch(RESEARCH, rejected))

  // One row per address (BOAMP first, it is the most verifiable), at most 4 per company domain.
  const byEmail = new Map<string, Lead>()
  const perDomain = new Map<string, number>()
  for (const l of leads) {
    const domain = l.email.split('@')[1]
    if (byEmail.has(l.email)) {
      rejected.push({ reason: 'duplicate address', row: l.email })
      continue
    }
    const n = perDomain.get(domain) ?? 0
    if (n >= 4) {
      rejected.push({ reason: 'more than 4 contacts on the same domain', row: l.email })
      continue
    }
    perDomain.set(domain, n + 1)
    byEmail.set(l.email, l)
  }
  const merged = [...byEmail.values()]

  // Provenance: a "published" address must be found again on the page it was read on.
  await checkProvenance(merged)
  for (const l of merged) {
    // GitHub's terms forbid using addresses taken from it for unsolicited e-mail.
    if (/github\.com|githubusercontent/i.test(l.emailSource)) l.provenance = 'source-terms-forbid'
    l.sendable = l.emailStatus === 'published' && l.provenance === 'checked' ? 'yes' : 'no'
  }
  merged.sort((a, b) => (a.sendable === b.sendable ? b.signalDate.localeCompare(a.signalDate) : a.sendable === 'yes' ? -1 : 1))

  fs.mkdirSync(OUT, { recursive: true })
  fs.writeFileSync(
    path.join(OUT, 'leads-rejected.csv'),
    ['reason,row', ...rejected.map((r) => `${csvCell(r.reason)},${csvCell(r.row)}`)].join('\n') + '\n',
  )
  funnel.rejected = rejected.length
  for (const seg of ['agency', 'esn'] as const) {
    const rows = merged.filter((l) => l.segment === seg)
    const file = path.join(OUT, seg === 'agency' ? 'leads-agencies.csv' : 'leads-esn.csv')
    fs.writeFileSync(file, toCsv(rows))
    funnel[`${seg}.leads`] = rows.length
    funnel[`${seg}.sendable`] = rows.filter((r) => r.sendable === 'yes').length
    funnel[`${seg}.pattern`] = rows.filter((r) => r.emailStatus === 'pattern').length
    funnel[`${seg}.publishedNotFoundOrUnreachable`] = rows.filter((r) => r.emailStatus === 'published' && r.provenance !== 'checked').length
    funnel[`${seg}.boamp`] = rows.filter((r) => r.source === 'boamp').length
    funnel[`${seg}.research`] = rows.filter((r) => r.source === 'research').length
    console.log(`✓ ${file} — ${rows.length} leads (${funnel[`${seg}.sendable`]} sendable)`)
    const importFile = path.join(OUT, `import-${CAMPAIGN[seg]}.csv`)
    fs.writeFileSync(importFile, toImportCsv(rows.filter((r) => r.sendable === 'yes'), seg))
  }
  const meta = { source: API, where: whereClause(), since: SINCE, today: TODAY, days: DAYS, funnel }
  fs.writeFileSync(path.join(OUT, 'leadgen-funnel.json'), JSON.stringify(meta, null, 2))
  console.log(JSON.stringify(funnel, null, 2))
}

main().catch((e: unknown) => {
  console.error(e)
  process.exit(1)
})
