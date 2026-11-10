# Chongqing destination editorial refinement

Local implementation: 2026-11-10. No commit, push or deployment.

## Editorial scope

- Recommend two full city days / usually three nights; keep arrival, departure and
  optional Dazu extensions distinct from sightseeing time.
- Compare Jiefangbei/central Yuzhong, Chaotianmen and north-bank hotels by entrances,
  lobby levels, lifts, road access, room view and bridge transfers.
- Explain Hongya Cave viewing versus walking, cableway versus Liziba and the value
  of a connected night route rather than multiple cross-river photo stops.
- Add explicit mobility, steps, heat and pickup guidance; no step-free or empty-cabin
  guarantee. Current transport operation and exact access remain date-dependent.
- Match the one directly relevant published product: the 11-day Chengdu–Chongqing–
  Zhangjiajie journey. It has three Chongqing nights, one core city day and an open
  day. Open-day guiding, vehicle and Dazu are not automatically included.
- Link the two published Chongqing-relevant guides with descriptive labels.
- Six visible FAQs feed the existing FAQ markup. Add practical hotpot/noodle advice,
  including beef-fat broth, numbing pepper, spice, toppings and shared equipment.

## Search intent

See `chongqing-search-intent-map.md`. Primary destination, itinerary-research and
product-booking intents are distinguished. No measured keyword difficulty, volume,
ranking or low-competition claim is made.

## Verification

Destination audit passed: 9 guides, 43 media assets and 115 source links. Full
TypeScript, relevant ESLint/Prettier and whitespace checks for the edited files passed.
The repository-wide whitespace check reports unrelated trailing whitespace at
`app/about/page.tsx:344`; that file was not changed in this pass. Both curated
articles passed the actual template destination filter; the recommended product matches
Chongqing and has ready media in the catalog.
No current transport schedule, illumination time, queue length, site opening or hotel
access arrangement was independently verified for future dates. No production build
or rendered browser QA is claimed for this content pass.
