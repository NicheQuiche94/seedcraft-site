'use client'

import type { PitchTheme } from '@/types/pitch'

interface Props {
  theme: PitchTheme
  children: React.ReactNode
  className?: string
}

export default function PhoneFrame({ theme, children, className = '' }: Props) {
  return (
    <div
      className={`relative rounded-[28px] mx-auto ${className}`}
      style={{
        width: 220,
        background: theme.bgCard,
        border: `3px solid ${theme.border}`,
        padding: 12,
        boxShadow: `0 8px 30px ${theme.accentGlow}, 0 2px 8px rgba(0,0,0,0.08)`,
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-1.5 left-1/2 -translate-x-1/2 rounded-full"
        style={{ width: 60, height: 5, background: theme.border }}
      />
      {/* Screen */}
      <div
        className="rounded-[18px] overflow-hidden mt-3"
        style={{ background: theme.bg, minHeight: 380, fontSize: '0.7rem' }}
      >
        {children}
      </div>
    </div>
  )
}