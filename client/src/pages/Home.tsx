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
  { value: "2012", label: "China-based since" },
  { value: "30+", label: "Trip ideas" },
  { value: "40+", label: "Destinations" },
  { value: "24/7", label: "Local support" },
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
    title: "Family rhythm",
    body: "Pandas, easy transfers, child-friendly meals, hotels that make sense, and days that do not collapse by 4 pm.",
    image: "/editorial/china-prime-dmc-real-giant-panda-family-china-trip.webp",
  },
  {
    icon: <Utensils size={18} />,
    title: "Muslim-friendly China",
    body: "Halal-aware routing through Xi'an, Ningxia, Gansu, Xinjiang, Beijing, and Shanghai with practical meal planning.",
    image: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an.jpg",
  },
  {
    icon: <Camera size={18} />,
    title: "Women-friendly flow",
    body: "Beautiful neighborhoods, private guides, softer evenings, stylish local life, tea, gardens, and photogenic city moments.",
    image: "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-shanghai-french-concession.jpg",
  },
  {
    icon: <Clock3 size={18} />,
    title: "Senior comfort",
    body: "Shorter walking blocks, private vehicles, good hotel locations, realistic timing, and room to enjoy China slowly.",
    image: "/programs/classic-china-beijing-xian-shanghai-12-day/china-prime-dmc-classic-china-beijing-xian-shanghai-12-day-tiananmen-square.jpg",
  },
];

const planningSteps = [
  { icon: <Compass size={18} />, title: "Tell us the dream", body: "Dates, pace, food needs, hotel style, who is traveling, and what China should feel like.", image: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg" },
  { icon: <MapPinned size={18} />, title: "We shape the route", body: "Cities, nights, guide logic, transport, hotels, meals, and the moments worth slowing down for.", image: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-yu-garden.jpg" },
  { icon: <Train size={18} />, title: "Travel without guessing", body: "Private guides, high-speed rail, transfers, tickets, local support, and backup thinking.", image: "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-beijing-national-stadium.jpg" },
  { icon: <Headphones size={18} />, title: "Stay supported", body: "A China-based team helps before arrival and while the journey is moving on the ground.", image: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-chongqing.jpg" },
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
              <div className="btoc-eyebrow" style={{ color: "rgba(255,255,255,0.82)" }}>Private China trips</div>
              <h1>Feel China before you book it.</h1>
              <p className="btoc-lede">
                Cinematic private journeys for families, first-time visitors, Muslim travelers, women travelers, senior travelers, and curious travelers who want China planned around real life.
              </p>
              <div className="btoc-action-row">
                <Link href="/journeys" className="btoc-button">
                  Explore trips <ArrowRight size={17} />
                </Link>
                <Link href="/contact" className="btoc-button btoc-button-secondary">
                  Design my route
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
            <span className="btoc-eyebrow">Not a package. A feeling.</span>
            <h2 className="btoc-title-small">China is too big for generic travel.</h2>
            <p className="btoc-lede">
              The right trip is not just Beijing, Xi'an, and Shanghai. It is the exact rhythm of your family, your food needs, your walking pace, your curiosity, your comfort level, and the scenes you will remember years later.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Private guides", "Halal-aware meals", "High-speed rail", "Local support"].map((item) => (
                <div key={item} className="btoc-card flex items-center gap-3 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--btoc-forest)] text-white"><Check size={15} /></span>
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
            <span className="btoc-eyebrow">Travel styles</span>
            <h2 className="btoc-title-small">One country. Many ways to fall in love with it.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
              Start with the traveler, then let the route follow. Family days, halal-aware planning, softer city flow, and senior comfort should all feel visually clear before anyone reads the details.
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
              <span className="btoc-eyebrow">How it works</span>
              <h2 className="btoc-title-small">A beautiful trip still needs invisible logistics.</h2>
            </FadeSection>
            <FadeSection delay={100}>
              <figure className="btoc-image-frame aspect-[16/7] rounded-[32px]">
                <img src="/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-mutianyu.jpg" alt="Mutianyu Great Wall private China trip logistics planning." loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,33,0.58),rgba(10,18,33,0.08))]" />
                <figcaption className="absolute bottom-5 left-5 text-sm font-bold uppercase tracking-[0.12em] text-white/82">Private guides, smart routing, clear support</figcaption>
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
                <span className="btoc-eyebrow" style={{ color: "rgba(255,255,255,0.78)" }}>The brief</span>
                <h2 className="max-w-4xl text-[clamp(2.4rem,5vw,5.8rem)] font-semibold leading-[0.94] text-white">
                  Tell us the China you want to feel. We will shape the route.
                </h2>
                <div className="btoc-action-row">
                  <Link href="/contact" className="btoc-button">Start planning <ArrowRight size={17} /></Link>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btoc-button btoc-button-secondary">WhatsApp us</a>
                </div>
              </FadeSection>
            </div>
        </div>
      </section>

      <div className="btoc-wrap pb-10">
        <Link href="/b2b" className="inline-flex text-xs font-bold uppercase tracking-[0.12em] text-[var(--btoc-stone)] no-underline hover:text-[var(--btoc-ink)]">
          Travel advisor or tour operator? Enter B2B portal <ArrowRight size={14} className="ml-2" />
        </Link>
      </div>
    </main>
  );
}
