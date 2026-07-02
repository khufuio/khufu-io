import Link from 'next/link'
import './globals.css'

// Top-level 404 for routes outside any /:locale segment. Self-contained
// (own html/body) because the root layout lives at app/[locale]/layout.tsx.
export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 text-center">
          <p className="font-[family-name:var(--font-display)] text-6xl font-bold tracking-[-0.03em]">404</p>
          <p className="mt-4 text-[var(--color-ink-2)]">Cette page n’existe pas.</p>
          <Link
            href="/fr"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-medium text-white"
          >
            Retour à l’accueil
          </Link>
        </main>
      </body>
    </html>
  )
}
