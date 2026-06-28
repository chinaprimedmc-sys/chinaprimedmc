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
import { visualAssets } from "@/lib/visualAssets";
import ResponsiveImage from "@/components/ResponsiveImage";

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
  { value: "2012", label: "Planning China from inside China" },
  { value: "Private", label: "No shopping groups or fixed buses" },
  { value: "Human", label: "Every route reviewed by a specialist" },
  { value: "On trip", label: "Real support while you travel" },
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
    src: visualAssets.homeStoryJiuzhaigou.src,
    alt: visualAssets.homeStoryJiuzhaigou.alt,
    label: "Blue lakes",
  },
  {
    src: visualAssets.homeStoryHuangshan.src,
    alt: visualAssets.homeStoryHuangshan.alt,
    label: "Cloud peaks",
  },
  {
    src: visualAssets.homeStoryCrescentLake.src,
    alt: visualAssets.homeStoryCrescentLake.alt,
    label: "Desert light",
  },
  {
    src: visualAssets.homeStoryWestLake.src,
    alt: visualAssets.homeStoryWestLake.alt,
    label: "Slow water",
  },
  {
    src: visualAssets.homeStoryNamtso.src,
    alt: visualAssets.homeStoryNamtso.alt,
    label: "Highland silence",
  },
];

const travelStyles = [
  {
    icon: <Heart size={18} />,
    title: "Luxury family travel",
    body: "Pandas, landmark days, sane pacing, child-aware meals, and hotels chosen because family travel should feel composed, not improvised.",
  },
  {
    icon: <Utensils size={18} />,
    title: "Muslim-friendly China",
    body: "Halal-aware routing, mosque access where practical, realistic restaurant planning, and clear notes where local options need care.",
  },
  {
    icon: <Camera size={18} />,
    title: "Women-friendly flow",
    body: "Private guides, elegant neighborhoods, beautiful local life, softer evenings, and the kind of pacing that lets the trip breathe.",
  },
  {
    icon: <Clock3 size={18} />,
    title: "Senior comfort",
    body: "Shorter walking blocks, private vehicles, better hotel locations, realistic timing, and room to enjoy China without pressure.",
  },
];

const planningSteps = [
  { icon: <Compass size={18} />, title: "Listen first", body: "We start with the people traveling: age, pace, food, hotel taste, mobility, faith needs, and what China should feel like." },
  { icon: <MapPinned size={18} />, title: "Edit the route", body: "We remove the rushed parts, protect the good hours of the day, and connect cities with a rhythm that feels intelligent." },
  { icon: <Train size={18} />, title: "Control the ground", body: "Guides, vehicles, rail, tickets, meal logic, hotel location, and backup thinking are planned before the trip starts." },
  { icon: <Headphones size={18} />, title: "Stay close", body: "A China-based team remains reachable while the journey is moving, because premium travel needs calm support." },
];

export default function Home() {
  return (
    <main className="btoc-shell cinema-home">
      <section className="cinema-scene cinema-opening">
        <div className="cinema-scene-media">
          <ResponsiveImage src={pageHeroImages.home} alt={visualAssets.homeHero.alt} widths={[960, 1400, 1920]} loading="eager" decoding="async" fetchPriority="high" />
        </div>
        <div className="cinema-scene-scrim" />
        <div className="cinema-scene-content">
          <FadeSection>
            <p className="cinema-kicker">Private China journeys</p>
            <h1>China can feel effortless, even the first time.</h1>
            <p>
              You bring the curiosity. We handle the language, pacing, trains, tickets, meals, guides, and the quiet details that make a private China trip feel calm from the first airport pickup.
            </p>
            <div className="cinema-actions">
              <Link href="/contact">Get my first route idea <ArrowRight size={16} /></Link>
              <Link href="/journeys">See trips that fit</Link>
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
          <img src={visualAssets.homeRiverScene.src} alt={visualAssets.homeRiverScene.alt} loading="lazy" decoding="async" />
        </div>
        <div className="cinema-editorial-copy">
          <FadeSection>
            <p className="cinema-kicker">The problem with planning China from overseas</p>
            <h2>The famous places are easy to name. The hard part is making them feel good.</h2>
            <p>A China vacation can become too rushed, too crowded, too hard to explain to children, too uncertain for parents, or too complicated around meals and payments. The difference is not a longer checklist. It is the order of the days, the guide who reads your family, the hotel that saves an hour in traffic, and a plan that has already thought ahead.</p>
            <div className="cinema-trust-list">
              {["No shopping-tour pressure", "Honest meal planning", "Rail and transfer timing", "China-based support"].map((item) => <span key={item}>{item}</span>)}
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
          <p className="cinema-kicker">What travelers remember</p>
          <h2>The panda morning. The quiet garden. The train that simply worked. The city lights after dinner.</h2>
        </FadeSection>
      </section>

      <section className="cinema-scene cinema-traveler-scene">
        <div className="cinema-scene-media">
          <img src={visualAssets.homeNightScene.src} alt={visualAssets.homeNightScene.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        </div>
        <div className="cinema-scene-scrim" />
        <div className="cinema-scene-content cinema-two-column">
          <FadeSection>
            <p className="cinema-kicker">Your trip, not a template</p>
            <h2>A family with children, a couple, and parents in their seventies should not travel China the same way.</h2>
            <p>We start with who is actually traveling: energy level, privacy, comfort, culture, faith needs, food concerns, walking tolerance, and the moments worth protecting.</p>
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
          <img src={visualAssets.homeControlScene.src} alt={visualAssets.homeControlScene.alt} loading="lazy" decoding="async" />
        </div>
        <div className="cinema-control-copy">
          <FadeSection>
            <p className="cinema-kicker">The standard behind the scenes</p>
            <h2>Luxury is not more activity. It is fewer things you have to solve.</h2>
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
          <img src={visualAssets.homeFinalCta.src} alt={visualAssets.homeFinalCta.alt} loading="lazy" decoding="async" />
        </div>
        <div className="cinema-scene-scrim" />
        <div className="cinema-scene-content">
          <FadeSection>
            <p className="cinema-kicker">Begin with a conversation</p>
            <h2>Tell us what would make China feel worth the flight. We will turn it into a route that works.</h2>
            <div className="cinema-actions">
              <Link href="/contact">Start my China brief <ArrowRight size={16} /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
            </div>
            <Link href="/b2b" className="cinema-advisor-link">Travel advisor or tour operator? View partnership standards</Link>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
