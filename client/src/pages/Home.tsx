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
    <main className="btoc-shell cinema-home">
      <section className="cinema-scene cinema-opening">
        <div className="cinema-scene-media">
          <img src={pageHeroImages.home} alt="Mutianyu Great Wall private China tour for first-time travelers." loading="eager" decoding="async" fetchPriority="high" />
        </div>
        <div className="cinema-scene-scrim" />
        <div className="cinema-scene-content">
          <FadeSection>
            <p className="cinema-kicker">Private China journeys</p>
            <h1>China, planned with taste and control.</h1>
            <p>
              For travelers who want the country to feel beautiful, intelligent, and quietly handled from the first airport pickup to the final hotel departure.
            </p>
            <div className="cinema-actions">
              <Link href="/journeys">View journeys <ArrowRight size={16} /></Link>
              <Link href="/contact">Speak with a planner</Link>
            </div>
          </FadeSection>
          <FadeSection delay={120} className="cinema-proof">
            {metrics.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </FadeSection>
        </div>
      </section>

      <section className="cinema-scene cinema-split-scene">
        <div className="cinema-portrait">
          <img src="/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg" alt="West Lake Hangzhou private luxury China journey." loading="lazy" decoding="async" />
        </div>
        <div className="cinema-editorial-copy">
          <FadeSection>
            <p className="cinema-kicker">Why China deserves better</p>
            <h2>A country this layered should never feel like a package.</h2>
            <p>The value is not only in famous places. It is in the order of the days, the guide who understands the room, the hotel that saves an hour of traffic, the restaurant that works for your family, and the quiet confidence that someone has thought ahead.</p>
            <div className="cinema-trust-list">
              {["Private guide standards", "Honest meal planning", "Rail and transfer timing", "China-based support"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="cinema-scene cinema-gallery-scene">
        {storyImages.map((image, index) => (
          <figure key={image.src} className={`cinema-gallery-shot shot-${index + 1}`}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
        <FadeSection className="cinema-gallery-title">
          <p className="cinema-kicker">The country opens in layers</p>
          <h2>Pandas. Peaks. Old towns. High lakes. Night cities.</h2>
        </FadeSection>
      </section>

      <section className="cinema-scene cinema-traveler-scene">
        <div className="cinema-scene-media">
          <img src="/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-chongqing.jpg" alt="Chongqing skyline night view for China private trips." className="h-full w-full object-cover" loading="lazy" decoding="async" />
        </div>
        <div className="cinema-scene-scrim" />
        <div className="cinema-scene-content cinema-two-column">
          <FadeSection>
            <p className="cinema-kicker">Who the journey is for</p>
            <h2>The same China should feel different for every traveler.</h2>
            <p>We start with appetite, pace, privacy, comfort, culture, faith needs, and the moments worth protecting.</p>
          </FadeSection>
          <div className="cinema-lens-list">
            {travelStyles.map((style, index) => (
              <FadeSection key={style.title} delay={index * 70} className="cinema-lens-row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{style.title}</strong>
                <p>{style.body}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="cinema-scene cinema-control-scene">
        <div className="cinema-wide-photo">
          <img src="/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-mutianyu.jpg" alt="Mutianyu Great Wall private China trip logistics planning." loading="lazy" decoding="async" />
        </div>
        <div className="cinema-control-copy">
          <FadeSection>
            <p className="cinema-kicker">Planning standard</p>
            <h2>Luxury is what the traveler never has to solve.</h2>
          </FadeSection>
          <div className="cinema-flow">
            {planningSteps.map((step, index) => (
              <FadeSection key={step.title} delay={index * 80}>
                <article>
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="cinema-scene cinema-final-scene">
        <div className="cinema-scene-media">
          <img src="/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains.jpg" alt="Meili Snow Mountain Yunnan cinematic private China journey." loading="lazy" decoding="async" />
        </div>
        <div className="cinema-scene-scrim" />
        <div className="cinema-scene-content">
          <FadeSection>
            <p className="cinema-kicker">Begin with a conversation</p>
            <h2>Tell us the China you want to feel. We will make it practical.</h2>
            <div className="cinema-actions">
              <Link href="/contact">Request a private route <ArrowRight size={16} /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            </div>
            <Link href="/b2b" className="cinema-advisor-link">Travel advisor or tour operator? View partnership standards</Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
