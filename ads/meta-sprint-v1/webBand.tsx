/**
 * Base C — « La bande web », rendered 9:16 AND 4:5.
 *
 * A 16:9 web capture enters the frame WHOLE, as a band, and the frame is filled by
 * composition — the product's name above it, a second surface below it. The
 * vertical is never obtained by cropping the product (cmu4iehk).
 *
 * ⚠️ PASS 2 — WHAT THE BAND SAYS, AND WHAT IT NEVER SAYS. Adrien asked for
 * « voilà ce qu'on fait en 7j ». Decision cmuwqh6x settles it: ONE delay in the
 * creative, the offer's 7 days, on the offer card — and NO duration next to any
 * product, real or not (OneStore.link's V1 took a day, Traqio's three, Clokizi's
 * and HerbaCRM's about three weeks: four figures in one ad sell « ça dépend »,
 * the opposite of a process). So the products do not prove the delay; they prove
 * khufu ships finished products, and the band's heading says exactly that:
 * « Ce qu'on construit · en production aujourd'hui ».
 *
 * ⚠️ PASS 2 — TWO SURFACES PER PRODUCT. Adrien: « OSL/traqio ça fait vide vu que
 * pas d'app, why not screenshot vitrine et screenshot dashboard ? ». Every slide
 * now shows two real surfaces: the web product and its app, or — web-only — the
 * vitrine and the dashboard.
 */

import React from 'react'
import { AbsoluteFill, Sequence } from 'remotion'
import { Browser, C, CAPTURES, Chip, FONT, Ground, LiveBadge, OfferCard, Phone, Rise, browserWidthFor, useFrame, type AdProps, type Capture } from './kit'
import { HOOK_FRAMES, Hook } from './hooks'

const SLIDE = 90
const ROLES = 90
const OFFER = 135

type Surface = { kind: 'browser'; capture: Capture; domain: string } | { kind: 'phone'; capture: Capture }

type Slide = {
  name: string
  tagline: string
  primary: { capture: Capture; domain: string }
  secondary: Surface
  surfaces: readonly string[]
}

const SLIDES: readonly Slide[] = [
  {
    name: 'OneStore.link',
    tagline: 'Un lien. Tous les stores.',
    primary: { capture: CAPTURES.onestoreSite, domain: 'onestore.link' },
    secondary: { kind: 'browser', capture: CAPTURES.onestoreDashboard, domain: 'onestore.link/dashboard' },
    surfaces: ['Site vitrine', 'Tableau de bord'],
  },
  {
    name: 'Traqio',
    tagline: 'L’attribution d’installs et le ROAS, sans boîte noire.',
    primary: { capture: CAPTURES.traqioSite, domain: 'traqio.app' },
    secondary: { kind: 'browser', capture: CAPTURES.traqioDashboard, domain: 'traqio.app/console' },
    surfaces: ['Site vitrine', 'Console', 'SDK'],
  },
  {
    name: 'Clokizi',
    tagline: 'Gérez vos équipes terrain en toute simplicité.',
    primary: { capture: CAPTURES.clokiziWeb, domain: 'app.clokizi.com' },
    secondary: { kind: 'phone', capture: CAPTURES.clokiziApp },
    surfaces: ['Plateforme web', 'App mobile', 'Site vitrine'],
  },
  {
    name: 'HerbaCRM',
    tagline: 'Le CRM des coachs bien-être, nutrition et fitness.',
    primary: { capture: CAPTURES.herbacrmSite, domain: 'herbacrm.com' },
    secondary: { kind: 'phone', capture: CAPTURES.herbacrmApp },
    surfaces: ['Plateforme web', 'App mobile', 'Site vitrine'],
  },
]

export const WEB_BAND_FRAMES = HOOK_FRAMES + SLIDE * SLIDES.length + ROLES + OFFER

function SecondaryView({ surface, maxW, maxH }: { surface: Surface; maxW: number; maxH: number }): React.ReactElement {
  if (surface.kind === 'phone') return <Phone capture={surface.capture} height={maxH} />
  return <Browser capture={surface.capture} width={browserWidthFor(surface.capture, maxW, maxH)} domain={surface.domain} />
}

