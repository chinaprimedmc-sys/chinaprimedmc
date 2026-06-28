import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Check, MapPin, MoveRight } from "lucide-react";
import { CoverageMap } from "@/components/CoverageMap";
import { coverageRegions } from "@/lib/coverageData";
import DarkImageSection from "@/components/DarkImageSection";
import { pageHeroImages } from "@/lib/heroImages";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const coverageStats = [
  { value: "2012", label: "Established" },
  { value: "7", label: "Ways to understand China" },
  { value: "40+", label: "Places we can connect" },
];

const regionClusters = coverageRegions.map((region) => ({
  region: region.name.replace(" Coverage", ""),
  cities: region.eyebrow,
  positioning: region.summary,
  link: `/destinations/${region.id}`,
  signal: region.bestFor[0],
  image: region.heroImage,
  imageAlt: region.gallery[0]?.alt || region.name,
  highlights: region.cities.slice(0, 4).map((city) => city.name),
}));

const fitMatrix = [
  {
    segment: "Your first time in China",
    bestRegions: "Beijing, Xi'an, Shanghai, Suzhou, Guilin",
    why: "Recognizable icons, strong guides, easier logistics, and enough context to feel grounded.",
    image: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-forbidden-city.jpg",
  },
  {
    segment: "Luxury private travelers",
    bestRegions: "Shanghai, Hangzhou, Beijing, Yunnan, Chengdu",
    why: "Better hotels, private moments, flexible pacing, and fewer compromises on comfort.",
    image: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains.jpg",
  },
  {
    segment: "Muslim-friendly travelers",
    bestRegions: "Xi'an, Ningxia, Gansu, Xinjiang, Beijing, Shanghai",
    why: "Muslim heritage, halal-aware meals, mosque access where practical, and honest local guidance.",
    image: "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-kashgar.jpg",
  },
  {
    segment: "Families with children",
    bestRegions: "Chengdu, Guilin, Beijing, Shanghai, Zhangjiajie",
    why: "Pandas, rivers, hands-on culture, visual impact, and days that respect real family energy.",
    image: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg",
  },
  {
    segment: "Older parents and senior travelers",
    bestRegions: "Beijing, Shanghai, Suzhou, Hangzhou, Chengdu",
    why: "Comfortable pacing, shorter transfers, mature hotels, and less unnecessary walking.",
    image: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg",
  },
  {
    segment: "Multi-city private trips",
    bestRegions: "Shanghai, Beijing, Guangzhou, Guilin, Chengdu, Hangzhou",
    why: "Air access, rail connections, strong hotels, and route logic that feels clear before you go.",
    image: "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-beijing-national-stadium.jpg",
  },
];

const operatingCapabilities = [
  "Route design for private trips, families, couples, senior travelers, and special-interest journeys",
  "Local guide, driver, hotel, restaurant, attraction, and venue coordination",
  "Meal planning for halal-aware, vegetarian, family, senior, and comfort-focused travelers",
  "High-speed rail, domestic flight, charter vehicle, and airport transfer sequencing",
  "Permit-aware planning for sensitive or operationally complex regions",
  "Seasonal advice for weather, crowd pressure, hotel compression, and route risk",
  "Clear trip notes before confirmation so travelers understand the route",
  "English-language communication before, during, and after travel",
];

const routeExamples = [
  {
    title: "Classic China Introduction",
    path: "Beijing -> Xi'an -> Shanghai / Suzhou",
    note: "Best for first-time travelers, long-haul markets, student groups, and escorted series.",
    image: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-mutianyu.jpg",
    alt: "Mutianyu Great Wall for classic China introduction routes.",
  },
  {
    title: "Nature + Family China",
    path: "Chengdu -> Zhangjiajie -> Guilin / Yangshuo",
    note: "Strong when pandas, mountains, rivers, and soft adventure need to sell the trip fast.",
    image: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-wulingyuan.jpg",
    alt: "Wulingyuan Zhangjiajie for nature and family China routes.",
  },
  {
    title: "Silk Road + Muslim Heritage",
    path: "Xi'an -> Lanzhou -> Dunhuang -> Urumqi / Kashgar",
    note: "A high-value route for Muslim-friendly groups, repeat China visitors, and culture-led programs.",
    image: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark.jpg",
    alt: "Zhangye National Geopark for Silk Road China routing.",
  },
  {
    title: "Premium East China Extension",
    path: "Shanghai -> Suzhou -> Hangzhou -> Huangshan",
    note: "Works as a luxury FIT module, incentive extension, or post-cruise cultural program.",
    image: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan.jpg",
    alt: "Huangshan mountain for premium East China extensions.",
  },
];

