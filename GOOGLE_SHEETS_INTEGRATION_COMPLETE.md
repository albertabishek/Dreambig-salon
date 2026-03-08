# Google Sheets Integration Complete ✅

Your Luxury Salon website is now fully integrated with your Google Sheet!

## Sheet Details

**Your Google Sheet ID:** `1UysFDqjGUPw7JH2Z3zJBvVuVyG9f3OJxr8S4eBBEii4`

**Your Sheet URL:** https://docs.google.com/spreadsheets/d/1UysFDqjGUPw7JH2Z3zJBvVuVyG9f3OJxr8S4eBBEii4/

**Access Level:** Public (Anyone with link can view)

---

## What Happens Now

1. **Services Page** - Pulls data from your "Services" sheet
2. **Gallery Page** - Pulls data from your "Gallery" sheet
3. **All Pages** - Pull salon info from your "Settings" sheet

The website fetches data:
- **During deployment** (for performance)
- **Every 1 hour** (cache revalidation)
- **Automatically on page load** (fallback to defaults if offline)

---

## Your Sheet Structure (Verified)

### Services Sheet
| Name | Price | Duration | Category | Description | Image URL |
|------|-------|----------|----------|-------------|-----------|
| Hair Cutting | 65 | 60 | Hair | Professional haircuts | https://... |

**Rules:**
- Price: Numbers only (e.g., `65` not `$65`)
- Duration: Numbers only (e.g., `60` not `60 min`)
- Category: One of: Hair, Skincare, Nails, Wellness, Makeup
- Image URL: Full HTTPS URL (e.g., `https://example.com/image.jpg`)

### Gallery Sheet
| Title | Image URL | Description |
|-------|-----------|-------------|
| Salon Interior | https://... | Beautiful salon space |

**Rules:**
- Image URL: Required - Full HTTPS URL
- Title: Optional - Shows if provided
- Description: Optional - Shows in tooltip

### Settings Sheet
| Setting | Value |
|---------|-------|
| Name | Luxury Salon |
| Phone | +1 (555) 123-4567 |
| WhatsApp | +1 (555) 123-4567 |
| Email | info@luxurysalon.com |
| Address | 123 Beauty Lane |
| City | New York |
| Country | USA |
| Description | Premium salon services |

**Rules:**
- Use EXACT setting names (case-insensitive in backend)
- One setting per row
- All 8 settings recommended (but optional)

---

## How to Update Your Website

### To Add/Edit Services:
1. Open your Google Sheet
2. Go to "Services" tab
3. Add or edit rows
4. **Save** (Ctrl+S or Cmd+S)
5. Website updates within 1 hour OR on next deployment

### To Add/Edit Gallery Images:
1. Open your Google Sheet
2. Go to "Gallery" tab
3. Add new rows with image URLs
4. **Save**
5. Website updates within 1 hour OR on next deployment

### To Update Salon Info:
1. Open your Google Sheet
2. Go to "Settings" tab
3. Edit the "Value" column
4. **Save**
5. Website updates within 1 hour OR on next deployment

---

## Data Flow Diagram

```
┌─────────────────────────┐
│   Your Google Sheet     │
│  (Services, Gallery,    │
│    Settings tabs)       │
└────────────┬────────────┘
             │
             │ Public CSV Export URL
             │ (no API key needed)
             ↓
┌─────────────────────────┐
│  Website /lib/sheets.ts │
│  (Data fetcher)         │
└────────────┬────────────┘
             │
             │ Parse CSV → Objects
             ↓
┌─────────────────────────────────┐
│  Website Pages                  │
│  - Home (Services Preview)      │
│  - Services (Full List)         │
│  - Gallery (All Images)         │
│  - Contact (Salon Info)         │
└─────────────────────────────────┘
```

---

## Caching & Updates

**Cache Duration:** 1 hour (3600 seconds)

This means:
- Changes take max 1 hour to appear on live site
- Faster loading (data cached in database)
- Reduced Google Sheets API usage

**Force Update Options:**
1. **Redeploy** website (fastest - immediate update)
2. **Wait 1 hour** (automatic)
3. **Clear cache** in deployment settings

---

## Troubleshooting

### Services/Gallery Not Showing?
1. Check sheet is **Public** (Share → Anyone with link)
2. Verify column headers exactly match:
   - Services: `Name | Price | Duration | Category | Description | Image URL`
   - Gallery: `Title | Image URL | Description`
3. Check no empty rows between data
4. Verify price/duration are numbers only

### Image Not Showing in Gallery?
1. Image URL must start with `https://`
2. Website must be able to access the URL
3. Image must be publicly accessible

### Settings Not Updating?
1. Verify "Setting" column has EXACT names (case-insensitive)
2. Check "Value" column is not empty
3. Reload website after saving

### Still Having Issues?
Check the browser console for error messages (F12 → Console tab)

---

## Code Changes Made

**File Modified:** `/lib/sheets.ts`

**What Changed:**
- ✅ Added your Google Sheet ID
- ✅ Implemented CSV fetch (no API key needed)
- ✅ CSV parser for handling all Google Sheets formats
- ✅ Improved data parsing with error handling
- ✅ 1-hour cache for performance
- ✅ Fallback to defaults if sheet unreachable

**No API Keys Needed:** Your sheet is public, so no authentication required!

---

## For Deployment

When deploying to Vercel:
1. No environment variables needed
2. Sheet must remain **Public**
3. Auto-revalidates every 1 hour
4. Fallback to default data if offline

---

## Next Steps

1. **Add more services** to your Services sheet
2. **Add gallery images** with image URLs
3. **Update salon info** in Settings sheet
4. **Reload website** to see changes

That's it! Your website is now live with dynamic Google Sheets data! 🎉

---

## Quick Reference

| Sheet | Purpose | Key Column |
|-------|---------|-----------|
| Services | Display all services with price/duration | Image URL |
| Gallery | Show salon photos | Image URL |
| Settings | Update contact info & salon details | Value |

**Remember:** Save after edits! Changes appear within 1 hour.
