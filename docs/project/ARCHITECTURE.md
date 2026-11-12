# AVIORA architecture

## Responsibilities

- `app/`: App Router entry points, metadata, sitemap, robots, errors and redirects.
- `content/`: typed tours, destinations, journal entries and Markdown assets.
- `features/`: domain-specific page composition for tours, destinations, journal and service pages.
- `components/`: shared navigation, forms, media, maps, layout and UI.
- `design-system/`: shared visual tokens and primitives.
- `lib/`: domain logic, content relationships, integrations, analytics and SEO helpers.
- `config/`: site settings, public route registries and legacy migrations.
- `stores/`: shared client state.
- `types/`: shared TypeScript contracts.
- `styles/`: global styles, fonts and motion rules.
- `scripts/`, `tests/`: content preparation, audits and release verification.
- `docs/`: operating notes and historical audit evidence.

## Boundaries

Routes assemble features and shared components. Content registries own published
business data; preserve their exports, prices, slugs and verified service terms.
HubSpot remains the enquiry provider. Integration helpers live under `lib/` and
provider UI under `components/`; no unused CMS or database scaffold is required.

Use shared metadata and JSON-LD helpers, semantic visual tokens and component CSS
modules. Keep historical URL redirects intact when removing unused source files.
Run the checks documented in the root README before publishing changes.
