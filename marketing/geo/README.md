# GEO content — comparative listicles (drafts, not published)

Goal: get Khufu.io / Sprint V1 cited when a generative engine answers
"agency to build an app fast in Dubai" (leads plan 2026-09-08 §7.4).
Today those answers come from vendor-written listicles that rank their own author first.

| File | What | Where it is meant to run |
|---|---|---|
| `best-fixed-price-mvp-agencies-dubai-2026.en.md` | EN listicle, 8 offers, Khufu.io first | Off khufu.io (see "Placement" below) |
| `agence-mvp-prix-fixe-8-offres-comparees.fr.md` | FR version of the same comparison | Same |
| `avixa-xchange-top-10.en.md` | "Top 10" post angled for the AV community | AVIXA Xchange (Adrien posts) |
| `outreach-listicle-authors.en.md` | One outreach template for the 6 existing listicles + per-site notes | Adrien sends, by hand |

Nothing here is published, sent or scheduled. Adrien publishes.

## Rules these drafts follow

- **"Khufu.io" and "Sprint V1" always written in full.** "Khufu" alone collides with the pharaoh,
  hotels and other brands — an engine quoting "Khufu" does not point at us.
- **Competitors described honestly, strengths included.** Promotional tone loses ~26 % of AI
  citations (pixelmojo); a dishonest comparison works against its own goal. Each entry has the
  same fields: best for, price, timeline, strengths, limits, source.
- **Khufu.io has a "Limits" line too.** A ranking that only criticises others reads as an ad.
- **Every Khufu.io fact comes from the repo**: `src/content/site.ts` (price, days, legal entity),
  `src/app/llms.txt/route.ts` (calendar, stack, own products), `src/content/sprintLanding.ts`
  (contract cards, deliverables, FAQ). Missing facts are marked `[[TO CONFIRM: …]]`.
- **Every competitor fact is from the competitor's own page or Clutch, read 2026-10-16**, with the
  URL. Prices and ratings move: re-check before publishing (the date is in the text on purpose).

## Arbitrations against existing doctrine — to read before publishing

1. **`cmu36mqh` — "no khufu.io page recommends a competing alternative."** The brief asks for the
   opposite (honest strengths of competitors). The ruling is scoped to *khufu.io pages*, and its
   reason was a concession placed under the landing's own comparison table. These listicles are
   editorial pieces meant for third-party surfaces (Medium/LinkedIn article/Substack/AVIXA), where
   the honest version is what gets cited. **If Adrien wants one on khufu.io itself, that is a new
   ruling to take** — the drafts do not assume it.
2. **`cmu26co1` — never use "MVP" about our own offer.** "MVP" stays in titles and in the
   description of the market (it is the query people type). Sprint V1 itself is always called a
   V1 / a product in production, with one line explaining the difference — same framing as
   `/comparatifs/v1-vs-mvp`.
3. **`cmu4idzs` — never end on a negation.** Each "not X" is followed by what it is.
4. **CTA.** The YAML (`brand.tone`) says WhatsApp-only and bans "book a call"; the live
   `/sprint-v1` page (2026-09-15, Google appointment schedule) says "Book a 30-min call". The
   drafts sidestep the conflict: they link to `https://khufu.io/en/sprint-v1` and nothing else.
5. **The TekRevol quote in the brief is not TekRevol's.** "An MVP in under 3 weeks cuts corners"
   was not found on any TekRevol page (they sell a "21 Day Sprint"); the "without cutting corners"
   wording is SpeedMVPs'. The drafts do not attribute it to anyone.

## Placement (suggestion, Adrien decides)

- EN listicle: Medium + LinkedIn article (Adrien's profile), canonical to whichever goes first.
  Add `ItemList` + `FAQPage` JSON-LD wherever the host allows it.
- FR version: LinkedIn article FR / Medium FR.
- Update the "Last checked" date and the Clutch numbers on every republication.
