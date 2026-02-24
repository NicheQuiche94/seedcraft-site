import type { MarketContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, SectionBody, Card } from './_shared'

interface Props { content: MarketContent; theme: PitchTheme }

export default function Market({ content, theme }: Props) {
  return (
    <Section id="market">
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        <SectionBody theme={theme}>{content.body}</SectionBody>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {content.stats.map((s, i) => (
            <Card key={i} theme={theme}>
              <div className="text-5xl font-normal leading-none mb-2" style={{ fontFamily: 'var(--p-font-serif)', color: theme.accent }}>{s.number}</div>
              <div className="text-sm tracking-wide" style={{ color: theme.textMuted }}>{s.label}</div>
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}