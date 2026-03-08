# Verification Checklist - Test Your Setup

## Before You Test

Make sure:
1. Your Google Sheet has 4 tabs: Services, Gallery, Settings, Hours
2. All data is entered correctly
3. Sheet is PUBLIC (Share → Anyone with link → Viewer)
4. You've reloaded the website (Ctrl+Shift+R)

---

## Test Checklist

### Settings Sheet Verification

After adding data to Settings sheet, check these locations:

#### Navbar (Top of every page)
- [ ] Salon name displays (instead of "Luxury Salon")
- [ ] Click "Book Now" button
- [ ] Should open WhatsApp with your number
- [ ] WhatsApp format should work: https://wa.me/919234567890

#### Footer (Bottom of every page)
- [ ] Salon name shows
- [ ] Phone number displays as clickable link
- [ ] Email displays as clickable link
- [ ] Address shows with City, Country
- [ ] Hours section shows all 7 days
- [ ] All information is from YOUR Google Sheet

#### Contact Page
- [ ] Phone shows with icon
- [ ] Email shows with icon
- [ ] Address shows with icon
- [ ] Hours section displays all 7 days
- [ ] Map displays with your location (if Latitude/Longitude correct)
- [ ] "Chat on WhatsApp" button works
- [ ] "Call Us" button works

---

### Hours Sheet Verification

#### Footer (Every page)
- [ ] All 7 days visible:
  - [ ] monday
  - [ ] tuesday
  - [ ] wednesday
  - [ ] thursday
  - [ ] friday
  - [ ] saturday
  - [ ] sunday
- [ ] Hours format is correct: "10:00 AM - 8:00 PM"
- [ ] "Closed" days show correctly

#### Contact Page
- [ ] Same hours display as Footer
- [ ] All 7 days present
- [ ] Formatting matches

---

### Services Sheet Verification

#### Services Page (Navigate to /services)
- [ ] All services display
- [ ] Service names show correctly
- [ ] Prices show (as numbers: 65, not $65)
- [ ] Durations show (as numbers: 60, not 60 min)
- [ ] Categories display
- [ ] Descriptions show
- [ ] Images display if Image URLs provided
- [ ] Price and Duration visible on each card

#### Home Page (Services Preview Section)
- [ ] First 3-4 services appear
- [ ] Same formatting as Services page
- [ ] Price and Duration visible
- [ ] Link to Services page works ("View All Services")

---

### Gallery Sheet Verification

#### Gallery Page (Navigate to /gallery)
- [ ] All images display
- [ ] Image titles show
- [ ] Images are clickable
- [ ] Description appears on hover (if provided)
- [ ] Layout is responsive (works on mobile)

#### Home Page (Gallery Preview Section)
- [ ] First 3-4 images appear
- [ ] Images are visible
- [ ] Link to Gallery page works ("View Full Gallery")

---

## Debugging If Something Doesn't Work

### Phone Number Not Showing

**Check Format:**
```
✓ Correct: +91-9234567890
✓ Correct: +91 92345 67890
✗ Wrong: 9234567890
✗ Wrong: 91-9234567890 (missing +)
```

**Fix:**
1. Go to Settings sheet
2. Edit Phone field
3. Use format: +CountryCode-Number
4. Save and reload website (Ctrl+Shift+R)

### WhatsApp Button Not Working

**Check:**
1. WhatsApp field has correct format: +91-9234567890
2. Format has country code (+) at start
3. Try clicking WhatsApp button in Contact page
4. Should open WhatsApp with your number

**Debug:**
1. Check browser console (F12)
2. Look for error messages
3. Try hard refresh (Ctrl+Shift+R)

### Hours Not Showing

**Check:**
1. All 7 days present in Hours sheet
2. Day names are **lowercase**:
   - ✓ monday, tuesday, wednesday...
   - ✗ Monday, MONDAY, Mon
3. Hours format: "10:00 AM - 8:00 PM"
4. No typos in day names

**Fix:**
1. Go to Hours sheet
2. Verify all 7 days present
3. Check day names are lowercase
4. Reload website

### Services Not Showing

