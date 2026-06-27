/**
 * Destination Detail Page — Light Editorial Luxury Design System (方案 B)
 * 纯白背景、深黑标题、中性灰正文、深金色强调
 */
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowRight, ArrowLeft, Clock, MapPin, CheckCircle } from "lucide-react";
import { destinations, WHATSAPP_URL } from "@/lib/data";

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

export default function DestinationDetail() {
  const params = useParams<{ id: string }>();
  const dest = destinations.find(d => d.id === params.id);

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFFFFF", paddingTop: "72px" }}>
        <div className="text-center">
          <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "2rem", color: "var(--brand-text)", marginBottom: "24px" }}>Destination not found</h2>
          <Link href="/destinations" className="inline-flex items-center gap-2" style={{
            backgroundColor: "var(--brand-champagne)",
            color: "#FFFFFF",
            padding: "12px 24px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 500,
          }}>
            <ArrowLeft size={16} /> Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "var(--brand-text)", paddingTop: "72px" }}>
      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden flex items-end">
        <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17, 24, 39, 0.4) 0%, rgba(17, 24, 39, 0.1) 60%)" }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 w-full">
          <Link href="/destinations" className="inline-flex items-center gap-2 mb-6 text-xs tracking-[0.15em] uppercase transition-colors" style={{ color: "var(--brand-gray-100)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-champagne)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "var(--brand-gray-100)"; }}>
            <ArrowLeft size={12} /> All Destinations
          </Link>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "12px", fontWeight: 600, fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
            {dest.category === "iconic" ? "Iconic China" : dest.category === "cultural" ? "Cultural China" : dest.category === "adventure" ? "Adventure China" : "Luxury China"}
          </div>
          <h1 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            {dest.name}
          </h1>
          <p style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "1.3rem", fontStyle: "italic", color: "var(--brand-gray-100)" }}>{dest.tagline}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          QUICK INFO BAR
          ══════════════════════════════════════════════════════════════ */}
      <div style={{ backgroundColor: "var(--brand-parchment)", borderBottom: "1px solid var(--brand-border)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2">
              <Clock size={16} style={{ color: "var(--brand-champagne)" }} />
              <span style={{ fontSize: "0.85rem", color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>Suggested: {dest.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} style={{ color: "var(--brand-champagne)" }} />
              <span style={{ fontSize: "0.85rem", color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>Best time: {dest.bestTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          OVERVIEW
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16">
            <FadeSection>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "12px", fontWeight: 600 }}>
                About This Destination
              </div>
              <div style={{ width: "60px", height: "2px", background: "var(--brand-champagne)", marginBottom: "2rem" }} />
              <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                {dest.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2" style={{
                  backgroundColor: "var(--brand-champagne)",
                  color: "#FFFFFF",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-champagne-hover)"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-champagne)"; e.currentTarget.style.transform = "scale(1)"; }}>
                  Plan Your Visit <ArrowRight size={16} />
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2" style={{
                  border: "2px solid var(--brand-champagne)",
                  color: "var(--brand-champagne)",
                  padding: "12px 28px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-champagne)"; e.currentTarget.style.color = "#FFFFFF"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--brand-champagne)"; }}>
                  WhatsApp
                </a>
              </div>
            </FadeSection>

            <FadeSection delay={150}>
              <div style={{ backgroundColor: "var(--brand-parchment)", border: "1px solid var(--brand-border)", borderRadius: "8px", padding: "24px" }}>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "16px", fontWeight: 600 }}>
                  Highlights
                </div>
                <div className="space-y-3">
                  {dest.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <CheckCircle size={16} style={{ color: "var(--brand-champagne)", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.95rem", color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "var(--brand-parchment)", borderTop: "1px solid var(--brand-border)" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <FadeSection>
            <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "3rem", fontWeight: 300, color: "var(--brand-text)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Ready to Explore {dest.name}?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--brand-text-muted)", marginBottom: "32px", lineHeight: 1.8, fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
              Our specialists can design a custom journey that showcases the best of this destination. Contact us today to start planning.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2" style={{
                backgroundColor: "var(--brand-champagne)",
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-champagne-hover)"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-champagne)"; e.currentTarget.style.transform = "scale(1)"; }}>
                Enquire Now <ArrowRight size={18} />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2" style={{
                border: "2px solid var(--brand-champagne)",
                color: "var(--brand-champagne)",
                padding: "12px 28px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
              }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-champagne)"; e.currentTarget.style.color = "#FFFFFF"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--brand-champagne)"; }}>
                WhatsApp Us
              </a>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
