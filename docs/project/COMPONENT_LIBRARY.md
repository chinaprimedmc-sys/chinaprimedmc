# China Prime DMC V2 Component Library

Sprint 2 builds the official component and interaction system only. No business page, homepage, destination page, trip page, or blog page has been developed.

## Component Categories

- Layout: `PageContainer`, `Section`, `ContentContainer`, `GridSystem`, `EditorialLayout`, `SplitLayout`, `MagazineLayout`, `FullWidthLayout`, `HeroLayout`, `GalleryLayout`.
- Navigation: `SiteNavigation`, mega menu, mobile navigation, search overlay, language/currency placeholders, scroll progress.
- Hero: `HeroLargeImage`, `HeroVideo`, `HeroEditorial`.
- Cards: `DestinationCard`, `TourCard`, `ExperienceCard`, `BlogCard`, `ReviewCard`, `HotelCard`, `GalleryCard`, `FeatureCard`, `StatisticCard`, `CtaCard`.
- Gallery: `GridGallery`, `CarouselGallery`, `LightboxGallery`, `FullscreenGallery`.
- Timeline: `TravelTimeline`.
- CTA: `CtaButton`, `FloatingCta`, `StickyMobileCta`, `CtaCard`.
- Forms: `TextField`, `TextAreaField`, `SelectField`, `CheckboxField`, `RadioField`, `TravelerSelector`, form loading/success/error states.
- Reviews: `LuxuryReview`, `EditorialReview`, `GoogleStyleReview`.
- Footer: `SiteFooter`, `NewsletterSignup`.
- Loading: `Skeleton`, `CardSkeleton`, `LoadingSpinner`, `ProgressBar`, `PageTransition`.
- Empty States: `EmptyState`, `NoResultsState`, `NoToursState`, `ComingSoonState`, `ErrorState`.
- Icons: `IconSystem`.
- Glass: `Glass` variants for navigation, search, dialog, dropdown, floating, card, and overlay.

## Motion Library

Centralized in `animations/motion-library.ts` and `animations/motion-presets.ts`.

- `fadeIn`
- `fadeUp`
- `slide`
- `scale`
- `reveal`
- `imageZoom`
- `glassTransition`
- shared viewport settings

Pages must import animation presets instead of declaring custom page-level variants.

## Interaction Design Rules

- Buttons: visible focus ring, subtle press scale, no color-only feedback.
- Cards: lift on hover, image zoom under `1.05`, primary information visible without hover.
- Images: clipped frame, meaningful alt text, lazy by default unless hero priority.
- Touch: no hover-only content for mobile.
- Keyboard: every action reachable by Tab and operable through native controls.
- Motion: respect `prefers-reduced-motion`.

## Responsive Design Rules

- Mobile is not a scaled-down desktop.
- Cards collapse to one column unless a component explicitly supports horizontal scrolling.
- Navigation becomes Dialog-based mobile menu.
- Hero media uses `sizes` and cropped framing through `Next Image`.
- Sticky mobile CTA is available but must be used sparingly.

## Props Summary

- Media components use `MediaAsset`: `src`, `alt`, optional `width`, `height`, `priority`.
- CTA components use `LinkAction`: `label`, `href`, optional `external`.
- Navigation uses `NavigationItem`: `label`, `href`, optional `description`, optional `children`.
- Cards accept `title`, optional `description`, `image`, `href`, `eyebrow`, `badges`, `meta`, `action`, `variant`.
- Timeline uses `TimelineItem`: `eyebrow`, `title`, `description`, `image`, `hotel`, `meals`, `transport`, `activities`.
- Reviews use `ReviewItem`: `quote`, `name`, `country`, `rating`, `date`, `trip`, optional avatar/media.

## Playground

Internal preview route:

`/component-playground`

This route is Storybook-style validation only. It is not a business page and should not be linked from production navigation.

## Component Showcase

Systematic Storybook-style showcase route:

`/component-showcase`

Use this route to review component categories, variants, interaction states, and props examples before building Sprint 3 pages. It is an internal documentation surface, not a public business page.

## Sprint 3 Ready Components

Ready for homepage composition:

- `SiteNavigation`
- `HeroLargeImage`
- `HeroVideo`
- `HeroEditorial`
- `DestinationCard`
- `TourCard`
- `ExperienceCard`
- `ReviewCard`
- `FeatureCard`
- `StatisticCard`
- `GridGallery`
- `CarouselGallery`
- `CtaCard`
- `SiteFooter`
- `FloatingCta`
- `StickyMobileCta`
