# Google Sheets Configuration Guide - Complete Setup Instructions

## Overview
This guide explains exactly how to set up your Google Sheets so the Salon website can fetch all data dynamically. You'll create ONE Google Sheet with multiple sheet tabs inside it.

---

## STEP 1: Create a Google Sheet

### 1.1 Create the Sheet
1. Go to **Google Sheets** (sheets.google.com)
2. Click **"+ Create"** (New button)
3. Click **"Blank spreadsheet"**
4. Name it: `Salon Services & Gallery` (or your preferred name)
5. You now have a blank Google Sheet

### 1.2 Get the Sheet ID
1. Look at your browser URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
2. Copy the `{SHEET_ID}` part (long string of characters)
3. Save this ID - you'll need it later
4. **Example**: `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t`

---

## STEP 2: Create Sheet Tabs (Sheet Names)

By default, you have "Sheet1". You need to:
1. **Rename Sheet1** → `Services`
2. **Create new sheets** → `Gallery`, `Settings`

### How to rename a sheet:
1. Right-click the sheet tab at the bottom
2. Click **"Rename"**
3. Enter the new name
4. Press Enter

### How to add new sheets:
1. Click the **"+"** button next to the last sheet tab
2. A new sheet appears
3. Rename it using the steps above

**Final result**: You should have exactly 3 sheets:
- `Services`
- `Gallery`
- `Settings`

---

## STEP 3: Configure the SERVICES Sheet

### 3.1 Add Column Headers
In the **Services** sheet, Row 1 should have these exact column names:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| **Name** | **Price** | **Duration** | **Category** | **Description** | **Image URL** |

### 3.2 What Each Column Contains

| Column | Type | Example | Notes |
|--------|------|---------|-------|
| **A: Name** | Text | Hair Cutting & Styling | The service name |
| **B: Price** | Number | 65 | Price in dollars (no $ sign) |
| **C: Duration** | Number | 60 | Duration in minutes (no "min" text) |
| **D: Category** | Text | Hair | Must be one of: Hair, Skincare, Nails, Wellness, Makeup |
| **E: Description** | Text | Professional haircuts tailored to your preferences | Service description (2-3 sentences) |
| **F: Image URL** | Text | https://... | Full image URL (or leave empty) |

### 3.3 Example Services Data

Copy this exact format for each service:

```
Row 1 (Headers):
Name | Price | Duration | Category | Description | Image URL

Row 2:
Hair Cutting & Styling | 65 | 60 | Hair | Professional haircuts and styling services tailored to your preferences | https://images.unsplash.com/photo-1562122176-4b72aa3c7dda?w=400

Row 3:
Hair Coloring | 85 | 90 | Hair | Premium hair coloring with expert color specialists | https://images.unsplash.com/photo-1522337660859-02fbefca6088?w=400

Row 4:
Facial Treatment | 75 | 60 | Skincare | Rejuvenating facial treatments for all skin types | https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400

Row 5:
Manicure & Pedicure | 55 | 45 | Nails | Luxurious nail care services with premium products | https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400

Row 6:
Massage Therapy | 80 | 60 | Wellness | Relaxing massage treatments to ease tension and stress | https://images.unsplash.com/photo-1596178065887-ba9ecb813739?w=400

Row 7:
Makeup Application | 50 | 45 | Makeup | Professional makeup application for events and special occasions | https://images.unsplash.com/photo-1487412947f69aa9b3e37d9dd21a3d4269c79fed?w=400
```

### 3.4 Important Notes for Services Sheet

- **Row 1 MUST contain headers** (exactly as shown above)
- **Data starts from Row 2** onwards
- **Name**: Keep it short and clear (max 50 characters)
- **Price**: Numbers only (65, not "65" or "$65")
- **Duration**: Numbers only (60, not "60 min" or "1 hour")
- **Category**: MUST match exactly one of these:
  - `Hair`
  - `Skincare`
  - `Nails`
  - `Wellness`
  - `Makeup`
- **Description**: 2-3 sentences explaining the service
- **Image URL**: Must be a complete URL starting with `https://`
  - Free sources: Unsplash, Pexels, Pixabay
  - If empty, website shows placeholder

---

## STEP 4: Configure the GALLERY Sheet

