'use client'

import { buttonClasses } from '@/components/ui/button'
import { track } from '@/lib/analytics'
import { campaignProps } from '@/lib/utm'

/** Anchor of the single conversion form — every CTA on the page points here. */
export const SPRINT_FORM_ANCHOR = 'start'

/**
 * The one action of the Sprint V1 landing, repeated down the page.
 *
 * It is a plain in-page anchor rather than a <ButtonLink>: there is nothing to
 * route to, and a paid visitor who leaves the page is a lost lead. `placement`
 * is what makes the repetition measurable — which CTA of the five actually
 * carries the campaign — and the campaign tags ride along so a click can be
 * attributed to its creative without joining on the URL afterwards.
 */
export function SprintCta({
  placement,
  label,
  variant = 'primary',
  size = 'lg',
  className,
}: {
  placement: string
  label: string
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  className?: string
}) {
  return (
    <a
      href={`#${SPRINT_FORM_ANCHOR}`}
      data-cta={placement}
      onClick={() => track('sprint_cta_clicked', { placement, ...campaignProps() })}
      className={buttonClasses(variant, size, className)}
    >
      {label}
    </a>
  )
}
