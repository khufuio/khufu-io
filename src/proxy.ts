import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from '@/i18n/config'

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
  if (hasLocale) return

  const locale = preferredLocale(req)
  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|ingest|api|brand|icon|apple-icon|.*\\..*).*)'],
}
