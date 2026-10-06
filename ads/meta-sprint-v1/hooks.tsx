/**
 * The nine openings — three per base. Pass 2's one real subject.
 *
 * ⛔ THE TEST EVERY HOOK HERE MUST PASS (Adrien, pass 1 review: « aucun a un hook
 * qui fait comprendre ce qu'on fait/vend »): a stranger who sees ONLY the first
 * two seconds understands what is for sale — someone builds YOUR app / YOUR SaaS.
 * Pass 1's « Pas un CTO. Une équipe. » and « Lundi matin, votre produit n'existe
 * pas » both failed it: they set a scene and left the product unnamed. So every
 * hook below names the deliverable (« votre app », « votre SaaS ») and who makes
 * it, and its last line is on screen by frame ~22 (0.7 s).
 *
 * ⛔ ONE DELAY, ONE PLACE (decision cmuwqh6x, which replaces cmuwptw0 and
 * cmuwq9uy). Adrien: « on vend un process, pas un "ça dépend" ». The only duration
 * in a creative is the offer's 7 days — on the offer card, and in base A's week
 * which IS the offer's process. No product ever carries a duration: not
 * OneStore.link's real day, not Traqio's three, not Clokizi's or HerbaCRM's three
 * weeks. And only ONE hook plays speed as its angle (A1, in offer form); the eight
 * others sell on another axis — the process, the fixed price, real products, a
 * complete product, ownership, the buyer's shortlist.
 *
 * Rules carried by the copy (khufu HQ decisions):
 *   - cmu4idzs — a negation is never left alone: C3's crossed-out options and A2's
 *     « pas un ça dépend » are answered on the same screen.
 *   - cmu0fqj7 — no figure but the week and the price, no testimonial, no logo.
 *   - cmtt6x3k — A3 carries the price, in the ONE currency of the cut (`price`).
 *   - cmu0fugh — no date anywhere.
 */

import React from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'
import { C, CAPTURES, Chip, FONT, Ground, Phone, useFrame, type Capture } from './kit'

/** Every hook is this long: the first 2.5 s are the only thing that differs inside a base. */
export const HOOK_FRAMES = 75

/** The plain-text version of each hook, for the contact sheet and the report. */
export const HOOK_TEXT: Record<'a' | 'b' | 'c', Record<1 | 2 | 3, string>> = {
  a: {
    1: 'On développe votre app en 7 jours.',
    2: 'On construit votre app. Un process, pas un « ça dépend ».',
    3: 'On construit votre app. {price}, prix fixe. Périmètre signé avant de commencer.',
  },
  b: {
    1: 'On construit votre app. Comme celle-ci : en production.',
    2: 'Ces apps, c’est nous. La vôtre est la prochaine.',
    3: 'Une idée d’app ? On la construit. On la met en ligne.',
  },
  c: {
    1: 'Votre SaaS, livré complet : plateforme, app, site, paiements, hébergement.',
    2: 'On code votre SaaS. Le code et les comptes sont à vous.',
    3: 'Freelance ? Agence ? No-code ? Une équipe code votre SaaS.',
  },
}

