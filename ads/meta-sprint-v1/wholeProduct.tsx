/**
 * Variant B — « Une app, en production », 4:5 (Facebook / Instagram feed).
 *
 * The answer to « a web product doesn't fit a vertical ad »: lead with the products
 * that ARE vertical. Hive TCG and Labyrinth are phone apps, so their captures fill a
 * portrait frame whole, with nothing to crop and nothing to compose around.
 *
 * Hook: the landing's own negation, immediately followed by what it is (cmu4idzs).
 */

import React from 'react'
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion'
import { C, CAPTURES, FONT, Ground, LiveBadge, OfferCard, PhoneCarousel, Rise, type Capture } from './kit'

const HOOK = 78
const PRODUCT = 150
const OFFER = 135

export const WHOLE_PRODUCT_FRAMES = HOOK + PRODUCT * 2 + OFFER

function Hook(): React.ReactElement {
  const frame = useCurrentFrame()
  const neg = interpolate(frame, [0, 6, 14, 20], [0, 1, 1, 1], { extrapolateRight: 'clamp' })
  const neg2 = interpolate(frame, [6, 12], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const pos = interpolate(frame, [18, 26], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const dim = interpolate(frame, [18, 26], [1, 0.45], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const line = (text: string, o: number, color: string, size: number): React.ReactElement => (
    <div
      style={{
        fontFamily: FONT.display,
        fontSize: size,
        lineHeight: 1.04,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        color,
        opacity: o,
        transform: `translateY(${(1 - o) * 24}px)`,
      }}
    >
      {text}
    </div>
  )
  return (
    <Ground color={C.paper}>
      <AbsoluteFill style={{ justifyContent: 'center', padding: '0 80px', gap: 8 }}>
        <div style={{ opacity: dim }}>
          {line('Pas une maquette.', neg, C.ink, 96)}
          {line('Pas une démo.', neg2, C.ink, 96)}
        </div>
        <div style={{ marginTop: 34 }}>{line('Une app,', pos, C.accent, 124)}</div>
        {line('en production.', pos, C.accent, 124)}
      </AbsoluteFill>
    </Ground>
  )
}

function Product({
  name,
  tagline,
  captures,
}: {
  name: string
  tagline: string
  captures: readonly Capture[]
}): React.ReactElement {
  const frame = useCurrentFrame()
  // Hold each screen, then cross-fade over 8 frames to the next one.
  const hold = PRODUCT / captures.length
  const at = captures.length === 1 ? 0 : interpolate(frame % hold, [hold - 8, hold], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) + Math.floor(frame / hold)
  return (
    <Ground color={C.paper2}>
      <AbsoluteFill style={{ flexDirection: 'row', alignItems: 'center', padding: '0 64px', gap: 56 }}>
        <Rise distance={80}>
          <PhoneCarousel captures={captures} height={1170} at={Math.min(at, captures.length - 1)} />
        </Rise>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 26 }}>
          <Rise delay={6}>
            <LiveBadge size={28} />
          </Rise>
          <Rise delay={10}>
            <div style={{ fontFamily: FONT.display, fontSize: 66, lineHeight: 1, fontWeight: 700, color: C.ink, letterSpacing: '-0.02em' }}>
              {name}
            </div>
          </Rise>
          <Rise delay={14}>
            <div style={{ fontSize: 36, lineHeight: 1.32, color: C.ink2 }}>{tagline}</div>
          </Rise>
          <Rise delay={20}>
            <div style={{ fontSize: 30, color: C.muted, fontWeight: 500, marginTop: 10 }}>Construit et opéré par khufu.</div>
          </Rise>
        </div>
      </AbsoluteFill>
    </Ground>
  )
}

export function WholeProduct({ price }: { price: string }): React.ReactElement {
  return (
    <AbsoluteFill style={{ background: C.paper }}>
      <Sequence from={0} durationInFrames={HOOK}>
        <Hook />
      </Sequence>
      <Sequence from={HOOK} durationInFrames={PRODUCT}>
        <Product
          name="Hive TCG"
          tagline="Le jeu de cartes à collectionner qui se joue sur une ruche."
          captures={[CAPTURES.hiveMatch, CAPTURES.hiveCollection, CAPTURES.hiveBooster, CAPTURES.hiveHome]}
        />
      </Sequence>
      <Sequence from={HOOK + PRODUCT} durationInFrames={PRODUCT}>
        <Product
          name="Labyrinth"
          tagline="Pirate Treasure — le labyrinthe où chaque chemin cache un trésor."
          captures={[CAPTURES.labyrinthRun, CAPTURES.labyrinthLevels, CAPTURES.labyrinthShop]}
        />
      </Sequence>
      <Sequence from={HOOK + PRODUCT * 2} durationInFrames={OFFER}>
        <OfferCard price={price} scale={0.86} />
      </Sequence>
    </AbsoluteFill>
  )
}
