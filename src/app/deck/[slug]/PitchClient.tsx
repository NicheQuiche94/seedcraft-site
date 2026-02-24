'use client'

import { useState } from 'react'
import type { PitchConfig } from '@/types/pitch'
import PasswordGate from '@/components/pitch/PasswordGate'
import PitchDeckLayout from '@/components/pitch/PitchDeckLayout'

interface Props {
  config: PitchConfig
  passwordRequired: boolean
  initialAuthenticated: boolean
}

export default function PitchClient({ config, passwordRequired, initialAuthenticated }: Props) {
  const [authenticated, setAuthenticated] = useState(initialAuthenticated)

  if (passwordRequired && !authenticated) {
    return (
      <PasswordGate
        slug={config.slug}
        theme={config.theme}
        onSuccess={() => setAuthenticated(true)}
      />
    )
  }

  return <PitchDeckLayout config={config} />
}