/**
 * Base A — « Le compte à rebours », rendered 9:16 AND 4:5.
 *
 * The body is TIME, the one thing a still image cannot show: the counter runs
 * through the week, and — pass 2, Adrien: « mérite l'animation qu'on a dans le
 * hero de /sprint-v1, y a la place en bas » — the landing's own build sequence
 * plays in the bottom of the frame, synchronised so its go-live beat lands on
 * day 7. Every step is the landing's own timeline copy (sprintLanding.ts →
 * timeline), word for word.
 *
 * ⛔ THE WEEK AND THE PRODUCTS ARE TWO SCENES, and only the week has a number.
 * Decision cmuwqh6x: one delay per creative, the offer's 7 days; the products
 * shown after it carry no duration at all — they prove khufu ships, not how fast.
 */

import React from 'react'
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion'
import { Browser, C, CAPTURES, FONT, Ground, LiveBadge, OfferCard, Rise, useEnter, useFrame, type AdProps } from './kit'
import { HOOK_FRAMES, Hook } from './hooks'
import { LandingBuild, landingBuildHeight } from './landingBuild'

const STEPS = [
  { day: '1', plural: false, when: 'lundi matin', title: 'Fondations', detail: 'Le soir, le produit existe et tourne.' },
  { day: '2–3', plural: true, when: 'mardi, mercredi', title: 'Le cœur du produit', detail: 'Les parcours clés, de bout en bout.' },
  { day: '4', plural: false, when: 'jeudi', title: 'V1 complète, en ligne', detail: 'À une adresse où vous la manipulez.' },
  { day: '5', plural: false, when: 'vendredi', title: 'Recette', detail: 'Vous testez, toute la journée.' },
  { day: '6–7', plural: true, when: 'samedi, dimanche', title: 'Correctifs, puis production', detail: 'Dimanche soir : en ligne.' },
] as const
/** How many of the seven days are lit once each step has landed. */
const UPTO = [1, 3, 4, 5, 7]

const WEEK = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

const STEP = 60
const WEEK_LEN = STEPS.length * STEP + 36
const CLAIM = 84
const PROOF = 150
const OFFER = 135

export const COUNTDOWN_FRAMES = HOOK_FRAMES + WEEK_LEN + CLAIM + PROOF + OFFER

/**
 * The landing's clock (ms) for each week frame. Its own story: platform from
 * 0.35s (days 1–3), app at 1.6s (day 4), site at 1.95s (day 5), the system tiles
 * from 2.35s and the go-live at 4.15–4.6s (days 6–7). Mapped piecewise onto our
 * steps, so the drawing and the counter tell the same day at the same time.
 */
const BUILD_CLOCK = { frames: [0, STEP, STEP * 2, STEP * 3, STEP * 4, STEP * 4 + 70], ms: [250, 1150, 1650, 2000, 2350, 5000] }

