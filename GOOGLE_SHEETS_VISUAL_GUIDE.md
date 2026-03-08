# Google Sheets Setup - Visual Diagram Guide

## Complete Sheet Structure Overview

```
Your Google Sheet (One file with 3 sheets inside)
│
├─ SERVICES Sheet
│  ├─ Column A: Name
│  ├─ Column B: Price
│  ├─ Column C: Duration
│  ├─ Column D: Category
│  ├─ Column E: Description
│  └─ Column F: Image URL
│
├─ GALLERY Sheet
│  ├─ Column A: Title
│  ├─ Column B: Image URL
│  └─ Column C: Description
│
└─ SETTINGS Sheet
   ├─ Column A: Setting (Name, Phone, Email, etc.)
   └─ Column B: Value
```

---

## SERVICES Sheet - Detailed Example

### How it looks in Google Sheets:

```
┌──────────────────┬───────┬──────────┬──────────┬─────────────────────────┬──────────────────┐
│ A: Name          │ B: $ │ C: Min   │ D: Type  │ E: Description          │ F: Image         │
├──────────────────┼───────┼──────────┼──────────┼─────────────────────────┼──────────────────┤
│ Hair Cut         │  65  │  60      │ Hair     │ Professional cuts...    │ https://image1   │
├──────────────────┼───────┼──────────┼──────────┼─────────────────────────┼──────────────────┤
│ Hair Color       │  85  │  90      │ Hair     │ Premium coloring...     │ https://image2   │
├──────────────────┼───────┼──────────┼──────────┼─────────────────────────┼──────────────────┤
│ Facial           │  75  │  60      │ Skincare │ Rejuvenating treatments │ https://image3   │
├──────────────────┼───────┼──────────┼──────────┼─────────────────────────┼──────────────────┤
│ Nails            │  55  │  45      │ Nails    │ Luxurious nail care     │ https://image4   │
├──────────────────┼───────┼──────────┼──────────┼─────────────────────────┼──────────────────┤
│ Massage          │  80  │  60      │ Wellness │ Relaxing massage...     │ https://image5   │
├──────────────────┼───────┼──────────┼──────────┼─────────────────────────┼──────────────────┤
│ Makeup           │  50  │  45      │ Makeup   │ Professional makeup     │ https://image6   │
└──────────────────┴───────┴──────────┴──────────┴─────────────────────────┴──────────────────┘
```

### What appears on the website:

```
┌─────────────────────────────────────────┐
│     Hair Cutting & Styling              │
├─────────────────────────────────────────┤
│ [Image from F column]                   │
│                                         │
│ Professional haircuts and styling       │ ← From E column
│ services tailored to your preferences   │
│                                         │
│ Price: $65         Duration: 60 min    │ ← From B & C
│                                         │
│ Category: Hair                          │ ← From D
└─────────────────────────────────────────┘
```

---

## GALLERY Sheet - Detailed Example

### How it looks in Google Sheets:

```
┌──────────────────┬─────────────────────┬──────────────────┐
│ A: Title         │ B: Image URL        │ C: Description   │
├──────────────────┼─────────────────────┼──────────────────┤
│ Salon Interior   │ https://image-1.jpg │ Beautiful area   │
├──────────────────┼─────────────────────┼──────────────────┤
│ Styling Station  │ https://image-2.jpg │ Professional     │
├──────────────────┼─────────────────────┼──────────────────┤
│ Relax Area       │ https://image-3.jpg │ Comfortable      │
├──────────────────┼─────────────────────┼──────────────────┤
│ Treatment Room   │ https://image-4.jpg │ Private          │
└──────────────────┴─────────────────────┴──────────────────┘
```

### What appears on the website:

```
Gallery Page displays images in a grid:

┌─────────┐ ┌─────────┐ ┌─────────┐
│ Image 1 │ │ Image 2 │ │ Image 3 │
└─────────┘ └─────────┘ └─────────┘

┌─────────┐ ┌─────────┐
│ Image 4 │ │ Image 5 │
└─────────┘ └─────────┘
```

---

## SETTINGS Sheet - Detailed Example

### How it looks in Google Sheets:

```
┌──────────────┬────────────────────────────┐
│ A: Setting   │ B: Value                   │
├──────────────┼────────────────────────────┤
│ Name         │ Luxury Salon               │
├──────────────┼────────────────────────────┤
│ Phone        │ +1 (555) 123-4567         │
├──────────────┼────────────────────────────┤
│ WhatsApp     │ +1 (555) 123-4567         │
├──────────────┼────────────────────────────┤
│ Email        │ info@luxurysalon.com      │
├──────────────┼────────────────────────────┤
│ Address      │ 123 Beauty Lane           │
├──────────────┼────────────────────────────┤
│ City         │ New York                   │
├──────────────┼────────────────────────────┤
│ Country      │ USA                        │
├──────────────┼────────────────────────────┤
│ Description  │ Experience luxury beauty   │
│              │ services at our salon...   │
└──────────────┴────────────────────────────┘
```

