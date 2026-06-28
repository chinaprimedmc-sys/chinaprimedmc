import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Clock, Mail, MapPin, Maximize2, MessageCircle, Minus, Users, X } from "lucide-react";
import { EMAIL, WHATSAPP_URL } from "@/lib/data";
import { journeys, type ProgramImage, type Journey } from "@/lib/programData";

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
        transition: `opacity 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <FadeSection className="mb-10">
      <p className="b2b-eyebrow">{eyebrow}</p>
      <h2 className="b2b-heading max-w-4xl">{title}</h2>
      {body && <p className="b2b-lede mt-5 max-w-3xl">{body}</p>}
    </FadeSection>
  );
}

function BulletList({ items, icon = "check" }: { items: string[]; icon?: "check" | "minus" }) {
  const Icon = icon === "check" ? Check : Minus;
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item} className="flex gap-3 text-sm leading-6 text-[var(--brand-gray-700)]">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center border border-[var(--brand-border)]">
            <Icon size={12} />
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function buildInquiryLinks(journey: Journey) {
  const subject = `Net rate request: ${journey.title}`;
  const body = [
    `Hello China Prime DMC,`,
    ``,
    `I would like to request B2B net rates and operating details for:`,
    `${journey.title}`,
    ``,
    `Route: ${journey.route}`,
    `Duration: ${journey.duration}`,
    `Travel window:`,
    `Group size:`,
    `Hotel level:`,
    `Client market:`,
    `Special requirements:`,
    ``,
    `Please send availability, suggested pacing, inclusions, exclusions, and any operational notes we should know before quoting.`,
  ].join("\n");

  return {
    mailto: `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    whatsapp: `${WHATSAPP_URL}?text=${encodeURIComponent(body)}`,
  };
}

function ImageLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: {
  images: ProgramImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const isOpen = activeIndex !== null;
  const image = isOpen ? images[activeIndex] : undefined;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onNavigate((activeIndex - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") onNavigate((activeIndex + 1) % images.length);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length, isOpen, onClose, onNavigate]);

  if (!isOpen || !image) return null;

  const previousIndex = (activeIndex - 1 + images.length) % images.length;
  const nextIndex = (activeIndex + 1) % images.length;

  return (
    <div className="fixed inset-0 z-[90] bg-black text-white">
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-black/72 px-4 py-3 backdrop-blur md:px-7">
        <div className="min-w-0">
          <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-gray-400)]">
            {String(activeIndex + 1).padStart(2, "0")} / {images.length}
          </div>
          <div className="truncate text-sm font-semibold text-white md:text-base">{image.topic}</div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 bg-white text-[var(--brand-black)] transition-colors hover:bg-[var(--brand-gray-200)]"
          aria-label="Close image preview"
        >
          <X size={18} />
        </button>
      </div>

      <button
        type="button"
        onClick={() => onNavigate(previousIndex)}
        className="absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/55 text-white backdrop-blur transition-colors hover:bg-white hover:text-[var(--brand-black)] md:flex"
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={() => onNavigate(nextIndex)}
        className="absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/55 text-white backdrop-blur transition-colors hover:bg-white hover:text-[var(--brand-black)] md:flex"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>

      <div className="flex h-full touch-pan-y items-center justify-center px-3 pb-32 pt-20 md:px-20 md:pb-32 md:pt-24">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-full max-w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/82 p-4 backdrop-blur md:p-7">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 className="text-xl font-semibold leading-tight text-white md:text-4xl">{image.topic}</h3>
            <p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-6 text-[var(--brand-gray-300)] md:line-clamp-none md:text-base md:leading-7">{image.caption}</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/20 md:w-36">
            <button
              type="button"
              onClick={() => onNavigate(previousIndex)}
              className="flex h-11 items-center justify-center bg-white text-[var(--brand-black)]"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate(nextIndex)}
              className="flex h-11 items-center justify-center bg-white text-[var(--brand-black)]"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CinematicGallery({
  images,
  onOpen,
}: {
  images: ProgramImage[];
  onOpen: (index: number) => void;
}) {
  return (
    <div className="-mx-6 flex snap-x gap-3 overflow-x-auto px-6 pb-3 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-6 md:gap-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
      {images.map((image, index) => (
        <FadeSection
          key={image.src}
          delay={index * 45}
          className={[
            "min-w-[82vw] snap-center md:min-w-0",
            index === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2",
            index === 3 ? "md:col-span-3" : "",
            index === 4 ? "md:col-span-3" : "",
          ].join(" ")}
        >
          <button
            type="button"
            onClick={() => onOpen(index)}
            className="group relative block h-full w-full overflow-hidden bg-[var(--brand-gray-900)] text-left text-white"
            aria-label={`Open ${image.topic} image`}
          >
            <div className={index === 0 ? "aspect-[4/5] md:aspect-[16/11]" : "aspect-[4/5] md:aspect-[16/10]"}>
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-contain transition-transform duration-1000 group-hover:scale-[1.035] md:object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/8 to-black/10 md:from-black/82 md:via-black/10 md:to-transparent" />
            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/25 bg-black/45 text-white backdrop-blur transition-colors group-hover:bg-white group-hover:text-[var(--brand-black)]">
              <Maximize2 size={16} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--brand-gray-300)]">
                {String(index + 1).padStart(2, "0")} / {images.length}
              </div>
              <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">{image.topic}</h3>
              <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-6 text-[var(--brand-gray-200)] md:line-clamp-none">
                {image.caption}
              </p>
            </div>
          </button>
        </FadeSection>
      ))}
    </div>
  );
}

