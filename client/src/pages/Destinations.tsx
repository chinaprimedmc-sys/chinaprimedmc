import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, MapPin, MoveRight } from "lucide-react";

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

const regionClusters = [
  {
    region: "North China",
    cities: "Beijing, Tianjin, Chengde, Datong, Pingyao",
    positioning: "Classic first-time China, imperial heritage, Great Wall programs, student groups, senior-friendly cultural routes.",
    link: "/destinations/beijing",
    signal: "High-volume gateway",
  },
  {
    region: "East China",
    cities: "Shanghai, Suzhou, Hangzhou, Huangshan, Wuzhen",
    positioning: "Premium city stays, canal towns, garden culture, luxury FIT extensions, incentive pre- and post-tours.",
    link: "/destinations/shanghai",
    signal: "Premium leisure + MICE",
  },
  {
    region: "South China",
    cities: "Guilin, Yangshuo, Guangzhou, Shenzhen, Hong Kong, Macau",
    positioning: "Soft adventure, family travel, Greater Bay Area business extensions, cruise-linked China routing.",
    link: "/destinations/guilin",
    signal: "Gateway flexibility",
  },
  {
    region: "Southwest China",
    cities: "Chengdu, Chongqing, Yunnan, Guizhou, Zhangjiajie",
    positioning: "Pandas, ethnic culture, karst landscapes, family programs, photography, light adventure, emerging destination product.",
    link: "/destinations/chengdu",
    signal: "High-demand experiential China",
  },
  {
    region: "Northwest China",
    cities: "Xi'an, Gansu, Dunhuang, Ningxia, Qinghai, Xinjiang",
    positioning: "Silk Road journeys, Muslim-friendly routing, halal-aware meal planning, desert landscapes, heritage-led group series.",
    link: "/destinations/xian",
    signal: "Special-interest depth",
  },
  {
    region: "Central China",
    cities: "Wuhan, Luoyang, Shaolin, Changsha, Fenghuang",
    positioning: "Civilization routes, rail-linked group operations, student programs, culture-heavy extensions between major gateways.",
    link: "/destinations/henan",
    signal: "Efficient regional add-ons",
  },
  {
    region: "Western China",
    cities: "Tibet, Qinghai, Western Sichuan, highland Yunnan",
    positioning: "Permit-aware routing, high-altitude pacing, monastery culture, serious landscape travel, experienced traveler programs.",
    link: "/destinations/tibet",
    signal: "Complex operations",
  },
];

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
              <h2 className="b2b-heading">Coverage by operating region, not just city names.</h2>
            </div>
            <p className="b2b-lede mt-0">
              B2B partners need more than a destination list. They need to know which parts of China are reliable for resale, which regions need stronger operational planning, and how each area fits a specific traveler profile.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2 xl:grid-cols-3">
            {regionClusters.map((cluster, index) => (
              <FadeSection key={cluster.region} delay={(index % 6) * 45}>
                <Link href={cluster.link} className="group grid min-h-full bg-white p-6 text-[var(--brand-black)] no-underline transition-colors hover:bg-[var(--brand-gray-50)] md:p-7">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="mono-index border border-[var(--brand-border)] px-3 py-2">{cluster.signal}</span>
                    <MapPin size={18} className="text-[var(--brand-gray-500)]" />
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-[var(--brand-black)]">{cluster.region}</h3>
                  <p className="mt-4 text-sm font-bold uppercase leading-6 tracking-[0.08em] text-[var(--brand-gray-500)]">{cluster.cities}</p>
                  <p className="mt-5 text-sm leading-7 text-[var(--brand-gray-700)]">{cluster.positioning}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-black)]">
                    Open sample destination <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
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
