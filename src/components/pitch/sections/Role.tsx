'use client'

import type { RoleContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, SectionBody, HandwrittenNote } from './_shared'

interface Props { content: RoleContent; theme: PitchTheme }

export default function Role({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        {content.subtitle && <SectionBody theme={theme}>{content.subtitle}</SectionBody>}
        {content.handwrittenNote && (
          <div className="mt-3 mb-8">
            <HandwrittenNote callout={content.handwrittenNote} theme={theme} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {content.roles.map((role, i) => (
            <div key={i} className="rounded-2xl p-6"
              style={{ background: theme.bgCard, border: `1px solid ${theme.border}` }}>
              <h4 className="text-base font-semibold mb-2" style={{ color: theme.text }}>{role.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>{role.body}</p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        {content.ctaTitle && (
          <div className="mt-12 text-center">
            <h2 className="text-4xl font-normal mb-4"
              style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>
              {content.ctaTitle}
            </h2>
            {content.ctaBody && (
              <p className="text-lg max-w-lg mx-auto mb-6 leading-relaxed" style={{ color: theme.textMuted }}>
                {content.ctaBody}
              </p>
            )}
            {content.ctaEmail && (
              <a href={`mailto:${content.ctaEmail}`}
                className="inline-block px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5"
                style={{ background: theme.accent, color: theme.bg }}>
                Start the conversation
              </a>
            )}
          </div>
        )}
      </Reveal>
    </Section>
  )
}