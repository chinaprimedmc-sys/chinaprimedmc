# China Prime DMC V2 Tour System

Sprint 6 establishes the reusable Tour System. It is a template and content architecture for future CMS-generated private journeys, not a one-off tour page.

## 1. Tour Template

Dynamic route:

`/tours/[slug]`

Example:

`/tours/first-china-beautifully-paced`

Template order:

1. Hero
2. Journey Overview
3. Journey Highlights
4. Interactive Itinerary
5. Accommodation
6. Included & Excluded
7. Optional Experiences
8. Transportation
9. Interactive Map
10. Gallery
11. FAQ
12. Related Tours
13. Related Destinations
14. Customize This Journey CTA
15. Inquiry Form
16. Footer

The page is designed as a luxury travel proposal. It should make a traveler want to inquire, not merely read product details.

## 2. Tour Components

- `TourTemplate`: route-level composition.
- `ItineraryEngine`: expandable day-by-day journey system with sticky day navigation.
- `TourInquiryPanel`: quick consultation, prefilled email action, WhatsApp placeholder, schedule-call placeholder, and reusable inquiry form shell.
- Existing shared components used:
  - `SiteNavigation`
  - `HeroLargeImage`
  - `DestinationCard`
  - `TourCard`
  - `ExperienceCard`
  - `HotelCard`
  - `FeatureCard`
  - `GridGallery`
  - `CtaCard`
  - `FloatingCta`
  - `StickyMobileCta`
  - `SiteFooter`

No separate page visual language is introduced.

## 3. Itinerary Engine

The itinerary engine supports:

- Day number
- Destination
- Summary
- Image
- Hotel
- Meals
- Transportation
- Activities with optional time labels
- Guide note
- Coordinates for future map linking
- Accordion expand/collapse
- Sticky desktop day navigation
- Horizontal mobile day selector
- Smooth Framer Motion reveal

Future extension points:

- Per-day image carousel
- Day-to-map marker linking
- Activity booking modules
- Hotel upgrade selector
- Print/PDF itinerary export

## 4. CMS Field Mapping

CMS entity: `Tour`

Fields:

- `slug`
- `title`
- `subtitle`
- `duration`
- `route`
- `styles`
- `hero.eyebrow`
- `hero.image`
- `hero.primary`
- `hero.secondary`
- `seo.title`
- `seo.description`
- `seo.keywords`
- `overview.pitch`
- `overview.facts[]`
- `highlights[]`
- `itinerary[]`
- `accommodations[]`
- `included[]`
- `excluded[]`
- `optionalExperiences[]`
- `transportation`
- `routeMap.stops[]`
- `gallery[]`
- `faqs[]`
- `related.tours[]`
- `related.destinations[]`
- `inquiry`

Front-end mapping:

- Hero fields map to `HeroLargeImage`.
- Overview facts map to compact fact cards.
- Highlights map to `DestinationCard`.
- Itinerary maps to `ItineraryEngine`.
- Accommodations map to `HotelCard`.
- Optional experiences map to `ExperienceCard`.
- Route map stops map to the route logic panel.
- Gallery maps to `GridGallery`.
- FAQs map to Radix Accordion and FAQ schema.
- Related tours map to `TourCard`.
- Related destinations map to `DestinationCard`.

## 5. SEO

Each tour page supports:

- Dynamic Metadata API
- Canonical URL
- Open Graph image
- Twitter Card
- Breadcrumb JSON-LD
- FAQ JSON-LD
- `TouristTrip` JSON-LD
- Image alt text
- Internal links to destination pages
- Sitemap inclusion

## 6. Responsive Rules

Desktop:

- Hero remains cinematic.
- Itinerary uses sticky day navigation beside accordions.
- Tour proposal sections use two- or three-column layouts where useful.

Tablet:

- Cards shift into two-column grids.
- Itinerary navigation remains compact and touch-friendly.

Mobile:

- Overview facts are single-column for readability.
- Itinerary day navigation becomes horizontal.
- Sticky CTA is delayed and smaller to avoid content obstruction.
- Section headlines are smaller than desktop, while preserving brand weight.

## 7. Motion

Motion uses the existing Motion System:

- Accordion reveal through Framer Motion.
- Existing card hover/image zoom interactions.
- Existing hero and CTA micro-interactions.
- Reduced-motion behavior remains centralized in the app providers and shared motion conventions.

## 8. Inquiry Flow

Tour pages provide multiple conversion paths:

1. Hero CTA: `Customize My Journey`
2. Floating CTA: persistent desktop inquiry entry
3. Sticky mobile CTA: delayed mobile inquiry entry
4. Mid-page CTA card: route customization prompt
5. Inquiry panel:
   - Email prefill
   - WhatsApp placeholder
   - Schedule-call placeholder
   - Quick form shell with travelers, dates, comfort level, and notes

The form is currently a reusable front-end shell. Production submission can connect later to CRM, email API, CMS workflow, or an admin backend.

## 9. Relationship System

Tour pages connect to:

- Related tours by route overlap, travel style, duration, and manual priority.
- Related destinations by route stops.
- Future blog/travel-guide content by tags.

This builds an SEO and browsing network instead of isolated product pages.

## 10. Sprint 7 Readiness

The Tour System can support 100+ routes as long as each tour record follows `types/tour.ts`. Future work can add:

- Tour index page
- Tour filters
- Search
- CMS adapter
- Real map renderer
- CRM-connected inquiry submission
- Price tier display
- Printable proposal export
