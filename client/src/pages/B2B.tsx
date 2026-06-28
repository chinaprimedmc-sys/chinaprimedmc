import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ClipboardList,
  FileText,
  Headphones,
  Landmark,
  Map,
  ShieldCheck,
  Train,
  Users,
} from "lucide-react";
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
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const serviceImages = {
  hero: "/services/china-prime-dmc-b2b-services-travel-trade-buyer-meeting.jpeg",
  materials: "/services/china-prime-dmc-white-label-itinerary-support-trade-materials.jpeg",
  shanghai: "/services/china-prime-dmc-ground-operations-shanghai-business-travel.jpeg",
  mice: "/services/china-prime-dmc-china-mice-incentive-travel-shanghai-skyline.jpeg",
  greatWall: "/services/china-prime-dmc-china-itinerary-design-great-wall.jpeg",
  forbiddenCity: "/services/china-prime-dmc-private-china-tours-forbidden-city-beijing.jpeg",
  tradeShow: "/services/china-prime-dmc-trade-show-proof-singapore-icgte.jpeg",
};

const metrics = [
  { value: "2012", label: "Established" },
  { value: "30+", label: "China destinations" },
  { value: "13", label: "City network" },
  { value: "24/7", label: "In-trip support" },
];

const audiences = [
  {
    title: "Tour operators",
    body: "Multi-city China programs with routing logic, net pricing, supplier coordination, and sales-ready operating notes.",
  },
  {
    title: "Travel advisors",
    body: "Private China journeys shaped around client profile, hotel level, guide style, dining needs, and real-time support.",
  },
  {
    title: "DMC partners",
    body: "Quiet China coverage under your brand, from itinerary design to ground execution and white-label documentation.",
  },
  {
    title: "Corporate and MICE teams",
    body: "Incentives, delegations, education groups, and special-interest programs with timing, flow, and contingency planning.",
  },
];

const coreServices = [
  {
    icon: <Map size={19} />,
    title: "Itinerary Design & Routing",
    body: "China itinerary architecture built around route logic, seasonality, travel time, hotel fit, and sellable pacing.",
    image: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain.jpg",
    alt: "Tianmen Mountain Zhangjiajie for China itinerary design and dramatic nature routes.",
    points: ["Clear city sequence", "Realistic daily pacing", "Strong sales angle"],
  },
  {
    icon: <FileText size={19} />,
    title: "Net Pricing & Quote Support",
    body: "Trade-ready quote structures with net rates, inclusions, exclusions, upgrade logic, and cost assumptions.",
    image: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-terracotta-army.jpg",
    alt: "Terracotta Army Xi'an for classic China tour quote support.",
    points: ["Net-rate clarity", "Upgrade options", "Resale-friendly notes"],
  },
  {
    icon: <ClipboardList size={19} />,
    title: "White-Label Proposal Support",
    body: "Proposal language, destination notes, supplier explanations, and itinerary copy your team can adapt quickly.",
    image: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-xidi.jpg",
    alt: "Xidi village Anhui for white-label China itinerary proposal support.",
    points: ["Your brand in front", "Reusable copy", "Partner-ready structure"],
  },
  {
    icon: <ShieldCheck size={19} />,
    title: "Ground Operations in China",
    body: "China-based coordination for guides, vehicles, hotels, restaurants, tickets, entrances, and day-by-day delivery.",
    image: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-chongqing.jpg",
    alt: "Chongqing skyline for China ground operations and city logistics.",
    points: ["Supplier coordination", "Local execution", "On-trip response"],
  },
  {
    icon: <Train size={19} />,
    title: "Rail, Flight & Transfer Coordination",
    body: "High-speed rail, domestic flights, airport transfers, station movement, and buffer planning for complex routes.",
    image: "/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-shanghai-world-financial-center.jpg",
    alt: "Shanghai World Financial Center for China rail flight and transfer coordination.",
    points: ["Rail vs flight logic", "Transfer sequencing", "Group buffers"],
  },
  {
    icon: <Building2 size={19} />,
    title: "Hotels, Guides & Supplier Matching",
    body: "Supplier matching by client profile: luxury FIT, student groups, corporate delegations, families, and series tours.",
    image: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg",
    alt: "Chengdu giant panda base for family friendly China supplier matching.",
    points: ["Hotel-level logic", "Guide matching", "Meal planning"],
  },
  {
    icon: <Users size={19} />,
    title: "Groups, Series & MICE Operations",
    body: "Rooming lists, coach movement, dining capacity, hosted moments, venue timing, and communication rhythm.",
    image: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-canton-tower.jpg",
    alt: "Canton Tower Guangzhou for China MICE and group operations.",
    points: ["Arrival flow", "Group movement", "Backup plans"],
  },
  {
    icon: <Headphones size={19} />,
    title: "In-Trip Support & Problem Solving",
    body: "Live support for schedule changes, traffic, supplier communication, weather issues, ticket changes, and urgent needs.",
    image: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-mogao-caves.jpg",
    alt: "Mogao Caves Dunhuang for on-trip China travel support and route management.",
    points: ["Fast adjustments", "Local communication", "Issue resolution"],
  },
];

