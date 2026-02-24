import type { ProcessContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, ValueTag } from './_shared'

interface Props { content: ProcessContent; theme: PitchTheme }

export default function Process({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        <div className="mt-10 space-y-0">
          {content.steps.map((step, i) => (
            <div key={i} className="grid grid-cols-[60px_1fr] gap-6 relative">
              {/* Marker */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold z-10"
                  style={{ border: `1px solid ${theme.accent}`, color: theme.accent, background: theme.bg }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < content.steps.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: theme.accentGlowStrong }} />
                )}
              </div>
              {/* Content */}
              <div className="rounded-2xl p-8 mb-6" style={{ background: theme.bgCard, border: `1px solid ${theme.border}` }}>
                <h3 className="text-xl font-normal mb-2" style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>{step.body}</p>
                <ValueTag theme={theme}>{step.value}</ValueTag>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}