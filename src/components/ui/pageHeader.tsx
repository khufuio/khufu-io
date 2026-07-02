import { Container } from '@/components/ui/container'

export function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="border-b border-[var(--color-line)]">
      <Container className="pt-16 pb-14 sm:pt-24 sm:pb-20">
        {kicker && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
            {kicker}
          </p>
        )}
        <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.02] font-bold tracking-[-0.02em] text-balance sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-[var(--color-ink-2)] text-pretty">{subtitle}</p>}
      </Container>
    </section>
  )
}
