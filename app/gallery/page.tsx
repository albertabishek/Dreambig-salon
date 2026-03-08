import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { fetchGallery } from '@/lib/sheets'

export async function generateMetadata() {
  const { fetchSettings } = await import('@/lib/sheets')
  const settings = await fetchSettings()
  
  return {
    title: `Gallery | ${settings.name}`,
    description: `View our ${settings.name} gallery with beautiful photos of our services, spaces, and happy clients.`,
  }
}

export default async function GalleryPage() {
  const images = await fetchGallery()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4 text-balance">
            Our Gallery
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-balance">
            Explore our salon spaces and see the beautiful transformations we've created for our clients.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {images.length > 0 ? (
            <GalleryGrid images={images} />
          ) : (
            <div className="text-center py-16">
              <p className="text-foreground/70 text-lg">
                Gallery images coming soon. Check back later!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
