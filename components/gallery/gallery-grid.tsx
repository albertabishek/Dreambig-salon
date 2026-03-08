'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import type { GalleryImage } from '@/lib/types'

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group relative overflow-hidden rounded-lg shadow-lg h-72 cursor-pointer"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex flex-col items-end justify-end p-6 opacity-0 group-hover:opacity-100">
              <h3 className="font-poppins font-bold text-white text-lg w-full text-left">
                {image.title}
              </h3>
              {image.description && (
                <p className="text-white/90 text-sm w-full text-left mt-2">
                  {image.description}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </button>

            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="bg-black/50 text-white p-4 text-center">
              <h2 className="font-poppins font-bold text-xl mb-2">
                {selectedImage.title}
              </h2>
              {selectedImage.description && (
                <p className="text-white/80">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
