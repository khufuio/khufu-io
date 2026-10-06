/**
 * The /sprint-v1 hero animation, inside a Remotion frame — THE SAME COMPONENT AND
 * THE SAME CSS, not a re-drawing of it (Adrien on variant A, pass 2: « mérite
 * l'animation qu'on a dans le hero […] y a la place en bas »).
 *
 * How it is reused without forking it:
 *   - the markup is `SprintBuildSequence` itself, imported from src/ — it has no
 *     dependency but React;
 *   - its CSS lives in src/app/globals.css (Tailwind entry, not importable here),
 *     so `npm run ads:render` copies the `.sprint-shot*` / `.sprint-build*` rules,
 *     their `@property` counters and keyframes, verbatim, into
 *     generated/landingHero.css before bundling. Change the hero, re-render, and
 *     the ad follows.
 *   - ⚠️ TIME. The hero is CSS animations on the wall clock; Remotion renders
 *     frames out of order in several tabs. The generated CSS pauses every one of
 *     them and shifts its delay by `--ad-t`, which this wrapper sets each frame —
 *     the browser's own animation engine, no library (decision cmu093fb keeps
 *     Lottie / GSAP / framer-motion off this page, and its animation with it).
 */

import React from 'react'
import { SprintBuildSequence } from '../../src/components/sprint/sprintBuildSequence'
import { FONT } from './kit'
import './generated/landingHero.css'

/**
 * The landing's own `hero.shotUrl` and `hero.shotAlt` for fr (src/content/sprintLanding.ts):
 * a fictional address, never a real domain.
 */
const URL_FR = 'https://www.votre-projet.com'
const LABEL_FR =
  'Un produit complet qui s’assemble puis passe en production : les écrans, l’app, le site, les comptes, les données, les paiements, les e-mails, les services connectés et l’hébergement.'

/** The hero column's width on a desktop landing — the size the drawing is designed at. */
const HERO_WIDTH = 560

/** Height of the frame at a given width: the address bar plus the 1200/650 canvas. */
export function landingBuildHeight(width: number): number {
  return Math.round(width * (650 / 1200) + (width / HERO_WIDTH) * 38)
}

export function LandingBuild({ timeMs, width }: { timeMs: number; width: number }): React.ReactElement {
  // The landing lays the frame out for a ~560px hero column, in rem and cqw. It is
  // laid out at exactly that width and ZOOMED to ad size, so every proportion —
  // the bar, the dots, the address, the tiles — is the one the landing ships.
  return (
    <div
      className="ad-landing-build"
      style={
        {
          width: HERO_WIDTH,
          zoom: width / HERO_WIDTH,
          // The ad's clock: every hero animation is paused with its delay shifted by
          // this (see onAdClock() in scripts/renderMetaAds.mjs).
          '--ad-t': `${timeMs}ms`,
          '--font-space-grotesk': FONT.display,
          '--font-inter': FONT.sans,
          fontFamily: FONT.sans,
        } as React.CSSProperties
      }
    >
      <SprintBuildSequence label={LABEL_FR} url={URL_FR} />
    </div>
  )
}
