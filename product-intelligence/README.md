# AVIORA Product Intelligence

This directory is the source of truth for AVIORA's inbound-China product research.

It deliberately separates:

- `observed`: facts visible on a cited source.
- `inferred`: strategic interpretation, never presented as a fact.
- `UNKNOWN`: information that was not publicly verifiable.
- `ESTIMATE`: a planning assumption that must be checked with suppliers or keyword tools.

## Data

- `data/competitor-products.json`: 20 verified competitor products and score inputs.
- `data/aviora-products.json`: 10 proposed AVIORA products with commercial and SEO strategy.
- `data/market-signals.json`: category validation and Google Autocomplete proxy signals.
- `data/competitor-products.csv`: generated flat export.
- `data/aviora-products.csv`: generated flat export.
- `data/product-intelligence.sqlite`: generated SQLite database.

## Reports

- `reports/2026-08-11-market-intelligence.md`: market overview, leaderboard, Top 10 teardown, market gaps, portfolio and five launch priorities.

## Commands

```bash
pnpm intel:score
pnpm intel:validate
pnpm intel:db
pnpm intel:update
pnpm intel:refresh
```

`intel:update` checks official product URLs, records status/title/H1/content hashes under `snapshots/`, and reports material changes. It does not silently overwrite editorial facts or prices.

## Scoring

All six inputs are scored from 0 to 100 and weighted as follows:

| Dimension                   | Weight |
| --------------------------- | -----: |
| Search demand               |    20% |
| Competitive validation      |    15% |
| Product appeal              |    15% |
| Conversion potential        |    15% |
| Differentiation opportunity |    15% |
| Commercial value            |    20% |

Search scores are directional research scores, not claimed monthly search volumes. Until a licensed keyword data source is connected, `keywordVolume` remains `UNKNOWN`.

## Operating Rule

Do not launch a product unless the record can answer this question clearly:

> Why would a Western traveler choose AVIORA over the strongest five alternatives?
