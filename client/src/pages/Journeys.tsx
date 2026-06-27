/**
 * Journeys Page — Light Editorial Luxury Design System
 * Pure white background + deep navy + soft gray + gold accents
 */
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
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.75s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.75s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
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
    <div style={{ backgroundColor: "#FFFFFF", color: "#0F172A", paddingTop: "72px" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-24 border-b" style={{ backgroundColor: "#F8F5F0", borderColor: "#E2E8F0" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeSection>
            <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif", color: "#D4A373", fontWeight: 500 }}>Curated Experiences</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3.5rem", fontWeight: 300, color: "#0F172A", marginBottom: "16px" }}>
              Curated Journeys
            </h1>
            <p style={{ color: "#475569", fontFamily: "'Lora', Georgia, serif", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "700px" }}>
              Each journey is a carefully crafted narrative — not a list of sights, but a story to be lived. Every itinerary can be adapted entirely to your interests, pace, and travel philosophy.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ── FILTER ───────────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeSection>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className="px-5 py-2 rounded transition-all text-sm font-medium"
                  style={{
                    backgroundColor: selectedCategories.includes(cat) ? "#D4A373" : "#F8F5F0",
                    color: selectedCategories.includes(cat) ? "#FFFFFF" : "#0F172A",
                    border: selectedCategories.includes(cat) ? "none" : "1px solid #E2E8F0",
                    letterSpacing: "0.05em",
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedCategories.includes(cat)) {
                      e.currentTarget.style.backgroundColor = "#E2E8F0";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedCategories.includes(cat)) {
                      e.currentTarget.style.backgroundColor = "#F8F5F0";
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── JOURNEYS GRID ────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJourneys.map((journey, i) => (
              <FadeSection key={journey.id} delay={i * 50}>
                <Link href={`/journeys/${journey.id}`} className="group block" style={{ textDecoration: "none" }}>
                  <div className="relative overflow-hidden rounded mb-6" style={{ height: "320px" }}>
                    <img src={journey.image} alt={journey.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs tracking-[0.1em] uppercase px-3 py-1 rounded" style={{ backgroundColor: "#F8F5F0", color: "#0F172A", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                      {journey.duration}
                    </span>
                    <span className="text-xs tracking-[0.1em] uppercase px-3 py-1 rounded" style={{ backgroundColor: "#F8F5F0", color: "#0F172A", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                      {journey.difficulty}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 400, color: "#0F172A", marginBottom: "8px" }}>
                    {journey.title}
                  </h3>
                  <p style={{ color: "#475569", fontFamily: "'Lora', Georgia, serif", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "12px" }}>
                    {journey.subtitle}
                  </p>
                  <div className="flex items-center gap-6 text-sm mb-6" style={{ color: "#94A3B8" }}>
                    <span className="flex items-center gap-2">
                      <Clock size={16} /> {journey.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} /> {journey.destinations?.length || 0} stops
                    </span>
                  </div>
                  <div className="flex items-center gap-2" style={{ color: "#D4A373", fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em" }}>
                    View Journey <ArrowRight size={14} />
                  </div>
                </Link>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 border-t" style={{ backgroundColor: "#F8F5F0", borderColor: "#E2E8F0" }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          <FadeSection>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.8rem", fontWeight: 300, color: "#0F172A", marginBottom: "16px" }}>
              Don't see your perfect journey?
            </h2>
            <p style={{ color: "#475569", fontFamily: "'Lora', Georgia, serif", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "24px" }}>
              Every itinerary can be customized. Contact us to discuss your dream China experience.
            </p>
            <Link href="/contact" className="px-6 py-3 rounded transition-all" style={{
              backgroundColor: "#D4A373",
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: 500,
              letterSpacing: "0.05em",
              display: "inline-block",
            }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#B8915F"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#D4A373"; }}>
              Customize Your Journey
            </Link>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
