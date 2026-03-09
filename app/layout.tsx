import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp'
import { fetchSettings } from '@/lib/sheets'
import { detectLanguage, getLanguageMetadata, SUPPORTED_LANGUAGES } from '@/lib/language-detection'
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

export async function generateMetadata({ request }: { request?: Request }): Promise<Metadata> {
  const settings = await fetchSettings()
  const detectedLanguage = detectLanguage(request)
  const languageMetadata = getLanguageMetadata(detectedLanguage, settings)

  return {
    title: languageMetadata.title,
    description: languageMetadata.description,
    generator: 'SliceO',
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    openGraph: {
      type: 'website',
      locale: detectedLanguage.locale,
      url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
      title: languageMetadata.title,
      description: languageMetadata.description,
      siteName: settings.name,
    },
    icons: {
      icon: [
        {
          url: '/company_logo.jpg',
          sizes: 'any',
          type: 'image/jpeg',
        },
        {
          url: '/company_logo.jpg',
          sizes: '32x32',
          type: 'image/jpeg',
        },
        {
          url: '/company_logo.jpg',
          sizes: '16x16',
          type: 'image/jpeg',
        },
        {
          url: '/company_logo.jpg',
          sizes: '192x192',
          type: 'image/jpeg',
        },
        {
          url: '/company_logo.jpg',
          sizes: '512x512',
          type: 'image/jpeg',
        },
      ],
      apple: [
        {
          url: '/company_logo.jpg',
          sizes: '180x180',
          type: 'image/jpeg',
        },
      ],
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
      languages: Object.fromEntries(
        Object.entries(SUPPORTED_LANGUAGES).map(([code, config]) => [
          code,
          `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/${code}`
        ])
      ),
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
      <body className="font-inter antialiased bg-background text-foreground" suppressHydrationWarning>
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
