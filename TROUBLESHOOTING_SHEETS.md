# Google Sheets Troubleshooting Guide

## Problem: Services/Gallery Not Showing

### Checklist
- [ ] Sheet is **Public** (Share → Anyone with link → Viewer)
- [ ] Column headers match EXACTLY (including capitalization):
  - Services: `Name | Price | Duration | Category | Description | Image URL`
  - Gallery: `Title | Image URL | Description`
- [ ] No empty rows between headers and data
- [ ] No duplicate header rows
- [ ] Price values are NUMBERS only (65, not $65)
- [ ] Duration values are NUMBERS only (60, not 60 min)
- [ ] Image URLs start with `https://`

### Solution Steps
1. Go to your Google Sheet
2. Click on the tab (Services or Gallery)
3. Delete any empty rows
4. Verify headers in row 1
5. Verify data starts in row 2
6. Save (Ctrl+S)
7. Wait 1 minute and reload website

---

## Problem: Images Not Loading

### Possible Causes

**1. Invalid Image URL**
- URL doesn't start with `https://`
- URL has spaces
- URL is broken/not accessible

**Solution:**
```
❌ Wrong: http://example.com/image.jpg
❌ Wrong: example.com/image.jpg
✅ Correct: https://example.com/image.jpg
```

**2. Image Not Publicly Accessible**
- Private image from Dropbox/Google Drive
- Website can't access the URL

**Solution:**
- Use public image hosting (Imgur, Unsplash, Pexels, etc.)
- OR make Google Drive link public

**3. Mixed Content Error**
- Website is HTTPS but image URL is HTTP

**Solution:**
- Always use `https://` for image URLs

---

## Problem: Settings Not Updating

### Checklist
- [ ] Setting names match exactly (case-insensitive):
  - Name
  - Phone
  - WhatsApp
  - Email
  - Address
  - City
  - Country
  - Description
- [ ] Value column is not empty
- [ ] No extra spaces before/after values
- [ ] All settings in "Setting" column

### Solution Steps
1. Open Settings sheet
2. Check column A has setting names
3. Check column B has values
4. Remove any extra rows
5. Save
6. Wait 1 minute and reload

---

## Problem: CSV Parse Error

### What It Means
The website can't read the CSV data from your sheet.

### Causes
- Sheet tabs renamed (must be exactly: Services, Gallery, Settings)
- Rows with missing data
- Special characters breaking CSV format
- Commas inside quoted fields not properly escaped

### Solution
1. Verify sheet tab names (case-sensitive):
   - `Services` (not "services")
   - `Gallery` (not "gallery")
   - `Settings` (not "settings")
2. Remove any incomplete rows
3. Reload website

---

## Problem: Website Using Old Data

### Cause
Data is cached for 1 hour

### Solutions

**Option 1: Immediate Update (Redeploy)**
1. Go to Vercel dashboard
2. Click "Redeploy"
3. Website updates in 1-2 minutes

**Option 2: Wait for Cache**
- Automatic update within 1 hour
- Next time you modify the sheet

**Option 3: Hard Refresh Browser**
- Press `Ctrl+Shift+R` (Windows)
- Press `Cmd+Shift+R` (Mac)
- Clears local browser cache

---

## Problem: Services Show But Gallery Doesn't

### Checklist
- [ ] Gallery tab exists
- [ ] Gallery has headers in row 1:
  - `Title | Image URL | Description`
- [ ] Image URLs start with `https://`
- [ ] No empty Image URL rows
- [ ] Gallery data starts in row 2

### Common Mistake
❌ Wrong header: `Image URL` vs `Url` vs `ImageURL`
✅ Must be exactly: `Image URL`

---

## Problem: Price Shows as "0" or Blank

### Cause
Price value in Google Sheet is:
- Empty
- Text instead of number
- Has special characters

### Solution
1. Go to Services sheet
2. Check Price column (B)
3. Each price should be a NUMBER:
   ```
   ✅ Correct: 65
   ❌ Wrong: $65
   ❌ Wrong: 65 dollars
   ❌ Wrong: Price: 65
   ```
4. Save and reload

---

## Problem: Duration Shows Wrong

### Cause
Duration value is:
- Text format
- Has "min" or "minutes"
- Decimal number

### Solution
1. Go to Services sheet
2. Check Duration column (C)
3. Each duration should be a WHOLE NUMBER:
   ```
   ✅ Correct: 60
   ❌ Wrong: 60 min
   ❌ Wrong: 1 hour
   ❌ Wrong: 45.5
   ```
4. Save and reload

---

## Problem: Special Characters Show Wrong

### Cause
Google Sheets exported special characters (é, ñ, etc.) incorrectly

### Solution
1. Avoid special characters in:
   - Service names
   - Image descriptions
2. Use simple ASCII characters
3. OR ensure Google Sheet is UTF-8 encoded

---

## How to Check Browser Console for Errors

1. Open website in browser
2. Press **F12** (or Cmd+Option+I on Mac)
3. Click **Console** tab
4. Look for red error messages
5. Note down the error
6. Check troubleshooting section

### Common Error Messages

**"Failed to fetch sheet"**
- Sheet is not public OR
- Sheet name misspelled OR
- Network issue

**"Cannot read property '0' of undefined"**
- Empty rows in sheet OR
- Missing headers

**"Invalid URL"**
- Image URL format is wrong

---

## Testing Checklist

After setting up, test each section:

### Services Page Test
- [ ] Services display (count > 0)
- [ ] Service names visible
- [ ] Prices show correct numbers
- [ ] Duration shows correct numbers
- [ ] Categories filter works
- [ ] Search works
- [ ] Images display

### Gallery Page Test
- [ ] Images display (count > 0)
- [ ] All images load
- [ ] Titles visible
- [ ] Descriptions visible on hover
- [ ] Click to view full image
- [ ] No broken images

### Contact Page Test
- [ ] Salon name correct
- [ ] Phone number correct
- [ ] WhatsApp number correct
- [ ] Email correct
- [ ] Address correct
- [ ] Location shows on map

---

## Quick Debug Steps

1. **Reload website** (Ctrl+R or Cmd+R)
2. **Hard refresh** (Ctrl+Shift+R or Cmd+Shift+R)
3. **Check sheet is public**
4. **Check column headers**
5. **Check data format** (numbers for price/duration)
6. **Check Google Sheet saved**
7. **Wait 1 minute** (cache revalidation)
8. **Check browser console** (F12)
9. **Redeploy website** on Vercel

---

## Still Need Help?

Check:
1. Sheet is Public ✅
2. Headers exact ✅
3. Data format correct ✅
4. Images HTTPS URLs ✅

If still stuck, check file:
- `lib/sheets.ts` - The data fetching code
- `lib/types.ts` - Data structure definitions
