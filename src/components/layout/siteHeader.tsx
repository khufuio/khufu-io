'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/i18n/config'
import { href, sprintHref } from '@/content/site'
import type { Dictionary } from '@/i18n/getDictionary'
import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'
import { Wordmark } from './wordmark'
import { blogUi } from '@/content/articles'
import { ui } from '@/i18n/ui'
import { cn } from '@/lib/cn'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false)
  const nav = dict.nav

  /*
   * On the Sprint V1 landing the header CTA stays on the page.
   *
   * Everywhere else it routes to that landing, tagged `?src=header`, which is
   * right. There, it sent a visitor we PAID for to a different page and a
   * different form — losing the campaign tags on the way, since they only live
   * in this page's URL — while being the most prominent, permanently visible
   * button on a phone. Here it scrolls to the one conversion form instead.
   *
   * Scoped by pathname rather than by a prop because the header is rendered by
   * the shared locale layout, which has no idea which page it is wrapping.
   */
  const pathname = usePathname()
  const onSprintLanding = pathname?.includes('/sprint-v1') ?? false
  const ctaHref = onSprintLanding ? '#start' : sprintHref(locale, 'header')

  /** Same event and shape as the page's other CTAs, so the five are comparable. */
  const onCtaClick = (): void => {
    if (!onSprintLanding) return
    track('sprint_cta_clicked', { placement: 'header', ...campaignProps() })
  }

  const links = [
    { label: nav.offers, href: href(locale, 'offers') },
    { label: nav.work, href: href(locale, 'work') },
    { label: nav.method, href: href(locale, 'method') },
    { label: blogUi.navLabel[locale], href: href(locale, 'blog') },
    { label: nav.about, href: href(locale, 'about') },
    { label: nav.contact, href: href(locale, 'contact') },
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
          <ButtonLink href={ctaHref} size="md" onClick={onCtaClick}>
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
              <ButtonLink
                href={ctaHref}
                onClick={() => {
                  onCtaClick()
                  setOpen(false)
                }}
              >
                {nav.cta}
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
