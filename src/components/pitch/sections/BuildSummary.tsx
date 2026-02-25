'use client'

import type { BuildSummaryContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, HandwrittenNote } from './_shared'

interface Props { content: BuildSummaryContent; theme: PitchTheme }

export default function BuildSummary({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <div className="rounded-2xl p-10"
          style={{ border: `2px solid ${theme.accentGlowStrong}`, background: theme.bgCard }}>
          <div className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: theme.accent }}>
            {content.label}
          </div>
          <h2 className="text-3xl font-normal mb-2"
            style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>
            {content.title}
          </h2>
          <p className="text-sm mb-6" style={{ color: theme.textMuted }}>
            Seedcraft builds the entire product — your original features and our strategic additions.
          </p>

          <div className="space-y-3">
            {/* OG row */}
            <div className="flex items-start gap-3 rounded-xl p-4"
              style={{ background: theme.secondaryAccentLight ?? '#FFF8DB' }}>
              <span className="text-xs font-extrabold uppercase tracking-wider px-2 py-0.5 rounded flex-shrink-0"
                style={{ background: theme.secondaryAccent ?? '#FFD93D', color: theme.text, fontSize: '0.55rem' }}>
                {content.ogLabel}
              </span>
              <span className="text-sm" style={{ color: theme.textMuted }}>{content.ogItems}</span>
            </div>
            {/* NEW row */}
            <div className="flex items-start gap-3 rounded-xl p-4"
              style={{ background: theme.accentGlow }}>
              <span className="text-xs font-extrabold uppercase tracking-wider px-2 py-0.5 rounded flex-shrink-0"
                style={{ background: theme.accent, color: theme.bg, fontSize: '0.55rem' }}>
                {content.newLabel}
              </span>
              <span className="text-sm" style={{ color: theme.textMuted }}>{content.newItems}</span>
            </div>
          </div>

          {content.handwrittenNote && (
            <div className="mt-6">
              <HandwrittenNote callout={content.handwrittenNote} theme={theme} />
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  )
}