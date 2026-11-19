import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sprintLanding } from '@/content/sprintLanding'
import { SprintBuildSequence } from '@/components/sprint/sprintBuildSequence'
import { SprintAppMockup, SprintSiteMockup, type MockupLocale } from '@/components/sprint/sprintMockups'

/**
 * The capture stage for the print mockups (sprintMockups.tsx) — DEV ONLY.
 *
 * ⛔ It 404s in production: it is a photo studio for `npm run capture:mockups`,
 * not a page, and it is in no sitemap. FR/EN only, the print kit's languages.
 */
export const metadata: Metadata = { robots: { index: false, follow: false } }

function isMockupLocale(value: string): value is MockupLocale {
  return value === 'fr' || value === 'en'
}

export default async function SprintMockupsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactElement> {
  const { locale } = await params
  if (process.env.NODE_ENV === 'production' || !isMockupLocale(locale)) notFound()
  const url = sprintLanding.hero.shotUrl[locale]
  const label = sprintLanding.hero.shotAlt[locale]

  return (
    <div className="flex items-start gap-16 p-16" data-mockup-stage>
      {/* 528px: the hero frame's width on the 1440px landing, so its `cqw` type
          comes out exactly as the landing draws it. */}
      <div className="w-[528px] flex-none pb-8" data-mockup="hero">
        <SprintBuildSequence label={label} url={url} tone="print" />
      </div>
      <SprintSiteMockup locale={locale} url={url} />
      <SprintAppMockup locale={locale} />
    </div>
  )
}
