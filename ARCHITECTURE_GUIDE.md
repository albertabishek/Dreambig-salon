# Color System Architecture Guide

A visual and conceptual guide to understanding how colors flow through the website.

---

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                   app/globals.css                           │
│         (Master Color Definitions - Edit Here!)              │
│                                                              │
│  :root {                      .dark {                       │
│    --primary: ...             --primary: ...                │
│    --accent: ...              --accent: ...                 │
│    --button-*: ...            --button-*: ...               │
│    --background: ...          --background: ...             │
│    ... 40+ colors ...         ... 40+ colors ...            │
│  }                            }                             │
│                                                              │
│  @theme inline {                                            │
│    --color-primary: var(--primary);                         │
│    --color-accent: var(--accent);                           │
│    ... map all colors to Tailwind ...                       │
│  }                                                          │
└─────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────┴───────────────────┐
        ↓                                       ↓
  ┌──────────────┐                    ┌──────────────┐
  │ Tailwind CSS │                    │ Components   │
  │ (Uses tokens)│                    │ (Use classes)│
  └──────────────┘                    └──────────────┘
        ↓                                       ↓
   bg-primary          ┐            <button    ┐
   bg-accent           ├→ Renders   className= ├→ Visible
   text-foreground     │   Colors    "bg-primary"│
   border-border       │            text-white /│
   ... etc ...         ┘                        ┘
```

---

## Data Flow: From Color Token to Screen

### Example 1: Button Color Change

```
1. Edit app/globals.css
   ┌──────────────────────────────────┐
   │ --button-primary: oklch(0.08 0.04 250);  ← Change to blue
   └──────────────────────────────────┘
                        ↓
2. Tailwind processes tokens
   ┌──────────────────────────────────┐
   │ --color-button-primary: var(--button-primary);
   └──────────────────────────────────┘
                        ↓
3. All buttons use class
   ┌──────────────────────────────────┐
   │ <button className="bg-button-primary">
   │   Book Now
   │ </button>
   └──────────────────────────────────┘
                        ↓
4. Browser renders
   ┌──────────────────────────────────┐
   │ [Book Now] ← Now Blue!
   └──────────────────────────────────┘
```

---

## Component Color Usage

### Navbar Component

```tsx
<nav className="bg-primary text-primary-foreground">
       ↓               ↓
     Navy blue    Off-white text
     (from CSS)   (from CSS)
```

### Service Card Component

```tsx
<div className="border border-border">
                        ↓
              Light gray border
              (from CSS)

<img alt="service" />

<div className="bg-accent text-accent-foreground">
       ↓                ↓
     Gold bg      Navy text
    (from CSS)    (from CSS)
```

### Button Component (Multiple Variants)

```tsx
/* Primary Button */
<button className="bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover">
           ↓                              ↓                              ↓
        Navy bg                      Off-white text            Darker navy on hover
```

---

## Color Token Hierarchy

```
CSS Custom Properties (--color-*)
          ↓
    Tailwind @theme
          ↓
  Tailwind Classes (bg-*, text-*, border-*)
          ↓
   Component Classes
          ↓
    Browser Renders
```

---

## Light Mode vs Dark Mode

```
┌─────────────────────────────────────────────────────────────┐
│ Light Mode (Default)           Dark Mode (.dark)            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ :root {                        .dark {                      │
│   --primary:                     --primary:                 │
│   oklch(0.08 0.04 280)          oklch(0.65 0.18 50)        │
│   [Navy Blue]                   [Gold]                      │
│                                                              │
│   --foreground:                  --foreground:              │
│   oklch(0.15 0 0)               oklch(0.98 0 0)            │
│   [Dark Navy]                   [Off-White]                │
│                                                              │
│   --background:                  --background:              │
│   oklch(0.97 0.005 270)         oklch(0.08 0.04 280)       │
│   [Light/White]                 [Dark Navy]                │
│ }                              }                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘

Visual Representation:

