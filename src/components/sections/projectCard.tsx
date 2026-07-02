import Link from 'next/link'
import Image from 'next/image'
import type { Locale } from '@/i18n/config'
import { href } from '@/content/site'
import type { Project } from '@/content/projects'
import { getClient } from '@/content/clients'
import type { Dictionary } from '@/i18n/getDictionary'

export function ProjectCard({
  project,
  locale,
  dict,
}: {
  project: Project
  locale: Locale
  dict: Dictionary
}) {
  const badge = project.internal ? dict.work.internalLabel : dict.work.clientLabel
  const logo = project.logo ?? getClient(project.slug)?.logo

  return (
    <Link
      href={href(locale, 'work', project.slug)}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-white transition-colors hover:border-[var(--color-ink)]"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-paper-2)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : logo ? (
          <div className="flex h-full w-full items-center justify-center bg-white p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo}
              alt={project.name}
              className="max-h-14 w-auto max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,var(--color-paper-2),var(--color-accent-soft))]">
            <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-accent-ink)]">
              {project.name}
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-[var(--color-ink)] backdrop-blur">
          {badge}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
          {project.type[locale]}
        </span>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.01em]">
          {project.name}
        </h3>
        <p className="mt-2 text-[var(--color-ink-2)]">{project.tagline[locale]}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full bg-[var(--color-paper-2)] px-2.5 py-1 text-xs text-[var(--color-ink-2)]"
            >
              {s}
            </span>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent-ink)]">
          {dict.work.caseIntro}
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
