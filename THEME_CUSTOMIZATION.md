# Quick Theme Customization Guide

A fast, practical guide to changing the website's color theme.

---

## The One File You Need to Edit

**File**: `app/globals.css`

All colors are defined in this single file. No other files need to be changed.

---

## Current Theme

**Primary Color (Navy)**
```
Light Mode: oklch(0.08 0.04 280)
Dark Mode: oklch(0.65 0.18 50)
```

**Accent Color (Gold)**
```
Light Mode: oklch(0.65 0.18 50)
Dark Mode: oklch(0.65 0.18 50)
```

---

## How to Change the Primary Color

### Example 1: Change from Navy to Purple

Find this in `app/globals.css`:

```css
:root {
  --primary: oklch(0.08 0.04 280);      /* ← This line */
  --button-primary: oklch(0.08 0.04 280);
  --button-primary-hover: oklch(0.12 0.04 280);
}

.dark {
  --primary: oklch(0.65 0.18 50);       /* ← And this line */
  --button-primary: oklch(0.65 0.18 50);
  --button-primary-hover: oklch(0.6 0.16 50);
}
```

Change `280` (hue) to `270` (purple):

```css
:root {
  --primary: oklch(0.08 0.04 270);      /* Navy → Purple */
  --button-primary: oklch(0.08 0.04 270);
  --button-primary-hover: oklch(0.12 0.04 270);
}

.dark {
  --primary: oklch(0.65 0.18 270);      /* Update dark mode too */
  --button-primary: oklch(0.65 0.18 270);
  --button-primary-hover: oklch(0.6 0.16 270);
}
```

**Done!** The entire navbar, buttons, and primary elements now use purple.

---

## How to Change the Accent Color

The accent color is the gold highlighting used for badges, links, and special elements.

Find this in `app/globals.css`:

```css
:root {
  --accent: oklch(0.65 0.18 50);        /* ← Change the hue (50) */
}

.dark {
  --accent: oklch(0.65 0.18 50);        /* Update dark mode */
}
```

### Examples

**Change to Red:**
```css
--accent: oklch(0.65 0.18 0);    /* Hue: 0 = Red */
```

**Change to Green:**
```css
--accent: oklch(0.65 0.18 130);  /* Hue: 130 = Green */
```

**Change to Blue:**
```css
--accent: oklch(0.65 0.18 250);  /* Hue: 250 = Blue */
```

---

## Understanding OKLch Values

Format: `oklch(L C h)`

```
L = Lightness (0-1)
  0 = Black
  0.5 = Medium
  1 = White

C = Chroma (0-0.4)
  0 = Gray (no color)
  0.18 = Vivid

h = Hue (0-360)
  0 = Red
  30 = Orange
  50 = Yellow/Gold
  130 = Green
  250 = Blue
  280 = Purple
  320 = Pink
```

---

## Common Color Changes

### Make Primary Lighter
Change first number (L value):
```css
--primary: oklch(0.12 0.04 280);  /* From 0.08 → 0.12 (lighter) */
```

### Make Accent Less Saturated
Change second number (C value):
```css
--accent: oklch(0.65 0.10 50);    /* From 0.18 → 0.10 (less vivid) */
```

### Make Accent Darker
Change first number (L value):
```css
--accent: oklch(0.55 0.18 50);    /* From 0.65 → 0.55 (darker) */
```

---

## Quick Color Palette Suggestions

### Professional (Current)
- Primary: Navy (280°)
- Accent: Gold (50°)

### Modern
- Primary: Blue (250°)
- Accent: Cyan (200°)

### Warm
- Primary: Brown (30°)
- Accent: Orange (35°)

### Cool
- Primary: Teal (200°)
- Accent: Purple (270°)

### High Contrast
- Primary: Black (oklch(0.08 0.04 any_hue))
- Accent: Bright Yellow (oklch(0.85 0.18 60))

---

## Color Tokens Reference

### Most Important Tokens to Edit

1. **Primary (Navbar, Buttons)**
   - `--primary` (light mode)
   - `--primary` (dark mode)
   - `--button-primary`
   - `--button-primary-hover`

2. **Accent (Highlights, Links)**
   - `--accent` (both modes)
   - `--button-accent`
   - `--button-accent-hover`

3. **Secondary (Alternative elements)**
   - `--secondary` (light mode)
   - `--secondary` (dark mode)

### Less Often Changed

- `--background`: Page background color
- `--foreground`: Text color
- `--border`: Border color
- `--destructive`: Error/delete colors
- `--success`: Success messages

---

## Testing Your Changes

After editing `app/globals.css`:

1. **Save the file**
2. **View in preview** (HMR will update automatically)
3. **Check light mode**: Navbar, buttons, badges
4. **Check dark mode**: Switch theme and verify colors
5. **Check all pages**: Home, Services, Gallery, Contact

