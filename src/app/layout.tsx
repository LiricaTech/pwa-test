import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import { whiteLabel } from '@/lib/whiteLabel'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const pathname = process.env.NEXT_PUBLIC_VERCEL_URL
console.log(pathname, "pathname");




export const metadata: Metadata = {
  applicationName: "Testito",
  title: 'test v2.2',
  description: 'Generated by create next app',
  manifest: '/manifests/valle.json',
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
