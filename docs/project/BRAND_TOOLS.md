# AVIORA brand media and release tools

## Brand photography

`pnpm audit:media` inspects local raster files and writes `artifacts/media/library.json`. Unreadable sources fail the command; legacy size/resolution findings are recommendations, not automatic edits.

Create a new 3:4 WebP without overwriting the original:

```sh
pnpm media:portrait public/images/original.jpg public/images/new-portrait.webp attention
```

The source must support at least 720px width. Review faces, architectural cropping and alt text before replacing a reference. Hero photography remains landscape.

## Social covers

`pnpm media:social` builds 1200×630 JPEGs for registered tours and journal articles using Next ImageResponse (Satori), Sharp, brand CSS tokens and local licensed fonts. `pnpm build` runs it automatically. No rendering API, remote photography requests or secret keys are needed.

Images and the hash manifest are generated under ignored `public/og/generated/`. Source changes invalidate the cache. Both OpenGraph and Twitter metadata use these images. Keep `assets/fonts` and its OFL notices in the repository. These are share images; they do not alter article photography.

## Journey maps

The route list remains the source of itinerary detail. A local Natural Earth geographic preview (relief, rivers and province boundaries) renders immediately. MapLibre loads only when the visitor opens the map, using an OpenFreeMap Liberty style with English context labels and restrained relief. Its tiles/fonts/sprites use https://tiles.openfreemap.org; only that map host is added to the image/connection CSP directives. No API token is needed. Existing tour coordinates take priority, with city-centre display coordinates as fallback. Unknown stops suppress the map rather than implying a false connection.

Lines connect itinerary stops and are not road routes, distances or travel times. Existing day/night labels appear on the itinerary markers. Source attribution is linked beneath the map so it cannot cover city labels. If external map requests fail, loading exceeds 15 seconds or WebGL is unavailable, the local geographic preview remains usable. The preview markup is server-rendered; the existing Next streamed page shell still needs its framework scripts to reveal completed Suspense segments. No mobile bottom action bar or form changes are introduced.

## Verification

```sh
pnpm typecheck
pnpm build
pnpm test:journey
pnpm exec playwright install chromium firefox webkit
pnpm test:browser
pnpm audit:performance
```

Playwright starts a production preview on port 3148. Set `PREVIEW_URL` to use an existing preview. Four projects cover desktop Chromium, Firefox, WebKit and mobile Safari emulation. The axe accessibility scan runs in Chromium; interactive behavior is checked in all four projects. Firefox uses software rendering for test-runner stability. Tests check server-rendered markup, lazy map activation, map accessibility, horizontal overflow and social image responses. This is engine/device emulation, not a substitute for physical-device testing.

For the full internal-link crawl, start `pnpm start --hostname 127.0.0.1 --port 3148` in another terminal, then run `pnpm audit:links`. Production canonical URLs are rewritten to the local preview; outside domains are skipped. Sitemap pages seed the crawl, so unlinked published pages are checked too. Reports are written under `artifacts/quality`.

Lighthouse starts a separate preview on port 3149 and collects three runs each for the homepage and flagship family tour. CLS above 0.1 fails; initial score/LCP thresholds warn until real measurements establish stable budgets. Results include third-party integrations as actually loaded; HubSpot is not mocked or submitted. Reports are in `artifacts/lighthouse`.

`.github/workflows/site-quality.yml` repeats build, journey, media, browser, link and performance checks for main/PRs and uploads reports. It verifies releases; it does not publish a deployment. Existing unrelated test failures must be resolved before a green release.

Upstream tools: [Sharp](https://github.com/lovell/sharp), [Satori](https://github.com/vercel/satori), [MapLibre GL JS](https://github.com/maplibre/maplibre-gl-js), [Playwright](https://github.com/microsoft/playwright), [axe-core](https://github.com/dequelabs/axe-core), [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci), [Linkinator](https://github.com/JustinBeckwith/linkinator).
