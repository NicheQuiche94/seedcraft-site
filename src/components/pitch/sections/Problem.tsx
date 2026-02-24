import type { ProblemContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, SectionBody, Card, CardTitle, CardBody } from './_shared'
import DynamicIcon from '@/components/pitch/DynamicIcon'

interface Props { content: ProblemContent; theme: PitchTheme }

export default function Problem({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        <SectionBody theme={theme}>{content.body}</SectionBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {content.cards.map((c, i) => (
            <Card key={i} theme={theme}>
              <DynamicIcon name={c.icon} theme={theme} />
              <CardTitle theme={theme}>{c.title}</CardTitle>
              <CardBody theme={theme}>{c.body}</CardBody>
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}