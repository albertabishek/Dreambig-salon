import { fetchReviewsData } from './fetchSheetsData'

export interface Testimonial {
  name: string
  role: string
  testimonial: string
  rating: number
  image?: string
}

/**
 * Default testimonials to use when Google Sheets data is unavailable
 */
export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Google Review",
    testimonial: "Absolutely amazing experience! The staff is professional and friendly. My hair has never looked better. Will definitely be coming back!",
    rating: 5,
    image: ""
  },
  {
    name: "Emily Chen",
    role: "Google Review", 
    testimonial: "Best salon in town! The attention to detail and quality of service is exceptional. I always leave feeling refreshed and beautiful.",
    rating: 5,
    image: ""
  },
  {
    name: "Maria Rodriguez",
    role: "Google Review",
    testimonial: "Wonderful atmosphere and skilled stylists. They really listen to what you want and deliver perfect results every time.",
    rating: 5,
    image: ""
  },
  {
    name: "Jessica Taylor",
    role: "Google Review",
    testimonial: "I've been coming here for years and the service is consistently excellent. The team is talented and always up to date with the latest trends.",
    rating: 5,
    image: ""
  },
  {
    name: "Amanda White",
    role: "Google Review",
    testimonial: "Fantastic experience from start to finish. The salon is clean, modern, and the staff makes you feel welcome and comfortable.",
    rating: 5,
    image: ""
  },
  {
    name: "Lisa Anderson",
    role: "Google Review",
    testimonial: "Professional service with amazing results. The stylist really understood what I wanted and gave me the perfect haircut. Highly recommend!",
    rating: 5,
    image: ""
  }
]

/**
 * Normalizes and cleans review sources to consistent format
 */
function normalizeSource(source: string): string {
  if (!source) return "Google Review"
  
  const normalized = source.toLowerCase().trim()
  
  // Map various source names to consistent format
  const sourceMap: Record<string, string> = {
    'google': 'Google Review',
    'google review': 'Google Review',
    'google reviews': 'Google Review',
    'justdial': 'JustDail Review',
    'justdail': 'JustDail Review',
    'facebook': 'Facebook Review',
    'yelp': 'Yelp Review',
    'instagram': 'Instagram Review'
  }
  
  return sourceMap[normalized] || "Google Review"
}

/**
 * Cleans and normalizes customer names
 */
function cleanName(name: string): string {
  if (!name) return "Anonymous Customer"
  
  // Remove excessive whitespace and special characters
  let cleaned = name.trim().replace(/\s+/g, ' ')
  
  // Handle very short names (like initials)
  if (cleaned.length <= 3) {
    // If it's just initials, keep as is
    if (/^[A-Z.]+$/.test(cleaned)) {
      return cleaned
    }
    // Otherwise, it might be a typo, return a default
    return "Customer"
  }
  
  // Handle names that are too long (truncate)
  if (cleaned.length > 50) {
    cleaned = cleaned.substring(0, 47) + "..."
  }
  
  return cleaned
}

/**
 * Removes duplicate testimonials based on content similarity
 */
function removeDuplicates(testimonials: Testimonial[]): Testimonial[] {
  const seen = new Set<string>()
  const unique: Testimonial[] = []
  
  for (const testimonial of testimonials) {
    // Create a simple key based on first 50 characters of testimonial + name
    const key = `${testimonial.testimonial.substring(0, 50).toLowerCase()}-${testimonial.name.toLowerCase()}`
    
    if (!seen.has(key)) {
      seen.add(key)
      unique.push(testimonial)
    }
  }
  
  return unique
}

/**
 * Parses reviews data from Google Sheets format
 * Expected columns: Name | Text | Rating | Profile Image | Date | Source
 */
export function parseReviewsData(rows: string[][]): Testimonial[] {
  if (!rows || rows.length < 2) return DEFAULT_TESTIMONIALS

  const parsed = rows.slice(1)
    .filter((row) => row[0]?.trim()) // Skip empty rows
    .map((row) => ({
      name: cleanName(row[0]?.trim() || ''),
      role: normalizeSource(row[5]?.trim()),
      testimonial: row[1]?.trim() || '',
      rating: Math.min(5, Math.max(1, parseInt(row[2]) || 5)), // Ensure rating is between 1-5
      image: row[3]?.trim() || undefined,
    }))
    .filter(testimonial => testimonial.testimonial.length > 10) // Remove very short/empty testimonials

  // Remove duplicates
  const uniqueTestimonials = removeDuplicates(parsed)
  
  // If we have fewer than 3 unique testimonials, add some from defaults
  if (uniqueTestimonials.length < 3) {
    const additionalDefaults = DEFAULT_TESTIMONIALS.filter(
      defaultTestimonial => !uniqueTestimonials.some(
        existing => existing.testimonial.substring(0, 50).toLowerCase() === 
                   defaultTestimonial.testimonial.substring(0, 50).toLowerCase()
      )
    )
    uniqueTestimonials.push(...additionalDefaults.slice(0, 3 - uniqueTestimonials.length))
  }
  
  return uniqueTestimonials
}

/**
 * Fetches and parses reviews data from Google Sheets
 * Falls back to default testimonials if fetch fails
 */
export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const rows = await fetchReviewsData()
    return parseReviewsData(rows)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return DEFAULT_TESTIMONIALS
  }
}
