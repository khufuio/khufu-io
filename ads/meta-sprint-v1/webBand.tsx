/**
 * Variant C — « Pas un CTO. Une équipe. », 9:16, the web products in a band.
 *
 * The other answer to the format objection: a 16:9 web capture enters the vertical
 * frame WHOLE, as a band across the middle, and the frame is filled by composition —
 * the product's name above, its companion app and its surfaces below. The vertical
 * is never obtained by cropping the product (cmu4iehk).
 *
 * Hook: the CTO angle the paid-test plan validated as a HOOK, not as the offer
 * (hq docs/khufu/ads-test-01.md §3.1). Negation first, then what it is (cmu4idzs).
 */

import React from 'react'
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion'
import { Browser, C, CAPTURES, Chip, FONT, Ground, LiveBadge, OfferCard, Phone, Rise, type Capture } from './kit'

const HOOK = 60
const SLIDE = 84
const ROLES = 90
const OFFER = 135

type Slide = {
  name: string
  tagline: string
  web: Capture
  domain: string
  app?: Capture
  surfaces: readonly string[]
}

const SLIDES: readonly Slide[] = [
  {
    name: 'Clokizi',
    tagline: 'Gérez vos équipes terrain en toute simplicité.',
    web: CAPTURES.clokiziWeb,
    domain: 'app.clokizi.com',
    app: CAPTURES.clokiziApp,
    surfaces: ['Plateforme web', 'App mobile', 'Site vitrine'],
  },
  {
    name: 'HerbaCRM',
    tagline: 'Le CRM des coachs bien-être, nutrition et fitness.',
    web: CAPTURES.herbacrmWeb,
    domain: 'app.herbacrm.com',
    app: CAPTURES.herbacrmApp,
    surfaces: ['Plateforme web', 'App mobile', 'Site vitrine'],
  },
  {
    name: 'Traqio',
    tagline: 'L’attribution d’installs et le ROAS, sans boîte noire.',
    web: CAPTURES.traqioWeb,
    domain: 'traqio.app',
    surfaces: ['Plateforme web', 'SDK', 'Packages', 'Site vitrine'],
  },
  {
    name: 'OneStore.link',
    tagline: 'Un lien. Tous les stores.',
    web: CAPTURES.onestoreWeb,
    domain: 'onestore.link',
    surfaces: ['Plateforme web', 'Site vitrine'],
  },
]

export const WEB_BAND_FRAMES = HOOK + SLIDE * SLIDES.length + ROLES + OFFER

function Hook(): React.ReactElement {
  const frame = useCurrentFrame()
  const a = interpolate(frame, [0, 6], [0, 1], { extrapolateRight: 'clamp' })
  const b = interpolate(frame, [20, 27], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  return (
    <Ground color={C.ink}>
      <AbsoluteFill style={{ justifyContent: 'center', padding: '0 84px', gap: 10 }}>
        <div style={{ fontFamily: FONT.display, fontSize: 150, lineHeight: 1, fontWeight: 700, letterSpacing: '-0.04em', color: 'rgba(255,255,255,0.55)', opacity: a, transform: `scale(${1.1 - 0.1 * a})`, transformOrigin: 'left center' }}>
          Pas un CTO.
        </div>
        <div style={{ fontFamily: FONT.display, fontSize: 150, lineHeight: 1, fontWeight: 700, letterSpacing: '-0.04em', color: '#fff', opacity: b, transform: `scale(${1.1 - 0.1 * b})`, transformOrigin: 'left center' }}>
          Une <span style={{ color: '#9d8bff' }}>équipe.</span>
        </div>
      </AbsoluteFill>
    </Ground>
  )
}

function SlideView({ slide, first }: { slide: Slide; first: boolean }): React.ReactElement {
  return (
    <Ground color={C.paper}>
      <AbsoluteFill style={{ padding: '170px 40px 0', alignItems: 'center' }}>
        {/* The heading does not move between slides — only the product under it changes. */}
        <Rise delay={0} distance={first ? 40 : 0} style={{ alignSelf: 'stretch', padding: '0 44px' }}>
          <div style={{ fontSize: 34, fontWeight: 600, color: C.accent, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Ce que khufu fait tourner
          </div>
        </Rise>
        <Rise delay={3} style={{ alignSelf: 'stretch', padding: '0 44px', marginTop: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ fontFamily: FONT.display, fontSize: 92, lineHeight: 1, fontWeight: 700, color: C.ink, letterSpacing: '-0.03em' }}>
              {slide.name}
            </div>
            <LiveBadge size={28} />
          </div>
          <div style={{ fontSize: 38, lineHeight: 1.3, color: C.ink2, marginTop: 18 }}>{slide.tagline}</div>
        </Rise>

        <Rise delay={6} distance={70} style={{ marginTop: 56 }}>
          <Browser capture={slide.web} width={1000} domain={slide.domain} />
        </Rise>

        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginTop: 50, alignSelf: 'stretch', padding: '0 44px' }}>
          {slide.app && (
            <Rise delay={12} distance={90}>
              <Phone capture={slide.app} height={560} />
            </Rise>
          )}
          <Rise delay={16} style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              {slide.surfaces.map((s) => (
                <Chip key={s} size={32}>
                  {s}
                </Chip>
              ))}
            </div>
          </Rise>
        </div>
      </AbsoluteFill>
    </Ground>
  )
}

/** What « une équipe » means, in the plan's own validated words (ads-test-01 §3). */
function Roles(): React.ReactElement {
  const roles = ['Cadrage', 'Design', 'Développement', 'Infrastructure', 'Mise en production']
  return (
    <Ground color={C.paper}>
      <AbsoluteFill style={{ justifyContent: 'center', padding: '0 84px', gap: 22 }}>
        <Rise>
          <div style={{ fontFamily: FONT.display, fontSize: 82, lineHeight: 1.05, fontWeight: 700, color: C.ink, letterSpacing: '-0.02em', marginBottom: 30 }}>
            Tous les rôles d’une équipe tech, <span style={{ color: C.accent }}>un seul contrat.</span>
          </div>
        </Rise>
        {roles.map((r, i) => (
          <Rise key={r} delay={10 + i * 5}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 52, fontWeight: 600, color: C.ink2 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, background: C.accent }} />
              {r}
            </div>
          </Rise>
        ))}
      </AbsoluteFill>
    </Ground>
  )
}

export function WebBand({ price }: { price: string }): React.ReactElement {
  return (
    <AbsoluteFill style={{ background: C.paper }}>
      <Sequence from={0} durationInFrames={HOOK}>
        <Hook />
      </Sequence>
      {SLIDES.map((s, i) => (
        <Sequence key={s.name} from={HOOK + i * SLIDE} durationInFrames={SLIDE}>
          <SlideView slide={s} first={i === 0} />
        </Sequence>
      ))}
      <Sequence from={HOOK + SLIDES.length * SLIDE} durationInFrames={ROLES}>
        <Roles />
      </Sequence>
      <Sequence from={HOOK + SLIDES.length * SLIDE + ROLES} durationInFrames={OFFER}>
        <OfferCard price={price} />
      </Sequence>
    </AbsoluteFill>
  )
}
