import type { WhyShiftContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, Card, CardTitle, CardBody, InsightBlock } from './_shared'
import DynamicIcon from '@/components/pitch/DynamicIcon'

interface Props { content: WhyShiftContent; theme: PitchTheme }

export default function WhyShift({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {content.cards.map((c, i) => (
            <Card key={i} theme={theme}>
              <DynamicIcon name={c.icon} theme={theme} />
              <CardTitle theme={theme}>{c.title}</CardTitle>
              <CardBody theme={theme}>{c.body}</CardBody>
            </Card>
          ))}
        </div>
        <InsightBlock quote={content.insight} attr={content.insightAttr} theme={theme} />
      </Reveal>
    </Section>
  )
}