### 4.1 Add Column Headers
In the **Gallery** sheet, Row 1 should have:

| A | B | C |
|---|---|---|
| **Title** | **Image URL** | **Description** |

### 4.2 What Each Column Contains

| Column | Type | Example | Notes |
|--------|------|---------|-------|
| **A: Title** | Text | Salon Interior | Name/title of the image |
| **B: Image URL** | Text | https://... | Complete image URL (required) |
| **C: Description** | Text | Beautiful salon interior | Optional short description |

### 4.3 Example Gallery Data

```
Row 1 (Headers):
Title | Image URL | Description

Row 2:
Salon Interior | https://images.unsplash.com/photo-1560708537-f5debb2b4b08?w=800 | Beautiful main salon area

Row 3:
Styling Station | https://images.unsplash.com/photo-1562122176-4b72aa3c7dda?w=800 | Professional hair styling station

Row 4:
Relaxation Area | https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800 | Comfortable waiting area

Row 5:
Treatment Room | https://images.unsplash.com/photo-1596178065887-ba9ecb813739?w=800 | Private treatment room

Row 6:
Hair Styling | https://images.unsplash.com/photo-1522337660859-02fbefca6088?w=800 | Expert hair styling service

Row 7:
Nail Station | https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800 | Professional nail care station
```

### 4.4 Important Notes for Gallery Sheet