Light Mode                    Dark Mode
┌──────────────┐             ┌──────────────┐
│ White bg     │             │ Navy bg      │
│              │             │              │
│ [Navy btn]   │   Switch    │ [Gold btn]   │
│ Gold accent  │   ────→     │ Gold accent  │
│ Navy text    │             │ White text   │
└──────────────┘             └──────────────┘
```

---

## File Structure & Color Flow

```
project-root/
│
├── app/
│   ├── globals.css          ← All colors defined here ⭐
│   │   ├── :root { --primary, --accent, ... }
│   │   ├── .dark { --primary, --accent, ... }
│   │   └── @theme inline { color mappings }
│   │
│   ├── layout.tsx           ← Uses navbar, footer
│   └── page.tsx             ← Uses home components
│
├── components/
│   ├── ui/
│   │   ├── button.tsx       ← Uses color tokens
│   │   └── card.tsx         ← Uses color tokens
│   │
│   ├── layout/
│   │   ├── navbar.tsx       ← Uses color tokens
│   │   └── footer.tsx       ← Uses color tokens
│   │
│   ├── home/
│   │   ├── hero-section.tsx       ← Uses color tokens
│   │   ├── services-preview.tsx   ← Uses color tokens
│   │   ├── gallery-preview.tsx    ← Uses color tokens
│   │   └── cta-section.tsx        ← Uses color tokens
│   │
│   ├── services/
│   │   └── service-card.tsx       ← Uses color tokens
│   │
│   └── gallery/
│       └── gallery-grid.tsx       ← Uses color tokens
│
└── Documentation/
    ├── COLOR_PALETTE.md           ← All colors explained
    ├── UPDATES.md                 ← Change details
    ├── THEME_CUSTOMIZATION.md     ← How to customize
    ├── IMPROVEMENTS_SUMMARY.md    ← Summary of changes
    └── ARCHITECTURE_GUIDE.md      ← This file
```

**Key Point**: All files use colors defined in `app/globals.css`. No hardcoded colors anywhere!

---

## Example Theme: Navy + Gold (Current)

```
Color Spectrum:
             Dark Navy                  Off-White
            oklch(0.08)                 oklch(0.98)
                 │                          │
                 ├─────── Light Gray ──────┤
                 │       oklch(0.87)       │
                 │
                 └─ Navy with Gold Accent

┌─ Primary (Navy)
│  Light: oklch(0.08 0.04 280)
│  Dark:  oklch(0.65 0.18 50)  ← Inverts to Gold
│
├─ Accent (Gold)
│  Both: oklch(0.65 0.18 50)    ← Same in both modes
│
└─ Secondary (Warm)
   Light: oklch(0.6 0.11 50)
   Dark:  oklch(0.5 0.1 50)
```

---

## Changing Theme: Visual Guide

### Before (Navy + Gold)

```
┌─────────────────────┐
│       Website       │
│                     │
│ ┌─────────────────┐ │
│ │  Navy Navbar    │ │
│ │  With Gold Logo │ │
│ └─────────────────┘ │
│                     │
│ Gold Links & CTA    │
│ Navy Buttons        │
│ Gold Badges         │
│                     │
└─────────────────────┘
```

### After (Blue + Orange) - Just Change app/globals.css!

```
┌─────────────────────┐
│       Website       │
│                     │
│ ┌─────────────────┐ │
│ │  Blue Navbar    │ │
│ │  With Orange    │ │
│ │     Logo        │ │
│ └─────────────────┘ │
│                     │
│ Orange Links & CTA  │
│ Blue Buttons        │
│ Orange Badges       │
│                     │
└─────────────────────┘
```

**Only change**: Color values in `app/globals.css`
**Result**: Entire website transforms!

---

## CSS Variable to Tailwind Mapping

```css
/* In globals.css */
:root {
  --primary: oklch(0.08 0.04 280);
}

@theme inline {
  --color-primary: var(--primary);
}

/* In components */
<button className="bg-primary">  ← This class
                  ↓
