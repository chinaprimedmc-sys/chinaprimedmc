# Geographic route map refinement — 2026-11-11

Replaced abstract land-only maps with geographic context for AVIORA journey pages.

- Initial preview: local Mercator SVG using Natural Earth relief, 50m land, rivers and province outlines. Existing city coordinates align with this projection. No external map requests occur before opening the interactive map.
- Interactive map: local OSM Liberty style snapshot on OpenFreeMap, with subdued relief, rivers, administrative boundaries, English city/place labels and AVIORA route overlays. Province boundaries are visible from zoom 4; province labels from 4.5.
- Stop labels include existing day/night strings without inferring transfers or changing itinerary data. Dashed lines connect stops; they do not assert road, flight or rail geometry.
- Mobile: bottom bounds padding reserves room for all three marker rows; linked OpenFreeMap/OpenMapTiles/OpenStreetMap attribution sits below the canvas rather than obscuring Shanghai.
- Reliability: 15-second initial load deadline, local geographic fallback if source requests fail or WebGL cannot initialize, and no false transition back to a hidden failed map after a delayed load event. A single optional tile error after successful loading does not remove the map.
- CSP: only `https://tiles.openfreemap.org` added to `img-src` / `connect-src`; script, frame, form and other hosts unchanged.
- No API token, HubSpot edits, mobile action bar, business-data changes or deployment.

Validation: production build generated 188/188 pages; TypeScript/lint passed. The 16 browser checks across Chromium, Firefox, WebKit and iPhone emulation passed, including blocked tile requests. Desktop 1440px and mobile 390px map captures reviewed; city names and existing day/night labels fit. Projection tests passed. The final province visibility tweak was followed by another production build and Chromium map check.

Sources/licenses and regeneration command: `public/maps/README.md` and `public/maps/OSM-Liberty-LICENSE.md`. Interactive map uses an external map service; the local preview remains available if that service is unreachable.
