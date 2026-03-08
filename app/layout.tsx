import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp'
import { fetchSettings } from '@/lib/sheets'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchSettings()

  return {
    title: `${settings.name} | Premium Beauty & Hair Services`,
    description: settings.description || 'Experience luxury beauty services at our premium salon. Expert stylists, premium products, and personalized care.',
    generator: 'v0.app',
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
      title: `${settings.name} | Premium Beauty & Hair Services`,
      description: settings.description || 'Experience luxury beauty services at our premium salon.',
      siteName: settings.name,
    },
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
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await fetchSettings()

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-background text-foreground">
        <Navbar settings={settings} />
        <main className="pt-16">
          {children}
        </main>
        <Footer settings={settings} />
        <FloatingWhatsApp phoneNumber={settings.whatsapp} message="Hi, I'd like to book an appointment!" />
        <Analytics />
      </body>
    </html>
  )
}
