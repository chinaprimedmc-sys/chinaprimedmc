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
    body: "For operators building China departures, private extensions, or multi-city programs, we provide routing logic, net pricing, supplier coordination, and the operational notes your sales and product teams need before they publish or quote.",
  },
  {
    title: "Travel advisors",
    body: "For advisors selling private China journeys, we help turn a client brief into a practical program with the right pace, guide style, hotel level, food planning, special access, and on-trip support.",
  },
  {
    title: "DMC partners",
    body: "For DMCs that need China coverage under their own brand, we work as a quiet operating partner: itinerary design, ground execution, supplier management, and white-label documentation when needed.",
  },
  {
    title: "Corporate and MICE teams",
    body: "For incentive, education, delegation, and special-interest groups, we coordinate movement, timing, service flow, contingency planning, and local delivery across China cities.",
  },
];

const coreServices = [
  {
    icon: <Map size={19} />,
    title: "Itinerary Design & Routing",
    body: "We build China itineraries around travel time, client profile, seasonality, hotel logic, guide availability, restaurant planning, and realistic pacing. A good China program is not just a list of sights. It is a sequence that protects energy, reduces friction, and gives your sales team a clear reason for every city, transfer, and experience.",
  },
  {
    icon: <FileText size={19} />,
    title: "Net Pricing & Quote Support",
    body: "We provide trade-friendly net pricing with inclusions, exclusions, upgrade options, and practical notes on what changes the cost. Partners can request private tours, group series, MICE programs, family trips, or China extensions, and receive quote structures designed for resale rather than consumer-style package copy.",
  },
  {
    icon: <ClipboardList size={19} />,
    title: "White-Label Proposal Support",
    body: "When you want to keep the client relationship fully under your own brand, we can support white-label China itinerary language, partner-ready program outlines, destination notes, supplier explanations, and proposal copy that your team can adapt quickly.",
  },
  {
    icon: <ShieldCheck size={19} />,
    title: "Ground Operations in China",
    body: "Our China-based team coordinates guides, vehicles, hotels, restaurants, train tickets, domestic flights, entrance reservations, local hosts, timing, and day-by-day execution. We focus on operational clarity before the trip begins, because most service problems are prevented during planning.",
  },
  {
    icon: <Train size={19} />,
    title: "Rail, Flight & Transfer Coordination",
    body: "China logistics can be smooth when planned carefully. We help partners decide when to use high-speed rail, when a domestic flight makes sense, how to sequence airport and station transfers, and where buffers are needed for groups, VIPs, families, or time-sensitive corporate travelers.",
  },
  {
    icon: <Building2 size={19} />,
    title: "Hotels, Guides & Supplier Matching",
    body: "We match hotels, guides, vehicles, restaurants, and activity suppliers to the commercial position of the trip. A luxury private journey, a student group, a corporate delegation, and a family program should not use the same supplier logic.",
  },
  {
    icon: <Users size={19} />,
    title: "Groups, Series & MICE Operations",
    body: "For group and MICE programs, we think through arrival patterns, rooming lists, luggage flow, coach movement, restaurant capacity, meeting timing, hosted dinners, contingency plans, and the communication rhythm between your team and our China operations desk.",
  },
  {
    icon: <Headphones size={19} />,
    title: "In-Trip Support & Problem Solving",
    body: "Travel does not end when the proposal is approved. We stay close to the operation while clients are in China, helping with schedule adjustments, supplier communication, weather changes, restaurant issues, traffic, ticket changes, and urgent service needs.",
  },
];