const process = [
  {
    step: "01",
    title: "Brief",
    body: "Send dates, cities, client type, budget level, hotel preference, pace, meal needs, and must-have experiences.",
  },
  {
    step: "02",
    title: "Feasibility",
    body: "We check route logic, seasonality, transport, supplier availability, group constraints, and smarter alternatives.",
  },
  {
    step: "03",
    title: "Design",
    body: "We build daily timing, city sequence, experience logic, guide needs, hotel assumptions, and operating notes.",
  },
  {
    step: "04",
    title: "Quote",
    body: "You receive net pricing, inclusions, exclusions, upgrade options, assumptions, and trade-offs.",
  },
  {
    step: "05",
    title: "Confirm",
    body: "We lock suppliers, refine timing, confirm rooming needs, align documents, and prepare delivery.",
  },
  {
    step: "06",
    title: "Operate",
    body: "Our China team delivers the ground experience while your team keeps client ownership.",
  },
];

const useCases = [
  "A travel advisor needs a private China journey for a family that wants Beijing, Xi'an, Shanghai, and a softer pace.",
  "A tour operator needs a China extension that can be sold after Japan, Korea, Singapore, or Southeast Asia.",
  "A DMC partner needs China ground handling under their own brand for a client they already manage.",
  "A corporate team needs incentive travel with hotels, dining, hosted experiences, transport, and reliable timing.",
  "An education or association group needs cultural content, local coordination, safety awareness, and clear day-by-day operations.",
  "A luxury agency needs a VIP program with better guide matching, hotel logic, private dining, and fast in-trip decisions.",
];

const deliverables = [
  "Partner-ready itinerary structure",
  "Net pricing and quote assumptions",
  "Hotel, guide, vehicle, and supplier logic",
  "Domestic rail, flight, and transfer coordination",
  "Restaurant and meal planning notes",
  "Group movement and MICE operation notes",
  "White-label proposal language when needed",
  "In-trip support and local issue resolution",
];

const faqs = [
  {
    question: "Do you work white-label for travel agencies and DMC partners?",
    answer: "Yes. We can provide white-label itinerary language, net pricing, supplier notes, and China-side delivery while your team keeps the client relationship.",
  },
  {
    question: "Do you provide net rates for resale?",
    answer: "Yes. Our B2B quotes include net pricing, inclusions, exclusions, upgrade options, assumptions, and resale notes.",
  },
  {
    question: "Can you support both FIT and groups?",
    answer: "Yes. We support private FIT, families, small groups, series tours, education groups, incentives, delegations, and specialist-interest travel.",
  },
  {
    question: "How fast can you quote a China program?",
    answer: "Simple private programs can move quickly. Complex MICE, multi-city groups, and special-access requests need more feasibility work before responsible pricing.",
  },
  {
    question: "Can you customize an itinerary we already have?",
    answer: "Yes. Send the draft route and we can improve pacing, hotels, feasibility, experiences, and quote logic.",
  },
  {
    question: "What information should we send in a brief?",
    answer: "Send dates, cities, traveler type, group size, budget, hotel level, pace, meal needs, mobility notes, must-haves, and white-label needs.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "China Prime DMC B2B Services",
  url: "https://www.chinaprimedmc.com/b2b",
  image: "https://www.chinaprimedmc.com/services/china-prime-dmc-b2b-services-travel-trade-buyer-meeting.jpeg",
  description:
    "China Prime DMC provides China ground services, itinerary design, net pricing, white-label proposal support, FIT, group, MICE, and incentive travel operations for travel advisors, tour operators, DMC partners, and corporate travel teams.",
  foundingDate: "2012",
  areaServed: {
    "@type": "Country",
    name: "China",
  },
  serviceType: [
    "China DMC services",
    "China ground handling",
    "White-label China itinerary design",
    "China MICE and incentive travel",
    "B2B China travel operations",
    "China tour operator support",
  ],
  provider: {
    "@type": "TravelAgency",
    name: "China Prime DMC",
    url: "https://www.chinaprimedmc.com",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "China B2B Travel Services",
    itemListElement: coreServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.body,
      },
    })),
  },
};

