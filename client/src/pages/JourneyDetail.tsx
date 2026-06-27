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
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", color: "#0F0F0F", marginBottom: "24px" }}>Journey not found</h2>
          <Link href="/journeys" className="inline-flex items-center gap-2" style={{
            backgroundColor: "#B8860B",
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
    <div style={{ backgroundColor: "#FFFFFF", color: "#0F0F0F", paddingTop: "72px" }}>
      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[80vh] min-h-[550px] overflow-hidden flex items-end">
        <img src={journey.image} alt={journey.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15, 15, 15, 0.4) 0%, rgba(15, 15, 15, 0.1) 60%)" }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 w-full">
          <Link href="/journeys" className="inline-flex items-center gap-2 mb-6 text-xs tracking-[0.15em] uppercase transition-colors" style={{ color: "#F0F0F0", fontFamily: "'Montserrat', sans-serif" }} onMouseEnter={(e) => { e.currentTarget.style.color = "#B8860B"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "#F0F0F0"; }}>
            <ArrowLeft size={12} /> All Journeys
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-[9px] tracking-[0.2em] uppercase px-3 py-1" style={{ backgroundColor: "rgba(184, 134, 11, 0.2)", color: "#FFFFFF", fontFamily: "'Montserrat', sans-serif" }}>
              {journey.duration}
            </span>
            <span className="text-[9px] tracking-[0.15em] uppercase" style={{ color: "#F0F0F0", fontFamily: "'Montserrat', sans-serif" }}>
              {journey.difficulty}
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            {journey.title}
          </h1>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.3rem", fontStyle: "italic", color: "#F0F0F0" }}>{journey.subtitle}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          OVERVIEW
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16">
            <FadeSection>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
                Journey Overview
              </div>
              <div style={{ width: "60px", height: "2px", background: "#B8860B", marginBottom: "2rem" }} />
              <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", color: "#6B6B6B", fontFamily: "'Lora', Georgia, serif" }}>
                {journey.overview}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2" style={{
                  backgroundColor: "#B8860B",
                  color: "#FFFFFF",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A67C0A"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#B8860B"; e.currentTarget.style.transform = "scale(1)"; }}>
                  Enquire <ArrowRight size={16} />
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2" style={{
                  border: "2px solid #B8860B",
                  color: "#B8860B",
                  padding: "12px 28px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#B8860B"; e.currentTarget.style.color = "#FFFFFF"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#B8860B"; }}>
                  WhatsApp
                </a>
              </div>
            </FadeSection>

            <FadeSection delay={150}>
              <div style={{ backgroundColor: "#F9F7F4", border: "1px solid #E5E3E0", borderRadius: "8px", padding: "24px" }}>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "16px", fontWeight: 600 }}>
                  Trip Highlights
                </div>
                <div className="space-y-3">
                  {journey.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <CheckCircle size={16} style={{ color: "#B8860B", marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.95rem", color: "#6B6B6B", fontFamily: "'Lora', Georgia, serif" }}>{h}</span>
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
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#F9F7F4", borderTop: "1px solid #E5E3E0" }}>
        <div className="max-w-[1400px] mx-auto">
          <FadeSection className="mb-16">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Itinerary
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 300, color: "#0F0F0F", letterSpacing: "-0.02em" }}>
              Day by Day
            </h2>
          </FadeSection>

          <div className="space-y-4">
            {journey.days.map((day, i) => (
              <FadeSection key={i} delay={i * 40}>
                <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E3E0", borderRadius: "8px", overflow: "hidden" }}>
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
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F9F7F4"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FFFFFF"; }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "4px", fontWeight: 600 }}>
                        Day {i + 1}
                      </div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", fontWeight: 400, color: "#0F0F0F" }}>
                        {day.title}
                      </h3>
                    </div>
                    <ChevronDown size={20} style={{ color: "#B8860B", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 24px 20px", borderTop: "1px solid #E5E3E0", backgroundColor: "#F9F7F4" }}>
                      <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#6B6B6B", fontFamily: "'Lora', Georgia, serif" }}>
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
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", fontWeight: 300, color: "#0F0F0F", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Ready to Begin This Journey?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#6B6B6B", marginBottom: "32px", lineHeight: 1.8, fontFamily: "'Lora', Georgia, serif" }}>
              Contact us today to customize this journey or discuss variations tailored to your interests and schedule.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2" style={{
                backgroundColor: "#B8860B",
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A67C0A"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#B8860B"; e.currentTarget.style.transform = "scale(1)"; }}>
                Enquire Now <ArrowRight size={18} />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2" style={{
                border: "2px solid #B8860B",
                color: "#B8860B",
                padding: "12px 28px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
              }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#B8860B"; e.currentTarget.style.color = "#FFFFFF"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#B8860B"; }}>
                WhatsApp Us
              </a>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
