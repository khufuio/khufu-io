import { cn } from '@/lib/cn'

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
  className,
}: {
  kicker?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {kicker && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
          {kicker}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-[var(--color-ink-2)] text-pretty">{subtitle}</p>}
    </div>
  )
}
