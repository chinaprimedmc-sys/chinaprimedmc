import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Mail, SlidersHorizontal, X } from "lucide-react";
import { EMAIL } from "@/lib/data";
import type { Journey } from "@/lib/programData";
import { journeyFilterOptions, journeys } from "@/lib/programData";
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
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.55s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

type SortKey = "recommended" | "duration-asc" | "duration-desc";

const visualCategories = [
  {
    title: "Classic icons",
    src: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-forbidden-city.jpg",
    alt: "Forbidden City Beijing private China trip visual.",
  },
  {
    title: "Family demand",
    src: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg",
    alt: "Chengdu panda base for family-friendly private China trips.",
  },
  {
    title: "Soft adventure",
    src: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-wulingyuan.jpg",
    alt: "Wulingyuan Zhangjiajie scenery for soft adventure China trips.",
  },
  {
    title: "Silk Road",
    src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark.jpg",
    alt: "Zhangye National Geopark for private Silk Road trips in China.",
  },
];

function durationBand(days: number) {
  if (days <= 6) return "5-6 Days";
  if (days <= 9) return "7-9 Days";
  if (days <= 12) return "10-12 Days";
  return "13+ Days";
}

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

function tripEmailHref(journey: Journey) {
  const subject = `Private China trip request: ${journey.title}`;
  const body = [
    "Hello China Prime DMC team,",
    "",
    "I am interested in planning this private China trip:",
    "",
    `Trip: ${journey.title}`,
    `Duration: ${journey.duration}`,
    `Route: ${journey.route}`,
    `Best season: ${journey.bestTime}`,
    `Traveler fit: ${journey.travelerTypes.join(", ")}`,
    `Themes: ${journey.themes.join(", ")}`,
    `Preferred pace / physical level: ${journey.pace} / ${journey.physicalLevel}`,
    "",
    "My travel details:",
    "Number of travelers:",
    "Travel window:",
    "Preferred hotel level:",
    "Dietary, mobility, family, or religious needs:",
    "Places I want to add or remove:",
    "Approximate budget level:",
    "",
    "Please suggest the best route, what can be customized, and what information you need before quoting.",
    "",
    "Thank you.",
  ].join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--btoc-stone)]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full border border-[rgba(20,33,61,0.10)] bg-white px-3 text-sm font-semibold text-[var(--btoc-ink)] outline-none transition-colors hover:border-[var(--brand-gray-400)] focus:border-[var(--brand-black)]"
      >
        <option value="">All {label.toLowerCase()}</option>
        {options.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </label>
  );
}