export default function B2B() {
  useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? "";

    document.title = "China DMC Services for Travel Partners | China Prime DMC";
    metaDescription?.setAttribute(
      "content",
      "China Prime DMC provides B2B China ground services, white-label itinerary design, net pricing, FIT, group, MICE, and incentive travel support for travel advisors, tour operators, DMC partners, and corporate teams."
    );

    return () => {
      document.title = originalTitle;
      metaDescription?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <main className="mono-shell" style={{ color: "var(--brand-black)", paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <MediaHero
        image={pageHeroImages.services}
        alt="Shanghai ground operations and business travel logistics for China DMC partners."
        eyebrow="China ground services for travel brands"
        title="China ground services for global travel partners."
        body="China Prime DMC designs, quotes, and operates China programs for travel advisors, tour operators, DMC partners, corporate travel teams, education groups, and specialist-interest planners."
        actions={
          <>
            <Link href="/contact" className="mono-button bg-white text-[var(--brand-black)] hover:bg-[var(--brand-gray-200)] hover:text-[var(--brand-black)]">Send a brief <ArrowRight size={17} /></Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mono-button border-white bg-transparent text-white hover:bg-white hover:text-[var(--brand-black)]">Start conversation</a>
          </>
        }
        stats={metrics}
      />

      <DarkImageSection
        image={serviceImages.hero}
        alt="China Prime DMC meeting travel trade buyers for B2B China service planning."
        eyebrow="Who we serve"
        title="A China operating desk for different trade models."
        body="A tour operator, a luxury advisor, a corporate planner, and another DMC do not need the same kind of China support. We adapt the service model to how your business sells."
      >
          <div className="grid grid-cols-1 gap-px bg-white/20 md:grid-cols-2">
            {audiences.map((item, index) => (
              <FadeSection key={item.title} delay={index * 70}>
                <article className="h-full bg-black/48 p-7 backdrop-blur-sm sm:p-8">
                  <div className="mono-index mb-10 text-[var(--brand-gray-300)]">Partner model</div>
                  <h3 className="b2b-card-title" style={{ color: "var(--brand-white)" }}>{item.title}</h3>
                  <p className="b2b-body" style={{ color: "var(--brand-gray-200)" }}>{item.body}</p>
                </article>
              </FadeSection>
            ))}
          </div>
      </DarkImageSection>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <FadeSection>
              <p className="b2b-eyebrow">Core services</p>
              <h2 className="b2b-heading">What we actually handle in China.</h2>
            </FadeSection>
            <FadeSection delay={100}>
              <p className="b2b-lede" style={{ marginTop: 0 }}>
                Our work sits between product design and ground delivery. We help partners decide what is feasible, price it clearly, prepare it for sale, and operate it through a China-based team.
              </p>
            </FadeSection>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2 xl:grid-cols-4">
            {coreServices.map((service, index) => (
              <FadeSection key={service.title} delay={index * 35}>
                <article className="visual-card group">
                  <div className="visual-card-image">
                    <img src={service.image} alt={service.alt} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/8 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-white text-[var(--brand-black)]">
                      {service.icon}
                    </div>
                  </div>
                  <div className="visual-card-caption">
                    <h3 className="b2b-card-title">{service.title}</h3>
                    <p className="line-clamp-3 text-sm leading-6 text-[var(--brand-gray-700)]">{service.body}</p>
                    <div className="compact-list">
                      {service.points.map((point) => (
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
        <div className="mono-wrap grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeSection>
            <figure className="border border-[var(--brand-border)] bg-white">
              <img src={serviceImages.materials} alt="China Prime DMC white-label itinerary support materials for travel trade partners." className="h-[520px] w-full object-cover" loading="lazy" decoding="async" />
              <figcaption className="border-t border-[var(--brand-border)] p-5 text-sm text-[var(--brand-gray-600)]">
                Trade-ready materials matter because overseas partners need China programs they can explain quickly.
              </figcaption>
            </figure>
          </FadeSection>
          <FadeSection delay={100} className="self-center">
            <p className="b2b-eyebrow">White-label support</p>
            <h2 className="b2b-heading">Your brand stays in front. We operate behind it.</h2>
            <p className="b2b-lede">
              Many partners do not need another public-facing brand. They need a China team that makes their promise operational with white-label proposals, net rates, supplier logic, and reliable delivery.
            </p>
            <div className="mt-8 grid gap-px bg-[var(--brand-border)] sm:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white p-4">
                  <Check size={16} className="mt-1 shrink-0" />
                  <span className="text-sm font-semibold leading-6 text-[var(--brand-black)]">{item}</span>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <FadeSection className="mb-14 max-w-3xl">
            <p className="b2b-eyebrow">How we work</p>
            <h2 className="b2b-heading">From client brief to China ground delivery.</h2>
          </FadeSection>
          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-3">
            {process.map((item, index) => (
              <FadeSection key={item.step} delay={index * 50}>
                <article className="h-full bg-white p-7 sm:p-8">
                  <div className="mono-index">{item.step}</div>
                  <h3 className="b2b-card-title mt-10">{item.title}</h3>
                  <p className="b2b-body">{item.body}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section relative isolate overflow-hidden bg-[var(--brand-black)] text-white">
        <img src="/programs/china-yangtze-cruise-13-day/china-prime-dmc-china-yangtze-cruise-13-day-wu-gorge.jpg" alt="Wu Gorge Yangtze River for complex China route operations." className="absolute inset-0 -z-30 h-full w-full object-cover opacity-75" loading="lazy" decoding="async" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.58)_50%,rgba(0,0,0,0.20)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.74)_0%,rgba(0,0,0,0.10)_58%,rgba(0,0,0,0.44)_100%)]" />
        <div className="mono-wrap grid grid-cols-1 gap-10 lg:grid-cols-3">
          <FadeSection className="lg:col-span-1">
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Operating coverage</p>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">China is not one operating environment.</h2>
            <p className="b2b-lede" style={{ color: "var(--brand-gray-300)" }}>
              Beijing, Shanghai, Xi'an, Guilin, Yunnan, Chengdu, Zhangjiajie, Tibet, Xinjiang, and the Silk Road all require different supplier logic, timing, and risk management.
            </p>
          </FadeSection>
            {[
            { src: "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-lujiazui.jpg", alt: "Lujiazui Shanghai for China business travel and ground operations.", title: "Urban and business travel", icon: <Building2 size={18} /> },
            { src: serviceImages.greatWall, alt: "Great Wall of China itinerary design for travel partners.", title: "Classic China routing", icon: <Landmark size={18} /> },
          ].map((item, index) => (
            <FadeSection key={item.title} delay={(index + 1) * 90}>
              <figure className="h-full bg-black/42 backdrop-blur-sm">
                <img src={item.src} alt={item.alt} className="h-80 w-full object-cover md:h-[460px]" loading="lazy" decoding="async" />
                <figcaption className="flex items-center gap-3 border border-white/15 border-t-0 p-5 text-sm font-semibold text-[var(--brand-gray-100)]">
                  {item.icon} {item.title}
                </figcaption>
              </figure>
            </FadeSection>
          ))}
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.86fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Use cases</p>
            <h2 className="b2b-heading">The kinds of briefs we are built for.</h2>
            <p className="b2b-lede">
              The best B2B service pages answer a practical question: "Can this team handle my situation?" These are common partner briefs we can support.
            </p>
            <figure className="mt-10 border border-[var(--brand-border)] bg-white">
              <img src={serviceImages.forbiddenCity} alt="Forbidden City Beijing private China tour service for travel advisors." className="h-80 w-full object-cover" loading="lazy" decoding="async" />
            </figure>
          </FadeSection>
          <FadeSection delay={100}>
            <div className="grid gap-px bg-[var(--brand-border)]">
              {useCases.map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] gap-5 bg-white p-5">
                  <span className="mono-index">{String(index + 1).padStart(2, "0")}</span>
                  <p className="m-0 text-base font-semibold leading-7 text-[var(--brand-black)]">{item}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.86fr]">
          <FadeSection>
            <p className="b2b-eyebrow">MICE and incentive travel</p>
            <h2 className="b2b-heading">Programs that need timing, flow, and contingency thinking.</h2>
            <p className="b2b-lede">
              Corporate and incentive travel in China is not only about hotels and sightseeing. It is about movement, hosted moments, room blocks, dining capacity, meetings, group communication, and backup plans. We help partners think through the experience before the client is on the ground.
            </p>
          </FadeSection>
          <FadeSection delay={100}>
            <figure className="border border-[var(--brand-border)] bg-white">
              <img src={serviceImages.mice} alt="Shanghai skyline representing China MICE and incentive travel operations." className="h-[420px] w-full object-cover" loading="lazy" decoding="async" />
              <figcaption className="border-t border-[var(--brand-border)] p-5 text-sm text-[var(--brand-gray-600)]">
                MICE and incentive programs need a different operating rhythm than private leisure travel.
              </figcaption>
            </figure>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Trade proof</p>
            <h2 className="text-4xl font-semibold leading-tight text-[var(--brand-black)] md:text-5xl">We meet partners in the room, not only in the inbox.</h2>
            <p className="b2b-lede">
              Our trade show presence in Kuala Lumpur and Singapore gives partners visible proof that China Prime DMC is active in regional travel markets and listens to real buyer questions.
            </p>
            <Link href="/trade-shows" className="mono-button mono-button-secondary mt-8">View trade shows <ArrowRight size={16} /></Link>
          </FadeSection>
          <FadeSection delay={100}>
            <figure className="border border-[var(--brand-border)] bg-white">
              <img src={serviceImages.tradeShow} alt="China Prime DMC at ICGTE Singapore travel trade show." className="h-[460px] w-full object-cover" loading="lazy" decoding="async" />
            </figure>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">FAQ</p>
            <h2 className="text-4xl font-semibold leading-tight text-[var(--brand-black)] md:text-5xl">Questions partners ask before sending a China brief.</h2>
          </FadeSection>
          <div className="grid gap-px bg-[var(--brand-border)]">
            {faqs.map((faq, index) => (
              <FadeSection key={faq.question} delay={index * 45}>
                <article className="bg-white p-6 sm:p-7">
                  <h3 className="text-lg font-semibold leading-snug text-[var(--brand-black)]">{faq.question}</h3>
                  <p className="b2b-body mt-3">{faq.answer}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <DarkImageSection
        image="/trade-shows/icgte-2026-singapore/china-prime-dmc-icgte-2026-singapore-official-exhibition-backdrop-team-photo.jpeg"
        alt="China Prime DMC team at Singapore travel trade show."
        eyebrow="Send the brief"
        title="We will tell you what works in China."
        body="Share your dates, traveler profile, cities, budget level, and service expectations. We will help turn the idea into a China program your team can sell and we can operate."
        actions={
          <Link href="/contact" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
            Request quote <ArrowRight size={17} />
          </Link>
        }
      >
        <div className="hidden lg:flex justify-end">
          <BadgeCheck size={72} className="text-white/70" />
        </div>
      </DarkImageSection>
    </main>
  );
}
