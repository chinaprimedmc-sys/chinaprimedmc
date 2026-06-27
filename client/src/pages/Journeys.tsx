import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { journeys } from "@/lib/data";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(22px)", transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

const categories = ["All", "Iconic", "Cultural", "Adventure", "Culinary", "Wellness", "Family-Friendly", "Halal", "Women-Only", "Senior-Friendly", "Accessible", "Vegetarian"];

export default function Journeys() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);

  const toggleCategory = (cat: string) => {
    if (cat === "All") {
      setSelectedCategories(["All"]);
    } else {
      const newCategories = selectedCategories.includes(cat)
        ? selectedCategories.filter(c => c !== cat)
        : selectedCategories.filter(c => c !== "All").concat(cat);
      setSelectedCategories(newCategories.length === 0 ? ["All"] : newCategories);
    }
  };

  const filteredJourneys = selectedCategories.includes("All")
    ? journeys
    : journeys.filter(journey =>
        selectedCategories.includes(journey.category) ||
        (journey.tags && journey.tags.some(tag => selectedCategories.includes(tag)))
      );

  return (
    <main style={{ backgroundColor: "var(--brand-white)", color: "var(--brand-black)", paddingTop: "72px" }}>
      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.55fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Sample program library</p>
            <h1 className="b2b-heading" style={{ maxWidth: 860 }}>Reference programs for China proposals.</h1>
          </FadeSection>
          <FadeSection delay={100} className="self-end">
            <p className="b2b-lede" style={{ marginTop: 0 }}>
              These are starting points for partner proposals. Every routing, pace, hotel level, meal plan, and service standard can be rebuilt around your client brief.
            </p>
          </FadeSection>
        </div>
      </section>

      <section className="border-y border-[var(--brand-border)] bg-white px-6 py-6 lg:px-10">
        <div className="mono-wrap">
          <FadeSection>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = selectedCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className="transition-colors"
                    style={{
                      backgroundColor: active ? "var(--brand-black)" : "var(--brand-white)",
                      border: "1px solid var(--brand-border)",
                      color: active ? "var(--brand-white)" : "var(--brand-gray-700)",
                      fontSize: "0.72rem",
                      fontWeight: 720,
                      letterSpacing: "0.08em",
                      minHeight: 38,
                      padding: "0 14px",
                      textTransform: "uppercase",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-px bg-[var(--brand-border)]">
          {filteredJourneys.map((journey, index) => (
            <FadeSection key={journey.id} delay={index * 45}>
              <Link href={`/journeys/${journey.id}`} className="group grid bg-white md:grid-cols-[340px_1fr_auto]" style={{ textDecoration: "none" }}>
                <div className="relative h-64 overflow-hidden md:h-full">
                  <img
                    src={journey.image}
                    alt={journey.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "grayscale(1)", opacity: 0.88 }}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-5 flex flex-wrap gap-2">
                    <span className="mono-index border border-[var(--brand-border)] px-3 py-1">{journey.duration}</span>
                    <span className="mono-index border border-[var(--brand-border)] px-3 py-1">{journey.difficulty}</span>
                    <span className="mono-index border border-[var(--brand-border)] px-3 py-1">{journey.category}</span>
                  </div>
                  <h2 className="text-2xl font-semibold md:text-3xl" style={{ color: "var(--brand-black)", letterSpacing: 0, lineHeight: 1.08, marginBottom: 14 }}>
                    {journey.title}
                  </h2>
                  <p className="b2b-body" style={{ maxWidth: 760 }}>{journey.subtitle}</p>
                  <div className="mt-7 flex flex-wrap gap-6 text-sm text-[var(--brand-gray-600)]">
                    <span className="flex items-center gap-2"><Clock size={15} /> {journey.duration}</span>
                    <span className="flex items-center gap-2"><MapPin size={15} /> {journey.destinations?.length || 0} stops</span>
                  </div>
                </div>
                <div className="flex items-end p-6 md:p-8">
                  <span className="mono-button mono-button-secondary">
                    Open <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </FadeSection>
          ))}
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 items-end gap-10 md:grid-cols-[1fr_auto]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Need a different routing?</p>
            <h2 className="b2b-heading" style={{ color: "var(--brand-white)", maxWidth: 860 }}>
              Treat every sample as a draft, not a fixed product.
            </h2>
          </FadeSection>
          <FadeSection delay={100}>
            <Link href="/contact" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
              Send your brief <ArrowRight size={17} />
            </Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
