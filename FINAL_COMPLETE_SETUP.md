# Complete Google Sheets Setup Guide - Final Version

## Overview

Your Luxury Salon website now uses **4 Google Sheets** to manage all content and settings dynamically. No code changes needed - just edit the sheets!

---

## Sheet 1: Settings

This sheet controls all salon information displayed across the entire website (Navbar, Footer, Contact Page).

### Column Structure
| Column 1 | Column 2 |
|----------|----------|
| **Setting** | **Value** |

### Required Settings (Exact Spelling - Case Insensitive)

| Setting Name | Example Value | Used On | Notes |
|--------------|----------------|---------|-------|
| **Name** | My Luxury Salon | Navbar, Footer | Your salon's official name |
| **Phone** | +91-9234567890 | Footer, Contact page, Call button | Keep the +91 and dashes |
| **WhatsApp** | +91-9234567890 | WhatsApp floating button, Contact page | Same format as phone |
| **Email** | info@salon.com | Footer, Contact page | Click to send email |
| **Address** | 123 Main Street | Footer, Contact page | Street address only |
| **City** | New Delhi | Footer, Contact page | City name |
| **Country** | India | Footer, Contact page | Country name |
| **Latitude** | 28.6139 | Contact page map | Google Maps latitude |
| **Longitude** | 77.2090 | Contact page map | Google Maps longitude |
| **Description** | Experience luxury... | Footer | Short salon description |

### How to Format Phone Numbers

**IMPORTANT:** Use this format to avoid errors:
- **Good:** `+91-9234567890` (with dashes)
- **Good:** `+91 92345 67890` (with spaces)
- **Good:** `+919234567890` (no dashes)
- **Bad:** `9234567890` (missing country code)
- **Bad:** `91-9234567890` (missing +)

The system will automatically extract just the numbers when needed for WhatsApp links.

### How to Find Latitude/Longitude for Your Location

1. Go to Google Maps: https://maps.google.com
2. Search for your salon address
3. Right-click on the location
4. You'll see: `28.6139° N, 77.2090° E`
5. Use: **Latitude: 28.6139** | **Longitude: 77.2090**

### Settings Sheet Example

```
Setting          | Value
Name             | Elite Beauty Salon
Phone            | +91-9876543210
WhatsApp         | +91-9876543210
Email            | contact@elitebeauty.com
Address          | 456 Fashion Street
City             | Mumbai
Country          | India
Latitude         | 19.0760
Longitude        | 72.8777
Description      | Premium beauty and wellness services
```

---

## Sheet 2: Services

This sheet controls the Services page and services preview on the home page.

### Column Structure
| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 |
|----------|----------|----------|----------|----------|----------|
| **Name** | **Price** | **Duration** | **Category** | **Description** | **Image URL** |

### Column Details

| Column | Type | Format | Required | Example |
|--------|------|--------|----------|---------|
| **Name** | Text | Any text | Yes | Hair Cutting & Styling |
| **Price** | Number | Numbers only, no $, no commas | Yes | 65 |
| **Duration** | Number | Minutes only, no "min" | Yes | 60 |
| **Category** | Text | Hair, Skincare, Nails, Wellness, Makeup, etc. | Yes | Hair |
| **Description** | Text | Any text up to 500 chars | Yes | Professional haircuts and styling |
| **Image URL** | URL | Must start with https:// | No | https://example.com/image.jpg |

### Services Example

```
Name                    | Price | Duration | Category  | Description                                | Image URL
Hair Cutting            | 65    | 60       | Hair      | Professional haircuts and styling          | https://images.example.com/haircut.jpg
Hair Coloring           | 85    | 90       | Hair      | Premium hair coloring services              | https://images.example.com/coloring.jpg
Facial Treatment        | 75    | 60       | Skincare  | Rejuvenating facials for all skin types     | https://images.example.com/facial.jpg
Manicure & Pedicure     | 55    | 45       | Nails     | Luxurious nail care services                | https://images.example.com/nails.jpg
Massage Therapy         | 80    | 60       | Wellness  | Relaxing massage treatments                 | https://images.example.com/massage.jpg
Makeup Application      | 50    | 45       | Makeup    | Professional makeup for events              | https://images.example.com/makeup.jpg
```

---

## Sheet 3: Gallery

This sheet controls images displayed on the Gallery page and home page preview.

### Column Structure
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| **Title** | **Image URL** | **Description** |

### Column Details

| Column | Type | Format | Required | Example |
|--------|------|--------|----------|---------|
| **Title** | Text | Any text | Yes | Salon Entrance |
| **Image URL** | URL | Must start with https:// | Yes | https://example.com/gallery1.jpg |
| **Description** | Text | Any text | No | Beautiful salon interior design |

### Gallery Example

```
Title              | Image URL                              | Description
Salon Entrance     | https://images.example.com/entrance.jpg | Modern salon entrance
Hair Station       | https://images.example.com/station.jpg  | Professional hair styling stations
Treatment Room     | https://images.example.com/room.jpg     | Comfortable treatment room
Reception Area     | https://images.example.com/reception.jpg| Welcoming reception desk
```

---

## Sheet 4: Hours (NEW!)

This sheet controls opening hours displayed on Footer and Contact page.

### Column Structure
| Column 1 | Column 2 |
|----------|----------|
| **Day** | **Hours** |

