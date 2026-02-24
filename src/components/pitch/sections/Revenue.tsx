import type { RevenueContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, SectionBody, Card, InsightBlock } from './_shared'

interface Props { content: RevenueContent; theme: PitchTheme }

export default function Revenue({ content, theme }: Props) {
  return (
    <Section id="revenue">
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        <SectionBody theme={theme}>{content.body}</SectionBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {content.scenarios.map((s, i) => (
            <Card key={i} theme={theme} featured={s.featured}>
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: theme.textMuted }}>{s.label}</div>
              <div className="text-4xl font-normal mb-1" style={{ fontFamily: 'var(--p-font-serif)', color: s.featured ? theme.accent : theme.text }}>{s.amount}</div>
              <div className="text-sm mb-4" style={{ color: theme.textMuted }}>{s.period}</div>
              <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#555' }}>{s.detail}</div>
            </Card>
          ))}
        </div>
        <InsightBlock quote={content.insight} attr={content.insightAttr} theme={theme} />
      </Reveal>
    </Section>
  )
}