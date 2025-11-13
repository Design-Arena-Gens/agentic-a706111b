import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home Bite - Home-cooked meals delivered',
  description: 'Order delicious home-cooked meals from local cooks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
