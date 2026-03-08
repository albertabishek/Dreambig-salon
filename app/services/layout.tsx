import type { Metadata } from 'next'
import { fetchSettings } from '@/lib/sheets'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchSettings()

  return {
    title: `Services | ${settings.name}`,
    description: `Choose from our comprehensive range of premium beauty and hair care services at ${settings.name}.`,
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
