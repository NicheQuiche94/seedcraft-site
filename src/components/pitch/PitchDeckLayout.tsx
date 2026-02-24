'use client'

import { useEffect, useRef } from 'react'
import type { PitchConfig } from '@/types/pitch'
import { buildCssVars, buildFontUrl } from './themeUtils'

import PitchNav from './PitchNav'
import Hero from './sections/Hero'
import Market from './sections/Market'
import Problem from './sections/Problem'
import OriginalIdea from './sections/OriginalIdea'
import Shift from './sections/Shift'
import WhyShift from './sections/WhyShift'
import AppPreview from './sections/AppPreview'
import Branding from './sections/Branding'
import GoToMarket from './sections/GoToMarket'
import Revenue from './sections/Revenue'
import Process from './sections/Process'
import Deal from './sections/Deal'
import Closing from './sections/Closing'

interface Props {
  config: PitchConfig
}

function Divider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-10">
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--p-border), transparent)' }} />
    </div>
  )
}

export default function PitchDeckLayout({ config }: Props) {
  const { theme, content } = config
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Scroll-reveal observer
  useEffect(() => {
    const els = wrapperRef.current?.querySelectorAll<HTMLElement>('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const cssVars = buildCssVars(theme)
  const fontUrl = buildFontUrl(theme)

  return (
    <>
      <link rel="stylesheet" href={fontUrl} />
      <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: opacity .7s ease-out, transform .7s ease-out; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px);} to { opacity:1; transform:translateY(0);} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes scrollPulse { 0%,100%{opacity:.3} 50%{opacity:1} }
      `}</style>

      <div
        ref={wrapperRef}
        style={{ ...cssVars, background: theme.bg, color: theme.text,
          fontFamily: `'${theme.fontSans}', -apple-system, sans-serif`,
          WebkitFontSmoothing: 'antialiased' }}>

        <PitchNav theme={theme} label={config.content.hero.badge} slug={config.slug} />

        <Hero content={content.hero} theme={theme} />

        {content.market    && <><Divider /><Market    content={content.market}      theme={theme} /></>}
        {content.problem   && <><Divider /><Problem   content={content.problem}     theme={theme} /></>}
        {content.originalIdea && <><Divider /><OriginalIdea content={content.originalIdea} theme={theme} /></>}
        {content.shift     && <><Divider /><Shift     content={content.shift}       theme={theme} /></>}
        {content.whyShift  && <><Divider /><WhyShift  content={content.whyShift}    theme={theme} /></>}
        {content.appPreview && <><Divider /><AppPreview content={content.appPreview} theme={theme} /></>}
        {content.branding  && <><Divider /><Branding  content={content.branding}    theme={theme} /></>}
        {content.goToMarket && <><Divider /><GoToMarket content={content.goToMarket} theme={theme} /></>}
        {content.revenue   && <><Divider /><Revenue   content={content.revenue}     theme={theme} /></>}
        {content.process   && <><Divider /><Process   content={content.process}     theme={theme} /></>}
        {content.deal      && <><Divider /><Deal      content={content.deal}        theme={theme} /></>}

        <Divider />
        <Closing content={content.closing} theme={theme} />

        <footer className="text-center py-16 text-xs tracking-wide"
          style={{ borderTop: `1px solid var(--p-border)`, color: '#444' }}>
          {content.closing.footerText}
        </footer>
      </div>
    </>
  )
}