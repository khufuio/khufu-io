import { site } from '@/content/site'
import { toUsd } from '@/lib/currency'
import type { LeadMagnet } from './types'

const usd = toUsd(site.v1PriceEUR).toLocaleString('en-US')

/**
 * Angle 3 — trust and protection. The reader is being handed the questions
 * that make it hard to sell them badly built software, including by us. The
 * positioning only works if the list is genuinely uncomfortable to answer.
 */
export const hireChecklist: LeadMagnet = {
  slug: 'hire-checklist',
  label: '47 Questions',
  eyebrow: 'Free checklist',
  title: '47 questions to ask before you hire anyone to build your SaaS',
  subtitle:
    'The vetting checklist for founders who cannot read code — what to ask, why it matters, and the answer that should end the conversation.',
  audience:
    'Non-technical founders about to hire an agency, a freelancer or a development team, who need to evaluate people whose work they cannot inspect.',
  takeaways: [
    '47 questions grouped into the eight areas where projects actually go wrong',
    'For each: why it matters, and the specific answer that is a red flag',
    'The five answers that should end a conversation immediately',
    'How to run the list in a 45-minute call without sounding like an interrogation',
    'The ownership clauses to check before you sign anything',
  ],
  metaTitle: '47 questions to ask before hiring a SaaS development agency',
  metaDescription:
    'A free vetting checklist for non-technical founders: 47 questions to ask any agency, freelancer or developer before they build your SaaS — with the red-flag answers for each.',
  pdfPages: 17,
  updated: '2026-07-31',
  intro: [
    'The hardest part of hiring someone to build software is that you cannot inspect the product until you have already paid for most of it. By the time bad work becomes visible, you have spent the budget and the calendar.',
    'The way around that is not technical knowledge. It is asking questions whose answers are hard to fake — and knowing what a good answer sounds like before you hear one.',
    'These are the 47 I would ask. They are uncomfortable, including for me. If a provider gets defensive at question 14 or 20, that is the checklist working — that is exactly what it costs to find out cheaply.',
  ],
  chapters: [
    {
      id: 'how-to-use',
      title: 'How to use this list',
      summary: 'Running 47 questions without turning a sales call into an interrogation.',
      free: true,
      blocks: [
        {
          p: 'Do not read all 47 down a call. You will sound like a procurement form and you will learn less, because the useful signal is in how someone thinks, not in whether they have a prepared answer.',
        },
        { h3: 'Pick twelve' },
        {
          p: 'Choose two or three from each section that map to your actual risk. If you are non-technical, weight ownership and quality. If you have a hard deadline, weight price and process. If the provider is a team rather than a person, weight who does the work.',
        },
        { h3: 'Ask the open ones first' },
        {
          p: 'Start with question 1 — "describe my product back to me in one sentence." It is the highest-signal question in the list and it takes ten seconds. Someone who repeats your feature list has not understood the product. Someone who tells you what it is for, and what they would cut, has.',
        },
        { h3: 'Listen for the shape of the answer, not the content' },
        {
          ul: [
            'Specifics beat reassurance. "Yes, we handle that" is not an answer; "here is how we handled it on X" is.',
            'Volunteered downsides are the strongest possible signal. Anyone who tells you unprompted what could go wrong has done this before.',
            'Watch for the pivot to sales. A question about ownership answered with a paragraph about their process is a no.',
            'A slow, honest "I do not know, I would need to check" beats a fast confident wrong answer every time.',
          ],
        },
        {
          callout: {
            title: 'Get the answers in writing',
            body: 'For anything in the ownership and price sections, ask for the answer by email afterwards. It is a reasonable request, it takes them two minutes, and a provider who will not put an ownership answer in writing has told you what you needed to know.',
          },
        },
      ],
    },
    {
      id: 'deal-breakers',
      title: 'The five answers that should end the conversation',
      summary: 'The responses that are not negotiating positions — they are exits.',
      free: true,
      blocks: [
        {
          p: 'Most bad answers are fixable with a better contract. These five are not, and you save yourself months by walking away the moment you hear one.',
        },
        {
          ol: [
            '"We keep the code until final payment, then transfer it." Payment terms are fine; hostage terms are not. The repository should be in your organisation from day one, with commits landing in it as work happens. Anything else means a dispute leaves you with nothing.',
            '"We use our own internal framework, it makes us faster." It makes them necessary. You will not be able to hire anyone else to maintain it, and that is the point of the arrangement.',
            '"We can\'t tell you who will work on it until we start." You are buying a specific person\'s judgement. If they cannot name them, you are buying whoever is unallocated that month.',
            '"We\'ll figure out the exact scope as we go." Without a written scope, there is no such thing as late and no such thing as out of scope. Time-and-materials work is legitimate — but only with a technical counterpart on your side who can tell you when to stop.',
            '"Testing and deployment are a separate phase we can quote later." Software that is not deployed is not finished. If shipping is a separate line item, the quote you are comparing is not for a working product.',
          ],
        },
      ],
    },
    {
      id: 'scope',
      title: 'Scope and understanding (1–6)',
      summary: 'Whether they understood the product, or just the feature list.',
      blocks: [
        {
          checklist: [
            {
              n: 1,
              q: 'Describe my product back to me in one sentence.',
              why: 'The fastest test of whether someone listened. A person who understands the product can compress it; a person who does not will expand it.',
              redFlag: 'Your feature list read back to you, or a sentence full of technology names rather than users.',
            },
            {
              n: 2,
              q: 'What would you cut from this scope to make it fit the budget?',
              why: 'Everyone who has shipped has an opinion about what is not needed in a first version. It is the single clearest sign of experience.',
              redFlag: '"Nothing, we can do it all." That is a quote written to be accepted, not delivered.',
            },
            {
              n: 3,
              q: 'What is the riskiest part of this build?',
              why: 'Forces them to have actually thought about your project instead of pattern-matching it to their last one.',
              redFlag: 'No risk identified, or a generic answer about "communication" that would apply to any project.',
            },
            {
              n: 4,
              q: 'What do you need from me, and by when?',
              why: 'Most delays are caused by the client, and a provider who has done this knows exactly which inputs stall a build — content, accounts, decisions, access.',
              redFlag: '"Nothing, we\'ll handle everything." Untrue, and it means you will be surprised on the day it becomes urgent.',
            },
            {
              n: 5,
              q: 'What happens if my idea turns out to be wrong?',
              why: 'Tests whether they think in terms of your outcome or their invoice. The right answer involves building less, sooner, to find out.',
              redFlag: 'Discomfort with the question, or a pitch for a bigger build to "cover all the cases".',
            },
            {
              n: 6,
              q: 'Have you built something in this space before? What was hard about it?',
              why: 'The second half is the real question. Anyone can claim domain experience; only someone who lived it can name the specific difficulty.',
              redFlag: 'A list of logos with no story attached, or a difficulty so generic it could be any project.',
            },
          ],
        },
      ],
    },
    {
      id: 'price',
      title: 'Price, contract and what happens when it slips (7–13)',
      summary: 'Where the money actually moves when things do not go to plan.',
      blocks: [
        {
          checklist: [
            {
              n: 7,
              q: 'Is this a fixed price or an estimate?',
              why: 'They are completely different products and the word "quote" hides the difference. A fixed price transfers risk to the builder; an estimate leaves it with you.',
              redFlag: 'Ambiguity. If they will not say the words "fixed price", it is an estimate.',
            },
            {
              n: 8,
              q: 'What specifically triggers a change order, and what does one cost?',
              why: 'Change orders are where a competitive quote becomes an expensive project. You want the threshold defined before you are emotionally committed.',
              redFlag: '"We\'ll be reasonable about it." Reasonable is not a rate, and it is never reasonable once the project is late.',
            },
            {
              n: 9,
              q: 'If this takes twice as long as you estimated, who pays for the extra time?',
              why: 'The single most predictive question about how your project will end. Ask it directly and watch the pause.',
              redFlag: 'Any version of "we\'d have to discuss it". You are discussing it now, which is the only time you have leverage.',
            },
            {
              n: 10,
              q: 'What is the payment schedule, and what is each payment tied to?',
              why: 'Payments tied to deliverables keep incentives aligned. Payments tied to dates pay for elapsed time whether or not anything shipped.',
              redFlag: 'Large payment up front with nothing tied to delivery, or full payment before handover.',
            },
            {
              n: 11,
              q: 'What is not included in this price?',
              why: 'The most useful question in the entire list. Hosting, third-party service fees, app store accounts, design, content, copywriting, and post-launch fixes are all commonly excluded.',
              redFlag: '"Everything is included." Nothing includes third-party fees. They are telling you they have not thought it through, or they are hoping you will not ask again.',
            },
            {
              n: 12,
              q: 'What does support cost after launch, and what is the response time?',
              why: 'Software needs maintenance from the week it ships. If this is unpriced, you will negotiate it at your least powerful moment — when something is broken.',
              redFlag: 'No answer, or support that only exists as an expensive retainer with no stated response time.',
            },
            {
              n: 13,
              q: 'Can I stop the project halfway, and what do I get if I do?',
              why: 'Establishes whether partial work has value to you, or only to them. It also reveals the real ownership position faster than asking about ownership directly.',
              redFlag: '"You would get nothing" or a large termination fee. Work you paid for is work you should hold.',
            },
          ],
        },
      ],
    },
    {
      id: 'ownership',
      title: 'Ownership: code, infrastructure, accounts, IP (14–20)',
      summary: 'The section to read twice. Ownership is either concrete or it is marketing.',
      blocks: [
        {
          checklist: [
            {
              n: 14,
              q: 'Who owns the code, in writing, and from what moment?',
              why: 'In many jurisdictions the author holds copyright by default unless the contract assigns it. "You own it" in a sales call is not an assignment clause.',
              redFlag: 'Ownership transferring only on final payment, or a licence to use rather than an assignment of ownership.',
            },
            {
              n: 15,
              q: 'Whose accounts hold the hosting, the domain and the database?',
              why: 'Code ownership is worthless if your product runs on someone else\'s infrastructure account. This is the most common practical lock-in, and it is rarely malicious — it is just convenient for them.',
              redFlag: 'Everything on the agency\'s accounts, billed through them, "for simplicity".',
            },
            {
              n: 16,
              q: 'Do you use any proprietary framework, template or component library of your own?',
              why: 'A private framework means only they can maintain your product, and it will not be visible to you until you try to hire someone else.',
              redFlag: 'Yes, combined with a licence rather than ownership of those parts. Open-source libraries are fine and normal; private ones are a trap.',
            },
            {
              n: 17,
              q: 'Do I get the full commit history, or a final export?',
              why: 'History is how a new developer understands why the code is the way it is. A single "initial commit" containing everything destroys months of context and often hides who really wrote it.',
              redFlag: 'A zip file, a single squashed commit, or "we\'ll push it at the end".',
            },
            {
              n: 18,
              q: 'Who holds the API keys and secrets at the end of the project?',
              why: 'Credentials created under their accounts are credentials you cannot rotate, and a security exposure that outlives the relationship.',
              redFlag: 'Keys created under personal accounts, or shared credentials in a document nobody can revoke.',
            },
            {
              n: 19,
              q: 'What licences are the third-party components under?',
              why: 'Some open-source licences carry obligations that matter for a commercial product; some commercial components carry per-seat fees that arrive after launch.',
              redFlag: 'They do not know. It is a two-minute check and a professional should have done it.',
            },
            {
              n: 20,
              q: 'If I ended this relationship tomorrow, what would stop working?',
              why: 'The single best summary question in the list. The correct answer is "nothing, except further changes."',
              redFlag: 'Anything else. Hosting, monitoring, a licence, an integration keyed to their account — each one is a dependency you did not know you were buying.',
            },
          ],
        },
      ],
    },
    {
      id: 'who-works',
      title: 'Who actually does the work (21–25)',
      summary: 'The gap between who sells the project and who builds it.',
      blocks: [
        {
          checklist: [
            {
              n: 21,
              q: 'Who exactly writes the code? Name them.',
              why: 'You are buying a specific person\'s judgement. In many agencies the person in the sales meeting is not the person who builds, and the gap between them is the whole risk.',
              redFlag: 'Roles instead of names, or "one of our senior developers".',
            },
            {
              n: 22,
              q: 'Will any part of this be subcontracted or offshored?',
              why: 'Not disqualifying — but it changes the communication chain, the time zones and the accountability, and you should know before rather than after.',
              redFlag: 'Evasion. Find out now, or find out from a commit history later.',
            },
            {
              n: 23,
              q: 'How many other projects will that person be on during mine?',
              why: 'A developer split across four projects is not giving you a quarter of their attention — context switching costs more than that.',
              redFlag: 'No answer, or a number above two.',
            },
            {
              n: 24,
              q: 'Can I see code that this person wrote themselves?',
              why: 'Even if you cannot read it, you can have someone else read it, and the willingness to show it is signal on its own.',
              redFlag: 'Only polished case studies and screenshots. Every developer has something they can show.',
            },
            {
              n: 25,
              q: 'What happens if that person is ill, or leaves mid-project?',
              why: 'A real risk with solo operators and small teams, and one worth pricing rather than pretending away.',
              redFlag: 'No plan at all — or, from a solo builder, refusing to acknowledge it is a risk you are taking.',
            },
          ],
        },
      ],
    },
    {
      id: 'technical',
      title: 'Technical choices and lock-in (26–31)',
      summary: 'Questions you can ask usefully even if you cannot evaluate the answer yourself.',
      blocks: [
        {
          checklist: [
            {
              n: 26,
              q: 'What stack are you using, and why that one for my case?',
              why: 'The second half matters. A good answer connects a technical choice to something specific about your product; a weak one describes what they always use.',
              redFlag: 'A stack chosen because it is what they know, presented as if it were chosen for you.',
            },
            {
              n: 27,
              q: 'Is this real code, or a no-code or low-code builder?',
              why: 'Both are legitimate, and they carry completely different futures. You need to know which one you are buying, and it is not always volunteered.',
              redFlag: 'Vagueness about the platform, or a price that only makes sense if it is no-code while the pitch implies custom software.',
            },
            {
              n: 28,
              q: 'If usage were a hundred times larger than expected, what breaks first?',
              why: 'A genuinely experienced builder knows the answer and will name a specific bottleneck. It also reveals whether they have run anything in production.',
              redFlag: '"It scales" with no specifics. Everything scales until a particular thing does not.',
            },
            {
              n: 29,
              q: 'What third-party services will I depend on, and what do they cost monthly?',
              why: 'Your running costs are decided during the build, by someone who is not paying them.',
              redFlag: 'No list, or no idea of the monthly total. Ask for the figure at your expected usage and at ten times that.',
            },
            {
              n: 30,
              q: 'How hard would it be for another developer to take this over?',
              why: 'You are asking them to argue against their own indispensability, which is exactly why the answer is informative.',
              redFlag: 'Discomfort, or an answer implying it would be difficult. A good builder is proud that it would be easy.',
            },
            {
              n: 31,
              q: 'What decisions are you making now that would be expensive to reverse later?',
              why: 'Separates people who think in terms of consequences from people who think in terms of tasks. The database model and the auth approach should appear in the answer.',
              redFlag: '"Nothing is hard to change." Some things always are, and the data model is usually one of them.',
            },
          ],
        },
      ],
    },
    {
      id: 'process',
      title: 'Process and communication (32–36)',
      summary: 'How you find out something is wrong — early, rather than at the end.',
      blocks: [
        {
          checklist: [
            {
              n: 32,
              q: 'What will I see, and when?',
              why: 'You want a working, deployed URL you can open yourself, on a stated rhythm. Screenshots and demo videos can be produced from work that does not function.',
              redFlag: 'A single demo at the end, or progress reported only as percentages.',
            },
            {
              n: 33,
              q: 'How do I reach you, and what is a realistic response time?',
              why: 'Set the expectation before you need it. Both directions — they will need answers from you fast too.',
              redFlag: 'A ticketing system with no named human, or a promise of instant availability that nobody can keep.',
            },
            {
              n: 34,
              q: 'When we disagree about whether something is a bug or a new request, how is that resolved?',
              why: 'This argument happens on nearly every project. Deciding the mechanism in advance costs nothing; deciding it during the argument costs the relationship.',
              redFlag: 'No mechanism, or unilateral classification by the provider.',
            },
            {
              n: 35,
              q: 'What decisions will you need from me, and how quickly?',
              why: 'On a fast project, a decision that waits three days is a project that slips three days. You need to know what will land on you and when.',
              redFlag: 'No expectation set, which usually means the delay will later be attributed to you.',
            },
            {
              n: 36,
              q: 'Where does the work live so that I can see it as it happens?',
              why: 'Repository access from day one is normal, cheap, and the strongest possible transparency signal.',
              redFlag: 'Access granted only at handover.',
            },
          ],
        },
      ],
    },
    {
      id: 'quality',
      title: 'Quality, testing and security (37–42)',
      summary: 'The work you are paying for that you will never see — until it fails.',
      blocks: [
        {
          checklist: [
            {
              n: 37,
              q: 'What is covered by automated tests, and what is not?',
              why: 'The honest answer is never "everything". You want tests concentrated where failure is expensive: payments, authentication, anything that writes or deletes data.',
              redFlag: '"Full test coverage" on a one-week build, or no tests at all on anything touching money.',
            },
            {
              n: 38,
              q: 'How are passwords, keys and credentials handled?',
              why: 'You cannot audit this yourself, but you can hear the difference between a considered answer and an improvised one.',
              redFlag: 'Secrets in the repository, credentials shared over email or chat, or no mention of a secret manager or environment variables.',
            },
            {
              n: 39,
              q: 'What is the backup plan, and have you ever tested a restore?',
              why: 'The second half is the real question. Untested backups fail at exactly the moment they are needed, and most people have never tried.',
              redFlag: 'Backups exist but have never been restored, or backups stored only in the same place as the data.',
            },
            {
              n: 40,
              q: 'When something breaks in production, how do you find out?',
              why: 'The answer should be a monitoring or error-tracking tool that alerts someone. The alternative is that your users are your monitoring.',
              redFlag: '"The client tells us."',
            },
            {
              n: 41,
              q: 'How is personal data handled, and where is it stored?',
              why: 'If you serve EU or UK users, this is a legal obligation that lands on you, not on your provider. Data location, retention and deletion should all have answers.',
              redFlag: 'No idea where the database physically is, or no ability to delete a user\'s data on request.',
            },
            {
              n: 42,
              q: 'What is your definition of done for a feature?',
              why: 'Done can mean "it works on my machine" or "it is deployed, tested, monitored and documented". The gap between those is weeks.',
              redFlag: 'Done means the code is written. Nothing is finished until it is running in production.',
            },
          ],
        },
      ],
    },
    {
      id: 'after',
      title: 'Launch, handover and life after (43–47)',
      summary: 'What happens on the day the project ends, and the month after.',
      blocks: [
        {
          checklist: [
            {
              n: 43,
              q: 'Walk me through launch day. What actually happens?',
              why: 'A specific answer — domain, DNS, deployment, monitoring, a check of the live flows — shows they have done it. A vague one shows they have not, recently.',
              redFlag: 'Launch treated as a formality, or as your responsibility.',
            },
            {
              n: 44,
              q: 'What documentation do I receive?',
              why: 'The minimum is a README that lets another developer run the project locally, plus documented environment variables and an architecture summary.',
              redFlag: 'None, or documentation offered as a paid extra.',
            },
            {
              n: 45,
              q: 'Will you walk my next developer through the codebase?',
              why: 'Tests whether they are planning for your independence or for your dependence. An hour of handover is cheap and enormously valuable.',
              redFlag: 'Reluctance, or a large fee for a conversation.',
            },
            {
              n: 46,
              q: 'What are the three things most likely to break in the first month?',
              why: 'Everyone who has shipped knows the answer for their own work. It is also the most generous thing a provider can tell you, so it doubles as a character test.',
              redFlag: '"Nothing." Something always breaks in the first month.',
            },
            {
              n: 47,
              q: 'If this were your own product, what would you do differently?',
              why: 'The closing question. It gives them permission to tell you the truth about your plan, and the answer is often worth more than the rest of the call.',
              redFlag: 'Flattery. Anyone with real experience has an opinion about what you should change.',
            },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'I am not technical. Can I really evaluate these answers?',
      a: 'Yes — because the questions are designed so that the shape of the answer carries the signal, not its technical content. Specific beats reassuring, volunteered downsides beat confidence, and "I would need to check" beats a fast wrong answer. You are assessing how someone thinks, which you do every day in every other part of your business.',
    },
    {
      q: 'Which questions matter most if I only ask a few?',
      a: 'Numbers 1 (describe my product back to me), 9 (who pays for an over-run), 11 (what is not included), 20 (what stops working if I leave) and 21 (who writes the code). Those five surface most of the risk in about ten minutes.',
    },
    {
      q: 'Is it rude to ask a provider all of this?',
      a: 'No, and the reaction is itself data. You are about to hand someone a significant amount of money for something you cannot inspect. Any professional expects diligence; only someone with a problem finds it offensive.',
    },
    {
      q: 'What should a V1 cost, so I know if a quote is reasonable?',
      a: `Market ranges in 2026: roughly $20,000–50,000 with a senior freelancer, $60,000–250,000 with a classic agency, and $${usd} fixed for a Khufu Sprint V1 delivered in ${site.v1Days} days. A quote far below the range usually means no-code, offshore juniors, or a scope that will grow after signature.`,
    },
    {
      q: 'How does Khufu answer these questions?',
      a: `Fixed price agreed before the work starts, and an over-run is the agency's cost. Adrien De Coster writes the code personally on every sprint. The repository sits on your organisation from day one with full history, and every infrastructure account is in your name. If the relationship ended tomorrow, nothing would stop working except further changes.`,
    },
  ],
  cta: {
    title: 'Ask me these 47 questions',
    body: `That is a genuine invitation — the list was written to be answered. Sprint V1: a SaaS or mobile app scoped, built and shipped in ${site.v1Days} days for a fixed $${usd}, with the repository yours on day 8.`,
  },
}
