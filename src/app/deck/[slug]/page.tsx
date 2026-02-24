import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import { getPitchConfig } from '@/pitch-configs'
import PitchClient from './PitchClient'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function DeckPage({ params }: Props) {
  const { slug } = await params
  const config = getPitchConfig(slug)
  if (!config) notFound()

  const passwordRequired = !!process.env[config.envKey]

  let authenticated = false
  if (passwordRequired) {
    const cookieStore = await cookies()
    authenticated = cookieStore.get(`pitch_auth_${slug}`)?.value === 'true'
  }

  return (
    <PitchClient
      config={config}
      passwordRequired={passwordRequired}
      initialAuthenticated={authenticated}
    />
  )
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const config = getPitchConfig(slug)
  if (!config) return {}
  return {
    title: `${config.content.hero.titleStart}${config.content.hero.titleAccent} — Seedcraft`,
    robots: { index: false, follow: false }, // keep decks off search engines
  }
}