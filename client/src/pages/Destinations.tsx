import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Check, MapPin, MoveRight } from "lucide-react";
import { CoverageMap } from "@/components/CoverageMap";
import { coverageRegions } from "@/lib/coverageData";
import MediaHero from "@/components/MediaHero";
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
  { value: "7", label: "Operating regions" },
  { value: "FIT / Groups / MICE", label: "Core formats" },
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
    segment: "First-time China groups",
    bestRegions: "Beijing, Xi'an, Shanghai, Suzhou, Guilin",
    why: "Famous icons, simple sales language, strong guides.",
    image: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-forbidden-city.jpg",
  },
  {
    segment: "Luxury FIT travelers",
    bestRegions: "Shanghai, Hangzhou, Beijing, Yunnan, Chengdu",
    why: "Better hotels, private moments, flexible pacing.",
    image: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains.jpg",
  },
  {
    segment: "Muslim-friendly groups",
    bestRegions: "Xi'an, Ningxia, Gansu, Xinjiang, Beijing, Shanghai",
    why: "Muslim heritage, halal-aware meals, mosque visits.",
    image: "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-kashgar.jpg",
  },
  {
    segment: "Families with children",
    bestRegions: "Chengdu, Guilin, Beijing, Shanghai, Zhangjiajie",
    why: "Pandas, rivers, hands-on culture, visual impact.",
    image: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg",
  },
  {
    segment: "Senior travelers",
    bestRegions: "Beijing, Shanghai, Suzhou, Hangzhou, Chengdu",
    why: "Comfortable pace, shorter transfers, mature supply.",
    image: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg",
  },
  {
    segment: "MICE and incentives",
    bestRegions: "Shanghai, Beijing, Guangzhou, Shenzhen, Chengdu, Hangzhou",
    why: "Air access, venues, executive hotels, gala options.",
    image: "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-beijing-national-stadium.jpg",
  },
];

