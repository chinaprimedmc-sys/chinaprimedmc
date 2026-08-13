# AVIORA Commercial SEO Baseline

Recorded on 2026-08-13 before the commercial SEO rollout.

## Production inventory

- 75 indexable sitemap URLs
- 42 Journal pages: one hub and 41 article URLs
- 8 private tour product pages
- Core commercial routes: `/tours`, `/family-travel`, `/senior-travel`, `/styles/luxury`
- Trust state: `/why-us` redirects to `/about`; `/reviews` returns 404
- Price guide remains unchanged during this rollout
- 29 commercial content pages contain at least one repeated image URL; later phases must reduce this
  before strict final validation

## Existing conversion tracking

- `cta_click`
- `whatsapp_click`
- `email_click`
- `form_start`
- `form_step_complete`
- `form_submit`
- `form_success`

CTA tracking supports placement and journey slug context. The planning form also records landing page,
referrer, UTM fields, GCLID, current journey and viewed journeys.

## Required guardrails

- Do not use `/home/beijing-forbidden-city.jpg`.
- Do not use `/home/beijing-forbidden-city.webp`.
- Do not use `/home/beijing-forbidden-city-1400.webp`.
- Do not display invented prices, reviews, ratings, team members, awards or license numbers.
- Use existing photography only and avoid duplicate image URLs on a commercial content page.
- Preserve unrelated working-tree changes and stage only files belonging to the active phase.

Run `node scripts/audit-commercial-baseline.mjs` against production or set `SEO_BASE_URL` to audit a
local deployment. Set `STRICT_IMAGE_DUPLICATES=1` for the final zero-duplicate acceptance check.
