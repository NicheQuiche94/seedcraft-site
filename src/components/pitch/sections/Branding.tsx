import type { BrandingContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, InsightBlock } from './_shared'

interface Props { content: BrandingContent; theme: PitchTheme }

export default function Branding({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {[
            { sublabel: content.readOneWayLabel, name: content.readOneWayName, tag: content.readOneWayTagline, accentName: false },
            { sublabel: content.readOtherLabel, name: content.readOtherName, tag: content.readOtherTagline, accentName: true },
          ].map((block, i) => (
            <div key={i} className="text-center p-8">
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: theme.textMuted }}>{block.sublabel}</div>
              <div className="text-3xl font-normal mb-2"
                style={{ fontFamily: 'var(--p-font-serif)', color: block.accentName ? theme.accent : theme.text }}>
                {block.name}
              </div>
              <div className="text-sm italic" style={{ color: theme.textMuted }}>{block.tag}</div>
            </div>
          ))}
        </div>
        <InsightBlock quote={content.insight} attr={content.insightAttr} theme={theme} />
      </Reveal>
    </Section>
  )
}