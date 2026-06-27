import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ClipboardList,
  Globe2,
  Handshake,
  Headphones,
  Hotel,
  MapPinned,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663786910793/nv3b3r8xSigzoBGpUx4ZRH/hero-cultural-immersion-Pas5vaV8mbQ3edgX897AQX.webp";

function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const stats = [
  { value: "2012", label: "Established in China" },
  { value: "30+", label: "Destinations operated" },
  { value: "13", label: "China city network" },
  { value: "24/7", label: "On-trip support" },
];

const partnerServices = [
  {
    icon: <ClipboardList size={24} />,
    title: "White-label itinerary design",
    desc: "Custom China programs built around your brand, client profile, budget, pace, and commercial structure.",
  },
  {
    icon: <MapPinned size={24} />,
    title: "Ground operations across China",
    desc: "Guides, vehicles, hotels, restaurants, rail, flights, tickets, special access, contingency planning, and local coordination.",
  },
  {
    icon: <UsersRound size={24} />,
    title: "Groups, FIT, MICE, and incentives",
    desc: "From luxury private clients to educational groups, corporate delegations, incentive trips, and specialist-interest tours.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Partner support before and during travel",
    desc: "Fast quoting, clear documentation, bilingual operation support, and live assistance while your clients are in China.",
  },
];

const partnerTypes = [
  "Travel advisors and luxury agencies",
  "Outbound tour operators",
  "DMCs needing China coverage",
  "Corporate travel and incentive teams",
  "Education and special-interest groups",
  "Muslim-friendly and family travel planners",
];

const operatingStrengths = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Licensed local operator",
    desc: "Operated by Youyouhui Travel Services Co., Ltd., with China-based relationships and on-the-ground accountability.",
  },
  {
    icon: <Hotel size={22} />,
    title: "Supplier depth",
    desc: "Hotels, guides, restaurants, transport providers, attractions, and local hosts selected for reliability and service fit.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Trade-friendly model",
    desc: "Net pricing, white-label delivery, flexible quoting, and clear communication designed for professional partners.",
  },
];

