import { HeroSection } from '@/components/home/hero-section'
import { ServicesPreview } from '@/components/home/services-preview'
import { GalleryPreview } from '@/components/home/gallery-preview'
import { LocationSection } from '@/components/home/location-section'
import { CTASection } from '@/components/home/cta-section'
import { fetchServices, fetchGallery, fetchSettings } from '@/lib/sheets'

export default async function Home() {
  const [services, gallery, settings] = await Promise.all([
    fetchServices(),
    fetchGallery(),
    fetchSettings(),
  ])

  return (
    <>
      <HeroSection settings={settings} />
      <ServicesPreview services={services} />
      <GalleryPreview images={gallery} />
      <LocationSection settings={settings} />
      <CTASection settings={settings} />
    </>
  )
}
