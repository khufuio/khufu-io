/**
 * Base B — « Des apps, en production », rendered 9:16 AND 4:5.
 *
 * Lead with the products that ARE vertical: phone captures fill a portrait frame
 * whole, with nothing to crop and nothing to compose around.
 *
 * ⚠️ PASS 2 — IT IS NO LONGER A GAMES AD. Adrien: « tu montres hive et labyrinth,
 * et c'est des jeux, c'est pas le truc qu'on veut le + mettre en avant ». Hive TCG
 * and Labyrinth stay — they are the best portrait material there is — but they
 * come THIRD and FOURTH, after Clokizi and HerbaCRM, and the closing scene puts
 * them in a range with the web products (Traqio, OneStore.link): khufu builds
 * products, games among them.
 *
 * ⛔ No duration next to any product (decision cmuwqh6x): the creative carries one
 * delay, the offer's 7 days, on the offer card. The products prove khufu ships
 * finished products, not how fast each one was built.
 */

import React from 'react'
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion'
import { Browser, C, CAPTURES, FONT, Ground, LiveBadge, OfferCard, Phone, PhoneCarousel, Rise, useFrame, type AdProps, type Capture } from './kit'
import { HOOK_FRAMES, Hook } from './hooks'

const PRODUCT = 84
const RANGE = 120
const OFFER = 135

type Product = { name: string; tagline: string; captures: readonly Capture[] }

const PRODUCTS: readonly Product[] = [
  { name: 'Clokizi', tagline: 'Gérez vos équipes terrain en toute simplicité.', captures: [CAPTURES.clokiziApp] },
  { name: 'HerbaCRM', tagline: 'Le CRM des coachs bien-être, nutrition et fitness.', captures: [CAPTURES.herbacrmApp] },
  { name: 'Hive TCG', tagline: 'Le jeu de cartes à collectionner qui se joue sur une ruche.', captures: [CAPTURES.hiveMatch, CAPTURES.hiveCollection] },
  { name: 'Labyrinth', tagline: 'Pirate Treasure — le labyrinthe où chaque chemin cache un trésor.', captures: [CAPTURES.labyrinthRun, CAPTURES.labyrinthLevels] },
]

export const WHOLE_PRODUCT_FRAMES = HOOK_FRAMES + PRODUCT * PRODUCTS.length + RANGE + OFFER

function ProductView({ product }: { product: Product }): React.ReactElement {
  const frame = useCurrentFrame()
  const { tall, top } = useFrame()
  const { captures } = product
  // Hold each screen, then cross-fade over 8 frames to the next one.
  const hold = PRODUCT / captures.length
  const at =
    captures.length === 1
      ? 0
      : Math.min(captures.length - 1, interpolate(frame % hold, [hold - 8, hold], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) + Math.floor(frame / hold))
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: tall ? 20 : 26 }}>
      <Rise delay={2}>
        <LiveBadge size={28} />
      </Rise>
      <Rise delay={5}>
        <div style={{ fontFamily: FONT.display, fontSize: tall ? 84 : 66, lineHeight: 1, fontWeight: 700, color: C.ink, letterSpacing: '-0.02em' }}>{product.name}</div>
      </Rise>
      <Rise delay={8}>
        <div style={{ fontSize: tall ? 40 : 36, lineHeight: 1.3, color: C.ink2 }}>{product.tagline}</div>
      </Rise>
      <Rise delay={12}>
        <div style={{ fontSize: 30, color: C.muted, fontWeight: 500 }}>Construit et opéré par khufu.</div>
      </Rise>
    </div>
  )
  return (
    <Ground color={C.paper2}>
      {tall ? (
        <AbsoluteFill style={{ padding: `${top}px 84px 0`, gap: 50 }}>
          {text}
          <Rise distance={80} style={{ alignSelf: 'center' }}>
            <PhoneCarousel captures={captures} height={900} at={at} />
          </Rise>
        </AbsoluteFill>
      ) : (
        <AbsoluteFill style={{ flexDirection: 'row', alignItems: 'center', padding: '0 64px', gap: 56 }}>
          <Rise distance={80}>
            <PhoneCarousel captures={captures} height={1170} at={at} />
          </Rise>
          <div style={{ flex: 1 }}>{text}</div>
        </AbsoluteFill>
      )}
    </Ground>
  )
}

/** The range: two web platforms and four apps, games included — not leading. */
function Range(): React.ReactElement {
  const { tall, w, top } = useFrame()
  const browserW = Math.floor((w - 2 * 60 - 28) / 2)
  const phoneH = tall ? 460 : 380
  const phones = [CAPTURES.clokiziApp, CAPTURES.herbacrmApp, CAPTURES.hiveHome, CAPTURES.labyrinthShop]
  return (
    <Ground color={C.paper}>
      <AbsoluteFill style={{ padding: `${tall ? top : 60}px 60px 0`, gap: tall ? 46 : 30 }}>
        <Rise>
          <div style={{ fontFamily: FONT.display, fontSize: tall ? 80 : 64, lineHeight: 1.05, fontWeight: 700, color: C.ink, letterSpacing: '-0.02em', padding: '0 24px' }}>
            SaaS, apps métier, jeux.
            <br />
            <span style={{ color: C.accent }}>Tous en production.</span>
          </div>
        </Rise>
        <div style={{ display: 'flex', gap: 28 }}>
          <Rise delay={8} distance={60}>
            <Browser capture={CAPTURES.traqioSite} width={browserW} domain="traqio.app" />
          </Rise>
          <Rise delay={11} distance={60}>
            <Browser capture={CAPTURES.onestoreSite} width={browserW} domain="onestore.link" />
          </Rise>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
          {phones.map((p, i) => (
            <Rise key={p.src} delay={14 + i * 4} distance={80}>
              <Phone capture={p} height={phoneH} />
            </Rise>
          ))}
        </div>
      </AbsoluteFill>
    </Ground>
  )
}

export function WholeProduct({ price, hook }: AdProps): React.ReactElement {
  return (
    <AbsoluteFill style={{ background: C.paper }}>
      <Sequence from={0} durationInFrames={HOOK_FRAMES}>
        <Hook base="b" hook={hook} price={price} />
      </Sequence>
      {PRODUCTS.map((p, i) => (
        <Sequence key={p.name} from={HOOK_FRAMES + i * PRODUCT} durationInFrames={PRODUCT}>
          <ProductView product={p} />
        </Sequence>
      ))}
      <Sequence from={HOOK_FRAMES + PRODUCTS.length * PRODUCT} durationInFrames={RANGE}>
        <Range />
      </Sequence>
      <Sequence from={HOOK_FRAMES + PRODUCTS.length * PRODUCT + RANGE} durationInFrames={OFFER}>
        <OfferCard price={price} />
      </Sequence>
    </AbsoluteFill>
  )
}
