# Journey decisions, service records and mobile maps — 2026-11-11

## Scope

Second optimization batch for shared tour detail pages. Preserve the existing visual language, HubSpot form, rounded controls and earlier journey-card alignment. No deployment or commercial source-data changes are part of this batch. Earlier pending workspace changes remain intact.

## Implementation

- Added a reusable decision summary directly after the short overview lead: existing catalog audience description, published pace, first two inclusions and exclusions, direct links to the daily plan and full service scope. The full original service strings remain intact; no walking estimates or accessibility promises are inferred.
- Moved the geographic route overview ahead of detailed service specifications and planning comparisons. Kept complete practicalities in a native disclosure rather than removing them.
- Linked the operating-company record, payment/change/cancellation terms and guest-feedback source information beside the service scope. Existing reviews now explicitly state they are website-published feedback across different journeys. These are not represented as independently verified or as reviews of every viewed product. Reduced repeated review counts in later sections.
- Mobile map previews now follow their actual aspect ratio instead of occupying a fixed tall stage. Numbered city/day labels remain readable below the graphic. Interactive maps load on request with additional height; unavailable map services retain the local preview. Unknown coordinates retain all stop names rather than drawing connections that omit stops.
- Kept prices, route definitions, Tour interfaces and content/tours business data unchanged during this batch. No new fixed bottom CTA was introduced.

## Validation

- `pnpm check:release` passed: strict lint, TypeScript, 118 unit tests, production build (188 generated entries), media checks, SEO (203 indexable URLs), homepage/schema/journal DOM audits, 92 browser tests across Chromium/Firefox/WebKit/mobile Safari, and 8,692 local link checks with zero broken links. Final log: `/tmp/aviora-second-batch-release-final.log`.
- Added browser checks for server-rendered decision text, native service disclosure, 320px route geometry, readable ordered stops, source attribution and day-tour links.
- Manually inspected desktop and mobile decision summaries, service-record links and mobile map screenshots. Also checked family, 10-day flagship, easier-pace and Mutianyu detail pages at 390px for horizontal overflow: none found.

## Testing boundary

The existing dynamic tour route streams through Next's loading boundary. With JavaScript entirely disabled, decision text is present in the response DOM but can remain in the hidden streaming container. The server-output test checks presence, while visibility and native disclosure are tested in normal browsers. This batch does not claim full no-JavaScript page usability or change the existing routing strategy.
