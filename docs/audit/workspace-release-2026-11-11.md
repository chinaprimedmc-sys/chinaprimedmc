# Workspace and release audit — 2026-11-11

## Deployment evidence

- Local HEAD and GitHub `main`: `5d9b784fc72f9a16c02547fc365f2fa5bf2089c9` (remote checked with `git ls-remote`). No committed divergence at audit time.
- Production alias: `https://www.chinaprimedmc.com`, Ready deployment `dpl_93BsT9WCWZMErRNCrEdket4Wa3tD`, created 2026-11-10 16:36:53 Asia/Shanghai.
- The Vercel deployment API confirms `meta.githubCommitSha` is `5d9b784fc72f9a16c02547fc365f2fa5bf2089c9`, matching local HEAD and remote main. The API was used because CLI inspect omits this metadata. File inventory below describes local Git changes against that commit; it is not a count of independent features.
- The new `/maps/china-geographic-context.svg` returns 404 in production, while the local version passes browser checks. Pending work has not been published by this audit.
- Initial full Git inventory: **172 file entries** (100 modified, 71 untracked, 1 deleted). These are files, not 172 independent features. Ignored generated assets are excluded.

## Confirmed cleanup

1. Removed two obsolete tour CSS modules (3,340 lines); extracted the only two still-used offer-price classes to `journey-booking-summary.module.css`. Active layout rules and business data are preserved.
2. Replaced the duplicated 145-entry journal route list with the existing typed public manifest.
3. Excluded generated third-party map workers, social exports, test reports and snapshots from lint/format. First-party lint is strict (`--max-warnings 0`).
4. Replaced the obsolete foundation-only README with current source ownership, preview and release instructions.
5. Unified local/CI release checks; now includes all unit tests rather than a selected subset, fresh-server SEO/schema checks, journal DOM checks, all browser projects and local internal links. The owned server always shuts down after success/failure.
6. Added production CSS/JavaScript loading checks across primary entry points to catch missing/mismatched assets.
7. Corrected SEO audit character counts to decode HTML entities. The Xi'an description is 162 visible characters, not 167; no business copy was changed to satisfy a false failure.
8. Corrected the rendered journal audit to parse actual JSON-LD types (including type arrays) and the composed browser DOM. Raw source slicing across React streaming chunks had incorrectly included related-card images in three article bodies.
9. Deferred SaleSmartly downloads until explicit chat intent, retained immediate chat/WhatsApp entry points, added connection feedback and a retry path, and tested success/failure without contacting real agents. HubSpot is unchanged.
10. Updated stale homepage and journey test assertions to verify the current service scope and deliberately unpublished/custom pricing, without exposing an unconfirmed starting price.

## Scope boundaries

HubSpot fields/submission, public URLs, tour operations and quote values were not altered by this cleanup. Existing pending product/content changes remain in place. No bottom mobile action bar was added. Build caches and generated assets remain ignored; active preview snapshots are preserved.

The root layout uses request-scoped CSP nonces and dynamic rendering. The build's 188 generated entries are not evidence that every public content page is served as static HTML. Global styles and the active tour module remain substantial; this cleanup does not claim all future design/architecture work is finished.

## Verification

`pnpm check:release` passed on the final source snapshot:

- Strict lint: zero errors and warnings; TypeScript: zero errors.
- Unit tests: 116 JavaScript tests plus 2 TypeScript route-map tests passed.
- Production build: success; 188 generated entries, with content audits passing.
- Media: 780 readable images, zero decode failures.
- SEO: 203 indexable URLs; canonical/metadata/status/landmark checks passed.
- Homepage: 10 FAQs, 3 featured journeys, 37 internal links and 6 crawler user agents passed local checks. This verifies accessibility to crawlers, not guaranteed external indexing.
- Structured data: 14 key pages and AI text routes passed.
- Journal: 145 articles passed composed-DOM, schema, contextual tour/inquiry-link and content checks.
- Browser suite: 80 tests passed across Chromium, Firefox, desktop WebKit and iPhone Safari, including chat retry, HubSpot fallback and mobile day controls.
- Internal links: 8,709 URLs, zero broken.
- Responsive experience check: 55 layouts, 10 functional checks, 4 pre-hydration checks, zero runtime errors (before the final semantic-only landmark adjustment; final browser tests also passed after it).
- `git diff --check`: passed.

