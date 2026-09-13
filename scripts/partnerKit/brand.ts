/**
 * Brand tokens shared by every partner-kit renderer.
 *
 * The values mirror `src/app/globals.css` (@theme) so the printed pieces and the
 * site cannot drift. Keep them in sync by hand — a PDF build must not import the
 * Tailwind runtime.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

/** Where the partner kit lives. Override with PARTNER_KIT_DIR when it moves. */
export const PARTNERS_DIR =
  process.env.PARTNER_KIT_DIR ?? path.join(process.env.HOME ?? '', 'work/projects/khufu/marketing/partners')

export const DIST_DIR = path.join(PARTNERS_DIR, 'dist')

/** The khufu mark: a Space Grotesk 700 "K" in accent indigo. */
export const LOGO_SVG = path.join(process.env.HOME ?? '', 'work/projects/khufu/logos/khufu-k.svg')

export const PAPER = '#fbfbf9'
export const PAPER_2 = '#f4f4f0'
export const INK = '#0e0e10'
export const INK_2 = '#3a3a40'
export const MUTED = '#6b6b73'
export const LINE = '#e6e6e0'
export const ACCENT = '#4c30ff'
export const ACCENT_INK = '#3a1fe0'
export const ACCENT_SOFT = '#edeaff'
export const WHITE = '#ffffff'
export const WARN = '#b4232a'
export const WARN_SOFT = '#fdeeee'

/** Core-font body face; only display headings use the brand face. */
export const BODY = 'Helvetica'
export const BODY_BOLD = 'Helvetica-Bold'
export const BODY_ITALIC = 'Helvetica-Oblique'
export const BODY_BOLD_ITALIC = 'Helvetica-BoldOblique'

/**
 * The display face, taken from the logo file itself.
 *
 * khufu-k.svg is a single <text> glyph with Space Grotesk 700 embedded as a
 * base64 WOFF, so extracting that font and typesetting "K" with it reproduces
 * the logo exactly — no raster, no SVG path conversion. It is byte-identical to
 * src/assets/fonts/SpaceGrotesk-700.woff, which is the fallback if the logo is
 * not on this machine.
 */
export function displayFont(): Buffer | null {
  try {
    const svg = fs.readFileSync(LOGO_SVG, 'utf8')
    const match = /base64,([A-Za-z0-9+/=]+)/.exec(svg)
    if (match) return Buffer.from(match[1], 'base64')
  } catch {
    /* fall through to the vendored copy */
  }
  const vendored = path.join(REPO_ROOT, 'src', 'assets', 'fonts', 'SpaceGrotesk-700.woff')
  return fs.existsSync(vendored) ? fs.readFileSync(vendored) : null
}

/** DOCX cannot embed the brand WOFF portably; lawyers get a ubiquitous face. */
export const DOCX_BODY_FONT = 'Calibri'
export const DOCX_DISPLAY_FONT = 'Calibri'
