import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, ClipboardList, Globe2, Headphones, MapPinned, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";
import MediaHero from "@/components/MediaHero";
import DarkImageSection from "@/components/DarkImageSection";
import TradePresence from "@/components/TradePresence";
import { pageHeroImages } from "@/lib/heroImages";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
        transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const metrics = [
  { value: "2012", label: "Established in China" },
  { value: "30+", label: "Destinations planned" },
  { value: "B2B", label: "Trade-first model" },
  { value: "24/7", label: "In-trip support" },
];

const operatingPrinciples = [
  {
    icon: <ClipboardList size={18} />,
    title: "Plan before promise",
    image: "/services/china-prime-dmc-white-label-itinerary-support-trade-materials.jpeg",
    alt: "White-label China travel proposal materials for B2B partners.",
    points: ["Feasibility before pricing", "Clear inclusions and assumptions", "Sales copy your team can use"],
  },
  {
    icon: <MapPinned size={18} />,
    title: "Sellable route logic",
    image: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-shanghai-tower.jpg",
    alt: "Shanghai Tower for China gateway and route planning.",
    points: ["Gateway-first routing", "Realistic daily pacing", "Destination choices buyers understand"],
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Local delivery control",
    image: "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-shennong-stream.jpg",
    alt: "Shennong Stream for China local delivery and route operations.",
    points: ["Guide and vehicle coordination", "Supplier matching", "Day-by-day issue response"],
  },
  {
    icon: <Headphones size={18} />,
    title: "Partner communication",
    image: "/trade-shows/icgte-2026-kuala-lumpur/china-prime-dmc-icgte-2026-kuala-lumpur-one-on-one-buyer-consultation.jpeg",
    alt: "China Prime DMC one-on-one buyer consultation at Kuala Lumpur travel trade show.",
    points: ["Fast brief intake", "Quote notes in plain English", "Support before and during travel"],
  },
];

const proofImages = [
  {
    src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang.jpg",
    alt: "Crescent Lake Dunhuang for China Silk Road travel planning.",
    title: "Long-haul cultural routes",
  },
  {
    src: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-jiuzhaigou.jpg",
    alt: "Jiuzhaigou national park for nature-focused China journeys.",
    title: "Nature and family programs",
  },
  {
    src: "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-potala-palace.jpg",
    alt: "Potala Palace Lhasa for specialist China route planning.",
    title: "Specialist regional coverage",
  },
];

const buyerNeeds = [
  "A China DMC that understands trade deadlines",
  "Programs written for resale, not consumer brochures",
  "Local ground handling without taking over the client relationship",
  "Clear alternatives when the first route is too rushed, costly, or risky",
  "Visual destination assets that help overseas teams sell China with confidence",
  "Practical support for FIT, groups, MICE, education, halal-aware, family, and senior travel",
];

const companySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "China Prime DMC",
  url: "https://www.chinaprimedmc.com/about",
  foundingDate: "2012",
  description:
    "China Prime DMC is a China-based destination management company supporting global B2B travel partners with China itinerary design, net pricing, white-label proposals, and ground operations.",
  areaServed: {
    "@type": "Country",
    name: "China",
  },
};

