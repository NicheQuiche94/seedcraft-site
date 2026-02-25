import type { PitchTheme } from '@/types/pitch'
import type { CSSProperties } from 'react'

/**
 * Converts a PitchTheme into a React inline style object of CSS custom properties.
 * Apply this to the top-level wrapper of any pitch component so all children
 * can reference var(--p-accent) etc. without touching Tailwind config.
 */
export function buildCssVars(theme: PitchTheme): CSSProperties {
  return {
    '--p-accent': theme.accent,
    '--p-accent-dim': theme.accentDim,
    '--p-accent-glow': theme.accentGlow,
    '--p-accent-glow-strong': theme.accentGlowStrong,
    '--p-bg': theme.bg,
    '--p-bg-card': theme.bgCard,
    '--p-bg-card-alt': theme.bgCardAlt,
    '--p-text': theme.text,
    '--p-text-muted': theme.textMuted,
    '--p-border': theme.border,
    '--p-font-serif': `'${theme.fontSerif}', Georgia, serif`,
    '--p-font-sans': `'${theme.fontSans}', -apple-system, sans-serif`,
    ...(theme.secondaryAccent      && { '--p-secondary':       theme.secondaryAccent }),
    ...(theme.secondaryAccentLight && { '--p-secondary-light': theme.secondaryAccentLight }),
    ...(theme.bgWarm               && { '--p-bg-warm':         theme.bgWarm }),
    ...(theme.fontHandwriting      && { '--p-font-hw':         `'${theme.fontHandwriting}', cursive` }),
  } as CSSProperties
}

/**
 * Builds a Google Fonts URL from a PitchTheme.
 * Handles both serif and sans-serif with optional weight/style descriptors.
 */
export function buildFontUrl(theme: PitchTheme): string {
  const parts: string[] = []

  const serif = theme.fontSerifWeights
    ? `family=${encodeURIComponent(theme.fontSerif)}:${theme.fontSerifWeights}`
    : `family=${encodeURIComponent(theme.fontSerif)}`
  const sans = theme.fontSansWeights
    ? `family=${encodeURIComponent(theme.fontSans)}:${theme.fontSansWeights}`
    : `family=${encodeURIComponent(theme.fontSans)}`

  parts.push(serif, sans)

  if (theme.fontHandwriting) {
    const hw = theme.fontHandwritingWeights
      ? `family=${encodeURIComponent(theme.fontHandwriting)}:${theme.fontHandwritingWeights}`
      : `family=${encodeURIComponent(theme.fontHandwriting)}`
    parts.push(hw)
  }

  return `https://fonts.googleapis.com/css2?${parts.join('&')}&display=swap`
}