import type { GoToMarketContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle } from './_shared'
import { Gift } from 'lucide-react'

interface Props { content: GoToMarketContent; theme: PitchTheme }

export default function GoToMarket({ content, theme }: Props) {
  return (
    <Section>
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-10">
          {/* Visual */}
          <div className="rounded-2xl p-12 text-center"
            style={{ background: `linear-gradient(135deg, ${theme.accentGlow}, rgba(0,0,0,0))`,
              border: `1px solid ${theme.accentGlowStrong}` }}>
            <div className="mb-6 p-4 rounded-2xl inline-flex" style={{ background: theme.accentGlow }}>
              <Gift size={48} color={theme.accent} strokeWidth={1} />
            </div>
            <div className="rounded-xl p-6 max-w-xs mx-auto"
              style={{ background: theme.bg, border: `1px solid ${theme.border}` }}>
              <h4 className="text-lg font-normal mb-2" style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>{content.cardTitle}</h4>
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: theme.textMuted }}>{content.cardBody}</p>
              <div className="text-2xl font-normal mt-3" style={{ fontFamily: 'var(--p-font-serif)', color: theme.accent }}>{content.cardPrice}</div>
            </div>
          </div>
          {/* Points */}
          <div className="flex flex-col gap-8">
            {content.points.map((pt, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{ background: theme.accentGlow, border: `1px solid ${theme.accentGlowStrong}`, color: theme.accent }}>
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1" style={{ color: theme.text }}>{pt.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