export default function Journeys() {
  const [, navigate] = useLocation();
  const [destinationFilters, setDestinationFilters] = useState<string[]>([]);
  const [durationFilters, setDurationFilters] = useState<string[]>([]);
  const [themeFilters, setThemeFilters] = useState<string[]>([]);
  const [travelerFilters, setTravelerFilters] = useState<string[]>([]);
  const [paceFilters, setPaceFilters] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("recommended");

  const filteredJourneys = useMemo(() => {
    const filtered = journeys.filter((journey) => {
      const destinationMatch = destinationFilters.length === 0 || destinationFilters.some((item) => journey.destinations.includes(item));
      const durationMatch = durationFilters.length === 0 || durationFilters.includes(durationBand(journey.durationDays));
      const themeMatch = themeFilters.length === 0 || themeFilters.some((item) => journey.themes.includes(item));
      const travelerMatch = travelerFilters.length === 0 || travelerFilters.some((item) => journey.travelerTypes.includes(item));
      const paceMatch = paceFilters.length === 0 || paceFilters.includes(journey.pace);
      return destinationMatch && durationMatch && themeMatch && travelerMatch && paceMatch;
    });

    if (sortKey === "duration-asc") return [...filtered].sort((a, b) => a.durationDays - b.durationDays);
    if (sortKey === "duration-desc") return [...filtered].sort((a, b) => b.durationDays - a.durationDays);
    return filtered;
  }, [destinationFilters, durationFilters, paceFilters, sortKey, themeFilters, travelerFilters]);

  const activeFilters = [
    ...destinationFilters.map((value) => ({ group: "destination", value })),
    ...durationFilters.map((value) => ({ group: "duration", value })),
    ...themeFilters.map((value) => ({ group: "theme", value })),
    ...travelerFilters.map((value) => ({ group: "traveler", value })),
    ...paceFilters.map((value) => ({ group: "pace", value })),
  ];
  const activeCount = activeFilters.length;

  const removeFilter = (group: string, value: string) => {
    if (group === "destination") setDestinationFilters(destinationFilters.filter((item) => item !== value));
    if (group === "duration") setDurationFilters(durationFilters.filter((item) => item !== value));
    if (group === "theme") setThemeFilters(themeFilters.filter((item) => item !== value));
    if (group === "traveler") setTravelerFilters(travelerFilters.filter((item) => item !== value));
    if (group === "pace") setPaceFilters(paceFilters.filter((item) => item !== value));
  };

  const resetFilters = () => {
    setDestinationFilters([]);
    setDurationFilters([]);
    setThemeFilters([]);
    setTravelerFilters([]);
    setPaceFilters([]);
    setSortKey("recommended");
  };

  return (
    <main className="btoc-shell" style={{ paddingTop: "72px" }}>
      <section className="btoc-hero min-h-[76svh]">
        <div className="btoc-hero-media">
          <img src={pageHeroImages.programs} alt="Tiger Leaping Gorge in Yunnan for private China trip planning." loading="eager" decoding="async" fetchPriority="high" />
        </div>
        <div className="btoc-hero-inner btoc-wrap min-h-[76svh]">
          <div className="btoc-hero-grid">
            <FadeSection>
              <span className="btoc-eyebrow" style={{ color: "rgba(255,255,255,0.82)" }}>Private China trips</span>
              <h1>Choose your way into China.</h1>
              <p className="btoc-lede">
                Filter cinematic private routes by destination, duration, travel style, pace, and traveler needs. Every trip is a starting point, not a fixed package.
              </p>
              <div className="btoc-action-row">
                <Link href="/contact" className="btoc-button">Plan my trip <ArrowRight size={17} /></Link>
                <Link href="/b2b" className="btoc-button btoc-button-secondary">B2B partners</Link>
              </div>
            </FadeSection>
            <FadeSection delay={120}>
              <div className="btoc-glass-panel">
                <div className="btoc-stat-grid">
                  {[{ value: String(journeys.length), label: "Trip ideas" }, { value: "5-14", label: "Typical days" }, { value: "68", label: "Destination tags" }, { value: "Private", label: "Custom pace" }].map((item) => (
                    <div key={item.label} className="btoc-stat"><strong>{item.value}</strong><span>{item.label}</span></div>
                  ))}
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      <section className="btoc-section pb-8 pt-10">
        <div className="btoc-wrap">
          <FadeSection className="btoc-filter-panel -mt-24 relative z-20">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(20,33,61,0.10)] pb-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-[rgba(20,33,61,0.10)] bg-white">
                  <SlidersHorizontal size={18} />
                </span>
                <div>
                  <div className="text-base font-semibold text-[var(--btoc-ink)]">Trip finder</div>
                  <div className="text-sm text-[rgba(17,24,39,0.62)]">{filteredJourneys.length} of {journeys.length} trips shown</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCount > 0 && (
                  <button type="button" onClick={resetFilters} className="btoc-button" style={{ minHeight: 44, padding: "0 18px" }}>
                    Clear filters
                  </button>
                )}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_0.72fr_1fr_1fr_0.7fr_0.72fr]">
              <FilterSelect label="Destination" value={destinationFilters[0] || ""} options={journeyFilterOptions.destinations} onChange={(value) => setDestinationFilters(value ? [value] : [])} />
              <FilterSelect label="Duration" value={durationFilters[0] || ""} options={journeyFilterOptions.durationBands} onChange={(value) => setDurationFilters(value ? [value] : [])} />
              <FilterSelect label="Theme" value={themeFilters[0] || ""} options={journeyFilterOptions.themes} onChange={(value) => setThemeFilters(value ? [value] : [])} />
              <FilterSelect label="Traveler" value={travelerFilters[0] || ""} options={journeyFilterOptions.travelerTypes} onChange={(value) => setTravelerFilters(value ? [value] : [])} />
              <FilterSelect label="Pace" value={paceFilters[0] || ""} options={journeyFilterOptions.pace} onChange={(value) => setPaceFilters(value ? [value] : [])} />
              <label className="grid gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--btoc-stone)]">Sort</span>
                <select
                  value={sortKey}
                  onChange={(event) => setSortKey(event.target.value as SortKey)}
                  className="h-12 w-full border border-[rgba(20,33,61,0.10)] bg-white px-3 text-sm font-semibold text-[var(--btoc-ink)] outline-none transition-colors hover:border-[var(--brand-gray-400)] focus:border-[var(--brand-black)]"
                >
                  <option value="recommended">Recommended</option>
                  <option value="duration-asc">Shortest first</option>
                  <option value="duration-desc">Longest first</option>
                </select>
              </label>
            </div>

            {activeCount > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <button
                    key={`${filter.group}-${filter.value}`}
                    type="button"
                    onClick={() => removeFilter(filter.group, filter.value)}
                    className="inline-flex h-9 items-center gap-2 border border-[var(--brand-black)] bg-[var(--brand-black)] px-3 text-xs font-bold uppercase tracking-[0.08em] text-white"
                  >
                    {filter.value}
                    <X size={13} />
                  </button>
                ))}
              </div>
            )}
          </FadeSection>
        </div>
      </section>

      <section className="btoc-section pt-8">
        <div className="btoc-wrap">
          <FadeSection className="mb-10 grid gap-6 lg:grid-cols-[0.42fr_1fr] lg:items-end">
            <div>
              <span className="btoc-eyebrow">Trip moods</span>
              <h2 className="btoc-title-small">Start with the feeling.</h2>
            </div>
            <p className="btoc-lede m-0">Classic icons, family demand, soft adventure, and Silk Road culture give travelers a fast emotional way to understand China.</p>
          </FadeSection>
          <div className="grid gap-4 md:grid-cols-4">
            {visualCategories.map((item, index) => (
              <FadeSection key={item.src} delay={index * 45}>
                <figure className="btoc-image-frame aspect-[4/5]">
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                  <div className="btoc-image-overlay" />
                  <figcaption className="absolute bottom-5 left-5 right-5">
                    <span className="btoc-badge mb-3">Trip style</span>
                    <h2 className="text-3xl font-semibold leading-tight text-white">{item.title}</h2>
                  </figcaption>
                </figure>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="btoc-section pt-8">
        <div className="btoc-wrap grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filteredJourneys.map((journey, index) => (
            <FadeSection key={journey.id} delay={(index % 6) * 35}>
              <article
                role="link"
                tabIndex={0}
                onClick={() => navigate(`/journeys/${journey.id}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    navigate(`/journeys/${journey.id}`);
                  }
                }}
                className="btoc-trip-card group text-[var(--btoc-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--btoc-gold)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[var(--btoc-ink)]">
                  <img src={journey.image} alt={journey.gallery[0]?.alt || journey.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" decoding="async" />
                  <div className="btoc-badge absolute left-4 top-4">
                    {journey.pricingNote}
                  </div>
                </div>
                <div className="grid gap-5 p-5 md:p-7">
                  <div className="flex flex-wrap gap-2">
                    <span className="btoc-pill">{journey.duration}</span>
                    <span className="btoc-pill">{journey.pace}</span>
                    <span className="btoc-pill">{journey.physicalLevel}</span>
                  </div>
                  <div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--btoc-stone)]">{journey.route}</p>
                    <h2 className="text-xl font-semibold leading-tight text-[var(--btoc-ink)] md:text-[1.45rem]">{journey.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-[rgba(17,24,39,0.62)]">{journey.subtitle}</p>
                  </div>
                  <div className="grid gap-4 border-y border-[rgba(20,33,61,0.10)] py-4 2xl:grid-cols-2">
                    <div>
                      <div className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--btoc-stone)]">Best for</div>
                      <div className="text-sm leading-6 text-[var(--brand-gray-700)]">{journey.bestFor.slice(0, 2).join(" / ")}</div>
                    </div>
                    <div>
                      <div className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--btoc-stone)]">Typical support</div>
                      <div className="text-sm leading-6 text-[var(--brand-gray-700)]">Private guide, transfers, hotels, ticket coordination</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[...journey.themes.slice(0, 3), ...journey.travelerTypes.slice(0, 2)].map((tag) => (
                      <span key={tag} className="btoc-pill">{tag}</span>
                    ))}
                  </div>
                  <div className="grid gap-3 2xl:grid-cols-2">
                    <Link
                      href={`/journeys/${journey.id}`}
                      onClick={(event) => event.stopPropagation()}
                      className="btoc-button" style={{ minHeight: 46 }}
                    >
                      View details <ArrowRight size={15} />
                    </Link>
                    <a
                      href={tripEmailHref(journey)}
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex h-11 items-center justify-center gap-2 border border-[rgba(20,33,61,0.10)] bg-white px-4 text-sm font-semibold text-[var(--btoc-ink)] no-underline transition-colors hover:border-[var(--brand-black)] hover:bg-[var(--brand-gray-50)]"
                    >
                      Plan this trip <Mail size={15} />
                    </a>
                  </div>
                </div>
              </article>
            </FadeSection>
          ))}
        </div>
      </section>

      <section className="btoc-section pt-4">
        <div className="btoc-wrap">
          <div className="btoc-image-frame min-h-[58vh] rounded-[34px]">
            <img src="/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-xidi.jpg" alt="Xidi Anhui village for custom East China private trip planning." loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.78),rgba(17,24,39,0.36),rgba(17,24,39,0.08))]" />
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-12 lg:p-16">
              <span className="btoc-eyebrow" style={{ color: "rgba(255,255,255,0.78)" }}>Custom planning</span>
              <h2 className="max-w-4xl text-[clamp(2.3rem,5vw,5.4rem)] font-semibold leading-[0.95] text-white">Tell us your dates, comfort level, interests, and special needs.</h2>
              <div className="btoc-action-row">
                <Link href="/contact" className="btoc-button">Start planning <ArrowRight size={17} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
