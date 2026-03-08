# Google Sheets Setup - Complete Documentation Index

Use this page to navigate all Google Sheets documentation for your Salon website.

---

## Quick Start (5 Minutes)

If you're in a hurry, read these in order:

1. **[GOOGLE_SHEETS_QUICK_REFERENCE.txt](GOOGLE_SHEETS_QUICK_REFERENCE.txt)** ← START HERE
   - One-page cheat sheet
   - Overview of all 3 sheets
   - Column names and rules
   - Common mistakes

2. **[GOOGLE_SHEETS_EXAMPLES.md](GOOGLE_SHEETS_EXAMPLES.md)** ← COPY & PASTE
   - Ready-to-use service examples
   - Ready-to-use gallery examples
   - Ready-to-use settings examples
   - Just copy and paste!

3. **[GOOGLE_SHEETS_CHECKLIST.md](GOOGLE_SHEETS_CHECKLIST.md)** ← FOLLOW STEP-BY-STEP
   - Complete setup checklist
   - Check off each step
   - Testing and verification
   - Troubleshooting

---

## Detailed Documentation (30 Minutes)

For complete understanding, read these:

### [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md) - **COMPREHENSIVE GUIDE**
- Step 1: Create the Google Sheet
- Step 2: Create sheet tabs (Services, Gallery, Settings)
- Step 3: Configure SERVICES sheet (columns, data types, rules)
- Step 4: Configure GALLERY sheet (image URLs, titles)
- Step 5: Configure SETTINGS sheet (salon information)
- Step 6: Make your sheet public
- Step 7: Enable API access
- Step 8: Update your website
- Complete examples for each sheet
- Troubleshooting section
- Free image sources

### [GOOGLE_SHEETS_VISUAL_GUIDE.md](GOOGLE_SHEETS_VISUAL_GUIDE.md) - **VISUAL DIAGRAMS**
- Complete sheet structure overview
- Visual examples of each sheet
- What appears on the website
- Column data types with examples
- Data flow diagram
- Step-by-step visual setup
- Common data entry mistakes (visual comparison)
- Checklist before sharing
- Image URL examples

---

## Reference Documents

### [GOOGLE_SHEETS_QUICK_REFERENCE.txt](GOOGLE_SHEETS_QUICK_REFERENCE.txt)
**Best for**: Quick lookup while filling your sheet
- Sheet structure
- Column names and rules
- Required minimums
- Common mistakes
- Troubleshooting quick answers

### [GOOGLE_SHEETS_EXAMPLES.md](GOOGLE_SHEETS_EXAMPLES.md)
**Best for**: Copy and paste data
- Complete service examples (15 services)
- Complete gallery examples (12 images)
- Complete settings examples
- Minimal setup (3 services, 3 images)
- Premium setup (12 services)
- Customization tips
- Free image sources
- Pricing guide

### [GOOGLE_SHEETS_CHECKLIST.md](GOOGLE_SHEETS_CHECKLIST.md)
**Best for**: Step-by-step setup
- Part 1: Create the sheet
- Part 2: Create sheet tabs
- Part 3: Set up SERVICES sheet
- Part 4: Set up GALLERY sheet
- Part 5: Set up SETTINGS sheet
- Part 6: Share your sheet
- Part 7: Prepare for developer
- Part 8: Testing your setup
- Common issues checklist
- Final verification

---

## Which Document Should I Read?

### If you want to...

**...get started immediately**
→ Read: GOOGLE_SHEETS_QUICK_REFERENCE.txt + GOOGLE_SHEETS_EXAMPLES.md

**...understand everything step-by-step**
→ Read: GOOGLE_SHEETS_SETUP.md (comprehensive) + GOOGLE_SHEETS_CHECKLIST.md (follow along)

**...see visual examples and diagrams**
→ Read: GOOGLE_SHEETS_VISUAL_GUIDE.md

**...copy and paste data quickly**
→ Go to: GOOGLE_SHEETS_EXAMPLES.md

**...follow a detailed checklist**
→ Go to: GOOGLE_SHEETS_CHECKLIST.md

**...troubleshoot an issue**
→ Read: GOOGLE_SHEETS_SETUP.md "Troubleshooting" section

---

## File Organization

