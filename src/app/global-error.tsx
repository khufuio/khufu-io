'use client'

import './globals.css'

/**
 * Last-resort error screen. Without one, an uncaught render error anywhere on
 * the site falls back to Next's unstyled default page.
 *
 * Carries its own <html>/<body>, like `not-found.tsx` next to it: global-error
 * replaces the root layout rather than nesting inside it — and there is no root
 * layout here anyway, since the real ones live at `app/[locale]/layout.tsx` and
 * `app/(lead-magnets)/layout.tsx` (the lead-magnet pages are chrome-free and
 * share nothing with the localised site).
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="fr">
      <body>
        <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 text-center">
          <p className="font-[family-name:var(--font-display)] text-6xl font-bold tracking-[-0.03em]">Oups</p>
          <p className="mt-4 text-[var(--color-ink-2)]">
            Une erreur inattendue s’est produite. Réessaie dans un instant.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex h-11 items-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-medium text-white"
          >
            Réessayer
          </button>
        </main>
      </body>
    </html>
  )
}
