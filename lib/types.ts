export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number // in minutes
  category: string
  image?: string
}

export interface GalleryImage {
  id: string
  url: string
  title: string
  description?: string
}

export interface SalonSettings {
  name: string
  phone: string
  whatsapp: string
  email: string
  address: string
  city: string
  country: string
  latitude: number
  longitude: number
  mapEmbedUrl?: string
  openingHours: OpeningHours
  description: string
  logo?: string
}

export interface OpeningHours {
  monday?: string
  tuesday?: string
  wednesday?: string
  thursday?: string
  friday?: string
  saturday?: string
  sunday?: string
}

export interface PageData {
  services: Service[]
  gallery: GalleryImage[]
  settings: SalonSettings
}
