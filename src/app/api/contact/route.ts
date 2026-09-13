import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { site } from '@/content/site'

export const runtime = 'nodejs'

type ContactPayload = {
  name?: string
  email?: string
  company?: string
  budget?: string
  message?: string
  /** Which surface produced the lead, e.g. "sprint-landing:hero". */
  source?: string
  /** Campaign tags read off the landing URL (utm_*, li_fat_id, traffic_source). */
  utm?: Record<string, unknown>
}

/**
 * Flatten the campaign tags for the notification email.
 *
 * Values arrive from a public form, so they are treated as untrusted text:
 * key and value are both clamped to a known character set and length. This
 * lands in a plain-text mail, never in HTML — nothing here is interpolated
 * into markup.
 */
function campaignLines(utm: Record<string, unknown> | undefined): string[] {
  if (!utm || typeof utm !== 'object') return []
  return Object.entries(utm)
    .filter(([, v]) => typeof v === 'string' && v.trim() !== '')
    .slice(0, 10)
    .map(([k, v]) => `${k.replace(/[^a-z0-9_]/gi, '').slice(0, 40)}: ${String(v).replace(/[\r\n]+/g, ' ').slice(0, 120)}`)
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  // No key configured → tell the client to fall back to the mailto flow.
  if (!apiKey) {
    return NextResponse.json({ ok: false, reason: 'not_configured' }, { status: 501 })
  }

  let body: ContactPayload
  try {
    body = (await req.json()) as ContactPayload
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad_request' }, { status: 400 })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const company = (body.company ?? '').trim()
  const budget = (body.budget ?? '').trim()
  const message = (body.message ?? '').trim()
  const source = (body.source ?? '').trim().slice(0, 60)
  const campaign = campaignLines(body.utm)

  if (!name || !email || !isEmail(email) || !message) {
    return NextResponse.json({ ok: false, reason: 'invalid' }, { status: 422 })
  }

  const resend = new Resend(apiKey)
  const to = process.env.CONTACT_TO_EMAIL ?? site.email
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Khufu <onboarding@resend.dev>'

  const text = [
    `Nom: ${name}`,
    `Email: ${email}`,
    company && `Entreprise: ${company}`,
    budget && `Budget: ${budget}`,
    source && `Source: ${source}`,
    ...campaign,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[khufu.io] ${name}${budget ? ` — ${budget}` : ''}${source ? ` (${source})` : ''}`,
      text,
    })
    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ ok: false, reason: 'send_failed', detail: error.message ?? String(error) }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[contact] send threw:', e)
    return NextResponse.json({ ok: false, reason: 'send_failed', detail: e instanceof Error ? e.message : String(e) }, { status: 502 })
  }
}
