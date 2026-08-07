import { site, href } from '@/content/site'
import { toUsd } from '@/lib/currency'
import type { EmailContent } from '@/lib/email'
import type { LeadMagnet } from './types'
import type { LeadMagnetSlug } from './slugs'
import { pdfPath } from './index'

const dayUsd = toUsd(site.dailyRateEUR).toLocaleString('en-US')
const v1Usd = toUsd(site.v1PriceEUR).toLocaleString('en-US')

/**
 * Post-download sequence: one delivery email plus four follow-ups over two weeks.
 *
 * It does NOT sell Sprint V1. Someone who just downloaded a free guide is not
 * ready to sign a $17,000 engagement, and asking for it on day 7 is what turns
 * a warm reader into an unsubscribe. The job of these emails is to QUALIFY —
 * what is actually stuck, by when it has to exist, who signs — and to open a
 * conversation, because on this ticket size the conversation is what converts,
 * not a pricing page.
 *
 * Written for the clients who have actually paid: product companies with a
 * backlog and not enough hands to ship it — a game studio, a SaaS that needed
 * its mobile app rebuilt. Not visionary CTOs shopping for a technical opinion.
 *
 * The offer that leads is therefore reinforcement by the day, not the sprint:
 * it is the cheap, reversible way for a team that is already underwater to find
 * out whether this works. The fixed-price V1 is named once, late, as the other
 * shape — for the reader who is genuinely starting from zero.
 *
 * Each email has to be worth opening on its own. A sequence that only asks
 * trains the reader to stop opening.
 */
export type NurtureEmail = EmailContent & {
  /** Days after the download. 0 = sent immediately. */
  delayDays: number
  /** Stable step id — goes into the X-Khufu-Step header and the footer ref. */
  step: string
}

/**
 * What the capture knew about where this lead came from.
 *
 * Carried into the WhatsApp deep links so a conversation can be traced back to
 * the campaign that paid for it — see `waLink`. Absent for an organic download,
 * which is a real state and not a missing value.
 */
export type LeadContext = {
  /** utm_campaign, or utm_source when there is no campaign. */
  campaign?: string
}

/** Footer dispatch token: survives quoting, so a Gmail filter can route replies. */
export const dispatchRef = (magnet: LeadMagnet): string =>
  `Ref: KHUFU-LM-${magnet.slug.toUpperCase()}`

/**
 * The attribution token that travels INSIDE the WhatsApp message.
 *
 * A wa.me link carries no analytics of its own: the click leaves our domain and
 * the conversation arrives in an app we cannot instrument. So the campaign is
 * written into the text the reader is about to send — it comes back to us in the
 * first line of the chat, which is the only place both halves exist at once.
 *
 * Deliberately not a click-tracking redirect: a click is not a conversation, and
 * mail scanners fetch links in bulk, so a redirect endpoint would inflate exactly
 * the number the ads test is judged on. The token only appears once someone
 * actually presses send.
 */
