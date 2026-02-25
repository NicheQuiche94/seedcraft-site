'use client'

import type { ModesContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, SectionBody, HandwrittenNote } from './_shared'
import DynamicIcon from '@/components/pitch/DynamicIcon'

interface Props { content: ModesContent; theme: PitchTheme }

const ORIGIN_STYLES = {
  founder:   { label: 'Yours',     bg: '#FFF8DB', text: '#92650A', border: '#FFD93D' },
  seedcraft: { label: 'Seedcraft', bg: undefined,  text: undefined, border: undefined },
}

export default function Modes({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <div className="text-center mb-10">
          <SectionLabel theme={theme}>{content.label}</SectionLabel>
          <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} className="text-center" />
          {content.subtitle && <SectionBody theme={theme}>{content.subtitle}</SectionBody>}
          {content.handwrittenNote && (
            <div className="mt-3">
              <HandwrittenNote callout={content.handwrittenNote} theme={theme} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.modes.map((mode, i) => {
            const origin = ORIGIN_STYLES[mode.origin]
            return (
              <div key={i} className="relative rounded-2xl p-8 text-center"
                style={{ background: theme.bgCard, border: `1px solid ${theme.border}` }}>
                {/* Origin badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: origin.bg ?? theme.accentGlow,
                      color: origin.text ?? theme.accent,
                      border: `1px solid ${origin.border ?? theme.accentGlowStrong}`,
                      fontSize: '0.6rem',
                    }}>
                    {origin.label}
                  </span>
                </div>
                <DynamicIcon name={mode.icon} theme={theme} size={32} />
                <h3 className="text-xl font-normal mt-2 mb-1"
                  style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>
                  {mode.title}
                </h3>
                <div className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: theme.accent }}>
                  {mode.tag}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>
                  {mode.body}
                </p>
              </div>
            )
          })}
        </div>
      </Reveal>
    </Section>
  )
}