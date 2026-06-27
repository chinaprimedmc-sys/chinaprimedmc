import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { destinations } from "@/lib/data";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(22px)", transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

const categories = [
  { id: "all", label: "All" },
  { id: "iconic", label: "Iconic" },
  { id: "cultural", label: "Cultural" },
  { id: "adventure", label: "Adventure" },
  { id: "luxury", label: "Urban / Luxury" },
];

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all" ? destinations : destinations.filter(d => d.category === activeCategory);

  return (
    <main style={{ backgroundColor: "var(--brand-white)", color: "var(--brand-black)", paddingTop: "72px" }}>
      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.55fr]">
          <FadeSection>
            <p className="b2b-eyebrow">China coverage</p>
            <h1 className="b2b-heading" style={{ maxWidth: 880 }}>Destination coverage for China programs.</h1>
          </FadeSection>
          <FadeSection delay={100} className="self-end">
            <p className="b2b-lede" style={{ marginTop: 0 }}>
              A working map of cities, regions, and routes we commonly operate for private clients, groups, and specialist programs.
            </p>
          </FadeSection>
        </div>
      </section>

      <section className="border-y border-[var(--brand-border)] bg-white px-6 py-6 lg:px-10">
        <div className="mono-wrap flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((dest, index) => (
            <FadeSection key={dest.id} delay={index * 45}>
              <Link href={`/destinations/${dest.id}`} className="group block h-full bg-white" style={{ textDecoration: "none" }}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "grayscale(1)", opacity: 0.9 }}
                  />
                </div>
                <div className="p-6">
                  <div className="mono-index mb-5">{dest.category}</div>
                  <h2 className="text-2xl font-semibold" style={{ color: "var(--brand-black)", lineHeight: 1.08, marginBottom: 14 }}>
                    {dest.name}
                  </h2>
                  <p className="b2b-body">{dest.tagline}</p>
                  <div className="mt-7 flex flex-wrap justify-between gap-4 border-t border-[var(--brand-border)] pt-5 text-sm text-[var(--brand-gray-600)]">
                    <span className="flex items-center gap-2"><Clock size={15} /> {dest.duration}</span>
                    <span className="flex items-center gap-2"><MapPin size={15} /> {dest.bestTime.split(",")[0]}</span>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--brand-black)]">
                    Open coverage <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            </FadeSection>
          ))}
        </div>
      </section>
    </main>
  );
}
