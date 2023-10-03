import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './layout/header'
import Footer from './layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-Studio',
  description: 'by Wivo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir='rtl'  suppressHydrationWarning={true}>
      <body className={inter.className}>
      <div className="fullbg"> </div>

      <div className="header">
      <Header />
      </div>
      <main>{children}</main>
      </body>
    </html>
  )
}
