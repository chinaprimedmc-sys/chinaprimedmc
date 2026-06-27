import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Check, Image as ImageIcon, MapPin, Route, Search } from "lucide-react";
import { coverageRegions, findCoverageRegion, type CoverageRegion } from "@/lib/coverageData";
import { journeys, type Journey } from "@/lib/programData";

type VisualImage = { src: string; alt: string; caption?: string; topic?: string };

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
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const cityToRegion: Record<string, string> = {
  beijing: "north-china",
  shanghai: "east-china",
  suzhou: "east-china",
  hangzhou: "east-china",
  guilin: "south-china",
  "hong-kong": "south-china",
  chengdu: "southwest-china",
  yunnan: "southwest-china",
  sichuan: "southwest-china",
  xian: "northwest-china",
  henan: "central-china",
  tibet: "western-china",
};

function resolveRegion(id?: string) {
  return findCoverageRegion(id) || findCoverageRegion(id ? cityToRegion[id] : undefined);
}

const relatedAliases: Record<string, string[]> = {
  "Gubei Water Town and Simatai": ["Gubei", "Simatai", "Great Wall", "Beijing"],
  Datong: ["Datong", "Shanxi"],
  Pingyao: ["Pingyao", "Shanxi"],
  Chengde: ["Chengde", "Beijing"],
  "Inner Mongolia": ["Inner Mongolia", "Hohhot", "Hulunbuir", "Arxan"],
  "Hong Kong and Macau": ["Hong Kong", "Macau", "Guangzhou", "Shenzhen"],
  "Longji Rice Terraces": ["Longji", "Guilin", "Yangshuo"],
  "Jiuzhaigou and Western Sichuan": ["Jiuzhaigou", "Western Sichuan", "Sichuan", "Chengdu", "Huanglong", "Mount Siguniang"],
  Dunhuang: ["Dunhuang", "Mogao", "Gansu", "Silk Road"],
  Zhangye: ["Zhangye", "Gansu", "Silk Road"],
  Jiayuguan: ["Jiayuguan", "Gansu", "Silk Road"],
  Ningxia: ["Ningxia", "Yinchuan", "Zhongwei", "Shapotou"],
  Xinjiang: ["Xinjiang", "Urumqi", "Kashgar", "Turpan", "Silk Road"],
  "Longmen Grottoes": ["Longmen", "Luoyang", "Henan"],
  "Shaolin and Dengfeng": ["Shaolin", "Dengfeng", "Henan", "Luoyang"],
  Kaifeng: ["Kaifeng", "Henan", "Luoyang"],
  "Changsha and Fenghuang": ["Changsha", "Fenghuang", "Zhangjiajie", "Hunan"],
  Nyingchi: ["Nyingchi", "Tibet", "Lhasa"],
  "Shigatse and Everest routes": ["Shigatse", "Everest", "Tibet", "Lhasa"],
  Qinghai: ["Qinghai", "Xining", "Tibet", "Silk Road"],
  "Western Sichuan": ["Western Sichuan", "Sichuan", "Chengdu", "Mount Siguniang", "Jiuzhaigou"],
  "Highland Yunnan": ["Yunnan", "Shangri-La", "Dali", "Lijiang", "Meili"],
};

