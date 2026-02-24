import type { DealContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel } from './_shared'

interface Props { content: DealContent; theme: PitchTheme }

export default function Deal({ content, theme }: Props) {
  return (
    <Section id="deal">
      <Reveal>
        <div className="rounded-2xl p-14 text-center" style={{ background: theme.bgCard, border: `1px solid ${theme.border}` }}>
          <SectionLabel theme={theme}>{content.label}</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-normal mb-4" style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>
            {content.headline}<em style={{ fontStyle: 'italic', color: theme.accent }}>{content.headlineAccent}</em>
          </h2>
          <p className="text-lg max-w-lg mx-auto mb-10 leading-relaxed" style={{ color: theme.textMuted }}>{content.subheading}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
            {content.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span style={{ color: theme.accent }}>✓</span>
                <span className="text-sm" style={{ color: theme.textMuted }}>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8" style={{ borderTop: `1px solid ${theme.border}` }}>
            <div className="text-xs uppercase tracking-widest mb-2" style={{ color: theme.textMuted }}>{content.totalLabel}</div>
            <div className="text-5xl font-normal" style={{ fontFamily: 'var(--p-font-serif)', color: theme.accent }}>{content.totalValue}</div>
            <div className="text-sm mt-2" style={{ color: theme.textMuted }}>{content.totalNote}</div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}