### What appears on the website:

- **Footer**: Shows phone, address, city, country
- **Contact Page**: Shows all settings
- **Header**: Shows salon name
- **About**: Shows description

---

## Column Data Types Visual Guide

### SERVICES Sheet - Column Validation

```
Column A: Name
├─ Type: TEXT
├─ Max length: 50 characters
├─ Examples: ✓ "Hair Cutting & Styling"  ✗ "Hair-Cutting-&-Styling!!!1!!"
└─ Contains: Only text, no numbers needed

Column B: Price
├─ Type: NUMBER (whole or decimal)
├─ Format: Numbers ONLY
├─ Examples: ✓ 65  ✓ 75.50  ✗ "$65"  ✗ "65$"  ✗ "65 dollars"
└─ Range: 0-9999

Column C: Duration
├─ Type: NUMBER (minutes)
├─ Format: Numbers ONLY
├─ Examples: ✓ 60  ✓ 45  ✗ "60 min"  ✗ "1 hour"  ✗ "45 minutes"
└─ Range: 15-480 minutes recommended

Column D: Category
├─ Type: TEXT (must match EXACTLY)
├─ Valid values:
│  ├─ Hair
│  ├─ Skincare
│  ├─ Nails
│  ├─ Wellness
│  └─ Makeup
├─ Examples: ✓ "Hair"  ✗ "haircut"  ✗ "HAIR"  ✗ "hair cuts"
└─ Case-sensitive!

Column E: Description
├─ Type: TEXT
├─ Length: 30-150 characters
├─ Format: 1-3 sentences
├─ Examples: ✓ "Professional haircuts tailored to your style"
│            ✗ "Hair"  ✗ "Very long description with lots of words..."
└─ Marketing language recommended

Column F: Image URL
├─ Type: URL (text)
├─ Format: Complete URL with https://
├─ Examples: ✓ "https://images.unsplash.com/photo-xxx?w=400"
│            ✗ "/images/photo.jpg"  ✗ "image.jpg"  ✗ "http://..."
├─ Must be publicly accessible
└─ Optional (can be left empty)
```

---

## Data Flow Diagram

```
Your Google Sheet
        │
        │ (Website reads)
        ↓
   lib/sheets.ts
   (fetches data)
        │
        ├─→ Services
        │   └─→ /services page
        │
        ├─→ Gallery
        │   └─→ /gallery page
        │
        └─→ Settings
            └─→ Footer, Contact page, Home page
```

---

## Step-by-Step Visual Setup

### Step 1: Create Sheet
```
Google Sheets → Click "+" → Blank Spreadsheet
               ↓
        Name: "Salon Data"
               ↓
          You get "Sheet1"
```

### Step 2: Rename Tabs
```
Sheet1  →  Right-click  →  Rename  →  "Services"
            ↓
            +
            ↓
        New Sheet  →  Rename  →  "Gallery"
            ↓
            +
            ↓
        New Sheet  →  Rename  →  "Settings"

Result:
┌─────────┬──────────┬──────────┐
│Services │ Gallery  │ Settings │
└─────────┴──────────┴──────────┘
```

### Step 3: Add Headers to Services
```
Open "Services" tab
        ↓
Row 1: Name | Price | Duration | Category | Description | Image URL
```

### Step 4: Add Data to Services
```
Row 2: Hair Cutting & Styling | 65 | 60 | Hair | Professional cuts... | https://...
Row 3: Hair Coloring | 85 | 90 | Hair | Premium coloring... | https://...
Row 4: Facial Treatment | 75 | 60 | Skincare | Rejuvenating... | https://...
...
```

### Step 5: Add Headers to Gallery
```
Open "Gallery" tab
       ↓
Row 1: Title | Image URL | Description
```

### Step 6: Add Data to Gallery
```
Row 2: Salon Interior | https://image1.jpg | Beautiful area
Row 3: Styling Station | https://image2.jpg | Professional
...
```

### Step 7: Add Headers to Settings
```
Open "Settings" tab
        ↓
Row 1: Setting | Value
```

