import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { HqLegalPage, hqLegalMetadata } from '@/components/sections/hqLegalPage'

// Khufu HQ Meta app — public URL required by Meta App Review (todo cmwl4koz).

export function generateMetadata(): Metadata {
  return hqLegalMetadata('hqTerms')
}

export default async function HqTermsPage({ params }: { params: Promise<{ locale: string }> }): Promise<ReactNode> {
  const { locale } = await params
  return <HqLegalPage docKey="hqTerms" locale={locale} />
}
