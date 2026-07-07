import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { site } from '@/content/site'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/pageHeader'
import { ContactForm } from '@/components/sections/contactForm'
import { WhatsAppGlyph } from '@/components/layout/whatsappButton'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)
  return buildMetadata({
    locale: loc,
    routeKey: 'contact',
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
  })
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : 'fr'
  const dict = getDictionary(locale)
  const c = dict.contact

  return (
    <>
      <PageHeader kicker={c.kicker} title={c.title} subtitle={c.subtitle} />

      {/* Main channel — WhatsApp, fastest way to reach Khufu */}
      <section className="border-b border-[var(--color-line)]">
        <Container className="pb-8 sm:pb-10">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3 text-base font-medium text-white shadow-[0_10px_30px_-12px_rgba(37,211,102,0.8)] transition-transform hover:scale-[1.02]"
          >
            <WhatsAppGlyph size={20} />
            WhatsApp · {site.whatsappDisplay}
          </a>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <ContactForm dict={dict} />
          </div>

          <aside className="lg:pl-8">
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-paper-2)] p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                {c.form.emailLabel}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-accent-ink)] hover:underline"
              >
                {site.email}
              </a>

              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              >
                <WhatsAppGlyph size={18} />
                {site.whatsappDisplay}
              </a>

              <p className="mt-6 text-sm text-[var(--color-ink-2)]">{dict.home.finalCtaBody}</p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  )
}
