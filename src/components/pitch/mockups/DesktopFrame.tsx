'use client'

import type { PitchTheme } from '@/types/pitch'

interface Props {
  theme: PitchTheme
  children: React.ReactNode
  className?: string
}

export default function DesktopFrame({ theme, children, className = '' }: Props) {
  return (
    <div
      className={`relative rounded-2xl mx-auto ${className}`}
      style={{
        background: theme.bgCard,
        border: `2px solid ${theme.border}`,
        boxShadow: `0 8px 30px ${theme.accentGlow}, 0 2px 8px rgba(0,0,0,0.08)`,
        overflow: 'hidden',
      }}
    >
      {/* Browser chrome bar */}
      <div
        className="flex items-center gap-2 px-4"
        style={{
          height: 36,
          background: theme.bgCardAlt,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        {['#f87171', '#fbbf24', '#34d399'].map((c, i) => (
          <div key={i} className="rounded-full" style={{ width: 10, height: 10, background: c }} />
        ))}
        <div
          className="flex-1 rounded-md mx-4 text-center"
          style={{
            height: 20,
            background: theme.bg,
            border: `1px solid ${theme.border}`,
            fontSize: '0.55rem',
            lineHeight: '20px',
            color: theme.textMuted,
          }}
        >
          app.seedcraft.co
        </div>
      </div>
      {/* Content */}
      <div style={{ background: theme.bg }}>{children}</div>
    </div>
  )
}