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

const heroImages = {
  meeting: "/services/china-prime-dmc-b2b-services-travel-trade-buyer-meeting.jpeg",
  greatWall: "/services/china-prime-dmc-china-itinerary-design-great-wall.jpeg",
  shanghai: "/services/china-prime-dmc-ground-operations-shanghai-business-travel.jpeg",
};

export default function Home() {
  return (
    <main className="mono-shell" style={{ color: "var(--brand-text)", paddingTop: "72px" }}>
      <section className="relative overflow-hidden bg-[var(--brand-white)] px-6 lg:px-10" style={{ paddingBottom: "clamp(72px, 8vw, 108px)", paddingTop: "clamp(62px, 7vw, 104px)" }}>
        <div className="mono-wrap">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_0.92fr] lg:items-center">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-16 bg-[var(--brand-black)]" />
                <p className="b2b-eyebrow mb-0">China ground services for travel brands</p>
              </div>
              <h1
                style={{
                  color: "var(--brand-black)",
                  fontSize: "clamp(3.55rem, 7.2vw, 7.8rem)",
                  fontWeight: 540,
                  letterSpacing: 0,
                  lineHeight: 0.88,
                  margin: 0,
                  maxWidth: 860,
                }}
              >
                China ground operations,
                <br className="hidden sm:block" /> built for trade.
              </h1>
              <div className="mt-8 grid max-w-3xl grid-cols-1 gap-7 md:grid-cols-[1fr_auto] md:items-end">
                <p className="b2b-lede" style={{ fontSize: "clamp(1.05rem, 1.45vw, 1.22rem)", marginTop: 0, maxWidth: 650 }}>
                  China Prime DMC designs, quotes, and operates China programs for travel advisors, tour operators, DMC partners, and corporate travel teams.
                </p>
                <div className="hidden w-28 text-right text-[0.68rem] font-bold uppercase leading-5 tracking-[0.16em] text-[var(--brand-gray-500)] md:block">
                  Est. 2012
                  <br />
                  China based
                </div>
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

            <div className="relative">
              <div className="absolute right-0 top-0 z-10 hidden bg-[var(--brand-black)] px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white lg:block">
                Partner desk
              </div>
              <div className="border border-[var(--brand-black)] bg-[var(--brand-black)]">
                <div className="grid grid-cols-1 gap-px bg-[var(--brand-gray-800)] md:grid-cols-[1fr_0.42fr]">
                  <figure className="relative min-h-[430px] overflow-hidden bg-[var(--brand-black)]">
                    <img
                      src={heroImages.meeting}
                      alt="China Prime DMC meeting travel trade partners for China ground operations."
                      className="h-full min-h-[430px] w-full object-cover"
                    />
                    <figcaption className="absolute bottom-0 left-0 max-w-[520px] bg-[var(--brand-black)] p-5 text-sm leading-6 text-[var(--brand-gray-200)]">
                      Real trade conversations shape the programs we quote and operate for overseas partners.
                    </figcaption>
                  </figure>
                  <div className="grid grid-cols-2 gap-px bg-[var(--brand-gray-800)] md:grid-cols-1">
                    <img
                      src={heroImages.greatWall}
                      alt="Great Wall route planning for China itinerary design."
                      className="h-44 w-full object-cover md:h-full"
                    />
                    <img
                      src={heroImages.shanghai}
                      alt="Shanghai business travel operations for China DMC partners."
                      className="h-44 w-full object-cover md:h-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px bg-[var(--brand-gray-800)] md:grid-cols-4">
                  {metrics.map((item) => (
                    <div key={item.label} className="bg-[var(--brand-black)] p-5 sm:p-6">
                      <div className="text-3xl font-semibold leading-none text-white md:text-4xl">{item.value}</div>
                      <div className="mono-index mt-3 text-[var(--brand-gray-400)]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-auto mt-4 max-w-xl border border-[var(--brand-border)] bg-white p-5 shadow-[8px_8px_0_var(--brand-black)] sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--brand-black)] text-white">
                    <ShieldCheck size={19} />
                  </div>
                  <div className="min-w-0">
                    <div className="mono-index">Operating model</div>
                    <h2 className="mt-1 text-xl font-semibold leading-tight text-[var(--brand-black)]">White-label China delivery</h2>
                    <p className="b2b-body mt-3">
                      Your team owns the client relationship. We handle feasibility, suppliers, local coordination, and on-trip problem solving.
                    </p>
                    <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {["Net pricing", "Partner-ready proposals", "China-based operations", "Bilingual support"].map((item) => (
                        <div key={item} className="flex items-center justify-between gap-3 border-t border-[var(--brand-border)] pt-2">
                          <span className="text-sm font-semibold text-[var(--brand-gray-800)]">{item}</span>
                          <Check size={15} className="shrink-0 text-[var(--brand-black)]" />
                        </div>
                      ))}
                    </div>
                  </div>
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
