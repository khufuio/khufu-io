import React from 'react'
import { Composition } from 'remotion'
import { FPS } from './kit'
import { COUNTDOWN_FRAMES, Countdown } from './countdown'
import { WHOLE_PRODUCT_FRAMES, WholeProduct } from './wholeProduct'
import { WEB_BAND_FRAMES, WebBand } from './webBand'

/**
 * One composition per variant. `price` is a prop because a creative carries ONE
 * currency (decision cmtt6x3k): « 15 000 € » for the French cut, « $17,000 » for an
 * English one — two prices, never a conversion, never both on one creative.
 */
export function Root(): React.ReactElement {
  return (
    <>
      <Composition id="countdown" component={Countdown} width={1080} height={1920} fps={FPS} durationInFrames={COUNTDOWN_FRAMES} defaultProps={{ price: '15 000 €' }} />
      <Composition id="whole-product" component={WholeProduct} width={1080} height={1350} fps={FPS} durationInFrames={WHOLE_PRODUCT_FRAMES} defaultProps={{ price: '15 000 €' }} />
      <Composition id="web-band" component={WebBand} width={1080} height={1920} fps={FPS} durationInFrames={WEB_BAND_FRAMES} defaultProps={{ price: '15 000 €' }} />
    </>
  )
}
