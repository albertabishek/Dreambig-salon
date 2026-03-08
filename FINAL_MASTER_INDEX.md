# Master Index - Complete Dynamic Setup

## 🎯 START HERE

Your website is now **100% Dynamic** powered by Google Sheets!

### What You Need to Do (Right Now):

1. **Create the Hours Sheet** - Follow `QUICK_HOURS_SETUP.txt` (5 minutes)
2. **Update Settings Sheet** - Make sure all 8 fields are filled
3. **Test Everything** - Use the checklist below
4. **You're Done!** - Your website is now fully dynamic

---

## 📚 Documentation Files

### Quick Start (5-10 minutes)
- **QUICK_HOURS_SETUP.txt** ← Start here for hours setup
- **HOURS_SHEET_SETUP.md** ← Detailed hours guide

### Complete Setup (30 minutes)
- **COMPLETE_SETUP_GUIDE.md** ← Everything explained
- **DATA_FLOW_DIAGRAM.txt** ← How data flows through system

### Reference
- **GOOGLE_SHEETS_SETUP.md** ← Original services/gallery guide
- **GOOGLE_SHEETS_INTEGRATION_COMPLETE.md** ← Integration details
- **TROUBLESHOOTING_SHEETS.md** ← Problem solving

---

## ✅ Setup Checklist

### Google Sheets Setup
- [ ] Sheet has 4 tabs: Services, Gallery, Settings, Hours
- [ ] Services sheet: Headers are correct (Name | Price | Duration | Category | Description | Image URL)
- [ ] Gallery sheet: Headers are correct (Title | Image URL | Description)
- [ ] Settings sheet: All 8 fields filled (Name, Phone, WhatsApp, Email, Address, City, Country, Description)
- [ ] Hours sheet: Headers are correct (Day | Hours)
- [ ] Hours sheet: All 7 days present (monday-sunday)
- [ ] Hours sheet: Day names are lowercase
- [ ] Hours sheet: Times in format "HH:MM AM/PM - HH:MM AM/PM"
- [ ] Sheet is PUBLIC (Share → Anyone with link → Viewer)

### Website Testing
- [ ] Reload website (Ctrl+Shift+R)
- [ ] Navbar: Shows your salon name
- [ ] Navbar: Book Now button opens WhatsApp with your number
- [ ] Footer: Shows salon name
- [ ] Footer: Shows phone, email, address
- [ ] Footer: Shows all 7 days of hours
- [ ] Contact page: Shows all info correctly
- [ ] Contact page: Opens hours in correct format
- [ ] Services page: Shows your services
- [ ] Gallery page: Shows your images
- [ ] Floating WhatsApp button: Uses your number

---

## 📋 Your Google Sheet Structure

### Services Sheet (Already Set Up)
```
Name | Price | Duration | Category | Description | Image URL
Hair Cutting | 65 | 60 | Hair | Professional haircuts | https://...
```

### Gallery Sheet (Already Set Up)
```
Title | Image URL | Description
Salon Interior | https://... | Beautiful space
```

### Settings Sheet (Already Set Up)
```
Setting | Value
Name | Your Salon Name
Phone | +1 (555) 123-4567
WhatsApp | +1 (555) 123-4567
Email | info@yoursalon.com
Address | 123 Beauty Lane
City | New York
Country | USA
Description | Your salon description
```

### Hours Sheet (NEW - Create This!)
```
Day | Hours
monday | 10:00 AM - 8:00 PM
tuesday | 10:00 AM - 8:00 PM
wednesday | 10:00 AM - 8:00 PM
thursday | 10:00 AM - 8:00 PM
friday | 10:00 AM - 9:00 PM
saturday | 9:00 AM - 6:00 PM
sunday | Closed
```

---

## 🔄 Data Flow

```
Google Sheets (4 sheets)
    ↓ Every 1 hour OR on page reload
Website Code (lib/sheets.ts)
    ↓ Parses & formats data
All Pages Updated
    ↓ Displays your data
Users see your salon info!
```

---

## 📍 Where Each Setting Appears

| Setting | Used In |
|---------|---------|
| **Name** | Navbar, Footer, Page title |
| **Phone** | Footer, Contact page, Call button |
| **WhatsApp** | Navbar, Contact page, Floating button |
| **Email** | Footer, Contact page |
| **Address** | Footer, Contact page |
| **City** | Footer, Contact page |
| **Country** | Footer, Contact page |
| **Description** | Footer, Contact page |
| **Hours** (NEW!) | Footer, Contact page |
| **Services** | Services page, Home page |
| **Gallery** | Gallery page, Home page |

---

## 🚀 Making Updates

