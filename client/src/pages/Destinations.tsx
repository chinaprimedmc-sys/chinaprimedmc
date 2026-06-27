/**
 * Destinations Page — Light Editorial Luxury Design System
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { destinations, type Destination } from "@/lib/data";

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
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

const categories = [
  { id: "all", label: "All Destinations" },
  { id: "iconic", label: "Iconic China" },
  { id: "cultural", label: "Cultural China" },
  { id: "adventure", label: "Adventure China" },
  { id: "luxury", label: "Luxury & Urban" },
];

function useHideOnScrollDown() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y - lastY.current > 8 && y > 160) setVisible(false);
      else if (lastY.current - y > 4) setVisible(true);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible;
}

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filterVisible = useHideOnScrollDown();
  const filtered = activeCategory === "all" ? destinations : destinations.filter(d => d.category === activeCategory);

  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "var(--brand-ink)" }}>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-10" style={{ backgroundColor: "var(--brand-parchment)" }}>
        <div className="max-w-[1400px] mx-auto">
          <FadeSection>
            <div className="section-label mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Explore China</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: "var(--brand-ink)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Curated Destinations Across China
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--brand-ink-3)", fontFamily: "'Lora', Georgia, serif" }}>
              From Beijing's imperial grandeur to Tibet's sacred highlands, from Yunnan's ethnic mosaic to the Silk Road's ancient oases — every destination in China tells a story unlike any other.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* Filter */}
      <section
        className="px-6 lg:px-10 py-8 sticky top-[72px] z-30"
        style={{
          backgroundColor: "rgba(247,245,240,0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--brand-border)",
          transform: filterVisible ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: filterVisible ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="font-label text-[10px] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-200"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: activeCategory === cat.id ? "var(--brand-champagne)" : "transparent",
                  color: activeCategory === cat.id ? "#FFFFFF" : "var(--brand-ink-3)",
                  border: `1px solid ${activeCategory === cat.id ? "var(--brand-champagne)" : "var(--brand-border)"}`,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest, i) => (
              <FadeSection key={dest.id} delay={i * 50}>
                <Link href={`/destinations/${dest.id}`}>
                  <div className="card-hover group cursor-pointer h-full" style={{ backgroundColor: "var(--brand-parchment)", border: "1px solid var(--brand-border)", borderRadius: "2px" }}>
                    <div className="img-zoom-container h-60 relative">
                      <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,24,39,0.85) 0%, transparent 60%)" }} />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="font-label text-[9px] tracking-[0.2em] uppercase mb-1" style={{ color: "var(--brand-champagne-soft)", fontFamily: "'Montserrat', sans-serif" }}>
                          {dest.category === "iconic" ? "Iconic China" : dest.category === "cultural" ? "Cultural China" : dest.category === "adventure" ? "Adventure China" : "Luxury China"}
                        </div>
                        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 300, color: "var(--brand-ink)" }}>{dest.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--brand-ink-3)", fontFamily: "'Lora', Georgia, serif" }}>{dest.tagline}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-xs" style={{ color: "#CBD2DC", fontFamily: "'Montserrat', sans-serif" }}>
                            <Clock size={10} /> {dest.duration}
                          </span>
                          <span className="flex items-center gap-1 text-xs" style={{ color: "#CBD2DC", fontFamily: "'Montserrat', sans-serif" }}>
                            <MapPin size={10} /> {dest.bestTime.split(",")[0]}
                          </span>
                        </div>
                        <span className="font-label text-[10px] tracking-[0.12em] uppercase flex items-center gap-1 transition-colors duration-200 group-hover:text-[var(--brand-champagne-soft)]" style={{ color: "#CBD2DC", fontFamily: "'Montserrat', sans-serif" }}>
                          Explore <ArrowRight size={10} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
