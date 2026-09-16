# Product shots — print masters

Full-resolution versions of the platform captures used on `/sprint-v1`'s product
wall. They live **outside `public/`** on purpose: Next never serves them, so they
cost the site nothing, and the web copies in `public/images/sprint/` stay at
1200x650 for the card grid and the LCP budget.

These exist because the captures have a second client: the apporteur-d'affaires
flyer (khufu HQ decision `cmu3cu4i`). A 1200px image blown up on an A4 page
smears — anything going to print pulls from here instead.

| File | Pixels | At 300dpi |
|---|---|---|
| `clokizi-web@4x.png` | 7600 x 4120 | 64 x 35 cm |
| `herbacrm-web@4x.png` | 5040 x 2728 | 43 x 23 cm |

Both are lossless PNG and still under 500KB — flat UI compresses well, so there
is no reason to ship a lossy master.

## How they were made

Neither is a capture of production, and that is not negotiable: `app.clokizi.com`
and `app.herbacrm.com` hold real customer records, and everything here ends up on
a public page or a printed flyer. Both were rendered from the demo fixture each
app carries for exactly this purpose:

- `clokizi/web/src/pages/app/dashboard/mockData.ts`
- `herbacrm/web/src/pages/app/dashboard/mockData.ts`

Flip `USE_MOCK` to `true` in the matching `dashboard.tsx`, stub the user context,
run `npx vite`, and drive the headless scratch Chrome
(`hq browser ensure --need public`, CDP on 9412) at `deviceScaleFactor: 4`.

⚠️ Recharts animates on mount. At 4x the render is slow enough that a short wait
captures a half-drawn line — HerbaCRM's revenue curve came out running off the
top of its own chart. Allow ~14s after load before the screenshot.

⛔ Every name, address and figure in both images is invented. No real customer,
no real brand, and no number that could be read as a real Clokizi, HerbaCRM or
Khufu metric — they are one fictional tenant's workspace.