---

## Structure of globals.css

```css
:root {
  /* Light mode defaults */
  --primary: oklch(...);
  --accent: oklch(...);
  /* ... more tokens ... */
}

.dark {
  /* Dark mode overrides */
  --primary: oklch(...);
  --accent: oklch(...);
  /* ... more tokens ... */
}

@theme inline {
  /* CSS variable → Tailwind mappings */
  --color-primary: var(--primary);
  --color-accent: var(--accent);
  /* ... mappings for all tokens ... */
}
```

When you edit values in `:root` or `.dark`, they automatically apply everywhere because of the `@theme inline` section.

---

## Example Workflow

### Change Theme from Navy/Gold to Blue/Orange

1. Open `app/globals.css`
2. Find `:root` section
3. Change:
   ```css
   --primary: oklch(0.08 0.04 250);      /* 280 → 250 (Blue) */
   --button-primary: oklch(0.08 0.04 250);
   --button-primary-hover: oklch(0.12 0.04 250);
   --accent: oklch(0.65 0.18 35);        /* 50 → 35 (Orange) */
   ```

4. Find `.dark` section
5. Change the same values:
   ```css
   --primary: oklch(0.65 0.18 250);      /* Blue for dark mode */
   --button-primary: oklch(0.65 0.18 250);
   --button-primary-hover: oklch(0.6 0.16 250);
   --accent: oklch(0.65 0.18 35);        /* Orange for dark mode */
   ```

6. Save file
7. Preview updates instantly!

---

## Troubleshooting

### Colors Don't Update
- Make sure you edited `app/globals.css` (not another file)
- Save the file
- Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)

### Contrast Issues
- Check `COLOR_PALETTE.md` for accessibility guidelines
- Ensure L value (lightness) differs by at least 0.3 between text and background
- Test in both light and dark modes

### Button Text Not Visible
- This was fixed! All buttons use proper contrast
- If still an issue, check `components/ui/button.tsx` to ensure it's using new color tokens

---

## When to Edit What

| Situation | What to Edit |
|-----------|-------------|
| Change primary brand color | `--primary` in `:root` and `.dark` |
| Change highlight/link color | `--accent` in both sections |
| Change button colors | `--button-*` tokens |
| Change text color | `--foreground` in both sections |
| Change background color | `--background` in both sections |
| Change border color | `--border` in both sections |
| Change everything | All tokens in both `:root` and `.dark` |

---

## Advanced: Creating a Brand Theme

To create a custom brand theme in one go:

```css
:root {
  /* Your Brand Colors */
  --primary: oklch(0.08 0.04 YOUR_PRIMARY_HUE);
  --primary-foreground: oklch(0.98 0 0);
  --secondary: oklch(0.6 0.11 YOUR_SECONDARY_HUE);
  --secondary-foreground: oklch(0.15 0 0);
  --accent: oklch(0.65 0.18 YOUR_ACCENT_HUE);
  --accent-foreground: oklch(0.15 0 0);
  
  /* Button Colors */
  --button-primary: oklch(0.08 0.04 YOUR_PRIMARY_HUE);
  --button-primary-hover: oklch(0.12 0.04 YOUR_PRIMARY_HUE);
  --button-accent: oklch(0.65 0.18 YOUR_ACCENT_HUE);
  --button-accent-hover: oklch(0.6 0.16 YOUR_ACCENT_HUE);
}

.dark {
  --primary: oklch(0.65 0.18 YOUR_PRIMARY_HUE);
  --primary-foreground: oklch(0.08 0.04 YOUR_PRIMARY_HUE);
  --secondary: oklch(0.5 0.1 YOUR_SECONDARY_HUE);
  --secondary-foreground: oklch(0.98 0 0);
  --accent: oklch(0.65 0.18 YOUR_ACCENT_HUE);
  --accent-foreground: oklch(0.08 0.04 YOUR_PRIMARY_HUE);
  
  --button-primary: oklch(0.65 0.18 YOUR_PRIMARY_HUE);
  --button-primary-hover: oklch(0.6 0.16 YOUR_PRIMARY_HUE);
  --button-accent: oklch(0.65 0.18 YOUR_ACCENT_HUE);
  --button-accent-hover: oklch(0.6 0.16 YOUR_ACCENT_HUE);
}
```

Replace `YOUR_PRIMARY_HUE`, `YOUR_SECONDARY_HUE`, and `YOUR_ACCENT_HUE` with your brand colors' hue values.

---

## Resources

- **Full Documentation**: See `COLOR_PALETTE.md`
- **All Changes**: See `UPDATES.md`
- **Color Picker**: Use any OKLch color picker online to find hue values
- **Accessibility**: WCAG AA contrast requirements are met in current setup

---

**Start editing**: `app/globals.css` - That's all you need to customize your theme!
