import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { site } from '@/content/site'
import { getLeadMagnet, pdfPath } from '@/content/leadMagnets'
import { deliveryEmail, nurtureSequence } from '@/content/leadMagnets/nurture'
import { renderEmail, listUnsubscribeHeaders } from '@/lib/email'
import { captureLead } from '@/lib/posthogServer'
import { isKnownInternalSource } from '@/lib/internalSource'

export const runtime = 'nodejs'

type Payload = {
  email?: string
  slug?: string
  placement?: string
  utm?: Record<string, unknown>
  /** Internal surface that linked to the guide — blog, footer… See lib/internalSource.ts. */
  source?: unknown
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

/**
 * Keep only the five known tags, as short strings.
 *
 * The body is public input and these values become analytics properties and
 * email content, so an unbounded object from the client must not flow straight
 * through.
 */
function cleanUtm(raw: Record<string, unknown> | undefined): Record<string, string> {
  const out: Record<string, string> = {}
  if (!raw) return out
  for (const key of UTM_KEYS) {
    const value = raw[key]
    if (typeof value === 'string' && value.trim()) out[key] = value.trim().slice(0, 120)
  }
  return out
}

const isEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

/** ISO timestamp N days from now — Resend accepts ISO 8601 up to 30 days out. */
function inDays(days: number): string {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()
}

/**
 * Invisible dispatch tags on our outbound mail: which flow, which guide, which
 * step. They never show in the From or Reply-To, and an agent reading the
 * mailbox over the Gmail API can route on them. They do NOT survive into a
 * lead's reply — that is what the footer ref token is for (see lib/email.ts).
 */
function tagHeaders(slug: string, step: string): Record<string, string> {
  return {
    ...listUnsubscribeHeaders,
    'X-Khufu-Project': 'khufu',
    'X-Khufu-Flow': 'lead-magnet',
    'X-Khufu-Magnet': slug,
    'X-Khufu-Step': step,
  }
}

/**
 * Lead magnet capture: delivers the guide, notifies the founder, and schedules
 * the follow-up sequence.
 *
 * The download itself is never gated on this endpoint succeeding — the client
 * shows the PDF link regardless (see leadMagnetForm.tsx). A failure here costs
 * the nurture sequence, not the reader's guide.
 */
export async function POST(req: NextRequest) {
  let body: Payload
  try {
    body = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad_request' }, { status: 400 })
  }

  const email = (body.email ?? '').trim().toLowerCase()
  const magnet = getLeadMagnet((body.slug ?? '').trim())
  const utm = cleanUtm(body.utm)
  // Allow-listed client-side too, but this is public input: an unknown value is
  // dropped rather than echoed into analytics and a notification email.
  const source =
    typeof body.source === 'string' && isKnownInternalSource(body.source) ? body.source : undefined
  if (!isEmail(email) || !magnet) {
    return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 422 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Not an error the visitor should ever see: they already have the download.
    console.warn('[lead-magnet] RESEND_API_KEY unset — lead not captured:', email, magnet.slug)
    return NextResponse.json({ ok: false, reason: 'not_configured' }, { status: 501 })
  }

  const resend = new Resend(apiKey)
  const from = process.env.LEAD_FROM_EMAIL ?? process.env.CONTACT_FROM_EMAIL ?? 'Khufu <onboarding@resend.dev>'
  const notifyTo = process.env.CONTACT_TO_EMAIL ?? site.email

  // 1. Deliver the guide.
  const delivery = deliveryEmail(magnet)
  const rendered = renderEmail(delivery)
  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: delivery.subject,
    html: rendered.html,
    text: rendered.text,
    headers: tagHeaders(magnet.slug, delivery.step),
  })

  if (error) {
    console.error('[lead-magnet] delivery failed:', error)
    return NextResponse.json(
      { ok: false, reason: 'send_failed', detail: error.message ?? String(error) },
      { status: 502 },
    )
  }

  // 2. Everything below is best-effort: the reader already has their guide, so a
  // failure here is logged and swallowed rather than surfaced as an error.
  //
  // ⚠️ The SDK RESOLVES with `{ error }` on an API rejection instead of throwing,
  // so Promise.allSettled alone reports success on a call that failed. Every
  // result is inspected explicitly — that gap hid a 422 that dropped the lead
  // store entirely (Resend requires custom properties to be declared before use,
  // see hq docs/tools/utm-conventions.md).
  //
  // Awaited before the lead is recorded, on purpose: the ids of the queued mails
  // are part of that record (see below), so they have to exist first.
  const sequence = nurtureSequence(magnet)
  const scheduledIds = (
    await Promise.all(
      sequence.map(async (mail) => {
        const content = renderEmail(mail)
        try {
          const res = await resend.emails.send({
            from,
            to: email,
            subject: mail.subject,
            html: content.html,
            text: content.text,
            headers: tagHeaders(magnet.slug, mail.step),
            scheduledAt: inDays(mail.delayDays),
          })
          if (res.error) {
            console.error(`[lead-magnet] scheduling day ${mail.delayDays} failed:`, res.error)
            return null
          }
          return res.data?.id ?? null
        } catch (e) {
          console.error(`[lead-magnet] scheduling day ${mail.delayDays} threw:`, e)
          return null
        }
      }),
    )
  ).filter((id): id is string => Boolean(id))

  const notify = resend.emails.send({
    from,
    to: notifyTo,
    replyTo: email,
    subject: `[lead] ${magnet.label} — ${email}`,
    headers: tagHeaders(magnet.slug, 'notification'),
    text: [
      `New lead magnet download.`,
      ``,
      `Guide: ${magnet.title}`,
      `Email: ${email}`,
      `Page: ${site.url}/${magnet.slug}`,
      `Form: ${body.placement ?? 'unknown'}`,
      Object.keys(utm).length
        ? `Campaign: ${utm.utm_source ?? '?'} / ${utm.utm_campaign ?? '?'} / ${utm.utm_content ?? '?'}`
        : 'Campaign: none (organic or untagged link)',
      `Came from: ${source ?? 'direct / ad'}`,
      `PDF: ${site.url}${pdfPath(magnet.slug)}`,
      ``,
      `Follow-ups scheduled: ${scheduledIds.length}/${sequence.length} (day ${sequence.map((m) => m.delayDays).join(', ')}).`,
      // Printed here so an "unsubscribe" reply can be honoured from this very
      // thread: these are the ids to pass to Resend's cancel endpoint.
      scheduledIds.length ? `Cancel ids: ${scheduledIds.join(' ')}` : `Cancel ids: none — nothing queued.`,
    ].join('\n'),
  }).then((res) => {
    if (res.error) console.error('[lead-magnet] notification failed:', res.error)
    return res
  })

  // The lead record goes to PostHog, not to Resend.
  //
  // Writing a Resend contact needs a FULL-ACCESS key, and this deployment is a
  // public-facing site: a key that can read every contact and delete a verified
  // domain does not belong here. PostHog's ingestion key is write-only and
  // already public, so recording the lead costs no privilege at all. HQ — which
  // runs locally and does hold a full-access key — reads these events and owns
  // the list from there.
  const record = captureLead({
    email,
    magnet: magnet.slug,
    placement: body.placement,
    utm,
    source,
    scheduledIds,
  })

  const results = await Promise.allSettled([notify, record])
  for (const r of results) {
    if (r.status === 'rejected') console.error('[lead-magnet] post-delivery step failed:', r.reason)
  }

  return NextResponse.json({ ok: true })
}
