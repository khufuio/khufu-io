import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { site } from '@/content/site'

export const runtime = 'nodejs'

/**
 * The Sprint V1 net: one e-mail address, from a visitor who will not block a
 * 30-minute slot right now.
 *
 * ⚠️ WHY IT IS ITS OWN ROUTE RATHER THAN `/api/contact`. The shared contact
 * endpoint requires a name AND a message, because it serves the contact page's
 * full form. This one takes an address and nothing else — that is the entire
 * point of it (see sprintCallback.tsx for the argument). Relaxing the shared
 * endpoint's validation for one caller would have weakened the form that every
 * other page on the site posts to, to save a file.
 *
 * ⚠️ AND THE SUBJECT LINE IS DELIBERATELY UNMISTAKABLE. This lands in the same
 * inbox as every other lead, and it is the one that needs answering the same
 * day: the visitor was told "under 24 hours" and given nothing in exchange yet.
 *
 * ⛔ NO DATABASE, NO LIST, NO CRM. A callback request is an e-mail to answer, not
 * a record to accumulate — and the privacy line under the field says exactly
 * that, so storing it anywhere else would make that line false.
 */

type CallbackPayload = {
  email?: string
  locale?: string
  week?: string
  placement?: string
  surface?: string
  utm?: Record<string, unknown>
  /** Honeypot — see below. Never rendered to a human. */
  company?: string
}

/** Same shape as the contact route's: untrusted text, clamped, plain-text mail only. */
function campaignLines(utm: Record<string, unknown> | undefined): string[] {
  if (!utm || typeof utm !== 'object') return []
  return Object.entries(utm)
    .filter(([, v]) => typeof v === 'string' && v.trim() !== '')
    .slice(0, 10)
    .map(
      ([k, v]) =>
        `${k.replace(/[^a-z0-9_]/gi, '').slice(0, 40)}: ${String(v).replace(/[\r\n]+/g, ' ').slice(0, 120)}`,
    )
}

const isEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const clean = (v: string | undefined, max: number): string =>
  (v ?? '').trim().replace(/[\r\n]+/g, ' ').slice(0, max)

export async function POST(req: NextRequest): Promise<NextResponse> {
  const apiKey = process.env.RESEND_API_KEY
  // No key configured → the client shows its mailto rescue rather than a dead end.
  if (!apiKey) {
    return NextResponse.json({ ok: false, reason: 'not_configured' }, { status: 501 })
  }

  let body: CallbackPayload
  try {
    body = (await req.json()) as CallbackPayload
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad_request' }, { status: 400 })
  }

  /*
   * ⚠️ THE HONEYPOT ANSWERS `ok: true`, AND THAT IS THE POINT. A field hidden
   * from humans that a bot filled in means a bot; telling it so teaches it to
   * try again with the field empty. One field on a page under ad budget WILL be
   * submitted by crawlers — this keeps them out of the inbox that has to answer
   * within 24h.
   */
  if (clean(body.company, 200) !== '') {
    return NextResponse.json({ ok: true })
  }

  const email = clean(body.email, 200)
  if (!email || !isEmail(email)) {
    return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 422 })
  }

  const locale = clean(body.locale, 8)
  const week = clean(body.week, 60)
  const placement = clean(body.placement, 40)
  const surface = clean(body.surface, 20)

  const resend = new Resend(apiKey)
  const to = process.env.CONTACT_TO_EMAIL ?? site.email
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Khufu <onboarding@resend.dev>'

  const text = [
    'Créneaux demandés depuis /sprint-v1 — répondre sous 24 h.',
    '',
    `Email: ${email}`,
    locale && `Langue: ${locale}`,
    week && `Semaine affichée: ${week}`,
    placement && `CTA d'origine: ${placement}`,
    surface && `Surface: ${surface}`,
    ...campaignLines(body.utm),
  ]
    .filter(Boolean)
    .join('\n')

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[khufu.io] Créneaux demandés — ${email}${locale ? ` (${locale})` : ''}`,
      text,
    })
    if (error) {
      console.error('[sprint-callback] Resend error:', error)
      return NextResponse.json({ ok: false, reason: 'send_failed' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[sprint-callback] send threw:', e)
    return NextResponse.json({ ok: false, reason: 'send_failed' }, { status: 502 })
  }
}
