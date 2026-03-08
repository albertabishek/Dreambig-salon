import { ContactInfo } from '@/components/contact/contact-info'
import { Button } from '@/components/ui/button'
import { fetchSettings } from '@/lib/sheets'

export async function generateMetadata() {
  const { fetchSettings } = await import('@/lib/sheets')
  const settings = await fetchSettings()

  return {
    title: `Contact Us | ${settings.name}`,
    description: `Get in touch with ${settings.name}. Find our contact information, location, and opening hours.`,
  }
}

export default async function ContactPage() {
  const settings = await fetchSettings()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl mb-4 text-balance">
            Get In Touch
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-balance">
            Have questions? We'd love to hear from you. Contact us today!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-poppins font-bold text-3xl mb-8 text-foreground">
                Contact Information
              </h2>
              <ContactInfo settings={settings} />

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-poppins font-bold text-xl mb-6 text-foreground">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    size="lg"
                  >
                    <a
                      href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    <a href={`tel:${settings.phone}`}>
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96 lg:h-full min-h-96">
              {settings.mapEmbedUrl ? (
                <iframe
                  src={settings.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              ) : (
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d${settings.longitude}!3d${settings.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${settings.latitude}%2C${settings.longitude}!5e0!3m2!1sen!2s!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
