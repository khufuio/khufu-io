import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import '../globals.css'
import { isLocale, locales, localeHrefLang, dir, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/getDictionary'
import { site } from '@/content/site'
import { PostHogProvider } from '@/components/analytics/posthogProvider'
import { SiteHeader } from '@/components/layout/siteHeader'
import { SiteFooter } from '@/components/layout/siteFooter'
import { WhatsAppButton } from '@/components/layout/whatsappButton'
import { CookieBanner } from '@/components/layout/cookieBanner'
import { OrganizationJsonLd } from '@/components/seo/jsonLd'
import { stripPriceTokens } from '@/lib/currency'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : 'fr'
  const dict = getDictionary(loc)
  const heroDesc = stripPriceTokens(dict.home.heroSubtitle, loc)

  const languages = Object.fromEntries(
    locales.map((l) => [localeHrefLang[l], `${site.url}/${l}`]),
  )

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.brandSuffix,
      template: `%s · ${site.name}`,
    },
    description: heroDesc,
    alternates: {
      canonical: `${site.url}/${loc}`,
      languages: { ...languages, 'x-default': `${site.url}/fr` },
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      url: `${site.url}/${loc}`,
      title: dict.meta.brandSuffix,
      description: heroDesc,
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.brandSuffix,
      description: heroDesc,
    },
    robots: { index: true, follow: true },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = getDictionary(locale)

  return (
    <html lang={localeHrefLang[locale]} dir={dir(locale)} className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Suspense fallback={null}>
          <PostHogProvider>
            <OrganizationJsonLd locale={locale} />
            <SiteHeader locale={locale} dict={dict} />
            <main id="main">{children}</main>
            <SiteFooter locale={locale} dict={dict} />
            <WhatsAppButton locale={locale} />
            <CookieBanner locale={locale} />
          </PostHogProvider>
        </Suspense>
      </body>
    </html>
  )
}
