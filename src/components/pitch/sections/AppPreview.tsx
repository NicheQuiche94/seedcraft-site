// import type { AppPreviewContent, PitchTheme } from '@/types/pitch'
// import { Section, Reveal, SectionLabel, SectionTitle, SectionBody } from './_shared'
// import { Leaf } from 'lucide-react'

// interface Props { content: AppPreviewContent; theme: PitchTheme }

// export default function AppPreview({ content, theme }: Props) {
//   return (
//     <Section id="product">
//       <Reveal>
//         <SectionLabel theme={theme}>{content.label}</SectionLabel>
//         <SectionTitle before={content.title} accent={content.titleAccent} theme={theme} />
//         <SectionBody theme={theme}>{content.bodyTop}</SectionBody>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-10">
//           {/* Phone mockup */}
//           <div className="flex justify-center">
//             <div className="w-64 rounded-[36px] p-4 relative overflow-hidden"
//               style={{ background: `linear-gradient(160deg, #0d1a12, #0a1510, #081210)`,
//                 border: `2px solid rgba(255,255,255,0.1)`,
//                 boxShadow: `0 0 80px ${theme.accentGlow}, 0 40px 80px rgba(0,0,0,.5)` }}>
//               {/* Notch */}
//               <div className="w-24 h-6 mx-auto mb-6 rounded-b-2xl" style={{ background: theme.bg }} />
//               {/* Haptic ring */}
//               <div className="w-40 h-40 rounded-full flex items-center justify-center mx-auto mb-6 relative"
//                 style={{ border: `3px solid ${theme.accent}`,
//                   background: `radial-gradient(circle, ${theme.accentGlow}, transparent 70%)` }}>
//                 <div className="text-center">
//                   <Leaf size={28} color={theme.accent} strokeWidth={1.5} className="mx-auto mb-2" />
//                   <div className="text-xs font-medium leading-tight whitespace-pre-line" style={{ color: theme.text }}>{content.hapticMessage}</div>
//                   <div className="text-xs mt-2 tracking-widest uppercase" style={{ color: theme.accent }}>{content.hapticHold}</div>
//                 </div>
//               </div>
//               {/* Stats */}
//               <div className="space-y-2 px-1">
//                 <div className="rounded-xl p-3 text-center"
//                   style={{ background: `${theme.accentGlow}`, border: `1px solid ${theme.accentGlowStrong}` }}>
//                   <div className="text-xs uppercase tracking-widest" style={{ color: theme.textMuted }}>{content.statsTop.label}</div>
//                   <div className="text-lg font-normal mt-0.5" style={{ fontFamily: 'var(--p-font-serif)', color: theme.accent }}>{content.statsTop.value}</div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-2">
//                   {content.statsGrid.map((s, i) => (
//                     <div key={i} className="rounded-xl p-3 text-center"
//                       style={{ background: theme.accentGlow, border: `1px solid ${theme.accentGlowStrong}` }}>
//                       <div className="text-xs uppercase tracking-widest" style={{ color: theme.textMuted }}>{s.label}</div>
//                       <div className="text-lg font-normal mt-0.5" style={{ fontFamily: 'var(--p-font-serif)', color: theme.accent }}>{s.value}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-center pt-2">
//                   <span className="text-xs" style={{ color: theme.textMuted, opacity: 0.6 }}>{content.slipLabel}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Feature points */}
//           <div className="flex flex-col gap-8">
//             {content.featurePoints.map((fp, i) => (
//               <div key={i}>
//                 <h4 className="text-lg font-normal mb-1" style={{ fontFamily: 'var(--p-font-serif)', color: theme.text }}>{fp.title}</h4>
//                 <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>{fp.body}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Reveal>
//     </Section>
//   )
// }