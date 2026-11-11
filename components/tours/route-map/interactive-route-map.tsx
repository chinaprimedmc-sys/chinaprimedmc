"use client";

import { useEffect, useRef, useState } from "react";
import {
  Map,
  NavigationControl,
  LngLatBounds,
  setWorkerUrl,
  getVersion,
  Marker,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { geographicMapStyle } from "@/lib/tours/geographic-map-style";
import type { LocatedRouteStop } from "@/lib/tours/route-map";
import styles from "./route-map.module.css";

export default function InteractiveRouteMap({
  stops,
  onReady,
  onUnavailable,
}: {
  stops: LocatedRouteStop[];
  onReady: (ready: boolean) => void;
  onUnavailable: (unavailable: boolean) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!container.current) return;
    let map: Map | undefined;
    let disposed = false;
    let loaded = false;
    let terminalFailure = false;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
      const tokens = getComputedStyle(container.current);
      const color = (name: string) => tokens.getPropertyValue(name).trim();
      const bounds = new LngLatBounds();
      const coordinates = stops.map((stop) => {
        const point: [number, number] = [stop.coordinates.longitude, stop.coordinates.latitude];
        bounds.extend(point);
        return point;
      });
      setWorkerUrl(`/maps/vendor/${getVersion()}/maplibre-gl-worker.mjs`);
      map = new Map({
        container: container.current,
        attributionControl: false,
        scrollZoom: false,
        cooperativeGestures: true,
        dragRotate: false,
        pitchWithRotate: false,
        bounds,
        fitBoundsOptions: { padding: { top: 74, bottom: 112, left: 88, right: 88 }, maxZoom: 7 },
        style: geographicMapStyle({
          water: color("--map-water"),
          ink: color("--color-muted"),
          surface: color("--color-surface"),
        }),
      });
      map.on("style.load", () => {
        if (!map || disposed) return;
        map.addSource("aviora-route", {
          type: "geojson",
          data: { type: "Feature", properties: {}, geometry: { type: "LineString", coordinates } },
        });
        map.addLayer({
          id: "aviora-route-halo",
          type: "line",
          source: "aviora-route",
          paint: { "line-color": color("--color-surface"), "line-width": 6, "line-opacity": 0.8 },
        });
        map.addLayer({
          id: "aviora-route",
          type: "line",
          source: "aviora-route",
          paint: {
            "line-color": color("--color-forest"),
            "line-width": 3,
            "line-dasharray": [2, 2],
          },
        });
      });
      for (const stop of stops) {
        const label = document.createElement("div");
        label.className = styles.cityMarker;
        const number = document.createElement("span");
        number.className = styles.cityNumber;
        number.textContent = String(stop.order);
        const name = document.createElement("span");
        name.className = styles.cityName;
        name.textContent = stop.name;
        label.append(number, name);
        if (stop.days) {
          const days = document.createElement("span");
          days.className = styles.cityDays;
          days.textContent = stop.days;
          label.append(days);
        }
        new Marker({ element: label, anchor: "top", offset: [0, -13] })
          .setLngLat([stop.coordinates.longitude, stop.coordinates.latitude])
          .addTo(map);
      }
      const resize = new ResizeObserver(() => map?.resize());
      resize.observe(container.current);
      map.once("remove", () => resize.disconnect());
      map.addControl(new NavigationControl({ showCompass: false }), "top-right");
      const unavailable = () => {
        if (!disposed) {
          terminalFailure = true;
          clearTimeout(timeout);
          setFailed(true);
          onReady(false);
          onUnavailable(true);
        }
      };
      timeout = setTimeout(() => {
        if (!loaded) unavailable();
      }, 15000);
      map.on("load", () => {
        if (terminalFailure || disposed) return;
        loaded = true;
        clearTimeout(timeout);
        if (!disposed && container.current) {
          container.current.dataset.mapReady = "true";
          onReady(true);
        }
      });
      map.on("error", () => {
        // An isolated optional tile/glyph failure must not remove an already usable map.
        if (!loaded) unavailable();
      });
      const canvas = map.getCanvas();
      canvas.setAttribute(
        "aria-label",
        "Interactive journey map. Use arrow keys to pan and plus or minus to zoom. The numbered route list remains above.",
      );
      canvas.addEventListener("webglcontextlost", () => {
        if (!disposed) {
          setFailed(true);
          onReady(false);
          onUnavailable(true);
        }
      });
    } catch {
      // Browser without WebGL retains the static preview and full route list.
      queueMicrotask(() => {
        if (!disposed) {
          setFailed(true);
          onReady(false);
          onUnavailable(true);
        }
      });
    }
    return () => {
      disposed = true;
      clearTimeout(timeout);
      map?.remove();
    };
  }, [stops, onReady, onUnavailable]);
  return (
    <>
      <div className={styles.canvas} ref={container} data-interactive-route-map hidden={failed} />
    </>
  );
}
