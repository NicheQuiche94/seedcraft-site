'use client'

import { Lock, Shield, CheckCircle } from 'lucide-react'
import type { PitchTheme } from '@/types/pitch'
import PhoneFrame from '../PhoneFrame'

interface Props { theme: PitchTheme }

export default function AiProofMockup({ theme }: Props) {
  return (
    <PhoneFrame theme={theme}>
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 pt-5 pb-2.5">
        <div className="flex items-center gap-1.5">
          <div className="rounded-full" style={{ width: 22, height: 22, background: '#FFD93D' }} />
          <div className="rounded-md px-1.5 py-0.5 text-xs font-bold"
            style={{ border: `1.5px solid ${theme.border}`, fontSize: '0.6rem', color: theme.text }}>
            14:00
          </div>
        </div>
        <span style={{ fontSize: '1rem', color: theme.textMuted }}>‹</span>
      </div>

      <div className="px-3.5 pb-3 space-y-2.5">
        {/* Writing area */}
        <div className="rounded-xl p-2.5" style={{ background: theme.bgCard, border: `1.5px solid ${theme.border}`, minHeight: 100 }}>
          <p style={{ color: theme.textMuted, fontSize: '0.6rem', lineHeight: 1.8 }}>
            The morning light crept through the curtains like a secret being told – slowly, then all at once. She hadn't written in three days and her fingers ached for the keys.
            <span className="inline-block w-px h-3 ml-0.5 align-middle animate-pulse" style={{ background: theme.accent }} />
          </p>
        </div>

        {/* Shield bar */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg"
          style={{ background: `linear-gradient(90deg, ${theme.accentGlow}, rgba(16,185,129,0.08))`, fontSize: '0.55rem', fontWeight: 600, color: theme.accentDim }}>
          <Lock size={9} />
          <span>End-to-end encrypted · Never used for AI training</span>
          <div className="ml-auto rounded-full" style={{ width: 5, height: 5, background: '#10B981' }} />
        </div>

        {/* Protection card */}
        <div className="rounded-xl p-2" style={{ background: theme.bgCard, border: `1.5px solid ${theme.border}` }}>
          <div className="flex items-center gap-1 mb-1">
            <Shield size={9} color={theme.accentDim} />
            <span style={{ fontSize: '0.52rem', fontWeight: 700, color: theme.accentDim }}>Your Writing Is Protected</span>
          </div>
          <p style={{ fontSize: '0.5rem', color: theme.textMuted, lineHeight: 1.6 }}>
            Escapage uses end-to-end encryption. Your words are stored on your device and our encrypted servers. They will never be sold, shared, or used to train AI models. Ever.
          </p>
          <div className="flex items-center gap-1 mt-1.5">
            <CheckCircle size={8} color="#10B981" />
            <span style={{ fontSize: '0.48rem', fontWeight: 700, color: '#10B981' }}>Verified AI-Free Zone</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}