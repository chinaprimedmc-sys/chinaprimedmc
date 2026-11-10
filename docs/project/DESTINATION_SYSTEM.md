# Destination system

Updated: 2026-11-10

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

## Expansion backlog

Guilin & Yangshuo is the first added guide because a real product, photography, articles
and an existing internal link already support it. The next candidates are Hangzhou,
Suzhou, Guangzhou, Shenzhen, Harbin, Dunhuang and Huangshan. Prioritize using actual
search enquiries, published products and available local knowledge; there is no promise
to publish every place mentioned in the coverage pages. Do not manufacture hotel,
permit, access, price, timetable or service claims to fill a template.
