# Complete Setup Guide - Dynamic Google Sheets Integration

## Overview

Your Luxury Salon website is now **100% dynamic**. Everything updates from Google Sheets:

- **Salon Name** - Used in Navbar & Footer
- **Phone & WhatsApp** - Used in Navbar, Footer, Contact Page, Floating Button
- **Email & Address** - Used in Footer & Contact Page
- **City & Country** - Used in Footer & Contact Page
- **Opening Hours** - Used in Footer & Contact Page (NEW!)
- **Services** - Displayed on Services page
- **Gallery Images** - Displayed on Gallery page
- **Description** - Used in Footer

## What Changed

### 1. New "Hours" Sheet Added
We added a 4th sheet to your Google Sheets with opening hours. This replaces the hours that were previously in the Settings sheet.

### 2. Navbar is Now Dynamic
- Displays your salon name (from Settings sheet)
- WhatsApp button uses your actual WhatsApp number
- Everything updates automatically

### 3. Complete Data Flow
```
Google Sheets (4 sheets)
    ↓
Your Website Code (lib/sheets.ts)
    ↓
All Pages Update Automatically
    ↓
Navbar, Footer, Contact Page, Services, Gallery
```

## Step 1: Verify Your Google Sheet Structure

Your Google Sheet should now have **4 sheets** (tabs at the bottom):

### Sheet 1: Services
```
Columns: Name | Price | Duration | Category | Description | Image URL
Example: Hair Cutting | 65 | 60 | Hair | Professional haircuts | https://...
```

### Sheet 2: Gallery
```
Columns: Title | Image URL | Description
Example: Salon Interior | https://... | Beautiful salon space
```

### Sheet 3: Settings
```
Columns: Setting | Value
Name | Your Salon Name
Phone | +1 (555) 123-4567
WhatsApp | +1 (555) 123-4567
Email | info@yoursalon.com
Address | 123 Beauty Lane
City | New York
Country | USA
Description | Your salon description
```

### Sheet 4: Hours (NEW!)
```
Columns: Day | Hours
monday | 10:00 AM - 8:00 PM
tuesday | 10:00 AM - 8:00 PM
wednesday | 10:00 AM - 8:00 PM
thursday | 10:00 AM - 8:00 PM
friday | 10:00 AM - 9:00 PM
saturday | 9:00 AM - 6:00 PM
sunday | Closed
```

## Step 2: Create the Hours Sheet

If you haven't done this yet:

1. Open your Google Sheet
2. Click the **"+"** button at the bottom
3. Name it exactly: **Hours**
4. Press Enter
5. Add headers in Row 1:
   - A1: `Day`
   - B1: `Hours`
6. Add data starting from Row 2 (see examples below)

## Step 3: Set Up Hours Data

Click A2 and enter your hours. Use this format:

| Day | Hours |
|-----|-------|
| monday | 10:00 AM - 8:00 PM |
| tuesday | 10:00 AM - 8:00 PM |
| wednesday | 10:00 AM - 8:00 PM |
| thursday | 10:00 AM - 8:00 PM |
| friday | 10:00 AM - 9:00 PM |
| saturday | 9:00 AM - 6:00 PM |
| sunday | Closed |

## Step 4: Verify Settings Sheet is Complete

Make sure your Settings sheet has all 8 entries:

```
Setting | Value
-------|-------
Name | Your Salon Name
Phone | +1 (555) 123-4567
WhatsApp | +1 (555) 123-4567
Email | info@yoursalon.com
Address | 123 Beauty Lane
City | New York
Country | USA
Description | Your description here
```

## Step 5: Test Everything

1. **Reload your website** (Ctrl+Shift+R for hard refresh)
2. **Check Navbar:**
   - Logo should show your salon name
   - Book Now button uses your WhatsApp number
3. **Check Footer:**
   - Salon name appears
   - Phone, email, address from Settings
   - Opening hours from Hours sheet
4. **Check Contact Page:**
   - All info displayed correctly
   - Hours section shows all 7 days
   - WhatsApp and Call buttons work
5. **Check Services Page:**
   - Shows all your services
   - Prices and durations correct
6. **Check Gallery Page:**
   - Shows all your images

## Where Each Setting is Used

### Salon Name (Settings Sheet)
- ✅ Navbar logo text
- ✅ Footer company name
- ✅ Footer copyright year
- ✅ Page title (browser tab)

### Phone Number (Settings Sheet)
- ✅ Footer contact section (as link)
- ✅ Contact page (as link)
- ✅ Quick call button

### WhatsApp Number (Settings Sheet)
- ✅ Navbar "Book Now" button
- ✅ Footer (hidden, but available)
- ✅ Contact page "Chat on WhatsApp" button
- ✅ Floating WhatsApp button (bottom right)

