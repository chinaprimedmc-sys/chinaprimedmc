# Brand tools validation — 2026-11-11

Implemented Sharp portrait tooling/image inventory, Satori-based build-time sharing covers, on-demand MapLibre journey maps and a GitHub Actions quality workflow with Playwright, axe, Linkinator and Lighthouse CI.

- Production build and TypeScript: passed, real Google fonts (no font response mocks).
- Registered social cards: 164, 1200×630 JPEG. Long-title card contact sheet visually checked.
- Image inventory: 779 raster assets, none unreadable. Legacy weight/resolution findings remain recommendations.
- Route projection tests: 2 passed, including existing-coordinate precedence, unknown/invalid stops and repeated locations.
- Current journey suite: 83 passed after concurrent journey-content updates completed.
- Local internal-link crawl: 8,136 discovered URLs, zero broken. Schema Place entries retain names but omit URL references for unpublished destinations (Yunnan, Lijiang, Shaxi, Yangshuo).
- Chromium, Firefox, WebKit and iPhone Safari emulation checked server-rendered preview markup, optional map lifecycle, mobile width and JPEG responses. axe scans the map in Chromium. Firefox software rendering avoids a macOS test-runner GPU crash; running axe and then activating WebGL in that engine was unstable, so axe is deliberately scoped to Chromium.
- Mobile map visually checked at 390px, including loaded physical basemap. Worker assets are versioned and served locally, fixing the bundled module-worker loading failure.
- Lighthouse: 3 runs each on homepage and family tour with mobile throttling. SEO 100 for both; accessibility 97/100 respectively. Performance ranges: homepage 81–84, family tour 76–81. LCP approximately 4.4–6.0 seconds triggered warnings; performance is not claimed fully optimized. Best practices scored 77; reports retain underlying findings. CLS budget did not fail.

Reports: ignored `artifacts/quality/links.json`, `artifacts/media/library.json`, `artifacts/lighthouse/`, `playwright-report/`. Usage: `docs/project/BRAND_TOOLS.md`.

Scope: no HubSpot form/submission changes, no mobile sticky CTA, no new booking prices or itinerary promises. Other concurrent source/content changes were preserved. Build-time generated media is intentionally ignored and rebuilt before each production build. This implementation has not been committed or deployed.

Known baseline limitation: completed Next Suspense segments are present in server HTML but the existing global loading shell uses framework scripts to reveal them. The markup test does not claim a fully usable site with JavaScript disabled.
