# China Prime DMC Design System

## Positioning

Quiet luxury for high-end inbound China travel: calm, tactile, spacious, and
trustworthy. The site should feel closer to a boutique hotel journal than a
travel agency flyer.

## Color Tokens

- `--color-canvas`: `#f4efe6` warm ivory page background
- `--color-surface`: `#fbf8f1` elevated warm surface
- `--color-surface-muted`: `#ebe2d3` soft section contrast
- `--color-ink`: `#18231f` primary text
- `--color-ink-muted`: `#5f675f` secondary text
- `--color-line`: `rgba(24, 35, 31, 0.16)` subtle dividers
- `--color-accent`: `#24483b` deep green CTA
- `--color-accent-hover`: `#1a352c` CTA hover
- `--color-clay`: `#9c684f` restrained warm accent
- `--color-mist`: `#d9ded4` cool neutral support

Avoid bright red, gold, heavy black, and saturated travel-poster colors.

## Typography

- Display: Georgia, `Times New Roman`, serif
- UI/body: Inter-like system sans stack
- Body minimum: `16px`
- Primary body: `18px` desktop, `16px` mobile
- Phone CTA: `18px` minimum, high contrast, visible on mobile
- Line height: `1.55` to `1.75` for reading comfort

## Spacing

Scale: `4 / 8 / 16 / 24 / 32 / 48 / 64 / 96px`

- Desktop container: max `1180px`, side padding `48px`
- Tablet container: side padding `32px`
- Mobile container: side padding `20px`
- Section rhythm: `96px` desktop, `64px` tablet, `48px` mobile

## Radius And Shadow

- Small controls: `6px`
- Cards and media: `8px`
- Avoid pill-heavy decorative UI unless the element is a small status tag.
- Shadow: broad, low-opacity, never glossy.

## Motion

- Duration: `220ms` quick UI, `360ms` content entrance
- Curve: `cubic-bezier(0.22, 1, 0.36, 1)`
- Scroll/initial entrance: fade + 12px upward movement
- Image hover: scale `1.03`, subtle shadow change
- Buttons: color and border transitions, no bounce
- Respect `prefers-reduced-motion`.

## Responsive Rules

- No horizontal scrolling from 375px to 1920px.
- Touch targets must be at least `44px`.
- Mobile phone CTA must remain visible in the first viewport.
- Fixed social/contact controls must sit above content without overlapping
  primary CTA areas.
