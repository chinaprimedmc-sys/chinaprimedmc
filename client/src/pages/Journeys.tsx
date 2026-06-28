import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Mail, SlidersHorizontal, X } from "lucide-react";
import { EMAIL } from "@/lib/data";
import type { Journey } from "@/lib/programData";
import { journeyFilterOptions, journeys } from "@/lib/programData";
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
    alt: "Forbidden City Beijing B2B private program visual.",
  },
  {
    title: "Family demand",
    src: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg",
    alt: "Chengdu panda base for family-friendly China programs.",
  },
  {
    title: "Soft adventure",
    src: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-wulingyuan.jpg",
    alt: "Wulingyuan Zhangjiajie scenery for soft adventure China programs.",
  },
  {
    title: "Silk Road",
    src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark.jpg",
    alt: "Zhangye National Geopark for China Silk Road programs.",
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

function programEmailHref(journey: Journey) {
  const subject = `Net rate request: ${journey.title}`;
  const body = [
    "Hello China Prime DMC team,",
    "",
    "We would like to request a B2B net rate and operating advice for the following program:",
    "",
    `Program: ${journey.title}`,
    `Duration: ${journey.duration}`,
    `Route: ${journey.route}`,
    `Best season: ${journey.bestTime}`,
    `Traveler fit: ${journey.travelerTypes.join(", ")}`,
    `Themes: ${journey.themes.join(", ")}`,
    `Pace / physical level: ${journey.pace} / ${journey.physicalLevel}`,
    "",
    "Our client / group details:",
    "Market source:",
    "Estimated group size:",
    "Travel window:",
    "Preferred hotel level:",
    "Meal or dietary requirements:",
    "Guide language:",
    "Any route changes needed:",
    "",
    "Please send net pricing, inclusions, exclusions, payment terms, and any operational notes we should know before presenting this to our client.",
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
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--brand-gray-500)]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full border border-[var(--brand-border)] bg-white px-3 text-sm font-semibold text-[var(--brand-black)] outline-none transition-colors hover:border-[var(--brand-gray-400)] focus:border-[var(--brand-black)]"
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
    <main style={{ backgroundColor: "var(--brand-white)", color: "var(--brand-black)", paddingTop: "72px" }}>
      <MediaHero
        image={pageHeroImages.programs}
        alt="Tiger Leaping Gorge in Yunnan for B2B China program library."
        eyebrow="B2B program library"
        title="China programs built for resale, quoting, and partner customization."
        body="Browse ready-to-customize China itineraries by destination, duration, theme, pace, and traveler profile. Every program is a trade framework, not a fixed retail package."
        stats={[
          { value: String(journeys.length), label: "Program frameworks" },
          { value: "5-14", label: "Typical days" },
          { value: "FIT / Groups / MICE", label: "Partner formats" },
        ]}
      />

      <section className="border-y border-[var(--brand-border)] bg-[var(--brand-gray-50)] px-6 py-8 lg:px-10">
        <div className="mono-wrap">
          <FadeSection>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--brand-border)] pb-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-[var(--brand-border)] bg-white">
                  <SlidersHorizontal size={18} />
                </span>
                <div>
                  <div className="text-base font-semibold text-[var(--brand-black)]">Program finder</div>
                  <div className="text-sm text-[var(--brand-gray-600)]">{filteredJourneys.length} of {journeys.length} programs shown</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCount > 0 && (
                  <button type="button" onClick={resetFilters} className="h-11 border border-[var(--brand-border)] bg-white px-4 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-black)] hover:bg-[var(--brand-black)] hover:text-white">
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
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--brand-gray-500)]">Sort</span>
                <select
                  value={sortKey}
                  onChange={(event) => setSortKey(event.target.value as SortKey)}
                  className="h-12 w-full border border-[var(--brand-border)] bg-white px-3 text-sm font-semibold text-[var(--brand-black)] outline-none transition-colors hover:border-[var(--brand-gray-400)] focus:border-[var(--brand-black)]"
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

      <section className="border-b border-[var(--brand-border)] bg-[var(--brand-black)] px-6 py-8 text-white lg:px-10">
        <div className="mono-wrap">
          <div className="grid grid-cols-1 gap-px bg-white/20 md:grid-cols-4">
            {visualCategories.map((item, index) => (
              <FadeSection key={item.src} delay={index * 45}>
                <figure className="group relative min-h-[260px] overflow-hidden bg-[var(--brand-black)]">
                  <img src={item.src} alt={item.alt} className="h-full min-h-[260px] w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/6 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mono-index mb-2 text-[var(--brand-gray-300)]">Program signal</div>
                    <h2 className="text-2xl font-semibold leading-tight text-white">{item.title}</h2>
                  </figcaption>
                </figure>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2 xl:grid-cols-3">
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
                className="group grid min-h-full cursor-pointer bg-white text-[var(--brand-black)] transition-colors hover:bg-[var(--brand-gray-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--brand-black)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--brand-gray-100)]">
                  <img src={journey.image} alt={journey.gallery[0]?.alt || journey.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" decoding="async" />
                  <div className="absolute left-3 top-3 bg-[var(--brand-black)] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                    {journey.pricingNote}
                  </div>
                </div>
                <div className="grid gap-5 p-5 md:p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="mono-index border border-[var(--brand-border)] px-2.5 py-1">{journey.duration}</span>
                    <span className="mono-index border border-[var(--brand-border)] px-2.5 py-1">{journey.pace}</span>
                    <span className="mono-index border border-[var(--brand-border)] px-2.5 py-1">{journey.physicalLevel}</span>
                  </div>
                  <div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-500)]">{journey.route}</p>
                    <h2 className="text-xl font-semibold leading-tight text-[var(--brand-black)] md:text-[1.45rem]">{journey.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-[var(--brand-gray-600)]">{journey.subtitle}</p>
                  </div>
                  <div className="grid gap-4 border-y border-[var(--brand-border)] py-4 2xl:grid-cols-2">
                    <div>
                      <div className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--brand-gray-500)]">Best for</div>
                      <div className="text-sm leading-6 text-[var(--brand-gray-700)]">{journey.bestFor.slice(0, 2).join(" / ")}</div>
                    </div>
                    <div>
                      <div className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--brand-gray-500)]">Includes</div>
                      <div className="text-sm leading-6 text-[var(--brand-gray-700)]">Private guide, transfers, hotels, ticket coordination</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[...journey.themes.slice(0, 3), ...journey.travelerTypes.slice(0, 2)].map((tag) => (
                      <span key={tag} className="border border-[var(--brand-border)] px-2.5 py-1 text-xs text-[var(--brand-gray-700)]">{tag}</span>
                    ))}
                  </div>
                  <div className="grid gap-3 2xl:grid-cols-2">
                    <Link
                      href={`/journeys/${journey.id}`}
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex h-11 items-center justify-center gap-2 border border-[var(--brand-black)] bg-[var(--brand-black)] px-4 text-sm font-semibold text-white no-underline transition-colors hover:bg-[var(--brand-gray-800)]"
                    >
                      View details <ArrowRight size={15} />
                    </Link>
                    <a
                      href={programEmailHref(journey)}
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex h-11 items-center justify-center gap-2 border border-[var(--brand-border)] bg-white px-4 text-sm font-semibold text-[var(--brand-black)] no-underline transition-colors hover:border-[var(--brand-black)] hover:bg-[var(--brand-gray-50)]"
                    >
                      Request by email <Mail size={15} />
                    </a>
                  </div>
                </div>
              </article>
            </FadeSection>
          ))}
        </div>
      </section>

      <DarkImageSection
        image="/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-xidi.jpg"
        alt="Xidi Anhui village for custom East China program quoting."
        eyebrow="Custom quoting"
        title="Send us your market, group size, travel window, hotel level, and dietary needs."
        imagePosition="center top"
        actions={
          <Link href="/contact" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
            Request net rate <ArrowRight size={17} />
          </Link>
        }
      />
    </main>
  );
}
