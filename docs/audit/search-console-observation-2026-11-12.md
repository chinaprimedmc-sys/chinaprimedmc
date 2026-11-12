# Search Console observation — 2026-11-12

## Directly observed evidence

Read-only Chrome accessibility text and screenshot from the already signed-in Search Console property `https://www.chinaprimedmc.com/`:

- Report: Page indexing → Crawled - currently not indexed.
- Report last update: 11/6/26 as displayed. This is not a fresh crawl performed by this audit.
- Affected URLs: 34. Only the first 10 examples were visible; no full export was obtained.
- Validation started: 11/11/26, already present when opened. This task did not initiate validation or request indexing.

| Visible example                                        | Last crawled as displayed | Interpretation                                                                                                    |
| ------------------------------------------------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `/journal/are-china-group-tours-too-fast-for-seniors`  | Nov 8, 2026               | HTML article candidate for individual inspection                                                                  |
| `/home/editorial/philosophy-family-friendly.avif`      | Oct 25, 2026              | Image asset; do not count as a missing article                                                                    |
| `/home/story-optimized/culture-013.avif`               | Sep 23, 2026              | Image asset                                                                                                       |
| `/home/story-optimized/culture-031.avif`               | Sep 11, 2026              | Image asset                                                                                                       |
| `/journal/china-accommodation-registration-foreigners` | Sep 2, 2026               | HTML article candidate for individual inspection                                                                  |
| `/journal/first-trip-to-china-planning-guide`          | Aug 27, 2026              | HTML article candidate for individual inspection                                                                  |
| `/journeys/western-china-tibet-edge`                   | Aug 16, 2026              | Legacy-looking URL; current HTTP/intent must be inspected                                                         |
| `/journeys/inner-mongolia-cultural-5-day`              | Aug 15, 2026              | Legacy-looking URL; no replacement assumed                                                                        |
| `/journeys/scenic-china-peaks-rivers-rice-terraces`    | Aug 15, 2026              | Legacy-looking URL; no replacement assumed                                                                        |
| `/tours/first-china-beautifully-paced`                 | Jul 29, 2026              | Local config has a permanent redirect to the 10-day Beijing–Xi’an–Shanghai tour; production response not verified |

The displayed report update and row crawl dates are recorded as shown, even though one row is later than the displayed report update. Do not infer freshness or resolve that inconsistency without URL inspection.

## Action supported by this evidence

The seniors hub now directly recommends the existing group-versus-private pacing article. The shared article template also derives a return link from this same reading configuration. This connects a specifically observed unindexed HTML article to a relevant audience hub without creating a duplicate article or changing its canonical.

The first-trip article already appears in the first-time audience hub’s reading list. Its unindexed status does not prove a missing-link problem. Accommodation registration remains a different practical topic; do not force it into unrelated audience sections solely to add links.

Do not block the image URLs in robots or redirect legacy URLs to unrelated products based only on this report. For each legacy URL, inspect the live response and actual replacement intent; a retired route with no equivalent may appropriately remain gone. Redirect verification requires production evidence.

## Evidence missing at the initial observation

The Performance link changed Chrome’s URL and tab title, but the page body and screenshot still showed the indexing report. Therefore no clicks, impressions, CTR, positions, date range or query data were obtained. Do not report a traffic baseline or attribute growth to the local changes.

The observed page does not establish the indexing state of About, Company, Founder or the six new audience guides. Each needs URL inspection after confirming the deployed version. No sitemap submission, index request, export, deployment or external message was performed.

Native Chrome access is available but returned very slowly; browser extension access remains unavailable. Shell DNS failure and this cached/loaded browser report are different observations. Neither proves the production site is down.

## Local validation after the content link change

Production compilation, TypeScript and page generation passed. `pnpm audit:about-search` passed for 34 rendered pages, including the newly connected pacing article: core pages within two links of the homepage, supporting articles within three, with return links and fragment checks. The 12 focused brand/search tests, targeted ESLint, formatting and diff checks passed. This verifies the local change; it does not show that the reported URL has subsequently been indexed.

## Follow-up observation and service clarity

Reopening the Performance report still showed the old indexing body. After a normal reload, the accessible page body was empty. No query or traffic data was available; this is not evidence of zero traffic or a failed property.

About now directly answers whether private travel includes a guide and vehicle every day, and whether visitors can book a private day within their own trip. These address service boundaries already described in the existing products: independent time is not automatically guided, driver-only service is not automatically a guided tour, and the written proposal controls inclusions. They are editorial additions based on service scope, not claims that these are measured Search Console queries. Appending these answers preserves the existing numbered answer anchors. About’s schema derives the same visible answers from the shared content source.

## Later successful Performance reading

The report subsequently loaded: Web, 3 months, August 10–November 9, 2026, 274 clicks, 27.2K displayed impressions, 1% displayed CTR, average position 12.2. Ten of 747 displayed query rows were read. See `search-performance-priorities-2026-11-12.md` and the baseline CSV for scope. Query-to-page assignment, exposure sorting, AI feature results and new-page index status remain unverified. A subsequent native scroll returned `noWindowsAvailable`. Earlier statements about unavailable Performance data describe the initial attempts only.

## AI report access attempt after the 54-target update

Native Chrome again showed the existing Web Performance body (274 clicks, 27.2K displayed impressions, August 10–November 9); the address bar still contained a query/page filter while the body showed unfiltered query rows. This is not a verified filtered report.

The body exposed a link labeled “Open the Google Search generative AI features performance report.” Two attempts to click that observed link failed with “Computer Use is not active” (the second followed a successful rebind with cua.getApp and a fresh accessibility tree). No AI report body, AI metrics or page attribution was obtained. The repeated interaction error is a browser-control blocker, not evidence of zero AI visibility or a production-site fault. No external state was changed or index request submitted.

Do not infer AI Overview inclusion from the existence of the navigation link. Continue the specific report verification after browser interaction is restored; do not repeat successful local tests as a substitute.
