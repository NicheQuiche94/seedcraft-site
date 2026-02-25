'use client'

import { Search, Settings } from 'lucide-react'
import type { PitchTheme } from '@/types/pitch'
import PhoneFrame from '../PhoneFrame'

interface Props { theme: PitchTheme }

const ENTRIES = [
  { title: 'Nostalgia Glory', snippet: 'Once we leave our small town homes to embark on the journey...', meta: 'Solo · 45 min · Fri, 21 Oct', dotColor: '#FFD93D' },
  { title: 'Peace Oasis in Chaos', snippet: 'Whenever the bombs have been dropped on innocents...', meta: 'Circle · 55 min · Sat, 22 Oct', dotColor: '#0EA5B7' },
  { title: 'Art is a Rebellion', snippet: 'Energy cannot be created nor can it be destroyed...', meta: 'Play · 55 min · Sun, 23 Oct', dotColor: '#A855F7' },
]

const TABS = ['All', 'Solo', 'Circle', 'Play']

export default function ArchiveMockup({ theme }: Props) {
  return (
    <PhoneFrame theme={theme}>
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 pt-5 pb-2.5"
        style={{ fontFamily: `'DM Serif Display', serif`, fontSize: '1rem', fontWeight: 700 }}>
        <span style={{ color: theme.text }}>Archive ⭐</span>
        <Settings size={14} color={theme.textMuted} />
      </div>

      <div className="px-3.5 pb-3">
        {/* Search bar */}
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl mb-2.5"
          style={{ background: theme.bgCard, border: `1.5px solid ${theme.border}` }}>
          <span style={{ color: theme.textMuted, fontSize: '0.6rem' }}>Search your writing...</span>
          <Search size={10} color={theme.textMuted} className="ml-auto" />
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 mb-2.5">
          {TABS.map((tab, i) => (
            <div key={tab} className="rounded-md px-2 py-0.5"
              style={{
                fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                background: i === 0 ? theme.accent : theme.bgCard,
                color: i === 0 ? theme.bg : theme.textMuted,
              }}>
              {tab}
            </div>
          ))}
        </div>

        {/* Entries */}
        {ENTRIES.map((e, i) => (
          <div key={i} className="flex items-start gap-2 py-2.5"
            style={{ borderBottom: i < ENTRIES.length - 1 ? `1px solid ${theme.border}` : 'none' }}>
            <div className="rounded-full mt-1 flex-shrink-0" style={{ width: 8, height: 8, background: e.dotColor }} />
            <div className="flex-1 min-w-0">
              <div className="font-bold truncate" style={{ fontSize: '0.65rem', color: theme.text }}>{e.title}</div>
              <div className="truncate" style={{ fontSize: '0.55rem', color: theme.textMuted, marginTop: 2 }}>{e.snippet}</div>
              <div style={{ fontSize: '0.5rem', color: theme.accent, fontWeight: 600, marginTop: 3 }}>{e.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </PhoneFrame>
  )
}