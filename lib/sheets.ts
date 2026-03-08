import type { Service, GalleryImage, SalonSettings, PageData } from './types'
import { DEFAULT_SALON, DEFAULT_SERVICES, DEFAULT_GALLERY } from './constants'

// Your Google Sheet ID
const SHEET_ID = '1UysFDqjGUPw7JH2Z3zJBvVuVyG9f3OJxr8S4eBBEii4'

/**
 * Fetches data from Google Sheets using CSV export URL
 * This works without API keys since the sheet is public
 */
export async function fetchSheetsData(): Promise<PageData> {
  try {
    const [services, gallery, settings, hours] = await Promise.all([
      fetchSheetData('Services'),
      fetchSheetData('Gallery'),
      fetchSheetData('Settings'),
      fetchSheetData('Hours'),
    ])

    const parsedSettings = parseSettingsData(settings)
    const parsedHours = parseHoursData(hours)
    
    // Merge parsed hours into settings
    parsedSettings.openingHours = parsedHours

    return {
      services: parseServicesData(services),
      gallery: parseGalleryData(gallery),
      settings: parsedSettings,
    }
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error)
    // Fallback to default data if fetch fails
    return {
      services: DEFAULT_SERVICES,
      gallery: DEFAULT_GALLERY,
      settings: DEFAULT_SALON,
    }
  }
}

/**
 * Fetches a single sheet by name using CSV export
 * Works for public Google Sheets without authentication
 */
async function fetchSheetData(sheetName: string): Promise<string[][]> {
  try {
    // Construct CSV export URL for a specific sheet
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`
    
    const response = await fetch(url, { cache: 'no-store' }) // Disable cache to reflect updates immediately
    
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet "${sheetName}": ${response.statusText}`)
    }

    const csv = await response.text()
    
    // Parse CSV text into 2D array
    const rows = csv
      .trim()
      .split('\n')
      .map((line) => {
        // Handle quoted fields with commas
        const result = []
        let current = ''
        let insideQuotes = false

        for (let i = 0; i < line.length; i++) {
          const char = line[i]
          const nextChar = line[i + 1]

          if (char === '"') {
            if (insideQuotes && nextChar === '"') {
              current += '"'
              i++
            } else {
              insideQuotes = !insideQuotes
            }
          } else if (char === ',' && !insideQuotes) {
            result.push(current.trim())
            current = ''
          } else {
            current += char
          }
        }

        result.push(current.trim())
        return result
      })

    return rows
  } catch (error) {
    console.error(`Error fetching sheet "${sheetName}":`, error)
    throw error
  }
}

/**
 * Fetches services data
 */
export async function fetchServices(): Promise<Service[]> {
  const data = await fetchSheetsData()
  return data.services
}

/**
 * Fetches gallery images
 */
export async function fetchGallery(): Promise<GalleryImage[]> {
  const data = await fetchSheetsData()
  return data.gallery
}

/**
 * Fetches salon settings
 */
export async function fetchSettings(): Promise<SalonSettings> {
  const data = await fetchSheetsData()
  return data.settings
}

/**
 * Parses services data from Google Sheets format
 * Expected columns: Name | Price | Duration | Category | Description | Image URL
 */
export function parseServicesData(rows: string[][]): Service[] {
  if (!rows || rows.length < 2) return []

  return rows.slice(1)
    .filter((row) => row[0]?.trim()) // Skip empty rows
    .map((row, index) => ({
      id: String(index + 1),
      name: row[0]?.trim() || '',
      price: parseFloat(row[1]) || 0,
      duration: parseInt(row[2]) || 30,
      category: row[3]?.trim() || 'Other',
      description: row[4]?.trim() || '',
      image: row[5]?.trim() || '',
    }))
}

/**
 * Parses gallery data from Google Sheets format
 * Expected columns: Title | Image URL | Description
 */
export function parseGalleryData(rows: string[][]): GalleryImage[] {
  if (!rows || rows.length < 2) return []

  return rows.slice(1)
    .filter((row) => row[1]?.trim()) // Skip rows without image URL
    .map((row, index) => ({
      id: String(index + 1),
      title: row[0]?.trim() || 'Salon Image',
      url: row[1]?.trim() || '',
      description: row[2]?.trim(),
    }))
}

/**
 * Parses settings data from Google Sheets format
 * Expected format: Column-based with headers in first row and values in second row
 * Headers: Name, Phone, WhatsApp, Email, Address, City, Country, Description, Latitude, Longitude
 */
export function parseSettingsData(rows: string[][]): SalonSettings {
  const settings = { ...DEFAULT_SALON }

  if (!rows || rows.length < 2) return settings

  // Get headers and values
  const headers = rows[0].map(h => h.trim().toLowerCase())
  const values = rows[1]

  // Create a mapping of header to value
  const dataMap: Record<string, string> = {}
  headers.forEach((header, index) => {
    if (values[index]) {
      dataMap[header] = values[index].trim()
    }
  })

  // Map the data to settings
  if (dataMap.name) settings.name = dataMap.name
  if (dataMap.phone) settings.phone = dataMap.phone
  if (dataMap.whatsapp) settings.whatsapp = dataMap.whatsapp
  if (dataMap.email) settings.email = dataMap.email
  if (dataMap.address) settings.address = dataMap.address
  if (dataMap.city) settings.city = dataMap.city
  if (dataMap.country) settings.country = dataMap.country
  if (dataMap.description) settings.description = dataMap.description
  if (dataMap.latitude) settings.latitude = parseFloat(dataMap.latitude) || DEFAULT_SALON.latitude
  if (dataMap.longitude) settings.longitude = parseFloat(dataMap.longitude) || DEFAULT_SALON.longitude

  return settings
}

/**
 * Parses hours data from Google Sheets format
 * Expected columns: Day | Hours
 * Days must be: monday, tuesday, wednesday, thursday, friday, saturday, sunday
 */
export function parseHoursData(rows: string[][]): Record<string, string> {
  const defaultHours = { ...DEFAULT_SALON.openingHours }
  const hours: Record<string, string> = {}

  if (!rows || rows.length < 2) return defaultHours

  // Convert array of [day, hours] pairs to object
  rows.slice(1).forEach((row) => {
    if (!row[0] || !row[1]) return // Skip empty rows
    
    const day = row[0].trim().toLowerCase()
    const time = row[1].trim()

    // Only accept valid day names
    const validDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    if (validDays.includes(day)) {
      hours[day] = time
    }
  })

  // Merge with defaults to ensure all days exist
  return { ...defaultHours, ...hours }
}