export default function About() {
  useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? "";

    document.title = "About China Prime DMC | China DMC for Global Travel Partners";
    metaDescription?.setAttribute(
      "content",
      "China Prime DMC is a China-based DMC established in 2012, supporting global travel advisors, tour operators, DMC partners, and corporate teams with China itinerary design and ground operations.",
    );

    return () => {
      document.title = originalTitle;
      metaDescription?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <main className="mono-shell" style={{ color: "var(--brand-text)", paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }} />
      <MediaHero
        image={pageHeroImages.company}
        alt="Forbidden City Beijing representing China Prime DMC company story and China expertise."
        eyebrow="About China Prime DMC"
        title={<>A China DMC built for global travel sellers.</>}
        body="Established in 2012, China Prime DMC supports travel advisors, tour operators, DMC partners, corporate planners, and specialist group organizers who need China programs that are clear to sell and reliable to operate."
        stats={metrics}
      />

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <FadeSection>
            <p className="b2b-eyebrow">Company position</p>
            <h2 className="b2b-heading">We are the China operating partner behind your client promise.</h2>
          </FadeSection>
          <FadeSection delay={100}>
            <div className="grid gap-px bg-[var(--brand-border)]">
              {buyerNeeds.map((need, index) => (
                <div key={need} className="grid grid-cols-[auto_1fr] gap-4 bg-white p-5">
                  <span className="mono-index">{String(index + 1).padStart(2, "0")}</span>
                  <p className="m-0 text-base font-semibold leading-7 text-[var(--brand-black)]">{need}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <FadeSection className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.56fr_1fr]">
            <div>
              <p className="b2b-eyebrow">How we work</p>
              <h2 className="b2b-heading">Built around trade clarity, not generic travel inspiration.</h2>
            </div>
            <p className="b2b-lede mt-0">
              B2B partners need fast recognition: what can be sold, how it operates, where the risk is, and which China story will make sense to their market.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2 xl:grid-cols-4">
            {operatingPrinciples.map((item, index) => (
              <FadeSection key={item.title} delay={index * 60}>
                <article className="visual-card group">
                  <div className="visual-card-image">
                    <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-white text-[var(--brand-black)]">
                      {item.icon}
                    </div>
                  </div>
                  <div className="visual-card-caption">
                    <h3 className="b2b-card-title">{item.title}</h3>
                    <div className="compact-list">
                      {item.points.map((point) => (
                        <div key={point} className="compact-list-item">
                          <Check size={14} className="shrink-0" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <DarkImageSection
        image="/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china.jpg"
        alt="Great Wall of China for global B2B travel partners."
        eyebrow="What makes the work different"
        title="China is easier to sell when the route is visually clear and operationally honest."
        body="We help partners move from a vague China request to a route that shows recognizable icons, realistic timing, client-fit experiences, and the operational details needed to quote with confidence."
        imagePosition="center top"
      >
        <div className="grid gap-px bg-white/20">
          {["Recognizable landmarks", "Route logic buyers understand", "Local execution after confirmation"].map((item) => (
            <div key={item} className="bg-black/42 p-5 text-sm font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
              {item}
            </div>
          ))}
        </div>
      </DarkImageSection>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <FadeSection className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.48fr_1fr]">
            <div>
              <p className="b2b-eyebrow">Visual range</p>
              <h2 className="b2b-heading">The China your clients can immediately picture.</h2>
            </div>
            <p className="b2b-lede mt-0">
              A good B2B China site should reduce explanation time. These visuals show how we think across classic icons, nature routes, Silk Road culture, and specialist regions.
            </p>
          </FadeSection>
          <div className="image-band bg-[var(--brand-border)]">
            {proofImages.map((image, index) => (
              <FadeSection key={image.src} delay={index * 70}>
                <figure className="group relative min-h-[360px] overflow-hidden bg-[var(--brand-black)] md:min-h-[520px]">
                  <img src={image.src} alt={image.alt} className="h-full min-h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:min-h-[520px]" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/8 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mono-index mb-3 text-[var(--brand-gray-300)]">0{index + 1}</div>
                    <h3 className="text-3xl font-semibold leading-tight text-white">{image.title}</h3>
                  </figcaption>
                </figure>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <TradePresence variant="about" />

      <DarkImageSection
        image="/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund.jpg"
        alt="The Bund Shanghai for global China travel partner route planning."
        eyebrow="Work with China Prime DMC"
        title="Send the China brief. We will shape the route your team can sell."
        body="Tell us the market, travel dates, group size, client profile, hotel level, and service expectations. We will respond with practical route thinking and China-side operating logic."
        actions={
          <>
            <Link href="/contact" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
              Send a brief <ArrowRight size={18} />
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mono-button border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-black)]">
              WhatsApp us
            </a>
          </>
        }
      >
        <div className="hidden justify-end lg:flex">
          <Globe2 size={72} className="text-white/70" />
        </div>
      </DarkImageSection>
    </main>
  );
}
