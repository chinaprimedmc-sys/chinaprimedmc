# Unseen China Journeys — Design Ideas

## Brand Brief
Premium luxury inbound China travel brand. Target audience: high-net-worth international travelers seeking tailor-made private journeys. Tone: editorial, authoritative, poetic.

---

## Three Stylistic Approaches

### Approach A — "Ink & Horizon" (Probability: 0.07)
A fusion of classical Chinese ink painting aesthetics with modern editorial luxury. Brushstroke textures, asymmetric compositions, and deep indigo tones evoke the feeling of a rare art book rather than a travel brochure.

### Approach B — "The Cartographer's Journal" (Probability: 0.05)
Inspired by antique expedition journals and National Geographic's golden age. Aged parchment tones, serif typography, hand-drawn map motifs, and a warm amber-sepia palette. Feels like a collector's edition travel compendium.

### Approach C — "Midnight Meridian" (Probability: 0.08)
Ultra-dark luxury editorial. Deep navy-charcoal backgrounds, warm off-white text, gold accent lines. Cinematic full-bleed photography. Feels like a high-end fashion magazine crossed with a luxury travel brand.

---

## Selected Approach: **C — "Midnight Meridian"**

### Design Movement
Dark luxury editorial — the intersection of Monocle magazine, Black Tomato, and Aesop brand aesthetics. Restrained, confident, deeply atmospheric.

### Core Principles
1. **Darkness as luxury** — deep navy/charcoal backgrounds signal exclusivity, not gloom
2. **Photography as protagonist** — images breathe at full bleed; text is the caption to the visual story
3. **Typographic hierarchy** — dramatic size contrast between display headlines and body copy
4. **Restraint over decoration** — every element earns its place; nothing is decorative noise

### Color Philosophy
- **Primary Background**: `#0A0F1E` (near-black navy) — the depth of midnight in the Gobi
- **Secondary Background**: `#111827` (dark slate) — card surfaces
- **Warm Off-White**: `#F5F0E8` (warm cream) — primary text, feels like aged paper against dark
- **Beige Accent**: `#C9A96E` (warm gold) — CTAs, highlights, dividers — the color of candlelight on silk
- **Muted Sage**: `#8B9E8A` — secondary text, subtle accents
- **Deep Navy**: `#1A2744` — section backgrounds, alternating panels

### Layout Paradigm
Asymmetric editorial grid. Sections break from standard centered layouts:
- Hero: full-viewport cinematic with text anchored bottom-left
- Feature sections: 60/40 split with image bleeding off-edge
- Destination cards: masonry-influenced irregular grid
- Journey cards: horizontal scroll on mobile, 3-column editorial on desktop
- Text-heavy sections use wide left margins with pull-quotes breaking the grid

### Signature Elements
1. **Gold hairline dividers** — 1px warm gold lines separating sections and decorating headings
2. **Oversized chapter numbers** — large ghost numerals (opacity 0.06) behind section headings
3. **Image corner crop marks** — subtle photographic crop marks on featured images

### Interaction Philosophy
Interactions should feel deliberate and unhurried — like turning pages in a luxury magazine. No bouncy animations. Smooth, slow fades and slides that respect the user's attention.

### Animation
- **Page sections**: fade-in + translateY(24px→0) on scroll, 600ms ease-out, staggered 80ms
- **Navigation**: backdrop-blur transition on scroll (transparent → dark/blur)
- **Image hovers**: scale(1.03) over 400ms ease-out, no sudden jumps
- **CTA buttons**: subtle shimmer on hover, scale(0.97) on press
- **Carousel**: smooth 500ms slide, no bounce
- **Hero parallax**: subtle 0.15 parallax factor on scroll

### Typography System
- **Display / Headlines**: `Cormorant Garamond` — elegant, literary, slightly condensed. Used for H1/H2 at large sizes (72px–120px desktop)
- **Navigation & Labels**: `Montserrat` — clean, geometric, uppercase tracking. Used for nav, badges, captions
- **Body Copy**: `Lora` — warm serif that reads beautifully at paragraph length
- **Accent / Numbers**: `Cormorant Garamond` italic for pull-quotes and statistics

### Brand Essence
*The world's most discerning China travel authority — for travelers who read before they go.*
Personality: **Authoritative. Poetic. Intimate.**

### Brand Voice
Headlines sound like opening lines of a great travel essay. CTAs are invitations, not commands.
- Example headline: *"The China that doesn't make the guidebooks — and the journeys that reveal it."*
- Example CTA: *"Begin your journey"* (not "Book Now")
- Banned phrases: "Welcome to our website", "Get started today", "Best prices guaranteed"

### Wordmark & Logo
A stylized compass rose merged with a Chinese seal (印章) motif — circular, bold, no text. Deep gold on transparent background. Used in header at 40px and as favicon.

### Signature Brand Color
**Candlelight Gold** `#C9A96E` — warm, ancient, unmistakably this brand's.

---

## Style Decisions
- Navigation: transparent over hero, transitions to `rgba(10,15,30,0.95)` + blur on scroll
- All CTAs use gold background with near-black text for maximum contrast
- Section padding: 120px desktop, 80px tablet, 60px mobile
- Card border-radius: 2px (almost square — luxury brands avoid excessive rounding)
- All images use `object-fit: cover` with subtle overlay gradient
- Regular card grids are broken by at least one editorial gesture per section: an oversized protagonist image, offset alignment, pull quote, ghost numeral, or asymmetric text/image relationship.
- The seal-compass logo is displayed at 52px (hero state) / 44px (scrolled state) with a two-line wordmark lockup — must feel like a luxury travel marque, not a generic icon beside text.
- CTA language always sounds like an invitation to a private editorial journey: "Begin Your Journey", "An Invitation", "Your China Journey Begins Here" — never operational phrasing in hero/section areas.
- Ghost chapter numerals (I, II, III, IV, V) appear as large low-opacity decorative elements at section openings to create brand rhythm.
- Crop-mark corner details appear on key image frames and testimonial cards as a recurring brand motif.
- Gold hairline dividers (1px gradient from #C9A96E to transparent) separate section labels from headlines throughout.