Latest snapshot preview: `http://127.0.0.1:3150/tours`. Performance retest is recorded below. No deployment was performed.

The extracted price styles now use shared muted/forest tokens directly: the former `--quiet` variable had no declaration in the active layout.

Map preview loading now uses a native lazy-loaded HTML image inside the SVG foreignObject, preserving the original geographic vector asset and projection while avoiding its eager download. Browser tests verify the image actually decodes after scrolling and remains available on basemap failure.

Additional browser-discovered fixes: the mobile contact menu now sits above journey filter tabs and its connection-error text uses an opaque surface. Three nested `main` elements (journey discovery, reviews and terms) were replaced with sections/divs while preserving the existing page-level landmark and styles. SEO and browser checks now enforce one main landmark.

Landmark validation accounts for React's streamed loading fallbacks: responses with multiple raw `main` tags are confirmed in the composed browser DOM, rather than misclassifying the hidden fallback as a second live landmark.

## Final pending-file inventory

Captured 2026-11-11T12:25:41+08:00: **191 files** — 112 modified, 76 untracked, 3 deleted. This includes this audit and the fixes added during the inspection. Generated build artifacts remain ignored.

```text
 M .gitignore
 M .prettierignore
 M README.md
 M app/about/about.module.css
 M app/about/founder/founder.module.css
 M app/about/founder/page.tsx
 M app/about/page.tsx
 M app/company/company.module.css
 M app/company/page.tsx
 M app/contact/page.tsx
 M app/destinations/[slug]/page.tsx
 M app/journal/[slug]/page.tsx
 M app/llms-full.txt/route.ts
 M app/llms.txt/route.ts
 M app/reviews/page.tsx
 M app/start-planning/page.tsx
 M app/terms/page.tsx
 M app/tours/[slug]/page.tsx
 M components/about/about-navigation.module.css
 M components/about/travel-trade-note.module.css
 M components/about/travel-trade-note.tsx
 M components/analytics/conversion-tracking.tsx
 M components/analytics/salesmartly-chat.module.css
 M components/analytics/salesmartly-chat.tsx
 M components/footer/page-closing.tsx
 M components/forms/enquiry-dialog.module.css
 M components/forms/enquiry-dialog.tsx
 M components/forms/enquiry-section.module.css
 M components/forms/enquiry-section.tsx
 M components/forms/hubspot-form.module.css
 M components/forms/hubspot-form.tsx
 M components/forms/inline-enquiry-form.tsx
 M components/forms/lazy-hubspot-form.tsx
 M components/forms/start-planning-form.tsx
 M components/reviews/reviews-archive.module.css
 M components/tours/journeys-explorer.tsx
 M config/public-route-slugs.ts
 M content/destinations/editorial.ts
 M content/destinations/explorer.ts
 M content/destinations/planning-guides.ts
 M content/founder/index.ts
 M content/home/service-achievements.ts
 M content/home/traveler-reviews.ts
 M content/journal/articles/2026-08-06-china-high-speed-train-foreigners.md
 M content/journal/articles/2026-08-06-forbidden-city-tickets-foreigners.md
 M content/journal/articles/2026-08-08-terracotta-army-tickets-foreign-visitors.md
 M content/journal/articles/2026-08-10-10-day-china-itinerary-first-time-visitors.md
 M content/journal/articles/2026-08-18-china-itinerary-older-travelers-12-days.md
 M content/journal/articles/2026-08-19-how-many-days-beijing-xian-shanghai.md
 M content/journal/articles/2026-08-20-are-china-group-tours-too-fast-for-seniors.md
 M content/journal/articles/2026-08-20-best-places-china-senior-travelers.md
 M content/journal/articles/2026-08-20-best-time-to-visit-china-for-seniors.md
 M content/journal/articles/2026-08-20-china-tour-cost-for-seniors.md
 M content/journal/articles/2026-08-20-china-tours-for-seniors.md
 M content/journal/articles/2026-08-20-china-travel-for-seniors.md
 M content/journal/articles/2026-08-20-how-much-does-a-trip-to-china-cost.md
 M content/journal/articles/2026-08-20-luxury-china-tour-planning-guide.md
 M content/journal/articles/2026-09-25-beijing-xian-shanghai-private-tour-9-days.md
 M content/journal/articles/2026-10-04-slow-paced-china-tour-for-seniors.md
 M content/journal/articles/2026-11-05-how-to-visit-great-wall-without-climbing-stairs.md
 M content/journal/articles/2026-11-05-is-china-safe-for-elderly-travelers-senior-care-guide.md
 M content/journal/articles/2026-11-05-slow-paced-china-tour-for-seniors-itinerary-guide.md
 M content/journal/articles/2026-11-06-china-senior-travel-dining-hotels-comfort-guide.md
 M content/journal/articles/2026-11-06-china-travel-accessibility-senior-health-guide.md
 M content/journal/articles/2026-11-06-china-travel-with-elderly-parents-pacing-guide.md
 M content/journal/audience-experience.ts
 M content/journal/commercial.ts
 M content/journal/journey-links.ts
 M content/journal/published.ts
 M content/journal/senior-cluster.ts
 M content/tours/card-copy.ts
 M content/tours/catalog.ts
 M content/tours/china-considered-12-day.ts
 M content/tours/china-family-12-day.ts
 M content/tours/guilin-yangshuo-li-river-day-tour.ts
 M content/tours/index.ts
 M content/tours/journey-tags.ts
 M content/tours/mutianyu-private-day-tour.ts
 M content/tours/private-chengdu-panda-day-tour.ts
 M content/tours/private-shanghai-day-tour.ts
 M content/tours/private-xian-terracotta-day-tour.ts
 D content/tours/slow-paced-golden-triangle.ts
 M design-system/tokens/foundation.css
 M docs/audit/product-portfolio-optimization-plan-2026-11-10.md
 M docs/project/DESTINATION_SYSTEM.md
 M docs/project/PRODUCT_CLASSIFICATION.md
 M docs/project/TOUR_SEO_GEO_STANDARD.md
 M eslint.config.mjs
 M features/destinations/editorial-destination-template.tsx
 M features/tours/detail/journey-booking-summary.tsx
 M features/tours/detail/tour-day-itinerary.tsx
 D features/tours/detail/tour-detail-landing.module.css
 M features/tours/detail/tour-detail-landing.tsx
 M features/tours/detail/tour-detail-model.ts
 D features/tours/detail/tour-detail.module.css
 M features/tours/detail/tour-journey.module.css
 M lib/analytics/events.ts
 M lib/cms/core-journey-fallbacks.ts
 M lib/seo/metadata.ts
 M lib/seo/schema.ts
 M lib/tours/journey-explorer-item.ts
 M lib/tours/journey-match.ts
 M next.config.ts
 M package.json
 M pnpm-lock.yaml
 M proxy.ts
 M scripts/audit-destinations.mjs
 M scripts/audit-home-search.mjs
 M scripts/audit-journal-rendered.mjs
 M scripts/audit-seo.mjs
 M scripts/start-local-preview.mjs
 M scripts/test-experience.mjs
 M tests/journey-explorer.test.mjs
 M tests/journey-match.test.mjs
 M types/tour.ts
?? .github/workflows/site-quality.yml
?? app/start-planning/planning.module.css
?? assets/fonts/Inter-OFL.txt
?? assets/fonts/Inter.ttf
?? assets/fonts/Newsreader-OFL.txt
?? assets/fonts/Newsreader.ttf
?? assets/fonts/README.md
?? components/about/service-cases.module.css
?? components/about/service-cases.tsx
?? components/about/white-editorial.module.css
?? components/planning/booking-guide.module.css
?? components/planning/booking-guide.tsx
?? components/tours/route-map/interactive-route-map.tsx
?? components/tours/route-map/journey-route-map.tsx
?? components/tours/route-map/route-map.module.css
?? content/about/identity.ts
?? content/about/service-cases.ts
?? content/planning/booking-process.ts
?? content/tours/first-china-10-day.ts
?? docs/audit/about-entity-ai-readability-2026-11-11.md
?? docs/audit/brand-tools-validation-2026-11-11.md
?? docs/audit/destinations-ai-overviews-2026-11-11.md
?? docs/audit/destinations-evidence-register-2026-11-11.md
?? docs/audit/destinations-seo-geo-audit-2026-11-11.md
?? docs/audit/founder-photo-2026-11-11.md
?? docs/audit/geographic-route-map-2026-11-11.md
?? docs/audit/hubspot-context-trust-2026-11-11.md
?? docs/audit/mobile-journey-detail-2026-11-11.md
?? docs/audit/mobile-trust-pages-2026-11-11.md
?? docs/audit/official-policy-verification-2026-11-11.md
?? docs/audit/planning-booking-trust-2026-11-11.md
?? docs/audit/service-case-editorial-2026-11-11.md
?? docs/audit/tour-official-sources-ai-search-2026-11-11.md
?? docs/audit/tour-search-rollout-2026-11-11.md
?? docs/audit/workspace-release-2026-11-11.md
?? docs/audit/zhangjiajie-destination-editorial-2026-11-11.md
?? docs/audit/zhangjiajie-search-intent-map.md
?? docs/products/06-beijing-xian-shanghai-10-day.md
?? docs/products/07-china-at-an-easier-pace-12-day.md
?? docs/project/BRAND_TOOLS.md
?? features/destinations/destination-journey-card.tsx
?? features/tours/detail/journey-booking-summary.module.css
?? lib/analytics/destination-context.ts
?? lib/content/destination-origin.ts
?? lib/content/destination-search-guide.ts
?? lib/forms/hubspot-bridge.ts
?? lib/forms/planning-context.ts
?? lib/seo/social-card.ts
?? lib/seo/tour-sources.ts
?? lib/tours/geographic-map-style.ts
?? lib/tours/route-map.ts
?? lighthouserc.cjs
?? playwright.config.ts
?? public/company/founder-chongqing-travel-agents-2026.webp
?? public/maps/OSM-Liberty-LICENSE.md
?? public/maps/README.md
?? public/maps/aviora-geographic-style.json
?? public/maps/china-geographic-context.svg
?? public/maps/land.geojson
?? scripts/audit-local-links.mjs
?? scripts/check-release.mjs
?? scripts/media/audit-library.mjs
?? scripts/media/build-social-cards.ts
?? scripts/media/prepare-geographic-preview.mjs
?? scripts/media/prepare-map-worker.mjs
?? scripts/media/prepare-portrait.mjs
?? tests/about-identity.test.mjs
?? tests/browser/assets.spec.ts
?? tests/browser/brand-tools.spec.ts
?? tests/browser/contact-chat.spec.ts
?? tests/browser/enquiry.spec.ts
?? tests/destination-conversion.test.mjs
?? tests/easier-pace-search.test.mjs
?? tests/enquiry-context.test.mjs
?? tests/first-china-search.test.mjs
?? tests/route-map.test.ts
```

## Performance retest and remaining limit

Three mobile Lighthouse runs per page, local production server, default simulated throttling. SEO/accessibility/layout stability gates pass; the 3-second LCP advisory remains and must not be presented as a complete green performance result. These are lab estimates, not production field timings.

| Page                                                     | Median performance | Accessibility | SEO | Median LCP | Maximum CLS |
| -------------------------------------------------------- | ------------------ | ------------- | --- | ---------- | ----------- |
| /                                                        | 82                 | 97            | 100 | 4.88s      | 0.0000      |
| /tours/china-family-tour-with-pandas-12-day-private-tour | 82                 | 100           | 100 | 4.75s      | 0.0002      |

The family page improved from roughly 76–77 performance / 6.39s LCP before map deferral. Initial lazy-loading spot check measured 84 / 4.38s; the repeat-run table above is the final evidence. The homepage still needs further critical-render-path/bundle work to meet the optional 3-second target; do not claim every performance advisory is resolved. HubSpot was not changed to improve a benchmark.