export function whatsappRef(magnet: LeadMagnet, step: string, ctx?: LeadContext): string {
  const slug = (s: string): string =>
    s
      .toUpperCase()
      .replace(/[^A-Z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 24)
  const parts = ['KHUFU', slug(magnet.slug), slug(step), ctx?.campaign ? slug(ctx.campaign) : 'ORGANIC']
  return parts.join('-')
}

/**
 * WhatsApp click-to-chat link with the message already written.
 *
 * WhatsApp is Khufu's contact channel — there is no booking calendar, and adding
 * one would put a scheduling step between a warm reader and a founder who
 * answers his own messages. The prefilled text does the qualifying work a form
 * would otherwise do, and the reader can edit it before sending.
 */
function waLink(magnet: LeadMagnet, step: string, opener: string, ctx?: LeadContext): string {
  const text = `${opener}\n\n${whatsappRef(magnet, step, ctx)}`
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}

/**
 * One line per guide, used to open the day-2 email.
 *
 * The three guides attract three different intents (how fast can this be done /
 * should we build it at all / who do we hire), so the first sentence of the
 * first follow-up mirrors the one the reader actually chose. The rest of the
 * sequence is shared: the situation underneath is the same one.
 */
const magnetHook: Record<LeadMagnetSlug, string> = {
  playbook:
    'You picked up the seven-day playbook, so something on your side has a date attached to it.',
  'build-vs-buy':
    'You picked up the build-vs-buy guide, so you are weighing whether to spend your own team on this at all.',
  'hire-checklist':
    'You picked up the hiring checklist, so you are close to putting someone external on a build.',
}

/** Email 1 — the delivery. Sent the moment the form is submitted. */
export function deliveryEmail(magnet: LeadMagnet, ctx?: LeadContext): NurtureEmail {
  const url = `${site.url}${pdfPath(magnet.slug)}`
  const wa = waLink(
    magnet,
    'delivery',
    `Hi Adrien — just grabbed ${magnet.label}. What we're trying to ship: `,
    ctx,
  )
  return {
    delayDays: 0,
    step: 'delivery',
    ref: dispatchRef(magnet),
    subject: `Your copy: ${magnet.title}`,
    preheader: `${magnet.pdfPages} pages. Plus one question, if you have thirty seconds.`,
    paragraphs: [
      'Here it is, as promised.',
      `${magnet.title} — ${magnet.pdfPages} pages. ${magnet.subtitle}`,
      'One thing before you close this tab, and it is the reason I send these myself rather than automating them away: what are you actually trying to ship, and what is the date it needs to exist by?',
      `Two lines is plenty. WhatsApp is fastest — that is my own number, I answer it myself — but replying to this email reaches me just as well. Either way I answer the specific ones properly: a guide is general by definition, your situation is not.`,
    ],
    cta: { label: 'Download the PDF', url },
    note: `Direct link, if the button does not work: ${url} — and my WhatsApp, if you'd rather: ${wa}`,
  }
}

/** Emails 2–5 — the follow-up sequence, shared by the three guides. */
export function nurtureSequence(magnet: LeadMagnet, ctx?: LeadContext): NurtureEmail[] {
  return [
    {
      delayDays: 2,
      step: 'nurture-diagnosis',
      ref: dispatchRef(magnet),
      subject: 'The thing that is blocking your release is almost never the plan',
      preheader: 'Three reasons a roadmap stops moving. Only one of them is fixable this month.',
      paragraphs: [
        `${magnetHook[magnet.slug]} So here is the part of it that matters most, in case the PDF is still sitting unopened.`,
        'When a product team is not shipping, it is very rarely because nobody knows what to build. The backlog is usually right. What is missing is capacity pointed at the right thing, and it fails in one of three ways.',
        'One: the team is fully booked on the existing product, so anything new waits for a gap that never comes. Two: the work needs a skill nobody on the team has this quarter — a mobile rebuild, a payments integration, an app store release — so it gets postponed rather than done badly. Three: there is a piece of the product someone left half-finished, and everyone is quietly avoiding it.',
        'Those three have very different answers, and only the first two can be fixed inside a month. Which one is yours? Send me the number on WhatsApp — one digit is a complete answer, and it tells me more than any form would.',
      ],
      cta: {
        label: 'Send me the number',
        url: waLink(magnet, 'diagnosis', `Hi Adrien — mine is number `, ctx),
      },
      note: `That is my own number, not a support desk. Prefer email? Just hit reply.`,
    },
    {
      delayDays: 4,
      step: 'nurture-proof',
      ref: dispatchRef(magnet),
      subject: 'The cheapest way to find out whether I am any good',
      preheader: `A few days, $${dayUsd} a day, and no contract to unwind if it does not fit.`,
      paragraphs: [
        'Two situations from the last couple of years, because they are the ones that keep repeating and one of them is probably close to yours.',
        'A mobile game studio needed a game built and out on both stores while the team stayed on the live one. It shipped, and it is past 250,000 downloads. A recruitment SaaS had a mobile app a previous developer had walked away from — technical debt, bugs, users complaining daily. I took the code over as it was, rebuilt it, and kept shipping features on it afterwards.',
        'Neither of those started with a big engagement. They started with a few days of an extra pair of hands on a specific, annoying, well-defined problem.',
        `That is what remote reinforcement is: $${dayUsd} a day, I work inside your repo and your tools, you keep the decisions, and you stop whenever it stops being useful. If a few days do not convince you, nothing longer would have.`,
        'Tell me what is stuck on your side and I will tell you straight whether a few days move it. One message is enough to find out.',
      ],
      cta: {
        label: 'Tell me what is stuck',
        url: waLink(magnet, 'proof', `Hi Adrien — here's what's stuck on our side: `, ctx),
      },
      note: `Or read the detail first: ${site.url}${href('en', 'remote')}`,
    },
    {
      delayDays: 7,
      step: 'nurture-call',
      ref: dispatchRef(magnet),
      subject: 'Three lines on WhatsApp, and I will tell you if it is not worth it',
      preheader: 'What is stuck, by when, and who decides. That is the whole qualification.',
      paragraphs: [
        'This is the one email in the sequence that asks for something, so I will be precise about what.',
        'Three lines. What specifically is not shipping. The date it needs to exist by. Who besides you has to agree before anything starts. Send those on WhatsApp and I will tell you within the day whether I can move it, roughly how long it takes and what it costs — and if the answer is that you do not need me, you get that answer there rather than after an invoice.',
        'If it looks like a fit we jump on a twenty-minute call from the same conversation. No deck, no discovery phase, no proposal to read first. If the third line is a long list of people, say so — it changes what I would suggest, it does not disqualify you.',
        `Two shapes come out of that. Days of reinforcement at $${dayUsd} a day if you already have a product and a team, which is most people who read this far. Or a fixed-price V1 at $${v1Usd} in ${site.v1Days} days if you are genuinely starting from nothing. I will tell you which one you are in; guessing it yourself is not your job.`,
      ],
      cta: {
        label: 'Send the three lines',
        url: waLink(
          magnet,
          'call',
          `Hi Adrien — the three lines:\nWhat's stuck: \nNeeds to exist by: \nWho decides: `,
          ctx,
        ),
      },
      note: `${site.whatsappDisplay} — my own number. Replying to this email works too, it just takes me longer.`,
    },
    {
      delayDays: 14,
      step: 'nurture-close',
      ref: dispatchRef(magnet),
      subject: 'Should I close your file?',
      preheader: 'Three words is a complete reply.',
      paragraphs: [
        `You downloaded ${magnet.label} two weeks ago and I have not heard back, which is a perfectly normal outcome and I would rather ask than keep guessing.`,
        'Send me one of three things. "Not now" and I stop emailing you, no hard feelings, keep the guide. "Later" plus a month, and I will come back then and not before. Or tell me what is stuck and we will sort it out from there.',
        'That is the last of these. Whatever you pick, the guide is yours and it stands on its own.',
      ],
      cta: {
        label: 'Three words on WhatsApp',
        url: waLink(magnet, 'close', `Hi Adrien — about my file: `, ctx),
      },
      note: `${site.whatsappDisplay}, or just reply here.`,
    },
  ]
}
