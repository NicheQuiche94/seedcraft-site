import type { ClosingContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal } from './_shared'

interface Props { content: ClosingContent; theme: PitchTheme }

export default function Closing({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <div className="text-center py-16">
          {/* Logos */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <span className="px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase"
              style={{ border: `1px solid ${theme.accentGlowStrong}`, color: theme.accent }}>
              {content.studioLabel}
            </span>
            <span style={{ color: theme.textMuted }}>×</span>
            <span className="px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase"
              style={{ border: `1px solid ${theme.accentGlowStrong}`, color: theme.accent }}>
              {content.projectLabel}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-normal leading-tight mb-6"
            style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>
            {content.title}<em style={{ fontStyle: 'italic', color: theme.accent }}>{content.titleAccent}</em>
          </h2>

          <p className="text-xl max-w-md mx-auto leading-relaxed" style={{ color: theme.textMuted }}>
            {content.subtitle}
          </p>
        </div>
      </Reveal>
    </Section>
  )
}