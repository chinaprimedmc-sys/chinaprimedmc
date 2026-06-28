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
import MediaHero from "@/components/MediaHero";
import DarkImageSection from "@/components/DarkImageSection";
import { pageHeroImages } from "@/lib/heroImages";

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
    title: "Custom route design",
    desc: "We shape the trip around your dates, pace, hotel style, interests, family needs, food preferences, and comfort level.",
  },
  {
    icon: <MapPinned size={20} />,
    title: "Private local support",
    desc: "Private guides, transfers, hotels, rail, flights, tickets, restaurants, and local hosts are coordinated before you land.",
  },
  {
    icon: <UsersRound size={20} />,
    title: "Traveler-friendly planning",
    desc: "Families, Muslim travelers, women travelers, senior travelers, first-time visitors, couples, and multi-generation groups get the right pacing.",
  },
  {
    icon: <Headphones size={20} />,
    title: "In-trip confidence",
    desc: "Our China-based team supports the trip on the ground, so the route feels smooth, practical, and easy to enjoy.",
  },
];

const partnerFit = [
  "First-time China travelers who want the icons without feeling rushed",
  "Families who need smart pacing, kid-friendly days, and fewer logistics surprises",
  "Muslim travelers who need halal-aware routing and practical meal planning",
  "Women travelers who want comfort, privacy, style, and thoughtful local flow",
  "Senior travelers who prefer private transfers, softer walking days, and clear timing",
  "Repeat visitors looking for Yunnan, Guizhou, Xinjiang, Tibet, Inner Mongolia, or Zhangjiajie",
];

const process = [
  { step: "01", title: "Tell us your style", desc: "Share dates, group size, must-see places, comfort level, dietary needs, walking tolerance, and the kind of China you want to feel." },
  { step: "02", title: "We shape the route", desc: "We suggest realistic cities, daily pacing, hotel areas, transport logic, guide style, and alternatives when a route is too rushed." },
  { step: "03", title: "You customize", desc: "Add or remove cities, slow the pace, upgrade hotels, add food, photography, family, halal, senior-friendly, or women-friendly details." },
  { step: "04", title: "Travel with support", desc: "Private guides and our local team keep the trip clear on the ground, from transfers and tickets to timing changes and practical help." },
];

const heroImages = {
  materials: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-yu-garden.jpg",
  greatWall: "/services/china-prime-dmc-china-itinerary-design-great-wall.jpeg",
  shanghai: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave.jpg",
  forbiddenCity: "/services/china-prime-dmc-private-china-tours-forbidden-city-beijing.jpeg",
  tradeShow: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang.jpg",
};

