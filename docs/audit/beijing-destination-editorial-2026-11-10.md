# Beijing destination refinement

Local implementation: 2026-11-10. No commit, push or deployment performed.

## Intent

The destination guide helps international visitors choose Beijing, allocate nights,
select a hotel area, understand walking/transfer constraints, and select a real product.
It does not replace a product's inclusion list or a specialist ticketing article.
No search-volume or ranking claims have been inferred without Search Console data.

## Content delivered

- Direct answer covering Beijing's role, three full sightseeing days, and a separate Wall day.
- Explicit private guiding/road service boundaries: public attractions, security,
  ticket availability, walking, and date-specific mountain transport.
- Two-, three-, four- and five-night tradeoffs, distinguishing travel days from full days.
- Wangfujing/Dongcheng, hutong courtyard and Chaoyang/CBD hotel-area comparisons.
- Great Wall day separation, lift/step limitations, geographic grouping and reservations.
- Six FAQs with real answers; no new claims of special access or step-free sightseeing.
- Sample stay labels corrected to full sightseeing days plus an optional additional day.
- Onward advice for Xi'an and Shanghai.

## Product and article relationships

Ordered recommendations: Beijing private 5-day stay, Mutianyu private day, and
Beijing-Xi'an-Shanghai private 10-day journey. Each has a visible reason and distinct
use case. Hero, decision section, sample-stay and product-section entry points retain
existing analytics mechanisms with destination placement labels.

Selected reading: first-visit Beijing hotel areas, Great Wall section comparison,
and foreign-passport Forbidden City ticket planning. Links resolve to published articles.
No prices, lift inclusions, hotel availability or booking windows were invented.

## Search and machine-readable content

Dedicated H1/title/description; normal visible server-rendered answer prose;
public/search adapter metadata aligned; existing canonical and FAQ markup retained.
Only actual attraction names populate TouristAttraction entities for the edited guide.
Other guides omit that optional field until their named attractions are curated,
instead of labeling activity sentences as places. An ItemList mirrors the three visible
product recommendations, without invented offers or duplicate Product entities.

## Verification and limits

- Destination audit passed: 9 guides, 43 media assets and 112 literal destination links.
  It now also validates curated product relevance, article publication, onward advice,
  and planning-guide completeness.
- Relevant ESLint, full TypeScript and git whitespace checks passed.
- Production compilation passed with the existing temporary local font fixture via
  NEXT_FONT_GOOGLE_MOCKED_RESPONSES. This validates compilation, not live Google Fonts.
- No new independent fact-review date, author credentials or official verification claim
  is displayed. Existing specialist articles remain the source of detailed dynamic rules.
- Desktop/mobile rendered visual QA and live-font build remain to be completed before
  treating this as deployment-ready. No ranking, AI citation or conversion lift is claimed.

## Next guide

Guilin & Yangshuo: distinguish gateway, countryside base, scheduled public cruise,
luggage continuity and Yangshuo-finish versus Guilin-return products. Do not copy Beijing's
city-stay model into a river/countryside destination.

## Second editorial pass

- Replaced abstract phrasing with concrete palace, neighborhood and food advice.
- Added family and older-parent planning decisions, including breaks, walking
  tolerance, hotel lifts and vehicle-to-entrance access.
- Clarified the sample days: Jingshan involves uphill steps; the Temple of Heaven
  and hutong combination needs a break; the Wall return evening stays flexible.
- Added contextual ticketing and Wall-section links. The audit checks that these
  links belong to the validated curated reading list. Curated article labels are
  now visible as descriptive link text.
- Made shared section headings more direct (sights, season and practical reading).
- Added `beijing-search-intent-map.md` to assign destination, article and product
  ownership. Keyword competition is unmeasured; no low-difficulty claim is made.

Second-pass validation: destination audit (9 guides / 43 assets / 112 source links),
full TypeScript check, ESLint on the changed content/template/audit files, and
`git diff --check` passed. No production build or rendered browser QA was rerun
for this editorial pass; the previous mock-font build result remains limited to
that earlier revision.
