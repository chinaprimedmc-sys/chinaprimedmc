# Jiuzhaigou destination editorial refinement

Local implementation: 2026-11-10. No commit, push or deployment.

## Editorial and service scope

- Separate the mountain transfer from the rail/flight segment and actual park entrance.
  Explain two-night focused, three-night flexible and longer regional stays.
- Compare park-entrance-area, farther resort and connection-specific overnight choices
  by actual road access, meals, heating, lifts and the next day's route.
- Explain shared park buses, boarding and remaining walking. No private-vehicle access,
  step-free or guaranteed altitude suitability is implied.
- Distinguish Huanglong as a separate, higher-elevation optional visit. Avoid numerical
  altitude or access claims without a current source review; no medical clearance is offered.
- Match the seven-day product's three Chengdu and three regional nights, park day,
  second-day choices and regional finish. A Chengdu return is separately arranged.
- Add six visible FAQs feeding existing markup, three contextual published-guide links,
  respectful cultural context and meal planning tied to the hotel and park schedule.
- Keep second park entry, Huanglong tickets and extra services subject to the proposal,
  rather than implying that another hotel night grants free or automatic access.

## Search intent

See `jiuzhaigou-search-intent-map.md`. Destination, specialist articles and the product
have distinct primary roles. No measured volume, difficulty, ranking or citation claim.

## Verification

Destination audit passed: 9 guides, 43 media assets and 118 source links. Relevant
ESLint/Prettier and edited-file whitespace checks passed. The full TypeScript check
reported an error outside this pass in
`content/tours/guilin-yangshuo-li-river-day-tour.ts:587`: `label` is not a property of
`RelatedDestination`. That concurrently edited product file was left untouched. All three
curated articles passed the actual template destination filter; the recommended product
matches Jiuzhaigou and has ready media. No current flight/train schedule, park opening, ticket slot, specific accessibility
arrangement or seasonal scenery was independently verified. No production build or rendered
browser QA is claimed for this content pass.
