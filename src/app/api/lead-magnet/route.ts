import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { site } from '@/content/site'
import { getLeadMagnet, pdfPath } from '@/content/leadMagnets'
import { deliveryEmail, nurtureSequence } from '@/content/leadMagnets/nurture'
import { renderEmail, listUnsubscribeHeaders } from '@/lib/email'

export const runtime = 'nodejs'

type Payload = {
  email?: string
  slug?: string
  placement?: string
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
  // Resend replaced Audiences with one Audience + Segments/Properties, and the
  // SDK deprecated `audienceId` in favour of `segments`. Optional: without it the
  // contact is still created and still carries its properties.
  const segmentId = process.env.RESEND_SEGMENT_ID

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
  const followUps = nurtureSequence(magnet).map(async (mail) => {
    const content = renderEmail(mail)
    const res = await resend.emails.send({
      from,
      to: email,
      subject: mail.subject,
      html: content.html,
      text: content.text,
      headers: tagHeaders(magnet.slug, mail.step),
      scheduledAt: inDays(mail.delayDays),
    })
    if (res.error) console.error(`[lead-magnet] scheduling day ${mail.delayDays} failed:`, res.error)
  })

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
      `PDF: ${site.url}${pdfPath(magnet.slug)}`,
      ``,
      `The 3-email follow-up sequence is scheduled (day 2, 4 and 7).`,
    ].join('\n'),
  })

  // The Resend contact is the whole lead store — no database. The properties are
  // what make it useful later: they let a segment be built per guide, per page,
  // without shipping a new segment id every time a magnet is added.
  const subscribe = resend.contacts.create({
    email,
    unsubscribed: false,
    properties: {
      source: 'lead-magnet',
      lead_magnet: magnet.slug,
      signup_page: `${site.url}/${magnet.slug}`,
    },
    ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
  })

  const results = await Promise.allSettled([...followUps, notify, subscribe])
  for (const r of results) {
    if (r.status === 'rejected') console.error('[lead-magnet] post-delivery step failed:', r.reason)
  }
  if (!segmentId) {
    console.warn('[lead-magnet] RESEND_SEGMENT_ID unset — contact created without a segment')
  }

  return NextResponse.json({ ok: true })
}
