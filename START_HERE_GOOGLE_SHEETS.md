# START HERE - Google Sheets Setup Guide

**Welcome!** This is your starting point for setting up Google Sheets for your Salon website.

---

## What You Need to Do (3 Simple Steps)

### Step 1: Create a Google Sheet with 3 Tabs
- Go to sheets.google.com
- Create a new blank spreadsheet
- Create 3 sheets named: `Services`, `Gallery`, `Settings`

### Step 2: Fill in Your Data
- **Services sheet**: Add your salon services (hair, skincare, nails, etc.)
- **Gallery sheet**: Add photos of your salon
- **Settings sheet**: Add your salon info (name, phone, address)

### Step 3: Share the Sheet
- Click "Share" button
- Set to "Anyone with the link" → "Viewer" access
- Give SHEET_ID to your developer

---

## The 3 Sheets Explained Simply

### SERVICES Sheet
**Add here**: All the services you offer

```
Name | Price | Duration | Category | Description | Image URL
Hair Cutting | 65 | 60 | Hair | Professional haircuts | https://...
Facial | 75 | 60 | Skincare | Rejuvenating facial | https://...
Massage | 80 | 60 | Wellness | Relaxing massage | https://...
```

**Appears on website**: Services page with cards, searchable, filterable

---

### GALLERY Sheet
**Add here**: Photos of your salon

```
Title | Image URL | Description
Salon Interior | https://... | Beautiful salon
Styling Station | https://... | Professional station
```

**Appears on website**: Gallery page with photo grid

---

### SETTINGS Sheet
**Add here**: Your salon information

```
Setting | Value
Name | Luxury Salon
Phone | +1 (555) 123-4567
Email | info@salon.com
Address | 123 Beauty Lane
City | New York
Country | USA
```

**Appears on website**: Header, footer, contact page

---

## Important Rules (Read These!)

### SERVICES Sheet
- **Price**: Numbers ONLY (65, NOT "$65")
- **Duration**: Numbers ONLY (60, NOT "60 min")
- **Category**: MUST be exactly: Hair, Skincare, Nails, Wellness, or Makeup
- **Image URL**: Complete URL starting with https://

