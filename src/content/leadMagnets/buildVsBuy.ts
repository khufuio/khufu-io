import { site } from '@/content/site'
import { toUsd } from '@/lib/currency'
import type { LeadMagnet } from './types'

const usd = toUsd(site.v1PriceEUR).toLocaleString('en-US')
const eur = site.v1PriceEUR.toLocaleString('en-US')

/**
 * Angle 2 — the rational decision. A comparison grid is only persuasive if it
 * is fair, so every option gets an honest "when this is the right answer",
 * including the ones that compete with us. A founder who picks a freelancer
 * after reading this made a good decision; a founder who picks a sprint after
 * reading this is a qualified lead rather than a talked-into one.
 */
export const buildVsBuy: LeadMagnet = {
  slug: 'build-vs-buy',
  label: 'Build vs Buy',
  eyebrow: 'Free guide',
  title: 'Build vs Buy vs Agency: the real cost',
  subtitle:
    'A numbers-first comparison of the six ways to get your first version built — with the hidden costs that never make it into the quote.',
  audience:
    'Founders deciding how to get a SaaS or mobile V1 built, and comparing a hire, a freelancer, an agency, no-code, or doing it themselves.',
  takeaways: [
    'Cash, calendar time and ownership compared across six routes, with 2026 market ranges',
    'The four costs that never appear in a quote — and usually decide the answer',
    'A one-page formula for the true cost of your decision, including the cost of being late',
    'An honest "pick this one when…" for every option, including the ones that compete with a sprint',
    'The five questions that tell you which route you are actually in',
  ],
  metaTitle: 'Build vs Buy vs Agency — the real cost of a V1 in 2026',
  metaDescription:
    'Free guide: what it really costs to get a SaaS or mobile V1 built — in-house hire, freelancer, agency, offshore, no-code or a fixed-price sprint. Market ranges, hidden costs and a decision framework.',
  pdfPages: 10,
  updated: '2026-07-31',
  intro: [
    'Every quote you receive answers the wrong question. It tells you what someone will charge, not what the decision will cost you.',
    'The difference between those two numbers is usually larger than the quote itself: recruiting fees, your own management time, the months of revenue you did not earn while waiting, and the rebuild you pay for eighteen months later.',
    'This guide puts the six realistic routes side by side with 2026 market ranges, then gives you a formula to run your own numbers. I sell one of these six options. I have tried to make the grid fair enough that you could use it to decide against me — the numbers work anyway.',
  ],
  chapters: [
    {
      id: 'the-grid',
      title: 'The six routes, side by side',
      summary: 'Cash, time to live, ownership and risk for each realistic way to get a V1 built.',
      free: true,
      blocks: [
        {
          p: 'Ranges below are what I observe in the European and North American markets in 2026, for a genuine first version of a SaaS or mobile product — not a prototype, not a full platform. Your market will shift them; the shape of the comparison holds.',
        },
        {
          table: {
            head: ['Route', 'Cash to a live V1', 'Calendar time', 'What you own'],
            rows: [
              ['In-house senior hire', '$45k–70k (first 3 months, loaded)', '3–5 months', 'Everything, plus the person'],
              ['Senior freelancer', '$20k–50k', '6–12 weeks', 'Everything, if the contract says so'],
              ['Classic dev agency', '$60k–250k', '3–6 months', 'Usually everything; check the IP clause'],
              ['Offshore team', '$15k–45k', '2–4 months', 'Everything, with more management on you'],
              ['No-code builder', '$2k–15k', '2–6 weeks', 'Your data. Not your software'],
              ['Fixed-price 7-day sprint', `$${usd} (€${eur})`, '1 week', 'Repository, infra, accounts'],
            ],
            note: 'Cash figures are the realistic out-of-pocket total to reach a live first version, not a day rate.',
          },
        },
        {
          p: 'Two columns are missing from that table on purpose, because they are where the real money is: your time, and the cost of being late. Both are covered further down, and both are usually larger than the cash column.',
        },
        {
          callout: {
            title: 'The comparison people actually make',
            body: 'Most founders compare a $17,000 quote against a $600/day freelancer and conclude the freelancer is cheaper. At 45 days — a realistic V1 — that freelancer is $27,000, plus your project management, spread over ten weeks. The quote was never the expensive part.',
          },
        },
      ],
    },
    {
      id: 'hidden-costs',
      title: 'The four costs that never appear in a quote',
      summary: 'Recruiting, your own hours, delay, and rework — quantified.',
      free: true,
      blocks: [
        { h3: '1. The cost of acquiring the builder' },
        {
          p: 'Hiring a senior developer costs money before they write a line: a recruiter takes 15–25% of first-year salary, or you spend 20–40 hours of your own time on sourcing and interviews. Then there is ramp-up — four weeks before a new hire is net-positive on an unfamiliar product is optimistic, not pessimistic.',
        },
        {
          p: 'Freelance and agency routes have a smaller version of the same cost: writing a brief, running a selection process, checking references, negotiating a contract. Two to four weeks of elapsed time and a real number of your hours, before day one.',
        },
        { h3: '2. Your own hours' },
        {
          p: 'This is the cost founders systematically price at zero. Any route where you coordinate the work — a freelancer, an offshore team, a junior hire — puts you in the project manager seat. Budget 5 to 10 hours a week for the duration: specifying, reviewing, unblocking, testing, chasing.',
        },
        {
          p: 'Over a ten-week freelance build, that is 50 to 100 hours. Price your hour at whatever your next best use of it is — sales calls, fundraising, your existing business — and it is frequently the largest single line in the whole comparison.',
        },
        { h3: '3. The cost of being late' },
        {
          p: 'If the product would eventually earn $8,000 a month, every month of delay costs $8,000 that you never recover — plus the compounding you lose because the learning that comes from real users started later.',
        },
        {
          p: 'The cost of delay is not only revenue. It is the competitor who shipped first, the investor conversation you entered with a deck instead of a product, and the four months of assumptions you held without testing them.',
        },
        { h3: '4. Rework' },
        {
          p: 'The cheapest routes carry the highest probability of paying twice. A no-code build that succeeds hits a wall — custom logic, performance, a pricing model the platform cannot express — and the rebuild costs full price, on top of what you already spent, at the worst possible moment, when you have users.',
        },
        {
          p: 'Weight it honestly: a 40% chance of a $40,000 rebuild is a $16,000 line item in the decision, even though it appears in no quote.',
        },
      ],
    },
    {
      id: 'the-formula',
      title: 'The formula: what the decision actually costs',
      summary: 'One page of arithmetic that makes the routes genuinely comparable.',
      blocks: [
        {
          p: 'Run this for each route you are seriously considering. It takes fifteen minutes and it usually reorders the list.',
        },
        {
          quote:
            'True cost = cash out + (your hours × your hourly value) + (months to live × monthly cost of delay) + (probability of rework × cost of rework)',
        },
        { h3: 'A worked example' },
        {
          p: 'A founder with a B2B SaaS idea, expecting $8,000 a month in revenue once live, valuing their own hour at $150. Two routes on the table.',
        },
        {
          table: {
            head: ['', 'Senior freelancer', '7-day fixed sprint'],
            rows: [
              ['Cash out', '$27,000 (45 days × $600)', `$${usd}`],
              ['Your hours', '70 h × $150 = $10,500', '10 h × $150 = $1,500'],
              ['Time to live', '10 weeks', '1 week'],
              ['Cost of delay', '2.3 months × $8,000 = $18,400', '0.25 × $8,000 = $2,000'],
              ['Rework risk', '15% × $30,000 = $4,500', '15% × $30,000 = $4,500'],
              ['True cost', '$60,400', '$25,000'],
            ],
            note: 'Numbers are illustrative. The point is the shape: cash out is rarely the deciding line.',
          },
        },
        {
          p: 'Change the assumptions and the answer changes, which is the point. If the product will not earn anything for a year — a research tool, a side project, an internal utility — the delay term collapses to nothing and the freelancer wins on cash. If you value your own hour at zero because you have nothing else to do with it, doing it yourself wins. The formula is honest in both directions.',
        },
        {
          callout: {
            title: 'The number most people get wrong',
            body: 'Founders overestimate their monthly revenue and underestimate their hours. Halve the revenue figure and double the hours before you run it — if the conclusion survives that, it is a real conclusion.',
          },
        },
      ],
    },
    {
      id: 'pick-this-when',
      title: 'Pick this one when…',
      summary: 'The honest case for each route, including when a sprint is the wrong answer.',
      blocks: [
        { h3: 'Hire in-house when' },
        {
          p: 'The product is your company, not a bet you are testing. You expect to be shipping continuously for years, you can afford three to five months before anything is live, and you can attract someone senior. A permanent hire is the most expensive way to get a V1 and the cheapest way to get the following three years — do not confuse the two decisions.',
        },
        { h3: 'Use a senior freelancer when' },
        {
          p: 'You have a clear specification, technical judgement of your own, and time to manage the work. You are the right buyer for this if you can tell good code from bad, or you have someone who can. If you cannot evaluate the work, the day rate is not the risk — the invisible quality is.',
        },
        { h3: 'Use a classic agency when' },
        {
          p: 'The project is large, multi-team, multi-quarter, or carries compliance and procurement requirements a solo operator cannot satisfy. Enterprise buyers frequently cannot contract any other way. You are paying for process, insurance and continuity, and for some organisations that is the product.',
        },
        { h3: 'Use an offshore team when' },
        {
          p: 'You have a strong internal technical lead who can specify precisely and review continuously, and the work is well understood. Offshore is cheap per hour and expensive per unresolved ambiguity — the savings are real, and so is the management load. Without a technical counterpart on your side, do not.',
        },
        { h3: 'Use no-code when' },
        {
          p: 'You are testing whether anyone wants this at all and the answer might be no. Building a landing page, an automation, or an internal tool with Airtable and a form is not a compromise, it is the correct engineering decision. Use it to invalidate the idea cheaply — and plan to rebuild if it works.',
        },
        { h3: 'Build it yourself when' },
        {
          p: 'You can code, or you are willing to learn on this project and the deadline can absorb it. AI tooling has made this genuinely viable for technically-minded founders in a way it was not three years ago. The cost is not zero — it is every hour you did not spend selling — but it buys you a level of product understanding no outsourced route provides.',
        },
        { h3: 'Use a fixed-price sprint when' },
        {
          p: `Speed to a real product matters more than anything else, you want the total cost known before you start, and you want to own the result outright. Sprint V1 is $${usd} (€${eur}) for ${site.v1Days} days, one operator, and the repository is yours on day 8.`,
        },
        { h3: 'Do not use a fixed-price sprint when' },
        {
          p: 'You cannot make decisions inside a day. You need multiple user roles, a heavy migration from an existing system, or regulatory certification. Your scope is genuinely undefined and you want a discovery phase to find it. Or you already have a competent technical team, in which case what you need is reinforcement, not an agency.',
        },
      ],
    },
    {
      id: 'which-route',
      title: 'Five questions that tell you which route you are in',
      summary: 'A short diagnostic when the grid leaves you between two options.',
      blocks: [
        {
          ol: [
            'Can you evaluate the quality of the code you receive, yourself or through someone you trust? If no, rule out every route where quality is invisible until it breaks — and prefer a fixed price with a named, accountable builder.',
            'Is there a date that actually matters — a funding round, a trade show, a competitor, a customer commitment? If yes, calendar time outranks cash and the comparison is nearly decided.',
            'Is this product the company, or a bet the company is placing? The company hires. The bet buys a sprint or builds no-code.',
            'How many hours a week can you genuinely give to the project? Under five, rule out anything you would have to manage. Over fifteen, freelance and offshore become viable.',
            'What happens if it works better than expected in month three? If the honest answer involves a rebuild, count that rebuild in today\'s decision rather than discovering it later.',
          ],
        },
        {
          callout: {
            title: 'If two routes are close, pick the reversible one',
            body: 'A sprint or a freelance engagement ends and leaves you with an asset. A permanent hire is a person, a payroll and a commitment — the right choice often, but not the one to make while you are still uncertain what you are building.',
          },
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Why is a 7-day sprint cheaper than three months of freelancing?',
      a: 'Because it is priced on the outcome rather than on elapsed time, and because ruthless scoping removes most of the work. A fixed price also removes the incentive to take longer: if the sprint over-runs, that cost sits with the agency, not on your invoice.',
    },
    {
      q: 'Is a V1 built in a week really production quality?',
      a: 'It is built on a production stack — Next.js, NestJS, PostgreSQL, React Native — with tests on the paths where failure is expensive, backups, monitoring and CI/CD. It is small on purpose. Small and solid is what a first version should be; large and fragile is what long projects usually deliver.',
    },
    {
      q: 'What if I already have a developer or a team?',
      a: `Then you probably do not need an agency, you need reinforcement. Khufu bills remote support at $${toUsd(site.dailyRateEUR).toLocaleString('en-US')} per day or $${toUsd(site.hourlyRateEUR).toLocaleString('en-US')} per hour for teams with an existing codebase.`,
    },
    {
      q: 'How much does a SaaS V1 cost in 2026?',
      a: `Realistic market ranges to a live first version: $20,000–50,000 with a senior freelancer, $60,000–250,000 with a classic agency, $45,000–70,000 for the first three months of an in-house senior hire, and $${usd} fixed for a Khufu Sprint V1 delivered in ${site.v1Days} days. The spread comes from scope discipline far more than from hourly rates.`,
    },
    {
      q: 'Does no-code ever make sense for a real product?',
      a: 'Yes — for validating demand, for internal tools, and for anything where the logic stays simple. It stops making sense when your product becomes the logic: custom pricing, complex permissions, performance at scale, or an integration the platform does not support. Plan the exit before you need it.',
    },
  ],
  cta: {
    title: 'Run the numbers on your own project',
    body: `If the sprint column is the one that fits, that is a twenty-minute conversation. Sprint V1: $${usd} (€${eur}), ${site.v1Days} days, fixed scope agreed before anything starts.`,
  },
}
