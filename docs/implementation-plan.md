# Sain Studios Website - Implementation Plan

## Typography (Linear-inspired)

### Font Sizes (defined in globals.css @theme)
| Element | Size | CSS Variable | Tailwind Class |
|---------|------|--------------|----------------|
| Hero heading | 64px | `--text-hero` | `text-hero` |
| Section headings | 56px | `--text-section` | `text-section` |
| Card headings | 21px | `--text-card-title` | `text-card-title` |
| Hero body text | 17px | `--text-hero-body` | `text-hero-body` |
| Body/button text | 15px | `--text-body` | `text-body` |
| Small text | 14px | `--text-body-sm` | `text-body-sm` |
| Captions | 12px | `--text-caption` | `text-caption` |

### Font Weights
| Element | Weight | Tailwind Class |
|---------|--------|----------------|
| Hero h1 | 480 | `font-[480]` |
| Section headings (h2) | 600 | `font-semibold` |
| Card titles (h3, h4) | 600 | `font-semibold` |
| Body text | 400 | `font-normal` |
| Button text | 500 | `font-medium` |

### Letter Spacing
- Hero headlines: `-0.02em` (`tracking-tight`)
- Section headings: `-0.01em` (`tracking-tight`)
- Body: normal

---

## Design System

### Colors
```
Primary Black:     #0B0C0E
Secondary Gray:    #16181D
Soft Gray:         #A7A9B0
Off-White Text:    #F5F5F7
Electric Blue:     #4C7DFF
Violet Tint:       #8A5CFF
Success Green:     #3CCB7F
Error Red:         #F05A5A
```

### Font
- Inter Variable (via `@fontsource-variable/inter`)

---

## Pages

1. **Home** - Hero, services overview, portfolio preview, pricing cards, CTA
2. **About** - Agency story, values
3. **Work/Portfolio** - Video showcase by category with hover-to-play
4. **Services** - Detailed service offerings
5. **Process** - How we work timeline
6. **Pricing** - Static pricing cards (3 tiers)
7. **Contact** - Contact form

---

## Pricing Tiers
- **Starter:** $399/mo - 8 videos, basic editing
- **Growth:** $699/mo - 16 videos, A/B thumbnails (Best Deal)
- **Authority:** $1199/mo - 30 videos, full service

---

## Project Structure
```
sain-studios/
├── public/
│   └── fonts/, images/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Home)
│   │   ├── about/page.tsx
│   │   ├── work/page.tsx
│   │   ├── services/page.tsx
│   │   ├── process/page.tsx
│   │   ├── pricing/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/ (Header, Footer, MobileMenu)
│   │   ├── ui/ (Button, Card, Input, Badge)
│   │   ├── home/ (Hero, ServicesOverview, PricingPreview)
│   │   ├── work/ (VideoCard, VideoGrid, CategoryFilter)
│   │   └── pricing/ (PricingCard)
│   ├── lib/ (utils, animations)
│   └── data/ (pricing, portfolio, services)
├── tailwind.config.ts
└── package.json
```

---

## Tech Stack
- **Framework:** Next.js 16+ (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Animations:** Framer Motion
- **Deployment:** Vercel

---

## Key Features

### Video Hover-to-Play
- Show thumbnail by default
- On hover: play muted preview clip
- On click: open modal with full video

### Contact Form
- Name, Email, Subject, Message fields
- Success/error feedback

---

## Future Phase (Not in MVP)
- Dynamic pricing calculator with niche/video count selection
- Login system for pricing page
- Invoice PDF generation
- Notification system
- Payment gateway integration
