// Your Google Sheet ID
const SHEET_ID = '1UysFDqjGUPw7JH2Z3zJBvVuVyG9f3OJxr8S4eBBEii4'

/**
 * Fetches reviews data from Google Sheets using CSV export URL
 * This works without API keys since the sheet is public
 */
export async function fetchReviewsData(): Promise<string[][]> {
  try {
    // Construct CSV export URL for the Reviews sheet
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Reviews`
    
    const response = await fetch(url, { cache: 'no-store' }) // Disable cache to reflect updates immediately
    
    if (!response.ok) {
      throw new Error(`Failed to fetch Reviews sheet: ${response.statusText}`)
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
    console.error('Error fetching Reviews sheet:', error)
    throw error
  }
}
