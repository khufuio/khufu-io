import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { site } from '@/content/site'

export function CtaBanner({
  title,
  body,
  buttonLabel,
  href,
}: {
  title: string
  body: string
  buttonLabel: string
  href: string
}) {
  return (
    <section>
      <Container className="py-20 sm:py-28">
        <div className="rounded-[var(--radius-xl)] bg-[var(--color-ink)] px-8 py-16 text-center text-[var(--color-paper)] sm:px-16 sm:py-20">
          <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-paper-2)] text-pretty">{body}</p>
          <div className="mt-8">
            <ButtonLink href={href} size="lg">
              {buttonLabel}
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-[color-mix(in_srgb,var(--color-paper)_60%,transparent)]">{site.email}</p>
        </div>
      </Container>
    </section>
  )
}
