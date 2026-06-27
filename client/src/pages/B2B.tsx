/**
 * B2B Partnerships Page — Light Editorial Luxury Design System (方案 B)
 * 纯白背景、深黑标题、中性灰正文、深金色强调
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Globe, Users, Award, Briefcase } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663786910793/nv3b3r8xSigzoBGpUx4ZRH/hero-bg-kmefs8MDDAygocYYphq93g.webp";

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

const partnerTypes = [
  {
    icon: <Globe size={24} />,
    title: "International Tour Operators",
    desc: "We work with tour operators worldwide who want to offer their clients exceptional China experiences. We handle all in-China logistics, guiding, and hospitality — you maintain the client relationship.",
    features: ["White-label itinerary design", "Competitive net rates", "Dedicated B2B account manager", "24/7 in-China support for your clients"],
  },
  {
    icon: <Briefcase size={24} />,
    title: "Travel Agencies & DMCs",
    desc: "For travel agencies and destination management companies looking to expand their China offering, we provide a complete ground services solution backed by 23 years of local expertise.",
    features: ["Full ground services package", "Flexible commission structure", "Co-branded marketing materials", "Regular product updates and training"],
  },
  {
    icon: <Users size={24} />,
    title: "Corporate Travel Managers",
    desc: "We design exceptional incentive trips, corporate retreats, and executive travel programs to China. Our corporate clients include Fortune 500 companies and leading professional services firms.",
    features: ["Incentive travel programs", "Executive retreat design", "Team-building experiences", "MICE event support"],
  },
  {
    icon: <Award size={24} />,
    title: "Luxury Travel Specialists",
    desc: "For luxury travel consultants and advisors who demand the very best for their clients, we offer access to China's most exclusive experiences, properties, and private access.",
    features: ["Ultra-luxury itinerary design", "Private access experiences", "Preferred partner rates at top properties", "Dedicated luxury concierge"],
  },
];

const whyPartner = [
  { title: "Licensed & Insured", desc: "Youyouhui Travel Services Co., Ltd. is fully licensed and insured. Your clients are in safe, professional hands." },
  { title: "23+ Years Experience", desc: "We have been designing China journeys for international travelers since 2001. Our experience is unmatched." },
  { title: "Competitive Net Rates", desc: "Our long-standing supplier relationships allow us to offer competitive net rates while maintaining exceptional quality." },
  { title: "Dedicated Support", desc: "Every partner has a dedicated account manager and access to our 24/7 in-China support team." },
  { title: "Flexible Arrangements", desc: "We work with partners of all sizes, from boutique agencies to global operators. Our arrangements are always tailored to your needs." },
  { title: "Transparent Communication", desc: "We believe in complete transparency — on pricing, on availability, and on what is and is not possible in China." },
];

export default function B2B() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "#0F0F0F", paddingTop: "72px" }}>
      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden flex items-end">
        <img src={HERO_BG} alt="B2B Partnerships" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15, 15, 15, 0.4) 0%, rgba(15, 15, 15, 0.1) 60%)" }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 w-full">
          <FadeSection>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Trade & Partnerships
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              B2B Partnerships
            </h1>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.3rem", fontStyle: "italic", color: "#F0F0F0" }}>
              Your trusted China ground partner
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PARTNERSHIP TYPES
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto">
          <FadeSection className="mb-16 text-center">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Partnership Models
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 300, color: "#0F0F0F", letterSpacing: "-0.02em" }}>
              We Work With Partners at Every Level
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, i) => (
              <FadeSection key={partner.title} delay={i * 80}>
                <div style={{ backgroundColor: "#F9F7F4", border: "1px solid #E5E3E0", borderRadius: "8px", padding: "32px" }}>
                  <div style={{ color: "#B8860B", marginBottom: "16px" }}>
                    {partner.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 400, color: "#0F0F0F", marginBottom: "12px" }}>
                    {partner.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#6B6B6B", lineHeight: 1.7, marginBottom: "16px", fontFamily: "'Lora', Georgia, serif" }}>
                    {partner.desc}
                  </p>
                  <ul className="space-y-2">
                    {partner.features.map((feature, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <CheckCircle size={16} style={{ color: "#B8860B", marginTop: "2px", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.9rem", color: "#6B6B6B", fontFamily: "'Lora', Georgia, serif" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHY PARTNER WITH US
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#F9F7F4", borderTop: "1px solid #E5E3E0" }}>
        <div className="max-w-[1400px] mx-auto">
          <FadeSection className="mb-16 text-center">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Why Partner With Us
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 300, color: "#0F0F0F", letterSpacing: "-0.02em" }}>
              The China Prime Advantage
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartner.map((item, i) => (
              <FadeSection key={item.title} delay={i * 80}>
                <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E3E0", borderRadius: "8px", padding: "24px" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", fontWeight: 400, color: "#0F0F0F", marginBottom: "12px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#6B6B6B", lineHeight: 1.7, fontFamily: "'Lora', Georgia, serif" }}>
                    {item.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PARTNERSHIP PROCESS
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto">
          <FadeSection className="mb-16 text-center">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Getting Started
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 300, color: "#0F0F0F", letterSpacing: "-0.02em" }}>
              The Partnership Process
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Initial Conversation", desc: "We discuss your business model, client base, and partnership goals." },
              { step: "02", title: "Proposal & Terms", desc: "We provide a customized partnership proposal tailored to your needs." },
              { step: "03", title: "Product Training", desc: "Our team conducts comprehensive training on our destinations, services, and systems." },
              { step: "04", title: "Go Live", desc: "You start offering China journeys to your clients with full support." },
            ].map((item, i) => (
              <FadeSection key={item.step} delay={i * 80}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: "3rem",
                    fontWeight: 300,
                    color: "#B8860B",
                    marginBottom: "12px",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                  }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", fontWeight: 400, color: "#0F0F0F", marginBottom: "8px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.6, fontFamily: "'Lora', Georgia, serif" }}>
                    {item.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#F9F7F4", borderTop: "1px solid #E5E3E0" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <FadeSection>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", fontWeight: 300, color: "#0F0F0F", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Ready to Partner With Us?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#6B6B6B", marginBottom: "32px", lineHeight: 1.8, fontFamily: "'Lora', Georgia, serif" }}>
              Let's discuss how China Prime DMC can help you expand your China offering and delight your clients with extraordinary journeys.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2" style={{
                backgroundColor: "#B8860B",
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A67C0A"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#B8860B"; e.currentTarget.style.transform = "scale(1)"; }}>
                Start a Conversation <ArrowRight size={18} />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2" style={{
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
                Contact Us
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