### GALLERY Sheet
- **Image URL**: REQUIRED (can't be empty)
- Must start with https://
- Must be a real image that loads in browser

### SETTINGS Sheet
- **Setting names**: Must match exactly: Name, Phone, WhatsApp, Email, Address, City, Country, Description
- **Value**: Your actual information

---

## Fastest Way to Get Started (Copy & Paste)

We've prepared complete examples ready to copy and paste!

### For complete examples with sample data:
👉 See: `GOOGLE_SHEETS_EXAMPLES.md`

**15 complete services you can copy and paste**
**12 complete gallery images you can copy and paste**
**Full settings ready to customize**

Takes 30 minutes max!

---

## If You Prefer Step-by-Step Instructions

👉 See: `GOOGLE_SHEETS_CHECKLIST.md`

Follow each part step-by-step with checkboxes.

---

## If You Want to Understand Everything

👉 See: `GOOGLE_SHEETS_SETUP.md`

Complete detailed guide explaining everything.

---

## If You Need Visual Diagrams

👉 See: `GOOGLE_SHEETS_VISUAL_GUIDE.md`

All sheets shown with visual examples.

---

## Quick Reference (One Page)

👉 See: `GOOGLE_SHEETS_QUICK_REFERENCE.txt`

One-page cheat sheet while you work.

---

## Navigation Guide

**I want to start RIGHT NOW**
→ Go to: `GOOGLE_SHEETS_EXAMPLES.md`

**I want step-by-step instructions**
→ Go to: `GOOGLE_SHEETS_CHECKLIST.md`

**I want complete understanding**
→ Go to: `GOOGLE_SHEETS_SETUP.md`

**I need visual examples**
→ Go to: `GOOGLE_SHEETS_VISUAL_GUIDE.md`

**I need quick reference while working**
→ Go to: `GOOGLE_SHEETS_QUICK_REFERENCE.txt`

**I need navigation help**
→ Go to: `GOOGLE_SHEETS_INDEX.md`

---

## The Simple Version (TL;DR)

1. **Create Google Sheet** with 3 sheets: Services, Gallery, Settings
2. **Add column headers** exactly as shown in examples
3. **Fill in your data** (use copy-paste examples to go faster)
4. **Make it public** (Share → "Anyone with link" → "Viewer")
5. **Copy your SHEET_ID** from the URL
6. **Give SHEET_ID to developer**
7. **Website automatically pulls your data!**

That's it! Your salon website is now powered by Google Sheets.

---

## How Long Does It Take?

- **Minimal setup** (3 services, 3 images): ~1 hour
- **Standard setup** (6 services, 6 images): ~1.5 hours
- **Premium setup** (12+ services, 12+ images): ~2.5 hours

Most people can get started in under 2 hours!

---

## What Makes a Good Google Sheet

✓ Exactly 3 sheets: Services, Gallery, Settings
✓ Column headers are correct and spelled exactly
✓ At least 3 services (6+ is better)
✓ At least 3 gallery images
✓ All required settings filled
✓ Data formats are correct (numbers, categories, URLs)
✓ Sheet is PUBLIC (shared with "Viewer" access)
✓ Ready to share SHEET_ID with developer

---

## What NOT to Do

✗ Don't use $ in prices (use 65, not $65)
✗ Don't use "min" in duration (use 60, not "60 min")
✗ Don't misspell category names
✗ Don't use incomplete image URLs
✗ Don't keep sheet PRIVATE
✗ Don't use spaces in column headers
✗ Don't leave empty rows in the middle of data

---

## Common Mistakes (Fixed in 30 Seconds)

**MISTAKE**: Price is "$65" instead of "65"
**FIX**: Edit the cell, remove the $

**MISTAKE**: Duration is "60 min" instead of "60"
**FIX**: Edit the cell, remove the text

**MISTAKE**: Category is "hair" instead of "Hair"
**FIX**: Edit the cell, correct capitalization

**MISTAKE**: Sheet is still PRIVATE
**FIX**: Click Share, change to "Viewer" access

All easily fixed! Don't worry about mistakes.

---

## Ready to Get Started?

### Pick Your Path:

**Path A: I just want to copy & paste (30 minutes)**
1. Open `GOOGLE_SHEETS_EXAMPLES.md`
2. Copy the example data
3. Paste into Google Sheet
4. Customize with your info
5. Done!

**Path B: I want detailed instructions (1 hour)**
1. Open `GOOGLE_SHEETS_CHECKLIST.md`
2. Follow each step
3. Check off as you go
4. Complete!

**Path C: I want to understand everything (1.5 hours)**
1. Read `GOOGLE_SHEETS_SETUP.md`
2. Follow `GOOGLE_SHEETS_CHECKLIST.md` alongside
3. Watch visual examples in `GOOGLE_SHEETS_VISUAL_GUIDE.md`
4. Master!

---

## Get Help If Stuck

**Most Common Issues:**
1. **Sheet is not public** → Click Share → "Viewer" access
2. **Prices show wrong** → Remove $ and decimals (use 65, not $65)
3. **Categories don't filter** → Check spelling (Hair, Skincare, Nails, Wellness, Makeup)
4. **Images don't appear** → Use complete URL (https://...) from free sources

**95% of issues are one of these 4 things!**

---

## What You're Building

Your salon website will have:

✓ **Home page** → Shows services preview, gallery preview, salon info
✓ **Services page** → All your services with search and filter
✓ **Gallery page** → Photos of your salon
✓ **Contact page** → Salon info and map
✓ **All updated from Google Sheets** → No website code changes needed

Every time you edit Google Sheets, website updates automatically!

---

## Timeline

**Day 1**: Create sheet and add headers (15 min)
**Day 2**: Add services (30-60 min)
**Day 3**: Add gallery images (20-30 min)
**Day 4**: Add settings (10 min)
**Day 5**: Make public and share (5 min)

**Total**: 1.5-2 hours spread over 5 days

Or do it all in one sitting in 2 hours!

---

## You've Got This!

Setting up Google Sheets is simple. Follow the documentation, copy the examples, and you're done.

Your salon website will be powered by Google Sheets, ready to go live!

---

## Next Step: Choose Your Starting Point

### Option 1: Fast Track (30 min setup)
**File**: `GOOGLE_SHEETS_EXAMPLES.md`
- Copy example data
- Paste into sheet
- Customize
- Done!

### Option 2: Guided Track (60 min setup)
**File**: `GOOGLE_SHEETS_CHECKLIST.md`
- Follow step-by-step
- Check off boxes
- Verify
- Complete!

### Option 3: Master Track (90 min setup)
**File**: `GOOGLE_SHEETS_SETUP.md`
- Read comprehensive guide
- Follow checklist
- View diagrams
- Understand everything!

---

## Good Luck!

You're going to do great. Your salon website is about to come alive with your real data from Google Sheets.

**Start now**: Pick an option above and begin!

Questions? Check `GOOGLE_SHEETS_SETUP.md` for detailed help.

---

Happy setting up! 🎉
