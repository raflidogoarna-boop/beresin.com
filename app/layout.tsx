import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'Beresin - Jasa Desain Logo, Grafis, Edit Foto & Video, Joki Tugas',
  description: 'Beresin menyediakan jasa desain logo profesional, desain grafis, stiker, spanduk, edit foto & video, hingga joki tugas dengan hasil berkualitas dan harga terjangkau.',
  keywords: ['desain logo', 'desain grafis', 'edit foto', 'edit video', 'joki tugas', 'stiker', 'spanduk', 'beresin'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Beresin - Jasa Desain & Kreativitas Terpercaya',
    description: 'Solusi lengkap untuk kebutuhan desain logo, grafis, stiker, spanduk, edit foto & video, dan joki tugas.',
    type: 'website',
    locale: 'id_ID',
  },
}

export const viewport: Viewport = {
  themeColor: '#D4A93C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
