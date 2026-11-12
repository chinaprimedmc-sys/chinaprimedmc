# Published starting prices — 2026-11-11

Latest day-service review: Shanghai USD 349, Xi’an USD 299, Chengdu USD 279 and Li River USD 499 per person on a two-adult basis. Service scope is unchanged. See `2026-11-11-day-tour-editorial-price-review.json` for explicit internal assumptions and stress scenarios; no supplier quote or market acceptance was verified. All 14 multi-day rates remain unchanged in this editorial pass. Business pricing now explicitly applies to its 4-day / 3-night example.

Subsequent individual review: Mutianyu was revised from USD 249 to USD 349 per person, retaining its existing inclusions (no included lift or lunch). See `../audit/mutianyu-product-seo-geo-2026-11-11.md`. The original batch review below is an implementation history, not the current authority for that one rate; `published-prices.ts` is the current numeric source.

The owner-approved revised rates from `2026-11-11-pricing-robustness-review.md` are now implemented for all 19 public journeys. The numeric source is `content/tours/published-prices.ts`.

## Public presentation

- Normal price displays use `From USD 3,290` (English thousands separators), without an adjacent per-person or party-size suffix.
- Cards, homepage recommendations, destination cards, mobile matching, detail booking summaries, WhatsApp inquiry context, JSON-LD starting offers and both llms routes use the same resolved rates.
- Detailed pricing information and accessible labels retain the per-person basis. Multi-day starting rates normally assume two adults sharing one room outside peak periods; day services assume two adults. The family journey assumes two adults and two children aged 6–11 sharing two rooms.
- The family starting rate is USD 5,290 per person; the corresponding four-person total is USD 21,160.
- Changing the requested guest count retains the published starting rate and its stated basis. It does not calculate a personalized quote.
- Beijing five-day inclusions now match the approved separate guide and driver cost assumption. Wellness room wording reflects the confirmed party.

## Search and verification

`published-from` records owner approval to display these modeled starting rates. It does not assert supplier cost verification. The supplier-verified slug set remains empty. Starting offers state the currency, per-person unit and basis without inventing availability. Unknown legacy amounts remain withheld.

## Validation

- Journey suite: 102 tests passed, including rendered cards and booking price components, all 19 rate values, guest selections, inquiry/schema parity, llms output and family/Beijing consistency.
- TypeScript passed; affected-file ESLint passed after removing an unused destructured parameter.
- Destination, journey-link, journal-search, journal-editorial, journal-quality and journal-governance audits passed.
- Production webpack build passed, including TypeScript and generation of 188 static pages. The standard build command encountered the sandbox restriction on the tsx CLI IPC pipe; social cards were successfully generated using `node --import tsx scripts/media/build-social-cards.ts`, followed by `pnpm exec next build --webpack`.
- Browser visual QA was not performed in this pricing pass. No deployment, push or commit was performed.
