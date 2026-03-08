import { Button } from '@/components/ui/button'
import type { SalonSettings } from '@/lib/types'

interface CTASectionProps {
  settings: SalonSettings
}

export function CTASection({ settings }: CTASectionProps) {
  const whatsappNumber = settings.whatsapp.replace(/\D/g, '')
  
  // Get Monday hours to show availability
  const mondayHours = settings.openingHours['monday'] || 'Call for hours'

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/95 text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight text-balance">
          Ready for a Transformation?
        </h2>
        
        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          Our expert team is ready to help you look and feel your absolute best. Book your appointment today and experience the luxury treatment you deserve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              Book Now on WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="font-semibold"
          >
            <a href={`tel:${settings.phone}`}>
              Call Us
            </a>
          </Button>
        </div>

        <p className="text-sm text-primary-foreground/70 mt-8">
          {mondayHours} • Walk-ins Welcome
        </p>
      </div>
    </section>
  )
}
