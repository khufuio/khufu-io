'use client'

import Link from 'next/link'
import { cn } from '@/lib/cn'
import { track } from '@/lib/analytics'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-ink)]',
  secondary:
    'bg-transparent text-[var(--color-ink)] ring-1 ring-inset ring-[var(--color-line)] hover:bg-[var(--color-paper-2)]',
  ghost: 'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base',
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  ...rest
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      onClick={(e) => {
        track('cta_clicked', { href, label: typeof children === 'string' ? children : undefined })
        onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
