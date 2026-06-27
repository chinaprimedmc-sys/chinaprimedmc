import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { coverageRegions } from "@/lib/coverageData";

export interface CoverageMapCity {
  name: string;
  x: number;
  y: number;
  regionId: string;
  note: string;
  labelDx?: number;
  labelDy?: number;
  anchor?: "start" | "middle" | "end";
}

export const coverageMapCities: CoverageMapCity[] = [
  { name: "Beijing", x: 67.7, y: 35, regionId: "north-china", note: "Capital gateway, Great Wall, imperial culture", labelDx: 2.1, labelDy: -1.6 },
  { name: "Datong", x: 63.1, y: 34.6, regionId: "north-china", note: "Buddhist grottoes and northern heritage", labelDx: -2, labelDy: -1.6, anchor: "end" },
  { name: "Pingyao", x: 61.5, y: 41, regionId: "north-china", note: "Walled merchant city and courtyard culture", labelDx: 1.7, labelDy: 2.4 },
  { name: "Hohhot", x: 60.9, y: 32.9, regionId: "north-china", note: "Inner Mongolia access and grassland culture", labelDx: -2, labelDy: 2.5, anchor: "end" },
  { name: "Shanghai", x: 75.1, y: 54.2, regionId: "east-china", note: "Global gateway, Bund, MICE, luxury FIT", labelDx: 2, labelDy: -1.2 },
  { name: "Suzhou", x: 73.8, y: 54, regionId: "east-china", note: "Classical gardens, canals, silk culture", labelDx: -1.6, labelDy: -2.1, anchor: "end" },
  { name: "Hangzhou", x: 73.2, y: 56.3, regionId: "east-china", note: "West Lake, tea, temples, refined leisure", labelDx: 1.7, labelDy: 2 },
  { name: "Huangshan", x: 70.5, y: 57.5, regionId: "east-china", note: "Yellow Mountain and Hui villages", labelDx: -1.6, labelDy: 2.2, anchor: "end" },
  { name: "Guangzhou", x: 63.1, y: 72.1, regionId: "south-china", note: "Cantonese food, trade, Greater Bay Area", labelDx: -1.6, labelDy: -1.8, anchor: "end" },
  { name: "Shenzhen", x: 64.2, y: 73.4, regionId: "south-china", note: "Innovation city and Hong Kong bridge", labelDx: -1.5, labelDy: 2.4, anchor: "end" },
  { name: "Guilin", x: 58.7, y: 67.3, regionId: "south-china", note: "Karst peaks, Li River, family scenery", labelDx: -1.6, labelDy: -1.8, anchor: "end" },
  { name: "Hong Kong", x: 64.4, y: 73.9, regionId: "south-china", note: "International extension and cruise gateway", labelDx: 1.8, labelDy: 2.3 },
  { name: "Chengdu", x: 49.6, y: 55.6, regionId: "southwest-china", note: "Pandas, Sichuan food, family programs" },
  { name: "Chongqing", x: 53.2, y: 57.9, regionId: "southwest-china", note: "Cyber city, hotpot, Yangtze gateway" },
  { name: "Zhangjiajie", x: 59, y: 58.8, regionId: "southwest-china", note: "Cinematic sandstone peaks" },
  { name: "Guiyang", x: 53.3, y: 64.3, regionId: "southwest-china", note: "Guizhou villages and karst culture" },
  { name: "Kunming", x: 47.8, y: 68.2, regionId: "southwest-china", note: "Yunnan gateway and ethnic diversity" },
  { name: "Lijiang", x: 44, y: 63.8, regionId: "southwest-china", note: "Old town, Naxi culture, highland routes" },
  { name: "Xi'an", x: 56.7, y: 47.3, regionId: "northwest-china", note: "Terracotta Army and Silk Road start" },
  { name: "Lanzhou", x: 49.2, y: 43.5, regionId: "northwest-china", note: "Gansu corridor gateway" },
  { name: "Dunhuang", x: 35.8, y: 34.5, regionId: "northwest-china", note: "Mogao Caves and desert scenery" },
  { name: "Yinchuan", x: 52.8, y: 38.1, regionId: "northwest-china", note: "Ningxia and Muslim-friendly routing" },
  { name: "Urumqi", x: 25.5, y: 26.3, regionId: "northwest-china", note: "Xinjiang gateway and far-west routes" },
  { name: "Kashgar", x: 8.4, y: 35.9, regionId: "northwest-china", note: "Oasis culture, bazaars, Pamir access" },
  { name: "Luoyang", x: 61.9, y: 46.7, regionId: "central-china", note: "Ancient capital and Longmen Grottoes" },
  { name: "Wuhan", x: 64.6, y: 55.6, regionId: "central-china", note: "Yangtze hub and central China access" },
  { name: "Changsha", x: 62.6, y: 60.8, regionId: "central-china", note: "Hunan food and Zhangjiajie access" },
  { name: "Fenghuang", x: 57.7, y: 61.4, regionId: "central-china", note: "Riverside heritage town" },
  { name: "Lhasa", x: 30.6, y: 57.7, regionId: "western-china", note: "Tibet culture, Potala, sacred sites" },
  { name: "Xining", x: 46.2, y: 42.3, regionId: "western-china", note: "Qinghai plateau and monastery culture" },
  { name: "Shangri-La", x: 43.2, y: 61.7, regionId: "western-china", note: "Tibetan-influenced highland Yunnan" },
  { name: "Western Sichuan", x: 46.5, y: 56.8, regionId: "western-china", note: "Mountains, valleys, Tibetan villages" },
];

