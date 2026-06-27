import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { coverageRegions } from "@/lib/coverageData";

export interface CoverageMapCity {
  name: string;
  x: number;
  y: number;
  regionId: string;
  note: string;
}

export const coverageMapCities: CoverageMapCity[] = [
  { name: "Beijing", x: 69, y: 31, regionId: "north-china", note: "Capital gateway, Great Wall, imperial culture" },
  { name: "Datong", x: 63, y: 32, regionId: "north-china", note: "Buddhist grottoes and northern heritage" },
  { name: "Pingyao", x: 62, y: 39, regionId: "north-china", note: "Walled merchant city and courtyard culture" },
  { name: "Hohhot", x: 58, y: 29, regionId: "north-china", note: "Inner Mongolia access and grassland culture" },
  { name: "Shanghai", x: 76, y: 54, regionId: "east-china", note: "Global gateway, Bund, MICE, luxury FIT" },
  { name: "Suzhou", x: 74, y: 54, regionId: "east-china", note: "Classical gardens, canals, silk culture" },
  { name: "Hangzhou", x: 73, y: 58, regionId: "east-china", note: "West Lake, tea, temples, refined leisure" },
  { name: "Huangshan", x: 68, y: 59, regionId: "east-china", note: "Yellow Mountain and Hui villages" },
  { name: "Guangzhou", x: 64, y: 77, regionId: "south-china", note: "Cantonese food, trade, Greater Bay Area" },
  { name: "Shenzhen", x: 66, y: 79, regionId: "south-china", note: "Innovation city and Hong Kong bridge" },
  { name: "Guilin", x: 55, y: 72, regionId: "south-china", note: "Karst peaks, Li River, family scenery" },
  { name: "Hong Kong", x: 67, y: 81, regionId: "south-china", note: "International extension and cruise gateway" },
  { name: "Chengdu", x: 44, y: 56, regionId: "southwest-china", note: "Pandas, Sichuan food, family programs" },
  { name: "Chongqing", x: 49, y: 60, regionId: "southwest-china", note: "Cyber city, hotpot, Yangtze gateway" },
  { name: "Zhangjiajie", x: 56, y: 63, regionId: "southwest-china", note: "Cinematic sandstone peaks" },
  { name: "Guiyang", x: 49, y: 70, regionId: "southwest-china", note: "Guizhou villages and karst culture" },
  { name: "Kunming", x: 40, y: 73, regionId: "southwest-china", note: "Yunnan gateway and ethnic diversity" },
  { name: "Lijiang", x: 35, y: 69, regionId: "southwest-china", note: "Old town, Naxi culture, highland routes" },
  { name: "Xi'an", x: 55, y: 48, regionId: "northwest-china", note: "Terracotta Army and Silk Road start" },
  { name: "Lanzhou", x: 45, y: 43, regionId: "northwest-china", note: "Gansu corridor gateway" },
  { name: "Dunhuang", x: 28, y: 35, regionId: "northwest-china", note: "Mogao Caves and desert scenery" },
  { name: "Yinchuan", x: 52, y: 37, regionId: "northwest-china", note: "Ningxia and Muslim-friendly routing" },
  { name: "Urumqi", x: 18, y: 25, regionId: "northwest-china", note: "Xinjiang gateway and far-west routes" },
  { name: "Kashgar", x: 8, y: 41, regionId: "northwest-china", note: "Oasis culture, bazaars, Pamir access" },
  { name: "Luoyang", x: 59, y: 48, regionId: "central-china", note: "Ancient capital and Longmen Grottoes" },
  { name: "Wuhan", x: 64, y: 60, regionId: "central-china", note: "Yangtze hub and central China access" },
  { name: "Changsha", x: 60, y: 67, regionId: "central-china", note: "Hunan food and Zhangjiajie access" },
  { name: "Fenghuang", x: 55, y: 68, regionId: "central-china", note: "Riverside heritage town" },
  { name: "Lhasa", x: 24, y: 58, regionId: "western-china", note: "Tibet culture, Potala, sacred sites" },
  { name: "Xining", x: 43, y: 39, regionId: "western-china", note: "Qinghai plateau and monastery culture" },
  { name: "Shangri-La", x: 35, y: 65, regionId: "western-china", note: "Tibetan-influenced highland Yunnan" },
  { name: "Western Sichuan", x: 40, y: 57, regionId: "western-china", note: "Mountains, valleys, Tibetan villages" },
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
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--brand-white) 1px, transparent 1px), linear-gradient(90deg, var(--brand-white) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <svg viewBox="0 0 100 88" className="relative h-full min-h-[470px] w-full" role="img" aria-label="China operating coverage map">
          <path
            d="M18 18 L28 12 L43 10 L58 13 L73 20 L86 34 L88 50 L80 66 L66 78 L48 80 L33 75 L22 66 L12 54 L9 39 Z"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.42)"
            strokeWidth="0.7"
          />
          <path d="M14 55 L28 48 L42 47 L54 52 L65 61 L75 66" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.45" />
          <path d="M44 12 L45 28 L50 42 L50 58 L45 75" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.45" />
          <path d="M62 28 L72 39 L75 54 L73 70" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.45" />
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
                <text
                  x={city.x + 1.6}
                  y={city.y - 1.1}
                  fill={active ? "white" : "rgba(255,255,255,0.45)"}
                  fontSize={active ? "2.45" : "1.8"}
                  fontWeight={active ? "700" : "600"}
                >
                  {city.name}
                </text>
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
