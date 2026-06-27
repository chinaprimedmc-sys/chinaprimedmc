import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Star, Clock, MapPin, ArrowRight } from "lucide-react";
import { destinations, journeys, testimonials } from "@/lib/data";

const FadeSection = ({ children, delay = 0, className = "" }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const featuredJourneys = journeys.slice(0, 3);
  const featuredDestinations = destinations.slice(0, 6);

  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "#0F0F0F", paddingTop: "72px" }}>
      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION — 情感化、高冲击力
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ height: "100vh", minHeight: "700px" }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663786910793/nv3b3r8xSigzoBGpUx4ZRH/hero-cultural-immersion-Pas5vaV8mbQ3edgX897AQX.webp"
          alt="Cultural immersion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15, 15, 15, 0.3) 0%, rgba(15, 15, 15, 0.1) 100%)" }} />

        <div className="absolute inset-0 flex flex-col justify-center items-start" style={{ paddingLeft: "max(2rem, 5vw)" }}>
          <FadeSection delay={0} className="max-w-2xl">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "24px", fontWeight: 600 }}>
              Private Journeys Designed by Experts
            </div>
            <h1 style={{
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#FFFFFF",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}>
              Discover the China Beyond the Guidebook
            </h1>
            <p style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "#F0F0F0",
              maxWidth: "600px",
              lineHeight: 1.6,
              marginBottom: "40px",
              fontWeight: 300,
            }}>
              Curated experiences designed by local experts with 23+ years in the industry. Cultural immersion, culinary adventures, hidden destinations.
            </p>
            <div className="flex gap-4">
              <Link href="/journeys" className="btn-primary" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#B8860B",
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A67C0A"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#B8860B"; e.currentTarget.style.transform = "scale(1)"; }}>
                Explore Journeys <ArrowRight size={18} />
              </Link>
              <Link href="/destinations" className="btn-secondary" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "2px solid #FFFFFF",
                color: "#FFFFFF",
                padding: "12px 28px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
              }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}>
                Iconic & Hidden Destinations
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STATS SECTION — 社会证明
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "#F9F7F4", borderTop: "1px solid #E5E3E0" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "23+", label: "Years of Experience" },
              { number: "30+", label: "Countries Served" },
              { number: "500+", label: "Successful Journeys" },
              { number: "98%", label: "Guest Satisfaction" },
            ].map((stat, i) => (
              <FadeSection key={i} delay={i * 100} className="text-center">
                <div style={{ fontSize: "2.5rem", fontWeight: 600, color: "#B8860B", marginBottom: "8px" }}>{stat.number}</div>
                <div style={{ fontSize: "0.95rem", color: "#6B6B6B" }}>{stat.label}</div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TESTIMONIALS — 实时评价轮播
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "#F9F7F4", borderTop: "1px solid #E5E3E0" }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <FadeSection className="text-center mb-16">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Guest Stories
            </div>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 300, color: "#0F0F0F", letterSpacing: "-0.02em" }}>
              What Travelers Say
            </h2>
          </FadeSection>

          <FadeSection>
            <div style={{ padding: "24px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid #E5E3E0" }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#B8860B" color="#B8860B" />
                ))}
              </div>
              <p style={{
                fontSize: "0.95rem",
                color: "#0F0F0F",
                lineHeight: 1.6,
                marginBottom: "16px",
                fontStyle: "italic",
                fontFamily: "'Georgia', serif",
              }}>
                "{testimonials[testimonialIndex]?.text}"
              </p>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0F0F0F", marginBottom: "2px" }}>
                {testimonials[testimonialIndex]?.author}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#6B6B6B" }}>
                {testimonials[testimonialIndex]?.location}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full transition-all"
                style={{
                  backgroundColor: "#E5E3E0",
                  color: "#0F0F0F",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#B8860B";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#E5E3E0";
                  e.currentTarget.style.color = "#0F0F0F";
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full transition-all"
                style={{
                  backgroundColor: "#E5E3E0",
                  color: "#0F0F0F",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#B8860B";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#E5E3E0";
                  e.currentTarget.style.color = "#0F0F0F";
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FEATURED JOURNEYS — 不对称编辑网格
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeSection className="mb-16">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Curated Experiences
            </div>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 300, color: "#0F0F0F", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Featured Journeys
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#6B6B6B", maxWidth: "700px", lineHeight: 1.8 }}>
              Each journey is designed by local experts and tailored to reveal the authentic China — cultural depths, culinary adventures, and hidden destinations.
            </p>
          </FadeSection>

          {/* 不对称网格：主角 + 2行 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* 主角大卡片 */}
            <FadeSection delay={0} className="lg:col-span-2 lg:row-span-2">
              <Link href={`/journeys/${featuredJourneys[0].id}`} className="group block h-full" style={{ textDecoration: "none" }}>
                <div className="relative overflow-hidden rounded-lg" style={{ height: "500px", marginBottom: "20px" }}>
                  <img src={featuredJourneys[0].image} alt={featuredJourneys[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 style={{ fontSize: "2rem", fontWeight: 400, color: "#0F0F0F", marginBottom: "12px", fontFamily: "'Georgia', serif" }}>
                  {featuredJourneys[0].title}
                </h3>
                <p style={{ fontSize: "1rem", color: "#6B6B6B", marginBottom: "16px", lineHeight: 1.7 }}>
                  {featuredJourneys[0].subtitle}
                </p>
                <div className="flex items-center gap-6 text-sm" style={{ color: "#B8860B" }}>
                  <span className="flex items-center gap-2">
                    <Clock size={16} /> {featuredJourneys[0].duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} /> {featuredJourneys[0].destinations.length} destinations
                  </span>
                </div>
              </Link>
            </FadeSection>

            {/* 右侧两个中卡片 */}
            {featuredJourneys.slice(1).map((journey, i) => (
              <FadeSection key={journey.id} delay={(i + 1) * 100}>
                <Link href={`/journeys/${journey.id}`} className="group block h-full" style={{ textDecoration: "none" }}>
                  <div className="relative overflow-hidden rounded-lg" style={{ height: "240px", marginBottom: "16px" }}>
                    <img src={journey.image} alt={journey.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h4 style={{ fontSize: "1.3rem", fontWeight: 400, color: "#0F0F0F", marginBottom: "8px", fontFamily: "'Georgia', serif" }}>
                    {journey.title}
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "#6B6B6B", marginBottom: "12px" }}>
                    {journey.duration}
                  </p>
                </Link>
              </FadeSection>
            ))}
          </div>

          <FadeSection className="text-center">
            <Link href="/journeys" className="inline-flex items-center gap-2 btn-primary" style={{
              backgroundColor: "#B8860B",
              color: "#FFFFFF",
              padding: "14px 32px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "1rem",
              transition: "all 0.3s ease",
            }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A67C0A"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#B8860B"; e.currentTarget.style.transform = "scale(1)"; }}>
              Explore All Journeys <ArrowRight size={18} />
            </Link>
          </FadeSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHY CHOOSE US — 差异化优势
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "#F9F7F4", borderTop: "1px solid #E5E3E0" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeSection className="mb-16 text-center">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Why Choose Us
            </div>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 300, color: "#0F0F0F", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              The China Prime Difference
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Local Expertise",
                description: "23+ years operating in China. Our guides are not just knowledgeable — they are deeply embedded in local communities with relationships built over decades.",
                icon: "🏛️",
              },
              {
                title: "Cultural Immersion",
                description: "Private access to experiences most travelers never encounter. Stay with families, dine with artisans, learn from masters of ancient crafts.",
                icon: "🎨",
              },
              {
                title: "Culinary Excellence",
                description: "Food is culture. Every journey includes meals designed by culinary experts — from street food to Michelin-worthy private dinners.",
                icon: "🍜",
              },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 100}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "16px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#0F0F0F", marginBottom: "12px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "1rem", color: "#6B6B6B", lineHeight: 1.8 }}>
                    {item.description}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FEATURED DESTINATIONS — 目的地展示
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeSection className="mb-16">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Iconic & Hidden
            </div>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 300, color: "#0F0F0F", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              30 Destinations Across China
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((dest, i) => (
              <FadeSection key={dest.id} delay={i * 50}>
                <Link href={`/destinations/${dest.id}`} className="group block" style={{ textDecoration: "none" }}>
                  <div className="relative overflow-hidden rounded-lg" style={{ height: "280px", marginBottom: "16px" }}>
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 500, color: "#0F0F0F", marginBottom: "8px" }}>
                    {dest.name}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#6B6B6B", marginBottom: "12px", fontStyle: "italic" }}>
                    {dest.tagline}
                  </p>
                </Link>
              </FadeSection>
            ))}
          </div>

          <FadeSection className="text-center mt-16">
            <Link href="/destinations" className="inline-flex items-center gap-2 btn-primary" style={{
              backgroundColor: "#B8860B",
              color: "#FFFFFF",
              padding: "14px 32px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "1rem",
              transition: "all 0.3s ease",
            }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A67C0A"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#B8860B"; e.currentTarget.style.transform = "scale(1)"; }}>
              Explore All Destinations <ArrowRight size={18} />
            </Link>
          </FadeSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CORPORATE SUCCESS STORIES — 商务团案例
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeSection className="mb-16 text-center">
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: "12px", fontWeight: 600 }}>
              Corporate Programs
            </div>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 300, color: "#0F0F0F", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              B2B Success Stories
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#6B6B6B", maxWidth: "700px", lineHeight: 1.8, margin: "0 auto" }}>
              Tailored experiences for corporate teams, executive retreats, and business delegations.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "Fortune 500 Tech Company",
                title: "Executive Leadership Retreat",
                description: "A 5-day immersive program for 45 senior executives combining strategic business discussions with cultural immersion in Beijing and Shanghai. Private meetings with Chinese business leaders, exclusive access to historical sites, and team-building activities in traditional settings.",
                participants: "45 executives",
                duration: "5 days",
                focus: "Leadership",
              },
              {
                company: "International Investment Firm",
                title: "Market Exploration & Networking",
                description: "A customized 8-day program for 30 investment professionals to explore emerging market opportunities. Included visits to tech hubs in Shenzhen and Hangzhou, meetings with local entrepreneurs and government officials, and cultural experiences to build relationships.",
                participants: "30 professionals",
                duration: "8 days",
                focus: "Business Dev",
              },
              {
                company: "Global Manufacturing Group",
                title: "Supply Chain & Cultural Bridge",
                description: "A 6-day program for 60 team members combining factory visits, supplier meetings, and cultural immersion. Enhanced team cohesion through shared experiences while strengthening business relationships with Chinese partners and suppliers.",
                participants: "60 members",
                duration: "6 days",
                focus: "Team Building",
              },
              {
                company: "European Consulting Firm",
                title: "Client Appreciation & Incentive Trip",
                description: "A luxury 4-day program for 25 VIP clients featuring private access to iconic sites, exclusive dining experiences with local business leaders, and bespoke activities. Strengthened client relationships while showcasing company appreciation and cultural sophistication.",
                participants: "25 VIP clients",
                duration: "4 days",
                focus: "Client Engagement",
              },
              {
                company: "Asian Banking Consortium",
                title: "Cross-Cultural Business Summit",
                description: "A 7-day summit for 80 banking executives featuring keynote speeches, roundtable discussions with Chinese financial leaders, and cultural immersion activities. Facilitated knowledge exchange and strengthened regional business networks.",
                participants: "80 executives",
                duration: "7 days",
                focus: "Networking",
              },
              {
                company: "Automotive Industry Alliance",
                title: "Innovation & Partnership Exploration",
                description: "A 5-day program for 50 engineers and managers combining visits to advanced manufacturing facilities, meetings with Chinese automotive innovators, and team challenges in historic settings. Fostered innovation partnerships and cross-cultural collaboration.",
                participants: "50 professionals",
                duration: "5 days",
                focus: "Innovation",
              },
            ].map((story, i) => (
              <FadeSection key={i} delay={i * 50}>
                <div style={{ 
                  padding: "24px", 
                  backgroundColor: "#F9F7F4", 
                  borderRadius: "12px", 
                  border: "1px solid #E5E3E0",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <div style={{ marginBottom: "16px" }}>
                    <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#B8860B", fontWeight: 600, marginBottom: "8px" }}>
                      {story.company}
                    </p>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 500, color: "#0F0F0F", marginBottom: "12px", fontFamily: "'Georgia', serif" }}>
                      {story.title}
                    </h3>
                  </div>
                  
                  <p style={{ fontSize: "0.95rem", color: "#6B6B6B", lineHeight: 1.7, marginBottom: "16px", flex: 1 }}>
                    {story.description}
                  </p>
                  
                  <div style={{ borderTop: "1px solid #E5E3E0", paddingTop: "16px" }}>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p style={{ fontSize: "0.75rem", color: "#B8860B", fontWeight: 600, marginBottom: "4px" }}>PARTICIPANTS</p>
                        <p style={{ fontSize: "0.9rem", color: "#0F0F0F", fontWeight: 500 }}>{story.participants}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "0.75rem", color: "#B8860B", fontWeight: 600, marginBottom: "4px" }}>DURATION</p>
                        <p style={{ fontSize: "0.9rem", color: "#0F0F0F", fontWeight: 500 }}>{story.duration}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "0.75rem", color: "#B8860B", fontWeight: 600, marginBottom: "4px" }}>FOCUS</p>
                        <p style={{ fontSize: "0.9rem", color: "#0F0F0F", fontWeight: 500 }}>{story.focus}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "#F9F7F4", borderTop: "1px solid #E5E3E0" }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          <FadeSection>
            <h2 style={{ fontSize: "3rem", fontWeight: 300, color: "#0F0F0F", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Ready to Begin Your Journey?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#6B6B6B", marginBottom: "32px", lineHeight: 1.8, maxWidth: "700px", margin: "0 auto 32px" }}>
              Contact us today to discuss your perfect journey. Our team will work with you to create an experience tailored to your interests, pace, and style.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 btn-primary" style={{
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
              <a href="https://wa.me/447985052302" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-secondary" style={{
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
