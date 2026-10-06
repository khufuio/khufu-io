/**
 * Shared pieces of the Sprint V1 Meta ad creatives.
 *
 * ⛔ A CAPTURE IS NEVER CROPPED (khufu HQ decision cmu4iehk) AND NEVER REDRAWN
 * (cmu3dn7u). That is why this kit exists instead of HQ's own `screen-tour`
 * template: HQ's `ScreenShot` fits every image with `objectFit: cover` into a fixed
 * device ratio and runs a permanent Ken Burns push on top, so a 1200×650 web capture
 * loses ~13% of its width and a phone capture its edges. Here every frame is sized
 * FROM the capture's own pixel ratio and the image is drawn whole; motion comes from
 * the frame entering, never from zooming into the product.
 */

import React from 'react'
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion'
import { loadFont as loadInter } from '@remotion/google-fonts/Inter'
import { loadFont as loadSpaceGrotesk } from '@remotion/google-fonts/SpaceGrotesk'

// The site's own pair: Space Grotesk for display, Inter for text (src/app/[locale]/layout.tsx).
const { fontFamily: inter } = loadInter('normal', { weights: ['400', '500', '600', '700'], subsets: ['latin', 'latin-ext'] })
const { fontFamily: grotesk } = loadSpaceGrotesk('normal', { weights: ['500', '700'], subsets: ['latin', 'latin-ext'] })

export const FONT = { display: grotesk, sans: inter }

/** The site's palette (src/app/globals.css). */
export const C = {
  paper: '#fbfbf9',
  paper2: '#f4f4f0',
  ink: '#0e0e10',
  ink2: '#3a3a40',
  muted: '#6b6b73',
  line: '#e6e6e0',
  accent: '#4c30ff',
  accentInk: '#3a1fe0',
  accentSoft: '#edeaff',
  live: '#12b76a',
}

export const FPS = 30

/** A capture and its real pixel size — the frame is derived from it, never the reverse. */
export type Capture = { src: string; w: number; h: number }

export const CAPTURES = {
  hiveMatch: { src: 'hive/01-match-mid-round.jpg', w: 1320, h: 2868 },
  hiveCollection: { src: 'hive/02-collection-wall.jpg', w: 1320, h: 2868 },
  hiveBooster: { src: 'hive/04-booster-pack.jpg', w: 1320, h: 2868 },
  hiveHome: { src: 'hive/08-home-story.jpg', w: 1320, h: 2868 },
  labyrinthLevels: { src: 'sprint/labyrinth-app.webp', w: 560, h: 1180 },
  labyrinthRun: { src: 'sprint/labyrinth-app-2.webp', w: 560, h: 1180 },
  labyrinthShop: { src: 'sprint/labyrinth-app-3.webp', w: 560, h: 1180 },
  clokiziApp: { src: 'sprint/clokizi-app.webp', w: 560, h: 1180 },
  clokiziWeb: { src: 'sprint/clokizi-web.webp', w: 1200, h: 650 },
  herbacrmApp: { src: 'sprint/herbacrm-app.webp', w: 560, h: 1180 },
  herbacrmWeb: { src: 'sprint/herbacrm-web.webp', w: 1200, h: 650 },
  traqioWeb: { src: 'sprint/traqio.webp', w: 1200, h: 650 },
  onestoreWeb: { src: 'sprint/onestore-link.webp', w: 1200, h: 650 },
} satisfies Record<string, Capture>

/** 0→1 spring that starts at `delay` frames. */
export function useEnter(delay = 0, damping = 18): number {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  return spring({ frame: frame - delay, fps, config: { damping, mass: 0.7 } })
}

