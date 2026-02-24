'use client'

import { useState, KeyboardEvent } from 'react'
import type { PitchTheme } from '@/types/pitch'
import { Lock } from 'lucide-react'
interface Props {
  slug: string
  theme: PitchTheme
  onSuccess: () => void
}

export default function PasswordGate({ slug, theme, onSuccess }: Props) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit() {
    if (!value.trim()) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/pitch/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, password: value }),
      })

      if (res.ok) {
        onSuccess()
      } else {
        setError('Incorrect password. Please try again.')
        setValue('')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') submit()
  }

  const fontUrl = buildFontUrl(theme)

  return (
    <>
      {fontUrl && <link rel="stylesheet" href={fontUrl} />}
      <div className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: theme.bg, fontFamily: `'${theme.fontSans}', sans-serif` }}>
        <div className="text-center max-w-sm w-full px-8">
          <div style={{ fontFamily: `'${theme.fontSerif}', serif`, color: theme.text }}
            className="text-2xl mb-1">
            Seedcraft <span style={{ color: theme.accent }}>Ventures</span>
          </div>
          <div style={{ color: theme.accent }}
            className="text-xs font-bold uppercase tracking-widest mb-10">
            Private Proposal
          </div>
          <div className="mb-8 p-4 rounded-full inline-flex" style={{ background: theme.accentGlow }}>
            <Lock size={32} color={theme.accent} strokeWidth={1.5} />
          </div>
          <p style={{ fontFamily: `'${theme.fontSerif}', serif`, color: theme.text }}
            className="text-2xl mb-2">
            Enter password
          </p>
          <p style={{ color: theme.textMuted }} className="text-sm mb-8">
            This proposal is private. Enter the password you were given to continue.
          </p>
          <input
            type="password"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={onKey}
            placeholder="Password"
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl text-center text-sm outline-none transition-all mb-2"
            style={{
              background: theme.bgCard,
              border: `2px solid ${error ? '#f87171' : theme.border}`,
              color: theme.text,
              fontFamily: `'${theme.fontSans}', sans-serif`,
            }}
          />
          <div className="h-5 text-xs font-semibold mb-2" style={{ color: '#f87171' }}>
            {error}
          </div>
          <button
            onClick={submit}
            disabled={loading}
            className="w-full py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all disabled:opacity-50"
            style={{
              background: theme.accent,
              color: theme.bg,
              fontFamily: `'${theme.fontSans}', sans-serif`,
            }}>
            {loading ? 'Checking…' : 'Continue'}
          </button>
          <p className="text-xs mt-10" style={{ color: theme.textMuted, opacity: 0.4 }}>
            © 2026 Seedcraft Ventures Ltd
          </p>
        </div>
      </div>
    </>
  )
}

function buildFontUrl(theme: PitchTheme): string {
  const families: string[] = []
  const serifParam = theme.fontSerifWeights
    ? `family=${encodeURIComponent(theme.fontSerif)}:${theme.fontSerifWeights}`
    : `family=${encodeURIComponent(theme.fontSerif)}`
  const sansParam = theme.fontSansWeights
    ? `family=${encodeURIComponent(theme.fontSans)}:${theme.fontSansWeights}`
    : `family=${encodeURIComponent(theme.fontSans)}`
  families.push(serifParam, sansParam)
  return `https://fonts.googleapis.com/css2?${families.join('&')}&display=swap`
}