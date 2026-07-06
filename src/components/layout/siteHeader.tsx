'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import { href } from '@/content/site'
import type { Dictionary } from '@/i18n/getDictionary'
import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { Wordmark } from './wordmark'
import { blogUi } from '@/content/articles'
import { ui } from '@/i18n/ui'
import { cn } from '@/lib/cn'

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false)
  const nav = dict.nav

  const links = [
    { label: nav.offers, href: href(locale, 'offers') },
    { label: nav.work, href: href(locale, 'work') },
    { label: nav.method, href: href(locale, 'method') },
    { label: blogUi.navLabel[locale], href: href(locale, 'blog') },
    { label: nav.about, href: href(locale, 'about') },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-paper)_88%,transparent)] backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Wordmark locale={locale} />

        <nav className="hidden items-center gap-7 md:flex" aria-label={ui.mainNav[locale]}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ButtonLink href={href(locale, 'contact')} size="md">
            {nav.cta}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset ring-[var(--color-line)] md:hidden"
          aria-label={open ? ui.closeMenu[locale] : ui.openMenu[locale]}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                'absolute left-0 block h-0.5 w-4 bg-[var(--color-ink)] transition-transform',
                open ? 'top-1.5 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1.5 block h-0.5 w-4 bg-[var(--color-ink)] transition-opacity',
                open ? 'opacity-0' : 'opacity-100',
              )}
            />
            <span
              className={cn(
                'absolute left-0 block h-0.5 w-4 bg-[var(--color-ink)] transition-transform',
                open ? 'top-1.5 -rotate-45' : 'top-3',
              )}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-line)] md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-end px-2">
              <ButtonLink href={href(locale, 'contact')} onClick={() => setOpen(false)}>
                {nav.cta}
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
