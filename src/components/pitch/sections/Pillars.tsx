'use client'

import type { PillarsContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, SectionBody, HandwrittenNote } from './_shared'
import DynamicIcon from '@/components/pitch/DynamicIcon'

interface Props { content: PillarsContent; theme: PitchTheme }

export default function Pillars({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        {content.subtitle && <SectionBody theme={theme}>{content.subtitle}</SectionBody>}
        {content.handwrittenNote && (
          <div className="mt-3 mb-6">
            <HandwrittenNote callout={content.handwrittenNote} theme={theme} />
          </div>
        )}
        <div className="mt-8 space-y-6">
          {content.pillars.map((pillar, i) => (
            <div key={i} className="rounded-2xl p-8"
              style={{ background: theme.bgCard, border: `1px solid ${theme.border}` }}>
              <div className="flex items-start gap-6">
                {/* Number + icon */}
                <div className="flex-shrink-0 text-center">
                  <div style={{ fontFamily: 'var(--p-font-serif)', fontSize: '2.5rem', color: theme.border, lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="mt-2">
                    <DynamicIcon name={pillar.icon} theme={theme} size={28} />
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-normal mb-3"
                    style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>
                    {pillar.title}
                  </h3>
                  {pillar.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-sm leading-relaxed mb-3"
                      style={{ color: theme.textMuted }}>
                      {para}
                    </p>
                  ))}
                  {pillar.detail && (
                    <div className="rounded-xl p-4 mt-2 italic text-sm leading-relaxed"
                      style={{ background: theme.bgCardAlt ?? theme.bgCard, color: theme.textMuted, borderLeft: `3px solid ${theme.accentGlowStrong}` }}>
                      {pillar.detail}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}