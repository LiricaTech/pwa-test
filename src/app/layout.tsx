import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import { whiteLabel } from '@/lib/whiteLabel'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const pathname = process.env.NEXT_PUBLIC_VERCEL_URL

const appData = whiteLabel.find((app) => pathname?.includes(app.name))



export const metadata: Metadata = {
  applicationName: appData?.title || 'Default title',
  title: appData?.title || 'Default title',
  description: appData?.description || 'Default description',
  manifest: appData?.manifest,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
