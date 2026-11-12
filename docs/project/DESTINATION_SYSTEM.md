# Destination system

Updated: 2026-11-11

## Public guides and nationwide coverage

The guide directory is `/destinations`; individual guides use `/destinations/[slug]`.
There are currently 9 published guides: Beijing, Xi'an, Shanghai, Chengdu, Chongqing,
Leshan, Jiuzhaigou, Zhangjiajie, and Guilin & Yangshuo (slug `guilin`).

`/china-destinations` and its seven region pages describe nationwide service coverage.
A place mentioned there is not automatically a published destination guide. Only link
it to `/destinations/[slug]` after the complete guide passes the audit. The directory
links to nationwide coverage so visitors can still explore regions without full guides.

## Sources and consumers

- `content/destinations/explorer.ts`: canonical destination identity, region, interests,
  recommended stay, summary, hero reference, explicit route combinations and optional
  journey matching names. Region IDs follow the seven-region coverage system;
  Xi'an is northwest and Zhangjiajie is central. Human labels come from
  `getDestinationRegionLabel`.
- `content/destinations/editorial.ts`: seasonal guidance, orientation, experiences,
  planning notes, transport, lodging strategy, FAQs, stories and sample stay.
- `content/destinations/planning-guides.ts`: curated decision-led content for all nine
  guides: title/metadata, direct answer, service boundaries, stay/base comparisons,
  practical tradeoffs, ordered product recommendations, article links and onward advice.
  Optional stay/base headings support excursion destinations such as Leshan. Product
  count follows real relevance; do not invent a second product to fill a layout.
- `content/destinations/guide-assets.ts`: hero and gallery assets with actual dimensions
  and descriptive alternative text. Keep source photographs local to `public/`.
- `content/destinations/index.ts`: compatibility adapter generated from the sources
  above for site search and article relationships. It is no longer a second hand-written
  catalog. It retains the `Destination` shape; empty hotel/season arrays mean those
  details are not separately structured, not that availability or suitability is promised.
- `lib/cms/public-content.ts`: adapter used by the public directory and guide pages.
- `config/public-route-slugs.ts`: explicit public route release manifest.
- `app/sitemap.ts`: generates destination entries from the canonical explorer list.

`assets.ts` is shared legacy media used by tours and articles. It is not a destination
catalog and must not be deleted merely because a guide uses different photographs.

## Page structure

The active renderer is `features/destinations/editorial-destination-template.tsx`.
It provides hero and stay facts, in-page navigation, cultural context, reasons to visit,
food context, signature experiences, sample stay, season/planning guidance, practical
transport/lodging advice, explicit route combinations, published journeys, FAQs,
related planning articles and an inline enquiry section.

Stable guide anchors: `destination-experiences`, `destination-itinerary`,
`destination-practical`, `private-journeys`, `destination-faq`, and `enquire`.
The directory preserves `all-destinations`, has region/interest filters, an announced
result count, clear controls and a no-results path. All guides render on initial SSR.

## Relationships and conversion

Use `journeyIncludesDestination` for product matching. `journeyDestinationNames`
handles aliases such as `Guilin & Yangshuo` matching product tags `Guilin` or `Yangshuo`.
Do not compare only the combined display name with a product's single-city label.

`relatedDestinationIds` is an ordered editorial selection, not a proximity claim.
The UI calls these route combinations; a common region alone is not enough to imply
that places are nearby or easy to connect. Onward routing remains subject to schedules.
Article relationships recognize every published destination ID.

Every guide must link a real journey/day tour. A day tour is not a complete multi-night
package; copy must distinguish these. If future destinations have no published product,
add an explicit tailored-planning state before releasing them rather than fake a product.
The enquiry section records the current page through the existing form integration and
shows the destination name as context. The planning page validates the destination
query against the canonical catalog and retains that visible context beside its form. Existing analytics and form fields are retained.

## SEO and publishing

