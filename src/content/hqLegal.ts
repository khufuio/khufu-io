import type { Locale } from '@/i18n/config'
import type { PolicyDoc } from '@/content/policyDoc'

/**
 * Public legal pages of the Meta app « Khufu HQ », Khufu FZCO's internal
 * WhatsApp tool — the URLs Meta App Review points to (todos cmwl4koz, cmwlima5).
 *
 * Source of truth: the hq repo, `scratchpad/meta-app-review/pages-content.md`
 * (checked against HQ's WhatsApp relay code). Published verbatim: edit it
 * there first, then here.
 *
 * English only: every locale renders this text and canonicalises to /en.
 */

export const hqLegalLocales = ['en'] as const satisfies readonly Locale[]

export type HqLegalKey = 'hqPrivacy' | 'hqTerms' | 'hqDataDeletion'

const updated = 'Last updated: 18 November 2026'

export const hqLegal: Record<HqLegalKey, PolicyDoc> = {
  hqPrivacy: {
    title: 'Khufu HQ — Privacy policy',
    metaTitle: 'Khufu HQ privacy policy · Khufu',
    metaDescription:
      'How Khufu HQ, the internal tool of Khufu FZCO, handles WhatsApp messages from people already in our address book.',
    updated,
    blocks: [
      {
        p: "**What Khufu HQ is.** Khufu HQ is the internal operations tool of **Khufu FZCO** (Dubai, UAE). It is not a product offered to other businesses and has no external users. Its Meta app connects **one** WhatsApp Business number, Khufu's own, so that Khufu's team can read and answer WhatsApp conversations with clients and contacts in one place.",
      },
      { p: '**Data controller.** Khufu FZCO. Contact: hello@khufu.io.' },
      { h2: 'What we receive from WhatsApp' },
      {
        ul: [
          "Messages sent to Khufu's WhatsApp Business number, and the replies Khufu sends from it, **only for people already recorded in Khufu's address book**.",
          "For each kept message: the sender's WhatsApp number, the time, the message type and its text. Media files (photos, audio, documents) are not downloaded or stored; only their type is recorded.",
          "Messages from any number that is not in our address book are **discarded on arrival** and never stored. Group chats, read receipts and the phone's contact list are discarded too.",
        ],
      },
      { h2: 'How it is processed' },
      {
        ul: [
          'Meta delivers messages to a webhook we run on Cloudflare. It keeps a message only until Khufu HQ collects it, at most a few minutes, then deletes it. Our address book is held there only as one-way keyed hashes, never as readable phone numbers.',
          'Khufu HQ then stores the conversation on a server operated by Khufu, with backups kept in a private repository.',
          'Messages are read by Khufu staff to answer clients. They are **never sold, shared, used for advertising, or used to train AI models**.',
        ],
      },
      { h2: 'Sending' },
      {
        p: 'Khufu HQ never sends a WhatsApp message on its own. A message is sent only after a Khufu team member has approved its exact text, only to a person who wrote to us in the previous 24 hours, and never as marketing. There are no bulk sends.',
      },
      { h2: 'Retention' },
      {
        p: "A conversation is kept while the person remains in Khufu's address book. When a person is removed from it, their messages are deleted with them.",
      },
      { h2: 'Your rights' },
      {
        p: 'You can ask to access, correct or delete your data at any time; see [Data deletion](/en/hq/data-deletion). Under the GDPR and the UAE PDPL you may also object to processing or lodge a complaint with your data protection authority.',
      },
      { h2: 'Changes' },
      { p: 'We will update this page if the way Khufu HQ handles data changes, and change the date above.' },
    ],
  },

  hqTerms: {
    title: 'Khufu HQ — Terms of service',
    metaTitle: 'Khufu HQ terms of service · Khufu',
    metaDescription:
      'Terms of use of Khufu HQ, the internal tool of Khufu FZCO connected to its WhatsApp Business number.',
    updated,
    blocks: [
      {
        p: "**Scope.** Khufu HQ is an internal tool of **Khufu FZCO** (Dubai, UAE). Only Khufu staff use it, to manage Khufu's own business, including the conversations on Khufu's own WhatsApp Business number. It is not sold, licensed or made available to any other business or person.",
      },
      { h2: 'Use of WhatsApp' },
      {
        ul: [
          'Khufu HQ uses the WhatsApp Business Platform in accordance with the WhatsApp Business Terms of Service and the WhatsApp Business Messaging Policy.',
          'Every outgoing message is approved by a Khufu team member before it is sent. Khufu HQ sends no marketing, no bulk messages and no automated messages.',
        ],
      },
      { h2: 'If you write to Khufu on WhatsApp' },
      {
        p: 'Your messages are handled as described in our [privacy policy](/en/hq/privacy). You can stop the conversation at any time by not replying or by blocking the number, and you can ask us to delete your data (see [Data deletion](/en/hq/data-deletion)).',
      },
      { h2: 'Liability' },
      {
        p: "Khufu HQ is provided for Khufu's internal use only. Nothing in it creates an obligation towards third parties beyond those of the privacy policy.",
      },
      { h2: 'Contact' },
      { p: 'Khufu FZCO — hello@khufu.io' },
    ],
  },

  hqDataDeletion: {
    title: 'Khufu HQ — Data deletion',
    metaTitle: 'Khufu HQ data deletion · Khufu',
    metaDescription: 'How to ask Khufu FZCO to delete the WhatsApp messages Khufu HQ holds about you.',
    updated,
    blocks: [
      {
        p: "Khufu HQ holds WhatsApp messages only for people in Khufu's address book (see our [privacy policy](/en/hq/privacy)). To have them deleted:",
      },
      {
        ol: [
          'Email **hello@khufu.io** with the subject « Data deletion » and the WhatsApp number concerned. You can also simply ask us in the WhatsApp conversation itself.',
          "We remove you from our address book. Your stored messages are deleted with your record, and your number is removed from our webhook's allow-list, so new messages from it are discarded instead of stored.",
          'We confirm by reply within **30 days**, usually much sooner.',
        ],
      },
      {
        p: 'Messages kept on your own phone or in WhatsApp itself are not affected: delete them in WhatsApp. Khufu HQ holds no Facebook or Instagram account data about the people who write to us.',
      },
    ],
  },
}