const CHINA_HAINAN_PATH = "M58.78 81.94 L57.52 83 L56.31 82.31 L56.27 80.41 L56.99 79.41 L58.6 78.79 L59.44 78.84 L59.77 79.69 L59.12 80.66 L58.78 81.94 Z";
const CHINA_MAINLAND_PATH = "M84.19 13.18 L86.74 13.89 L88.48 15.46 L89.07 17.54 L91.3 17.54 L92.58 16.67 L95 16.02 L94.23 18.01 L93.66 18.82 L93.16 21.24 L92.17 23.39 L90.39 23 L89.13 23.78 L89.52 25.68 L89.31 28.29 L88.56 28.35 L88.57 29.47 L87.62 28.17 L87.03 29.41 L84.77 30.36 L85 31.53 L83.73 31.45 L83.03 30.75 L82.03 32.32 L80.41 33.51 L79.21 34.93 L77.16 35.57 L76.08 36.61 L74.5 37.21 L75.28 36.19 L74.98 35.32 L76.14 33.84 L75.36 32.68 L74.08 33.46 L72.43 35 L71.52 36.43 L70.09 36.53 L69.34 37.56 L70.11 39.06 L71.31 39.42 L71.36 40.42 L72.52 41.06 L74.16 39.48 L75.47 40.34 L76.42 40.4 L76.65 41.56 L74.58 42.18 L73.89 43.37 L72.46 44.48 L71.71 46.03 L73.29 47.25 L73.87 49.42 L74.76 51.45 L75.76 53.15 L75.73 54.79 L74.81 55.4 L75.16 56.58 L76.03 57.26 L75.8 59.06 L75.43 60.82 L74.61 61.02 L73.54 63.41 L72.35 66.31 L70.99 68.95 L68.97 71 L66.93 72.86 L65.28 73.11 L64.38 74.09 L63.87 73.38 L63.04 74.48 L60.99 75.58 L59.44 75.92 L58.94 78.26 L58.13 78.39 L57.74 76.78 L58.09 75.93 L56.12 75.22 L55.43 75.58 L53.95 75.01 L53.25 74.11 L53.48 72.83 L52.14 72.43 L51.44 71.6 L50.18 72.78 L48.76 73.03 L47.59 73.02 L46.8 73.56 L46.04 73.89 L46.26 76.42 L45.48 76.36 L45.35 75.84 L45.3 74.92 L44.23 75.56 L43.59 75.16 L42.5 74.33 L42.93 72.49 L42 72.06 L41.65 70.02 L40.1 70.39 L40.28 67.77 L41.67 65.92 L41.73 64.1 L41.68 62.4 L41.04 61.88 L40.55 60.57 L39.7 60.74 L38.11 60.41 L38.61 59.48 L37.92 58.1 L36.88 59.03 L35.65 58.49 L33.96 59.9 L32.62 61.54 L31.44 61.82 L30.79 61.23 L30.02 61.17 L28.97 60.66 L28.18 61.22 L27.21 62.87 L27.09 61.12 L26.19 61.59 L24.48 61.37 L22.82 60.87 L21.63 59.89 L20.49 59.46 L20 58.4 L19.17 58.08 L17.69 56.64 L16.52 55.96 L15.91 56.49 L13.87 54.94 L12.43 53.54 L12.02 51.1 L13.07 51.4 L13.12 50.27 L12.53 49.14 L12.68 47.33 L11.11 44.74 L8.69 43.84 L8.26 42.15 L7.18 41.11 L6.91 40.48 L6.69 39.22 L6.74 38.36 L5.85 37.85 L5.37 38.08 L5 36.03 L5.42 35.52 L5.22 35.01 L6.62 33.96 L7.63 33.53 L9.18 33.83 L9.74 32.41 L11.62 32.15 L12.14 31.27 L14.45 30.07 L14.66 29.57 L14.54 28.31 L15.55 27.74 L14.23 23.89 L17.13 23.01 L17.89 22.52 L18.94 18.56 L21.85 19.29 L22.67 18.29 L22.74 16.07 L23.96 15.86 L25.07 14.39 L25.65 14.21 L26.03 15.75 L27.27 16.92 L29.36 17.75 L30.37 19.53 L29.81 22.12 L30.33 23.08 L32.08 23.46 L34.05 23.77 L35.83 25.14 L36.73 25.39 L37.4 27.43 L38.26 28.74 L39.88 28.69 L42.91 29.19 L44.86 28.88 L46.31 29.21 L48.48 30.55 L50.25 30.55 L50.9 31.24 L52.61 30.05 L54.98 29.28 L57.18 29.2 L58.89 28.42 L59.94 27.24 L60.97 26.49 L60.73 25.76 L60.27 24.91 L61.04 23.49 L61.86 23.69 L63.37 24.13 L64.83 22.96 L67.07 22.1 L68.14 20.64 L69.17 20.01 L71.31 19.72 L72.46 19.97 L72.62 19.18 L71.29 17.63 L70.12 16.93 L68.99 17.74 L67.54 17.4 L66.71 17.68 L66.33 16.78 L67.37 14.57 L68.08 12.9 L69.85 13.73 L71.91 12.34 L71.9 11.36 L73.22 9.02 L74.04 8.31 L74.02 7.09 L73.22 6.56 L74.43 5.46 L76.25 5.06 L78.2 5 L80.39 5.66 L81.68 6.47 L82.59 8.7 L83.14 9.66 L83.65 11.01 L84.19 13.18 Z";

