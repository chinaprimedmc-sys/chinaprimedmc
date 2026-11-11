import type { StyleSpecification } from "maplibre-gl";
import baseStyle from "@/public/maps/aviora-geographic-style.json";

/** OpenFreeMap Liberty, with restrained relief and English context labels. */
export function geographicMapStyle(colors: { water: string; ink: string; surface: string }) {
  const style = structuredClone(baseStyle) as StyleSpecification;
  for (const layer of style.layers) {
    if (layer.id === "natural_earth" && layer.type === "raster") {
      layer.paint = { ...layer.paint, "raster-opacity": 0.38, "raster-saturation": -0.65 };
    }
    if (layer.id === "boundary_3" && layer.type === "line") {
      layer.minzoom = 4;
      layer.paint = { ...layer.paint, "line-opacity": 0.6 };
    }
    if (layer.id === "label_state" && layer.type === "symbol") layer.minzoom = 4.5;
    if (layer.id === "water" && layer.type === "fill") {
      layer.paint = { ...layer.paint, "fill-color": colors.water };
    }
    if (layer.type === "symbol" && /^(label_|water_name|waterway_line_label)/.test(layer.id)) {
      layer.layout = {
        ...layer.layout,
        "text-field": [
          "coalesce",
          ["get", "name_en"],
          ["get", "name:en"],
          ["get", "name:latin"],
          ["get", "name"],
        ],
      };
      layer.paint = { ...layer.paint, "text-color": colors.ink, "text-halo-color": colors.surface };
    }
  }
  return style;
}
