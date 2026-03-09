import { HeroSection } from '@/components/home/hero-section'
import { ServicesPreview } from '@/components/home/services-preview'
import { GalleryPreview } from '@/components/home/gallery-preview'
import { TestimonialsCarousel } from '@/components/home/testimonials-carousel'
import { LocationSection } from '@/components/home/location-section'
import { CTASection } from '@/components/home/cta-section'
import { fetchServices, fetchGallery, fetchSettings, fetchTestimonialsData } from '@/lib/sheets'

export default async function Home() {
  const [services, gallery, settings, testimonials] = await Promise.all([
    fetchServices(),
    fetchGallery(),
    fetchSettings(),
    fetchTestimonialsData(),
  ])

  return (
    <>
      <HeroSection settings={settings} />
      <ServicesPreview services={services} />
      <GalleryPreview images={gallery} />
      <TestimonialsCarousel testimonials={testimonials} />
      <LocationSection settings={settings} />
      <CTASection settings={settings} />
    </>
  )
}
