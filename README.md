# khufu.io

The Khufu agency site — Next.js 16 (App Router), React 19, Tailwind 4, deployed on
Vercel from `master`. Ten locales under `/[locale]`, plus English-only lead-magnet
pages at the root (`/playbook`, `/build-vs-buy`, `/hire-checklist`).

## Run it

```sh
nvm use            # Node 22, see .nvmrc
npm install
cp .env.example .env.local   # every variable is documented there
npm run dev
```

Gate before shipping: `npm run lint && npm run typecheck && npm run build && npm run check:sprint`.

## Analytics & ad tracking

| Tool | What it does | Where |
|---|---|---|
| PostHog | Product analytics, funnel events, server-side lead record | `components/analytics/posthogProvider.tsx`, `lib/analytics.ts`, `lib/posthogServer.ts` |
| LinkedIn Insight Tag | Retargeting audiences + Campaign Manager conversion | `components/analytics/linkedInInsightTag.tsx`, `lib/linkedin.ts` |

Both read the same consent state (`lib/consent.ts`, written by the cookie banner).
The banner only shows in the EU/EEA/UK. There, PostHog runs until the visitor
declines, and LinkedIn waits for an explicit "Accept". Everywhere else both run
unless the visitor declines.

### The LinkedIn conversion — read this before reading a CPL

There is **one** LinkedIn conversion, `NEXT_PUBLIC_LINKEDIN_CONVERSION_CONTACT`,
« un contact a été pris » (decision `cmu7x1yj`). It fires on any of the three
exits of `/sprint-v1`, at the same point as their PostHog event:

| PostHog event | Fired from |
|---|---|
| `sprint_booking_opened` | `sprintContact.tsx` (modal) and `sprintBookingLink.tsx` (closing link) |
| `sprint_callback_requested` | `sprintCallback.tsx`, only after the server accepted the email |
| `sprint_whatsapp_opened` | `sprintWhatsappLink.tsx` (modal and closing block) |

> ⚠️ **`sprint_booking_opened` counts the Google appointment page OPENING, not a
> booked call.** The slot is picked on Google's side and the site never learns
> whether it was. A LinkedIn "cost per conversion" is a cost per contact
> **attempt**. Booked calls are counted in the Google calendar, nowhere else.

Why three events in one conversion: ~$1,000 at $8-15 a click buys 70-125 clicks,
and LinkedIn needs 15-50 conversions to leave its learning phase. The campaign
optimises on the contact; it is judged on booked calls.

In Campaign Manager, set the conversion's counting to **one per click**, or a
visitor who opens the calendar and then WhatsApp counts twice.

The hire-checklist download is **not** a LinkedIn conversion: the lead magnets left
the paid funnel with `cmu7x1yj`. `NEXT_PUBLIC_LINKEDIN_CONVERSION_CHECKLIST` stays
in `.env.example` for the record and is read by no code.

## Email

Transactional mail goes through Resend: `/api/lead-magnet` (guide delivery, the
nurture sequence scheduled at capture, founder notification), `/api/contact` and
`/api/sprint-callback`. See `.env.example` for the sender variables.
