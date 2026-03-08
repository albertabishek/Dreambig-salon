'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SalonSettings } from '@/lib/types'

interface NavbarProps {
  settings: SalonSettings
}

export function Navbar({ settings }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  
  // Extract WhatsApp number (remove non-digits for WhatsApp link)
  const whatsappNumber = settings.whatsapp.replace(/\D/g, '')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-poppins font-bold text-xl">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold">
                {settings.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'LS'}
              </span>
            </div>
            <span className="hidden sm:inline">{settings.name}</span>
            <span className="sm:hidden text-sm">{settings.name.split(' ')[0]}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="hover:text-accent transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-accent transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="hover:text-accent transition-colors text-sm font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors text-sm font-medium"
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => setIsOpen(false)}
            >
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
