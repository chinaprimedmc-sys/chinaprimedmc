import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { EMAIL, WHATSAPP_URL } from "@/lib/data";
import DarkImageSection from "@/components/DarkImageSection";
import { visualAssets } from "@/lib/visualAssets";

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

const privateImages = {
  hero: visualAssets.privateHero.src,
  gubei: visualAssets.privateFirstTime.src,
  family: visualAssets.privateFamily.src,
  women: visualAssets.privateWomen.src,
  glassBridge: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-glass-bridge.jpg",
  huangguoshu: "/programs/guizhou-ethnic-karst-6-day/china-prime-dmc-guizhou-ethnic-karst-6-day-huangguoshu-waterfall.jpg",
  shapotou: visualAssets.privateMuslim.src,
  karakul: "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-taklamakan-desert.jpg",
  songzanlin: visualAssets.privateFinal.src,
  huanglong: visualAssets.privateRouteRhythm.src,
  stoneForest: visualAssets.privateExtension.src,
  final: visualAssets.privateFinal.src,
} as const;

const heroStats = [
  { value: "Private", label: "No fixed group schedule" },
  { value: "2012", label: "Planning from inside China" },
  { value: "24/7", label: "Support while you travel" },
];

const travelStyles = [
  {
    icon: <UsersRound size={18} />,
    title: "First-time China",
    image: privateImages.gubei,
    alt: visualAssets.privateFirstTime.alt,
    body: "Beijing, Xi'an, Shanghai, Suzhou, Hangzhou, and one scenic extension, paced so the trip feels exciting rather than exhausting.",
    points: ["Classic icons", "Private guide", "Easy pacing"],
  },
  {
    icon: <HeartHandshake size={18} />,
    title: "Family travel",
    image: privateImages.family,
    alt: visualAssets.privateFamily.alt,
    body: "Pandas, hands-on food experiences, short transfer days, flexible starts, and guides who understand how families actually move.",
    points: ["Kid-aware timing", "Panda moments", "Family rooms"],
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Muslim-friendly China",
    image: privateImages.shapotou,
    alt: "Shapotou desert scenery for Muslim-friendly China private tours.",
    body: "Routes planned around practical meal options, prayer-stop awareness, private transport, and honest notes where local choices are limited.",
    points: ["Halal-aware meals", "Mosque advice", "Private route"],
  },
  {
    icon: <Sparkles size={18} />,
    title: "Women-friendly journeys",
    image: privateImages.women,
    alt: visualAssets.privateWomen.alt,
    body: "Culture, design, food, tea, safe evening timing, boutique neighborhoods, and a guide style that feels comfortable and unhurried.",
    points: ["Comfortable flow", "Culture and food", "Flexible guide"],
  },
];

const wowStops = [
  {
    title: "Zhangjiajie glass bridge",
    image: privateImages.glassBridge,
    alt: "Tianmen Mountain Zhangjiajie for dramatic private China nature tours.",
    text: "A high-impact nature stop for travelers who want China to feel cinematic from the first glance.",
  },
  {
    title: "Huangguoshu Waterfall",
    image: privateImages.huangguoshu,
    alt: "Huangguoshu Waterfall for private Guizhou China tours.",
    text: "One of China's strongest waterfall landscapes, ideal for repeat travelers and families who want something beyond the usual route.",
  },
  {
    title: "Karakul Lake",
    image: privateImages.karakul,
    alt: "Karakul Lake Xinjiang for private Silk Road China travel.",
    text: "A remote Silk Road view that feels vast, bright, and completely different from China's gateway cities.",
  },
  {
    title: "Songzanlin Monastery",
    image: privateImages.songzanlin,
    alt: "Songzanlin Monastery Shangri-La for private Yunnan travel.",
    text: "A powerful Yunnan highland experience for travelers drawn to mountains, culture, and slower days.",
  },
];

const planningFlow = [
  { step: "01", title: "Tell us what has to feel easy", body: "Kids, parents, food, walking, payments, hotel style, privacy, faith needs, and the pace you know your group can enjoy." },
  { step: "02", title: "We remove the wrong parts", body: "We edit the route before adding more: fewer awkward transfers, better hotel locations, realistic starts, and enough time where it matters." },
  { step: "03", title: "You refine with a real person", body: "Adjust hotels, daily rhythm, special interests, scenic extensions, and comfort level before anything is locked." },
  { step: "04", title: "You travel with backup", body: "Guides, drivers, tickets, transfers, and on-trip adjustments are coordinated by a China-based team that knows the ground." },
];

