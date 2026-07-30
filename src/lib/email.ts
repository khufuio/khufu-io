import { site } from '@/content/site'

export type EmailContent = {
  subject: string
  /** Hidden preview line shown by most clients next to the subject. */
  preheader: string
  /** Body paragraphs, plain sentences — rendered as <p> in HTML and as text. */
  paragraphs: string[]
  cta?: { label: string; url: string }
  /** Trailing note under the CTA (e.g. the download link as plain text). */
  note?: string
}

export type RenderedEmail = { html: string; text: string }

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/**
 * Renders a plain, text-forward email.
 *
 * These are sent one-to-one by a solo founder, so they look like it: no
 * multi-column template, no images, no tracking pixel beyond what Resend adds.
 * That reads as a real message and lands in the inbox rather than the
 * promotions tab.
 */
export function renderEmail(content: EmailContent): RenderedEmail {
  const unsubscribe = `mailto:${site.email}?subject=Unsubscribe`

  const body = content.paragraphs
    .map((p) => `    <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#3a3a40;">${escapeHtml(p)}</p>`)
    .join('\n')

  const cta = content.cta
    ? `    <p style="margin:28px 0;">
      <a href="${content.cta.url}" style="display:inline-block;background:#4c30ff;color:#ffffff;text-decoration:none;padding:13px 26px;border-radius:999px;font-size:15px;font-weight:600;">${escapeHtml(content.cta.label)}</a>
    </p>`
    : ''

  const note = content.note
    ? `    <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#6b6b73;">${escapeHtml(content.note)}</p>`
    : ''

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(content.subject)}</title></head>
<body style="margin:0;padding:0;background:#fbfbf9;">
  <span style="display:none;font-size:1px;color:#fbfbf9;max-height:0;overflow:hidden;">${escapeHtml(content.preheader)}</span>
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <p style="margin:0 0 28px;font-size:13px;font-weight:700;letter-spacing:3px;color:#0e0e10;">KHUFU</p>
${body}
${cta}
${note}
    <hr style="border:none;border-top:1px solid #e6e6e0;margin:32px 0 16px;">
    <p style="margin:0;font-size:13px;line-height:1.6;color:#6b6b73;">
      ${escapeHtml(site.founder)} · ${escapeHtml(site.legal.entity)}, Dubai, UAE<br>
      <a href="${site.url}" style="color:#6b6b73;">khufu.io</a> ·
      <a href="${unsubscribe}" style="color:#6b6b73;">unsubscribe</a>
    </p>
  </div>
</body>
</html>`

  const text = [
    ...content.paragraphs,
    content.cta ? `${content.cta.label}: ${content.cta.url}` : '',
    content.note ?? '',
    '—',
    `${site.founder} · ${site.legal.entity}, Dubai, UAE`,
    site.url,
    `Unsubscribe: reply to this email with "unsubscribe" (${site.email}).`,
  ]
    .filter(Boolean)
    .join('\n\n')

  return { html, text }
}

/**
 * RFC 2369 unsubscribe header. Deliberately mailto-only: the One-Click variant
 * (`List-Unsubscribe-Post`) requires an HTTPS endpoint that mutates a stored
 * list, and there is no lead store to mutate yet. A mailto is a valid opt-out
 * mechanism; revisit if volume makes manual handling impractical.
 */
export const listUnsubscribeHeaders: Record<string, string> = {
  'List-Unsubscribe': `<mailto:${site.email}?subject=Unsubscribe>`,
}
