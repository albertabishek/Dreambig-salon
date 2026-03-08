import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import type { SalonSettings } from '@/lib/types'

interface ContactInfoProps {
  settings: SalonSettings
}

export function ContactInfo({ settings }: ContactInfoProps) {
  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
            <Phone className="h-6 w-6 text-accent" />
          </div>
        </div>
        <div>
          <h3 className="font-poppins font-bold text-lg text-foreground mb-2">
            Phone
          </h3>
          <a
            href={`tel:${settings.phone}`}
            className="text-foreground/70 hover:text-accent transition-colors text-lg"
          >
            {settings.phone}
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
            <Mail className="h-6 w-6 text-accent" />
          </div>
        </div>
        <div>
          <h3 className="font-poppins font-bold text-lg text-foreground mb-2">
            Email
          </h3>
          <a
            href={`mailto:${settings.email}`}
            className="text-foreground/70 hover:text-accent transition-colors text-lg"
          >
            {settings.email}
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
            <MapPin className="h-6 w-6 text-accent" />
          </div>
        </div>
        <div>
          <h3 className="font-poppins font-bold text-lg text-foreground mb-2">
            Address
          </h3>
          <p className="text-foreground/70 text-lg leading-relaxed">
            {settings.address}
            <br />
            {settings.city}, {settings.country}
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
            <Clock className="h-6 w-6 text-accent" />
          </div>
        </div>
        <div>
          <h3 className="font-poppins font-bold text-lg text-foreground mb-4">
            Opening Hours
          </h3>
          <div className="space-y-2">
            {Object.entries(settings.openingHours).map(([day, hours]) => (
              <div key={day} className="flex justify-between gap-8">
                <span className="capitalize font-medium text-foreground">
                  {day}:
                </span>
                <span className="text-foreground/70">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