function Week(): React.ReactElement {
  const frame = useCurrentFrame()
  const { tall, w, top } = useFrame()
  const idx = Math.min(STEPS.length - 1, Math.floor(frame / STEP))
  const step = STEPS[idx]
  const local = frame - idx * STEP
  // The counter rolls up on every step change.
  const roll = interpolate(local, [0, 8], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const prevUpto = idx === 0 ? 0 : UPTO[idx - 1]
  const fill = interpolate(local, [0, 14], [prevUpto, UPTO[idx]], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const buildMs = interpolate(frame, BUILD_CLOCK.frames, BUILD_CLOCK.ms, { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const buildIn = useEnter(0, 20)

  const k = tall ? 1 : 0.78
  const buildW = tall ? 900 : 800
  // A fixed place, so the drawing does not jump when a step title takes two lines.
  const buildTop = tall ? 1100 : 660
  return (
    <Ground color={C.paper}>
      <AbsoluteFill style={{ padding: `${tall ? top - 40 : 56}px ${tall ? 84 : 72}px 0`, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 36 * k + 4, fontWeight: 600, color: C.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Sprint V1 · la semaine
        </div>

        <div style={{ marginTop: 26 * k, height: 250 * k, overflow: 'hidden' }}>
          <div style={{ transform: `translateY(${roll * 120}px)`, opacity: 1 - roll, display: 'flex', alignItems: 'baseline', gap: 26 }}>
            <div style={{ fontFamily: FONT.display, fontSize: 58 * k, fontWeight: 700, color: C.muted, letterSpacing: '0.04em' }}>
              {step.plural ? 'JOURS' : 'JOUR'}
            </div>
            <div style={{ fontFamily: FONT.display, fontSize: 240 * k, lineHeight: 1, fontWeight: 700, color: C.ink, letterSpacing: '-0.05em' }}>
              {step.day}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 14 * k }}>
          {WEEK.map((d, i) => {
            const on = Math.max(0, Math.min(1, fill - i))
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 100 * k,
                  borderRadius: 20,
                  background: on > 0 ? `rgba(76,48,255,${0.15 + 0.85 * on})` : C.paper2,
                  border: `3px solid ${on > 0 ? C.accent : C.line}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT.display,
                  fontSize: 42 * k,
                  fontWeight: 700,
                  color: on > 0.5 ? '#fff' : C.muted,
                }}
              >
                {d}
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: 44 * k, opacity: 1 - roll, transform: `translateY(${roll * 30}px)` }}>
          <div style={{ fontSize: 34 * k, color: C.muted, fontWeight: 500 }}>{step.when}</div>
          <div style={{ fontFamily: FONT.display, fontSize: 74 * k, lineHeight: 1.05, fontWeight: 700, color: C.ink, marginTop: 8, letterSpacing: '-0.02em' }}>
            {step.title}
          </div>
          <div style={{ fontSize: 42 * k, color: C.ink2, marginTop: 12 * k, lineHeight: 1.3 }}>{step.detail}</div>
        </div>

        {/* The landing's hero, in the room left at the bottom. ⚠️ Its own seven-step
            rail is hidden (landingHero.css): the counter's week row above is the
            rail here, and two would be the « doublon » Adrien already removed once. */}
        <div
          style={{
            position: 'absolute',
            top: buildTop,
            left: (w - buildW) / 2,
            height: landingBuildHeight(buildW),
            opacity: buildIn,
            transform: `translateY(${(1 - buildIn) * 40}px)`,
          }}
        >
          <LandingBuild timeMs={buildMs} width={buildW} />
        </div>
      </AbsoluteFill>
    </Ground>
  )
}

/** cmu4idzs: the negation is never left alone — the same screen says what it is. */
function Claim(): React.ReactElement {
  const { tall } = useFrame()
  return (
    <Ground color={C.paper}>
      <AbsoluteFill style={{ justifyContent: 'center', padding: '0 84px', gap: 26 }}>
        <Rise>
          <div style={{ fontFamily: FONT.display, fontSize: tall ? 74 : 64, lineHeight: 1.1, fontWeight: 700, color: C.muted }}>
            Pas une maquette, pas une démo :
          </div>
        </Rise>
        <Rise delay={14}>
          <div style={{ fontFamily: FONT.display, fontSize: tall ? 112 : 96, lineHeight: 1.02, fontWeight: 700, color: C.ink, letterSpacing: '-0.03em' }}>
            un vrai produit, <span style={{ color: C.accent }}>complet.</span>
          </div>
        </Rise>
      </AbsoluteFill>
    </Ground>
  )
}

/**
 * khufu's own products, in production — the process shown in act, NOT a timing.
 * ⛔ No duration next to any of them (decision cmuwqh6x): the week above is the
 * offer's, and these are here to prove khufu ships finished products. No client
 * name either (cmtt6x3k).
 */
const PROOFS = [
  { capture: CAPTURES.onestoreSite, domain: 'onestore.link', name: 'OneStore.link' },
  { capture: CAPTURES.traqioSite, domain: 'traqio.app', name: 'Traqio' },
] as const

function Proof(): React.ReactElement {
  const { tall, top } = useFrame()
  const browserW = tall ? 760 : 460
  return (
    <Ground color={C.paper2}>
      <AbsoluteFill style={{ padding: `${tall ? top : 70}px 60px 0`, alignItems: 'center', gap: tall ? 40 : 44 }}>
        <Rise>
          <div style={{ fontFamily: FONT.display, fontSize: tall ? 80 : 68, lineHeight: 1.05, fontWeight: 700, color: C.ink, textAlign: 'center', letterSpacing: '-0.02em' }}>
            Ce qu’on construit,
            <br />
            <span style={{ color: C.accent }}>en production aujourd’hui.</span>
          </div>
        </Rise>
        <div style={{ display: 'flex', flexDirection: tall ? 'column' : 'row', gap: tall ? 34 : 28, alignItems: 'center' }}>
          {PROOFS.map((p, i) => (
            <Rise key={p.name} delay={8 + i * 10} distance={80}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'flex-start', width: browserW }}>
                <Browser capture={p.capture} width={browserW} domain={p.domain} />
                <div style={{ fontFamily: FONT.display, fontSize: tall ? 44 : 36, fontWeight: 700, color: C.ink, lineHeight: 1.1 }}>
                  {p.name}
                </div>
              </div>
            </Rise>
          ))}
        </div>
        <Rise delay={34}>
          <LiveBadge size={tall ? 34 : 28} />
        </Rise>
      </AbsoluteFill>
    </Ground>
  )
}

export function Countdown({ price, hook }: AdProps): React.ReactElement {
  let t = 0
  const at = (len: number): { from: number; durationInFrames: number } => {
    const s = { from: t, durationInFrames: len }
    t += len
    return s
  }
  return (
    <AbsoluteFill style={{ background: C.paper }}>
      <Sequence {...at(HOOK_FRAMES)}>
        <Hook base="a" hook={hook} price={price} />
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