/** 0→1 over a few frames from `at`. */
function useIn(at: number, len = 7): number {
  const frame = useCurrentFrame()
  return interpolate(frame, [at, at + len], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
}

/** One display line that lands with a short rise. */
function Line({
  at,
  size,
  color,
  children,
  weight = 700,
}: {
  at: number
  size: number
  color: string
  children: React.ReactNode
  weight?: number
}): React.ReactElement {
  const p = useIn(at)
  return (
    <div
      style={{
        fontFamily: FONT.display,
        fontSize: size,
        lineHeight: 1.03,
        fontWeight: weight,
        letterSpacing: '-0.03em',
        color,
        opacity: p,
        transform: `translateY(${(1 - p) * 26}px)`,
      }}
    >
      {children}
    </div>
  )
}

const Accent = ({ children, color = C.accent }: { children: React.ReactNode; color?: string }): React.ReactElement => (
  <span style={{ color }}>{children}</span>
)

/** A seven-segment rail that fills during the hook — the week, drawn. */
function WeekRail({ at, color, track }: { at: number; color: string; track: string }): React.ReactElement {
  const frame = useCurrentFrame()
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {Array.from({ length: 7 }, (_, i) => {
        const on = interpolate(frame, [at + i * 4, at + i * 4 + 4], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
        return (
          <div key={i} style={{ flex: 1, height: 22, borderRadius: 11, background: track, overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', background: color, transform: `scaleX(${on})`, transformOrigin: 'left' }} />
          </div>
        )
      })}
    </div>
  )
}

function Stack({ children, gap = 10, justify = 'center' }: { children: React.ReactNode; gap?: number; justify?: React.CSSProperties['justifyContent'] }): React.ReactElement {
  const { top, bottom } = useFrame()
  return (
    <AbsoluteFill style={{ justifyContent: justify, padding: `${top}px 84px ${bottom}px`, gap }}>
      {children}
    </AbsoluteFill>
  )
}

// ---------------------------------------------------------------- A — the week

function A1(): React.ReactElement {
  const { tall } = useFrame()
  const size = tall ? 142 : 124
  return (
    <Ground color={C.accent}>
      <Stack gap={8}>
        <Line at={0} size={size} color="rgba(255,255,255,0.8)">On développe</Line>
        <Line at={5} size={size} color="#fff">votre app</Line>
        <Line at={10} size={size} color="#fff">en 7 jours.</Line>
        <div style={{ marginTop: 56 }}>
          <WeekRail at={12} color="#fff" track="rgba(255,255,255,0.22)" />
        </div>
      </Stack>
    </Ground>
  )
}

/** The process angle — Adrien's own line, answered on the same screen (cmu4idzs). */
function A2(): React.ReactElement {
  const { tall } = useFrame()
  const steps = ['Cadrage', 'Build', 'Recette', 'Production']
  return (
    <Ground color={C.paper}>
      <Stack gap={8}>
        <Line at={0} size={tall ? 116 : 98} color={C.ink}>On construit</Line>
        <Line at={4} size={tall ? 116 : 98} color={C.ink}>votre app.</Line>
        <div style={{ height: tall ? 50 : 30 }} />
        <Line at={10} size={tall ? 80 : 66} color={C.accent}>Un process,</Line>
        <Line at={13} size={tall ? 80 : 66} color={C.muted}>pas un « ça dépend ».</Line>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: tall ? 50 : 30 }}>
          {steps.map((step, i) => (
            <Pop key={step} at={14 + i * 3}>
              <Chip size={tall ? 38 : 32}>
                {i + 1}. {step}
              </Chip>
            </Pop>
          ))}
        </div>
      </Stack>
    </Ground>
  )
}

/** The price angle — the one currency of the cut (cmtt6x3k). */
function A3({ price }: { price: string }): React.ReactElement {
  const { tall } = useFrame()
  return (
    <Ground color={C.ink}>
      <Stack gap={8}>
        <Line at={0} size={tall ? 116 : 98} color="#fff">On construit</Line>
        <Line at={4} size={tall ? 116 : 98} color="#fff">votre app.</Line>
        <div style={{ height: tall ? 70 : 44 }} />
        <Line at={10} size={tall ? 150 : 128} color="#fff">{price}</Line>
        <Line at={13} size={tall ? 70 : 60} color="#9d8bff">prix fixe.</Line>
        <div style={{ height: tall ? 30 : 18 }} />
        <Line at={17} size={tall ? 46 : 40} color="rgba(255,255,255,0.7)" weight={500}>Périmètre signé avant de commencer.</Line>
      </Stack>
    </Ground>
  )
}

// ------------------------------------------------------------- B — the products

/** A phone that rises in — the products are the proof B is built on. */
function RisingPhone({ capture, height, at, label }: { capture: Capture; height: number; at: number; label?: string }): React.ReactElement {
  const p = useIn(at, 10)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, opacity: p, transform: `translateY(${(1 - p) * 80}px)` }}>
      <Phone capture={capture} height={height} />
      {label && <div style={{ fontFamily: FONT.display, fontSize: 40, fontWeight: 700, color: C.ink }}>{label}</div>}
    </div>
  )
}

function B1(): React.ReactElement {
  const { tall } = useFrame()
  const size = tall ? 116 : 74
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Line at={0} size={size} color={C.ink}>On construit</Line>
      <Line at={4} size={size} color={C.ink}>votre app.</Line>
      <div style={{ height: 22 }} />
      <Line at={12} size={size * 0.62} color={C.accent}>Comme celle-ci :</Line>
      <Line at={14} size={size * 0.62} color={C.accent}>en production.</Line>
    </div>
  )
  return (
    <Ground color={C.paper2}>
      {tall ? (
        <Stack gap={60} justify="flex-start">
          {text}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <RisingPhone capture={CAPTURES.clokiziApp} height={760} at={3} />
          </div>
        </Stack>
      ) : (
        <AbsoluteFill style={{ flexDirection: 'row', alignItems: 'center', padding: '0 64px', gap: 48 }}>
          <div style={{ flex: 1 }}>{text}</div>
          <RisingPhone capture={CAPTURES.clokiziApp} height={1040} at={3} />
        </AbsoluteFill>
      )}
    </Ground>
  )
}

/** Real products, no duration next to them (cmuwqh6x): they prove khufu ships, not how fast. */
function B2(): React.ReactElement {
  const { tall } = useFrame()
  const size = tall ? 104 : 86
  const phoneH = tall ? 680 : 600
  return (
    <Ground color={C.paper}>
      <Stack gap={tall ? 50 : 30} justify="flex-start">
        <Line at={0} size={size} color={C.ink}>Ces apps, c’est nous.</Line>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 44 }}>
          <RisingPhone capture={CAPTURES.clokiziApp} height={phoneH} at={2} label="Clokizi" />
          <RisingPhone capture={CAPTURES.herbacrmApp} height={phoneH} at={6} label="HerbaCRM" />
        </div>
        <Line at={12} size={tall ? 84 : 70} color={C.accent}>La vôtre est la prochaine.</Line>
      </Stack>
    </Ground>
  )
}

