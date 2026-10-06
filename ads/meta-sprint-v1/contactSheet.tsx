/**
 * The contact sheet — ONE image that shows the nine hooks side by side, so the
 * choice is made on a phone in ten seconds instead of by opening eighteen videos
 * (Adrien, pass 2: « c'est un enfer de lire les vidéos, elles se chargent super
 * lentement »). The videos confirm the pick; this sheet is where it is made.
 *
 * One row per hook: the frame at 1 s of its 9:16 cut, and its opening line in
 * plain text, large enough to read at phone width. The frames are rendered first
 * by `npm run ads:render` into public/generated/hooks/ (gitignored).
 */

import React from 'react'
import { AbsoluteFill, Img, staticFile } from 'remotion'
import { C, FONT, Logo } from './kit'
import { HOOK_TEXT } from './hooks'

export const BASES = [
  { id: 'a', name: 'A — Compte à rebours', note: 'La semaine jour par jour + l’animation du hero de la landing, puis OSL et Traqio en production.' },
  { id: 'b', name: 'B — Les apps', note: 'Clokizi, HerbaCRM, puis Hive et Labyrinth, puis la gamme web + mobile.' },
  { id: 'c', name: 'C — La bande web', note: 'OSL, Traqio, Clokizi, HerbaCRM — vitrine + produit, aucune durée.' },
] as const

const THUMB_W = 300
const THUMB_H = Math.round((THUMB_W * 16) / 9)
const ROW = THUMB_H + 48
const BASE_HEAD = 150
const TITLE = 250

export const CONTACT_SHEET_HEIGHT = TITLE + BASES.length * (BASE_HEAD + 3 * ROW) + 60

export type ContactSheetProps = { price: string; pick: string; durations: Record<string, string> }

export function ContactSheet({ price, pick, durations }: ContactSheetProps): React.ReactElement {
  return (
    <AbsoluteFill style={{ background: C.paper, fontFamily: FONT.sans, padding: '60px 48px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, height: TITLE - 60 }}>
        <Logo size={84} />
        <div>
          <div style={{ fontFamily: FONT.display, fontSize: 54, fontWeight: 700, color: C.ink, letterSpacing: '-0.02em' }}>Sprint V1 · 9 hooks Meta</div>
          <div style={{ fontSize: 30, color: C.muted, marginTop: 6 }}>Image à 1 s de chaque ouverture (9:16) · prix de la coupe : {price}</div>
        </div>
      </div>
      {BASES.map((base) => (
        <div key={base.id}>
          <div style={{ height: BASE_HEAD, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderTop: `3px solid ${C.ink}` }}>
            <div style={{ fontFamily: FONT.display, fontSize: 46, fontWeight: 700, color: C.ink }}>{base.name}</div>
            <div style={{ fontSize: 28, color: C.muted, marginTop: 6 }}>{base.note}</div>
          </div>
          {([1, 2, 3] as const).map((n) => {
            const id = `${base.id}${n}`
            const picked = id === pick
            return (
              <div key={id} style={{ height: ROW, display: 'flex', gap: 36, alignItems: 'flex-start' }}>
                <Img
                  src={staticFile(`generated/hooks/${id}.png`)}
                  style={{ width: THUMB_W, height: THUMB_H, borderRadius: 18, border: `2px solid ${picked ? C.accent : C.line}`, display: 'block', flex: 'none' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingTop: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ fontFamily: FONT.display, fontSize: 64, fontWeight: 700, color: C.accent, lineHeight: 1 }}>{id.toUpperCase()}</div>
                    {picked && (
                      <div style={{ padding: '6px 16px', borderRadius: 40, background: C.accent, color: '#fff', fontSize: 26, fontWeight: 600 }}>le plus fort, selon moi</div>
                    )}
                  </div>
                  <div style={{ fontFamily: FONT.display, fontSize: 50, lineHeight: 1.12, fontWeight: 700, color: C.ink, letterSpacing: '-0.01em' }}>
                    « {HOOK_TEXT[base.id][n].replace('{price}', price)} »
                  </div>
                  <div style={{ fontSize: 28, color: C.muted }}>{durations[id] ?? ''}</div>
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </AbsoluteFill>
  )
}
