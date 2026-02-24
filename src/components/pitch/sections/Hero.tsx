import type { HeroContent, PitchTheme } from '@/types/pitch'

interface Props { content: HeroContent; theme: PitchTheme }

export default function Hero({ content, theme }: Props) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-10 pt-24 pb-24 relative">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-12 text-xs font-medium tracking-widest uppercase"
        style={{ border: `1px solid ${theme.border}`, background: theme.bgCard, color: theme.textMuted,
          animation: 'fadeUp .8s ease-out' }}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: theme.accent, animation: 'pulse 2s ease-in-out infinite' }} />
        {content.badge}
      </div>

      {/* Title */}
      <h1 className="text-7xl md:text-8xl font-normal leading-none mb-8"
        style={{ fontFamily: 'var(--p-font-serif)', color: theme.text, animation: 'fadeUp .8s ease-out .15s both' }}>
        {content.titleStart}<em style={{ fontStyle: 'italic', color: theme.accent }}>{content.titleAccent}</em>
      </h1>

      {/* Subtitle */}
      <p className="text-xl max-w-xl leading-relaxed mb-12"
        style={{ color: theme.textMuted, animation: 'fadeUp .8s ease-out .3s both' }}>
        {content.subtitle}
      </p>

      {/* Names */}
      <div className="flex justify-center gap-16" style={{ animation: 'fadeUp .8s ease-out .45s both' }}>
        <div>
          <div className="text-base font-medium" style={{ color: theme.text }}>{content.originatorName}</div>
          <div className="text-xs mt-1" style={{ color: theme.textMuted }}>{content.originatorRole}</div>
        </div>
        <div>
          <div className="text-base font-medium" style={{ color: theme.text }}>Seedcraft</div>
          <div className="text-xs mt-1" style={{ color: theme.textMuted }}>{content.studioRole}</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ animation: 'fadeUp .8s ease-out .6s both' }}>
        <span className="text-xs tracking-widest uppercase" style={{ color: theme.textMuted }}>Scroll</span>
        <div className="w-px h-10" style={{ background: `linear-gradient(to bottom, ${theme.accent}, transparent)`, animation: 'scrollPulse 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}