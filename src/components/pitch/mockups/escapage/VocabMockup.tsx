'use client'

import { Flame } from 'lucide-react'
import type { PitchTheme } from '@/types/pitch'
import PhoneFrame from '../PhoneFrame'

interface Props { theme: PitchTheme }

export default function VocabMockup({ theme }: Props) {
  return (
    <PhoneFrame theme={theme}>
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 pt-5 pb-2.5">
        <span style={{ fontFamily: `'DM Serif Display', serif`, fontSize: '0.9rem', fontWeight: 700, color: theme.text }}>
          Play 🎲✦
        </span>
        <span style={{ fontSize: '0.55rem', fontWeight: 700, color: theme.accent }}>Round 3/5</span>
      </div>

      <div className="px-3.5 pb-3 space-y-2.5">
        {/* Word card */}
        <div className="text-center py-3">
          <div style={{ fontFamily: `'DM Serif Display', serif`, fontSize: '1.4rem', color: theme.text }}>Ephemeral</div>
          <div style={{ fontSize: '0.52rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.accent, marginTop: 2 }}>Adjective</div>
          <div style={{ fontSize: '0.58rem', color: theme.textMuted, marginTop: 6, lineHeight: 1.5, padding: '0 10px' }}>
            Lasting for a very short time; fleeting.
          </div>
        </div>

        {/* Prompt */}
        <div className="rounded-xl p-2.5 text-center"
          style={{ background: theme.bgCard, border: `1.5px solid ${theme.border}` }}>
          <div style={{ fontSize: '0.55rem', fontWeight: 700, color: theme.text, marginBottom: 6 }}>Use it in a sentence:</div>
          <div style={{ fontSize: '0.58rem', color: theme.textMuted, lineHeight: 1.6 }}>
            The{' '}
            <span className="inline-block mx-0.5" style={{ borderBottom: `2px solid ${theme.accent}`, minWidth: 48 }} />
            {' '}beauty of the sunset reminded her that nothing lasts, and that was the whole point.
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 justify-center">
          {[
            { label: 'Skip', featured: false },
            { label: 'Submit', featured: true },
          ].map(btn => (
            <div key={btn.label} className="rounded-lg px-3.5 py-1.5 text-center cursor-pointer"
              style={{
                fontSize: '0.58rem', fontWeight: 700,
                background: btn.featured ? theme.accent : theme.bgCard,
                color: btn.featured ? theme.bg : theme.textMuted,
                border: `1px solid ${btn.featured ? theme.accent : theme.border}`,
              }}>
              {btn.label}
            </div>
          ))}
        </div>

        {/* Streak */}
        <div className="flex items-center justify-center gap-1 rounded-lg py-1.5"
          style={{ background: '#FFF8DB', fontSize: '0.52rem', fontWeight: 700, color: '#B8860B' }}>
          <Flame size={10} color="#F59E0B" />
          <span>7-day writing streak · 34 new words learned</span>
        </div>
      </div>
    </PhoneFrame>
  )
}