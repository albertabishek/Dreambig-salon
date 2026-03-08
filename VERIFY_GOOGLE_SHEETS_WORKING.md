# Verify Google Sheets Integration is Working

## Step-by-Step Verification

### Step 1: Check Sheet is Public
1. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/1UysFDqjGUPw7JH2Z3zJBvVuVyG9f3OJxr8S4eBBEii4/
2. Click **Share** (top right)
3. Look for "Anyone with the link can view"
4. If not shown, change to: Share → Change → Anyone with link → Viewer

✅ **Sheet is Public**

### Step 2: Verify Sheet Tabs Exist
1. Look at bottom of spreadsheet
2. You should see 3 tabs:
   - `Services`
   - `Gallery`
   - `Settings`
3. All 3 tabs should exist

✅ **All 3 Tabs Exist**

### Step 3: Check Services Sheet Structure
1. Click **Services** tab
2. Row 1 should have headers:
   ```
   Name | Price | Duration | Category | Description | Image URL
   ```
3. Row 2 onwards: Service data
4. No empty rows between header and data

✅ **Services Sheet Correct**

### Step 4: Check Gallery Sheet Structure
1. Click **Gallery** tab
2. Row 1 should have headers:
   ```
   Title | Image URL | Description
   ```
3. Row 2 onwards: Gallery data
4. Column B (Image URL) should have https:// URLs
5. No empty rows with missing Image URLs

✅ **Gallery Sheet Correct**

### Step 5: Check Settings Sheet Structure
1. Click **Settings** tab
2. Row 1 should have headers:
   ```
   Setting | Value
   ```
3. Row 2-9 should have:
   - Name
   - Phone
   - WhatsApp
   - Email
   - Address
   - City
   - Country
   - Description
4. Column B should have corresponding values

✅ **Settings Sheet Correct**

### Step 6: Verify Data Formats

**Services Sheet - Price Column (B):**
```
✅ Correct: 65
❌ Wrong: $65
❌ Wrong: 65 dollars
```

**Services Sheet - Duration Column (C):**
```
✅ Correct: 60
❌ Wrong: 60 min
❌ Wrong: 1 hour
```

**Gallery Sheet - Image URL Column (B):**
```
✅ Correct: https://example.com/image.jpg
❌ Wrong: http://example.com/image.jpg
❌ Wrong: example.com/image.jpg
❌ Wrong: image.jpg
```

✅ **Data Formats Correct**

### Step 7: Reload Website

1. Go to your salon website
2. Hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
3. Wait 3-5 seconds for data to load

### Step 8: Verify Data Shows

**Check Home Page:**
- [ ] Services preview shows YOUR services (not defaults)
- [ ] Service names correct
- [ ] Prices correct
- [ ] Images showing

**Check Services Page:**
- [ ] Count shows your number of services
- [ ] All services display
- [ ] Price/Duration correct
- [ ] Categories filter works
- [ ] Search works
- [ ] Images display

**Check Gallery Page:**
- [ ] Gallery shows YOUR images (not defaults)
- [ ] Images count correct
- [ ] All images load
- [ ] Titles visible
- [ ] Descriptions work

**Check Contact Page:**
- [ ] Salon name YOUR name
- [ ] Phone YOUR phone
- [ ] WhatsApp YOUR number
- [ ] Email YOUR email
- [ ] Address YOUR address
- [ ] City YOUR city

### Step 9: Check Browser Console for Errors

1. Open website
2. Press **F12**
3. Click **Console** tab
4. Look for RED ERROR messages
5. If no red errors = ✅ **Working!**

### Step 10: Test a Change

1. Go to Google Sheet Services tab
2. Change a price (e.g., 65 → 75)
3. **Save** (Ctrl+S)
4. Reload website after 1 hour OR redeploy
5. Check if price changed

✅ **Integration Fully Working!**

---

## Troubleshooting Quick Fixes

### If Services Don't Show:
1. Verify column header is `Name` (not "name" or "Service")
2. Verify Price column (B) has NUMBERS
3. Verify Duration column (C) has NUMBERS
4. Check for empty rows
5. Verify Sheet is Public

### If Gallery Images Don't Show:
1. Verify Image URL column starts with `https://`
2. Test image URLs in browser (paste URL in address bar)
3. Verify Sheet is Public
4. Check column header is `Image URL` (not "url")

### If Settings Don't Update:
1. Verify setting names are EXACT:
   - Name
   - Phone
   - WhatsApp (capital W and A)
   - Email
   - Address
   - City
   - Country
   - Description
2. Verify Value column is filled
3. Check Sheet is Public

---

## Expected Behavior

### First Load
- Website fetches from Google Sheet
- Takes 2-5 seconds
- Shows YOUR data (not defaults)

### Subsequent Loads
- Uses cached data (much faster)
- Cache updates every 1 hour
- Or when you redeploy

### After Editing Sheet
- Changes appear within 1 hour (automatic)
- Or immediately if you redeploy Vercel

---

## Success Indicators

✅ Sheet is Public
✅ 3 tabs exist with correct names
✅ Headers are exact
✅ Data formats correct
✅ Website shows YOUR data (not defaults)
✅ Home page shows YOUR services
✅ Services page shows YOUR services
✅ Gallery shows YOUR images
✅ Contact shows YOUR info
✅ No red errors in console
✅ Changes appear within 1 hour

If all ✅ = **Your Google Sheets integration is working perfectly!**

---

## If Something's Wrong

1. Check this entire document
2. Go through troubleshooting steps
3. Check `TROUBLESHOOTING_SHEETS.md` file
4. Verify all 10 steps above

Most issues are fixed by:
- Making sheet public
- Checking exact header names
- Ensuring price/duration are numbers
- Checking image URLs are https://
