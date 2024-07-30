import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const languages = ['en', 'es', 'pt-BR']

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Better use Blockchain',
}
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode
  params: {
    lng: string
  }
}>) {
  return (
    <html lang={lng}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