The route exports Metadata, canonical/social imagery, WebPage, TouristDestination,
FAQPage and Breadcrumb JSON-LD. The directory exposes its destination collection count.
FAQ markup describes visible questions; it does not promise a search rich result.

Guilin's old `/destinations/guilin` fallback redirect was removed so the guide can render.
The legacy singular `/destination/guilin` now redirects directly to the new guide.
Do not redirect a published destination slug to the directory.

## Adding a guide

1. Confirm demand, operational support, useful planning advice and a real journey match.
2. Add identity, seven-region ID, interests, stay and explicit route combinations in
   `explorer.ts`; keep the route slug stable after publication.
3. Add complete editorial fields, at least three FAQs and a realistic sample stay.
4. Add hero and at least two gallery images with accurate alt text and dimensions.
5. Add SEO description in `lib/cms/public-content.ts` and public route manifest entry.
6. Remove any redirect that intercepts the new public slug. Update relevant coverage,
   product and article links to the real guide.
7. Run `pnpm audit:destinations`, `pnpm typecheck`, relevant ESLint checks and `pnpm build`.
8. Inspect desktop/mobile layout, filters, anchor navigation, image crops and enquiry
   context before deployment. Never submit a test enquiry to production as a UI check.

## Automated gate

`pnpm audit:destinations` runs first in the production build. It checks unique slugs;
exact editorial/media/manifest/search/sitemap coverage; valid region and interest IDs;
complete planning fields, stories, itinerary and FAQs; real journey matching; valid
route combinations; hero consistency; local image existence; published-route redirect
collisions; and literal destination links across app/components/content/features/lib.
Dynamic URLs still require typechecking and rendered QA.

## Editorial refinement status

The first individual refinement pass is complete for all nine guides as of 2026-11-11.
Destination-specific search-intent maps and implementation notes are in `docs/audit/`.
They assign destination, article and product roles without claiming measured keyword
competition. Metadata and visible answers use the curated source; attraction names and
product ItemLists mirror the curated guide, while FAQ markup uses visible answers.

Local destination audit, TypeScript, relevant lint/format and edited-file whitespace
checks passed at completion. Curated articles and ready product media were checked for
all nine guides. This is an editorial milestone, not deployment clearance: current
supplier/access verification and desktop/mobile rendered review remain separate.
No commit, push or deployment was performed for this pass.

## Expansion backlog

Guilin & Yangshuo is the first added guide because a real product, photography, articles
and an existing internal link already support it. The next candidates are Hangzhou,
Suzhou, Guangzhou, Shenzhen, Harbin, Dunhuang and Huangshan. Prioritize using actual
search enquiries, published products and available local knowledge; there is no promise
to publish every place mentioned in the coverage pages. Do not manufacture hotel,
permit, access, price, timetable or service claims to fill a template.

## SEO / GEO consistency audit — 2026-11-11

See `docs/audit/destinations-seo-geo-audit-2026-11-11.md` for evidence and limits.
Destination titles must survive `createMetadata` without truncation. Social metadata
uses the actual hero dimensions and alt text. Attraction entities belong to WebPage
`mentions`; do not use `containsPlace` for a list that also includes nearby excursions.
Publisher identity belongs to the WebPage, not a provider relationship on the destination.
The visible guide links to the editorial and verification policy.

`lib/content/destination-search-guide.ts` generates destination sections for both
`llms.txt` and `llms-full.txt` from visible guide data. The shorter file includes answers,
service scope and qualified product links; the full file adds stays, hotel areas,
planning choices, FAQs and supporting articles. These files supplement normal HTML
and are not required for indexing or a guarantee of AI citations.

The destination audit now checks effective title/canonical/indexability, unique metadata,
actual article-filter eligibility and destination coverage/content parity in both AI files.
The normal production build passed all content gates but failed while downloading
Inter and Newsreader because `fonts.googleapis.com` could not resolve. TypeScript and
relevant ESLint checks passed; rendered production/browser verification remains pending.

## Planning-to-tour progression — 2026-11-11

