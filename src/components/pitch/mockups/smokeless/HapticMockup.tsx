'use client'

import { Leaf } from 'lucide-react'
import type { PitchTheme } from '@/types/pitch'
import PhoneFrame from '../PhoneFrame'

interface Props { theme: PitchTheme }

export default function HapticMockup({ theme }: Props) {
  return (
    <PhoneFrame theme={theme}>
      <div className="flex flex-col items-center px-3 pt-4 pb-4 gap-3">
        {/* Haptic ring */}
        <div className="relative flex items-center justify-center rounded-full"
          style={{
            width: 148, height: 148,
            border: `3px solid ${theme.accent}`,
            background: `radial-gradient(circle, ${theme.accentGlow}, transparent 70%)`,
          }}>
          {/* Outer ring */}
          <div className="absolute rounded-full pointer-events-none"
            style={{ inset: -6, border: `1px solid ${theme.accentGlow}`, borderRadius: '50%' }} />
          <div className="text-center">
            <Leaf size={26} color={theme.accent} strokeWidth={1.5} className="mx-auto mb-1.5" />
            <div style={{ fontSize: '0.7rem', fontWeight: 500, color: theme.text, lineHeight: 1.3 }}>
              I don&apos;t smoke<br />anymore
            </div>
            <div style={{ fontSize: '0.55rem', color: theme.accent, marginTop: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Hold to confirm
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="w-full space-y-1.5">
          <div className="rounded-xl p-2.5 text-center"
            style={{ background: theme.accentGlow, border: `1px solid ${theme.accentGlowStrong}` }}>
            <div style={{ fontSize: '0.52rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.textMuted }}>Time on plan</div>
            <div style={{ fontFamily: 'var(--p-font-serif)', fontSize: '1.1rem', color: theme.accent, marginTop: 2 }}>5 Days 12 Hours</div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[{ label: 'Avoided', value: '110' }, { label: 'Saved', value: '€75' }].map(s => (
              <div key={s.label} className="rounded-xl p-2.5 text-center"
                style={{ background: theme.accentGlow, border: `1px solid ${theme.accentGlowStrong}` }}>
                <div style={{ fontSize: '0.52rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.textMuted }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--p-font-serif)', fontSize: '1.1rem', color: theme.accent, marginTop: 2 }}>{s.value}</div>
              </div>
            ))}
          </div>
          <div className="text-center pt-1">
            <span style={{ fontSize: '0.6rem', color: theme.textMuted, opacity: 0.6 }}>I slipped up ↻</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}