const operatingCapabilities = [
  "Route design for FIT, group series, incentive travel, and special-interest programs",
  "Local guide, driver, hotel, restaurant, attraction, and venue coordination",
  "Meal planning for halal-aware, vegetarian, family, senior, and executive groups",
  "High-speed rail, domestic flight, charter vehicle, and airport transfer sequencing",
  "Permit-aware planning for sensitive or operationally complex regions",
  "Seasonal advice for weather, crowd pressure, hotel compression, and route risk",
  "White-label documentation and B2B quotation support for global partners",
  "English-language partner communication before, during, and after operation",
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
    <main className="mono-shell" style={{ color: "var(--brand-text)", paddingTop: "72px" }}>
      <MediaHero
        image={pageHeroImages.coverage}
        alt="Yangtze River route representing China nationwide DMC coverage."
        eyebrow="China coverage"
        title="China coverage built for global travel partners."
        body="From first-tier gateways to remote cultural regions, China Prime DMC supports tailor-made programs, group series, MICE movements, and special-interest travel across China with a practical operating lens."
        stats={coverageStats}
      />

      <section className="border-y border-[var(--brand-border)] bg-white">
        <div className="mono-wrap grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-3">
          {["Where your clients should go", "When the route operates best", "How the program gets delivered"].map((item, index) => (
            <FadeSection key={item} delay={index * 70}>
              <div className="min-h-full bg-white p-7">
                <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-gray-400)]">Coverage question 0{index + 1}</div>
                <h2 className="text-2xl font-semibold leading-tight text-[var(--brand-black)]">{item}</h2>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <FadeSection className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.55fr_1fr]">
            <div>
              <p className="b2b-eyebrow">Regional network</p>
              <h2 className="b2b-heading">Coverage by operating region, with cities mapped clearly.</h2>
            </div>
            <p className="b2b-lede mt-0">
              B2B partners need to see where a region sits before they can sell it. Use the map to understand which gateway cities, cultural stops, and specialist routes belong to each operating region.
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

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2 xl:grid-cols-3">
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
                  className="group grid min-h-full cursor-pointer grid-rows-[auto_1fr] overflow-hidden bg-white text-[var(--brand-black)] transition-colors hover:bg-[var(--brand-gray-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--brand-black)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--brand-black)]">
                    <img
                      src={cluster.image}
                      alt={cluster.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
                    <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
                      <span className="bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--brand-black)]">{cluster.signal}</span>
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
                        <span key={item} className="border border-[var(--brand-border)] px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--brand-gray-600)]">
                          {item}
                        </span>
                      ))}
                    </div>
                  <div className="mt-7 grid gap-4">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-black)]">
                      {selectedRegionId === coverageRegions[index].id ? "Region selected" : "Select on map"} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                    {selectedRegionId === coverageRegions[index].id && (
                      <Link
                        href={cluster.link}
                        onClick={(event) => event.stopPropagation()}
                        className="mono-button w-full md:hidden"
                      >
                        Open regional coverage <ArrowRight size={15} />
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

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.42fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Program fit</p>
            <h2 className="b2b-heading">Which regions make sense for which clients?</h2>
            <p className="b2b-body mt-6">
              The right China route depends on market source, travel style, budget level, pacing, season, and the amount of operational complexity a partner wants to absorb.
            </p>
          </FadeSection>

          <FadeSection delay={100}>
            <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2">
              {fitMatrix.map((row) => (
                <article key={row.segment} className="visual-card group">
                  <div className="visual-card-image">
                    <img src={row.image} alt={`${row.segment} China coverage planning.`} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/8 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-semibold leading-tight text-white">{row.segment}</h3>
                    </div>
                  </div>
                  <div className="visual-card-caption">
                    <div className="mono-index mb-3">Best regions</div>
                    <p className="text-base font-semibold leading-7 text-[var(--brand-black)]">{row.bestRegions}</p>
                    <p className="mt-3 text-sm leading-6 text-[var(--brand-gray-700)]">{row.why}</p>
                  </div>
                </article>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <DarkImageSection
        image="/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-three-gorges-dam.jpg"
        alt="Three Gorges Dam for nationwide China DMC operating coverage."
        eyebrow="Operational confidence"
        title="Coverage only matters if the route can be operated cleanly."
        body="We look at each destination through the details that affect your sale and your client experience: transfers, guide quality, hotel fit, meal planning, seasonality, permits, pacing, and on-trip communication."
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

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <FadeSection className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.58fr_1fr]">
            <div>
              <p className="b2b-eyebrow">Route architecture</p>
              <h2 className="b2b-heading">Multi-city China programs that are easy to quote and explain.</h2>
            </div>
            <p className="b2b-lede mt-0">
              Many global partners do not need one isolated city. They need a route that sells clearly, prices cleanly, and moves travelers through China without exhausting them.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] lg:grid-cols-4">
            {routeExamples.map((route, index) => (
              <FadeSection key={route.title} delay={index * 55}>
                <article className="visual-card group">
                  <div className="visual-card-image">
                    <img src={route.image} alt={route.alt} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 bg-white px-3 py-2 text-xs font-bold text-[var(--brand-black)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="visual-card-caption">
                    <h3 className="text-2xl font-semibold leading-tight text-[var(--brand-black)]">{route.title}</h3>
                    <div className="my-5 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase leading-6 tracking-[0.08em] text-[var(--brand-gray-500)]">
                    {route.path.split(" -> ").map((stop, stopIndex, stops) => (
                      <span key={stop} className="inline-flex min-w-0 items-center gap-2 sm:gap-3">
                        <span className="break-words">{stop}</span>
                        {stopIndex < stops.length - 1 && <MoveRight size={14} className="shrink-0" />}
                      </span>
                    ))}
                    </div>
                    <p className="text-sm leading-6 text-[var(--brand-gray-700)]">{route.note}</p>
                  </div>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 items-end gap-10 border-y border-[var(--brand-border)] py-12 md:grid-cols-[1fr_auto]">
          <FadeSection>
            <p className="b2b-eyebrow">Partner brief</p>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-[var(--brand-black)] md:text-6xl">
              Send us the market, dates, group size, and regions. We will shape the China route.
            </h2>
          </FadeSection>
          <FadeSection delay={100}>
            <Link href="/contact" className="mono-button">
              Request coverage advice <ArrowRight size={16} />
            </Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
