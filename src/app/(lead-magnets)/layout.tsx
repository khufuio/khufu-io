import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Suspense } from 'react'
import '../globals.css'
import { site } from '@/content/site'
import { PostHogProvider } from '@/components/analytics/posthogProvider'
import { CookieBanner } from '@/components/layout/cookieBanner'

/**
 * Root layout for the lead-magnet landing pages.
 *
 * These sit outside /[locale] on purpose: they are English-only pages for cold
 * ad traffic, with no site navigation and a single call to action. That makes
 * this a second root layout (the other is app/[locale]/layout.tsx), which is why
 * it renders its own <html>.
 */
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  robots: { index: true, follow: true },
}

export default function LeadMagnetLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Suspense fallback={null}>
          <PostHogProvider>
            {children}
            <CookieBanner locale="en" />
          </PostHogProvider>
        </Suspense>
      </body>
    </html>
  )
}