```
Documentation Files:
├─ GOOGLE_SHEETS_INDEX.md (this file)
│  └─ You are here!
│
├─ QUICK START:
│  ├─ GOOGLE_SHEETS_QUICK_REFERENCE.txt (1-page overview)
│  └─ GOOGLE_SHEETS_EXAMPLES.md (copy & paste data)
│
├─ STEP-BY-STEP:
│  ├─ GOOGLE_SHEETS_SETUP.md (comprehensive guide, ~400 lines)
│  ├─ GOOGLE_SHEETS_CHECKLIST.md (follow along checklist)
│  └─ GOOGLE_SHEETS_VISUAL_GUIDE.md (diagrams and visuals)
```

---

## The 3 Sheets You Need

### 1. SERVICES Sheet
**What goes here**: All your salon services (hair, skincare, nails, wellness, makeup)

**Columns needed**: Name | Price | Duration | Category | Description | Image URL

**Example**: 
```
Hair Cutting & Styling | 65 | 60 | Hair | Professional haircuts... | https://...jpg
```

**What shows on website**: Services page with cards, searchable, filterable by category

---

### 2. GALLERY Sheet
**What goes here**: Photos of your salon interior, services, rooms, etc.

**Columns needed**: Title | Image URL | Description

**Example**:
```
Salon Interior | https://...jpg | Beautiful salon area
```

**What shows on website**: Gallery page with image grid, lightbox view

---

### 3. SETTINGS Sheet
**What goes here**: Your salon information (name, phone, address, hours, etc.)

**Columns needed**: Setting | Value

**Example**:
```
Name | Luxury Salon
Phone | +1 (555) 123-4567
```

**What shows on website**: Header, footer, contact page, home page

---

## Column Names (EXACT SPELLING)

### SERVICES Sheet (Row 1)
```
Name | Price | Duration | Category | Description | Image URL
```

### GALLERY Sheet (Row 1)
```
Title | Image URL | Description
```

### SETTINGS Sheet (Row 1)
```
Setting | Value
```

⚠️ These must be EXACT (including capitalization) or the website won't work correctly!

---

## Data Rules Quick Summary

### SERVICES Sheet Rules:
- **Name**: Text, up to 50 characters
- **Price**: NUMBERS ONLY (65, not "$65" or "65.00")
- **Duration**: NUMBERS ONLY in minutes (60, not "60 min")
- **Category**: EXACTLY one of: Hair, Skincare, Nails, Wellness, Makeup
- **Description**: 1-3 sentences, 50-150 characters
- **Image URL**: Complete URL starting with https:// (or empty)

### GALLERY Sheet Rules:
- **Title**: 1-3 words
- **Image URL**: REQUIRED, must start with https://, publicly accessible
- **Description**: Optional, 2-5 words

### SETTINGS Sheet Rules:
- **Setting**: EXACTLY one of the 8 defined settings
- **Value**: Your information (phone, email, address, etc.)

---

## Most Common Setup Issues (and fixes)

### Issue #1: Website shows demo data, not my data
**Cause**: Sheet is not public
**Fix**: Click Share → "Anyone with the link" → "Viewer" access

### Issue #2: Prices show as blank on website
**Cause**: Price has $ sign or decimal
**Fix**: Use NUMBERS ONLY (65, not "$65" or "65.00")

### Issue #3: Gallery images don't appear
**Cause**: Image URL is incomplete or wrong
**Fix**: Use complete https:// URL from Unsplash, Pexels, or Pixabay

### Issue #4: Categories don't filter services
**Cause**: Category spelling doesn't match exactly
**Fix**: Use EXACTLY: Hair, Skincare, Nails, Wellness, or Makeup

---

## Timeline for Setup

### Option A: Quick Setup (2-3 hours total)
- 15 min: Create sheet and tabs
- 30 min: Add 6 services with copy/paste
- 20 min: Add 3-6 gallery images
- 10 min: Add settings
- 10 min: Make public and share
- **Total**: ~1.5 hours

### Option B: Complete Setup (3-4 hours total)
- 15 min: Create sheet and tabs
- 60 min: Add 12-15 services manually
- 30 min: Add 8-12 gallery images
- 15 min: Add settings
- 15 min: Review and verify
- 10 min: Make public and share
- **Total**: ~2.5 hours

---

## Free Image Sources to Use

**Unsplash** (unsplash.com)
- Search: "salon", "hair", "spa", "beauty", "massage", "facial"
- Free high-quality photos
- Use direct image URL

**Pexels** (pexels.com)
- Search: "hairdresser", "beauty salon", "nail care", "wellness"
- Free stock photos
- Copy image URL

**Pixabay** (pixabay.com)
- Search: "treatment room", "cosmetics", "spa", "salon"
- Free images and vectors
- Provides direct URLs

---

## Checklist: Are You Ready?

Before sending your sheet to the developer, verify:

