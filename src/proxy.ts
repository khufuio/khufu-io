import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from '@/i18n/config'
import { COOKIE_NAME, currencyForCountry } from '@/lib/currency'

const PUBLIC_FILE = /\.[^/]+$/

function preferredLocale(req: NextRequest): string {
  const header = req.headers.get('accept-language')
  if (header) {
    const wanted = header.split(',').map((p) => p.split(';')[0].trim().slice(0, 2).toLowerCase())
    const match = wanted.find((w) => (locales as readonly string[]).includes(w))
    if (match) return match
  }
  return defaultLocale
}

/** Stamp the display currency (EUR/USD) from the visitor's country onto a cookie. */
function withCurrencyCookie(req: NextRequest, res: NextResponse): NextResponse {
  // `geo` is populated by Vercel; the header is the portable fallback.
  const country = req.headers.get('x-vercel-ip-country')
  const currency = currencyForCountry(country)
  if (req.cookies.get(COOKIE_NAME)?.value !== currency) {
    res.cookies.set(COOKIE_NAME, currency, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
    })
  }
  return res
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Skip API, Next internals, the PostHog proxy, metadata routes, and static files.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/ingest') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/brand') ||
    pathname === '/icon' ||
    pathname === '/apple-icon' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return
  }

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  )
  if (hasLocale) return withCurrencyCookie(req, NextResponse.next())

  const locale = preferredLocale(req)
  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return withCurrencyCookie(req, NextResponse.redirect(url))
}

export const config = {
  matcher: ['/((?!_next|ingest|api|brand|icon|apple-icon|.*\\..*).*)'],
}
