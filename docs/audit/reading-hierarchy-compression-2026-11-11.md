# Reading hierarchy and page compression — 2026-11-11

## Scope and source boundaries

Improve the existing homepage, shared tour detail template, destination guide template and planning guide. Preserve existing brand styling, portrait imagery, commercial source data, Tour types and exports, route definitions, official-source qualifications and HubSpot integration. No new mobile bottom action bar. This batch is local and has not been committed or deployed.

The workspace also contains independent About, sitemap and new collection-page changes. They were not edited or reverted by this batch. A transient missing stylesheet in an in-progress collection page initially blocked a build; subsequent compilation succeeded once that file appeared.

## Changes

- Tour decision summary now presents the existing catalog audience and published pace, followed by direct service-scope links. Removed repeated inclusion/exclusion excerpts; the complete lists remain in their original scope section.
- Kept the concise overview lead visible. Full narrative, highlights and long service notes are available in one native disclosure. Map and daily itinerary now precede duration comparisons, visit options and detailed service specifications.
- Show the actual pricing basis next to the mobile starting rate. Removed the second generic audience statement from this area; the specific audience remains in the decision summary. Prices and commercial terms are unchanged.
- A multi-day itinerary opens Day 2 initially (Day 1 for one- or two-day products), with all other titles visible. Published walking, transit or rest information appears in closed-day previews where present; no operational estimates are inferred. Keep complete narratives, images, metrics and expand-all/day-jump controls.
- Reduced repeated tour feedback from three placements to one with existing source attribution. Retain service records and unique guide information. Generic company-process explanation remains in a native disclosure. FAQ now resolves objections before the mobile booking area and exit recommendations.
- Homepage mobile journey cards use small portrait images next to titles, route and price, followed by the specific experience description and rounded link. Desktop subgrid alignment remains. Replaced three repeated quotation sentences with one shared note; merged the repeated company overview into the service section as an expandable description.
- Destination product recommendations follow the stay decision. Direct stay/hotel answers remain visible, while detailed night-count and hotel-area comparisons expand on demand. Mobile related destinations use small portrait thumbnails. Removed the duplicate planning CTA immediately preceding the complete enquiry section.
- Planning guide retains its full four-step explanation, with the six-topic proposal checklist in a native disclosure. Hosted form fields, consent, validation and submissions are untouched.

## Rendered measurements

Chromium, 390 × 844 viewport, reduced motion, fonts ready, default disclosures, after scrolling through the page for lazy assets. Baseline is the production version inspected before this batch; optimized measurements are from the latest local production build. Third-party embeds can affect total page heights. These are approximate layout measurements, not conversion results.

| Page / decision point            |         Before |          After |
| -------------------------------- | -------------: | -------------: |
| Homepage total height            |      11,600 px |       9,036 px |
| Homepage enquiry heading / area  | about 6,400 px | about 5,060 px |
| Family tour daily itinerary      |       3,709 px |       2,660 px |
| Ten-day tour daily itinerary     |       4,988 px |       2,808 px |
| Easier-pace tour daily itinerary |       5,023 px |       2,713 px |
| Beijing recommended products     |      10,496 px |       1,801 px |
| Family tour total height         |      18,034 px |      14,874 px |
| Ten-day tour total height        |      22,993 px |      19,705 px |
| Beijing guide total height       |      22,476 px |      19,852 px |
| Planning page total height       |       5,639 px |       4,668 px |

All six sampled pages also checked at 1440 px; no horizontal overflow at either measured width. Mobile browser assertions additionally cover 320 px titles and portrait image geometry. Temporary visual evidence and measurement JSON: `/tmp/aviora-reading-*.png`, `/tmp/aviora-reading-metrics.json`.

## Verification

The final production build completed with TypeScript and content audits. SEO (204 indexable URLs in the shared workspace), homepage and structured-data audits passed on the freshly built server. Unit tests: 125 passed. Final browser run: 108 passed across Chromium, Firefox, WebKit and mobile Safari (`/tmp/aviora-reading-browser-final.log`). Local links: 8,688 checked, zero broken (`/tmp/aviora-reading-links-final.log`). Final targeted ESLint and TypeScript checks passed. The browser coverage checks early itinerary/product placement, exactly one initial open day, visible mobile pricing basis, preserved expand-all behavior, FAQ order, native disclosures and unclipped mobile titles.

Desktop homepage alignment was checked at 1440 px: all three recommendation titles share y=1509, prices y=1697, and action links y=1754. Local preview is served from an immutable production-build snapshot at `http://localhost:3150`, so subsequent builds cannot invalidate its CSS assets.

All retained detail content remains rendered in HTML; no click-to-fetch content mechanism was introduced. Existing Next streaming behavior still applies; HTML presence is not a claim of complete page usability with JavaScript disabled. No ranking, AI citation or conversion lift is claimed from these layout changes.