- **Row 1 MUST contain headers**
- **Data starts from Row 2**
- **Title**: Short name for the image
- **Image URL**: REQUIRED (must be complete URL with https://)
- **Description**: Optional, but recommended (2-3 words)
- **Minimum images**: At least 3 for good display
- **Maximum recommended**: 12 images

---

## STEP 5: Configure the SETTINGS Sheet

### 5.1 Add Column Headers
In the **Settings** sheet, Row 1 should have:

| A | B |
|---|---|
| **Setting** | **Value** |

### 5.2 What Each Row Contains

| Setting | Example Value | Notes |
|---------|--------------|-------|
| Name | Luxury Salon | Your salon name |
| Phone | +1 (555) 123-4567 | Phone number |
| WhatsApp | +1 (555) 123-4567 | WhatsApp number (usually same as phone) |
| Email | info@luxurysalon.com | Contact email |
| Address | 123 Beauty Lane | Street address |
| City | New York | City name |
| Country | USA | Country name |
| Description | Experience luxury beauty services... | 1-2 sentences about your salon |

### 5.3 Example Settings Data

```
Row 1 (Headers):
Setting | Value

Row 2:
Name | Luxury Salon

Row 3:
Phone | +1 (555) 123-4567

Row 4:
WhatsApp | +1 (555) 123-4567

Row 5:
Email | info@luxurysalon.com

Row 6:
Address | 123 Beauty Lane

Row 7:
City | New York

Row 8:
Country | USA

Row 9:
Description | Experience luxury beauty services at our premium salon. Our expert stylists and therapists are dedicated to making you look and feel your best.
```

### 5.4 Important Notes for Settings Sheet

- **Setting names are case-sensitive**: Use exact names shown above
- **Row format**: Each setting in one row, value in column B
- **Name**: Your salon's name
- **Phone & WhatsApp**: Same number is fine
- **Description**: Appears on home page, keep it 1-2 sentences

---

## STEP 6: Make Your Sheet Public (IMPORTANT!)

Without this step, the website CANNOT access your data.

### 6.1 Share the Sheet Publicly

1. Click the **"Share"** button (top right)
2. Click **"Change to anyone with the link"** (or similar option)
3. Select **"Viewer"** access (read-only is fine)
4. Copy the share link (you'll see a link like: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit?usp=sharing`)
5. Click **"Share"** to confirm

### 6.2 Make Sure It's Set to "Viewer"

- Only "Viewer" access needed (website only reads data)
- Do NOT give "Editor" access to everyone
- Do NOT make it "Private"

---

## STEP 7: Enable API Access (For Production)

For the website to fetch data automatically, you need Google Sheets API:

### Option A: Using CSV Export (Simplest for now)
1. Publish each sheet as CSV
2. Update the code to use CSV URLs
3. No API key needed

### Option B: Using Google Sheets API (Recommended)
1. Go to Google Cloud Console (console.cloud.google.com)
2. Create a new project
3. Enable "Google Sheets API"
4. Create an API key
5. Add environment variables to your website

---

## STEP 8: Update Your Website

Once your sheets are configured, provide the developer with:

1. **SHEET_ID**: The ID from your Google Sheet URL
2. **Sheet Names**: Services, Gallery, Settings (exactly as configured)
3. **Share Link**: The public link to your sheet

The developer will then:
1. Update the code in `lib/sheets.ts`
2. Add environment variables for the API key (if using Option B)
3. Test the connection

---

## Complete Example - Copy This Format

### SERVICES Sheet
```
Name | Price | Duration | Category | Description | Image URL
Hair Cutting & Styling | 65 | 60 | Hair | Professional haircuts and styling services | https://example.com/image1.jpg
Hair Coloring | 85 | 90 | Hair | Premium hair coloring with specialists | https://example.com/image2.jpg
Facial Treatment | 75 | 60 | Skincare | Rejuvenating facial treatments | https://example.com/image3.jpg
Manicure & Pedicure | 55 | 45 | Nails | Luxurious nail care with premium products | https://example.com/image4.jpg
Massage Therapy | 80 | 60 | Wellness | Relaxing massage to ease tension | https://example.com/image5.jpg
Makeup Application | 50 | 45 | Makeup | Professional makeup for events | https://example.com/image6.jpg
```

### GALLERY Sheet
```
Title | Image URL | Description
Salon Interior | https://example.com/gallery1.jpg | Beautiful salon area
Styling Station | https://example.com/gallery2.jpg | Professional station
Relaxation Area | https://example.com/gallery3.jpg | Comfortable waiting
Treatment Room | https://example.com/gallery4.jpg | Private room
Hair Styling | https://example.com/gallery5.jpg | Expert styling
Nail Station | https://example.com/gallery6.jpg | Nail care station
```

### SETTINGS Sheet
```
Setting | Value
Name | Your Salon Name
Phone | +1 (555) 123-4567
WhatsApp | +1 (555) 123-4567
Email | info@yoursalon.com
Address | 123 Your Street
City | Your City
Country | Your Country
Description | Your salon description here
```

---

## Troubleshooting

### Issue: Website shows default data, not Google Sheets data
**Solution**: 
- Check if sheet is public (shared with "Viewer" access)
- Verify sheet names are exactly: Services, Gallery, Settings
- Check column headers match exactly (including capitalization)

### Issue: Services show on website but prices/duration are blank
**Solution**:
- Ensure Price and Duration columns contain numbers only
- No "$" or "min" text
- Check column order: Name, Price, Duration, Category, Description, Image URL

### Issue: Gallery images don't appear
**Solution**:
- Verify Image URLs are complete (start with https://)
- Test URL in browser - image should load
- Try using images from Unsplash, Pexels, or Pixabay

### Issue: Special characters appear as ?, %, or other symbols
**Solution**:
- Make sure Google Sheet encoding is UTF-8
- Try re-entering the text
- Avoid special characters in data

---

## Security Notes

- Google Sheets API key should NEVER be shared publicly
- Only "Viewer" access needed for website
- Data in the sheet is public (don't put private info)
- Passwords, SSNs, etc. should NOT be stored in the sheet

---

## Free Image Sources

Use these for service and gallery images:

- **Unsplash** (unsplash.com) - Free high-quality images
  - Example URL: `https://images.unsplash.com/photo-1522337660859-02fbefca6088?w=400`
- **Pexels** (pexels.com) - Free stock photos
  - Example URL: `https://images.pexels.com/photos/3407617/pexels-photo-3407617.jpeg?w=400`
- **Pixabay** (pixabay.com) - Free images and videos
  - Provides direct URLs ready to use

---

## Next Steps

1. **Create your Google Sheet** (follow Steps 1-6)
2. **Fill in your data** (use examples above)
3. **Make it public** (VERY IMPORTANT)
4. **Share the SHEET_ID** with your developer
5. **Developer updates** the website code to connect
6. **Test** - visit your website, data should appear

---

## Questions?

If your data doesn't appear:
1. Is the sheet PUBLIC? (most common issue)
2. Are headers spelled correctly?
3. Are columns in the right order?
4. Are there no empty rows in the middle of data?

Check these first - they solve 95% of issues!
