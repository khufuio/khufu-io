'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/i18n/config'
import { href, sprintHref } from '@/content/site'
import type { Dictionary } from '@/i18n/getDictionary'
import { Container } from '@/components/ui/container'
import { ButtonLink, buttonClasses } from '@/components/ui/button'
import { Wordmark } from './wordmark'
import { blogUi } from '@/content/articles'
import { ui } from '@/i18n/ui'
import { cn } from '@/lib/cn'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'
import { SPRINT_CONTACT_EVENT, SPRINT_EVENTS, type SprintContactEventDetail } from '@/lib/sprintContactEvents'
import { SPRINT_FORM_ANCHOR } from '@/lib/sprintAnchors'

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
   * button on a phone.
   *
   * ⛔ AND ON THAT LANDING IT WAS DEAD. It was a `next/link` to `#start`: the
   * first click scrolled to the closing block and wrote `#start` into the
   * address bar, and every click after that did nothing whatsoever — the router
   * sees the same URL and stands down, and a browser does not re-run a hash jump
   * for a hash that has not changed. Measured against production on 2026-09-15,
   * before the fix: first click 0 → 7642px, second and third 0 → 0. So the one
   * permanently-visible button on the page with an ad budget on it was dead for
   * the rest of the visit, and dead on arrival for anyone following a `#start`
   * link. Adrien: « le bouton Réserver un sprint du header ne fait RIEN ».
   *
   * ⚠️ THE FIX IS NOT A BETTER SCROLL, IT IS THE SAME ACTION AS EVERY OTHER CTA
   * ON THAT PAGE: it opens the contact modal (2026-09-15 — a button that scrolls
   * asks the visitor to start reading again somewhere else). The modal's
   * provider is mounted by the PAGE and this header by the LAYOUT, so there is
   * no shared React context between them; the click travels as a window event
   * and the provider answers it with `preventDefault()`.
   *
   * ⛔ AND IT IS A PLAIN `<a>`, NEVER `next/link`. The anchor is the fallback
   * when no provider answers — no JavaScript, or a future page that renders this
   * header without the modal — and a plain anchor re-runs its own jump on every
   * click, which is precisely what `next/link` refused to do.
   *
   * Scoped by pathname rather than by a prop because the header is rendered by
   * the shared locale layout, which has no idea which page it is wrapping.
   */
  const pathname = usePathname()
  const onSprintLanding = pathname?.includes('/sprint-v1') ?? false
  const ctaHref = onSprintLanding ? `#${SPRINT_FORM_ANCHOR}` : sprintHref(locale, 'header')

  const onSprintCtaClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    /* Same event name and `placement` as the page's other CTAs, so the five stay
       comparable; `cta_clicked` is fired too because ButtonLink fires it
       everywhere else and dropping it here would put a hole in that series. */
    track('cta_clicked', { href: ctaHref, label: nav.cta })
    track(SPRINT_EVENTS.ctaClicked, { placement: 'header', week: null, locale, ...campaignProps() })
    const request = new CustomEvent<SprintContactEventDetail>(SPRINT_CONTACT_EVENT, {
      detail: { placement: 'header' },
      cancelable: true,
    })
    // `dispatchEvent` returns false when a listener called preventDefault, i.e.
    // when the modal took the click. Nothing listening → the anchor does its job.
    if (!window.dispatchEvent(request)) event.preventDefault()
    setOpen(false)
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
          {onSprintLanding ? (
            <a href={ctaHref} data-cta="header" onClick={onSprintCtaClick} className={buttonClasses('primary', 'md')}>
              {nav.cta}
            </a>
          ) : (
            <ButtonLink href={ctaHref} size="md">
              {nav.cta}
            </ButtonLink>
          )}
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
              {onSprintLanding ? (
                <a
                  href={ctaHref}
                  data-cta="header"
                  onClick={onSprintCtaClick}
                  className={buttonClasses('primary', 'md')}
                >
                  {nav.cta}
                </a>
              ) : (
                <ButtonLink href={ctaHref} onClick={() => setOpen(false)}>
                  {nav.cta}
                </ButtonLink>
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
