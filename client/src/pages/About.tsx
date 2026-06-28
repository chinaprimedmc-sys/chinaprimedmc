import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, ClipboardList, Globe2, Headphones, MapPinned, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";
import MediaHero from "@/components/MediaHero";
import DarkImageSection from "@/components/DarkImageSection";
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
  { value: "30+", label: "Destinations we connect" },
  { value: "Private", label: "No fixed group travel" },
  { value: "24/7", label: "Support while you travel" },
];

const operatingPrinciples = [
  {
    icon: <ClipboardList size={18} />,
    title: "We plan before we promise",
    image: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan.jpg",
    alt: "Huangshan mountain scenery for private China itinerary planning.",
    points: ["Feasibility before pricing", "Clear inclusions and assumptions", "No vague promises before route logic"],
  },
  {
    icon: <MapPinned size={18} />,
    title: "The route has to make sense",
    image: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-shanghai-tower.jpg",
    alt: "Shanghai Tower for China gateway and route planning.",
    points: ["Smarter city order", "Realistic daily pacing", "Destinations that belong together"],
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "The ground details matter",
    image: "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-shennong-stream.jpg",
    alt: "Shennong Stream for China local delivery and route operations.",
    points: ["Guide and vehicle coordination", "Hotel and meal logic", "Day-by-day issue response"],
  },
  {
    icon: <Headphones size={18} />,
    title: "You are not left on your own",
    image: "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-karakul-lake.jpg",
    alt: "Karakul Lake Xinjiang for private China travel support and route planning.",
    points: ["Fast brief intake", "Plain-English route advice", "Support before and during travel"],
  },
];

const proofImages = [
  {
    src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang.jpg",
    alt: "Crescent Lake Dunhuang for China Silk Road travel planning.",
    title: "Silk Road scale",
  },
  {
    src: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-jiuzhaigou.jpg",
    alt: "Jiuzhaigou national park for nature-focused China journeys.",
    title: "Nature that children remember",
  },
  {
    src: "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-potala-palace.jpg",
    alt: "Potala Palace Lhasa for specialist China route planning.",
    title: "Highland journeys, handled carefully",
  },
];

const buyerNeeds = [
  "You want China to feel exciting, but not overwhelming.",
  "You want your children or older parents to enjoy the trip, not endure it.",
  "You need clear advice on food, walking, payments, trains, hotels, and timing.",
  "You want a private China tour without shopping stops or fixed group pressure.",
  "You want someone inside China to think ahead before you arrive.",
  "You need honest guidance when a route is too rushed, too tiring, or not worth the extra move.",
];

const companySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "China Prime DMC",
  url: "https://www.chinaprimedmc.com/about",
  foundingDate: "2012",
  description:
    "China Prime DMC is a China-based private travel planner established in 2012, designing custom China tours for families, first-time visitors, Muslim-friendly travelers, senior travelers, luxury private clients, and travel advisors.",
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

    document.title = "About China Prime DMC | Private China Travel Specialists Since 2012";
    metaDescription?.setAttribute(
      "content",
      "China Prime DMC is a China-based private travel specialist established in 2012, designing custom China tours for families, first-time visitors, Muslim-friendly travelers, senior travelers, and luxury private clients.",
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
        title={<>The guide behind a China trip you can trust.</>}
        body="Established in 2012, China Prime DMC plans private China journeys from inside China for travelers who want the country to feel inspiring, safe, well paced, and quietly handled."
        stats={metrics}
      />

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <FadeSection>
            <p className="b2b-eyebrow">Why trust us</p>
            <h2 className="b2b-heading">You are not buying a package. You are choosing who thinks ahead for you in China.</h2>
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
              <h2 className="b2b-heading">Built around the questions travelers quietly worry about.</h2>
            </div>
            <p className="b2b-lede mt-0">
              Is China safe? Will the children enjoy it? Will my parents be too tired? How will we pay? What can we eat? How hard is the train station? A good private itinerary answers those questions before the trip begins.
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
        alt="Great Wall of China for private China travelers."
        eyebrow="What makes the work different"
        title="China becomes easier when someone edits the trip with honesty."
        body="We do not add cities because they sound impressive. We ask what each stop gives you, what it costs in time and energy, and whether it makes the whole journey better."
        imagePosition="center top"
      >
        <div className="grid gap-px bg-white/20">
          {["Recognizable landmarks", "Days that do not feel rushed", "Local support after confirmation"].map((item) => (
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
              <p className="b2b-eyebrow">Our China</p>
              <h2 className="b2b-heading">The route can be classic. The feeling should be personal.</h2>
            </div>
            <p className="b2b-lede mt-0">
              Some travelers come for Beijing, Xi'an, and Shanghai. Others need pandas, halal-aware Silk Road history, gardens, mountains, food, or a slower family rhythm. We help decide what belongs in your version of China.
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

      <DarkImageSection
        image="/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund.jpg"
        alt="The Bund Shanghai for global China travel partner route planning."
        eyebrow="Start planning"
        title="Send the China trip you are imagining. We will make it practical."
        body="Tell us who is traveling, when you may go, what you want to feel, and what worries you. We will respond with practical route thinking and the next questions that matter."
        actions={
          <>
            <Link href="/contact" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
              Get my first route idea <ArrowRight size={18} />
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mono-button border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-black)]">
              Ask on WhatsApp
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
