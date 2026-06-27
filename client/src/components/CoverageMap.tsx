import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { coverageRegions } from "@/lib/coverageData";
import { CHINA_MAP_VIEWBOX, chinaProvincePaths, projectChinaPoint } from "@/lib/chinaMapData";

export interface CoverageMapCity {
  name: string;
  lng: number;
  lat: number;
  regionId: string;
  note: string;
  labelDx?: number;
  labelDy?: number;
  anchor?: "start" | "middle" | "end";
}

export const coverageMapCities: CoverageMapCity[] = [
  { name: "Beijing", lng: 116.4074, lat: 39.9042, regionId: "north-china", note: "Capital gateway, Great Wall, imperial culture", labelDx: 2.1, labelDy: -1.6 },
  { name: "Datong", lng: 113.3001, lat: 40.0768, regionId: "north-china", note: "Buddhist grottoes and northern heritage", labelDx: -2, labelDy: -1.6, anchor: "end" },
  { name: "Pingyao", lng: 112.1756, lat: 37.1896, regionId: "north-china", note: "Walled merchant city and courtyard culture", labelDx: 1.7, labelDy: 2.4 },
  { name: "Hohhot", lng: 111.7492, lat: 40.8426, regionId: "north-china", note: "Inner Mongolia access and grassland culture", labelDx: -2, labelDy: 2.5, anchor: "end" },
  { name: "Shanghai", lng: 121.4737, lat: 31.2304, regionId: "east-china", note: "Global gateway, Bund, MICE, luxury FIT", labelDx: 2, labelDy: -1.2 },
  { name: "Suzhou", lng: 120.5853, lat: 31.2989, regionId: "east-china", note: "Classical gardens, canals, silk culture", labelDx: -1.6, labelDy: -2.1, anchor: "end" },
  { name: "Hangzhou", lng: 120.1551, lat: 30.2741, regionId: "east-china", note: "West Lake, tea, temples, refined leisure", labelDx: 1.7, labelDy: 2 },
  { name: "Huangshan", lng: 118.3375, lat: 29.7147, regionId: "east-china", note: "Yellow Mountain and Hui villages", labelDx: -1.6, labelDy: 2.2, anchor: "end" },
  { name: "Guangzhou", lng: 113.2644, lat: 23.1291, regionId: "south-china", note: "Cantonese food, trade, Greater Bay Area", labelDx: -1.6, labelDy: -1.8, anchor: "end" },
  { name: "Shenzhen", lng: 114.0579, lat: 22.5431, regionId: "south-china", note: "Innovation city and Hong Kong bridge", labelDx: -1.5, labelDy: 2.4, anchor: "end" },
  { name: "Guilin", lng: 110.29, lat: 25.2736, regionId: "south-china", note: "Karst peaks, Li River, family scenery", labelDx: -1.6, labelDy: -1.8, anchor: "end" },
  { name: "Hong Kong", lng: 114.1694, lat: 22.3193, regionId: "south-china", note: "International extension and cruise gateway", labelDx: 1.8, labelDy: 2.3 },
  { name: "Chengdu", lng: 104.0665, lat: 30.5728, regionId: "southwest-china", note: "Pandas, Sichuan food, family programs" },
  { name: "Chongqing", lng: 106.5516, lat: 29.563, regionId: "southwest-china", note: "Cyber city, hotpot, Yangtze gateway" },
  { name: "Zhangjiajie", lng: 110.4792, lat: 29.1171, regionId: "southwest-china", note: "Cinematic sandstone peaks" },
  { name: "Guiyang", lng: 106.6302, lat: 26.647, regionId: "southwest-china", note: "Guizhou villages and karst culture" },
  { name: "Kunming", lng: 102.8329, lat: 24.8801, regionId: "southwest-china", note: "Yunnan gateway and ethnic diversity" },
  { name: "Lijiang", lng: 100.233, lat: 26.8721, regionId: "southwest-china", note: "Old town, Naxi culture, highland routes" },
  { name: "Xi'an", lng: 108.9398, lat: 34.3416, regionId: "northwest-china", note: "Terracotta Army and Silk Road start" },
  { name: "Lanzhou", lng: 103.8343, lat: 36.0611, regionId: "northwest-china", note: "Gansu corridor gateway" },
  { name: "Dunhuang", lng: 94.6619, lat: 40.1421, regionId: "northwest-china", note: "Mogao Caves and desert scenery" },
  { name: "Yinchuan", lng: 106.2309, lat: 38.4872, regionId: "northwest-china", note: "Ningxia and Muslim-friendly routing" },
  { name: "Urumqi", lng: 87.6168, lat: 43.8256, regionId: "northwest-china", note: "Xinjiang gateway and far-west routes" },
  { name: "Kashgar", lng: 75.9898, lat: 39.4704, regionId: "northwest-china", note: "Oasis culture, bazaars, Pamir access" },
  { name: "Luoyang", lng: 112.454, lat: 34.6197, regionId: "central-china", note: "Ancient capital and Longmen Grottoes" },
  { name: "Wuhan", lng: 114.3054, lat: 30.5928, regionId: "central-china", note: "Yangtze hub and central China access" },
  { name: "Changsha", lng: 112.9388, lat: 28.2282, regionId: "central-china", note: "Hunan food and Zhangjiajie access" },
  { name: "Fenghuang", lng: 109.5994, lat: 27.9483, regionId: "central-china", note: "Riverside heritage town" },
  { name: "Lhasa", lng: 91.1175, lat: 29.647, regionId: "western-china", note: "Tibet culture, Potala, sacred sites" },
  { name: "Xining", lng: 101.7782, lat: 36.6171, regionId: "western-china", note: "Qinghai plateau and monastery culture" },
  { name: "Shangri-La", lng: 99.7065, lat: 27.8269, regionId: "western-china", note: "Tibetan-influenced highland Yunnan" },
  { name: "Western Sichuan", lng: 101.9638, lat: 30.05, regionId: "western-china", note: "Mountains, valleys, Tibetan villages" },
];

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
        <svg viewBox={CHINA_MAP_VIEWBOX} className="relative h-full min-h-[470px] w-full" role="img" aria-label="China operating coverage map">
          <defs>
            <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1.4" stdDeviation="1.2" floodColor="rgba(0,0,0,0.55)" />
            </filter>
          </defs>
          <g filter="url(#mapShadow)">
            {chinaProvincePaths.map((province) => (
              <path
                key={province.name}
                d={province.path}
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="0.22"
              />
            ))}
          </g>
          {coverageMapCities.map((city) => {
            const active = city.regionId === activeRegion.id;
            const point = projectChinaPoint(city.lng, city.lat);
            return (
              <g
                key={city.name}
                className="cursor-pointer"
                onMouseEnter={() => onRegionHover?.(city.regionId)}
                onMouseLeave={() => onRegionHover?.(undefined)}
                onClick={() => onRegionSelect?.(city.regionId)}
              >
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={active ? 1.05 : 0.58}
                  fill={active ? "white" : "rgba(255,255,255,0.42)"}
                  stroke={active ? "rgba(255,255,255,0.45)" : "transparent"}
                  strokeWidth={active ? "1.75" : "0"}
                />
                {active && (
                  <text
                    x={point.x + (city.labelDx ?? 1.7)}
                    y={point.y + (city.labelDy ?? -1.1)}
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
