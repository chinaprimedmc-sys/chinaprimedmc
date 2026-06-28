import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Camera,
  Check,
  Clock3,
  Compass,
  Headphones,
  Heart,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Train,
  Utensils,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";
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
        transform: visible ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 0.72s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.72s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const metrics = [
  { value: "2012", label: "China-based operator" },
  { value: "Private", label: "Every route built to order" },
  { value: "Human", label: "Reviewed by local specialists" },
  { value: "On trip", label: "Support while you travel" },
];

const heroGallery = [
  {
    src: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-yu-garden.jpg",
    alt: "Yu Garden Shanghai private China travel scene.",
    title: "Old Shanghai",
  },
  {
    src: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave.jpg",
    alt: "Hongya Cave Chongqing night view for private China trips.",
    title: "Cyber City Nights",
  },
  {
    src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang.jpg",
    alt: "Crescent Lake Dunhuang desert scenery for Silk Road China trips.",
    title: "Desert Light",
  },
];

const storyImages = [
  {
    src: "/editorial/china-prime-dmc-real-giant-panda-family-china-trip.webp",
    alt: "Real giant panda for family-friendly private China trips.",
    label: "Pandas & family days",
  },
  {
    src: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain.jpg",
    alt: "Tianmen Mountain Zhangjiajie cinematic landscape.",
    label: "Avatar peaks",
  },
  {
    src: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg",
    alt: "West Lake Hangzhou slow travel scene.",
    label: "Garden cities",
  },
  {
    src: "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-kashgar.jpg",
    alt: "Kashgar old town for Muslim-friendly Silk Road travel.",
    label: "Muslim heritage",
  },
  {
    src: "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-potala-palace.jpg",
    alt: "Potala Palace Lhasa private Tibet journey.",
    label: "Highland culture",
  },
];

const travelStyles = [
  {
    icon: <Heart size={18} />,
    title: "Luxury family travel",
    body: "Pandas, landmark days, sane pacing, child-aware meals, and hotels chosen because family travel should feel composed, not improvised.",
    image: "/editorial/china-prime-dmc-real-giant-panda-family-china-trip.webp",
  },
  {
    icon: <Utensils size={18} />,
    title: "Muslim-friendly China",
    body: "Halal-aware routing, mosque access where practical, realistic restaurant planning, and clear notes where local options need care.",
    image: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an.jpg",
  },
  {
    icon: <Camera size={18} />,
    title: "Women-friendly flow",
    body: "Private guides, elegant neighborhoods, beautiful local life, softer evenings, and the kind of pacing that lets the trip breathe.",
    image: "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-shanghai-french-concession.jpg",
  },
  {
    icon: <Clock3 size={18} />,
    title: "Senior comfort",
    body: "Shorter walking blocks, private vehicles, better hotel locations, realistic timing, and room to enjoy China without pressure.",
    image: "/programs/classic-china-beijing-xian-shanghai-12-day/china-prime-dmc-classic-china-beijing-xian-shanghai-12-day-tiananmen-square.jpg",
  },
];

