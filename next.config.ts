import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Root "/" redirects to the default locale via middleware.

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
