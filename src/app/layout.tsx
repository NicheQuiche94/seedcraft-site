import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seedcraft Ventures | Where Ideas Become Experiences',
  description: 'We take products from zero to one. Build, validate, launch, then find the right team to scale.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}