import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { defaultLocale, isLocale, type Locale } from '@/i18n/config'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import {
  labyrinthPrivacy,
  labyrinthPrivacyFor,
  labyrinthPrivacyLocales,
  type PolicyBlock,
} from '@/content/labyrinthPrivacy'

// Blind Labyrinth app privacy policy — the URL the App Store and Play listings
// point to (todo cmwectyu). Locales without a translation render the English
// text, and canonicalise to the English page so they are not duplicates.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = labyrinthPrivacyFor(isLocale(locale) ? locale : defaultLocale)
  const doc = labyrinthPrivacy[loc]
  return buildMetadata({
    locale: loc,
    routeKey: 'labyrinthPrivacy',
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternateLocales: labyrinthPrivacyLocales,
  })
}

/** Renders the only inline markup the policy uses: `**bold**`. */
function inline(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[var(--color-ink)]">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

function Block({ block }: { block: PolicyBlock }): ReactNode {
  if ('h2' in block) return <h2 className="pt-4 text-lg font-semibold">{block.h2}</h2>
  if ('p' in block) return <p className="text-[var(--color-ink-2)] text-pretty">{inline(block.p)}</p>
  if ('ul' in block) {
    return (
      <ul className="list-disc space-y-2 ps-5 text-[var(--color-ink-2)]">
        {block.ul.map((item) => (
          <li key={item}>{inline(item)}</li>
        ))}
      </ul>
    )
  }
  const { head, rows } = block.table
  return (
    // Horizontal scroll rather than a squeezed grid on phones.
    <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-[var(--color-paper-2)]">
            {head.map((h) => (
              <th key={h} className="border-b border-[var(--color-line)] px-3 py-3 font-semibold text-[var(--color-ink)]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, j) => (
                <td key={j} className="border-b border-[var(--color-line)] px-3 py-3 align-top text-[var(--color-ink-2)]">
                  {inline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default async function LabyrinthPrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<ReactNode> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const loc = labyrinthPrivacyFor(locale)
  const doc = labyrinthPrivacy[loc]

  // A fallback locale reads the English text: mark it as such (and LTR under Arabic).
  const fallback = loc === locale ? {} : { lang: loc, dir: 'ltr' as const }

  return (
    <div {...fallback}>
      <PageHeader kicker="Blind Labyrinth" title={doc.title} subtitle={doc.updated} />
      <section>
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl space-y-5">
            {doc.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
