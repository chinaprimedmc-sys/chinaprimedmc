import { test } from "node:test";
import assert from "node:assert/strict";
import { locateRouteStops, projectRoute } from "../lib/tours/route-map";
test("operator coordinates override fallback and unknown stops keep order gaps", () => {
  const stops = locateRouteStops([
    { name: "Beijing", coordinates: { latitude: 40, longitude: 116 } },
    { name: "Unconfirmed stop" },
    { name: "Xi’an" },
  ]);
  assert.deepEqual(
    stops.map((stop) => stop.order),
    [1, 3],
  );
  assert.equal(stops[0].coordinates.latitude, 40);
  assert.equal(stops[1].coordinates.longitude, 108.9398);
  assert.equal(
    locateRouteStops([{ name: "Beijing", coordinates: { latitude: NaN, longitude: 116 } }]).length,
    0,
  );
});
test("schematic fits horizontal, vertical and repeated city locations", () => {
  for (const names of [
    ["Beijing", "Shanghai"],
    ["Beijing", "Beijing"],
    ["Dali", "Lijiang", "Shangri-La"],
  ]) {
    for (const point of projectRoute(locateRouteStops(names.map((name) => ({ name }))))) {
      assert.ok(Number.isFinite(point.x) && Number.isFinite(point.y));
      assert.ok(point.x >= 59.999 && point.x <= 580.001);
      assert.ok(point.y >= 49.999 && point.y <= 280.001);
    }
  }
});
