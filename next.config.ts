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
   * Aliases for URLs we hand to third parties that do not match a real route.
   *
   * These run BEFORE the proxy (next.config redirects are checked ahead of
   * middleware), which is what makes them work: the proxy would otherwise
   * locale-prefix /privacy into /{locale}/privacy and serve a 404.
   *
   * ⚠️ /privacy is not cosmetic. LinkedIn and Meta both require a privacy-policy
   * URL on a native lead form and neither validates that it resolves — a dead
   * URL is accepted at setup and only discovered by a prospect who clicks it.
   * The real route is /{locale}/confidentialite.
   *
   * The bare /privacy deliberately targets /confidentialite WITHOUT a locale so
   * the proxy still negotiates the visitor's language (one extra hop, and an
   * English-speaking lead does not land on the French policy).
   */
  async redirects() {
    return [
      { source: '/privacy', destination: '/confidentialite', permanent: true },
      {
        source: `/:locale(${LOCALE_PATTERN})/privacy`,
        destination: '/:locale/confidentialite',
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
