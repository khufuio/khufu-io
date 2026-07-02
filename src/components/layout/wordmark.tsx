import Link from 'next/link'
import { cn } from '@/lib/cn'
import type { Locale } from '@/i18n/config'

/**
 * Khufu wordmark. Text-based (no asset dependency) — bold geometric display
 * type with wide tracking, echoing the original brand.
 */
export function Wordmark({
  locale,
  className,
}: {
  locale: Locale
  className?: string
}) {
  return (
    <Link
      href={`/${locale}`}
      aria-label="Khufu — accueil"
      className={cn(
        'font-[family-name:var(--font-display)] text-xl font-bold tracking-[0.22em] text-[var(--color-ink)]',
        className,
      )}
    >
      KHUFU
    </Link>
  )
}
