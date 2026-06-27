import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Headphones,
  MapPinned,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";
import TradePresence from "@/components/TradePresence";

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
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const metrics = [
  { value: "2012", label: "Established" },
  { value: "30+", label: "China destinations" },
  { value: "13", label: "City network" },
  { value: "24/7", label: "In-trip support" },
];

const services = [
  {
    icon: <ClipboardList size={20} />,
    title: "Itinerary architecture",
    desc: "Partner-ready China programs with routing logic, pace control, inclusions, options, and operational notes.",
  },
  {
    icon: <MapPinned size={20} />,
    title: "Ground execution",
    desc: "Guides, vehicles, hotels, restaurants, rail, flights, entrances, local hosts, and day-by-day coordination.",
  },
  {
    icon: <UsersRound size={20} />,
    title: "Groups, FIT, MICE",
    desc: "Private clients, specialist groups, incentive programs, educational travel, delegations, and multi-city series.",
  },
  {
    icon: <Headphones size={20} />,
    title: "Partner support",
    desc: "Fast quoting, clear documentation, feasibility advice, bilingual coordination, and live support in China.",
  },
];

const partnerFit = [
  "Travel advisors and luxury agencies",
  "Outbound tour operators",
  "DMCs needing China coverage",
  "Corporate travel and incentive teams",
  "Education and specialist-interest groups",
  "Family, halal, accessibility, and VIP planners",
];

const process = [
  { step: "01", title: "Brief", desc: "Send dates, destinations, client type, budget level, pace, hotel preference, and must-have experiences." },
  { step: "02", title: "Design", desc: "We return a clean program structure with routing, feasibility notes, supplier logic, and alternatives." },
  { step: "03", title: "Quote", desc: "You receive net pricing, inclusions, upgrade options, availability notes, and practical trade-offs." },
  { step: "04", title: "Operate", desc: "Our China team delivers on the ground while you keep the client relationship and brand ownership." },
];

export default function Home() {
  return (
    <main className="mono-shell" style={{ color: "var(--brand-text)", paddingTop: "72px" }}>
      <section className="px-6 lg:px-10" style={{ paddingBottom: "clamp(64px, 8vw, 104px)", paddingTop: "clamp(48px, 7vw, 88px)" }}>
        <div className="mono-wrap grid grid-cols-1 gap-10 lg:grid-cols-[0.92fr_0.78fr] lg:items-start lg:justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <p className="b2b-eyebrow">China ground services for travel brands</p>
              <h1
                style={{
                  color: "var(--brand-black)",
                  fontSize: "clamp(3.2rem, 7vw, 7.2rem)",
                  fontWeight: 540,
                  letterSpacing: 0,
                  lineHeight: 0.88,
                  margin: 0,
                  maxWidth: 980,
                }}
              >
                China,
                <br />
                operated precisely.
              </h1>
              <p className="b2b-lede" style={{ fontSize: "clamp(1.05rem, 1.45vw, 1.22rem)", marginTop: 28, maxWidth: 700 }}>
                China Prime DMC designs, quotes, and operates China programs for travel advisors, tour operators, DMC partners, and corporate travel teams.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="mono-button">
                Request a quote <ArrowRight size={17} />
              </Link>
              <Link href="/b2b" className="mono-button mono-button-secondary">
                View services
              </Link>
            </div>
          </div>

          <div className="lg:pt-8">
            <div className="h-full border border-[var(--brand-black)] bg-white">
              <div className="grid grid-cols-2 border-b border-[var(--brand-border)]">
                {metrics.map((item) => (
                  <div key={item.label} className="border-r border-b border-[var(--brand-border)] p-6 last:border-r-0 sm:p-8">
                    <div style={{ color: "var(--brand-black)", fontSize: "clamp(2rem, 4vw, 3.6rem)", fontWeight: 560, lineHeight: 1 }}>
                      {item.value}
                    </div>
                    <div className="mono-index mt-3">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[var(--brand-black)] text-white">
                    <ShieldCheck size={19} />
                  </div>
                  <div>
                    <div className="mono-index">Operating model</div>
                    <h2 className="text-xl font-semibold" style={{ color: "var(--brand-black)", margin: 0 }}>
                      White-label China delivery
                    </h2>
                  </div>
                </div>
                <p className="b2b-body" style={{ maxWidth: 620 }}>
                  Your team owns the client relationship. We handle feasibility, suppliers, local coordination, and on-trip problem solving.
                </p>
                <div className="mt-8 grid gap-3">
                  {["Net pricing", "Partner-ready proposals", "China-based operations", "Bilingual support"].map((item) => (
                    <div key={item} className="flex items-center justify-between border-t border-[var(--brand-border)] pt-3">
                      <span className="text-sm font-semibold" style={{ color: "var(--brand-gray-800)" }}>{item}</span>
                      <Check size={16} style={{ color: "var(--brand-black)" }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>What we do</p>
            <h2 className="b2b-heading" style={{ color: "var(--brand-white)", maxWidth: 620 }}>
              An operations desk, not a travel brochure.
            </h2>
            <p className="b2b-lede" style={{ color: "var(--brand-gray-300)" }}>
              The site should feel like a dependable trade partner: concise, structured, and commercially useful.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-gray-800)] md:grid-cols-2">
            {services.map((service, index) => (
              <FadeSection key={service.title} delay={index * 70}>
                <article className="h-full bg-[var(--brand-black)] p-7 sm:p-8">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center border border-[var(--brand-gray-600)] text-[var(--brand-white)]">
                    {service.icon}
                  </div>
                  <h3 className="b2b-card-title" style={{ color: "var(--brand-white)" }}>{service.title}</h3>
                  <p className="b2b-body" style={{ color: "var(--brand-gray-300)" }}>{service.desc}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Partner fit</p>
            <h2 className="b2b-heading" style={{ maxWidth: 720 }}>
              Built for teams selling China under their own brand.
            </h2>
          </FadeSection>

          <FadeSection delay={100}>
            <div className="grid gap-px bg-[var(--brand-border)]">
              {partnerFit.map((type) => (
                <div key={type} className="flex items-center gap-4 bg-white p-5">
                  <span className="mono-index w-10 shrink-0">OK</span>
                  <span className="text-base font-semibold" style={{ color: "var(--brand-black)" }}>{type}</span>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <TradePresence variant="home" />

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <FadeSection className="mb-14 max-w-3xl">
            <p className="b2b-eyebrow">Workflow</p>
            <h2 className="b2b-heading">A quote process designed for busy sales teams.</h2>
          </FadeSection>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-4">
            {process.map((item, index) => (
              <FadeSection key={item.step} delay={index * 70}>
                <article className="h-full bg-[var(--brand-gray-50)] p-7 sm:p-8">
                  <div className="mono-index">{item.step}</div>
                  <h3 className="b2b-card-title mt-10">{item.title}</h3>
                  <p className="b2b-body">{item.desc}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 items-end gap-10 md:grid-cols-[1fr_auto]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Ready for a China quote?</p>
            <h2 className="b2b-heading" style={{ color: "var(--brand-white)", maxWidth: 900 }}>
              Send the brief. We will turn it into an operable China program.
            </h2>
          </FadeSection>
          <FadeSection delay={100}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
              Talk to partner desk <ArrowRight size={17} />
            </a>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
