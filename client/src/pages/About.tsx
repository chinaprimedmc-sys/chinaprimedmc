/**
 * About Page — Light Editorial Luxury Design System (方案 B)
 * 纯白背景、深黑标题、中性灰正文、深金色强调
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";
import TradePresence from "@/components/TradePresence";
import { pageHeroImages } from "@/lib/heroImages";

const HERO_BG = pageHeroImages.company;
const HERO_BG_2 = "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china.jpg";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.06 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.75s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.75s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

const teamMembers = [
  { name: "China Operations Desk", initials: "CO", role: "Ground Operations", bio: "Our China-based team coordinates guides, vehicles, hotels, tickets, meals, and on-trip support for overseas travel partners." },
  { name: "Product Design Team", initials: "PD", role: "Itinerary Design", bio: "The product team turns partner briefs into practical China programs with clear pacing, route logic, and quote-ready service inclusions." },
  { name: "Regional Supplier Network", initials: "RS", role: "Local Delivery", bio: "We work with licensed local guides, drivers, hotels, restaurants, and attraction partners across China to keep delivery consistent." },
  { name: "Partner Support Team", initials: "PS", role: "B2B Communication", bio: "Our partner support team handles quotation updates, special requests, dietary needs, and operational follow-up before and during travel." },
];

const values = [
  { n: "01", title: "Depth Over Breadth", desc: "We believe in experiencing fewer places more deeply. Our itineraries are designed to reveal the soul of each destination, not simply check it off a list." },
  { n: "02", title: "Human Connection", desc: "The most memorable travel experiences involve genuine connection with local people. We design every journey to facilitate authentic encounters." },
  { n: "03", title: "Responsible Travel", desc: "We work exclusively with locally-owned businesses, support conservation initiatives, and ensure our journeys benefit the communities we visit." },
  { n: "04", title: "Radical Personalization", desc: "No two travelers are alike. Every journey we design is completely bespoke — shaped entirely by your interests, pace, and travel philosophy." },
];

export default function About() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "var(--brand-text)", paddingTop: "72px" }}>
      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative flex h-[78vh] min-h-[560px] items-end overflow-hidden bg-[var(--brand-black)]">
        <img src={HERO_BG} alt="About China Prime DMC" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.62) 46%, rgba(0,0,0,0.20) 100%), linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.06) 60%)" }} />
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 w-full">
          <FadeSection>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-gray-300)", marginBottom: "12px", fontWeight: 600 }}>
              Our Story
            </div>
            <h1 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2.8rem, 7vw, 6.4rem)", fontWeight: 560, color: "#FFFFFF", lineHeight: 0.95, letterSpacing: 0 }}>
              About China<br />Prime DMC
            </h1>
          </FadeSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BRAND INTRODUCTION — 不对称编辑布局
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-20 items-start">
            <FadeSection>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "12px", fontWeight: 600 }}>
                Who We Are
              </div>
              <div style={{ width: "60px", height: "2px", background: "var(--brand-champagne)", marginBottom: "2.5rem" }} />
              <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "var(--brand-text)", lineHeight: 1.15, marginBottom: "2rem", letterSpacing: "-0.02em" }}>
                We are not a travel agency.<br />
                <em style={{ color: "var(--brand-champagne)" }}>We are China specialists.</em>
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                China Prime DMC was founded on a simple belief: that China is the world's most extraordinary travel destination, and that most travelers only scratch its surface.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                We are a China-based DMC team supporting global travel advisors, tour operators, wholesalers, corporate travel planners, education groups, and specialist-interest partners.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                Our operator, Youyouhui Travel Services Co., Ltd., was established in 2012. Since then, we have focused on practical China ground services, custom itinerary design, and reliable local delivery for overseas partners.
              </p>
            </FadeSection>

            <FadeSection delay={150}>
              <div className="space-y-4">
                {/* 拉引文 */}
                <div className="p-8 relative overflow-hidden" style={{ backgroundColor: "var(--brand-parchment)", border: "1px solid var(--brand-border)" }}>
                  <div className="absolute -top-4 -left-2 pointer-events-none select-none"
                    style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "10rem", fontWeight: 700, color: "rgba(0, 0, 0, 0.04)", lineHeight: 1 }}>"</div>
                  <blockquote className="relative" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "1.4rem", fontWeight: 300, color: "var(--brand-text)", fontStyle: "italic", lineHeight: 1.6 }}>
                    The China that most visitors never see — and the journeys that reveal it.
                  </blockquote>
                </div>
                {/* 统计网格 */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: "2012", l: "Established" },
                    { n: "30+", l: "Countries" },
                    { n: "1000s", l: "Journeys" },
                    { n: "24/7", l: "Support" },
                  ].map((s) => (
                    <div key={s.l} className="p-6 text-center" style={{ backgroundColor: "var(--brand-parchment)", border: "1px solid var(--brand-border)" }}>
                      <div style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "2.5rem", fontWeight: 300, color: "var(--brand-champagne)", lineHeight: 1 }}>{s.n}</div>
                      <div style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "8px", color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontWeight: 500 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PHILOSOPHY — 编辑网格
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "var(--brand-parchment)", borderTop: "1px solid var(--brand-border)" }}>
        <div className="max-w-[1400px] mx-auto">
          <FadeSection className="mb-20">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "12px", fontWeight: 600 }}>
              Our Philosophy
            </div>
            <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 300, color: "var(--brand-text)", letterSpacing: "-0.02em" }}>
              How We Design Journeys
            </h2>
          </FadeSection>

          <div className="grid lg:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeSection key={v.title} delay={i * 80}>
                <div className="p-10 h-full relative overflow-hidden" style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--brand-border)" }}>
                  <div className="absolute -bottom-6 -right-4 pointer-events-none select-none"
                    style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "9rem", fontWeight: 700, color: "rgba(0, 0, 0, 0.03)", lineHeight: 1 }}>
                    {v.n}
                  </div>
                  <div className="relative">
                    <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px", color: "var(--brand-champagne)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontWeight: 600 }}>{v.n}</div>
                    <h3 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "1.8rem", fontWeight: 300, color: "var(--brand-text)", lineHeight: 1.2, marginBottom: "12px" }}>{v.title}</h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>{v.desc}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHAT MAKES US DIFFERENT
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-center">
            <FadeSection>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "12px", fontWeight: 600 }}>
                What Makes Us Different
              </div>
              <div style={{ width: "60px", height: "2px", background: "var(--brand-champagne)", marginBottom: "2rem" }} />
              <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "var(--brand-text)", lineHeight: 1.15, marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
                China relationships built for<br />
                <em style={{ color: "var(--brand-champagne)" }}>global B2B delivery</em>
              </h2>
              <div className="space-y-8">
                {[
                  { t: "B2B Operating Mindset", d: "We design for partners who need quote clarity, reliable execution, realistic pacing, net-rate logic, and fast communication across time zones." },
                  { t: "Local Network", d: "Our network of licensed guides, drivers, hotels, restaurants, and regional suppliers helps us operate China programs across classic cities and emerging destinations." },
                  { t: "Flexible Program Design", d: "Every sample program can be rebuilt around your source market, group size, hotel level, meal needs, budget position, and client profile." },
                ].map((item, i) => (
                  <FadeSection key={item.t} delay={i * 80}>
                    <div className="flex gap-5">
                      <div style={{ width: "2px", flexShrink: 0, backgroundColor: "var(--brand-champagne)", marginTop: "4px" }} />
                      <div>
                        <h4 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "8px" }}>{item.t}</h4>
                        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>{item.d}</p>
                      </div>
                    </div>
                  </FadeSection>
                ))}
              </div>
            </FadeSection>

            <FadeSection delay={150}>
              <div className="relative">
                <img src={HERO_BG_2} alt="China landscape" className="w-full h-[620px] object-cover rounded-lg" loading="lazy" decoding="async" />
                <div className="absolute inset-0 rounded-lg" style={{ background: "linear-gradient(to top, rgba(17, 24, 39, 0.3) 0%, transparent 60%)" }} />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TEAM SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "var(--brand-parchment)", borderTop: "1px solid var(--brand-border)" }}>
        <div className="max-w-[1400px] mx-auto">
          <FadeSection className="mb-20 text-center">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "12px", fontWeight: 600 }}>
              Our Team
            </div>
            <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 300, color: "var(--brand-text)", letterSpacing: "-0.02em" }}>
              Meet the Experts
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <FadeSection key={member.name} delay={i * 80}>
                <div style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--brand-border)", borderRadius: "8px", padding: "24px", textAlign: "center" }}>
                  <div style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "var(--brand-champagne)",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: 600,
                    margin: "0 auto 16px",
                    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  }}>
                    {member.initials}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--brand-text)", marginBottom: "4px" }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--brand-champagne)", marginBottom: "12px", fontWeight: 500 }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--brand-text-muted)", lineHeight: 1.6, fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                    {member.bio}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <TradePresence variant="about" />

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <FadeSection>
            <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "3rem", fontWeight: 300, color: "var(--brand-text)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Ready to Begin?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--brand-text-muted)", marginBottom: "32px", lineHeight: 1.8, fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
              Contact us today to discuss your perfect journey. Our team will work with you to create an experience tailored to your interests, pace, and style.
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
                Plan Your Journey <ArrowRight size={18} />
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