- [ ] 3 sheets created: Services, Gallery, Settings
- [ ] Services sheet has 6+ services with complete data
- [ ] Gallery sheet has 3+ images with URLs
- [ ] Settings sheet has all 8 settings
- [ ] All column headers are spelled correctly
- [ ] All data formats are correct (numbers, categories, URLs)
- [ ] Sheet is PUBLIC (anyone with link can view)
- [ ] You have SHEET_ID copied from URL
- [ ] You have public share link saved

If yes to all, you're ready!

---

## What Happens Next

### Step 1: You complete setup
- Create and fill all 3 sheets
- Make sheet public
- Copy SHEET_ID and share link

### Step 2: You tell your developer
```
Hi, my Google Sheets is ready!

SHEET_ID: 1a2b3c4d5e6f7g8h9i...
Share Link: https://docs.google.com/spreadsheets/d/...

Sheets:
- Services (6 services)
- Gallery (6 images)
- Settings (all configured)

Ready to connect!
```

### Step 3: Developer updates code
- Updates lib/sheets.ts with your SHEET_ID
- Adds environment variables if needed
- Tests the connection

### Step 4: Website goes live
- Visits website, sees YOUR data
- Not demo data anymore
- Your services, gallery, settings appear

### Step 5: You can update anytime
- Edit Google Sheet
- Website automatically updates
- No need to change website code

---

## Questions About Setup?

### Most asked questions:

**Q: Do I need an API key?**
A: For simple setup, no. Your sheet just needs to be public. API key is optional for more advanced features.

**Q: Can I edit my data after sharing with developer?**
A: Yes! Edit Google Sheet → Website automatically updates within minutes.

**Q: What if I make a mistake in the data?**
A: Easy fix! Edit the cell in Google Sheet → it updates automatically.

**Q: How long does the website take to show my data?**
A: Usually immediate, but can take up to 5 minutes to fully refresh.

**Q: Can I add more services later?**
A: Yes! Just add new rows to Services sheet → website shows them automatically.

**Q: Is my data private?**
A: No, once shared with "Viewer" access, anyone with the link can see the data. Don't put private information there.

---

## Getting Help

### If something doesn't work:

1. **Check the three most common issues** (above)
2. **Read GOOGLE_SHEETS_SETUP.md "Troubleshooting"** section
3. **Verify data formats** in GOOGLE_SHEETS_QUICK_REFERENCE.txt
4. **Ask your developer** with this info:
   - Description of the issue
   - Screenshot if possible
   - Your SHEET_ID (so they can check)
   - What you already tried

---

## Documentation Summary

| File | Purpose | Length | Best For |
|------|---------|--------|----------|
| GOOGLE_SHEETS_QUICK_REFERENCE.txt | One-page overview | 1 page | Quick lookup |
| GOOGLE_SHEETS_EXAMPLES.md | Copy & paste data | 5 pages | Getting started fast |
| GOOGLE_SHEETS_SETUP.md | Complete guide | ~15 pages | Understanding everything |
| GOOGLE_SHEETS_CHECKLIST.md | Step-by-step | ~12 pages | Following along |
| GOOGLE_SHEETS_VISUAL_GUIDE.md | Diagrams & visuals | ~15 pages | Visual learners |
| GOOGLE_SHEETS_INDEX.md | This file | Navigation | Finding what you need |

---

## Ready to Start?

### Option 1: I want to start NOW
1. Open: [GOOGLE_SHEETS_EXAMPLES.md](GOOGLE_SHEETS_EXAMPLES.md)
2. Copy the example data
3. Paste into your Google Sheet
4. Done in 30 minutes!

### Option 2: I want to understand first
1. Open: [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md)
2. Read Sections 1-6
3. Then follow: [GOOGLE_SHEETS_CHECKLIST.md](GOOGLE_SHEETS_CHECKLIST.md)

### Option 3: I prefer step-by-step
1. Open: [GOOGLE_SHEETS_CHECKLIST.md](GOOGLE_SHEETS_CHECKLIST.md)
2. Follow each part
3. Check off as you go

---

## You've Got This!

Setting up Google Sheets takes 1-3 hours depending on how many services you want to add.

**Quick setup** (minimal data): ~1.5 hours
**Premium setup** (full data): ~2.5 hours

Once done, you'll never need to touch the website code again. Just edit your Google Sheet, and the website updates automatically!

**Good luck!** 🎉

---

## Next Steps

1. Choose your starting point above
2. Follow the documentation
3. Fill your Google Sheet
4. Make it public
5. Share with your developer
6. Your salon website is live!
