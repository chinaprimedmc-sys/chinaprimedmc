/**
 * About Page — Light Editorial Luxury Design System (方案 B)
 * 纯白背景、深黑标题、中性灰正文、深金色强调
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663786910793/nv3b3r8xSigzoBGpUx4ZRH/about-hero-WB6Ffx8gCWVUQwGjnBwSM4.webp";
const HERO_BG_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663786910793/nv3b3r8xSigzoBGpUx4ZRH/hero-bg-2-GoNbVjS2NTZPw3Hq8K79y4.webp";

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
  { name: "David Chen", initials: "DC", role: "Founder & Chief Experience Officer", bio: "Born in Shenzhen, educated in London, David has spent 23 years designing private journeys for discerning international travelers. His philosophy: every journey should change the way you see the world." },
  { name: "Sarah Liu", initials: "SL", role: "Head of Journey Design", bio: "Former National Geographic photographer and Yunnan specialist. Sarah's deep knowledge of China's minority cultures and remote landscapes shapes our most extraordinary itineraries." },
  { name: "James Wu", initials: "JW", role: "Tibet & Xinjiang Expert", bio: "With 15 years of experience in China's most challenging destinations, James has led over 200 expeditions to Tibet and the Silk Road. He speaks Tibetan and Uyghur." },
  { name: "Emma Zhang", initials: "EZ", role: "Guest Experience Director", bio: "Emma ensures every detail of your journey exceeds expectations — from the first conversation to the final farewell. She is your dedicated contact throughout your journey." },
];

const values = [
  { n: "01", title: "Depth Over Breadth", desc: "We believe in experiencing fewer places more deeply. Our itineraries are designed to reveal the soul of each destination, not simply check it off a list." },
  { n: "02", title: "Human Connection", desc: "The most memorable travel experiences involve genuine connection with local people. We design every journey to facilitate authentic encounters." },
  { n: "03", title: "Responsible Travel", desc: "We work exclusively with locally-owned businesses, support conservation initiatives, and ensure our journeys benefit the communities we visit." },
  { n: "04", title: "Radical Personalization", desc: "No two travelers are alike. Every journey we design is completely bespoke — shaped entirely by your interests, pace, and travel philosophy." },
];

export default function About() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "#0F0F0F", paddingTop: "72px" }}>
      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[72vh] min-h-[520px] overflow-hidden flex items-end">
        <img src={HERO_BG} alt="About China Prime DMC" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15, 15, 15, 0.4) 0%, rgba(15, 15, 15, 0.1) 60%)" }} />
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 w-full">
          <FadeSection>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Our Story
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
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
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
                Who We Are
              </div>
              <div style={{ width: "60px", height: "2px", background: "#B8860B", marginBottom: "2.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#0F0F0F", lineHeight: 1.15, marginBottom: "2rem", letterSpacing: "-0.02em" }}>
                We are not a travel agency.<br />
                <em style={{ color: "#B8860B" }}>We are China specialists.</em>
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#6B6B6B", fontFamily: "'Lora', Georgia, serif" }}>
                China Prime DMC was founded on a simple belief: that China is the world's most extraordinary travel destination, and that most travelers only scratch its surface.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#6B6B6B", fontFamily: "'Lora', Georgia, serif" }}>
                We are a team of China specialists — historians, photographers, food experts, and cultural guides — who have spent decades building the relationships and knowledge that make truly extraordinary journeys possible.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#6B6B6B", fontFamily: "'Lora', Georgia, serif" }}>
                Our operator, Youyouhui Travel Services Co., Ltd., has been designing private journeys for international travelers since 2001. In that time, we have welcomed travelers from over 30 countries and designed thousands of completely bespoke itineraries.
              </p>
            </FadeSection>

            <FadeSection delay={150}>
              <div className="space-y-4">
                {/* 拉引文 */}
                <div className="p-8 relative overflow-hidden" style={{ backgroundColor: "#F9F7F4", border: "1px solid #E5E3E0" }}>
                  <div className="absolute -top-4 -left-2 pointer-events-none select-none"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "10rem", fontWeight: 700, color: "rgba(184, 134, 11, 0.06)", lineHeight: 1 }}>"</div>
                  <blockquote className="relative" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", fontWeight: 300, color: "#0F0F0F", fontStyle: "italic", lineHeight: 1.6 }}>
                    The China that most visitors never see — and the journeys that reveal it.
                  </blockquote>
                </div>
                {/* 统计网格 */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: "23+", l: "Years Experience" },
                    { n: "30+", l: "Countries" },
                    { n: "1000s", l: "Journeys" },
                    { n: "24/7", l: "Support" },
                  ].map((s) => (
                    <div key={s.l} className="p-6 text-center" style={{ backgroundColor: "#F9F7F4", border: "1px solid #E5E3E0" }}>
                      <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: "#B8860B", lineHeight: 1 }}>{s.n}</div>
                      <div style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "8px", color: "#6B6B6B", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>{s.l}</div>
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
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#F9F7F4", borderTop: "1px solid #E5E3E0" }}>
        <div className="max-w-[1400px] mx-auto">
          <FadeSection className="mb-20">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Our Philosophy
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 300, color: "#0F0F0F", letterSpacing: "-0.02em" }}>
              How We Design Journeys
            </h2>
          </FadeSection>

          <div className="grid lg:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeSection key={v.title} delay={i * 80}>
                <div className="p-10 h-full relative overflow-hidden" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E3E0" }}>
                  <div className="absolute -bottom-6 -right-4 pointer-events-none select-none"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "9rem", fontWeight: 700, color: "rgba(184, 134, 11, 0.04)", lineHeight: 1 }}>
                    {v.n}
                  </div>
                  <div className="relative">
                    <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px", color: "#B8860B", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{v.n}</div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 300, color: "#0F0F0F", lineHeight: 1.2, marginBottom: "12px" }}>{v.title}</h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#6B6B6B", fontFamily: "'Lora', Georgia, serif" }}>{v.desc}</p>
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
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
                What Makes Us Different
              </div>
              <div style={{ width: "60px", height: "2px", background: "#B8860B", marginBottom: "2rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "#0F0F0F", lineHeight: 1.15, marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
                23 years of relationships<br />
                <em style={{ color: "#B8860B" }}>that open doors</em>
              </h2>
              <div className="space-y-8">
                {[
                  { t: "Private Access", d: "We have spent 23 years building relationships that give our travelers access to places and experiences simply not available through other operators — private viewings, after-hours access, and introductions to remarkable people." },
                  { t: "Local Network", d: "Our network of guides, drivers, hoteliers, and local families spans every province of China. These are not contractors — they are colleagues and friends who share our commitment to extraordinary travel." },
                  { t: "No Off-The-Shelf Itineraries", d: "Every journey we design begins with a blank page. We do not have standard packages. We have a deep knowledge of China and a commitment to designing journeys that are uniquely yours." },
                ].map((item, i) => (
                  <FadeSection key={item.t} delay={i * 80}>
                    <div className="flex gap-5">
                      <div style={{ width: "2px", flexShrink: 0, backgroundColor: "#B8860B", marginTop: "4px" }} />
                      <div>
                        <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8860B", marginBottom: "8px" }}>{item.t}</h4>
                        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#6B6B6B", fontFamily: "'Lora', Georgia, serif" }}>{item.d}</p>
                      </div>
                    </div>
                  </FadeSection>
                ))}
              </div>
            </FadeSection>

            <FadeSection delay={150}>
              <div className="relative">
                <img src={HERO_BG_2} alt="China landscape" className="w-full h-[620px] object-cover rounded-lg" />
                <div className="absolute inset-0 rounded-lg" style={{ background: "linear-gradient(to top, rgba(15, 15, 15, 0.3) 0%, transparent 60%)" }} />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TEAM SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#F9F7F4", borderTop: "1px solid #E5E3E0" }}>
        <div className="max-w-[1400px] mx-auto">
          <FadeSection className="mb-20 text-center">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Our Team
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 300, color: "#0F0F0F", letterSpacing: "-0.02em" }}>
              Meet the Experts
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <FadeSection key={member.name} delay={i * 80}>
                <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E3E0", borderRadius: "8px", padding: "24px", textAlign: "center" }}>
                  <div style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#B8860B",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: 600,
                    margin: "0 auto 16px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}>
                    {member.initials}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#0F0F0F", marginBottom: "4px" }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#B8860B", marginBottom: "12px", fontWeight: 500 }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.6, fontFamily: "'Lora', Georgia, serif" }}>
                    {member.bio}
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
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <FadeSection>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", fontWeight: 300, color: "#0F0F0F", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Ready to Begin?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#6B6B6B", marginBottom: "32px", lineHeight: 1.8, fontFamily: "'Lora', Georgia, serif" }}>
              Contact us today to discuss your perfect journey. Our team will work with you to create an experience tailored to your interests, pace, and style.
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
                Plan Your Journey <ArrowRight size={18} />
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