### Email (Settings Sheet)
- ✅ Footer contact section (as link)
- ✅ Contact page (as link)

### Address (Settings Sheet)
- ✅ Footer location
- ✅ Contact page

### City & Country (Settings Sheet)
- ✅ Footer location (City, Country)
- ✅ Contact page

### Description (Settings Sheet)
- ✅ Footer about section
- ✅ Contact page
- ✅ Home page preview

### Opening Hours (Hours Sheet - NEW!)
- ✅ Footer hours section
- ✅ Contact page hours section
- ✅ Displayed with all 7 days

### Services (Services Sheet)
- ✅ Services page (full grid)
- ✅ Home page preview (3 featured)

### Gallery Images (Gallery Sheet)
- ✅ Gallery page (all images)
- ✅ Home page preview (featured images)

## Important Rules

### Hours Sheet Rules:
✅ **DO:**
- Use day names in lowercase: `monday`, `tuesday`, etc.
- Use 12-hour format with AM/PM: `10:00 AM - 8:00 PM`
- Include all 7 days
- Use "Closed" or "By Appointment" if not open
- Add spaces around hyphens: ` - ` (not just -)

❌ **DON'T:**
- Use capital letters: `Monday` (use `monday`)
- Use 24-hour format: `10:00 - 20:00`
- Skip days (must have all 7)
- Use abbreviations: `Mon`, `Tue`
- Leave hours blank (use "Closed" instead)

### Settings Sheet Rules:
✅ **DO:**
- Use exact setting names (case-sensitive):
  - `Name`, `Phone`, `WhatsApp`, `Email`
  - `Address`, `City`, `Country`, `Description`
- Fill in all 8 settings
- Use full phone numbers with country code

❌ **DON'T:**
- Typo setting names (e.g., "name" instead of "Name")
- Mix case (e.g., "PHONE" or "phone")
- Leave values empty

## Making Updates

### To Update Hours:
1. Go to Hours sheet
2. Edit any cell (e.g., change opening time)
3. Save the spreadsheet
4. Website updates within 1 hour (or refresh with Ctrl+Shift+R)

### To Update Salon Info (Name, Phone, etc.):
1. Go to Settings sheet
2. Edit the Value column
3. Save the spreadsheet
4. Website updates within 1 hour

### To Update Services:
1. Go to Services sheet
2. Edit or add rows
3. Save the spreadsheet
4. Website updates within 1 hour

### To Update Gallery:
1. Go to Gallery sheet
2. Edit or add rows with image URLs
3. Save the spreadsheet
4. Website updates within 1 hour

## Testing Checklist

Use this checklist to verify everything works:

- [ ] Hours sheet exists (4th tab at bottom)
- [ ] Hours sheet has: Day | Hours headers
- [ ] Hours sheet has all 7 days (monday-sunday)
- [ ] All day names are lowercase
- [ ] All hours are in format "HH:MM AM/PM - HH:MM AM/PM"
- [ ] Settings sheet has all 8 values filled
- [ ] Google Sheet is PUBLIC (Share → Anyone with link)
- [ ] Navbar shows your salon name
- [ ] Navbar Book Now button opens WhatsApp
- [ ] Footer shows salon name, phone, email
- [ ] Footer shows all 7 days of hours
- [ ] Contact page shows all info correctly
- [ ] Services page shows your services
- [ ] Gallery page shows your images
- [ ] All phone/email links work

## Troubleshooting

### Hours not showing?
1. Check Hours sheet exists
2. Check column headers are exactly "Day" and "Hours"
3. Check all day names are lowercase (monday, not Monday)
4. Hard refresh: Ctrl+Shift+R
5. Wait 10 minutes for cache to refresh

### Salon name not updating?
1. Check Settings sheet
2. Check "Name" field has a value
3. Check spelling: must be exactly "Name" (capital N)
4. Hard refresh: Ctrl+Shift+R

### Phone/WhatsApp not working?
1. Check Settings sheet values
2. Check phone format is correct (+1 555 123 4567 or +1-555-123-4567)
3. For WhatsApp links, only digits are used, so any format works

### Services/Gallery not showing?
1. Check data is in correct sheets
2. Check image URLs start with https://
3. Check required columns exist with correct headers
4. Check sheet is PUBLIC

## Files Changed

The following files were updated to support dynamic data:

- `lib/sheets.ts` - Added Hours parsing
- `components/layout/navbar.tsx` - Now receives settings prop
- `app/layout.tsx` - Passes settings to Navbar

These changes ensure:
- Navbar displays salon name dynamically
- All WhatsApp/phone links use actual numbers
- Hours are fetched from the new Hours sheet
- Complete scalability without code changes

---

**Your website is now fully dynamic!** Every change you make to Google Sheets appears on your website automatically.