### Step 8: Add Data to Settings
```
Row 2: Name | Luxury Salon
Row 3: Phone | +1 (555) 123-4567
Row 4: WhatsApp | +1 (555) 123-4567
Row 5: Email | info@salon.com
Row 6: Address | 123 Beauty Lane
Row 7: City | New York
Row 8: Country | USA
Row 9: Description | Experience luxury beauty...
```

### Step 9: Make Public
```
Click "Share" button (top right)
        ↓
"Change to Anyone with the Link"
        ↓
"Viewer" access (read-only)
        ↓
Copy Share Link
        ↓
Click "Share"
```

### Step 10: Get Sheet ID
```
Look at URL:
docs.google.com/spreadsheets/d/{SHEET_ID}/edit
                              ↑
                           Copy This
```

---

## Image URL Examples

### From Unsplash:
```
1. Go to unsplash.com
2. Search "salon" or "hair" or "spa"
3. Click image
4. Right-click → Copy Image Address
5. Paste in Google Sheet column F

Example:
https://images.unsplash.com/photo-1522337660859-02fbefca6088?w=400
```

### From Pexels:
```
1. Go to pexels.com
2. Search "salon" or "beauty" or "hairdresser"
3. Click image
4. Look for "Download" → copy URL
5. Paste in Google Sheet

Example:
https://images.pexels.com/photos/3407617/pexels-photo-3407617.jpeg
```

### From Pixabay:
```
1. Go to pixabay.com
2. Search "salon" or "spa" or "beauty"
3. Click image
4. Copy image URL
5. Paste in Google Sheet

Example:
https://cdn.pixabay.com/photo/2019/07/30/20/36/salon-4374640_960_720.jpg
```

---

## Common Data Entry Mistakes (Visual)

### ❌ WRONG

```
Services Sheet:
┌───────┬──────────┬─────────┬──────────┐
│ Name  │ Price    │Duration │Category  │
├───────┼──────────┼─────────┼──────────┤
│ Hair  │ $65.00   │ 60 min  │ haircut  │  ← All wrong!
└───────┴──────────┴─────────┴──────────┘
                ↑          ↑         ↑
            Wrong!      Wrong!     Wrong!
```

### ✓ CORRECT

```
Services Sheet:
┌──────────────────┬───────┬──────┬──────────┐
│ Name             │ Price │ Dur  │ Category │
├──────────────────┼───────┼──────┼──────────┤
│ Hair Cutting     │ 65    │ 60   │ Hair     │  ← All correct!
└──────────────────┴───────┴──────┴──────────┘
                      ↑      ↑       ↑
                    Right! Right!  Right!
```

---

## Checklist Before Sharing with Developer

```
SERVICES Sheet:
  ☐ Row 1 has headers: Name, Price, Duration, Category, Description, Image URL
  ☐ At least 3-6 services added
  ☐ All prices are numbers (65, not $65)
  ☐ All durations are numbers (60, not 60 min)
  ☐ All categories match: Hair, Skincare, Nails, Wellness, or Makeup
  ☐ All descriptions are 1-3 sentences
  ☐ Image URLs start with https:// (or left empty)

GALLERY Sheet:
  ☐ Row 1 has headers: Title, Image URL, Description
  ☐ At least 3-6 images added
  ☐ Column B (Image URL) is filled for all rows
  ☐ All Image URLs start with https://
  ☐ All Image URLs are complete and work in browser

SETTINGS Sheet:
  ☐ Row 1 has headers: Setting, Value
  ☐ All 8 settings added: Name, Phone, WhatsApp, Email, Address, City, Country, Description
  ☐ Setting names are EXACTLY as specified (capitalization matters)
  ☐ All values are filled in

SHARING:
  ☐ Sheet is PUBLIC (anyone with link can view)
  ☐ Access level is "Viewer" (read-only)
  ☐ Can copy SHEET_ID from URL
  ☐ Can copy share link

THEN:
  ☐ Send to developer: SHEET_ID + Share Link
  ☐ Developer updates website code
  ☐ Test website - data should appear!
```

---

## What Happens When You Submit

```
You: "Here's my SHEET_ID and data"
     ↓
Developer: Updates code in lib/sheets.ts
     ↓
Website: Reads from your Google Sheet
     ↓
Website displays: Your services, gallery, and settings
     ↓
You edit Google Sheet
     ↓
Website automatically updates (within minutes)
```

---

## Need Help?

**Most Common Issue**: Sheet is not public
- Solution: Click Share → "Anyone with the link" → "Viewer" access

**Second Most Common**: Column headers are wrong
- Solution: Make sure they match EXACTLY (including capitalization)

**Third Most Common**: Price/Duration have text
- Solution: Numbers ONLY (65, not "$65" or "65 dollars")

Check these three things - they fix 95% of problems!