**Check:**
1. Price is number only: 65 (not $65)
2. Duration is number only: 60 (not 60 min)
3. At least 1 service added
4. Name and Description not empty

**Fix:**
1. Go to Services sheet
2. Check all required fields filled
3. Remove $ from prices
4. Remove "min" from duration
5. Reload website

### Gallery Images Not Showing

**Check:**
1. Image URLs start with https://
2. Image URLs are complete (not shortened)
3. Images are publicly accessible
4. At least 1 image added

**Fix:**
1. Go to Gallery sheet
2. Check Image URL format: https://example.com/image.jpg
3. Verify images are publicly accessible
4. Reload website

### Map Not Showing on Contact Page

**Check:**
1. Latitude and Longitude are numbers
2. Format: 28.6139 (not "28.6139N")
3. Negative sign for west: -74.006
4. Both values present

**Get Correct Values:**
1. Go to Google Maps: https://maps.google.com
2. Search for your address
3. Right-click location
4. Copy coordinates: 28.6139, 77.2090
5. Use first number as Latitude: 28.6139
6. Use second number as Longitude: 77.2090

---

## Testing Phone Number Formats

Your phone number format affects WhatsApp button and calling functionality.

### Test WhatsApp Link

After adding phone number, test by:
1. Going to Contact page
2. Click "Chat on WhatsApp" button
3. Should open WhatsApp with your number
4. You can type a message and send

If it doesn't work:
- Check phone format has + and country code
- Hard refresh browser (Ctrl+Shift+R)
- Try different phone format

---

## Testing Different Browsers

Make sure your setup works on:
- [ ] Chrome/Edge (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (if on Mac)
- [ ] Chrome (Mobile - most common)
- [ ] Safari (Mobile - if using iPhone)

## Performance Check

- [ ] Website loads within 5 seconds
- [ ] Images load properly
- [ ] No error messages in console
- [ ] All buttons are clickable
- [ ] Text is readable on mobile

---

## Final Verification Checklist

### All Pages Should Display Your Data

- [ ] **Home Page**
  - Shows your salon name
  - Shows first 3-4 services with prices
  - Shows first 3-4 gallery images
  - Shows your address in location section

- [ ] **Services Page**
  - Shows all services
  - Prices are correct
  - Durations visible
  - Categories working

- [ ] **Gallery Page**
  - Shows all images
  - Images are clear and visible
  - Titles and descriptions present

- [ ] **Contact Page**
  - Shows phone number
  - Shows email address
  - Shows complete address
  - Shows all 7 opening hours
  - Shows map at your location

- [ ] **Navbar (Every Page)**
  - Shows your salon name
  - "Book Now" button works
  - Opens WhatsApp

- [ ] **Footer (Every Page)**
  - Shows your salon name
  - Shows phone (clickable)
  - Shows email (clickable)
  - Shows complete address
  - Shows all 7 opening hours

---

## If Everything Is Working

Congratulations! Your website is fully dynamic. You can now:
1. Update services anytime - website updates within 1 hour
2. Add/remove gallery images - website updates within 1 hour
3. Change salon info - updates everywhere within 1 hour
4. Change hours - updates everywhere within 1 hour

Just edit the Google Sheet and the website automatically updates!

---

## If Something Still Doesn't Work

Try these steps:

1. **Hard Refresh Browser**
   - Windows: Ctrl+Shift+R
   - Mac: Cmd+Shift+R
   - This clears cache

2. **Check Sheet is Public**
   - Go to Google Sheet
   - Click "Share" button
   - Check "Anyone with link" can "View"

3. **Verify Data Format**
   - Check numbers don't have $ or commas
   - Check phone has + and country code
   - Check day names are lowercase

4. **Wait 1 Hour**
   - Website caches data for 1 hour
   - Changes appear automatically after 1 hour
   - Or deploy website again for instant update

5. **Check Browser Console**
   - Press F12
   - Click "Console" tab
   - Look for red error messages
   - Screenshot and provide to support

---

## Contact Support

If you've checked everything and it still doesn't work:
1. Take screenshot of the problem
2. Check what appears in browser console (F12)
3. Verify all data formats above
4. Contact support with details
