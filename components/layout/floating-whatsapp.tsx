'use client'

import { MessageCircle } from 'lucide-react'

interface FloatingWhatsAppProps {
  phoneNumber: string
  message?: string
}

export function FloatingWhatsApp({ phoneNumber, message }: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
