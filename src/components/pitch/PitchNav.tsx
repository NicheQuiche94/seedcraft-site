'use client'

import type { PitchTheme } from '@/types/pitch'

interface Props { theme: PitchTheme; label: string; slug: string }

const NAV_LINKS = [
  { href: '#market',   label: 'Problem' },
  { href: '#shift',    label: 'Solution' },
  { href: '#product',  label: 'Product' },
  { href: '#revenue',  label: 'Revenue' },
  { href: '#deal',     label: 'The Deal' },
]

export default function PitchNav({ theme, label, slug }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-5"
      style={{ background: `rgba(${hexToRgb(theme.bg)}, 0.8)`, backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${theme.border}` }}>
      <div className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: theme.textMuted }}>
        <span style={{ color: theme.accent }}>Seedcraft</span> × {label.split('—')[1]?.trim() ?? slug}
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href}
              className="text-xs font-medium tracking-wider uppercase transition-colors"
              style={{ color: theme.textMuted }}
              onMouseEnter={e => (e.currentTarget.style.color = theme.text)}
              onMouseLeave={e => (e.currentTarget.style.color = theme.textMuted)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}