import { site } from '@/content/site'

type Social = { label: string; href: string; path: string }

const socials: Social[] = [
  {
    label: 'LinkedIn',
    href: site.social.linkedin,
    path: 'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.07c.63-1.2 2.17-2.47 4.47-2.47 4.78 0 5.66 3.15 5.66 7.25V24h-5v-7.1c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.85-2.72 3.76V24h-5V8z',
  },
  {
    label: 'X',
    href: site.social.x,
    path: 'M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65z',
  },
  {
    label: 'Instagram',
    href: site.social.instagram,
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-10.4a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z',
  },
  {
    label: 'TikTok',
    href: site.social.tiktok,
    path: 'M16.6 5.82a4.28 4.28 0 01-1.01-2.82h-3.3v13.4a2.6 2.6 0 11-2.6-2.6c.26 0 .5.04.74.11V10.5a5.94 5.94 0 00-.74-.05 5.9 5.9 0 105.9 5.9V9.01a7.53 7.53 0 004.36 1.4V7.1a4.28 4.28 0 01-3.35-1.28z',
  },
]

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset ring-[var(--color-line)] text-[var(--color-ink-2)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
        >
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}
