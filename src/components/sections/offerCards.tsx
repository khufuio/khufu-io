import type { Locale } from '@/i18n/config'
import { href } from '@/content/site'
import type { Dictionary } from '@/i18n/getDictionary'
import { cn } from '@/lib/cn'
import { ButtonLink } from '@/components/ui/button'
import { Price, FirmPriceNote, PricedText } from '@/components/ui/price'

const ctaHrefFor = (locale: Locale, id: string): string => {
  if (id === 'maintenance') return href(locale, 'maintenance')
  return href(locale, 'contact')
}

export function OfferCards({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
    <div className="grid gap-5 lg:grid-cols-3">
      {dict.offers.items.map((offer) => (
        <div
          key={offer.id}
          className={cn(
            'flex flex-col rounded-[var(--radius-xl)] border p-7',
            offer.featured
              ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)]'
              : 'border-[var(--color-line)] bg-white',
          )}
        >
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">{offer.name}</h3>
            {offer.featured && (
              <span className="shrink-0 rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                ★ {dict.offers.flagshipBadge}
              </span>
            )}
          </div>

          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="font-[family-name:var(--font-display)] text-3xl font-bold">
              {'pricePrefix' in offer ? offer.pricePrefix : null}
              <Price eur={offer.priceEur} locale={locale} />
            </span>
            <span className={cn('text-sm', offer.featured ? 'text-[var(--color-paper-2)]' : 'text-[var(--color-muted)]')}>
              {offer.priceNote}
            </span>
          </div>

          <p className={cn('mt-3 text-sm', offer.featured ? 'text-[var(--color-paper-2)]' : 'text-[var(--color-ink-2)]')}>
            <PricedText text={offer.pitch} locale={locale} />
          </p>

          <ul className="mt-6 flex flex-1 flex-col gap-3">
            {offer.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm">
                <span
                  className={cn(
                    'mt-0.5 shrink-0',
                    offer.featured ? 'text-[var(--color-accent)]' : 'text-[var(--color-accent-ink)]',
                  )}
                  aria-hidden
                >
                  ✓
                </span>
                <span className={offer.featured ? 'text-[var(--color-paper)]' : 'text-[var(--color-ink-2)]'}>
                  <PricedText text={f} locale={locale} />
                </span>
              </li>
            ))}
          </ul>

          <ButtonLink
            href={ctaHrefFor(locale, offer.id)}
            variant={offer.featured ? 'primary' : 'secondary'}
            className="mt-7 w-full"
          >
            {offer.cta}
          </ButtonLink>

          {offer.id === 'regie' && (
            <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)]">{dict.offers.remoteNoteShort}</p>
          )}
        </div>
      ))}
    </div>
    <FirmPriceNote className="mt-5 text-xs text-[var(--color-muted)]">{dict.offers.firmPriceNote}</FirmPriceNote>
    </>
  )
}
