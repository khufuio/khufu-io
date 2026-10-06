/**
 * Variant A — « Le compte à rebours », 9:16 (Reels, Stories).
 *
 * The hook is TIME, the one thing a still image cannot show: Monday the product does
 * not exist, the counter runs through the week, Sunday evening it is live. Every step
 * is the landing's own timeline copy (sprintLanding.ts → timeline), word for word.
 *
 * ⛔ THE WEEK AND THE PRODUCTS ARE TWO SEPARATE SCENES, ON PURPOSE. The products khufu
 * runs were NOT built in seven days (sprintLanding.ts: « NEVER IMPLY THESE WERE BUILT
 * IN SEVEN DAYS »). So day 7 lands on a sentence about the viewer's product, never on a
 * capture, and the captures only arrive afterwards, under their own heading, with no
 * duration anywhere near them.
 */

import React from 'react'
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion'
import { C, CAPTURES, FONT, Ground, LiveBadge, OfferCard, Phone, Rise, useEnter } from './kit'

const STEPS = [
  { day: '1', plural: false, when: 'lundi matin', title: 'Fondations', detail: 'Le soir, le produit existe et tourne.', upto: 1 },
  { day: '2–3', plural: true, when: 'mardi, mercredi', title: 'Le cœur du produit', detail: 'Les parcours clés, de bout en bout.', upto: 3 },
  { day: '4', plural: false, when: 'jeudi', title: 'V1 complète, en ligne', detail: 'À une adresse où vous la manipulez.', upto: 4 },
  { day: '5', plural: false, when: 'vendredi', title: 'Recette', detail: 'Vous testez, toute la journée.', upto: 5 },
  { day: '6–7', plural: true, when: 'samedi, dimanche', title: 'Correctifs, puis production', detail: 'Dimanche soir : en ligne.', upto: 7 },
] as const

const WEEK = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

export const HOOK = 66
export const STEP = 60
const WEEK_LEN = STEPS.length * STEP + 24
const CLAIM = 84
const PROOF = 165
const OFFER = 135

export const COUNTDOWN_FRAMES = HOOK + WEEK_LEN + CLAIM + PROOF + OFFER

