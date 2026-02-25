'use client'

import type { AttributionContent, PitchTheme } from '@/types/pitch'
import { Section, Reveal, SectionLabel, SectionTitle, SectionBody, HandwrittenNote } from './_shared'

interface Props { content: AttributionContent; theme: PitchTheme }

const ORIGIN_CONFIG = {
  founder: {
    bg: '#FFF8DB',
    badgeBg: '#FFD93D',
    badgeText: '#1a1a2e',
    badgeLabel: 'Yours',
    headerColor: '#92650A',
  },
  seedcraft: {
    bg: undefined as string | undefined,
    badgeBg: undefined as string | undefined,
    badgeText: undefined as string | undefined,
    badgeLabel: 'Seedcraft',
    headerColor: undefined as string | undefined,
  },
}

export default function Attribution({ content, theme }: Props) {
  const founderItems   = content.items.filter(i => i.origin === 'founder')
  const seedcraftItems = content.items.filter(i => i.origin === 'seedcraft')

  function renderGroup(
    items: typeof content.items,
    sectionLabel: string,
    origin: 'founder' | 'seedcraft'
  ) {
    const cfg = ORIGIN_CONFIG[origin]
    return (
      <div className="mb-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest"
            style={{ color: cfg.headerColor ?? theme.accent }}>
            {sectionLabel}
          </span>
          <div className="flex-1 h-px" style={{ background: theme.border }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl p-6"
              style={{
                background: cfg.bg ?? theme.bgCard,
                border: `1px solid ${theme.border}`,
              }}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="text-base font-semibold" style={{ color: theme.text }}>{item.title}</h4>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    background: cfg.badgeBg ?? theme.accentGlow,
                    color: cfg.badgeText ?? theme.accent,
                    fontSize: '0.6rem',
                  }}>
                  {cfg.badgeLabel}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Section>
      <Reveal>
        <SectionLabel theme={theme}>{content.label}</SectionLabel>
        <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
        {content.subtitle && <SectionBody theme={theme}>{content.subtitle}</SectionBody>}
        {content.handwrittenNote && (
          <div className="mt-3 mb-8">
            <HandwrittenNote callout={content.handwrittenNote} theme={theme} />
          </div>
        )}

        {/* Legend */}
        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: '#FFD93D' }} />
            <span className="text-xs" style={{ color: theme.textMuted }}>Your idea</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: theme.accent }} />
            <span className="text-xs" style={{ color: theme.textMuted }}>Seedcraft addition</span>
          </div>
        </div>

        {renderGroup(founderItems,   content.founderSectionLabel,   'founder')}
        {renderGroup(seedcraftItems, content.seedcraftSectionLabel, 'seedcraft')}

        {content.handwrittenNote && (
          <div className="text-right mt-4">
            <HandwrittenNote callout={{ text: "we build all of it – your ideas and ours, together 🔨", rotation: 1 }} theme={theme} />
          </div>
        )}
      </Reveal>
    </Section>
  )
}