<button className="bg-[oklch(0.08 0.04 280)]">  ← Becomes this internally
```

---

## Semantic Color Usage Pattern

```
What it's for          CSS Token              Tailwind Classes
─────────────────────────────────────────────────────────────
Brand Primary          --primary              bg-primary
Brand Accent           --accent               bg-accent
Page Background        --background           bg-background
Text Color             --foreground           text-foreground
Card Background        --card                 bg-card
Borders                --border               border-border
Button (Primary)       --button-primary       bg-button-primary
Button (Accent)        --button-accent        bg-button-accent
Status: Success        --success              bg-success
Status: Error          --destructive          bg-destructive
Muted/Disabled         --muted                bg-muted text-muted-foreground
Focus Ring             --ring                 ring-ring
Input Field            --input                bg-input border-input
```

---

## Token Propagation Example

### From Edit to Screen in 3 Steps

**Step 1: Edit Color Value**
```css
/* app/globals.css */
:root {
  --accent: oklch(0.65 0.18 35);  ← Changed from 50 to 35 (Gold → Orange)
}
```

**Step 2: Tailwind Processes**
```css
/* Compiled CSS */
.bg-accent {
  background-color: oklch(0.65 0.18 35);  ← Orange!
}
```

**Step 3: Components Display**
```tsx
/* All badges become orange automatically */
<div className="bg-accent text-accent-foreground">
  Service Category    ← Now orange instead of gold
</div>
```

---

## Quick Decision Tree

```
Want to change...?

├─ Primary color (Navy)
│  └─ Edit: --primary in :root and .dark
│
├─ Accent color (Gold)
│  └─ Edit: --accent in :root and .dark
│
├─ Button colors
│  └─ Edit: --button-* tokens
│
├─ Text color
│  └─ Edit: --foreground tokens
│
├─ Background color
│  └─ Edit: --background tokens
│
├─ Border colors
│  └─ Edit: --border tokens
│
└─ Everything?
   └─ Edit all tokens in :root and .dark sections
```

---

## Token Dependencies

```
Primary Color
├─ Navbar background
├─ Primary buttons
├─ Hero section background
└─ All primary-colored elements

Accent Color
├─ Links
├─ Badges
├─ Highlights
├─ Accent buttons
└─ Focus states

Foreground Color
├─ All text
├─ Icons
└─ Headings

Background Color
├─ Page background
├─ Card background (sometimes)
└─ Section backgrounds

Border Color
├─ Component borders
├─ Dividers
└─ Input borders
```

---

## Performance Note

Using CSS variables has **zero performance impact**:
- ✓ Variables are processed by browser at runtime
- ✓ No extra HTTP requests
- ✓ Minimal JavaScript involved
- ✓ Actually slightly more efficient than hardcoded colors

---

## Accessibility Through Colors

```
Good ✓

┌─────────────────┐
│ Navy Background │
│ White Text      │
│ High Contrast   │
└─────────────────┘

┌─────────────────┐
│ White Background│
│ Navy Text       │
│ High Contrast   │
└─────────────────┘

Bad ✗

┌─────────────────┐
│ Light Gray Bg   │
│ Light Text      │
│ Low Contrast ❌  │
└─────────────────┘
```

All current color combinations maintain WCAG AA compliance.

---

## Summary

1. **All colors live in**: `app/globals.css`
2. **Light mode colors**: `:root { }` section
3. **Dark mode colors**: `.dark { }` section
4. **Mapping to Tailwind**: `@theme inline { }` section
5. **Components reference**: CSS classes (bg-primary, text-accent, etc.)
6. **Change theme**: Edit one file, everything updates!

---

**This architecture ensures**:
- ✓ Consistency across all pages
- ✓ Easy theme customization
- ✓ Maintainable code
- ✓ Scalable design system
- ✓ Professional appearance
- ✓ No color scattered through files

---

For more details, see:
- `COLOR_PALETTE.md` - All colors explained
- `THEME_CUSTOMIZATION.md` - How to customize
- `UPDATES.md` - What changed and why
