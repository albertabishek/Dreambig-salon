import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { LegalModals } from './legal-modals'
import type { SalonSettings } from '@/lib/types'

interface FooterProps {
  settings: SalonSettings
}

export function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4 text-accent">
              {settings.name}
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {settings.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-base mb-4 text-accent">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                <a
                  href={`tel:${settings.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {settings.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                <a
                  href={`mailto:${settings.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {settings.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  {settings.address}, {settings.city}, {settings.country}
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-poppins font-semibold text-base mb-4 text-accent">
              Hours
            </h4>
            <div className="space-y-2 text-sm">
              {Object.entries(settings.openingHours).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="capitalize font-medium">
                    {day}:
                  </span>
                  <span className="text-primary-foreground/80">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-primary-foreground/60">
            © {currentYear} {settings.name}. All rights reserved.
          </div>
          <div className="flex gap-4 text-xs">
            <LegalModals />
          </div>
        </div>
      </div>
    </footer>
  )
}
