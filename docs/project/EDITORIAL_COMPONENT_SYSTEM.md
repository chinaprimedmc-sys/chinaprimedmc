# AVIORA editorial component system

## Design direction

Retain AVIORA's white canvas, jade accent, Newsreader headings and existing page hierarchy. Portrait photography and fewer competing fields make private journeys easier to compare. Glass belongs to navigation and action controls; ordinary content surfaces are solid.

Design variance: 6. Motion intensity: 3. Visual density: 3.

## Components

- `components/icons/symbols.tsx`: one SSR-safe Phosphor family. Existing semantic icon names stay compatible. The wrapper fixes regular weight and removes legacy stroke overrides. Icons are decorative unless callers explicitly label them. Standard sizes are 16, 20 and 24 through `IconSystem`.
- `JourneyTile`: portrait photograph, duration and route, full title, one description, relevant suitability information, price with basis, and one linked action. No photo labels, duplicated highlights, essential hover content or nested links.
- `JourneyCard`: adapts the catalog to the same `JourneyTile`; it does not implement a separate visual variant.
- `getJourneyCardPhoto`: presentation-only selection of existing repository photography. No tour content or image assets are rewritten.
- `Card`: solid surface, semantic border and restrained corners. A content card is not a glass control.
- `FaqList`: native `details`/`summary`, readable answers in initial HTML, 44px circular indicator and visible keyboard focus. Used by home, tours, tour details and planning FAQs. Existing tour FAQ analytics remain in the wrapper.
- `JourneyGallery`: Embla swipe enhancement with a native horizontal overflow fallback. No autoplay. Arrow/Home/End navigation, labeled slide groups and explicit previous/next controls. Radix handles the enlarged viewer, Escape, focus containment and focus return. Motion's animation features load only when that viewer opens. Reduced motion removes the fade and jumps between slides.
- `GlobalHeader`: Radix Navigation Menu provides desktop menus for pointer, click and keyboard. Top-level destination links remain links. Mobile navigation keeps its existing Radix dialog.

## Safeguards

- HubSpot integration, form fields and submission logic remain unchanged. Three local form helpers only switch icon imports.
- No changes to `content/tours`, Tour interfaces, metadata, schema definitions, route slugs or booking policy.
- Prices retain the existing publication scope: the slow-paced flagship has its existing published pricing-block exception; remaining catalog cards use an individual quote. No additional catalog numbers are exposed.
- No mobile bottom inquiry/action bar. Portrait content photography and pill-shaped actions remain the default.
- Filter selections retain URL state. Signature/tailor-made collections precede day experiences in the type controls. These are filter buttons with `aria-pressed`, not incomplete ARIA tabs.

## Open-source foundations and visual references

Implemented dependencies (MIT):

- Phosphor React: https://github.com/phosphor-icons/react
- Radix Primitives: https://github.com/radix-ui/primitives
- Embla: https://github.com/davidjerleke/embla-carousel
- Motion: https://github.com/motiondivision/motion

Editorial composition research: https://github.com/tomd0627/meridian-travel

The tourism reference informed composition only. Its code, copy, testimonials, photographs and brand palette were not transplanted.

## Verification

Run `PREVIEW_URL=http://127.0.0.1:3005 pnpm test:experience` against a fresh production preview. It checks 11 routes at 320, 390, 768, 1024 and 1440px, portrait journey media, the absence of the mobile bottom action bar, navigation placement, Escape and focus return, URL filters, gallery controls and native FAQ interaction. It also withholds external Next.js JavaScript bundles to verify the FAQ and photo rail before hydration.

The experience check also verifies that Inter and Newsreader resolve to separate font resources. If mocked Google Fonts responses have been used locally, discard their webpack cache before a release build; the cached mock can otherwise map both families to one italic file despite correct CSS declarations.

Fully disabling JavaScript is a separate limitation of the existing Next.js page-level streaming boundaries: inline framework scripts reveal completed page fragments. The pre-hydration checks keep those inline scripts enabled; they do not claim full no-JavaScript support or change HubSpot's loading behavior.
