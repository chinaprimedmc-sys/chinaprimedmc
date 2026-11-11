/** Presentation coordinates only. Existing itinerary coordinates always take priority. */
export type RouteMapStop = {
  name: string;
  days?: string;
  coordinates?: { latitude: number; longitude: number };
};
export type LocatedRouteStop = RouteMapStop & {
  coordinates: { latitude: number; longitude: number };
  order: number;
};

const cityCentres: Record<string, [number, number]> = {
  beijing: [116.4074, 39.9042],
  "xi'an": [108.9398, 34.3416],
  xian: [108.9398, 34.3416],
  chengdu: [104.0668, 30.5728],
  shanghai: [121.4737, 31.2304],
  guilin: [110.2991, 25.2742],
  yangshuo: [110.4966, 24.7785],
  dali: [100.2676, 25.6065],
  shaxi: [99.8507, 26.3194],
  lijiang: [100.2253, 26.8721],
  "shangri-la": [99.7065, 27.8297],
  chongqing: [106.5516, 29.563],
  zhangjiajie: [110.4792, 29.1171],
  leshan: [103.7656, 29.5521],
  jiuzhaigou: [103.918, 33.2601],
};

export function locateRouteStops(stops: readonly RouteMapStop[]): LocatedRouteStop[] {
  return stops.flatMap((stop, index) => {
    const key = stop.name.toLowerCase().replace(/[’‘]/g, "'").trim();
    const centre = cityCentres[key];
    const coordinates =
      stop.coordinates ?? (centre ? { longitude: centre[0], latitude: centre[1] } : undefined);
    if (
      !coordinates ||
      !Number.isFinite(coordinates.latitude) ||
      !Number.isFinite(coordinates.longitude) ||
      Math.abs(coordinates.latitude) > 85 ||
      Math.abs(coordinates.longitude) > 180
    )
      return [];
    return [{ ...stop, coordinates, order: index + 1 }];
  });
}

/** Geographic coordinates in Mercator degrees, shared by local basemap and route. */
export function mercatorPoint(coordinates: { latitude: number; longitude: number }) {
  return {
    x: coordinates.longitude,
    y: (-Math.log(Math.tan(Math.PI / 4 + (coordinates.latitude * Math.PI) / 360)) * 180) / Math.PI,
  };
}
export function routeProjection(stops: readonly LocatedRouteStop[]) {
  const points = stops.map(({ coordinates }) => mercatorPoint(coordinates));
  const minX = Math.min(...points.map((p) => p.x)),
    maxX = Math.max(...points.map((p) => p.x));
  const minY = Math.min(...points.map((p) => p.y)),
    maxY = Math.max(...points.map((p) => p.y));
  const scale = Math.min(480 / Math.max(maxX - minX, 8), 210 / Math.max(maxY - minY, 6));
  const project = (x: number, y: number) => ({
    x: 320 + (x - (minX + maxX) / 2) * scale,
    y: 165 + (y - (minY + maxY) / 2) * scale,
  });
  return {
    points: points.map((p) => project(p.x, p.y)),
    background: { ...project(-180, -180), width: 360 * scale, height: 360 * scale },
  };
}
export function projectRoute(stops: readonly LocatedRouteStop[]) {
  return routeProjection(stops).points;
}
