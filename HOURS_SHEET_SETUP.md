# Google Sheets Hours Setup Guide

## Step 1: Add the "Hours" Sheet to Your Google Sheet

1. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/1UysFDqjGUPw7JH2Z3zJBvVuVyG9f3OJxr8S4eBBEii4/
2. Click the **"+"** button at the bottom to create a new sheet
3. Name it exactly: **Hours**
4. Press Enter

## Step 2: Set Up the Hours Sheet Structure

In the "Hours" sheet, create these column headers in Row 1:

```
A1: Day
B1: Hours
```

### Column Details:

**Column A - Day:**
- This is the day of the week
- Must be exactly: monday, tuesday, wednesday, thursday, friday, saturday, sunday (lowercase)

**Column B - Hours:**
- This is the opening hours for that day
- Format: "HH:MM AM/PM - HH:MM AM/PM"
- Examples: "10:00 AM - 8:00 PM", "9:00 AM - 6:00 PM", "Closed"

## Step 3: Add Your Hours Data

Click on cell **A2** and start entering data:

### Minimum Setup (Required):
You MUST have all 7 days. Enter rows like this:

| Day | Hours |
|-----|-------|
| monday | 10:00 AM - 8:00 PM |
| tuesday | 10:00 AM - 8:00 PM |
| wednesday | 10:00 AM - 8:00 PM |
| thursday | 10:00 AM - 8:00 PM |
| friday | 10:00 AM - 9:00 PM |
| saturday | 9:00 AM - 6:00 PM |
| sunday | Closed |

### How to Enter Data:

1. Click cell A2, type "monday", press Tab
2. In B2, type "10:00 AM - 8:00 PM", press Enter
3. Click cell A3, type "tuesday", press Tab
4. In B3, type "10:00 AM - 8:00 PM", press Enter
5. Continue for all 7 days

### Accepted Formats for Hours:

✅ **Correct Formats:**
- "10:00 AM - 8:00 PM"
- "9:00 AM - 6:00 PM"
- "Closed"
- "By Appointment"
- "10:00 AM - 5:00 PM (Extended: 9:00 PM on Friday)"

❌ **Wrong Formats (Don't use these):**
- "10 AM - 8 PM" (needs :00)
- "10:00am - 8:00pm" (needs spaces and proper case)
- "10-8" (too short)
- "Open" (use full hours or "By Appointment")

## Step 4: Complete Your Settings Sheet

Your Settings sheet should now have:

| Setting | Value |
|---------|-------|
| Name | Your Salon Name |
| Phone | +1 (555) 123-4567 |
| WhatsApp | +1 (555) 123-4567 |
| Email | info@yoursalon.com |
| Address | 123 Beauty Lane |
| City | New York |
| Country | USA |
| Description | Your salon description |

**Important:** The Hours are now managed in the Hours sheet, not the Settings sheet.

## Step 5: Verify Everything is Set Up

Before testing, make sure:

✅ Sheet has all 4 tabs:
- Services
- Gallery
- Settings
- Hours ← NEW

✅ Hours sheet has:
- Header row: Day | Hours
- Exactly 7 rows of data (monday through sunday)
- All days use lowercase (monday, not Monday)

✅ Settings sheet has:
- All 8 settings filled in

✅ Sheet is still PUBLIC
- Share → "Anyone with link" → "Viewer"

## Step 6: How the Website Uses Hours

The website will:
1. Fetch data from the Hours sheet every 1 hour
2. Display hours in the Footer
3. Display hours in the Contact page
4. Display hours in the Floating WhatsApp button

All these places will automatically update when you change the Hours sheet.

## Step 7: Examples of Different Hour Configurations

### Standard Business Hours:
```
monday: 10:00 AM - 8:00 PM
tuesday: 10:00 AM - 8:00 PM
wednesday: 10:00 AM - 8:00 PM
thursday: 10:00 AM - 8:00 PM
friday: 10:00 AM - 9:00 PM
saturday: 9:00 AM - 6:00 PM
sunday: Closed
```

### 24/7 Salon:
```
monday: Open 24/7
tuesday: Open 24/7
wednesday: Open 24/7
thursday: Open 24/7
friday: Open 24/7
saturday: Open 24/7
sunday: Open 24/7
```

### By Appointment Only:
```
monday: By Appointment
tuesday: By Appointment
wednesday: By Appointment
thursday: By Appointment
friday: By Appointment
saturday: By Appointment
sunday: Closed
```

### Mixed Hours:
```
monday: 12:00 PM - 8:00 PM
tuesday: 10:00 AM - 6:00 PM
wednesday: Closed
thursday: 10:00 AM - 8:00 PM
friday: 10:00 AM - 9:00 PM
saturday: 9:00 AM - 5:00 PM
sunday: By Appointment
```

## Important Rules

1. **Always use lowercase for day names:** monday, tuesday, wednesday, etc.
2. **Always use full format for times:** "10:00 AM - 8:00 PM" (not "10-8")
3. **Use proper AM/PM:** Not "am/pm" or "AM/pm"
4. **Never leave a day blank:** Even if closed, write "Closed"
5. **Never use abbreviations:** Not "Mon", "Tue", etc.

## Common Mistakes & Fixes

| Mistake | Correct |
|---------|---------|
| Monday (capital M) | monday |
| 10 AM - 8 PM | 10:00 AM - 8:00 PM |
| 10am-8pm | 10:00 AM - 8:00 PM |
| Open | 10:00 AM - 8:00 PM (or specific hours) |
| Mon-Fri: 10-8, Sat: 9-5 | Use separate rows for each day |

## Testing

1. Save your Hours sheet
2. Wait 1-5 minutes for the website to reload
3. Go to your salon website
4. Check the Footer → Hours section
5. Check the Contact page → Opening Hours
6. Verify all 7 days appear correctly

## If Hours Don't Show

1. Check the Hours sheet exists (exact name: "Hours")
2. Check column headers are exactly: "Day" and "Hours" (with capital first letters)
3. Check all days use lowercase (monday, not Monday)
4. Check the sheet is PUBLIC (Share → Anyone with link → Viewer)
5. Wait 10 minutes and reload the page (hard refresh: Ctrl+Shift+R)
6. Check browser console for errors (F12)

## Need to Update Hours?

1. Go to your Hours sheet in Google Sheets
2. Edit any cell (e.g., change "10:00 AM - 8:00 PM" to "9:00 AM - 7:00 PM")
3. The website updates automatically within 1 hour
4. Or hard refresh the page to see changes immediately

---

**That's it!** Your Hours sheet is now connected to your website. Any changes you make will automatically appear everywhere.
