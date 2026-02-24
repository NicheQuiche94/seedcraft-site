import type { OriginalIdeaContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, SectionBody, InsightBlock } from './_shared'

interface Props { content: OriginalIdeaContent; theme: PitchTheme }

export default function OriginalIdea({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        <SectionBody theme={theme}>{content.body}</SectionBody>

        {/* Comparison table */}
        <div className="mt-10 rounded-2xl overflow-hidden" style={{ border: `1px solid ${theme.border}` }}>
          {/* Header */}
          <div className="grid grid-cols-3" style={{ background: theme.bgCard, borderBottom: `1px solid ${theme.border}` }}>
            <div className="px-6 py-4 text-xs font-semibold uppercase tracking-widest" style={{ color: theme.textMuted }} />
            <div className="px-6 py-4 text-xs font-semibold uppercase tracking-widest" style={{ color: theme.textMuted }}>{content.comparisonThemLabel}</div>
            <div className="px-6 py-4 text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accent }}>{content.comparisonUsLabel}</div>
          </div>
          {content.rows.map((row, i) => (
            <div key={i} className="grid grid-cols-3" style={{ borderBottom: i < content.rows.length - 1 ? `1px solid ${theme.border}` : 'none' }}>
              <div className="px-6 py-4 text-sm font-medium" style={{ color: theme.text }}>{row.feature}</div>
              <div className="px-6 py-4 text-sm" style={{ color: '#555' }}>{row.them}</div>
              <div className="px-6 py-4 text-sm font-medium" style={{ color: theme.accent }}>{row.us}</div>
            </div>
          ))}
        </div>

        <InsightBlock quote={content.insight} attr={content.insightAttr} theme={theme} />
      </Reveal>
    </Section>
  )
}