const visualProof = [
  { src: heroImages.forbiddenCity, alt: "Forbidden City private China tour for first-time travelers.", title: "First-time China" },
  { src: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg", alt: "Chengdu panda base for family-friendly China trips.", title: "Family travel" },
  { src: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain.jpg", alt: "Tianmen Mountain in Zhangjiajie for dramatic private China nature trips.", title: "Nature routes" },
  { src: heroImages.tradeShow, alt: "Crescent Lake Dunhuang for Muslim-friendly Silk Road private China trips.", title: "Silk Road" },
];

export default function Home() {
  return (
    <main className="mono-shell" style={{ color: "var(--brand-text)", paddingTop: "72px" }}>
      <MediaHero
        image={pageHeroImages.home}
        alt="Mutianyu Great Wall private China tour for first-time travelers."
        eyebrow="Private China trips, designed around real travelers"
        title={<>China journeys,<br className="hidden sm:block" /> built around you.</>}
        body="Plan a private China trip that fits your pace, family, food needs, comfort level, and curiosity. From Beijing, Xi'an, and Shanghai to Yunnan, Zhangjiajie, Tibet, Xinjiang, Guilin, and Guizhou, we make the route feel clear before you go."
        actions={
          <>
            <Link href="/journeys" className="mono-button bg-white text-[var(--brand-black)] hover:bg-[var(--brand-gray-200)] hover:text-[var(--brand-black)]">
              Explore trips <ArrowRight size={17} />
            </Link>
            <Link href="/b2b" className="mono-button border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-black)]">
              B2B partners
            </Link>
          </>
        }
        stats={metrics}
      />

      <section className="relative overflow-hidden bg-[var(--brand-white)] px-6 lg:px-10" style={{ paddingBottom: "clamp(72px, 8vw, 108px)", paddingTop: "clamp(62px, 7vw, 104px)" }}>
        <div className="mono-wrap">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_0.92fr] lg:items-center">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-16 bg-[var(--brand-black)]" />
                <p className="b2b-eyebrow mb-0">Private China, made practical</p>
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
                China journeys,
                <br className="hidden sm:block" /> built around you.
              </h1>
              <div className="mt-8 grid max-w-3xl grid-cols-1 gap-7 md:grid-cols-[1fr_auto] md:items-end">
                <p className="b2b-lede" style={{ fontSize: "clamp(1.05rem, 1.45vw, 1.22rem)", marginTop: 0, maxWidth: 650 }}>
                  China can feel huge from the outside. We turn it into a private route that makes sense: the right cities, the right pace, the right guide, and the right amount of breathing room.
                </p>
                <div className="hidden w-28 text-right text-[0.68rem] font-bold uppercase leading-5 tracking-[0.16em] text-[var(--brand-gray-500)] md:block">
                  Est. 2012
                  <br />
                  China based
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/journeys" className="mono-button">
                  Browse private trips <ArrowRight size={17} />
                </Link>
                <Link href="/b2b" className="mono-button mono-button-secondary">
                  B2B partner portal
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute right-0 top-0 z-10 hidden bg-[var(--brand-black)] px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white lg:block">
                Trip planning
              </div>
              <div className="border border-[var(--brand-black)] bg-[var(--brand-black)]">
                <div className="grid grid-cols-1 gap-px bg-[var(--brand-gray-800)] md:grid-cols-[1fr_0.42fr]">
                  <figure className="relative min-h-[430px] overflow-hidden bg-[var(--brand-black)]">
                    <img
                      src={heroImages.materials}
                      alt="Yu Garden Shanghai private China trip planning."
                      className="h-full min-h-[430px] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="absolute bottom-0 left-0 max-w-[520px] bg-[var(--brand-black)] p-5 text-sm leading-6 text-[var(--brand-gray-200)]">
                      Private routes should feel personal before they feel complicated.
                    </figcaption>
                  </figure>
                  <div className="grid grid-cols-2 gap-px bg-[var(--brand-gray-800)] md:grid-cols-1">
                    <img
                      src={heroImages.greatWall}
                      alt="Great Wall route planning for China itinerary design."
                      className="h-44 w-full object-cover md:h-full"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={heroImages.shanghai}
                      alt="Hongya Cave Chongqing for colorful private China city trips."
                      className="h-44 w-full object-cover md:h-full"
                      loading="lazy"
                      decoding="async"
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
                    <div className="mono-index">Travel model</div>
                    <h2 className="mt-1 text-xl font-semibold leading-tight text-[var(--brand-black)]">Private, flexible, China-based</h2>
                    <p className="b2b-body mt-3">
                      You bring the wish list. We turn it into a route with realistic days, good guide matching, transport logic, and on-trip support.
                    </p>
                    <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {["Private guides", "Custom pacing", "Family and halal support", "China-based team"].map((item) => (
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

      <DarkImageSection
        image="/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg"
        alt="West Lake Hangzhou for premium East China itinerary planning."
        eyebrow="What we do"
        title="Private trips with the logistics already thought through."
        body="A beautiful China itinerary still needs smart timing, realistic transfers, good hotels, clear meal planning, and the right local support. That is where we do the quiet work."
        imagePosition="center"
      >
        <div className="grid grid-cols-1 gap-px bg-white/20 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeSection key={service.title} delay={index * 70}>
              <article className="h-full bg-black/62 p-7 backdrop-blur-sm sm:p-8">
                <div className="mb-8 flex h-10 w-10 items-center justify-center border border-white/25 text-[var(--brand-white)]">
                  {service.icon}
                </div>
                <h3 className="b2b-card-title" style={{ color: "var(--brand-white)" }}>{service.title}</h3>
                <p className="b2b-body" style={{ color: "var(--brand-gray-200)" }}>{service.desc}</p>
              </article>
            </FadeSection>
          ))}
        </div>
      </DarkImageSection>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <FadeSection>
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.5fr_1fr] lg:items-end">
              <div>
                <p className="b2b-eyebrow">Trip styles</p>
                <h2 className="b2b-heading">Choose the China story that fits your travelers.</h2>
              </div>
              <p className="b2b-lede mt-0">
                Some travelers want classic icons. Some want pandas and easy family days. Some want mountains, deserts, old towns, halal-aware routing, or a slower senior-friendly pace.
              </p>
            </div>
          </FadeSection>
          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-4">
            {visualProof.map((item, index) => (
              <FadeSection key={item.src} delay={index * 60}>
                <figure className="group relative min-h-[320px] overflow-hidden bg-[var(--brand-black)] md:min-h-[430px]">
                  <img src={item.src} alt={item.alt} className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:min-h-[430px]" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/8 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mono-index mb-2 text-[var(--brand-gray-300)]">0{index + 1}</div>
                    <h3 className="text-2xl font-semibold leading-tight text-white">{item.title}</h3>
                  </figcaption>
                </figure>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Traveler fit</p>
            <h2 className="b2b-heading" style={{ maxWidth: 720 }}>
              Built for travelers who want China planned around real needs.
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

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <FadeSection className="mb-14 max-w-3xl">
            <p className="b2b-eyebrow">How planning works</p>
            <h2 className="b2b-heading">From a rough idea to a route you can actually picture.</h2>
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

      <DarkImageSection
        image="/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-mutianyu.jpg"
        alt="Mutianyu Great Wall route for private China trip planning."
        eyebrow="Ready to shape your China trip?"
        title="Send your travel window, group size, interests, and pace. We will turn it into a private route."
        imagePosition="center top"
        actions={
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
            Ask on WhatsApp <ArrowRight size={17} />
          </a>
        }
      />
    </main>
  );
}
