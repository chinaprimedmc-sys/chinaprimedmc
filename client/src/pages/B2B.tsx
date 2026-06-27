import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, ClipboardList, Globe, Headphones, ShieldCheck, Users } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";

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
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(22px)", transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

const services = [
  { icon: <Globe size={19} />, title: "International operators", desc: "China ground handling for tour operators who need reliable local delivery and commercially usable proposals." },
  { icon: <ClipboardList size={19} />, title: "Travel agencies and DMCs", desc: "White-label itinerary design, net pricing, supplier coordination, and clear documentation for resale." },
  { icon: <Users size={19} />, title: "Corporate and groups", desc: "Delegations, incentives, MICE, education groups, specialist-interest travel, and multi-city operational planning." },
  { icon: <ShieldCheck size={19} />, title: "Luxury specialists", desc: "High-touch private programs, VIP handling, hotel coordination, special requests, and on-trip support." },
];

const advantages = [
  "Established in 2012",
  "China-based operations",
  "Trade-friendly net pricing",
  "White-label delivery",
  "Clear feasibility notes",
  "24/7 in-trip support",
];

const process = [
  { step: "01", title: "Partner intake", desc: "We understand your client profile, commercial model, service standards, and China product needs." },
  { step: "02", title: "Program build", desc: "We structure routing, pace, hotels, guiding, transport, inclusions, and alternatives." },
  { step: "03", title: "Quote package", desc: "You receive net pricing, operational notes, inclusions, exclusions, and practical sales guidance." },
  { step: "04", title: "Ground operation", desc: "Our China team delivers the program while you keep the client relationship." },
];

export default function B2B() {
  return (
    <main style={{ backgroundColor: "var(--brand-white)", color: "var(--brand-black)", paddingTop: "72px" }}>
      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.72fr]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>B2B services</p>
            <h1 className="b2b-heading" style={{ color: "var(--brand-white)", maxWidth: 900 }}>
              China operations for teams that sell travel professionally.
            </h1>
          </FadeSection>
          <FadeSection delay={100} className="self-end">
            <p className="b2b-lede" style={{ color: "var(--brand-gray-300)", marginTop: 0 }}>
              We support advisors, tour operators, DMC partners, and corporate travel teams with China program design, quoting, and ground delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
                Start conversation <ArrowRight size={17} />
              </a>
              <Link href="/contact" className="mono-button" style={{ backgroundColor: "transparent", borderColor: "var(--brand-gray-600)", color: "var(--brand-white)" }}>
                Send brief
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <FadeSection className="mb-14 max-w-3xl">
            <p className="b2b-eyebrow">Partner models</p>
            <h2 className="b2b-heading">One operating team, multiple trade use cases.</h2>
          </FadeSection>
          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <FadeSection key={service.title} delay={index * 70}>
                <article className="h-full bg-white p-7">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center border border-[var(--brand-border)] text-[var(--brand-black)]">
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

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Why partners use us</p>
            <h2 className="b2b-heading">Less decoration. More operating clarity.</h2>
          </FadeSection>
          <FadeSection delay={100}>
            <div className="grid gap-px bg-[var(--brand-border)] sm:grid-cols-2">
              {advantages.map((item) => (
                <div key={item} className="flex items-center gap-4 bg-[var(--brand-gray-50)] p-5">
                  <Check size={16} />
                  <span className="text-sm font-semibold text-[var(--brand-black)]">{item}</span>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <FadeSection className="mb-14 max-w-3xl">
            <p className="b2b-eyebrow">Process</p>
            <h2 className="b2b-heading">From brief to ground delivery.</h2>
          </FadeSection>
          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-4">
            {process.map((item, index) => (
              <FadeSection key={item.step} delay={index * 70}>
                <article className="h-full bg-white p-7">
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
            <Headphones size={26} className="mb-8 text-[var(--brand-gray-400)]" />
            <h2 className="b2b-heading" style={{ color: "var(--brand-white)", maxWidth: 820 }}>
              Need a China ground partner for your next client brief?
            </h2>
          </FadeSection>
          <FadeSection delay={100}>
            <Link href="/contact" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
              Request quote <ArrowRight size={17} />
            </Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
