import { site, href } from '@/content/site'
import { toUsd } from '@/lib/currency'
import type { EmailContent } from '@/lib/email'
import type { LeadMagnet } from './types'
import type { LeadMagnetSlug } from './slugs'
import { pdfPath } from './index'

const v1Usd = toUsd(site.v1PriceEUR).toLocaleString('en-US')

/**
 * Post-download sequence: one delivery email plus four follow-ups over two weeks.
 *
 * It sells ONE thing, Sprint V1, and it names it in the first email. The
 * previous version led with day-rate reinforcement and only mentioned the
 * sprint on day 7, as an aside — which quietly acquired for an offer we do not
 * acquire on, and left a reader who arrived through a paid ad for the sprint
 * being sold something else a week later. Khufu has a single offer (decided
 * 2026-09-08); Full Maintenance and Remote are follow-ups to a sprint and have
 * no place in an acquisition sequence.
 *
 * Naming the offer early is NOT the same as asking for the money early. The job
 * of these emails is still to QUALIFY — what is actually stuck, by when it has
 * to exist, who signs — and to open a conversation, because on this ticket size
 * the conversation is what converts, not a pricing page. The reader simply
 * knows from email one what conversation they are being invited into.
 *
 * ⚠️ No client references and no activity figures anywhere in here (decided
 * 2026-09-13): no named client, no download counts, no revenue, no project
 * tally. What is left to argue with is the offer itself — a date in the
 * contract, a fixed price, a scope frozen on day 0 — and Khufu's own live
 * products, named without ever claiming a duration for them.
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

/** One line naming the offer. Same sentence everywhere, so the number sticks. */
const offerLine = `Sprint V1: a designed, built and deployed first version in ${site.v1Days} days, $${v1Usd} fixed, scope frozen before anything starts.`

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
      `I ask because Khufu sells exactly one thing, and it is built around that date. ${offerLine} That is the whole catalogue — no options, no tiers, no discovery phase to buy first.`,
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
      preheader: 'Three reasons a roadmap stops moving. Only one of them is a Khufu problem.',
      paragraphs: [
        `${magnetHook[magnet.slug]} So here is the part of it that matters most, in case the PDF is still sitting unopened.`,
        'When a product team is not shipping, it is very rarely because nobody knows what to build. The backlog is usually right. What is missing is capacity pointed at the right thing, and it fails in one of three ways.',
        'One: the team is fully booked on the existing product, so anything new waits for a gap that never comes. Two: the thing you need does not exist yet at all — a new product, a second one, a side of the business someone has been describing in slides for two quarters — and nobody has hours to start it. Three: there is a piece of the product someone left half-finished, and everyone is quietly avoiding it.',
        `Number two is the one Khufu is built for, and it is the only thing Khufu sells. ${offerLine} A date in the contract, not an estimate — which is the point when what you are missing is a product, not an opinion about one.`,
        'Which of the three is yours? Send me the number on WhatsApp — one digit is a complete answer, and it tells me more than any form would.',
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
      subject: 'How seven days is possible, and where the catch actually is',
      preheader: 'The scope is frozen on day 0. That is the trade, and it is the whole trick.',
      paragraphs: [
        'The reasonable reaction to "a product in seven days" is that something must be missing. Something is, and it is worth being blunt about which part.',
        'What makes the week work is not typing faster. It is that the scope is written down and frozen on day 0, before a line is written — so there is no mid-project renegotiation, no waiting on a decision, no second opinion to schedule. Add a stack that is the same every time (Next.js, NestJS, PostgreSQL, React Native) and AI doing the parts of the work that are mechanical, and a week is enough for a real first version. It is the same method behind Khufu’s own products — Clokizi, HerbaCRM — which run in production today.',
        `The catch: the scope has to be small enough to be finished. Everything you think of on day 3 goes in the next version. If your project cannot survive that constraint, a sprint is the wrong shape and I will tell you so before you pay, not during.`,
        'What the fixed price covers, so there is nothing to discover on the invoice: scoping and design, the build, infrastructure and the production deploy, a showcase site for the product optimised for SEO and generative search, two weeks of fixes after delivery, and the source code, which is yours. All included, at the price on the page.',
        `${offerLine}`,
      ],
      cta: {
        label: 'See the full offer',
        url: `${site.url}${href('en', 'sprint')}`,
      },
      note: `Or just tell me what you would want built, on WhatsApp: ${waLink(magnet, 'proof', `Hi Adrien — what we'd want built: `, ctx)}`,
    },
    {
      delayDays: 7,
      step: 'nurture-call',
      ref: dispatchRef(magnet),
      subject: 'Three lines on WhatsApp, and I will tell you if it is not worth it',
      preheader: 'What is stuck, by when, and who decides. That is the whole qualification.',
      paragraphs: [
        'This is the one email in the sequence that asks for something, so I will be precise about what.',
        'Three lines. What you need built. The date it has to exist by. Who besides you has to agree before anything starts. Send those on WhatsApp and I will tell you within the day whether it fits in a sprint and which week I can take — and if the answer is that you do not need me, you get that answer there rather than after an invoice.',
        'If it looks like a fit we jump on a twenty-minute call from the same conversation. No deck, no discovery phase, no proposal to read first. If the third line is a long list of people, say so — it changes what I would suggest, it does not disqualify you.',
        `There is one thing at the end of it, and you already know the number. ${offerLine} If your answer to the second line is "no date, sometime next year", say that too — it usually means a sprint is not what you need yet, and that is a fine outcome for both of us.`,
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
