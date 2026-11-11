# Geographic route maps

## Interactive map

`aviora-geographic-style.json` is an OSM Liberty style snapshot from
https://tiles.openfreemap.org/styles/liberty (2026-11-11). The style license is
included in `OSM-Liberty-LICENSE.md`. AVIORA adjusts relief opacity, water color
and English context labels in `lib/tours/geographic-map-style.ts`.

Tiles, glyphs, relief and sprites are served by https://tiles.openfreemap.org.
The renderer and external requests load only after the visitor opens the map.
No API token is required. OpenFreeMap/OpenMapTiles/OpenStreetMap attribution
comes from the tile source and remains visible in the map.

## Local geographic preview / network fallback

`china-geographic-context.svg` combines georeferenced Natural Earth relief with
50m land, rivers and province-boundary datasets, in a Mercator projection. It
works without external tile servers. Province labels are geographic context,
not additional tour stops. It contains no fabricated transport routes.

Regenerate deliberately with `node scripts/media/prepare-geographic-preview.mjs`.
Normal production builds use the checked-in asset and do not download basemaps.

Sources (Natural Earth data is public domain):

- https://github.com/nvkelso/natural-earth-vector/tree/master/geojson
- `ne_50m_land.geojson`
- `ne_50m_rivers_lake_centerlines.geojson`
- `ne_50m_admin_1_states_provinces_lines.geojson`
- Relief tiles: `https://tiles.openfreemap.org/natural_earth/ne2sr/3/{x}/{y}.png`
- Terms: https://www.naturalearthdata.com/about/terms-of-use/

`land.geojson` is the legacy Natural Earth 110m land file, retained for now;
the current geographic map does not request it.

Route lines connect city coordinates in itinerary order. They are not driving
or rail directions, durations or promises of a particular transport mode.
