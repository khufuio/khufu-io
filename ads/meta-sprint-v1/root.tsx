import React from 'react'
import { Composition, Still } from 'remotion'
import { FORMATS, FPS, type AdProps, type FormatId } from './kit'
import { COUNTDOWN_FRAMES, Countdown } from './countdown'
import { WHOLE_PRODUCT_FRAMES, WholeProduct } from './wholeProduct'
import { WEB_BAND_FRAMES, WebBand } from './webBand'
import { CONTACT_SHEET_HEIGHT, ContactSheet, type ContactSheetProps } from './contactSheet'

/**
 * One composition per base × ratio; the hook (1–3) is a prop, so a base's three
 * cuts share every frame after the opening. `price` is a prop because a creative
 * carries ONE currency (decision cmtt6x3k): « 15 000 € » for the French cut,
 * « $17,000 » for an English one — two prices, never a conversion, never both.
 */
const BASES = [
  { id: 'a-countdown', component: Countdown, frames: COUNTDOWN_FRAMES },
  { id: 'b-apps', component: WholeProduct, frames: WHOLE_PRODUCT_FRAMES },
  { id: 'c-web-band', component: WebBand, frames: WEB_BAND_FRAMES },
] as const

const DEFAULTS: AdProps = { price: '15 000 €', hook: 1 }
const SHEET_DEFAULTS: ContactSheetProps = { price: '15 000 €', pick: 'c1', durations: {} }

export function Root(): React.ReactElement {
  return (
    <>
      {BASES.flatMap((base) =>
        (Object.keys(FORMATS) as FormatId[]).map((format) => (
          <Composition
            key={`${base.id}-${format}`}
            id={`${base.id}-${format}`}
            component={base.component}
            width={FORMATS[format].width}
            height={FORMATS[format].height}
            fps={FPS}
            durationInFrames={base.frames}
            defaultProps={DEFAULTS}
          />
        )),
      )}
      <Still id="contact-sheet" component={ContactSheet} width={1080} height={CONTACT_SHEET_HEIGHT} defaultProps={SHEET_DEFAULTS} />
    </>
  )
}
