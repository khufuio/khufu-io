import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from '@/i18n/config'
import { COOKIE_NAME, currencyForCountry } from '@/lib/currency'
import { REGION_COOKIE, needsConsent } from '@/lib/consent'
import { isLeadMagnetPath } from '@/content/leadMagnets/slugs'

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

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

/**
 * Stamp geo-derived cookies from the visitor's country: the display currency
 * (EUR/USD) and whether the consent banner should show (EU/EEA/UK only). Both are
 * read client-side; the country header is Vercel-populated.
 */
function withGeoCookies(req: NextRequest, res: NextResponse): NextResponse {
  const country = req.headers.get('x-vercel-ip-country')

  const currency = currencyForCountry(country)
  if (req.cookies.get(COOKIE_NAME)?.value !== currency) {
    res.cookies.set(COOKIE_NAME, currency, { path: '/', maxAge: COOKIE_MAX_AGE, sameSite: 'lax' })
  }

  const region = needsConsent(country) ? '1' : '0'
  if (req.cookies.get(REGION_COOKIE)?.value !== region) {
    res.cookies.set(REGION_COOKIE, region, { path: '/', maxAge: COOKIE_MAX_AGE, sameSite: 'lax' })
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

  // Lead-magnet landing pages live at the root, in English only — they must not
  // be redirected into a locale. They still get the geo cookies, so the consent
  // banner behaves the same for EU/UK visitors arriving from an ad.
  if (isLeadMagnetPath(pathname)) return withGeoCookies(req, NextResponse.next())

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  )
  if (hasLocale) return withGeoCookies(req, NextResponse.next())

  const locale = preferredLocale(req)
  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return withGeoCookies(req, NextResponse.redirect(url))
}

export const config = {
  matcher: ['/((?!_next|ingest|api|brand|icon|apple-icon|.*\\..*).*)'],
}
