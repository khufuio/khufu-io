import type { Metadata } from 'next'
import { defaultLocale, isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { href } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { CtaBanner } from '@/components/sections/ctaBanner'
import { HowToJsonLd } from '@/components/seo/jsonLd'
import { sprintLanding } from '@/content/sprintLanding'
import { sprintRunStepText, sprintRunSteps } from '@/content/sprintRun'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : defaultLocale
  const dict = getDictionary(loc)
  return buildMetadata({
    locale: loc,
    routeKey: 'method',
    title: dict.method.metaTitle,
    description: dict.method.metaDescription,
  })
}

export default async function MethodPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const dict = getDictionary(locale)
  const m = dict.method
  /*
   * The days are NOT authored here: they come from the same source as the
   * /sprint-v1 timeline (src/content/sprintRun.ts), already written in all ten
   * locales. Simplest fix for the drift between the two pages, and the only one
   * that removes its cause — a second copy of the week would drift again.
   */
  const steps = sprintRunSteps(locale)
  const t = sprintLanding.timeline

  return (
    <>
      <HowToJsonLd
        name={m.metaTitle}
        description={m.subtitle}
        steps={steps.map((d) => ({ name: `${d.day} — ${d.title}`, text: sprintRunStepText(d) }))}
      />
      <PageHeader kicker={m.kicker} title={m.title} subtitle={m.subtitle} />

      {/* Timeline J0 → J7 */}
      <section>
        <Container className="py-16 sm:py-20">
          <ol className="relative border-s border-[var(--color-line)]">
            {steps.map((d) => (
              <li key={d.day} className="mb-10 ms-6 last:mb-0">
                <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent)]" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-ink)]">
                  {d.day} · {d.weekday}
                </p>
                <h2 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">
                  {d.title}
                </h2>
                {d.lanes ? (
                  // Friday runs on two tracks at once: the client tests while we ship.
                  <dl className="mt-2 max-w-2xl space-y-1 text-[var(--color-ink-2)]">
                    <div>
                      <dt className="inline font-semibold">{t.youLabel[locale]} — </dt>
                      <dd className="inline">{d.lanes.you}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">{t.usLabel[locale]} — </dt>
                      <dd className="inline">{d.lanes.us}</dd>
                    </div>
                  </dl>
                ) : (
                  <p className="mt-2 max-w-2xl text-[var(--color-ink-2)]">{d.body}</p>
                )}
              </li>
            ))}
          </ol>

          <p className="mt-10 max-w-2xl rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-paper-2)] p-5 text-sm text-[var(--color-muted)]">
            {m.storeNote}
          </p>
        </Container>
      </section>

      {/* Clean code */}
      <section className="bg-[var(--color-paper-2)]">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
              {m.qualityTitle}
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-2)] text-pretty">{m.qualityBody}</p>
          </div>
        </Container>
      </section>

      {/* Role of AI */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)]/[1.05] font-bold tracking-[-0.02em] text-balance">
              {m.aiTitle}
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-2)] text-pretty">{m.aiBody}</p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title={dict.home.finalCtaTitle}
        body={dict.home.finalCtaBody}
        buttonLabel={m.ctaButton}
        href={href(locale, 'contact')}
      />
    </>
  )
}