const planningSteps = [
  { icon: <Compass size={18} />, title: "Listen first", body: "We start with the people traveling: age, pace, food, hotel taste, mobility, faith needs, and what China should feel like.", image: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg" },
  { icon: <MapPinned size={18} />, title: "Edit the route", body: "We remove the rushed parts, protect the good hours of the day, and connect cities with a rhythm that feels intelligent.", image: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-yu-garden.jpg" },
  { icon: <Train size={18} />, title: "Control the ground", body: "Guides, vehicles, rail, tickets, meal logic, hotel location, and backup thinking are planned before the trip starts.", image: "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-beijing-national-stadium.jpg" },
  { icon: <Headphones size={18} />, title: "Stay close", body: "A China-based team remains reachable while the journey is moving, because premium travel needs calm support.", image: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-chongqing.jpg" },
];

export default function Home() {
  return (
    <main className="btoc-shell" style={{ paddingTop: "72px" }}>
      <section className="btoc-hero">
        <div className="btoc-hero-media">
          <img src={pageHeroImages.home} alt="Mutianyu Great Wall private China tour for first-time travelers." loading="eager" decoding="async" fetchPriority="high" />
        </div>
        <div className="btoc-hero-inner btoc-wrap">
          <div className="btoc-hero-grid">
            <FadeSection>
              <div className="btoc-eyebrow" style={{ color: "rgba(255,255,255,0.82)" }}>Private China journeys</div>
              <h1>China, planned with taste and control.</h1>
              <p className="btoc-lede">
                Private journeys for travelers who want China to feel beautiful, intelligent, and cared for from the first airport pickup to the final hotel departure.
              </p>
              <div className="btoc-action-row">
                <Link href="/journeys" className="btoc-button">
                  View private journeys <ArrowRight size={17} />
                </Link>
                <Link href="/contact" className="btoc-button btoc-button-secondary">
                  Speak with a planner
                </Link>
              </div>
            </FadeSection>

            <FadeSection delay={120}>
              <div className="btoc-glass-panel">
                <div className="btoc-stat-grid">
                  {metrics.map((item) => (
                    <div key={item.label} className="btoc-stat">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      <section className="btoc-section">
        <div className="btoc-wrap btoc-split">
          <FadeSection>
            <span className="btoc-eyebrow">Why China deserves better</span>
            <h2 className="btoc-title-small">A country this layered should never feel like a package.</h2>
            <p className="btoc-lede">
              The value is not only in famous places. It is in the order of the days, the guide who understands the room, the hotel that saves an hour of traffic, the restaurant that works for your family, and the quiet confidence that someone has thought ahead.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Private guide standards", "Meal planning that is honest", "Rail and transfer timing", "China-based support"].map((item) => (
                <div key={item} className="btoc-trust-line">
                  <span className="btoc-trust-mark"><Check size={14} /></span>
                  <span className="text-sm font-bold text-[var(--btoc-ink)]">{item}</span>
                </div>
              ))}
            </div>
          </FadeSection>

          <FadeSection delay={100}>
            <div className="btoc-mosaic">
              {storyImages.map((image) => (
                <figure key={image.src} className="btoc-image-frame">
                  <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                  <div className="btoc-image-overlay" />
                  <figcaption className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="btoc-badge">{image.label}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="btoc-section btoc-dark-band">
        <div className="absolute inset-0 opacity-45">
          <img src="/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-chongqing.jpg" alt="Chongqing skyline night view for China private trips." className="h-full w-full object-cover" loading="lazy" decoding="async" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,33,61,0.92),rgba(20,33,61,0.72),rgba(20,33,61,0.38))]" />
        <div className="btoc-wrap relative z-10 grid gap-12 lg:grid-cols-[0.62fr_1fr] lg:items-center">
          <FadeSection className="lg:sticky lg:top-32">
            <span className="btoc-eyebrow">Who the journey is for</span>
            <h2 className="btoc-title-small">The same China should feel different for every traveler.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
              We do not start with a product grid. We start with the traveler, then design the route around appetite, pace, privacy, comfort, culture, and the moments worth protecting.
            </p>
          </FadeSection>
          <div className="grid gap-4 sm:grid-cols-2">
            {travelStyles.map((style, index) => (
              <FadeSection key={style.title} delay={index * 70}>
                <article className="btoc-style-card group">
                  <div className="absolute left-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--btoc-navy)] shadow-lg">{style.icon}</div>
                  <div className="absolute inset-0">
                    <img src={style.image} alt={`${style.title} private China trip image.`} loading="lazy" decoding="async" />
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,12,24,0.84),rgba(7,12,24,0.18)_54%,rgba(7,12,24,0.16))]" />
                  <div className="relative z-10 mt-auto p-6 md:p-7">
                    <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">{style.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/78">{style.body}</p>
                  </div>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="btoc-section btoc-logistics-section">
        <div className="btoc-wrap">
          <div className="grid gap-10 lg:grid-cols-[0.58fr_1fr] lg:items-end">
            <FadeSection>
              <span className="btoc-eyebrow">Planning standard</span>
              <h2 className="btoc-title-small">Luxury is what the traveler never has to solve.</h2>
            </FadeSection>
            <FadeSection delay={100}>
              <figure className="btoc-image-frame aspect-[16/7] rounded-[32px]">
                <img src="/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-mutianyu.jpg" alt="Mutianyu Great Wall private China trip logistics planning." loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,33,0.58),rgba(10,18,33,0.08))]" />
                <figcaption className="absolute bottom-5 left-5 text-sm font-bold uppercase tracking-[0.12em] text-white/82">The visible beauty depends on invisible control</figcaption>
              </figure>
            </FadeSection>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {planningSteps.map((step, index) => (
              <FadeSection key={step.title} delay={index * 80}>
                <article className="btoc-process-card group">
                  <div className="btoc-process-image">
                    <img src={step.image} alt={`${step.title} for private China trip planning.`} loading="lazy" decoding="async" />
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--btoc-navy)] text-white">{step.icon}</div>
                      <div className="btoc-caption">0{index + 1}</div>
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-[var(--btoc-ink)]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[rgba(17,24,39,0.68)]">{step.body}</p>
                  </div>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="btoc-immersive-cta">
        <div className="btoc-image-frame min-h-[82vh] rounded-none">
            <img src="/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains.jpg" alt="Meili Snow Mountain Yunnan cinematic private China journey." loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.78),rgba(17,24,39,0.34),rgba(17,24,39,0.10))]" />
            <div className="btoc-wrap absolute inset-x-0 bottom-0 p-6 md:p-12 lg:p-16">
              <FadeSection>
                <span className="btoc-eyebrow" style={{ color: "rgba(255,255,255,0.78)" }}>Begin with a conversation</span>
                <h2 className="max-w-4xl text-[clamp(2.4rem,5vw,5.8rem)] font-semibold leading-[0.94] text-white">
                  Tell us the China you want to feel. We will make it practical.
                </h2>
                <div className="btoc-action-row">
                  <Link href="/contact" className="btoc-button">Request a private route <ArrowRight size={17} /></Link>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btoc-button btoc-button-secondary">WhatsApp us</a>
                </div>
              </FadeSection>
            </div>
        </div>
      </section>

      <div className="btoc-wrap pb-10">
        <Link href="/b2b" className="inline-flex text-xs font-bold uppercase tracking-[0.12em] text-[var(--btoc-stone)] no-underline hover:text-[var(--btoc-ink)]">
          Travel advisor or tour operator? View partnership standards <ArrowRight size={14} className="ml-2" />
        </Link>
      </div>
    </main>
  );
}
