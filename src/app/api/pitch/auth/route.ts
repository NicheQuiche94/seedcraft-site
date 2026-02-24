import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { getPitchConfig } from '@/pitch-configs'

export async function POST(req: NextRequest) {
  const { slug, password } = await req.json()

  if (!slug || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const config = getPitchConfig(slug)
  if (!config) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const expected = process.env[config.envKey]

  // No env var set — password protection is disabled for this project
  if (!expected) {
    return NextResponse.json({ error: 'No password configured' }, { status: 400 })
  }

  // Constant-time comparison to prevent timing attacks
  let match = false
  try {
    const a = Buffer.from(expected)
    const b = Buffer.from(password)
    match = a.length === b.length && timingSafeEqual(a, b)
  } catch {
    match = false
  }

  if (!match) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })

  res.cookies.set(`pitch_auth_${slug}`, 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: `/deck/${slug}`,
  })

  return res
}