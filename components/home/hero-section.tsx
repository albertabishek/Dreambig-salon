import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import type { SalonSettings } from '@/lib/types'

interface HeroSectionProps {
  settings: SalonSettings
}

export function HeroSection({ settings }: HeroSectionProps) {
  const whatsappNumber = settings.whatsapp.replace(/\D/g, '')

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-primary to-primary/95 text-primary-foreground py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight text-balance">
          {settings.name}
        </h1>
        
        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          {settings.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              Book an Appointment
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="font-semibold"
          >
            <Link href="/services">
              Explore Services
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary-foreground/20">
          <div>
            <div className="text-2xl font-poppins font-bold text-accent mb-1">15+</div>
            <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
          </div>
          <div>
            <div className="text-2xl font-poppins font-bold text-accent mb-1">5000+</div>
            <p className="text-sm text-primary-foreground/80">Happy Clients</p>
          </div>
          <div>
            <div className="text-2xl font-poppins font-bold text-accent mb-1">25+</div>
            <p className="text-sm text-primary-foreground/80">Expert Professionals</p>
          </div>
        </div>
      </div>
    </section>
  )
}
