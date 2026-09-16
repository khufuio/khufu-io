/**
 * Renders the partner kit into the formats it is actually used in.
 *
 * The sources in marketing/ are the truth for the wording; nothing here edits
 * content. This script only re-typesets them:
 *
 *   flyers                -> one-page A4 PDF, the piece that actually gets sent and
 *                            forwarded (decisions cmu3baml, cmu3bcm7). Their copy
 *                            lives in marketing/flyers/*.json, not in the .md
 *   referral agreements   -> PDF, through the khufu client document pipeline
 *                            (hq/docs/tools/client-documents.md)
 *   attribution tracker   -> XLSX (what you type into), CSV stays the source
 *
 * Every PDF here goes through headless Chrome over hq/scripts/client-doc-pdf.mjs.
 * There is no pdfkit renderer left: the one that used to typeset the one-pagers
 * produced a text document nobody would forward, which is what cmu3baml rejected,
 * and it sat outside the house charter, which is what cmu387bt is about.
 *
 * There is no DOCX either — it existed only for a lawyer's tracked changes, and
 * cmu3babq settled that there is no legal review on this kit.
 *
 * The seven partner emails stay .md on purpose — they are copy-paste text, and so
 * are the long-form one-pagers, which are the reference text behind the flyers.
 *
 * Run with `npm run partner-kit`. Output lands in marketing/partners/dist/,
 * which is generated: delete it and rebuild rather than editing it.
 * Point PARTNER_KIT_DIR at another checkout of the kit if it moves.
 */
import fs from 'node:fs'
import path from 'node:path'
import { buildFlyer } from './buildFlyer'
import { DIST_DIR, PARTNERS_DIR } from './partnerKit/brand'
import { buildContractPdf, type ContractSpec } from './partnerKit/contractPdf'
import { buildTrackerXlsx } from './partnerKit/trackerXlsx'

/** The flyers of this kit. Their content files are the source of their copy. */
const FLYERS_DIR = path.join(PARTNERS_DIR, '..', 'flyers')
const FLYERS = [
  { content: 'apporteur-fr.json', out: 'flyer-apporteur-fr.pdf' },
  { content: 'apporteur-en.json', out: 'flyer-referral-en.pdf' },
]

const read = (name: string): string => fs.readFileSync(path.join(PARTNERS_DIR, name), 'utf8')

function write(name: string, data: Buffer, detail: string): void {
  const file = path.join(DIST_DIR, name)
  fs.writeFileSync(file, data)
  const { size } = fs.statSync(file)
  if (size === 0) throw new Error(`${name} was written empty`)
  console.log(`✓ dist/${name} — ${detail}, ${(size / 1024).toFixed(1)} KB`)
}

const CONTRACTS: { source: string; out: string; spec: ContractSpec }[] = [
  {
    source: 'contrat-apporteur-affaires-fr.md',
    out: 'contrat-apporteur-affaires-fr',
    spec: {
      lang: 'fr',
      type: "Contrat d'apporteur d'affaires",
      label: "Contrat d'apporteur d'affaires — Khufu FZCO",
    },
  },
  {
    source: 'referral-agreement-en.md',
    out: 'referral-agreement-en',
    spec: { lang: 'en', type: 'Referral agreement', label: 'Referral agreement — Khufu FZCO' },
  },
]

async function main(): Promise<void> {
  if (!fs.existsSync(PARTNERS_DIR)) throw new Error(`partner kit not found at ${PARTNERS_DIR}`)
  fs.mkdirSync(DIST_DIR, { recursive: true })

  for (const flyer of FLYERS) {
    buildFlyer(path.join(FLYERS_DIR, flyer.content), path.join(DIST_DIR, flyer.out))
  }

  for (const contract of CONTRACTS) {
    const markdown = read(contract.source)
    const pdfPath = path.join(DIST_DIR, `${contract.out}.pdf`)
    const htmlPath = buildContractPdf(markdown, contract.spec, pdfPath)
    console.log(`✓ dist/${contract.out}.pdf — client-doc-pdf.mjs, HTML at ${htmlPath}`)
  }

  write(
    'attribution-tracker.xlsx',
    await buildTrackerXlsx(read('attribution-tracker.csv'), read('attribution-tracker.md')),
    'XLSX, 2 sheets',
  )

  console.log(`\nOutput: ${DIST_DIR}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
