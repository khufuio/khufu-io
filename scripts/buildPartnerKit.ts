/**
 * Renders the partner kit into the formats it is actually used in.
 *
 * The .md files in marketing/partners are the source of truth for the wording;
 * nothing here edits content. This script only re-typesets them:
 *
 *   one-pagers            -> one-page branded A4 PDF (what you attach to an email)
 *   referral agreements   -> PDF, the reference rendering, through the khufu client
 *                            document pipeline (hq/docs/tools/client-documents.md)
 *                            + DOCX, only for a lawyer to annotate — never the rendering
 *                            a layout is judged on
 *   attribution tracker   -> XLSX (what you type into), CSV stays the source
 *
 * The seven partner emails stay .md on purpose — they are copy-paste text.
 *
 * Run with `npm run partner-kit`. Output lands in marketing/partners/dist/,
 * which is generated: delete it and rebuild rather than editing it.
 * Point PARTNER_KIT_DIR at another checkout of the kit if it moves.
 */
import fs from 'node:fs'
import path from 'node:path'
import { DIST_DIR, PARTNERS_DIR } from './partnerKit/brand'
import { buildContractDocx } from './partnerKit/contractDocx'
import { buildContractPdf, type ContractSpec } from './partnerKit/contractPdf'
import { buildOnePagerPdf } from './partnerKit/onePagerPdf'
import { reportUnsupported } from './partnerKit/pdfText'
import { buildTrackerXlsx } from './partnerKit/trackerXlsx'

const read = (name: string): string => fs.readFileSync(path.join(PARTNERS_DIR, name), 'utf8')

function write(name: string, data: Buffer, detail: string): void {
  const file = path.join(DIST_DIR, name)
  fs.writeFileSync(file, data)
  const { size } = fs.statSync(file)
  if (size === 0) throw new Error(`${name} was written empty`)
  console.log(`✓ dist/${name} — ${detail}, ${(size / 1024).toFixed(1)} KB`)
}

const CONTRACTS: { source: string; out: string; kicker: string; spec: ContractSpec }[] = [
  {
    source: 'contrat-apporteur-affaires-projet-fr.md',
    out: 'contrat-apporteur-affaires-projet-fr',
    kicker: 'Projet de contrat',
    spec: {
      lang: 'fr',
      type: "Contrat d'apporteur d'affaires",
      label: "Contrat d'apporteur d'affaires — projet Khufu FZCO",
    },
  },
  {
    source: 'referral-agreement-draft-en.md',
    out: 'referral-agreement-draft-en',
    kicker: 'Draft agreement',
    spec: { lang: 'en', type: 'Referral agreement', label: 'Referral agreement — Khufu FZCO draft' },
  },
]

async function main(): Promise<void> {
  if (!fs.existsSync(PARTNERS_DIR)) throw new Error(`partner kit not found at ${PARTNERS_DIR}`)
  fs.mkdirSync(DIST_DIR, { recursive: true })

  for (const name of ['one-pager-partenaire-fr', 'one-pager-partner-en']) {
    const { pdf, scale } = await buildOnePagerPdf(read(`${name}.md`))
    write(`${name}.pdf`, pdf, `1 page A4, type scale ${scale}`)
  }

  for (const contract of CONTRACTS) {
    const markdown = read(contract.source)
    write(`${contract.out}.docx`, await buildContractDocx(markdown, contract.kicker), 'DOCX, reviewable')
    const pdfPath = path.join(DIST_DIR, `${contract.out}.pdf`)
    const htmlPath = buildContractPdf(markdown, contract.spec, pdfPath)
    console.log(`✓ dist/${contract.out}.pdf — client-doc-pdf.mjs, HTML at ${htmlPath}`)
  }

  write(
    'attribution-tracker.xlsx',
    await buildTrackerXlsx(read('attribution-tracker.csv'), read('attribution-tracker.md')),
    'XLSX, 2 sheets',
  )

  reportUnsupported()
  console.log(`\nOutput: ${DIST_DIR}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