function B3(): React.ReactElement {
  const { tall } = useFrame()
  const size = tall ? 118 : 96
  return (
    <Ground color={C.accent}>
      <Stack gap={8}>
        <Line at={0} size={size} color="#fff">Une idée</Line>
        <Line at={4} size={size} color="#fff">d’app ?</Line>
        <div style={{ height: tall ? 70 : 44 }} />
        <Line at={12} size={size * 0.7} color="rgba(255,255,255,0.85)">On la construit.</Line>
        <Line at={15} size={size * 0.7} color="#fff">On la met en ligne.</Line>
      </Stack>
    </Ground>
  )
}

// ------------------------------------------------------------- C — the web band

/** The completeness angle: a product, not a page — the surfaces and the system under them. */
function C1(): React.ReactElement {
  const { tall } = useFrame()
  const parts = ['Plateforme web', 'App mobile', 'Site vitrine', 'Paiements', 'Comptes', 'E-mails', 'Hébergement']
  return (
    <Ground color={C.paper}>
      <Stack gap={8}>
        <Line at={0} size={tall ? 124 : 104} color={C.ink}>Votre SaaS,</Line>
        <Line at={4} size={tall ? 124 : 104} color={C.accent}>livré complet.</Line>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: tall ? 60 : 36 }}>
          {parts.map((part, i) => (
            <Pop key={part} at={8 + i * 2}>
              <Chip size={tall ? 42 : 36}>{part}</Chip>
            </Pop>
          ))}
        </div>
      </Stack>
    </Ground>
  )
}

/** The ownership angle — the offer card's own promise, brought forward. */
function C2(): React.ReactElement {
  const { tall } = useFrame()
  return (
    <Ground color={C.accent}>
      <Stack gap={8}>
        <Line at={0} size={tall ? 124 : 104} color="#fff">On code</Line>
        <Line at={4} size={tall ? 124 : 104} color="#fff">votre SaaS.</Line>
        <div style={{ height: tall ? 70 : 44 }} />
        <Line at={11} size={tall ? 84 : 70} color="rgba(255,255,255,0.85)">Le code et les comptes</Line>
        <Line at={14} size={tall ? 84 : 70} color="#fff">sont à vous.</Line>
      </Stack>
    </Ground>
  )
}

function Pop({ at, children }: { at: number; children: React.ReactNode }): React.ReactElement {
  const p = useIn(at, 8)
  return <div style={{ opacity: p, transform: `scale(${0.94 + 0.06 * p})` }}>{children}</div>
}

/**
 * Adrien, pass 1: « "pas un CTO mais une équipe", je sais pas si c'est un bon
 * argument, CTO -> dev ? ou freelance ? ». His buyer does not weigh a CTO hire
 * against khufu — he weighs a freelancer, an agency or a no-code tool. Pass 2 wrote
 * one hook per foil and kept the one that names all three: « Pas un freelance »
 * alone read as a dig at freelancers, « plus vite qu'une agence » alone made a
 * comparison nobody can check, « plus loin que le no-code » alone sold against a
 * tool the buyer may already like. Together they are the buyer's own shortlist,
 * crossed out and answered on the same screen (cmu4idzs).
 */
function C3(): React.ReactElement {
  const { tall } = useFrame()
  const foils = ['Freelance ?', 'Agence ?', 'No-code ?']
  const frame = useCurrentFrame()
  return (
    <Ground color={C.ink}>
      <Stack gap={6}>
        {foils.map((f, i) => {
          const strike = interpolate(frame, [4 + i * 4, 10 + i * 4], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
          return (
            <Line key={f} at={i * 3} size={tall ? 104 : 88} color="rgba(255,255,255,0.5)">
              <span style={{ position: 'relative', display: 'inline-block' }}>
                {f}
                <span style={{ position: 'absolute', left: -6, right: -6, top: '52%', height: 10, borderRadius: 5, background: '#ff5c5c', transform: `scaleX(${strike})`, transformOrigin: 'left' }} />
              </span>
            </Line>
          )
        })}
        <div style={{ height: tall ? 60 : 36 }} />
        <Line at={18} size={tall ? 116 : 98} color="#fff">
          Une <Accent color="#9d8bff">équipe</Accent>
        </Line>
        <Line at={20} size={tall ? 116 : 98} color="#fff">code votre SaaS.</Line>
      </Stack>
    </Ground>
  )
}

export function Hook({ base, hook, price }: { base: 'a' | 'b' | 'c'; hook: 1 | 2 | 3; price: string }): React.ReactElement {
  switch (`${base}${hook}`) {
    case 'a1': return <A1 />
    case 'a2': return <A2 />
    case 'a3': return <A3 price={price} />
    case 'b1': return <B1 />
    case 'b2': return <B2 />
    case 'b3': return <B3 />
    case 'c1': return <C1 />
    case 'c2': return <C2 />
    default: return <C3 />
  }
}