/** Linear 0→1 over [from, to], clamped. */
export function useRamp(from: number, to: number): number {
  const frame = useCurrentFrame()
  return interpolate(frame, [from, to], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
}

/** Fade-and-rise for a block of text. */
export function Rise({
  delay = 0,
  distance = 40,
  children,
  style,
}: {
  delay?: number
  distance?: number
  children: React.ReactNode
  style?: React.CSSProperties
}): React.ReactElement {
  const p = useEnter(delay)
  return (
    <div style={{ opacity: Math.min(1, p * 1.4), transform: `translateY(${(1 - p) * distance}px)`, ...style }}>
      {children}
    </div>
  )
}

/** A full-bleed ground. */
export function Ground({ color, children }: { color: string; children: React.ReactNode }): React.ReactElement {
  return (
    <div style={{ position: 'absolute', inset: 0, background: color, fontFamily: FONT.sans, overflow: 'hidden' }}>
      {children}
    </div>
  )
}

/**
 * A phone around a capture. The screen takes the capture's exact ratio, so the
 * image is shown whole — the bezel adapts to the capture, not the other way round.
 */
export function Phone({
  capture,
  height,
  style,
}: {
  capture: Capture
  height: number
  style?: React.CSSProperties
}): React.ReactElement {
  const bezel = Math.round(height * 0.018)
  const screenH = height - bezel * 2
  const screenW = Math.round((screenH * capture.w) / capture.h)
  const radius = Math.round(screenW * 0.09)
  return (
    <div
      style={{
        width: screenW + bezel * 2,
        height,
        padding: bezel,
        borderRadius: radius + bezel,
        background: '#111114',
        boxShadow: '0 30px 80px rgba(14,14,16,0.28), inset 0 0 0 2px #2a2a30',
        ...style,
      }}
    >
      <Img
        src={staticFile(capture.src)}
        style={{ width: screenW, height: screenH, borderRadius: radius, display: 'block', objectFit: 'fill' }}
      />
    </div>
  )
}

/** Several captures in one phone, cross-fading — `at` is the index currently shown (fractional while fading). */
export function PhoneCarousel({
  captures,
  height,
  at,
}: {
  captures: readonly Capture[]
  height: number
  at: number
}): React.ReactElement {
  // Every capture of one product shares its ratio, so the frame is sized from the first.
  const base = captures[0]
  const bezel = Math.round(height * 0.018)
  const screenH = height - bezel * 2
  const screenW = Math.round((screenH * base.w) / base.h)
  const radius = Math.round(screenW * 0.09)
  return (
    <div
      style={{
        position: 'relative',
        width: screenW + bezel * 2,
        height,
        padding: bezel,
        borderRadius: radius + bezel,
        background: '#111114',
        boxShadow: '0 30px 80px rgba(14,14,16,0.28), inset 0 0 0 2px #2a2a30',
      }}
    >
      {captures.map((c, i) => {
        const opacity = interpolate(at, [i - 1, i, i + 1], [0, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
        return (
          <Img
            key={c.src}
            src={staticFile(c.src)}
            style={{
              position: 'absolute',
              left: bezel,
              top: bezel,
              width: screenW,
              height: screenH,
              borderRadius: radius,
              objectFit: 'fill',
              opacity,
            }}
          />
        )
      })}
    </div>
  )
}

/** A browser window around a full web capture — the window takes the capture's ratio. */
export function Browser({
  capture,
  width,
  domain,
}: {
  capture: Capture
  width: number
  domain: string
}): React.ReactElement {
  const bar = Math.round(width * 0.055)
  const imgH = Math.round((width * capture.h) / capture.w)
  const dot = Math.round(bar * 0.26)
  return (
    <div
      style={{
        width,
        borderRadius: Math.round(width * 0.018),
        overflow: 'hidden',
        background: '#fff',
        boxShadow: '0 30px 80px rgba(14,14,16,0.22), 0 0 0 2px rgba(14,14,16,0.08)',
      }}
    >
      <div
        style={{
          height: bar,
          display: 'flex',
          alignItems: 'center',
          gap: dot * 0.7,
          padding: `0 ${bar * 0.45}px`,
          background: C.paper2,
          borderBottom: `2px solid ${C.line}`,
        }}
      >
        {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
          <div key={c} style={{ width: dot, height: dot, borderRadius: dot, background: c }} />
        ))}
        <div
          style={{
            marginLeft: bar * 0.4,
            flex: 1,
            height: bar * 0.62,
            borderRadius: bar,
            background: '#fff',
            border: `2px solid ${C.line}`,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: bar * 0.4,
            fontSize: bar * 0.36,
            color: C.ink2,
            fontWeight: 500,
          }}
        >
          {domain}
        </div>
      </div>
      <Img src={staticFile(capture.src)} style={{ width, height: imgH, display: 'block', objectFit: 'fill' }} />
    </div>
  )
}

/** The « En production » badge — the same wording as the landing's product wall. */
export function LiveBadge({ size = 30 }: { size?: number }): React.ReactElement {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.4,
        padding: `${size * 0.3}px ${size * 0.7}px`,
        borderRadius: size * 2,
        background: '#e7f8ef',
        color: '#067647',
        fontSize: size,
        fontWeight: 600,
      }}
    >
      <div style={{ width: size * 0.42, height: size * 0.42, borderRadius: size, background: C.live }} />
      En production
    </div>
  )
}

