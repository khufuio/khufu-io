import { site, href } from '@/content/site'
import { toUsd } from '@/lib/currency'
import type { EmailContent } from '@/lib/email'
import type { LeadMagnet } from './types'
import { pdfPath } from './index'

const usd = toUsd(site.v1PriceEUR).toLocaleString('en-US')
const eur = site.v1PriceEUR.toLocaleString('en-US')

/**
 * Post-download sequence: one delivery email plus three follow-ups, spaced over
 * a week, walking from the guide to the Sprint V1 offer.
 *
 * Each follow-up has to be worth opening on its own — a sequence that only asks
 * trains the reader to stop opening. The offer is stated plainly in the last
 * one rather than implied in all four.
 */
export type NurtureEmail = EmailContent & {
  /** Days after the download. 0 = sent immediately. */
  delayDays: number
  /** Stable step id — goes into the X-Khufu-Step header and the footer ref. */
  step: string
}

/** Footer dispatch token: survives quoting, so a Gmail filter can route replies. */
export const dispatchRef = (magnet: LeadMagnet): string =>
  `Ref: KHUFU-LM-${magnet.slug.toUpperCase()}`

/** Email 1 — the delivery. Sent the moment the form is submitted. */
export function deliveryEmail(magnet: LeadMagnet): NurtureEmail {
  const url = `${site.url}${pdfPath(magnet.slug)}`
  return {
    delayDays: 0,
    step: 'delivery',
    ref: dispatchRef(magnet),
    subject: `Your copy: ${magnet.title}`,
    preheader: `${magnet.pdfPages} pages, free, no strings.`,
    paragraphs: [
      'Here it is, as promised.',
      `${magnet.title} — ${magnet.pdfPages} pages. ${magnet.subtitle}`,
      'If anything in it does not match what you are dealing with, reply and tell me. I read every reply myself, and the specific questions are usually more useful than the guide.',
    ],
    cta: { label: 'Download the PDF', url },
    note: `Direct link, if the button does not work: ${url}`,
  }
}

/** Emails 2–4 — the follow-up sequence, identical for all three magnets. */
export function nurtureSequence(magnet: LeadMagnet): NurtureEmail[] {
  return [
    {
      delayDays: 2,
      step: 'nurture-scope',
      ref: dispatchRef(magnet),
      subject: 'The one question that decides your V1 scope',
      preheader: 'Everything before it is required. Everything after it is version two.',
      paragraphs: [
        `You downloaded ${magnet.label} a couple of days ago. Here is the single most useful thing in it, in case you have not opened it yet.`,
        'Find the moment where your user gets the value. Not the signup, not the settings page — the specific screen or action where they go "oh, good". Every step required to reach that moment is your V1. Everything after it is version two.',
        'That one distinction usually cuts a first version in half, and the half it removes is the half nobody would have noticed was missing.',
        'Try it on your own product and reply with the sentence you end up with. I will tell you honestly whether it fits in a week.',
      ],
      cta: { label: 'Read the method', url: `${site.url}${href('en', 'method')}` },
    },
    {
      delayDays: 4,
      step: 'nurture-price',
      ref: dispatchRef(magnet),
      subject: 'What a fixed-price sprint actually includes',
      preheader: `${usd} dollars, seven days, and the parts people expect to be extra.`,
      paragraphs: [
        'A quick, concrete answer to the question I get most, so you have the numbers whether or not you ever work with me.',
        `Sprint V1 is $${usd} (€${eur}), fixed, for a SaaS or mobile app scoped, built and shipped to production in ${site.v1Days} days. Fixed means fixed: if it runs long, that is my cost, not a change order.`,
        'Included: scoping, design, build, infrastructure, tests on the paths where failure is expensive, deployment, CI/CD, and the handover. The repository sits on your organisation with full history, and every infrastructure account is in your name. If we stopped working together on day 8, nothing would break except further changes.',
        'Not included, honestly: third-party service fees, app store review time, and anything that needs multiple user roles, a heavy migration or regulatory certification — those are not one-week projects and I will tell you so on the call rather than after the invoice.',
      ],
      cta: { label: 'See what Sprint V1 covers', url: `${site.url}${href('en', 'sprint')}` },
    },
    {
      delayDays: 7,
      step: 'nurture-offer',
      ref: dispatchRef(magnet),
      subject: 'Want me to run this on your product?',
      preheader: 'One founder, one week, one product.',
      paragraphs: [
        'Last email in this sequence, and the only one that asks for anything.',
        `If you have an idea that should exist next week rather than next quarter, that is exactly what Sprint V1 is: ${site.v1Days} days, $${usd} fixed, and I write the code myself. No account managers, no handoffs, no discovery phase billed before anything gets built.`,
        'The next step is a twenty-minute call where I tell you whether your idea fits in a week. If it does not, I will say so and tell you what would fit — that conversation costs nothing either way.',
        'Reply to this email, or use the link below. And if the timing is wrong, keep the guide; it stands on its own.',
      ],
      cta: { label: 'Talk about your V1', url: `${site.url}${href('en', 'contact')}` },
      note: `Prefer WhatsApp? ${site.whatsappDisplay} — or just reply here.`,
    },
  ]
}
