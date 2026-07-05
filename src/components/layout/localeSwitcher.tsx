'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, localeNames, type Locale } from '@/i18n/config'

/** Swaps the leading /:locale segment while preserving the rest of the path. */
function swapLocale(pathname: string, next: Locale): string {
  const parts = pathname.split('/')
  // parts[0] === '' (leading slash), parts[1] === current locale
  if (parts.length > 1) parts[1] = next
  const joined = parts.join('/')
  return joined === '' ? `/${next}` : joined
}

/**
 * Language picker as a native <select> — scales cleanly as we add locales
 * (10+ languages) where inline pills would overflow. Lives in the footer.
 */
export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() ?? `/${current}`
  const router = useRouter()

  return (
    <label className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)]">
      <span className="sr-only">Langue</span>
      <select
        value={current}
        onChange={(e) => router.push(swapLocale(pathname, e.target.value as Locale))}
        aria-label="Langue"
        className="cursor-pointer rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-1.5 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {localeNames[l]}
          </option>
        ))}
      </select>
    </label>
  )
}
