import type { ShiftContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, SectionBody } from './_shared'

interface Props { content: ShiftContent; theme: PitchTheme }

export default function Shift({ content, theme }: Props) {
  return (
    <Section id="shift">
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        <SectionBody theme={theme}>{content.body}</SectionBody>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 mt-10">
          {/* Old */}
          <div className="rounded-2xl p-10 text-center opacity-50"
            style={{ background: theme.bgCard, border: `1px solid ${theme.border}` }}>
            <h3 className="text-3xl font-normal mb-3" style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>{content.old.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>{content.old.body}</p>
          </div>

          <div className="text-4xl text-center md:rotate-0 rotate-90" style={{ color: theme.accent }}>→</div>

          {/* New */}
          <div className="rounded-2xl p-10 text-center"
            style={{ background: `linear-gradient(135deg, ${theme.accentGlow}, transparent)`,
              border: `1px solid ${theme.accentGlowStrong}` }}>
            <h3 className="text-3xl font-normal mb-3" style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>{content.new.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>{content.new.body}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}