function relatedJourneysForCity(cityName: string): Journey[] {
  const aliases = [cityName, ...(relatedAliases[cityName] || [])].map((item) => item.toLowerCase());
  return journeys
    .map((journey) => {
      const haystack = [
        journey.title,
        journey.subtitle,
        journey.route,
        journey.routeSummary,
        ...journey.destinations,
        ...journey.themes,
        ...journey.highlights,
      ].join(" ").toLowerCase();
      const score = aliases.reduce((sum, alias) => sum + (haystack.includes(alias) ? 1 : 0), 0);
      return { journey, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || b.journey.durationDays - a.journey.durationDays)
    .slice(0, 3)
    .map((item) => item.journey);
}

function relatedJourneyImage(journey: Journey, seed: number) {
  const gallery = journey.gallery.length > 0 ? journey.gallery : [{ src: journey.image, alt: journey.title }];
  const image = gallery[seed % gallery.length];
  return {
    src: image.src,
    alt: image.alt || journey.title,
  };
}

function rotateImages(images: VisualImage[], seed: number) {
  if (images.length === 0) return images;
  const offset = seed % images.length;
  return [...images.slice(offset), ...images.slice(0, offset)];
}

function uniqueImages(images: VisualImage[]) {
  const seen = new Set<string>();
  return images.filter((image) => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}

function journeyVisuals(journey: Journey): VisualImage[] {
  return uniqueImages([
    ...journey.gallery.map((image) => ({
      src: image.src,
      alt: image.alt || journey.title,
      caption: image.caption,
      topic: image.topic,
    })),
    { src: journey.image, alt: journey.title },
  ]);
}

function regionVisualPool(region: CoverageRegion): VisualImage[] {
  const relatedJourneyImages = region.cities
    .flatMap((city) => relatedJourneysForCity(city.name))
    .flatMap((journey) => journeyVisuals(journey));

  return uniqueImages([
    ...region.gallery,
    ...relatedJourneyImages,
    { src: region.heroImage, alt: region.name, caption: region.summary },
  ]);
}

function createImageAllocator(initialUsed: string[] = []) {
  const used = new Set(initialUsed.filter(Boolean));

  function reserve(candidates: VisualImage[]) {
    const uniqueCandidates = uniqueImages(candidates);
    const image = uniqueCandidates.find((item) => !used.has(item.src));
    if (image) used.add(image.src);
    return image;
  }

  function reserveMany(candidates: VisualImage[], count: number) {
    const selected: VisualImage[] = [];
    for (const image of uniqueImages(candidates)) {
      if (selected.length >= count) break;
      if (used.has(image.src)) continue;
      used.add(image.src);
      selected.push(image);
    }
    return selected;
  }

  return { reserve, reserveMany };
}

function RegionHero({ region, stripImages }: { region: CoverageRegion; stripImages: VisualImage[] }) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--brand-black)] text-white">
      <img
        src={region.heroImage}
        alt={region.name}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.66)_48%,rgba(0,0,0,0.30)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.10)_54%,rgba(0,0,0,0.38)_100%)]" />

      <div className="mono-wrap grid min-h-[calc(100svh-72px)] grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[0.92fr_0.72fr] lg:items-end lg:px-10 lg:py-16">
        <FadeSection className="pb-4">
          <Link href="/destinations" className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-400)] no-underline hover:text-white">
            <ArrowLeft size={14} /> All coverage
          </Link>
          <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>{region.eyebrow}</p>
          <h1 className="text-[clamp(2.9rem,8vw,6.6rem)] font-semibold leading-[0.93] text-white">
            {region.name}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--brand-gray-300)] md:text-xl md:leading-9">
            {region.headline}
          </p>
        </FadeSection>

        <FadeSection delay={120}>
          <div className="grid gap-px bg-white/20 backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-px">
              {stripImages.map((image) => (
                <figure key={image.src} className="bg-[var(--brand-black)]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                </figure>
              ))}
            </div>
            <div className="bg-black/62 p-5 text-sm leading-7 text-[var(--brand-gray-200)]">
              Regional coverage includes gateway cities, secondary cultural stops, route modules, supplier logic, and related programs for B2B resale.
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}

function StatStrip({ region }: { region: CoverageRegion }) {
  const stats = [
    { label: "Best for", value: region.bestFor.slice(0, 2).join(" / ") },
    { label: "Season", value: region.season },
    { label: "Operating style", value: region.operatingStyle },
  ];

  return (
    <section className="border-y border-[var(--brand-border)] bg-white">
      <div className="mono-wrap grid grid-cols-1 gap-px bg-[var(--brand-border)] lg:grid-cols-3">
        {stats.map((stat, index) => (
          <FadeSection key={stat.label} delay={index * 60}>
            <div className="min-h-full bg-white p-6 md:p-8">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-gray-400)]">{stat.label}</div>
              <p className="text-base font-semibold leading-7 text-[var(--brand-black)]">{stat.value}</p>
            </div>
          </FadeSection>
        ))}
      </div>
    </section>
  );
}