### Update Salon Name
1. Go to Settings sheet
2. Find row with "Name"
3. Update the Value column
4. Website updates within 1 hour

### Update Phone/Email
1. Go to Settings sheet
2. Find "Phone" or "Email" row
3. Update the Value column
4. Website updates within 1 hour

### Update Opening Hours
1. Go to Hours sheet
2. Edit any hour cell
3. Update the Value column
4. Website updates within 1 hour

### Update Services
1. Go to Services sheet
2. Edit or add rows
3. Website updates within 1 hour

### Update Gallery
1. Go to Gallery sheet
2. Edit or add rows with image URLs
3. Website updates within 1 hour

---

## ⚠️ Important Rules

### Hours Sheet
✅ Do this:
- Use lowercase day names: `monday`, `tuesday`, etc.
- Use full format: `10:00 AM - 8:00 PM`
- Include all 7 days
- Use "Closed" for closed days

❌ Don't do this:
- Use capital letters: `Monday`
- Use 24-hour format: `10:00 - 20:00`
- Skip days
- Leave fields blank

### Settings Sheet
✅ Do this:
- Use exact setting names (case-sensitive)
- Fill in all 8 fields
- Use full phone numbers

❌ Don't do this:
- Typo setting names
- Leave fields empty
- Use abbreviations

### All Sheets
✅ Do this:
- Keep the sheet PUBLIC
- Use exact column headers
- Save the sheet regularly

❌ Don't do this:
- Change column names
- Delete sheets
- Make sheet private

---

## 🔧 What Changed in Code

Only 3 files were modified:

1. **lib/sheets.ts**
   - Added Hours sheet fetching
   - Added parseHoursData() function
   - Hours merged into settings

2. **components/layout/navbar.tsx**
   - Now receives settings prop
   - Displays salon name
   - Uses actual WhatsApp number

3. **app/layout.tsx**
   - Passes settings to Navbar

No other files changed! Everything is backward compatible.

---

## 🐛 Troubleshooting

### Hours not showing?
1. Check Hours sheet exists
2. Check headers: "Day" and "Hours"
3. Check all days are lowercase
4. Hard refresh: Ctrl+Shift+R

### Salon name not updating?
1. Check Settings sheet
2. Check "Name" field has value
3. Check spelling: must be "Name" (capital N)
4. Hard refresh: Ctrl+Shift+R

### Phone/WhatsApp not working?
1. Check Settings sheet values
2. Check phone format is correct
3. Hard refresh: Ctrl+Shift+R

### Services/Gallery not showing?
1. Check data in correct sheets
2. Check image URLs start with https://
3. Check sheet is PUBLIC

---

## 📞 Quick Reference

### Sheets to Update
- Services Sheet - Add/edit services
- Gallery Sheet - Add/edit images
- Settings Sheet - Update salon info (Name, Phone, WhatsApp, Email, Address, City, Country, Description)
- Hours Sheet - Update opening hours (NEW!)

### Website Pages That Update
- Every page - Navbar with your name
- Every page - Footer with your info
- Contact page - All settings + hours
- Services page - Your services
- Gallery page - Your images

### Cache Behavior
- First load: Downloads from Google Sheets
- Next 1 hour: Uses cached version
- After 1 hour: Refreshes automatically
- Force refresh: Ctrl+Shift+R

---

## 📖 Which File to Read?

**If you have 5 minutes:**
→ Read: `QUICK_HOURS_SETUP.txt`

**If you have 15 minutes:**
→ Read: `HOURS_SHEET_SETUP.md` + `QUICK_HOURS_SETUP.txt`

**If you have 30 minutes:**
→ Read: `COMPLETE_SETUP_GUIDE.md` + `DATA_FLOW_DIAGRAM.txt`

**If you need to troubleshoot:**
→ Read: `TROUBLESHOOTING_SHEETS.md`

**If you want to understand everything:**
→ Read: All files in order

---

## ✨ You're All Set!

Your website is now:
- ✅ 100% Dynamic (powered by Google Sheets)
- ✅ Fully Scalable (change data without touching code)
- ✅ Automatically Updated (within 1 hour)
- ✅ Easy to Maintain (simple spreadsheet editing)
- ✅ Professional (displays your real salon info)

### Next Steps:
1. Create Hours sheet (5 minutes)
2. Fill in all settings (2 minutes)
3. Add your services (10 minutes)
4. Add your gallery images (10 minutes)
5. Test everything (5 minutes)
6. Deploy/publish your website!

---

**Questions?** Check `TROUBLESHOOTING_SHEETS.md` or re-read the relevant guide above.

**Ready to go live?** Your website is now fully dynamic and ready for production! 🎉
