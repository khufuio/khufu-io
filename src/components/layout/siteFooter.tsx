import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import { href, site } from '@/content/site'
import type { Dictionary } from '@/i18n/getDictionary'
import { Container } from '@/components/ui/container'
import { Wordmark } from './wordmark'
import { WhatsAppGlyph } from './whatsappButton'

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = 2026 // build-time constant; bump on redeploy
  const nav = dict.nav
  const f = dict.footer

  return (
    <footer className="mt-24 border-t border-[var(--color-line)] bg-[var(--color-paper-2)]">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Wordmark locale={locale} />
          <p className="mt-4 max-w-xs text-sm text-[var(--color-muted)]">{f.tagline}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm font-medium text-[var(--color-accent-ink)] hover:underline"
          >
            {site.email}
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]"
          >
            <WhatsAppGlyph size={15} className="text-[#25D366]" />
            WhatsApp
          </a>
        </div>

        <FooterCol title={f.columns.offers}>
          <FooterLink href={href(locale, 'sprint')}>Sprint V1</FooterLink>
          <FooterLink href={href(locale, 'maintenance')}>{nav.maintenance}</FooterLink>
          <FooterLink href={href(locale, 'remote')}>Remote</FooterLink>
          <FooterLink href={href(locale, 'offers')}>{nav.offers}</FooterLink>
          <FooterLink href={href(locale, 'method')}>{nav.method}</FooterLink>
        </FooterCol>

        <FooterCol title={f.columns.company}>
          <FooterLink href={href(locale, 'work')}>{nav.work}</FooterLink>
          <FooterLink href={href(locale, 'about')}>{nav.about}</FooterLink>
          <FooterLink href={href(locale, 'contact')}>{nav.contact}</FooterLink>
        </FooterCol>

        <FooterCol title={f.columns.legal}>
          <FooterLink href={href(locale, 'legal')}>{f.legal.mentions}</FooterLink>
          <FooterLink href={href(locale, 'privacy')}>{f.legal.privacy}</FooterLink>
        </FooterCol>
      </Container>

      <Container className="flex flex-col items-start justify-between gap-2 border-t border-[var(--color-line)] py-6 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center">
        <p>
          © {year} {site.name}. {f.rights}
        </p>
        <p>{site.domain}</p>
      </Container>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-ink)]">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]">
        {children}
      </Link>
    </li>
  )
}
