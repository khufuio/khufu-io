import type { ReactNode } from 'react'
import Link from 'next/link'
import type { PolicyBlock } from '@/content/policyDoc'

/** Renders the only inline markup policies use: `**bold**` and `[text](/path)`. */
function inline(text: string): ReactNode[] {
  // Capture groups: 1 = bold text, 2 = link text, 3 = link href.
  const parts = text.split(/\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g)
  const nodes: ReactNode[] = []
  for (let i = 0; i < parts.length; i += 4) {
    if (parts[i]) nodes.push(parts[i])
    const bold = parts[i + 1]
    const label = parts[i + 2]
    const target = parts[i + 3]
    if (bold !== undefined) {
      nodes.push(
        <strong key={i} className="font-semibold text-[var(--color-ink)]">
          {bold}
        </strong>,
      )
    } else if (label !== undefined && target !== undefined) {
      nodes.push(
        <Link key={i} href={target} className="text-[var(--color-ink)] underline underline-offset-2">
          {label}
        </Link>,
      )
    }
  }
  return nodes
}

export function PolicyBlocks({ blocks }: { blocks: PolicyBlock[] }): ReactNode {
  return (
    <div className="max-w-3xl space-y-5">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  )
}

function Block({ block }: { block: PolicyBlock }): ReactNode {
  if ('h2' in block) return <h2 className="pt-4 text-lg font-semibold">{block.h2}</h2>
  if ('p' in block) return <p className="text-[var(--color-ink-2)] text-pretty">{inline(block.p)}</p>
  if ('ul' in block || 'ol' in block) {
    const ordered = 'ol' in block
    const items = ordered ? block.ol : block.ul
    const List = ordered ? 'ol' : 'ul'
    return (
      <List className={`${ordered ? 'list-decimal' : 'list-disc'} space-y-2 ps-5 text-[var(--color-ink-2)]`}>
        {items.map((item) => (
          <li key={item}>{inline(item)}</li>
        ))}
      </List>
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
