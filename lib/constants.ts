import type { SalonSettings, Service, GalleryImage } from './types'

// Default salon information (can be overridden by Google Sheets)
export const DEFAULT_SALON: SalonSettings = {
  name: 'Luxury Salon',
  phone: '+1 (555) 123-4567',
  whatsapp: '+1 (555) 123-4567',
  email: 'info@luxurysalon.com',
  address: '123 Beauty Lane',
  city: 'New York',
  country: 'USA',
  latitude: 40.7128,
  longitude: -74.006,
  description:
    'Experience luxury beauty services at our premium salon. Our expert stylists and therapists are dedicated to making you look and feel your best.',
  openingHours: {
    monday: '10:00 AM - 8:00 PM',
    tuesday: '10:00 AM - 8:00 PM',
    wednesday: '10:00 AM - 8:00 PM',
    thursday: '10:00 AM - 8:00 PM',
    friday: '10:00 AM - 9:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: 'Closed',
  },
}

// Default services (can be overridden by Google Sheets)
export const DEFAULT_SERVICES: Service[] = [
  {
    id: '1',
    name: 'Hair Cutting & Styling',
    description: 'Professional haircuts and styling services tailored to your preferences',
    price: 65,
    duration: 60,
    category: 'Hair',
    image: '/images/services/haircut.jpg',
  },
  {
    id: '2',
    name: 'Hair Coloring',
    description: 'Premium hair coloring with expert color specialists',
    price: 85,
    duration: 90,
    category: 'Hair',
    image: '/images/services/coloring.jpg',
  },
  {
    id: '3',
    name: 'Facial Treatment',
    description: 'Rejuvenating facial treatments for all skin types',
    price: 75,
    duration: 60,
    category: 'Skincare',
    image: '/images/services/facial.jpg',
  },
  {
    id: '4',
    name: 'Manicure & Pedicure',
    description: 'Luxurious nail care services with premium products',
    price: 55,
    duration: 45,
    category: 'Nails',
    image: '/images/services/nails.jpg',
  },
  {
    id: '5',
    name: 'Massage Therapy',
    description: 'Relaxing massage treatments to ease tension and stress',
    price: 80,
    duration: 60,
    category: 'Wellness',
    image: '/images/services/massage.jpg',
  },
  {
    id: '6',
    name: 'Makeup Application',
    description: 'Professional makeup application for events and special occasions',
    price: 50,
    duration: 45,
    category: 'Makeup',
    image: '/images/services/makeup.jpg',
  },
]

// Default gallery images
export const DEFAULT_GALLERY: GalleryImage[] = [
  {
    id: '1',
    url: '/images/gallery/salon-1.jpg',
    title: 'Salon Interior',
  },
  {
    id: '2',
    url: '/images/gallery/salon-2.jpg',
    title: 'Styling Station',
  },
  {
    id: '3',
    url: '/images/gallery/salon-3.jpg',
    title: 'Relaxation Area',
  },
  {
    id: '4',
    url: '/images/gallery/salon-4.jpg',
    title: 'Treatment Room',
  },
  {
    id: '5',
    url: '/images/gallery/salon-5.jpg',
    title: 'Hair Styling',
  },
  {
    id: '6',
    url: '/images/gallery/salon-6.jpg',
    title: 'Nail Station',
  },
]

// Color scheme (matching tailwind config)
export const COLORS = {
  primary: '#0f172a', // Dark navy
  accent: '#d4af37', // Gold
  background: '#f8fafc', // Light
  foreground: '#111827', // Text
  muted: '#e5e7eb', // Light gray
  border: '#e5e7eb',
}

// Categories for filtering services
export const SERVICE_CATEGORIES = [
  'All',
  'Hair',
  'Skincare',
  'Nails',
  'Wellness',
  'Makeup',
]
