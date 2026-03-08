# Color Palette Guide

This document provides a centralized reference for all colors used throughout the Luxury Salon website. All color definitions are managed in a single location for easy theme customization and maintenance.

## Color Tokens Location
All color definitions are in: `app/globals.css`

The color system uses CSS Custom Properties (variables) for both light and dark themes.

---

## Color Categories

### 1. Core Colors (Background & Text)

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|----------|-------|
| `--background` | Very light (0.97) | Very dark navy (0.08) | Page background |
| `--foreground` | Dark navy (0.15) | Off-white (0.98) | Primary text |
| `--card` | Pure white (1.0) | Dark navy card (0.12) | Card backgrounds |
| `--card-foreground` | Dark navy (0.15) | Off-white (0.98) | Card text |
| `--popover` | Pure white (1.0) | Dark navy (0.12) | Popover backgrounds |

### 2. Primary Theme (Navy)

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|----------|-------|
| `--primary` | Navy (0.08) | Gold (0.65) | Primary brand color |
| `--primary-foreground` | Off-white (0.98) | Navy (0.08) | Text on primary |

**Light Mode**: Navy background with white text (navbar, hero sections)
**Dark Mode**: Gold background with navy text (reversed styling)

### 3. Secondary Theme (Gold/Warm)

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|----------|-------|
| `--secondary` | Gold (0.6) | Warm gold (0.5) | Secondary elements |
| `--secondary-foreground` | Navy (0.15) | Off-white (0.98) | Text on secondary |

### 4. Accent Color (Gold)

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|----------|-------|
| `--accent` | Gold (0.65) | Gold (0.65) | Highlights, badges, links |
| `--accent-foreground` | Navy (0.15) | Navy (0.08) | Text on accent |

**Note**: Accent color remains consistent across themes for brand recognition.

### 5. Button Colors

Interactive element colors with hover states:

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|----------|-------|
| `--button-primary` | Navy (0.08) | Gold (0.65) | Primary buttons |
| `--button-primary-foreground` | Off-white (0.98) | Navy (0.08) | Primary button text |
| `--button-primary-hover` | Darker navy (0.12) | Darker gold (0.6) | Primary button hover |
| `--button-accent` | Gold (0.65) | Gold (0.65) | Accent buttons |
| `--button-accent-foreground` | Navy (0.15) | Navy (0.08) | Accent button text |
| `--button-accent-hover` | Darker gold (0.6) | Darker gold (0.6) | Accent button hover |
| `--button-secondary` | Light gray (0.92) | Dark gray (0.15) | Secondary buttons |
| `--button-secondary-foreground` | Navy (0.15) | Off-white (0.98) | Secondary button text |
| `--button-secondary-hover` | Lighter gray (0.87) | Darker gray (0.2) | Secondary button hover |

### 6. Status Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|----------|-------|
| `--destructive` | Red (0.577) | Red (0.396) | Error, delete actions |
| `--destructive-foreground` | Light text | Light text | Text on destructive |
| `--success` | Green (0.6) | Green (0.6) | Success messages |
| `--success-foreground` | Off-white (0.98) | Off-white (0.98) | Text on success |

### 7. Utility Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|----------|-------|
| `--border` | Light (0.92) | Dark (0.2) | Borders, dividers |
| `--input` | Very light (0.95) | Dark (0.15) | Input fields |
| `--ring` | Gold (0.65) | Gold (0.65) | Focus rings, highlights |
| `--muted` | Light gray (0.87) | Dark gray (0.25) | Disabled, muted text |
| `--muted-foreground` | Gray (0.45) | Light gray (0.65) | Muted text color |

### 8. Chart Colors

Sequential colors for data visualization:

| Token | Usage |
|-------|-------|
| `--chart-1` | Primary chart color (Gold) |
| `--chart-2` | Secondary chart color (Navy) |
| `--chart-3` | Tertiary chart color (Gold warm) |
| `--chart-4` | Quaternary chart color (Brown) |
| `--chart-5` | Quinary chart color (Light gold) |

---

## How to Customize the Theme

### Quick Theme Change

Edit `/app/globals.css` and modify the color values in the `:root` (light) and `.dark` (dark) sections:

```css
:root {
  /* Change primary brand color from navy to custom color */
  --primary: oklch(YOUR_VALUE);
  --button-primary: oklch(YOUR_VALUE);
  
  /* Change accent from gold to custom color */
  --accent: oklch(YOUR_VALUE);
  --button-accent: oklch(YOUR_VALUE);
}

.dark {
  /* Update dark mode versions similarly */
  --primary: oklch(YOUR_VALUE);
  --accent: oklch(YOUR_VALUE);
}
```

### Color Format (OKLch)

All colors use the OKLch color space for better perceptual uniformity:
- **L (Lightness)**: 0-1 (0 = dark, 1 = light)
- **C (Chroma)**: 0-0.4 (color intensity)
- **h (Hue)**: 0-360 (color angle)

Example: `oklch(0.65 0.18 50)` = Light gold at 50° hue

### Where Colors Are Used in Code

Colors are referenced in components via Tailwind classes:

```tsx
// Using theme colors
<div className="bg-primary text-primary-foreground">
<button className="bg-accent text-accent-foreground hover:bg-accent/90">
<div className="border border-border">
```

All Tailwind classes automatically use the CSS variables, so changing the variables updates the entire site.

---

## Color Contrast & Accessibility

All color combinations have been tested for WCAG AA compliance:

- **Light Mode**: Navy text on light backgrounds (high contrast ✓)
- **Dark Mode**: Light text on dark backgrounds (high contrast ✓)
- **Buttons**: All button combinations meet minimum contrast ratios
- **Links**: Accent color meets contrast requirements on all backgrounds

---

## Light & Dark Mode Behavior

The website supports both light and dark themes:

- **Light Mode** (Default): Navy primary with light backgrounds
- **Dark Mode**: Gold primary with dark backgrounds

The theme automatically switches based on system preferences. Colors are defined for both modes in `globals.css`.

---

## Example: Changing the Primary Brand Color

To change from Navy to another color:

1. Edit `/app/globals.css`
2. Update in `:root` section:
   ```css
   --primary: oklch(0.08 0.04 NEW_HUE); /* Change hue */
   --button-primary: oklch(0.08 0.04 NEW_HUE);
   ```
3. Update in `.dark` section:
   ```css
   --primary: oklch(0.65 0.18 NEW_HUE);
   --button-primary: oklch(0.65 0.18 NEW_HUE);
   ```
4. All components automatically update!

---

## File Structure

```
app/
├── globals.css          ← All color definitions here
├── layout.tsx
└── page.tsx

components/
├── ui/button.tsx        ← Uses color tokens
├── services/
│   └── service-card.tsx ← Uses color tokens
└── layout/
    ├── navbar.tsx       ← Uses color tokens
    └── footer.tsx       ← Uses color tokens
```

All components inherit colors from `globals.css` via Tailwind's theme system.

---

## Maintenance Tips

1. **Always update both `:root` and `.dark` sections** for theme consistency
2. **Test color changes in both light and dark modes**
3. **Check contrast ratios** for new color combinations
4. **Use OKLch format** for better color consistency
5. **Document custom colors** in this file for team reference
