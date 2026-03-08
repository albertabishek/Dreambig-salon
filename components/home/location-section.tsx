import { MapPin, Clock, Phone } from 'lucide-react'
import type { SalonSettings } from '@/lib/types'

interface LocationSectionProps {
  settings: SalonSettings
}

export function LocationSection({ settings }: LocationSectionProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d${settings.longitude}!3d${settings.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${settings.latitude}%2C${settings.longitude}!5e0!3m2!1sen!2s!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-6 text-foreground">
              Visit Our Salon
            </h2>
            <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
              Located in the heart of {settings.city}, our salon is easily accessible and welcoming to all. We look forward to seeing you.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/20">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-1">
                    Address
                  </h3>
                  <p className="text-foreground/70">
                    {settings.address}, {settings.city}, {settings.country}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/20">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-2">
                    Hours
                  </h3>
                  <div className="space-y-1 text-foreground/70 text-sm">
                    {Object.entries(settings.openingHours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize font-medium">
                          {day}:
                        </span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/20">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground mb-1">
                    Call Us
                  </h3>
                  <a
                    href={`tel:${settings.phone}`}
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    {settings.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