const process = [
  { step: "01", title: "Brief", desc: "Send destination, dates, client type, budget, pace, hotel level, and must-have experiences." },
  { step: "02", title: "Design", desc: "We return a clean, partner-ready itinerary with routing logic, inclusions, and operational notes." },
  { step: "03", title: "Quote", desc: "You receive transparent net pricing, options, and practical alternatives where availability or seasonality matters." },
  { step: "04", title: "Operate", desc: "Our China team manages the ground while you keep the client relationship and brand ownership." },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: "#FFFFFF", color: "var(--brand-text)", paddingTop: "72px" }}>
      <section className="relative overflow-hidden" style={{ minHeight: "calc(100vh - 72px)" }}>
        <img src={HERO_IMAGE} alt="China DMC ground operations" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(17,24,39,0.86) 0%, rgba(17,24,39,0.68) 45%, rgba(17,24,39,0.2) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-[1400px] items-center px-6 py-20 lg:px-10">
          <FadeSection className="max-w-3xl">
            <p
              style={{
                color: "var(--brand-champagne)",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              China ground partner for travel brands
            </p>
            <h1
              style={{
                color: "#FFFFFF",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                fontWeight: 300,
                letterSpacing: "0",
                lineHeight: 0.96,
                marginBottom: "26px",
                maxWidth: "980px",
              }}
            >
              Reliable China programs for your clients.
            </h1>
            <p
              style={{
                color: "#E8ECEF",
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
                lineHeight: 1.65,
                marginBottom: "34px",
                maxWidth: "680px",
              }}
            >
              China Prime DMC designs and operates private tours, groups, incentive trips, and specialist programs for travel advisors, tour operators, and corporate partners.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2"
                style={{
                  backgroundColor: "var(--brand-champagne)",
                  borderRadius: "999px",
                  color: "#FFFFFF",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  padding: "15px 28px",
                  textDecoration: "none",
                }}
              >
                Request a Partner Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="/b2b"
                className="inline-flex items-center gap-2"
                style={{
                  border: "1px solid rgba(255,255,255,0.72)",
                  borderRadius: "999px",
                  color: "#FFFFFF",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  padding: "14px 26px",
                  textDecoration: "none",
                }}
              >
                View Partner Services
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--brand-parchment)", borderBottom: "1px solid var(--brand-border)", borderTop: "1px solid var(--brand-border)" }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px px-6 py-10 md:grid-cols-4 lg:px-10">
          {stats.map((stat, index) => (
            <FadeSection key={stat.label} delay={index * 60} className="px-4 py-4 text-center">
              <div style={{ color: "var(--brand-text)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.7rem", fontWeight: 400 }}>
                {stat.value}
              </div>
              <div style={{ color: "var(--brand-text-muted)", fontFamily: "'Montserrat', sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {stat.label}
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-[1400px]">
          <FadeSection className="mb-14 max-w-3xl">
            <p className="b2b-eyebrow">What we do</p>
            <h2 className="b2b-heading">A China operations desk your team can trust.</h2>
            <p className="b2b-lede">
              We are built for partners who need precise answers, commercially usable proposals, and dependable delivery once clients land in China.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {partnerServices.map((service, index) => (
              <FadeSection key={service.title} delay={index * 70}>
                <article className="h-full border border-[var(--brand-border)] bg-[var(--brand-surface)] p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-surface-muted)] text-[var(--brand-champagne-hover)]">
                    {service.icon}
                  </div>
                  <h3 className="b2b-card-title">{service.title}</h3>
                  <p className="b2b-body">{service.desc}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10" style={{ backgroundColor: "var(--brand-ink)" }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Partner fit</p>
            <h2 className="b2b-heading" style={{ color: "#FFFFFF" }}>
              Built for teams selling China under their own brand.
            </h2>
            <p className="b2b-lede" style={{ color: "#CBD2DC" }}>
              Your clients see your brand. Behind the scenes, our China team handles feasibility, supplier coordination, and ground delivery.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2"
              style={{
                backgroundColor: "var(--brand-champagne)",
                borderRadius: "999px",
                color: "#FFFFFF",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.92rem",
                fontWeight: 700,
                padding: "14px 24px",
                textDecoration: "none",
              }}
            >
              Talk to Our B2B Team <ArrowRight size={18} />
            </a>
          </FadeSection>
          <FadeSection delay={120}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {partnerTypes.map((type) => (
                <div key={type} className="flex items-start gap-3 border border-white/10 bg-white/[0.04] p-5">
                  <CheckCircle2 size={18} style={{ color: "var(--brand-champagne)", flexShrink: 0, marginTop: 3 }} />
                  <span style={{ color: "#F7F5F0", fontFamily: "'Montserrat', sans-serif", fontSize: "0.95rem", fontWeight: 600 }}>
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10" style={{ backgroundColor: "var(--brand-parchment)" }}>
        <div className="mx-auto max-w-[1400px]">
          <FadeSection className="mb-14 text-center">
            <p className="b2b-eyebrow">Why partners choose us</p>
            <h2 className="b2b-heading">Local control, trade clarity, and human support.</h2>
          </FadeSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {operatingStrengths.map((item, index) => (
              <FadeSection key={item.title} delay={index * 80}>
                <article className="h-full bg-white p-8">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-surface-muted)] text-[var(--brand-champagne-hover)]">
                    {item.icon}
                  </div>
                  <h3 className="b2b-card-title">{item.title}</h3>
                  <p className="b2b-body">{item.desc}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-[1400px]">
          <FadeSection className="mb-14 max-w-3xl">
            <p className="b2b-eyebrow">Workflow</p>
            <h2 className="b2b-heading">A quote process designed for busy sales teams.</h2>
          </FadeSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {process.map((item, index) => (
              <FadeSection key={item.step} delay={index * 70}>
                <article className="h-full border-l-2 border-[var(--brand-champagne)] bg-[var(--brand-surface)] p-6">
                  <div style={{ color: "var(--brand-champagne)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", lineHeight: 1 }}>
                    {item.step}
                  </div>
                  <h3 className="b2b-card-title" style={{ marginTop: 18 }}>
                    {item.title}
                  </h3>
                  <p className="b2b-body">{item.desc}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10" style={{ backgroundColor: "var(--brand-ink-2)" }}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
          <FadeSection>
            <p className="b2b-eyebrow">Ready for a China quote?</p>
            <h2 className="b2b-heading" style={{ color: "#FFFFFF" }}>
              Send us your brief. We will turn it into a workable China program.
            </h2>
            <p className="b2b-lede" style={{ color: "#CBD2DC" }}>
              Best for: private clients, small groups, incentive trips, educational travel, special-interest programs, and multi-city China itineraries.
            </p>
          </FadeSection>
          <FadeSection delay={100}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2"
              style={{
                backgroundColor: "var(--brand-champagne)",
                borderRadius: "999px",
                color: "#FFFFFF",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 800,
                minWidth: "230px",
                padding: "16px 28px",
                textDecoration: "none",
              }}
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