function StickyInquiryBar({ journey }: { journey: Journey }) {
  const inquiryLinks = buildInquiryLinks(journey);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--brand-border)] bg-white/94 px-3 py-3 shadow-[0_-12px_34px_rgba(0,0,0,0.14)] backdrop-blur md:hidden">
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2">
        <Link
          href="/journeys"
          className="min-w-0 border border-[var(--brand-border)] bg-white px-3 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-black)] no-underline"
        >
          Programs
        </Link>
        <a
          href={inquiryLinks.mailto}
          className="flex h-12 w-12 items-center justify-center bg-[var(--brand-black)] text-white"
          aria-label="Request quote by email"
        >
          <Mail size={17} />
        </a>
        <a
          href={inquiryLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center border border-[var(--brand-black)] bg-white text-[var(--brand-black)]"
          aria-label="Request quote on WhatsApp"
        >
          <MessageCircle size={17} />
        </a>
      </div>
    </div>
  );
}

export default function JourneyDetail() {
  const params = useParams<{ id: string }>();
  const journey = journeys.find((item) => item.id === params.id);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  if (!journey) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 pt-[72px]">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[var(--brand-black)]">Program not found</h1>
          <Link href="/journeys" className="mono-button mt-8">
            <ArrowLeft size={16} /> Back to programs
          </Link>
        </div>
      </main>
    );
  }

  const galleryImages = journey.gallery.filter((image) => image.src !== journey.image);
  const ctaImage = galleryImages.length > 1 ? galleryImages[galleryImages.length - 1] : undefined;
  const cinematicGallery = ctaImage ? galleryImages.slice(0, -1) : galleryImages.length > 0 ? galleryImages : journey.gallery;
  const inquiryLinks = buildInquiryLinks(journey);

  return (
    <main className="pb-24 md:pb-0" style={{ backgroundColor: "var(--brand-white)", color: "var(--brand-black)", paddingTop: "72px" }}>
      <section className="relative min-h-[82vh] overflow-hidden bg-[var(--brand-black)]">
        <img src={journey.image} alt={journey.gallery[0]?.alt || journey.title} className="absolute inset-0 h-full w-full object-cover object-top opacity-75 md:object-center" loading="eager" decoding="async" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="relative flex min-h-[82vh] items-end px-6 pb-12 lg:px-10 lg:pb-16">
          <div className="mono-wrap w-full">
            <Link href="/journeys" className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white no-underline">
              <ArrowLeft size={14} /> All programs
            </Link>
            <div className="max-w-6xl">
              <div className="mb-5 flex flex-wrap gap-2">
                {[journey.duration, journey.pace, journey.physicalLevel, journey.pricingNote].map((item) => (
                  <span key={item} className="border border-white/30 bg-black/35 px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white backdrop-blur">
                    {item}
                  </span>
                ))}
              </div>
              <h1 className="text-[clamp(2.4rem,7vw,6rem)] font-semibold leading-[0.95] text-white">{journey.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--brand-gray-100)] md:text-xl">{journey.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--brand-border)] bg-white px-6 py-7 lg:px-10">
        <div className="mono-wrap grid gap-px bg-[var(--brand-border)] md:grid-cols-4">
          {[
            { icon: Clock, label: "Duration", value: journey.duration },
            { icon: MapPin, label: "Route", value: journey.route },
            { icon: Users, label: "Best for", value: journey.bestFor.slice(0, 2).join(" / ") },
            { icon: Check, label: "Season", value: journey.bestTime },
          ].map((item) => (
            <div key={item.label} className="bg-white p-5">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center border border-[var(--brand-border)]">
                <item.icon size={15} />
              </div>
              <div className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-500)]">{item.label}</div>
              <div className="text-sm font-semibold leading-6 text-[var(--brand-black)]">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1fr]">
          <FadeSection>
            <p className="b2b-eyebrow">B2B snapshot</p>
            <h2 className="b2b-heading">What this program is built to sell.</h2>
          </FadeSection>
          <FadeSection delay={100}>
            <p className="b2b-lede mt-0">{journey.overview}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[...journey.themes, ...journey.travelerTypes].map((tag) => (
                <span key={tag} className="border border-[var(--brand-border)] px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-gray-700)]">
                  {tag}
                </span>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <SectionTitle eyebrow="Why it sells" title="Clear trade value, not generic travel copy." body={journey.routeSummary} />
          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-3">
            {journey.whyItSells.map((item, index) => (
              <FadeSection key={item} delay={index * 70} className="bg-white p-7">
                <div className="mb-8 inline-block bg-[var(--brand-black)] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white">0{index + 1}</div>
                <p className="text-base leading-7 text-[var(--brand-gray-700)]">{item}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section overflow-hidden bg-[var(--brand-black)] text-white">
        <div className="mono-wrap">
          <FadeSection className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.52fr_1fr] lg:items-end">
            <div>
              <p className="b2b-eyebrow text-[var(--brand-gray-400)]">Cinematic gallery</p>
              <h2 className="b2b-heading max-w-4xl text-white">Landmark images that help buyers feel the route.</h2>
            </div>
            <p className="b2b-lede mt-0 text-[var(--brand-gray-300)]">
              A route should be easy to picture before it is quoted. These large-format visuals give partners a stronger sense of scale, atmosphere, and sales value without adding extra initial-load weight.
            </p>
          </FadeSection>

          <CinematicGallery images={cinematicGallery} onOpen={setActiveImageIndex} />
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <SectionTitle eyebrow="Day by day" title="A flexible operating framework." />
          <div className="grid gap-px bg-[var(--brand-border)]">
            {journey.days.map((day, index) => (
              <FadeSection key={`${day.day}-${day.title}`} delay={(index % 8) * 35}>
                <div className="grid gap-6 bg-white p-6 md:grid-cols-[180px_1fr] md:p-8">
                  <div>
                    <div className="mono-index">{day.day}</div>
                    <h3 className="mt-3 text-xl font-semibold leading-tight text-[var(--brand-black)]">{day.title}</h3>
                  </div>
                  <p className="m-0 text-base leading-8 text-[var(--brand-gray-700)]">{day.description}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-white">
        <div className="mono-wrap grid grid-cols-1 gap-px bg-[var(--brand-border)] lg:grid-cols-2">
          <div className="bg-white p-7 md:p-9">
            <h2 className="mb-8 text-3xl font-semibold text-[var(--brand-black)]">Included</h2>
            <BulletList items={journey.included} />
          </div>
          <div className="bg-white p-7 md:p-9">
            <h2 className="mb-8 text-3xl font-semibold text-[var(--brand-black)]">Not included</h2>
            <BulletList items={journey.notIncluded} icon="minus" />
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <SectionTitle eyebrow="Operations" title="The details your sales and operations team need before quoting." />
          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2">
            {[
              ["Hotel level", journey.hotelLevel.join(" / ")],
              ["Meal support", journey.mealSupport],
              ["Transport", journey.transport],
              ["Guide language", journey.guideLanguage],
              ["Customization", journey.customization.join(" / ")],
              ["Operational notes", journey.operationalNotes.join(" / ")],
            ].map(([label, value]) => (
              <FadeSection key={label} className="bg-white p-7">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-500)]">{label}</div>
                <p className="m-0 text-base leading-8 text-[var(--brand-gray-700)]">{value}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-white">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1fr]">
          <SectionTitle eyebrow="FAQ" title="Trade-facing questions." />
          <div className="grid gap-px bg-[var(--brand-border)]">
            {journey.faqs.map((faq) => (
              <FadeSection key={faq.q} className="bg-white p-7">
                <h3 className="mb-3 text-lg font-semibold leading-tight text-[var(--brand-black)]">{faq.q}</h3>
                <p className="m-0 text-base leading-7 text-[var(--brand-gray-700)]">{faq.a}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section relative isolate overflow-hidden bg-[var(--brand-black)] text-white">
        <img
          src={ctaImage?.src || journey.image}
          alt={ctaImage?.alt || journey.title}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-68"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.60)_48%,rgba(0,0,0,0.24)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.74)_0%,rgba(0,0,0,0.10)_58%,rgba(0,0,0,0.42)_100%)]" />
        <div className="mono-wrap grid grid-cols-1 items-end gap-10 md:grid-cols-[1fr_auto]">
          <FadeSection>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Request net rate</p>
            <h2 className="b2b-heading max-w-4xl" style={{ color: "var(--brand-white)" }}>
              Quote this route with your travel window, group size, hotel level, and special requirements.
            </h2>
          </FadeSection>
          <FadeSection delay={100}>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
                Send brief <ArrowRight size={17} />
              </Link>
              <a href={inquiryLinks.mailto} className="mono-button mono-button-secondary border-[var(--brand-gray-700)] text-white">
                Email quote
              </a>
              <a href={inquiryLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="mono-button mono-button-secondary border-[var(--brand-gray-700)] text-white">
                WhatsApp
              </a>
            </div>
          </FadeSection>
        </div>
      </section>
      <ImageLightbox
        images={cinematicGallery}
        activeIndex={activeImageIndex}
        onClose={() => setActiveImageIndex(null)}
        onNavigate={setActiveImageIndex}
      />
      <StickyInquiryBar journey={journey} />
    </main>
  );
}
