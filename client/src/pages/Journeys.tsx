import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, Filter, MapPin, SlidersHorizontal, Users } from "lucide-react";
import { journeyFilterOptions, journeys } from "@/lib/programData";

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

function durationBand(days: number) {
  if (days <= 6) return "5-6 Days";
  if (days <= 9) return "7-9 Days";
  if (days <= 12) return "10-12 Days";
  return "13+ Days";
}

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] transition-colors"
      style={{
        backgroundColor: active ? "var(--brand-black)" : "var(--brand-white)",
        borderColor: active ? "var(--brand-black)" : "var(--brand-border)",
        color: active ? "var(--brand-white)" : "var(--brand-gray-700)",
      }}
    >
      {label}
    </button>
  );
}

export default function Journeys() {
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

  const activeCount = destinationFilters.length + durationFilters.length + themeFilters.length + travelerFilters.length + paceFilters.length;

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
      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.48fr]">
          <FadeSection>
            <p className="b2b-eyebrow">B2B program library</p>
            <h1 className="b2b-heading max-w-5xl">China programs built for resale, quoting, and partner customization.</h1>
          </FadeSection>
          <FadeSection delay={100} className="self-end">
            <p className="b2b-lede mt-0">
              Browse ready-to-customize China itineraries by destination, duration, theme, pace, and traveler profile. Every program is a trade framework, not a fixed retail package.
            </p>
          </FadeSection>
        </div>
      </section>

      <section className="border-y border-[var(--brand-border)] bg-[var(--brand-gray-50)] px-6 py-7 lg:px-10">
        <div className="mono-wrap">
          <FadeSection>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-[var(--brand-border)] bg-white">
                  <SlidersHorizontal size={17} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-[var(--brand-black)]">Filter programs</div>
                  <div className="text-xs text-[var(--brand-gray-600)]">{filteredJourneys.length} of {journeys.length} programs shown</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={sortKey}
                  onChange={(event) => setSortKey(event.target.value as SortKey)}
                  className="h-10 border border-[var(--brand-border)] bg-white px-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-gray-700)]"
                >
                  <option value="recommended">Recommended</option>
                  <option value="duration-asc">Shortest first</option>
                  <option value="duration-desc">Longest first</option>
                </select>
                {activeCount > 0 && (
                  <button type="button" onClick={resetFilters} className="h-10 border border-[var(--brand-border)] bg-white px-4 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-black)]">
                    Reset {activeCount}
                  </button>
                )}
              </div>
            </div>

            <div className="grid gap-5">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-600)]"><MapPin size={13} /> Destination</div>
                <div className="flex flex-wrap gap-2">
                  {journeyFilterOptions.destinations.map((item) => (
                    <FilterButton key={item} label={item} active={destinationFilters.includes(item)} onClick={() => setDestinationFilters(toggleValue(destinationFilters, item))} />
                  ))}
                </div>
              </div>
              <div className="grid gap-5 lg:grid-cols-3">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-600)]"><Clock size={13} /> Duration</div>
                  <div className="flex flex-wrap gap-2">
                    {journeyFilterOptions.durationBands.map((item) => (
                      <FilterButton key={item} label={item} active={durationFilters.includes(item)} onClick={() => setDurationFilters(toggleValue(durationFilters, item))} />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-600)]"><Filter size={13} /> Pace</div>
                  <div className="flex flex-wrap gap-2">
                    {journeyFilterOptions.pace.map((item) => (
                      <FilterButton key={item} label={item} active={paceFilters.includes(item)} onClick={() => setPaceFilters(toggleValue(paceFilters, item))} />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-600)]"><Users size={13} /> Traveler</div>
                  <div className="flex flex-wrap gap-2">
                    {journeyFilterOptions.travelerTypes.map((item) => (
                      <FilterButton key={item} label={item} active={travelerFilters.includes(item)} onClick={() => setTravelerFilters(toggleValue(travelerFilters, item))} />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-600)]">Theme</div>
                <div className="flex flex-wrap gap-2">
                  {journeyFilterOptions.themes.map((item) => (
                    <FilterButton key={item} label={item} active={themeFilters.includes(item)} onClick={() => setThemeFilters(toggleValue(themeFilters, item))} />
                  ))}
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-px bg-[var(--brand-border)] xl:grid-cols-2">
          {filteredJourneys.map((journey, index) => (
            <FadeSection key={journey.id} delay={(index % 6) * 35}>
              <Link href={`/journeys/${journey.id}`} className="group grid min-h-full bg-white text-[var(--brand-black)] no-underline transition-colors hover:bg-[var(--brand-gray-50)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--brand-gray-100)]">
                  <img src={journey.image} alt={journey.gallery[0]?.alt || journey.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute left-4 top-4 bg-[var(--brand-black)] px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white">
                    {journey.pricingNote}
                  </div>
                </div>
                <div className="grid gap-6 p-6 md:p-8">
                  <div className="flex flex-wrap gap-2">
                    <span className="mono-index border border-[var(--brand-border)] px-3 py-1">{journey.duration}</span>
                    <span className="mono-index border border-[var(--brand-border)] px-3 py-1">{journey.pace}</span>
                    <span className="mono-index border border-[var(--brand-border)] px-3 py-1">{journey.physicalLevel}</span>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-500)]">{journey.route}</p>
                    <h2 className="text-2xl font-semibold leading-tight text-[var(--brand-black)] md:text-3xl">{journey.title}</h2>
                    <p className="mt-4 text-base leading-7 text-[var(--brand-gray-600)]">{journey.subtitle}</p>
                  </div>
                  <div className="grid gap-4 border-y border-[var(--brand-border)] py-5 md:grid-cols-2">
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
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[var(--brand-black)]">View B2B program details</span>
                    <span className="inline-flex h-10 w-10 items-center justify-center border border-[var(--brand-border)] transition-colors group-hover:bg-[var(--brand-black)] group-hover:text-white">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeSection>
          ))}
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 items-end gap-10 md:grid-cols-[1fr_auto]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Custom quoting</p>
            <h2 className="b2b-heading max-w-4xl" style={{ color: "var(--brand-white)" }}>
              Send us your market, group size, travel window, hotel level, and dietary needs.
            </h2>
          </FadeSection>
          <FadeSection delay={100}>
            <Link href="/contact" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
              Request net rate <ArrowRight size={17} />
            </Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
