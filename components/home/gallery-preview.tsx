import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import type { GalleryImage } from '@/lib/types'

interface GalleryPreviewProps {
  images: GalleryImage[]
}

export function GalleryPreview({ images }: GalleryPreviewProps) {
  const previewImages = images.slice(0, 6)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">
            Gallery
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Get inspired by our salon's elegant spaces and beautiful service results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {previewImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-lg h-64"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                <div>
                  <h3 className="font-poppins font-bold text-white mb-1">
                    {image.title}
                  </h3>
                  {image.description && (
                    <p className="text-white/80 text-sm">
                      {image.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            size="lg"
          >
            <Link href="/gallery">
              View Full Gallery
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
