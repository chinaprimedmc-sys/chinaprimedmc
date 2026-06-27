import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Check, Clock, MapPin, Minus, Users } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";
import { journeys } from "@/lib/programData";

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

export default function JourneyDetail() {
  const params = useParams<{ id: string }>();
  const journey = journeys.find((item) => item.id === params.id);

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

  return (
    <main style={{ backgroundColor: "var(--brand-white)", color: "var(--brand-black)", paddingTop: "72px" }}>
      <section className="relative min-h-[82vh] overflow-hidden bg-[var(--brand-black)]">
        <img src={journey.image} alt={journey.gallery[0]?.alt || journey.title} className="absolute inset-0 h-full w-full object-cover opacity-75" loading="eager" decoding="async" fetchPriority="high" />
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

          <div className="grid grid-cols-1 gap-3 md:grid-cols-6 md:gap-4">
            {cinematicGallery.map((image, index) => (
              <FadeSection
                key={image.src}
                delay={index * 45}
                className={[
                  index === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2",
                  index === 3 ? "md:col-span-3" : "",
                  index === 4 ? "md:col-span-3" : "",
                ].join(" ")}
              >
                <figure
                  className={[
                    "group relative h-full overflow-hidden bg-[var(--brand-gray-900)]",
                  ].join(" ")}
                >
                  <div className={index === 0 ? "aspect-[16/10] md:aspect-[16/11]" : "aspect-[16/10]"}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--brand-gray-300)]">
                      {String(index + 1).padStart(2, "0")} / {cinematicGallery.length}
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">{image.topic}</h3>
                    <p className="mt-2 hidden max-w-xl text-sm leading-6 text-[var(--brand-gray-200)] sm:block">
                      {image.caption}
                    </p>
                  </figcaption>
                </figure>
              </FadeSection>
            ))}
          </div>
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
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_48%,rgba(0,0,0,0.50)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.22)_58%,rgba(0,0,0,0.68)_100%)]" />
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
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mono-button mono-button-secondary border-[var(--brand-gray-700)] text-white">
                WhatsApp
              </a>
            </div>
          </FadeSection>
        </div>
      </section>
    </main>
  );
}
