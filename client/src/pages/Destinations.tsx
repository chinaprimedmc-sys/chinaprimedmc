import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Check, MapPin, MoveRight } from "lucide-react";
import { CoverageMap } from "@/components/CoverageMap";
import { coverageRegions } from "@/lib/coverageData";

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
}));

const fitMatrix = [
  { segment: "First-time China groups", bestRegions: "Beijing, Xi'an, Shanghai, Suzhou, Guilin", why: "Recognizable icons, strong guide supply, clean logistics, easy sales language." },
  { segment: "Luxury FIT travelers", bestRegions: "Shanghai, Hangzhou, Beijing, Yunnan, Chengdu", why: "Better hotel depth, private experiences, dining quality, flexible pacing." },
  { segment: "Muslim-friendly groups", bestRegions: "Xi'an, Ningxia, Gansu, Xinjiang, Beijing, Shanghai", why: "Halal-aware routing, mosque visits, Muslim heritage, practical meal planning." },
  { segment: "Families with children", bestRegions: "Chengdu, Guilin, Beijing, Shanghai, Zhangjiajie", why: "Pandas, nature, hands-on culture, manageable travel times, high visual impact." },
  { segment: "Senior travelers", bestRegions: "Beijing, Shanghai, Suzhou, Hangzhou, Chengdu", why: "Comfortable pacing, mature hotel supply, shorter transfers, strong medical access." },
  { segment: "MICE and incentives", bestRegions: "Shanghai, Beijing, Guangzhou, Shenzhen, Chengdu, Hangzhou", why: "Air access, venue inventory, executive hotels, gala and activity options." },
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
    note: "Best for first-time travelers, long-haul markets, student groups, and standard escorted series.",
  },
  {
    title: "Nature + Family China",
    path: "Chengdu -> Zhangjiajie -> Guilin / Yangshuo",
    note: "Strong for families and visual campaigns where pandas, mountains, rivers, and soft adventure matter.",
  },
  {
    title: "Silk Road + Muslim Heritage",
    path: "Xi'an -> Lanzhou -> Dunhuang -> Urumqi / Kashgar",
    note: "A high-value route for culturally curious travelers, Muslim-friendly groups, and repeat China visitors.",
  },
  {
    title: "Premium East China Extension",
    path: "Shanghai -> Suzhou -> Hangzhou -> Huangshan",
    note: "Works well as a luxury FIT module, incentive extension, or post-cruise cultural program.",
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
      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.44fr]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>China coverage</p>
            <h1 className="b2b-heading max-w-5xl text-[var(--brand-white)]">
              China coverage built for global travel partners.
            </h1>
            <p className="b2b-lede max-w-3xl text-[var(--brand-gray-300)]">
              From first-tier gateways to remote cultural regions, China Prime DMC supports tailor-made programs, group series, MICE movements, and special-interest travel across China with a practical operating lens.
            </p>
          </FadeSection>

          <FadeSection delay={120} className="self-end">
            <div className="grid gap-px bg-[var(--brand-gray-800)]">
              {coverageStats.map((stat) => (
                <div key={stat.label} className="bg-[var(--brand-black)] p-6">
                  <div className="text-2xl font-semibold leading-none text-white">{stat.value}</div>
                  <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--brand-gray-500)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

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
                  className="group grid min-h-full cursor-pointer bg-white p-6 text-[var(--brand-black)] transition-colors hover:bg-[var(--brand-gray-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--brand-black)] md:p-7"
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="mono-index border border-[var(--brand-border)] px-3 py-2">{cluster.signal}</span>
                    <MapPin size={18} className="text-[var(--brand-gray-500)]" />
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-[var(--brand-black)]">{cluster.region}</h3>
                  <p className="mt-4 text-sm font-bold uppercase leading-6 tracking-[0.08em] text-[var(--brand-gray-500)]">{cluster.cities}</p>
                  <p className="mt-5 text-sm leading-7 text-[var(--brand-gray-700)]">{cluster.positioning}</p>
                  <div className="mt-8 grid gap-4">
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
            <div className="grid gap-px bg-[var(--brand-border)]">
              {fitMatrix.map((row) => (
                <div key={row.segment} className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-[0.38fr_0.36fr_1fr]">
                  <div className="bg-[var(--brand-black)] p-5 text-sm font-semibold leading-6 text-white">{row.segment}</div>
                  <div className="bg-white p-5 text-sm font-semibold leading-6 text-[var(--brand-black)]">{row.bestRegions}</div>
                  <div className="bg-white p-5 text-sm leading-7 text-[var(--brand-gray-700)]">{row.why}</div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Operational confidence</p>
            <h2 className="b2b-heading max-w-3xl text-[var(--brand-white)]">
              Coverage only matters if the route can be operated cleanly.
            </h2>
            <p className="b2b-lede max-w-2xl text-[var(--brand-gray-300)]">
              We look at each destination through the details that affect your sale and your client experience: transfers, guide quality, hotel fit, meal planning, seasonality, permits, pacing, and on-trip communication.
            </p>
          </FadeSection>

          <FadeSection delay={120}>
            <div className="grid gap-px bg-[var(--brand-gray-800)] md:grid-cols-2">
              {operatingCapabilities.map((item) => (
                <div key={item} className="flex gap-4 bg-[var(--brand-black)] p-5">
                  <Check size={17} className="mt-1 shrink-0 text-white" />
                  <p className="text-sm leading-7 text-[var(--brand-gray-300)]">{item}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

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

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] lg:grid-cols-2">
            {routeExamples.map((route, index) => (
              <FadeSection key={route.title} delay={index * 55}>
                <div className="min-h-full bg-white p-7 md:p-8">
                  <div className="mb-8 inline-flex h-10 w-10 items-center justify-center bg-[var(--brand-black)] text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-[var(--brand-black)]">{route.title}</h3>
                  <div className="my-5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase leading-6 tracking-[0.08em] text-[var(--brand-gray-500)] sm:gap-3 sm:text-sm">
                    {route.path.split(" -> ").map((stop, stopIndex, stops) => (
                      <span key={stop} className="inline-flex min-w-0 items-center gap-2 sm:gap-3">
                        <span className="break-words">{stop}</span>
                        {stopIndex < stops.length - 1 && <MoveRight size={14} className="shrink-0" />}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-[var(--brand-gray-700)]">{route.note}</p>
                </div>
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
