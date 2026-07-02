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
      subject: `[khufu.io] ${name}${budget ? ` — ${budget}` : ''}`,
      text,
    })
    if (error) {
      return NextResponse.json({ ok: false, reason: 'send_failed' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, reason: 'send_failed' }, { status: 502 })
  }
}