Each planning guide now requires `routeAdvice`, a destination-specific explanation of
which published route fits which need. An optional `routeHeading` handles cases such as
Leshan, where the published product is a Chengdu itinerary with an optional excursion.
The template answers fit, days, sights, sample itinerary, season, transport and hotel
questions before cultural/food context and tour comparison. Hero and sample-itinerary
comparison links target `#private-journeys`; product cards keep tracked links to real
products. Scope qualifications appear at product comparison. Onward inspiration follows
that comparison. Stable anchors now also include `destination-stay` and
`destination-hotels`. Both AI reading files reuse `routeAdvice`, checked by the audit.

## Direct planning answers and source scope — 2026-11-11

Each guide requires `stayAnswer`, `hotelAnswer`, `sightseeingQuestion`,
`sightseeingAnswer` and scoped `visitorResources`. The template renders each direct
answer before its detailed choices. The opening `answer` focuses on destination fit,
leaving day/night calculations to `stayAnswer`. Visitor resources follow the planning
choices; their `scope` must state what the source can support. Heritage references do
not establish current admission, sailing, accessibility or purchased-service inclusions.
WebPage citations reuse those visible references and scope descriptions.

Both AI reading files reuse the direct answers and scoped sources. The audit checks
content parity, required source scopes, duplicate references, index/follow and Google
snippet settings. See `docs/audit/destinations-ai-overviews-2026-11-11.md` for the
nine-question editorial map, source limitations and verification status. No ranking,
AI citation or live operating verification is implied by these changes.

## Product comparison and practical detail — 2026-11-11

`practicalPlanning` holds destination-specific timing, walking/access and cost advice.
It replaces repeated orientation/stay reminders in the template; each guide keeps four
tradeoffs. Each curated product requires `comparison.bestFor`, `comparison.localPlan`
and `comparison.importantChoice`. `DestinationJourneyCard` renders these before an
expandable detailed rationale, along with catalog duration and the shared price helper.
Complete tour duration and time in the current destination must remain distinct.

Single-product pages use singular itinerary labels. Product comparison follows practical
planning and precedes cultural/food context. Both AI reading files include practical
advice, comparison fields and shared duration/price presentation; the destination audit
checks their parity. Product itinerary changes require editorial review of local-day,
free-day, excursion and inclusion descriptions even if the audit remains green.

## Evidence register and enquiry context — 2026-11-11

See `docs/audit/destinations-evidence-register-2026-11-11.md` for 27 specific verification
items across all nine guides, evidence requirements, responsibility proposals and acceptance
criteria. Its creation date is not a verification date. External operating facts remain pending.

Destination product cards carry `from_destination`. `destinationOriginName` accepts this only
for a real curated guide/product relation. The product inline form receives the current journey
and valid originating destination; destination inline forms receive the destination. Lazy forms
reuse StartPlanningForm's visible notes, safe HubSpot prefill and manual contact fallbacks.
The existing generic `contextSummary` prop remains supported for other form callers.

Analytics uses `destination_slug` and `journey_slug` in addition to existing event fields.
Only published route identifiers are extracted from page URLs. No new attribution storage is
introduced. Event sending remains conditional on analytics consent. Origin parameters are
navigation context, not proof of a search acquisition channel or a complete multi-step funnel.
Run `node --test tests/destination-conversion.test.mjs tests/enquiry-context.test.mjs`.
Real analytics/CRM delivery and multi-step generic-page attribution need separate acceptance.

## Nationwide expansion — 2026-11-11

The user authorized full national expansion and guides without matching published tours.
This supersedes the earlier requirement that every guide have a product. Empty products
must produce a tailored-planning state, no product cards and no empty ItemList schema.
Expanded guides live in `content/destinations/expansion`, with explicit release selection;
the national candidate inventory never auto-publishes routes. Refer to
`NATIONAL_DESTINATION_EXPANSION_PLAN.md` and `NATIONAL_DESTINATION_COVERAGE.md`.
The inventory is not an exhaustive official list of all administrative cities.