### Required Days (All 7 Days, Lowercase)

| Day | Format Examples |
|-----|-----------------|
| **monday** | 10:00 AM - 8:00 PM |
| **tuesday** | 10:00 AM - 8:00 PM |
| **wednesday** | 10:00 AM - 8:00 PM |
| **thursday** | 10:00 AM - 8:00 PM |
| **friday** | 10:00 AM - 9:00 PM |
| **saturday** | 9:00 AM - 6:00 PM |
| **sunday** | Closed |

### Important Rules for Hours

✅ **DO:**
- Use lowercase day names: `monday`, `tuesday`, etc.
- Use 12-hour format: `10:00 AM - 8:00 PM`
- Include all 7 days
- Use "Closed" for non-operating days

❌ **DON'T:**
- Uppercase day names: `Monday` (won't work)
- 24-hour format: `10:00 - 20:00`
- Skip days
- Use abbreviations: `Mon` (won't work)

### Hours Example

```
Day        | Hours
monday     | 10:00 AM - 8:00 PM
tuesday    | 10:00 AM - 8:00 PM
wednesday  | 10:00 AM - 8:00 PM
thursday   | 10:00 AM - 8:00 PM
friday     | 10:00 AM - 9:00 PM
saturday   | 9:00 AM - 6:00 PM
sunday     | Closed
```

---

## Step-by-Step Setup Instructions

### Step 1: Settings Sheet
1. Open your Google Sheet
2. Click the "Settings" tab
3. Add exactly these rows:
   - Name | Your Salon Name
   - Phone | +91-XXXXXXXXXX
   - WhatsApp | +91-XXXXXXXXXX
   - Email | your@email.com
   - Address | Your Street Address
   - City | Your City
   - Country | Your Country
   - Latitude | Your Latitude (from Google Maps)
   - Longitude | Your Longitude (from Google Maps)
   - Description | Your salon description

### Step 2: Services Sheet
1. Click the "Services" tab
2. Add your services with:
   - Service names
   - Prices (numbers only)
   - Duration (numbers only)
   - Categories
   - Descriptions
   - Image URLs (optional but recommended)

### Step 3: Gallery Sheet
1. Click the "Gallery" tab
2. Add your salon photos with:
   - Titles
   - Image URLs
   - Descriptions (optional)

### Step 4: Hours Sheet
1. Click the "Hours" tab
2. Add all 7 days with exact names (lowercase):
   - monday through sunday
   - Opening times (e.g., "10:00 AM - 8:00 PM")

### Step 5: Verify
1. Make sure sheet is PUBLIC (Share → Anyone with link → Viewer)
2. Reload website (Ctrl+Shift+R)
3. Check:
   - Navbar shows your salon name
   - Footer shows your phone, email, address, hours
   - Contact page shows all information
   - Services page shows your services with prices
   - Gallery page shows your images

---

## Troubleshooting

### Phone number not showing
- Check format: Must have `+` and country code
- Good: `+91-9234567890`
- Bad: `9234567890`

### WhatsApp button not working
- Same format as phone
- System extracts numbers automatically
- Test: `https://wa.me/919234567890` (without + or dashes)

### Hours not showing
- Check day names are **lowercase**: `monday`, not `Monday`
- All 7 days must be present
- Use exact format: `10:00 AM - 8:00 PM`

### Map not showing on Contact page
- Check latitude/longitude are numbers: `28.6139`, not text
- Get correct values from Google Maps
- Verify format: `-74.006` (negative for west)

### Settings not updating
- Check setting names match exactly (case-insensitive but exact spelling)
- Make sure sheet is PUBLIC
- Wait 1 hour or redeploy website for instant update

---

## Data Flow

```
Your Google Sheet
      ↓
Website reads every 1 hour
      ↓
Updates display on:
      ├─ Navbar (Name, WhatsApp link)
      ├─ Footer (All settings, Hours)
      ├─ Contact Page (Phone, Email, Address, Hours, Map)
      ├─ Services Page (All services)
      └─ Gallery Page (All images)
```

---

## Quick Reference Card

```
SETTINGS SHEET (Must have)
Setting: Name, Phone, WhatsApp, Email, Address, City, Country, Latitude, Longitude, Description

SERVICES SHEET (Must have)
Columns: Name | Price | Duration | Category | Description | Image URL

GALLERY SHEET (Must have)
Columns: Title | Image URL | Description

HOURS SHEET (Must have all 7 days)
Days: monday, tuesday, wednesday, thursday, friday, saturday, sunday
Format: 10:00 AM - 8:00 PM (or "Closed")
```

---

## Important Notes

1. **Phone Format:** Always use `+CountryCode-Number` format
2. **Hours Format:** Use 12-hour format with AM/PM
3. **Day Names:** Use lowercase (monday, tuesday, etc.)
4. **Image URLs:** Must start with `https://`
5. **Numbers Only:** Price and duration should be numbers without units
6. **Sheet Must Be Public:** Share → Anyone with link → Viewer
7. **Updates Take Effect:** Within 1 hour, or instantly if you redeploy

---

## Support

If something isn't working:
1. Check exact spelling of Setting names
2. Verify phone format has `+` and country code
3. Confirm all 7 days are in Hours sheet
4. Make sure sheet is PUBLIC
5. Try reloading with Ctrl+Shift+R (hard refresh)
6. Check browser console for error messages
