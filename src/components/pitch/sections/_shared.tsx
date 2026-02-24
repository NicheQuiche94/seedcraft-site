/**
 * Shared primitives used across pitch section components.
 * Import from here rather than duplicating in each section.
 */
import type { PitchTheme } from '@/types/pitch'

// ─── Layout wrappers ───────────────────────────────────────────────

export function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id}
      className="w-full max-w-5xl mx-auto px-10 py-24">
      {children}
    </section>
  )
}

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

// ─── Typography ────────────────────────────────────────────────────

export function SectionLabel({ children, theme }: { children: React.ReactNode; theme: PitchTheme }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest mb-6"
      style={{ color: theme.accent }}>
      {children}
    </p>
  )
}

export function SectionTitle({
  before, accent, theme, className = '',
}: { before: string; accent: string; theme: PitchTheme; className?: string }) {
  return (
    <h2 className={`text-4xl md:text-5xl font-normal leading-tight mb-6 ${className}`}
      style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>
      {before}<em style={{ fontStyle: 'italic', color: theme.accent }}>{accent}</em>
    </h2>
  )
}

export function SectionBody({ children, theme }: { children: React.ReactNode; theme: PitchTheme }) {
  return (
    <p className="text-lg leading-relaxed max-w-2xl"
      style={{ color: theme.textMuted }}>
      {children}
    </p>
  )
}

// ─── Cards ─────────────────────────────────────────────────────────

export function Card({ children, theme, featured = false }: {
  children: React.ReactNode; theme: PitchTheme; featured?: boolean
}) {
  return (
    <div className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: featured
          ? `linear-gradient(135deg, ${theme.accentGlow}, transparent)`
          : theme.bgCard,
        border: `1px solid ${featured ? theme.accentGlowStrong : theme.border}`,
      }}>
      {children}
    </div>
  )
}

export function CardTitle({ children, theme }: { children: React.ReactNode; theme: PitchTheme }) {
  return (
    <h3 className="text-xl font-normal mb-3" style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>
      {children}
    </h3>
  )
}

export function CardBody({ children, theme }: { children: React.ReactNode; theme: PitchTheme }) {
  return (
    <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>
      {children}
    </p>
  )
}

// ─── Insight block ─────────────────────────────────────────────────

export function InsightBlock({ quote, attr, theme }: { quote: string; attr: string; theme: PitchTheme }) {
  return (
    <div className="rounded-2xl p-10 mt-8"
      style={{
        background: `linear-gradient(135deg, ${theme.accentGlow}, rgba(0,0,0,0))`,
        border: `1px solid ${theme.accentGlowStrong}`,
      }}>
      <p className="text-2xl font-normal italic leading-snug mb-3"
        style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>
        {quote}
      </p>
      <p className="text-xs font-semibold tracking-wide" style={{ color: theme.accent }}>
        {attr}
      </p>
    </div>
  )
}

// ─── Value tag (process steps) ─────────────────────────────────────

export function ValueTag({ children, theme }: { children: React.ReactNode; theme: PitchTheme }) {
  return (
    <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs"
      style={{ background: theme.accentGlow, border: `1px solid ${theme.accentGlowStrong}`, color: theme.accent }}>
      {children}
    </span>
  )
}