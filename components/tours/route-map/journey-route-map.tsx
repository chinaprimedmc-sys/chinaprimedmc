"use client";

import dynamic from "next/dynamic";
import { useId, useMemo, useState } from "react";
import { locateRouteStops, routeProjection, type RouteMapStop } from "@/lib/tours/route-map";
import styles from "./route-map.module.css";

const InteractiveMap = dynamic(() => import("./interactive-route-map"), {
  ssr: false,
  loading: () => (
    <p className={styles.loading} role="status">
      Loading the route map…
    </p>
  ),
});

export function JourneyRouteMap({ stops }: { stops: readonly RouteMapStop[] }) {
  const id = useId();
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const located = useMemo(() => locateRouteStops(stops), [stops]);
  // Keep every published stop readable even when coordinates are unavailable.
  const stopList = (
    <ol className={styles.legend} aria-label="Route stops in itinerary order">
      {stops.map((stop, index) => (
        <li key={`${stop.name}-${index}`}>
          <span className={styles.stopNumber} aria-hidden="true">
            {index + 1}
          </span>
          <span>
            <strong>{stop.name}</strong>
            {stop.days && <small>{stop.days}</small>}
          </span>
        </li>
      ))}
    </ol>
  );
  // Do not skip unknown stops and draw a misleading connection across them.
  if (located.length < 2 || located.length !== stops.length) return stopList;
  const { points, background } = routeProjection(located);
  return (
    <figure className={styles.figure} data-route-map>
      <div className={styles.stage} data-expanded={expanded || undefined}>
        <div className={styles.preview} hidden={ready}>
          <svg viewBox="0 0 640 330" role="img" aria-labelledby={`${id}-title ${id}-description`}>
            <title id={`${id}-title`}>{stops.map((stop) => stop.name).join(" to ")}</title>
            <desc id={`${id}-description`}>
              Geographic overview of China with terrain, rivers and province context. Numbered
              cities follow itinerary order. Dashed lines show connections, not actual roads.
            </desc>
            <foreignObject {...background}>
              {/* Native lazy loading keeps the full-resolution SVG off the critical path. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.basemap}
                src="/maps/china-geographic-context.svg"
                alt=""
                width={360}
                height={360}
                loading="lazy"
                decoding="async"
              />
            </foreignObject>
            <polyline
              className={styles.line}
              points={points.map((p) => `${p.x},${p.y}`).join(" ")}
            />
            {located.map((stop, index) => (
              <g key={`${stop.name}-${index}`}>
                <circle className={styles.point} cx={points[index].x} cy={points[index].y} r="13" />
                <text className={styles.number} x={points[index].x} y={points[index].y + 4}>
                  {stop.order}
                </text>
                <text
                  className={styles.label}
                  x={points[index].x}
                  y={points[index].y + (index % 2 ? 33 : -25)}
                >
                  {stop.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div
          id={`${id}-map`}
          hidden={!expanded}
          className={`${styles.interactive} ${ready ? styles.ready : styles.pending}`}
        >
          {expanded && (
            <InteractiveMap stops={located} onReady={setReady} onUnavailable={setUnavailable} />
          )}
        </div>
        {expanded && !ready && !unavailable && (
          <p className={styles.mapStatus} role="status">
            Loading detailed map…
          </p>
        )}
      </div>
      {stopList}
      {ready && (
        <p className={styles.attribution}>
          <a href="https://openfreemap.org" target="_blank" rel="noopener noreferrer">
            OpenFreeMap
          </a>
          {" · "}
          <a href="https://openmaptiles.org" target="_blank" rel="noopener noreferrer">
            © OpenMapTiles
          </a>
          {" · "}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
          >
            © OpenStreetMap contributors
          </a>
        </p>
      )}
      {unavailable && (
        <p className={styles.fallback} role="status">
          The interactive map is unavailable. The route preview remains available.
        </p>
      )}
      <figcaption className={styles.caption}>
        <span>Route overview · dashed lines connect stops, not actual roads.</span>
        <button
          type="button"
          className={styles.button}
          aria-expanded={expanded}
          aria-controls={`${id}-map`}
          onClick={() => {
            setReady(false);
            setUnavailable(false);
            setExpanded(!expanded);
          }}
        >
          {expanded ? "Close interactive map" : "Explore the route map"}
        </button>
      </figcaption>
    </figure>
  );
}