export default function DestinationDetail() {
  const params = useParams<{ id: string }>();
  const region = resolveRegion(params.id);

  if (!region) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 pt-[72px]">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-semibold text-[var(--brand-black)]">Coverage page not found</h1>
          <p className="mt-4 text-base leading-7 text-[var(--brand-gray-600)]">
            This destination page has moved into our regional China coverage system.
          </p>
          <Link href="/destinations" className="mono-button mt-8">
            Back to China coverage
          </Link>
        </div>
      </main>
    );
  }

  const visualPool = regionVisualPool(region);
  const imageAllocator = createImageAllocator([region.heroImage]);
  const heroStripImages = imageAllocator.reserveMany(region.gallery, 3);
  const buyerContextImage = imageAllocator.reserve([...region.gallery.slice(3), ...visualPool]);
  const seoImage = imageAllocator.reserve([...region.gallery.slice(4), ...visualPool]);
  const relatedJourneysByCity = new Map<string, Journey[]>();
  const relatedJourneyImages = new Map<string, VisualImage>();

  region.cities.forEach((city, cityIndex) => {
    const relatedJourneys = relatedJourneysForCity(city.name);
    relatedJourneysByCity.set(city.name, relatedJourneys);
    relatedJourneys.forEach((journey, journeyIndex) => {
      const key = `${city.name}-${journey.id}`;
      const image =
        imageAllocator.reserve(rotateImages(journeyVisuals(journey), cityIndex + journeyIndex + 1)) ||
        imageAllocator.reserve(rotateImages(visualPool, cityIndex + journeyIndex + 1)) ||
        relatedJourneyImage(journey, cityIndex + journeyIndex + 1);
      relatedJourneyImages.set(key, image);
    });
  });

  const galleryImages = imageAllocator.reserveMany(visualPool, 9);

  return (
    <main className="mono-shell" style={{ color: "var(--brand-text)", paddingTop: "72px" }}>
      <RegionHero region={region} stripImages={heroStripImages} />
      <StatStrip region={region} />

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.38fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Regional guide</p>
            <h2 className="b2b-heading">What this region means for B2B China product planning.</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {region.bestFor.map((tag) => (
                <span key={tag} className="border border-[var(--brand-border)] px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--brand-gray-600)]">
                  {tag}
                </span>
              ))}
            </div>
          </FadeSection>

          <FadeSection delay={120}>
            <div className="grid gap-7">
              {region.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 60)} className="text-base leading-8 text-[var(--brand-gray-700)] md:text-lg md:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <FadeSection className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.5fr_1fr]">
            <div>
              <p className="b2b-eyebrow">City-by-city coverage</p>
              <h2 className="b2b-heading">Every key stop explained for foreign buyers.</h2>
            </div>
            <p className="b2b-lede mt-0">
              Each city is framed by what an overseas traveler can understand quickly, what makes it valuable in a China itinerary, and which highlights matter most when a partner is quoting the route.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] lg:grid-cols-2">
            {region.cities.map((city, index) => {
              const relatedJourneys = relatedJourneysByCity.get(city.name) || [];
              return (
              <FadeSection key={city.name} delay={(index % 6) * 45}>
                <article className="grid min-h-full bg-white p-6 md:p-8">
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <div>
                      <div className="mono-index mb-4">Destination {String(index + 1).padStart(2, "0")}</div>
                      <h3 className="text-3xl font-semibold leading-tight text-[var(--brand-black)]">{city.name}</h3>
                    </div>
                    <MapPin size={20} className="mt-1 shrink-0 text-[var(--brand-gray-500)]" />
                  </div>
                  <p className="text-base font-semibold leading-7 text-[var(--brand-black)]">{city.signature}</p>
                  <p className="mt-5 text-sm leading-7 text-[var(--brand-gray-700)]">{city.description}</p>
                  <div className="mt-7 grid gap-3 border-t border-[var(--brand-border)] pt-6">
                    {city.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 text-sm leading-6 text-[var(--brand-gray-700)]">
                        <Check size={15} className="mt-1 shrink-0 text-[var(--brand-black)]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 border-t border-[var(--brand-border)] pt-6">
                    <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--brand-gray-500)]">Related journeys</div>
                    {relatedJourneys.length > 0 ? (
                      <div className="grid gap-3">
                        {relatedJourneys.map((journey, journeyIndex) => {
                          const image = relatedJourneyImages.get(`${city.name}-${journey.id}`) || relatedJourneyImage(journey, index + journeyIndex + 1);
                          return (
                          <Link
                            key={journey.id}
                            href={`/journeys/${journey.id}`}
                            className="group grid grid-cols-[92px_1fr] overflow-hidden border border-[var(--brand-border)] text-[var(--brand-black)] no-underline transition-colors hover:border-[var(--brand-black)] hover:bg-[var(--brand-gray-50)] sm:grid-cols-[116px_1fr]"
                          >
                            <span className="relative aspect-square overflow-hidden bg-[var(--brand-gray-100)] sm:aspect-[4/3]">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                                loading="lazy"
                                decoding="async"
                              />
                              <span className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                            </span>
                            <span className="grid content-center gap-1 p-3">
                              <span className="text-sm font-semibold leading-5">{journey.title}</span>
                              <span className="text-xs leading-5 text-[var(--brand-gray-600)]">{journey.duration} · {journey.route}</span>
                            </span>
                          </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm leading-7 text-[var(--brand-gray-600)]">
                        Route can be custom-built on request for this city or regional combination.
                      </p>
                    )}
                  </div>
                </article>
              </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mono-section relative isolate overflow-hidden bg-[var(--brand-black)] text-white">
        {buyerContextImage && (
          <img
            src={buyerContextImage.src}
            alt={buyerContextImage.alt}
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.76)_46%,rgba(0,0,0,0.50)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.20)_58%,rgba(0,0,0,0.68)_100%)]" />
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.42fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Buyer context</p>
            <h2 className="b2b-heading text-[var(--brand-white)]">How global partners should sell this region.</h2>
          </FadeSection>
          <FadeSection delay={120}>
            <div className="grid gap-px bg-[var(--brand-gray-800)]">
              {region.buyerContext.map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] gap-5 bg-black/72 p-6 backdrop-blur-sm">
                  <div className="flex h-9 w-9 items-center justify-center border border-[var(--brand-gray-700)] text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-base leading-8 text-[var(--brand-gray-300)]">{item}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <FadeSection className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.5fr_1fr]">
            <div>
              <p className="b2b-eyebrow">Route design</p>
              <h2 className="b2b-heading">Sellable route modules, not isolated city lists.</h2>
            </div>
            <p className="b2b-lede mt-0">
              These examples show how the region can be packaged for different markets. They are not fixed tours; they are routing frameworks that help partners quote faster and explain the product clearly.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] lg:grid-cols-2">
            {region.routeIdeas.map((routeIdea, index) => (
              <FadeSection key={routeIdea.title} delay={index * 50}>
                <article className="min-h-full bg-white p-7 md:p-8">
                  <div className="mb-7 inline-flex h-11 w-11 items-center justify-center bg-[var(--brand-black)] text-sm font-semibold text-white">
                    <Route size={18} />
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-[var(--brand-black)]">{routeIdea.title}</h3>
                  <p className="mt-4 text-xs font-bold uppercase leading-6 tracking-[0.1em] text-[var(--brand-gray-500)]">{routeIdea.path}</p>
                  <p className="mt-5 text-sm leading-7 text-[var(--brand-gray-700)]">{routeIdea.description}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.42fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">Operations</p>
            <h2 className="b2b-heading">Details that affect delivery, not just brochure copy.</h2>
          </FadeSection>
          <FadeSection delay={120}>
            <div className="grid gap-px bg-[var(--brand-border)] md:grid-cols-2">
              {region.operatingNotes.map((note) => (
                <div key={note} className="flex gap-4 bg-white p-6">
                  <Check size={16} className="mt-1 shrink-0 text-[var(--brand-black)]" />
                  <p className="text-sm leading-7 text-[var(--brand-gray-700)]">{note}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <FadeSection className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="b2b-eyebrow">Image gallery</p>
              <h2 className="b2b-heading">More than one image, with destination-specific context.</h2>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-500)]">
              <ImageIcon size={15} /> {galleryImages.length} unique regional images
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((image, index) => (
              <FadeSection key={image.src} delay={(index % 6) * 45}>
                <figure className="min-h-full bg-white">
                  <div className="aspect-[4/3] overflow-hidden bg-[var(--brand-gray-100)]">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <figcaption className="p-5 text-sm leading-7 text-[var(--brand-gray-700)]">
                    <strong className="block text-[var(--brand-black)]">{image.alt}</strong>
                    {image.caption || `${image.topic || image.alt} - destination-specific visual reference for B2B China itinerary planning.`}
                  </figcaption>
                </figure>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section relative isolate overflow-hidden bg-[var(--brand-black)] text-white">
        {seoImage && (
          <img
            src={seoImage.src}
            alt={seoImage.alt}
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_52%,rgba(0,0,0,0.58)_100%)]" />
        <div className="mono-wrap grid grid-cols-1 items-end gap-10 md:grid-cols-[1fr_auto]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>SEO focus</p>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              {region.name} for travel advisors, tour operators, DMC partners, and MICE planners.
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {region.seoKeywords.map((keyword) => (
                <span key={keyword} className="mono-index border border-[var(--brand-gray-700)] px-3 py-2 text-[var(--brand-gray-300)]">
                  <Search size={13} /> {keyword}
                </span>
              ))}
            </div>
          </FadeSection>
          <FadeSection delay={120}>
            <Link href="/contact" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
              Request regional advice <ArrowRight size={16} />
            </Link>
          </FadeSection>
        </div>
      </section>

      <nav className="border-t border-[var(--brand-border)] bg-white">
        <div className="mono-wrap grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-3">
          {coverageRegions.filter((item) => item.id !== region.id).slice(0, 3).map((item) => (
            <Link key={item.id} href={`/destinations/${item.id}`} className="group bg-white p-6 text-[var(--brand-black)] no-underline hover:bg-[var(--brand-gray-50)]">
              <div className="mono-index mb-5">More coverage</div>
              <h3 className="text-xl font-semibold leading-tight">{item.name}</h3>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
                Open region <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
