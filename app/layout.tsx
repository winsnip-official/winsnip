import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WinSnip - Blockchain Infrastructure Excellence',
  description: 'Professional blockchain infrastructure services for validators, developers, and institutions. Explore WinScan, Monad Scan, and CC Network Scan.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}