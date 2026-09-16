import type { NextConfig } from 'next'
import { locales } from './src/i18n/config'

/**
 * Locale alternation for redirect `source` patterns, derived from the locale
 * list rather than written out — a locale added to i18n/config must not
 * silently lose its aliases here.
 */
const LOCALE_PATTERN = locales.join('|')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Root "/" redirects to the default locale via middleware.

  /**
   * The privacy route moved from /{locale}/confidentialite to /{locale}/privacy
   * (2026-09-16): one English slug for all ten locales — the page content stays
   * translated, the URL does not. The old URLs are indexed and shipped, so they
   * 308 onto the new one, forever.
   *
   * These run BEFORE the proxy (next.config redirects are checked ahead of
   * middleware), which is what makes them work: the proxy would otherwise
   * locale-prefix the path and serve a 404.
   *
   * The bare /privacy needs no rule at all any more — it IS the route without a
   * locale, so the proxy negotiates the visitor's language onto it. That matters:
   * LinkedIn and Meta both require a privacy-policy URL on a native lead form and
   * neither validates that it resolves, so a dead URL is accepted at setup and
   * only discovered by a prospect who clicks it. The bare /confidentialite is
   * covered the same way — the proxy prefixes it, then the rule below moves it.
   */
  async redirects() {
    return [
      {
        source: `/:locale(${LOCALE_PATTERN})/confidentialite`,
        destination: '/:locale/privacy',
        permanent: true,
      },
    ]
  },

  // Ensure the brand font is bundled with the icon-generation routes on Vercel.
  outputFileTracingIncludes: {
    '/icon': ['./src/assets/fonts/**'],
    '/apple-icon': ['./src/assets/fonts/**'],
    '/brand/k': ['./src/assets/fonts/**'],
  },

  // Reverse-proxy PostHog through our own domain to dodge ad-blockers.
  async rewrites() {
    return [
      { source: '/ingest/static/:path*', destination: 'https://us-assets.i.posthog.com/static/:path*' },
      { source: '/ingest/:path*', destination: 'https://us.i.posthog.com/:path*' },
      { source: '/ingest/decide', destination: 'https://us.i.posthog.com/decide' },
    ]
  },
  // Required for PostHog trailing-slash API requests to work through the proxy.
  skipTrailingSlashRedirect: true,
}

export default nextConfig