function Hook(): React.ReactElement {
  const frame = useCurrentFrame()
  const lines = ['Lundi matin,', 'votre produit', 'n’existe pas.']
  return (
    <Ground color={C.accent}>
      <AbsoluteFill style={{ justifyContent: 'center', padding: '0 80px' }}>
        {lines.map((l, i) => {
          const p = interpolate(frame, [i * 8, i * 8 + 7], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
          return (
            <div
              key={l}
              style={{
                fontFamily: FONT.display,
                fontSize: 128,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: i === 2 ? '#fff' : 'rgba(255,255,255,0.78)',
                opacity: p,
                transform: `scale(${1.12 - 0.12 * p})`,
                transformOrigin: 'left center',
              }}
            >
              {l}
            </div>
          )
        })}
      </AbsoluteFill>
    </Ground>
  )
}

function Week(): React.ReactElement {
  const frame = useCurrentFrame()
  const idx = Math.min(STEPS.length - 1, Math.floor(frame / STEP))
  const step = STEPS[idx]
  const local = frame - idx * STEP
  // The counter rolls up on every step change.
  const roll = interpolate(local, [0, 8], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const prevUpto = idx === 0 ? 0 : STEPS[idx - 1].upto
  const fill = interpolate(local, [0, 14], [prevUpto, step.upto], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const done = idx === STEPS.length - 1 && local > 18
  return (
    <Ground color={C.paper}>
      <AbsoluteFill style={{ padding: '210px 84px 0', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 38, fontWeight: 600, color: C.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Sprint V1 · la semaine
        </div>

        <div style={{ marginTop: 70, height: 330, overflow: 'hidden' }}>
          <div
            style={{
              transform: `translateY(${roll * 120}px)`,
              opacity: 1 - roll,
              display: 'flex',
              alignItems: 'baseline',
              gap: 30,
            }}
          >
            <div style={{ fontFamily: FONT.display, fontSize: 64, fontWeight: 700, color: C.muted, letterSpacing: '0.04em' }}>
              {step.plural ? 'JOURS' : 'JOUR'}
            </div>
            <div style={{ fontFamily: FONT.display, fontSize: 300, lineHeight: 1, fontWeight: 700, color: C.ink, letterSpacing: '-0.05em' }}>
              {step.day}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
          {WEEK.map((d, i) => {
            const on = Math.max(0, Math.min(1, fill - i))
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 118,
                  borderRadius: 22,
                  background: on > 0 ? `rgba(76,48,255,${0.15 + 0.85 * on})` : C.paper2,
                  border: `3px solid ${on > 0 ? C.accent : C.line}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT.display,
                  fontSize: 46,
                  fontWeight: 700,
                  color: on > 0.5 ? '#fff' : C.muted,
                }}
              >
                {d}
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: 90, opacity: 1 - roll, transform: `translateY(${roll * 30}px)` }}>
          <div style={{ fontSize: 36, color: C.muted, fontWeight: 500 }}>{step.when}</div>
          <div style={{ fontFamily: FONT.display, fontSize: 80, lineHeight: 1.05, fontWeight: 700, color: C.ink, marginTop: 14, letterSpacing: '-0.02em' }}>
            {step.title}
          </div>
          <div style={{ fontSize: 46, color: C.ink2, marginTop: 22, lineHeight: 1.3 }}>{step.detail}</div>
        </div>

        {done && (
          <div style={{ marginTop: 60 }}>
            <Rise>
              <LiveBadge size={40} />
            </Rise>
          </div>
        )}
      </AbsoluteFill>
    </Ground>
  )
}

/** cmu4idzs: the negation is never left alone — the same sentence says what it is. */
function Claim(): React.ReactElement {
  return (
    <Ground color={C.paper}>
      <AbsoluteFill style={{ justifyContent: 'center', padding: '0 84px', gap: 26 }}>
        <Rise>
          <div style={{ fontFamily: FONT.display, fontSize: 74, lineHeight: 1.1, fontWeight: 700, color: C.muted }}>
            Pas une maquette, pas une démo :
          </div>
        </Rise>
        <Rise delay={14}>
          <div style={{ fontFamily: FONT.display, fontSize: 112, lineHeight: 1.02, fontWeight: 700, color: C.ink, letterSpacing: '-0.03em' }}>
            un vrai produit, <span style={{ color: C.accent }}>complet.</span>
          </div>
        </Rise>
      </AbsoluteFill>
    </Ground>
  )
}

/**
 * khufu's own products, in production. No duration, no « built in », no client name
 * (decision cmtt6x3k keeps Flatchr / Peach Farmer / Tarokai out of Sprint proof).
 */
function Proof(): React.ReactElement {
  const phones = [
    { capture: CAPTURES.hiveMatch, name: 'Hive TCG' },
    { capture: CAPTURES.labyrinthRun, name: 'Labyrinth' },
    { capture: CAPTURES.clokiziApp, name: 'Clokizi' },
  ]
  return (
    <Ground color={C.paper2}>
      <AbsoluteFill style={{ padding: '200px 60px 0', alignItems: 'center' }}>
        <Rise>
          <div style={{ fontFamily: FONT.display, fontSize: 70, lineHeight: 1.08, fontWeight: 700, color: C.ink, textAlign: 'center', letterSpacing: '-0.02em' }}>
            Ce que khufu fait déjà
            <br />
            tourner en production.
          </div>
        </Rise>
        <div style={{ display: 'flex', gap: 28, marginTop: 90, alignItems: 'flex-start' }}>
          {phones.map((p, i) => (
            <ProofPhone key={p.name} delay={10 + i * 7} {...p} />
          ))}
        </div>
        <Rise delay={40} style={{ marginTop: 70 }}>
          <LiveBadge size={36} />
        </Rise>
      </AbsoluteFill>
    </Ground>
  )
}

function ProofPhone({ capture, name, delay }: { capture: (typeof CAPTURES)[keyof typeof CAPTURES]; name: string; delay: number }): React.ReactElement {
  const p = useEnter(delay, 16)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26, opacity: Math.min(1, p * 1.5), transform: `translateY(${(1 - p) * 120}px)` }}>
      <Phone capture={capture} height={650} />
      <div style={{ fontFamily: FONT.display, fontSize: 40, fontWeight: 700, color: C.ink }}>{name}</div>
    </div>
  )
}

export function Countdown({ price }: { price: string }): React.ReactElement {
  let t = 0
  const at = (len: number): { from: number; durationInFrames: number } => {
    const s = { from: t, durationInFrames: len }
    t += len
    return s
  }
  return (
    <AbsoluteFill style={{ background: C.paper }}>
      <Sequence {...at(HOOK)}>
        <Hook />
      </Sequence>
      <Sequence {...at(WEEK_LEN)}>
        <Week />
      </Sequence>
      <Sequence {...at(CLAIM)}>
        <Claim />
      </Sequence>
      <Sequence {...at(PROOF)}>
        <Proof />
      </Sequence>
      <Sequence {...at(OFFER)}>
        <OfferCard price={price} />
      </Sequence>
    </AbsoluteFill>
  )
}
