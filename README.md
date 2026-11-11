# AVIORA China Travel

Production China travel website built with Next.js App Router, React, strict TypeScript and Tailwind CSS v4. Includes private journeys, destination guides, the journal, company information and HubSpot enquiries.

## Development and verification

- `pnpm install --frozen-lockfile` — install locked dependencies (Node.js 24).
- `pnpm dev` — development server.
- `pnpm build` — generate map workers and social images, audit content, then compile the production app.
- `pnpm preview` — serve a snapshot of the latest production build on an available local port (3148 by default). Later builds do not replace this preview's Next.js assets.
- `pnpm preview:fresh` — build, then start that preview.
- `pnpm lint`, `pnpm typecheck`, `pnpm test:unit` — source checks and all unit tests.
- `pnpm exec playwright install chromium firefox webkit` — install browsers before the release check.
- `pnpm check:release` — lint, types, unit tests, build, media audit, then SEO/schema, browser and internal-link checks against a fresh owned local server. Stops on failure and shuts down its server.
- `pnpm audit:performance` — separate Lighthouse checks on the homepage and flagship family journey.

The Site quality workflow runs the same release gate and Lighthouse on main/PRs. Generated assets, test reports and build snapshots are ignored by Git and format/lint tools.

## Source ownership

- `app/` — routes, metadata, sitemap, robots and request handling. Rendering intentionally uses request-scoped CSP nonces; a successful build does not mean every route is static HTML.
- `content/tours/` — tour data; `catalog.ts` supplies discovery cards and pricing visibility. Keep business terms and availability claims verified.
- `content/journal/` and `content/blog/` — typed journal registry and Markdown assets. `content/journal/public-manifest.ts` owns the public journal slug list, shared by routing guards.
- `features/tours/detail/` — tour composition, booking summary and active `tour-journey.module.css`.
- `components/` — shared UI, navigation, enquiry embeds, maps and SEO components.
- `config/`, `lib/` — site configuration, metadata/schema helpers and shared domain logic.
- `styles/globals.css` — shared visual tokens and global styles.
- `scripts/`, `tests/` — build preparation, content/release audits and browser/unit checks.
- `docs/` — operating notes and dated audit evidence; historical reports describe their recorded snapshot.

HubSpot remains the enquiry provider. Browser tests use an isolated provider fixture and do not create real leads. Maps show a local geographic preview before loading OpenFreeMap interactively; unavailable external tiles retain the local fallback. See `docs/project/BRAND_TOOLS.md` for tool and asset details.

## Deployment

Production is hosted on Vercel at https://www.chinaprimedmc.com. Run the release gate before publishing. A Git commit, a push and a production deployment are separate states: verify the production alias and deployment timestamp rather than treating a clean branch as proof that local work is live.