export default function Destinations() {
  const [, navigate] = useLocation();
  const [activeRegionId, setActiveRegionId] = useState(coverageRegions[0].id);
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);

  function handleRegionClick(regionId: string) {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      setActiveRegionId(regionId);
      setSelectedRegionId(regionId);
      return;
    }
    navigate(`/destinations/${regionId}`);
  }

  return (
    <main className="btoc-shell" style={{ paddingTop: "72px" }}>
      <section className="btoc-hero min-h-[78svh]">
        <div className="btoc-hero-media">
          <img src={pageHeroImages.coverage} alt="Yangtze River route representing nationwide private China trip coverage." loading="eager" decoding="async" fetchPriority="high" />
        </div>
        <div className="btoc-hero-inner btoc-wrap min-h-[78svh]">
          <div className="btoc-hero-grid">
            <FadeSection>
              <span className="btoc-eyebrow" style={{ color: "rgba(255,255,255,0.82)" }}>Where to go in China</span>
              <h1>China is huge. Your route should not feel confusing.</h1>
              <p className="btoc-lede">Use the regions to understand what belongs together: gateway cities, pandas, gardens, Muslim heritage, mountains, river towns, food cities, high-speed rail, and the places worth slowing down for.</p>
            </FadeSection>
            <FadeSection delay={120}>
              <div className="btoc-glass-panel"><div className="btoc-stat-grid">
                {coverageStats.map((item) => <div key={item.label} className="btoc-stat"><strong>{item.value}</strong><span>{item.label}</span></div>)}
              </div></div>
            </FadeSection>
          </div>
        </div>
      </section>

      <section className="btoc-section py-8">
        <div className="btoc-wrap grid grid-cols-1 gap-4 md:grid-cols-3">
          {["Which places belong together", "When the route will feel best", "What the days feel like on the ground"].map((item, index) => (
            <FadeSection key={item} delay={index * 70}>
              <div className="btoc-card min-h-full p-7">
                <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-gray-400)]">Planning question 0{index + 1}</div>
                <h2 className="text-2xl font-semibold leading-tight text-[var(--brand-black)]">{item}</h2>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      <section className="btoc-section">
        <div className="btoc-wrap">
          <FadeSection className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.55fr_1fr]">
            <div>
              <p className="btoc-eyebrow">Make the map less intimidating</p>
              <h2 className="btoc-title-small">See China as a set of journeys, not a list of cities.</h2>
            </div>
            <p className="btoc-lede mt-0">
              The right private China tour is usually a smart combination: a gateway city, a cultural anchor, one emotional landscape, and enough breathing room between them.
            </p>
          </FadeSection>

          <FadeSection className="mb-12">
            <CoverageMap
              activeRegionId={activeRegionId}
              onRegionHover={(regionId) => {
                if (regionId) setActiveRegionId(regionId);
              }}
              onRegionSelect={(regionId) => {
                setActiveRegionId(regionId);
                setSelectedRegionId(regionId);
              }}
            />
          </FadeSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {regionClusters.map((cluster, index) => (
              <FadeSection key={cluster.region} delay={(index % 6) * 45}>
                <article
                  role="link"
                  tabIndex={0}
                  onMouseEnter={() => setActiveRegionId(coverageRegions[index].id)}
                  onClick={() => handleRegionClick(coverageRegions[index].id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleRegionClick(coverageRegions[index].id);
                    }
                  }}
                  className="btoc-trip-card group grid-rows-[auto_1fr] text-[var(--btoc-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--btoc-gold)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--btoc-ink)]">
                    <img
                      src={cluster.image}
                      alt={cluster.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
                    <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
                      <span className="btoc-badge">{cluster.signal}</span>
                      <span className="flex h-9 w-9 items-center justify-center border border-white/45 bg-black/35 text-white backdrop-blur-sm">
                        <MapPin size={17} />
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="text-[11px] font-bold uppercase leading-5 tracking-[0.12em] text-white/72">{cluster.cities}</div>
                      <h3 className="mt-2 text-3xl font-semibold leading-tight text-white">{cluster.region}</h3>
                    </div>
                  </div>

                  <div className="grid p-6 md:p-7">
                    <p className="line-clamp-[7] text-sm leading-7 text-[var(--brand-gray-700)]">{cluster.positioning}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {cluster.highlights.map((item) => (
                        <span key={item} className="btoc-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  <div className="mt-7 grid gap-4">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-black)]">
                      {selectedRegionId === coverageRegions[index].id ? "Region selected" : "Tap to understand this region"} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                    {selectedRegionId === coverageRegions[index].id && (
                      <Link
                        href={cluster.link}
                        onClick={(event) => event.stopPropagation()}
                        className="btoc-button w-full md:hidden"
                      >
                        See this region in detail <ArrowRight size={15} />
                      </Link>
                    )}
                  </div>
                  </div>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="btoc-section bg-white/30">
        <div className="btoc-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.42fr_1fr]">
          <FadeSection>
            <p className="btoc-eyebrow">Trip fit</p>
            <h2 className="btoc-title-small">Where should you go if this is your situation?</h2>
            <p className="btoc-lede mt-6">
              The right China route depends less on a bucket list and more on who is traveling: children, older parents, food needs, mobility, season, hotel expectations, and how much moving around still feels enjoyable.
            </p>
          </FadeSection>

          <FadeSection delay={100}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {fitMatrix.map((row) => (
                <article key={row.segment} className="btoc-card group overflow-hidden">
                  <div className="btoc-image-frame aspect-[16/10] rounded-none">
                    <img src={row.image} alt={`${row.segment} China coverage planning.`} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/8 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-semibold leading-tight text-white">{row.segment}</h3>
                    </div>
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="btoc-caption mb-3">Best regions</div>
                    <p className="text-base font-semibold leading-7 text-[var(--btoc-ink)]">{row.bestRegions}</p>
                    <p className="mt-3 text-sm leading-6 text-[rgba(17,24,39,0.68)]">{row.why}</p>
                  </div>
                </article>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <DarkImageSection
        image="/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-three-gorges-dam.jpg"
        alt="Three Gorges Dam for nationwide private China route coverage."
        eyebrow="What makes a route feel easy"
        title="Beautiful places matter. Clean execution matters more."
        body="Before recommending a destination, we look at the details travelers actually feel: transfer time, guide quality, hotel location, meal planning, seasonality, permits, walking pressure, and what happens if plans need to change."
      >
          <FadeSection delay={120}>
            <div className="grid gap-px bg-white/20 md:grid-cols-2">
              {operatingCapabilities.map((item) => (
                <div key={item} className="flex gap-4 bg-black/62 p-5 backdrop-blur-sm">
                  <Check size={17} className="mt-1 shrink-0 text-white" />
                  <p className="text-sm leading-7 text-[var(--brand-gray-100)]">{item}</p>
                </div>
              ))}
            </div>
          </FadeSection>
      </DarkImageSection>

      <section className="btoc-section">
        <div className="btoc-wrap">
          <FadeSection className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.58fr_1fr]">
            <div>
        <p className="btoc-eyebrow">Route architecture</p>
        <h2 className="btoc-title-small">Multi-city China trips should feel clear before you ever board the flight.</h2>
            </div>
            <p className="btoc-lede mt-0">
              Most travelers do not need one isolated city. They need a route that connects clearly, moves comfortably, and gives each destination enough time to mean something.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            {routeExamples.map((route, index) => (
              <FadeSection key={route.title} delay={index * 55}>
                <article className="btoc-card group overflow-hidden">
                  <div className="btoc-image-frame aspect-[16/10] rounded-none">
                    <img src={route.image} alt={route.alt} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
                    <div className="btoc-badge absolute left-4 top-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="text-2xl font-semibold leading-tight text-[var(--btoc-ink)]">{route.title}</h3>
                    <div className="my-5 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase leading-6 tracking-[0.08em] text-[var(--brand-gray-500)]">
                    {route.path.split(" -> ").map((stop, stopIndex, stops) => (
                      <span key={stop} className="inline-flex min-w-0 items-center gap-2 sm:gap-3">
                        <span className="break-words">{stop}</span>
                        {stopIndex < stops.length - 1 && <MoveRight size={14} className="shrink-0" />}
                      </span>
                    ))}
                    </div>
                    <p className="text-sm leading-6 text-[rgba(17,24,39,0.68)]">{route.note}</p>
                  </div>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="btoc-section bg-white/30">
        <div className="btoc-wrap grid grid-cols-1 items-end gap-10 rounded-[34px] bg-white/70 p-8 shadow-[var(--btoc-shadow)] md:grid-cols-[1fr_auto] md:p-12">
          <FadeSection>
            <p className="btoc-eyebrow">Trip brief</p>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-[var(--btoc-ink)] md:text-6xl">
              Tell us the China you are imagining. We will tell you which regions make sense first.
            </h2>
          </FadeSection>
          <FadeSection delay={100}>
            <Link href="/contact" className="btoc-button">
              Get region advice <ArrowRight size={16} />
            </Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
