'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function LegalModals() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  return (
    <>
      {/* Privacy Policy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogTrigger asChild>
          <Button variant="link" className="h-auto p-0 text-xs hover:text-accent">
            Privacy Policy
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription>
              Last updated: {new Date().toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-semibold text-base mb-2">Information We Collect</h3>
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you book an appointment, 
                contact us, or use our services. This may include your name, contact information, and 
                service preferences.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">How We Use Your Information</h3>
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services, 
                process appointments, communicate with you, and personalize your experience.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Information Sharing</h3>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or to comply with legal obligations.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Data Security</h3>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Your Rights</h3>
              <p className="text-muted-foreground">
                You have the right to access, update, or delete your personal information. 
                Please contact us if you wish to exercise these rights.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Contact Us</h3>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@salon.com or call us during business hours.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Service Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogTrigger asChild>
          <Button variant="link" className="h-auto p-0 text-xs hover:text-accent">
            Terms of Service
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription>
              Last updated: {new Date().toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-semibold text-base mb-2">Acceptance of Terms</h3>
              <p className="text-muted-foreground">
                By accessing and using our salon services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Services</h3>
              <p className="text-muted-foreground">
                We provide professional beauty and hair care services. All services are subject to 
                availability and we reserve the right to modify or discontinue any service without notice.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Appointments</h3>
              <p className="text-muted-foreground">
                Appointments should be made in advance. We require at least 24 hours notice for 
                cancellations. Late cancellations or no-shows may be subject to a fee.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Payment</h3>
              <p className="text-muted-foreground">
                Payment is due at the time of service. We accept various payment methods as displayed 
                in our salon. Prices are subject to change without notice.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Refund Policy</h3>
              <p className="text-muted-foreground">
                If you are not satisfied with our services, please inform us within 24 hours. 
                We will work with you to resolve any issues. Refunds are handled on a case-by-case basis.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Health and Safety</h3>
              <p className="text-muted-foreground">
                Please inform us of any allergies, skin conditions, or health concerns before receiving 
                services. We maintain high standards of hygiene and safety protocols.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Limitation of Liability</h3>
              <p className="text-muted-foreground">
                Our liability is limited to the cost of the service provided. We are not responsible for 
                pre-existing conditions or adverse reactions to properly performed services.
              </p>
            </section>
            
            <section>
              <h3 className="font-semibold text-base mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us during business hours 
                or email us at info@salon.com.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