export function Chip({ children, size = 28 }: { children: React.ReactNode; size?: number }): React.ReactElement {
  return (
    <div
      style={{
        padding: `${size * 0.32}px ${size * 0.75}px`,
        borderRadius: size * 2,
        background: C.paper2,
        border: `2px solid ${C.line}`,
        color: C.ink2,
        fontSize: size,
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  )
}

export function Logo({ size }: { size: number }): React.ReactElement {
  return (
    <Img
      src={staticFile('brand/khufu-k-white-on-indigo.png')}
      style={{ width: size, height: size, borderRadius: size * 0.22, display: 'block' }}
    />
  )
}

/**
 * The closing card: the one offer, in ONE currency (decision cmtt6x3k — 15 000 € and
 * 17 000 $ are two prices, never a conversion, and a creative carries one of them).
 *
 * ⛔ NO DATE (cmu0fugh): the creative runs for weeks, so it says « le prochain slot ».
 * The landing guarantees by construction that at least one week is always open.
 */
export function OfferCard({ price, scale = 1 }: { price: string; scale?: number }): React.ReactElement {
  const s = (n: number): number => Math.round(n * scale)
  return (
    <Ground color={C.paper}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: `0 ${s(84)}px`,
          gap: s(34),
        }}
      >
        <Rise delay={0}>
          <div style={{ display: 'flex', alignItems: 'center', gap: s(22) }}>
            <Logo size={s(76)} />
            <div style={{ fontFamily: FONT.display, fontSize: s(46), fontWeight: 700, color: C.ink }}>Sprint V1</div>
          </div>
        </Rise>
        <Rise delay={5}>
          <div style={{ fontFamily: FONT.display, fontSize: s(84), lineHeight: 1.04, fontWeight: 700, color: C.ink, letterSpacing: '-0.02em' }}>
            Une V1 en production en <span style={{ color: C.accent }}>7 jours.</span>
          </div>
        </Rise>
        <Rise delay={11}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: s(22), flexWrap: 'wrap' }}>
            <div style={{ fontFamily: FONT.display, fontSize: s(120), fontWeight: 700, color: C.ink, letterSpacing: '-0.03em' }}>
              {price}
            </div>
            <div style={{ fontSize: s(40), color: C.muted, fontWeight: 500 }}>prix fixe</div>
          </div>
        </Rise>
        <Rise delay={16}>
          <div style={{ fontSize: s(36), color: C.ink2, lineHeight: 1.35 }}>
            Périmètre écrit et signé avant de commencer.
            <br />
            Le code et les comptes sont à vous.
          </div>
        </Rise>
        <Rise delay={24}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: s(18), marginTop: s(20) }}>
            <div
              style={{
                alignSelf: 'flex-start',
                padding: `${s(26)}px ${s(48)}px`,
                borderRadius: s(80),
                background: C.accent,
                color: '#fff',
                fontSize: s(42),
                fontWeight: 600,
              }}
            >
              Réservez le prochain slot
            </div>
            <div style={{ fontSize: s(34), color: C.muted, fontWeight: 500 }}>khufu.io · appel de 30 min</div>
          </div>
        </Rise>
      </div>
    </Ground>
  )
}
