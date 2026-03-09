import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import type { Service } from '@/lib/types'

interface ServicesPreviewProps {
  services: Service[]
}

export function ServicesPreview({ services }: ServicesPreviewProps) {
  const featuredServices = services.slice(0, 4)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Discover our range of premium beauty and hair care services designed to help you look and feel your best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredServices.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border-border"
            >
              {service.image && (
                <div className="w-full h-48 bg-muted overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">
                  {service.category}
                </div>
                <h3 className="font-poppins font-bold text-lg mb-2 text-foreground">
                  {service.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="font-poppins font-bold text-xl text-accent">
                      ₹{service.price}
                    </span>
                    <span className="text-foreground/60 text-xs ml-2">
                      {service.duration} min
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            size="lg"
          >
            <Link href="/services">
              View All Services
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
