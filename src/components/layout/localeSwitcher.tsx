'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { locales, localeNames, type Locale } from '@/i18n/config'
import { cn } from '@/lib/cn'

/** Swaps the leading /:locale segment while preserving the rest of the path. */
function swapLocale(pathname: string, next: Locale): string {
  const parts = pathname.split('/')
  // parts[0] === '' (leading slash), parts[1] === current locale
  if (parts.length > 1) parts[1] = next
  const joined = parts.join('/')
  return joined === '' ? `/${next}` : joined
}

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() ?? `/${current}`

  return (
    <div className="flex items-center gap-1 text-xs" aria-label="Langue">
      {locales.map((l) => (
        <Link
          key={l}
          href={swapLocale(pathname, l)}
          hrefLang={l}
          aria-current={l === current ? 'true' : undefined}
          className={cn(
            'rounded-full px-2 py-1 uppercase tracking-wide transition-colors',
            l === current
              ? 'bg-[var(--color-accent)] text-white'
              : 'text-[var(--color-ink-2)] hover:text-[var(--color-ink)]',
          )}
          title={localeNames[l]}
        >
          {l}
        </Link>
      ))}
    </div>
  )
}