function SlideView({ slide, first }: { slide: Slide; first: boolean }): React.ReactElement {
  const { tall, w, h, top } = useFrame()
  const pad = 40
  const primaryW = tall ? w - 2 * pad : 900
  const primaryH = Math.round(primaryW * 0.055 + (primaryW * slide.primary.capture.h) / slide.primary.capture.w)
  const headerTop = tall ? top - 50 : 46
  const header = tall ? 290 : 206
  const gap = tall ? 40 : 22
  // What is left under the band, kept clear of the Reels caption/CTA zone on 9:16.
  const secondaryTop = headerTop + header + gap + primaryH + gap
  const secondaryH = (tall ? h - 300 : h - 46) - secondaryTop
  const k = tall ? 1 : 0.8
  return (
    <Ground color={C.paper}>
      <AbsoluteFill style={{ padding: `${headerTop}px ${pad}px 0`, alignItems: 'center' }}>
        <div style={{ alignSelf: 'stretch', padding: '0 44px', height: header }}>
          {/* The heading does not move between slides — only the product under it changes. */}
          <Rise delay={0} distance={first ? 40 : 0}>
            <div style={{ fontSize: 30 * k, fontWeight: 600, color: C.accent, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Ce qu’on construit · en production aujourd’hui
            </div>
          </Rise>
          <Rise delay={3} style={{ marginTop: 14 * k }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ fontFamily: FONT.display, fontSize: 88 * k, lineHeight: 1, fontWeight: 700, color: C.ink, letterSpacing: '-0.03em' }}>{slide.name}</div>
              <LiveBadge size={28 * k} />
            </div>
            <div style={{ fontSize: 38 * k, lineHeight: 1.3, color: C.ink2, marginTop: 14 * k }}>{slide.tagline}</div>
          </Rise>
        </div>

        <Rise delay={6} distance={70} style={{ marginTop: gap }}>
          <Browser capture={slide.primary.capture} width={primaryW} domain={slide.primary.domain} />
        </Rise>

        <div style={{ display: 'flex', alignItems: 'center', gap: 36, marginTop: gap, alignSelf: 'stretch', padding: '0 20px', height: secondaryH }}>
          <Rise delay={12} distance={90}>
            <SecondaryView surface={slide.secondary} maxW={tall ? 660 : 620} maxH={secondaryH} />
          </Rise>
          <Rise delay={16} style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              {slide.surfaces.map((s) => (
                <Chip key={s} size={30 * k}>
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
  const { tall } = useFrame()
  const roles = ['Cadrage', 'Design', 'Développement', 'Infrastructure', 'Mise en production']
  return (
    <Ground color={C.paper}>
      <AbsoluteFill style={{ justifyContent: 'center', padding: '0 84px', gap: tall ? 22 : 16 }}>
        <Rise>
          <div style={{ fontFamily: FONT.display, fontSize: tall ? 82 : 70, lineHeight: 1.05, fontWeight: 700, color: C.ink, letterSpacing: '-0.02em', marginBottom: 30 }}>
            Tous les rôles d’une équipe tech, <span style={{ color: C.accent }}>un seul contrat.</span>
          </div>
        </Rise>
        {roles.map((r, i) => (
          <Rise key={r} delay={10 + i * 5}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: tall ? 52 : 46, fontWeight: 600, color: C.ink2 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, background: C.accent }} />
              {r}
            </div>
          </Rise>
        ))}
      </AbsoluteFill>
    </Ground>
  )
}

export function WebBand({ price, hook }: AdProps): React.ReactElement {
  return (
    <AbsoluteFill style={{ background: C.paper }}>
      <Sequence from={0} durationInFrames={HOOK_FRAMES}>
        <Hook base="c" hook={hook} price={price} />
      </Sequence>
      {SLIDES.map((s, i) => (
        <Sequence key={s.name} from={HOOK_FRAMES + i * SLIDE} durationInFrames={SLIDE}>
          <SlideView slide={s} first={i === 0} />
        </Sequence>
      ))}
      <Sequence from={HOOK_FRAMES + SLIDES.length * SLIDE} durationInFrames={ROLES}>
        <Roles />
      </Sequence>
      <Sequence from={HOOK_FRAMES + SLIDES.length * SLIDE + ROLES} durationInFrames={OFFER}>
        <OfferCard price={price} />
      </Sequence>
    </AbsoluteFill>
  )
}