const ctaBrief = [
  "Hello China Prime DMC team,",
  "",
  "I am planning a private China trip and would like help turning a rough idea into a route that feels easy on the ground.",
  "",
  "Travel month:",
  "Number of travelers:",
  "Traveler ages:",
  "Preferred cities or experiences:",
  "Travel style: first-time / family / Muslim-friendly / women-friendly / senior-friendly / luxury / nature / culture",
  "Hotel level:",
  "Food, mobility, or special needs:",
  "",
  "Please suggest a private route and the details you need to quote it.",
].join("\n");

const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Private China tour request")}&body=${encodeURIComponent(ctaBrief)}`;
const whatsappHref = `${WHATSAPP_URL}?text=${encodeURIComponent(ctaBrief)}`;

const privateTourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Private China Tours",
  url: "https://www.chinaprimedmc.com/private-china-tours",
  description: "Private custom China tours for families, first-time travelers, Muslim-friendly travelers, women-friendly groups, senior travelers, and luxury private clients.",
  image: `https://www.chinaprimedmc.com${privateImages.hero}`,
  provider: {
    "@type": "TravelAgency",
    name: "China Prime DMC",
    url: "https://www.chinaprimedmc.com",
  },
};

export default function PrivateTours() {
  useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? "";

    document.title = "Private China Tours | Custom Luxury China Travel Planning";
    metaDescription?.setAttribute(
      "content",
      "Plan a private China tour with China Prime DMC. Custom luxury China travel for families, first-time visitors, Muslim-friendly travelers, senior travelers, and private clients who want China handled with care.",
    );

    return () => {
      document.title = originalTitle;
      metaDescription?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <main className="mono-shell" style={{ color: "var(--brand-black)", paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privateTourSchema) }} />

      <section className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-[var(--brand-black)] text-white">
        <img
          src={privateImages.hero}
          alt={visualAssets.privateHero.alt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.48)_44%,rgba(0,0,0,0.08)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.64)_0%,rgba(0,0,0,0.04)_56%,rgba(0,0,0,0.26)_100%)]" />

        <div className="flex min-h-[calc(100svh-72px)] items-end px-6 py-12 lg:px-10 lg:py-16">
          <div className="mono-wrap w-full">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(320px,0.44fr)] lg:items-end">
              <FadeSection>
                <p className="b2b-eyebrow text-[var(--brand-gray-300)]">Private China tours</p>
                <h1 className="text-[clamp(3rem,7vw,7.4rem)] font-semibold leading-[0.9] text-white">
                  Your China trip should feel easier than you imagined.
                </h1>
                <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--brand-gray-100)] md:text-xl md:leading-9">
                  Private China tours for families, first-time visitors, Muslim-friendly travelers, women-friendly trips, senior travelers, and private clients who want the icons, the beauty, and the local life without trying to solve China by themselves.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mono-button bg-white text-[var(--brand-black)] hover:bg-[var(--brand-gray-200)] hover:text-[var(--brand-black)]">
                    Ask for route advice <MessageCircle size={17} />
                  </a>
                  <a href={mailtoHref} className="mono-button border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-black)]">
                    Send my travel notes <Mail size={17} />
                  </a>
                </div>
              </FadeSection>

              <FadeSection delay={120}>
                <div className="grid gap-px bg-white/20 backdrop-blur-sm">
                  {heroStats.map((item) => (
                    <div key={item.label} className="bg-black/48 p-5 backdrop-blur-sm sm:p-6">
                      <div className="text-3xl font-semibold leading-none text-white md:text-4xl">{item.value}</div>
                      <div className="mono-index mt-3 text-[var(--brand-gray-300)]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.58fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Who this is for</p>
            <h2 className="b2b-heading">For travelers who want China, not the stress of planning China.</h2>
            <p className="b2b-lede">
              You do not need to know China's train system, hotel geography, meal limitations, ticket timing, payment habits, or which scenic region belongs with which city. That is what we handle before you arrive.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2">
            {travelStyles.map((style, index) => (
              <FadeSection key={style.title} delay={index * 60}>
                <article className="visual-card group">
                  <div className="visual-card-image">
                    <img src={style.image} alt={style.alt} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/8 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-white text-[var(--brand-black)]">
                      {style.icon}
                    </div>
                  </div>
                  <div className="visual-card-caption">
                    <h3 className="b2b-card-title">{style.title}</h3>
                    <p className="text-sm leading-6 text-[var(--brand-gray-700)]">{style.body}</p>
                    <div className="compact-list">
                      {style.points.map((point) => (
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

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <FadeSection className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.52fr_1fr]">
            <div>
              <p className="b2b-eyebrow">The moment that makes the trip yours</p>
              <h2 className="b2b-heading">One unforgettable landscape can change the whole meaning of China.</h2>
            </div>
            <p className="b2b-lede mt-0">
              The best private China trips balance famous icons with one place that feels personal: a mountain, a desert, a river town, a panda morning, or a night city your family will talk about years later.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2 xl:grid-cols-4">
            {wowStops.map((stop, index) => (
              <FadeSection key={stop.title} delay={index * 55}>
                <figure className="group relative min-h-[420px] overflow-hidden bg-[var(--brand-black)]">
                  <img src={stop.image} alt={stop.alt} className="h-full min-h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mono-index mb-3 text-[var(--brand-gray-300)]">0{index + 1}</div>
                    <h3 className="text-3xl font-semibold leading-tight text-white">{stop.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--brand-gray-200)]">{stop.text}</p>
                  </figcaption>
                </figure>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <DarkImageSection
        image={privateImages.huanglong}
        alt="Huanglong scenic pools for private China nature travel."
        eyebrow="How planning works"
        title="A private tour is not a list of cities. It is a rhythm your group can actually enjoy."
        body="We design around the real experience: when to start, how long to drive, when to use high-speed rail, where to slow down, which guide style fits, and what to skip so the trip does not become a checklist."
        imagePosition="center"
      >
        <div className="grid gap-px bg-white/20 sm:grid-cols-2">
          {planningFlow.map((item) => (
            <div key={item.step} className="bg-black/44 p-6 backdrop-blur-sm">
              <div className="mono-index mb-8 text-[var(--brand-gray-300)]">{item.step}</div>
              <h3 className="text-xl font-semibold leading-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--brand-gray-200)]">{item.body}</p>
            </div>
          ))}
        </div>
      </DarkImageSection>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-px bg-[var(--brand-border)] lg:grid-cols-[1.1fr_0.9fr]">
          <FadeSection>
            <figure className="relative min-h-[520px] overflow-hidden bg-[var(--brand-black)]">
              <img src={privateImages.stoneForest} alt={visualAssets.privateExtension.alt} className="h-full min-h-[520px] w-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/64 via-black/6 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 max-w-2xl p-7">
                <div className="mono-index mb-3 text-[var(--brand-gray-300)]">Yunnan extension</div>
                <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">China does not have to stop at Beijing, Xi'an, and Shanghai.</h2>
              </figcaption>
            </figure>
          </FadeSection>

          <FadeSection delay={100} className="bg-white p-8 lg:p-10">
            <p className="b2b-eyebrow">What you do not have to solve</p>
            <h2 className="text-4xl font-semibold leading-tight text-[var(--brand-black)] md:text-5xl">The details that make China feel calm.</h2>
            <div className="mt-8 grid gap-px bg-[var(--brand-border)]">
              {[
                "Private guides and drivers matched to your travel style",
                "Hotel routing that avoids inconvenient neighborhoods",
                "High-speed rail, domestic flight, and transfer timing",
                "Restaurant planning for families, halal-aware travel, vegetarians, and seniors",
                "Ticket timing for major attractions and crowded seasons",
                "Local support when weather, traffic, or preferences change",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white p-4">
                  <Check size={16} className="mt-1 shrink-0 text-[var(--brand-black)]" />
                  <span className="text-sm font-semibold leading-6 text-[var(--brand-black)]">{item}</span>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.74fr_1fr] lg:items-center">
          <FadeSection>
            <p className="b2b-eyebrow">Start here</p>
            <h2 className="b2b-heading">Send the rough idea. We will turn it into a first route you can react to.</h2>
            <p className="b2b-lede">
              You can come with a full wish list or only a travel month and a few worries. We will ask the right questions and turn it into a private China route that makes sense for the people traveling.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mono-button">
                Ask for route advice <MessageCircle size={17} />
              </a>
              <a href={mailtoHref} className="mono-button mono-button-secondary">
                Send my travel notes <Mail size={17} />
              </a>
            </div>
          </FadeSection>

          <FadeSection delay={120}>
            <figure className="relative min-h-[460px] overflow-hidden bg-[var(--brand-black)]">
              <img src={privateImages.final} alt={visualAssets.privateFinal.alt} className="h-full min-h-[460px] w-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/66 via-black/6 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mono-index mb-3 text-[var(--brand-gray-300)]">Private China design</div>
                <h3 className="text-3xl font-semibold leading-tight text-white">Classic icons, wild landscapes, and a pace that still feels human.</h3>
              </figcaption>
            </figure>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