const process = [
  {
    step: "01",
    title: "Brief",
    body: "Send dates, cities, client type, budget level, hotel preference, pace, must-have experiences, meal needs, mobility notes, and your commercial model. A better brief means fewer rounds of revision.",
  },
  {
    step: "02",
    title: "Feasibility",
    body: "We check routing, seasonality, transport logic, supplier availability, group constraints, special requests, and where the program may need a smarter alternative.",
  },
  {
    step: "03",
    title: "Design",
    body: "We build the itinerary structure with daily timing, city sequence, experience logic, guide needs, hotel assumptions, and operating notes your team can understand quickly.",
  },
  {
    step: "04",
    title: "Quote",
    body: "You receive net pricing, inclusions, exclusions, upgrade options, assumptions, and trade-offs. We keep the quote useful for decision-making, not just a number in a spreadsheet.",
  },
  {
    step: "05",
    title: "Confirm",
    body: "After approval, we lock key suppliers, refine timing, confirm names and rooming needs, align documentation, and prepare the China operation for delivery.",
  },
  {
    step: "06",
    title: "Operate",
    body: "Our team manages the China side while you keep ownership of the client relationship. We coordinate the ground experience and stay available when plans need adjustment.",
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
    answer: "Yes. We can operate as your China ground partner while your team keeps the client relationship. Depending on the project, we can provide white-label itinerary language, net pricing, supplier notes, and China-side delivery under your brand position.",
  },
  {
    question: "Do you provide net rates for resale?",
    answer: "Yes. Our B2B quoting is designed for trade partners. We can provide net pricing, inclusions, exclusions, upgrade options, assumptions, and notes that help your team decide how to package and sell the program.",
  },
  {
    question: "Can you support both FIT and groups?",
    answer: "Yes. We support private FIT, families, small groups, series programs, education groups, incentive travel, corporate delegations, and specialist-interest travel. The operating model changes by client type, but the goal is always clear delivery on the ground.",
  },
  {
    question: "How fast can you quote a China program?",
    answer: "Timing depends on complexity, season, group size, and how complete the brief is. Simple private programs can often move quickly; complex MICE, multi-city groups, or special-access requests require more feasibility work before pricing is responsible.",
  },
  {
    question: "Can you customize an itinerary we already have?",
    answer: "Yes. Many partners send a draft route or old program and ask us to improve pacing, update hotels, check feasibility, add better experiences, or rebuild the quote for a specific client profile.",
  },
  {
    question: "What information should we send in a brief?",
    answer: "Send travel dates, city preferences, traveler type, group size, budget level, hotel expectations, pace, meal needs, mobility notes, must-have experiences, and whether you need white-label support or just ground pricing.",
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
      <section className="px-6 lg:px-10" style={{ paddingBottom: "clamp(72px, 8vw, 118px)", paddingTop: "clamp(92px, 8vw, 132px)" }}>
        <div className="mono-wrap grid grid-cols-1 gap-10 lg:grid-cols-[0.92fr_0.8fr] lg:items-stretch">
          <FadeSection className="flex flex-col justify-between">
            <div>
              <p className="b2b-eyebrow">China ground services for travel brands</p>
              <h1 style={{ color: "var(--brand-black)", fontSize: "clamp(3rem, 7vw, 7rem)", fontWeight: 560, letterSpacing: 0, lineHeight: 0.9, margin: 0, maxWidth: 980 }}>
                Services built for professional sellers of China.
              </h1>
              <p className="b2b-lede" style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.22rem)", marginTop: 28, maxWidth: 760 }}>
                China Prime DMC designs, quotes, and operates China programs for travel advisors, tour operators, DMC partners, corporate travel teams, education groups, and specialist-interest planners.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="mono-button">Send a brief <ArrowRight size={17} /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mono-button mono-button-secondary">Start conversation</a>
            </div>
          </FadeSection>

          <FadeSection delay={100}>
            <figure className="h-full border border-[var(--brand-black)] bg-white">
              <img src={serviceImages.hero} alt="China Prime DMC discussing B2B China ground services with travel trade buyers." className="h-[440px] w-full object-cover lg:h-full" />
            </figure>
          </FadeSection>
        </div>

        <div className="mono-wrap mt-10 grid grid-cols-2 gap-px bg-[var(--brand-border)] md:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="bg-white p-5 sm:p-7">
              <div className="text-3xl font-semibold text-[var(--brand-black)] md:text-5xl">{item.value}</div>
              <div className="mono-index mt-3">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Who we serve</p>
            <h2 className="b2b-heading" style={{ color: "var(--brand-white)" }}>A China operating desk for different trade models.</h2>
            <p className="b2b-lede" style={{ color: "var(--brand-gray-300)" }}>
              A tour operator, a luxury advisor, a corporate planner, and another DMC do not need the same kind of China support. We adapt the service model to how your business sells.
            </p>
          </FadeSection>
          <div className="grid grid-cols-1 gap-px bg-[var(--brand-gray-800)] md:grid-cols-2">
            {audiences.map((item, index) => (
              <FadeSection key={item.title} delay={index * 70}>
                <article className="h-full bg-[var(--brand-black)] p-7 sm:p-8">
                  <div className="mono-index mb-10 text-[var(--brand-gray-500)]">Partner model</div>
                  <h3 className="b2b-card-title" style={{ color: "var(--brand-white)" }}>{item.title}</h3>
                  <p className="b2b-body" style={{ color: "var(--brand-gray-300)" }}>{item.body}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2">
            {coreServices.map((service, index) => (
              <FadeSection key={service.title} delay={index * 35}>
                <article className="h-full bg-white p-7 sm:p-8">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center border border-[var(--brand-border)] text-[var(--brand-black)]">
                    {service.icon}
                  </div>
                  <h3 className="b2b-card-title">{service.title}</h3>
                  <p className="b2b-body">{service.body}</p>
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
              <img src={serviceImages.materials} alt="China Prime DMC white-label itinerary support materials for travel trade partners." className="h-[520px] w-full object-cover" />
              <figcaption className="border-t border-[var(--brand-border)] p-5 text-sm text-[var(--brand-gray-600)]">
                Trade-ready materials matter because overseas partners need China programs they can explain quickly.
              </figcaption>
            </figure>
          </FadeSection>
          <FadeSection delay={100} className="self-center">
            <p className="b2b-eyebrow">White-label support</p>
            <h2 className="b2b-heading">Your brand stays in front. We operate behind it.</h2>
            <p className="b2b-lede">
              Many partners do not need another public-facing travel brand. They need a China team that can make their own promise operational. We can support white-label proposals, net rates, itinerary language, supplier logic, and China-side delivery without competing for your client relationship.
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

      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 gap-10 lg:grid-cols-3">
          <FadeSection className="lg:col-span-1">
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Operating coverage</p>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">China is not one operating environment.</h2>
            <p className="b2b-lede" style={{ color: "var(--brand-gray-300)" }}>
              Beijing, Shanghai, Xi'an, Guilin, Yunnan, Chengdu, Zhangjiajie, Tibet, Xinjiang, and the Silk Road all require different supplier logic, timing, and risk management.
            </p>
          </FadeSection>
          {[
            { src: serviceImages.shanghai, alt: "Shanghai skyline for China business travel and ground operations.", title: "Urban and business travel", icon: <Building2 size={18} /> },
            { src: serviceImages.greatWall, alt: "Great Wall of China itinerary design for travel partners.", title: "Classic China routing", icon: <Landmark size={18} /> },
          ].map((item, index) => (
            <FadeSection key={item.title} delay={(index + 1) * 90}>
              <figure className="h-full bg-[var(--brand-black)]">
                <img src={item.src} alt={item.alt} className="h-80 w-full object-cover md:h-[460px]" />
                <figcaption className="flex items-center gap-3 border border-[var(--brand-gray-800)] border-t-0 p-5 text-sm font-semibold text-[var(--brand-gray-200)]">
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
              <img src={serviceImages.forbiddenCity} alt="Forbidden City Beijing private China tour service for travel advisors." className="h-80 w-full object-cover" />
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
              <img src={serviceImages.mice} alt="Shanghai skyline representing China MICE and incentive travel operations." className="h-[420px] w-full object-cover" />
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
              <img src={serviceImages.tradeShow} alt="China Prime DMC at ICGTE Singapore travel trade show." className="h-[460px] w-full object-cover" />
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

      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 items-end gap-10 md:grid-cols-[1fr_auto]">
          <FadeSection>
            <BadgeCheck size={28} className="mb-8 text-[var(--brand-gray-400)]" />
            <h2 className="b2b-heading" style={{ color: "var(--brand-white)", maxWidth: 940 }}>
              Send the brief. We will tell you what works in China.
            </h2>
            <p className="b2b-lede" style={{ color: "var(--brand-gray-300)" }}>
              Share your dates, traveler profile, cities, budget level, and service expectations. We will help turn the idea into a China program your team can sell and we can operate.
            </p>
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
