import type { GuideBlock } from '@/content/leadMagnets'

/**
 * Renders the free chapters of a guide on its landing page. Same block types
 * the PDF generator consumes (scripts/buildLeadMagnetPdfs.ts) — one content
 * source, two renderers.
 */
export function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  )
}

function Block({ block }: { block: GuideBlock }) {
  if ('h3' in block) {
    return (
      <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.01em] text-[var(--color-ink)]">
        {block.h3}
      </h3>
    )
  }

  if ('p' in block) {
    return <p className="text-[17px]/[1.7] text-[var(--color-ink-2)] text-pretty">{block.p}</p>
  }

  if ('ul' in block) {
    return (
      <ul className="flex flex-col gap-3">
        {block.ul.map((item, i) => (
          <li key={i} className="flex gap-3 text-[17px]/[1.7] text-[var(--color-ink-2)]">
            <span
              aria-hidden
              className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
            />
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if ('ol' in block) {
    return (
      <ol className="flex flex-col gap-4">
        {block.ol.map((item, i) => (
          <li key={i} className="flex gap-4 text-[17px]/[1.7] text-[var(--color-ink-2)]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent-ink)]">
              {i + 1}
            </span>
            <span className="pt-0.5">{item}</span>
          </li>
        ))}
      </ol>
    )
  }

  if ('quote' in block) {
    return (
      <blockquote className="border-l-2 border-[var(--color-accent)] pl-5 text-lg/[1.6] font-medium text-[var(--color-ink)] italic">
        {block.quote}
      </blockquote>
    )
  }

  if ('callout' in block) {
    return (
      <div className="rounded-[var(--radius-lg)] bg-[var(--color-accent-soft)] p-5 sm:p-6">
        <p className="font-semibold text-[var(--color-accent-ink)]">{block.callout.title}</p>
        <p className="mt-2 text-[var(--color-ink-2)]">{block.callout.body}</p>
      </div>
    )
  }

  if ('table' in block) {
    const { head, rows, note } = block.table
    return (
      <div>
        {/* Horizontal scroll rather than a squeezed grid — these tables carry numbers. */}
        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
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
              {rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border-b border-[var(--color-line)] px-3 py-3 align-top text-[var(--color-ink-2)]"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {note && <p className="mt-3 text-sm text-[var(--color-muted)]">{note}</p>}
      </div>
    )
  }

  if ('checklist' in block) {
    return (
      <ol className="flex flex-col gap-7">
        {block.checklist.map((item) => (
          <li key={item.n}>
            <div className="flex gap-4">
              <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-accent)]">
                {item.n}
              </span>
              <div>
                <p className="font-semibold text-[var(--color-ink)]">{item.q}</p>
                <p className="mt-2 text-[var(--color-ink-2)]">
                  <span className="font-semibold text-[var(--color-accent-ink)]">Why · </span>
                  {item.why}
                </p>
                <p className="mt-1.5 text-[var(--color-ink-2)]">
                  <span className="font-semibold text-[#b4232a]">Red flag · </span>
                  {item.redFlag}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    )
  }

  return null
}
