'use client'

import type { MockupsContent, PitchTheme } from '@/types/pitch'
import type React from 'react'
import { Section, Reveal, SectionLabel, SectionTitle, HandwrittenNote } from './_shared'

interface Props {
  content: MockupsContent
  theme: PitchTheme
  mockupComponents: Record<string, React.ComponentType<{ theme: PitchTheme }>>
}

export default function Mockups({ content, theme, mockupComponents }: Props) {
  return (
    <Section>
      <Reveal>
        <div className="text-center mb-10">
          <SectionLabel theme={theme}>{content.label}</SectionLabel>
          <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} className="text-center" />
          {content.handwrittenNote && (
            <HandwrittenNote callout={content.handwrittenNote} theme={theme} />
          )}
        </div>

        <div className={`grid gap-8 ${content.items.length === 3 ? 'grid-cols-1 md:grid-cols-3' : content.items.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-xs mx-auto'}`}>
          {content.items.map((item, i) => {
            const MockupComponent = mockupComponents[item.component]
            if (!MockupComponent) {
              console.warn(`No mockup component registered for key: "${item.component}"`)
              return null
            }
            return (
              <div key={i} className="text-center">
                <div className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: theme.accent }}>
                  {item.label}
                </div>
                <MockupComponent theme={theme} />
                <div className="mt-3 text-sm leading-relaxed" style={{ color: theme.textMuted }}>
                  {item.sublabel}
                </div>
                {item.handwrittenNote && (
                  <div className="mt-1">
                    <HandwrittenNote callout={item.handwrittenNote} theme={theme} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Reveal>
    </Section>
  )
}