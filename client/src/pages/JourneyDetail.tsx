/**
 * Journey Detail Page — Light Editorial Luxury Design System (方案 B)
 * 纯白背景、深黑标题、中性灰正文、深金色强调
 */
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle, ChevronDown } from "lucide-react";
import { journeys, WHATSAPP_URL } from "@/lib/data";

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

export default function JourneyDetail() {
  const params = useParams<{ id: string }>();
  const journey = journeys.find(j => j.id === params.id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!journey) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFFFFF", paddingTop: "72px" }}>
        <div className="text-center">
          <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "2rem", color: "var(--brand-text)", marginBottom: "24px" }}>Journey not found</h2>
          <Link href="/journeys" className="inline-flex items-center gap-2" style={{
            backgroundColor: "var(--brand-champagne)",
            color: "#FFFFFF",
            padding: "12px 24px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 500,
          }}>
            <ArrowLeft size={16} /> Back to Journeys
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
      <section className="relative h-[80vh] min-h-[550px] overflow-hidden flex items-end">
        <img src={journey.image} alt={journey.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17, 24, 39, 0.4) 0%, rgba(17, 24, 39, 0.1) 60%)" }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 w-full">
          <Link href="/journeys" className="inline-flex items-center gap-2 mb-6 text-xs tracking-[0.15em] uppercase transition-colors" style={{ color: "var(--brand-gray-100)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-champagne)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "var(--brand-gray-100)"; }}>
            <ArrowLeft size={12} /> All Journeys
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-[9px] tracking-[0.2em] uppercase px-3 py-1" style={{ backgroundColor: "rgba(255, 255, 255, 0.16)", color: "#FFFFFF", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
              {journey.duration}
            </span>
            <span className="text-[9px] tracking-[0.15em] uppercase" style={{ color: "var(--brand-gray-100)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
              {journey.difficulty}
            </span>
          </div>
          <h1 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            {journey.title}
          </h1>
          <p style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "1.3rem", fontStyle: "italic", color: "var(--brand-gray-100)" }}>{journey.subtitle}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          OVERVIEW
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16">
            <FadeSection>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "12px", fontWeight: 600 }}>
                Journey Overview
              </div>
              <div style={{ width: "60px", height: "2px", background: "var(--brand-champagne)", marginBottom: "2rem" }} />
              <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                {journey.overview}
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
                  Enquire <ArrowRight size={16} />
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
                  Trip Highlights
                </div>
                <div className="space-y-3">
                  {journey.highlights.map((h) => (
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
          DAY BY DAY
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "var(--brand-parchment)", borderTop: "1px solid var(--brand-border)" }}>
        <div className="max-w-[1400px] mx-auto">
          <FadeSection className="mb-16">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "12px", fontWeight: 600 }}>
              Itinerary
            </div>
            <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 300, color: "var(--brand-text)", letterSpacing: "-0.02em" }}>
              Day by Day
            </h2>
          </FadeSection>

          <div className="space-y-4">
            {journey.days.map((day, i) => (
              <FadeSection key={i} delay={i * 40}>
                <div style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--brand-border)", borderRadius: "8px", overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#FFFFFF",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-parchment)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FFFFFF"; }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "4px", fontWeight: 600 }}>
                        Day {i + 1}
                      </div>
                      <h3 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "1.3rem", fontWeight: 400, color: "var(--brand-text)" }}>
                        {day.title}
                      </h3>
                    </div>
                    <ChevronDown size={20} style={{ color: "var(--brand-champagne)", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 24px 20px", borderTop: "1px solid var(--brand-border)", backgroundColor: "var(--brand-parchment)" }}>
                      <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                        {day.description}
                      </p>
                    </div>
                  )}
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <FadeSection>
            <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "3rem", fontWeight: 300, color: "var(--brand-text)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Ready to Begin This Journey?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--brand-text-muted)", marginBottom: "32px", lineHeight: 1.8, fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
              Contact us today to customize this journey or discuss variations tailored to your interests and schedule.
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