export function CoverageMap({
  activeRegionId,
  onRegionHover,
  onRegionSelect,
}: {
  activeRegionId?: string;
  onRegionHover?: (regionId?: string) => void;
  onRegionSelect?: (regionId: string) => void;
}) {
  const activeRegion = coverageRegions.find((region) => region.id === activeRegionId) || coverageRegions[0];
  const activeCities = coverageMapCities.filter((city) => city.regionId === activeRegion.id);

  return (
    <div className="grid gap-px bg-[var(--brand-border)] lg:grid-cols-[1fr_0.42fr]">
      <div className="relative min-h-[520px] overflow-hidden bg-[var(--brand-black)] p-5 text-white sm:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
        <svg viewBox="0 0 100 88" className="relative h-full min-h-[470px] w-full" role="img" aria-label="China operating coverage map">
          <defs>
            <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1.4" stdDeviation="1.2" floodColor="rgba(0,0,0,0.55)" />
            </filter>
          </defs>
          <path
            d={CHINA_MAINLAND_PATH}
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.55"
            filter="url(#mapShadow)"
          />
          <path
            d={CHINA_HAINAN_PATH}
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.55"
          />
          <path d="M20 58 L36 54 L51 55 L64 60 L75 66" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="0.45" />
          <path d="M45 18 L49 34 L52 49 L50 66" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.45" />
          <path d="M62 33 L70 44 L75 56 L73 70" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.45" />
          {coverageMapCities.map((city) => {
            const active = city.regionId === activeRegion.id;
            return (
              <g
                key={city.name}
                className="cursor-pointer"
                onMouseEnter={() => onRegionHover?.(city.regionId)}
                onMouseLeave={() => onRegionHover?.(undefined)}
                onClick={() => onRegionSelect?.(city.regionId)}
              >
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={active ? 1.35 : 0.7}
                  fill={active ? "white" : "rgba(255,255,255,0.42)"}
                  stroke={active ? "rgba(255,255,255,0.45)" : "transparent"}
                  strokeWidth="2.8"
                />
                {active && (
                  <text
                    x={city.x + (city.labelDx ?? 1.7)}
                    y={city.y + (city.labelDy ?? -1.1)}
                    fill="white"
                    fontSize="2.25"
                    fontWeight="700"
                    textAnchor={city.anchor || "start"}
                    paintOrder="stroke"
                    stroke="rgba(0,0,0,0.7)"
                    strokeWidth="0.42"
                  >
                    {city.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <aside className="bg-white p-6 md:p-7">
        <div className="mb-7 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-[var(--brand-black)] text-white">
            <MapPin size={17} />
          </div>
          <div>
            <div className="mono-index">Active region</div>
            <h3 className="text-xl font-semibold leading-tight text-[var(--brand-black)]">{activeRegion.name.replace(" Coverage", "")}</h3>
          </div>
        </div>
        <p className="text-sm leading-7 text-[var(--brand-gray-700)]">{activeRegion.summary}</p>
        <div className="mt-7 grid gap-3">
          {activeCities.slice(0, 7).map((city) => (
            <button
              key={city.name}
              type="button"
              onMouseEnter={() => onRegionHover?.(city.regionId)}
              onClick={() => onRegionSelect?.(city.regionId)}
              className="grid gap-1 border border-[var(--brand-border)] bg-white p-3 text-left transition-colors hover:border-[var(--brand-black)] hover:bg-[var(--brand-gray-50)]"
            >
              <span className="text-sm font-semibold text-[var(--brand-black)]">{city.name}</span>
              <span className="text-xs leading-5 text-[var(--brand-gray-600)]">{city.note}</span>
            </button>
          ))}
        </div>
        <Link href={`/destinations/${activeRegion.id}`} className="mono-button mt-7 w-full">
          Open regional coverage <ArrowRight size={15} />
        </Link>
      </aside>
    </div>
  );
}
