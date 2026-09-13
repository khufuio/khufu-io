import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import { href, sprintHref } from '@/content/site'
import type { Dictionary } from '@/i18n/getDictionary'
import { ButtonLink } from '@/components/ui/button'
import { Price, FirmPriceNote, PricedText } from '@/components/ui/price'

/**
 * The home page's offer block: Sprint V1 alone, full width.
 *
 * Khufu sells ONE offer (decision 2026-09-08). The home used to show three
 * cards side by side, which handed a third of the attention to two products we
 * do not acquire on — and undid the positioning paid traffic had just bought
 * when a visitor clicked the logo from /sprint-v1. Maintenance and Remote are
 * still sold, as follow-ups: see `SprintFollowUps` below.
 */
export function SprintOffer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const offer = dict.offers.items.find((o) => o.id === 'sprint')!

  return (
    <>
      <div className="rounded-[var(--radius-xl)] bg-[var(--color-ink)] p-8 text-[var(--color-paper)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-accent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
              ★ {dict.offers.flagshipBadge}
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
              {offer.name}
            </h3>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-[-0.02em]">
                <Price eur={offer.priceEur} locale={locale} />
              </span>
              <span className="text-[var(--color-paper-2)]">{offer.priceNote}</span>
            </div>
            <p className="mt-5 max-w-md text-lg text-[var(--color-paper-2)] text-pretty">{offer.pitch}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-auto">
              <ButtonLink href={sprintHref(locale, 'home-offer')} size="lg">
                {dict.offers.sprintCta}
              </ButtonLink>
              <ButtonLink
                href={href(locale, 'contact')}
                variant="ghost"
                size="lg"
                className="text-[var(--color-paper)] hover:bg-white/10"
              >
                {offer.cta}
              </ButtonLink>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/15 lg:pl-14">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-paper-2)]">
              {dict.sprintPage.includesTitle}
            </p>
            <ul className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {offer.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[15px]">
                  <span className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden>
                    ✓
                  </span>
                  <span className="text-[var(--color-paper)]">
                    <PricedText text={f} locale={locale} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FirmPriceNote className="mt-5 text-xs text-[var(--color-muted)]">{dict.offers.firmPriceNote}</FirmPriceNote>
    </>
  )
}

/**
 * Maintenance and Remote, deliberately subordinate.
 *
 * They stay on the site — they are real upsells — but as what comes AFTER a
 * sprint, not as a third of a choice to make on arrival. Hence: no price
 * headline, no feature list, no button. A muted strip under the offer.
 */
export function SprintFollowUps({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.home
  const maintenance = dict.offers.items.find((o) => o.id === 'maintenance')!
  const remote = dict.offers.items.find((o) => o.id === 'regie')!

  const rows: { key: string; name: string; price: React.ReactNode; pitch: string; route: 'maintenance' | 'remote' }[] = [
    {
      key: maintenance.id,
      name: maintenance.name,
      price: (
        <>
          {'pricePrefix' in maintenance ? maintenance.pricePrefix : null}
          <Price eur={maintenance.priceEur} locale={locale} /> {maintenance.priceNote}
        </>
      ),
      pitch: maintenance.pitch,
      route: 'maintenance',
    },
    {
      key: remote.id,
      name: remote.name,
      price: (
        <>
          <Price eur={remote.priceEur} locale={locale} /> {remote.priceNote}
        </>
      ),
      pitch: remote.pitch,
      route: 'remote',
    },
  ]

  return (
    <div className="border-t border-[var(--color-line)] pt-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">{h.followUpsTitle}</p>
      <p className="mt-2 max-w-2xl text-sm text-[var(--color-ink-2)] text-pretty">{h.followUpsBody}</p>

      <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
        {rows.map((r) => (
          <Link
            key={r.key}
            href={href(locale, r.route)}
            className="group flex flex-col gap-1 rounded-[var(--radius-lg)] border border-transparent py-1 transition-colors hover:border-[var(--color-line)]"
          >
            <span className="flex flex-wrap items-baseline gap-x-2.5">
              <span className="font-semibold text-[var(--color-ink)]">{r.name}</span>
              <span className="text-sm text-[var(--color-muted)]">{r.price}</span>
            </span>
            <span className="text-sm text-[var(--color-ink-2)] text-pretty">
              <PricedText text={r.pitch} locale={locale} />
            </span>
            <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent-ink)]">
              {dict.offers.detailCta}
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-5 text-xs leading-relaxed text-[var(--color-muted)]">
        <Link href={href(locale, 'remote')} className="hover:text-[var(--color-ink-2)] hover:underline">
          {dict.offers.remoteNoteShort}
        </Link>
      </p>
    </div>
  )
}
