import type { ReactNode } from "react";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { tradeShows } from "@/lib/tradePresence";

type TradePresenceProps = {
  variant?: "home" | "about";
};

function Highlight({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-[var(--brand-black)]">{children}</strong>;
}

export default function TradePresence({ variant = "home" }: TradePresenceProps) {
  const featured = tradeShows[0];
  const primary = featured.images.find((image) => image.role === "primary") ?? featured.images[0];
  const supporting = featured.images.filter((image) => image.role === "supporting").slice(0, 2);
  const gallery = featured.images.filter((image) => image.role === "gallery");
  const showFullGallery = variant === "about";

  return (
    <section
      className={variant === "home" ? "mono-section bg-[var(--brand-white)]" : "mono-section bg-[var(--brand-gray-50)]"}
      aria-labelledby={`${featured.id}-heading`}
      itemScope
      itemType="https://schema.org/Event"
    >
      <meta itemProp="name" content={`${featured.shortName} - ${featured.name}`} />
      <meta itemProp="startDate" content="2026-04-21" />
      <meta itemProp="eventAttendanceMode" content="https://schema.org/OfflineEventAttendanceMode" />
      <meta itemProp="eventStatus" content="https://schema.org/EventScheduled" />
      <div itemProp="location" itemScope itemType="https://schema.org/Place">
        <meta itemProp="name" content={`${featured.city}, ${featured.country}`} />
      </div>

      <div className="mono-wrap">
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.92fr_0.78fr] lg:items-end">
          <div>
            <p className="b2b-eyebrow">Trade presence</p>
            <h2
              id={`${featured.id}-heading`}
              className="text-[clamp(2.25rem,10vw,5.4rem)] font-semibold leading-[0.98] text-[var(--brand-black)] md:text-[clamp(3rem,5vw,5.4rem)]"
              style={{ maxWidth: 900 }}
            >
              Proof that we show up where partners do business.
            </h2>
          </div>
          <p className="b2b-lede" style={{ marginTop: 0 }}>
            We do not build China programs from behind a screen alone. We meet partners <Highlight>face to face</Highlight>, listen to what their clients need, and turn those conversations into <Highlight>operable China itineraries</Highlight> for travel brands.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-px bg-[var(--brand-border)] lg:grid-cols-[1.08fr_0.92fr]">
          <figure className="bg-white">
            <img
              src={primary.src}
              alt={primary.alt}
              className="h-full min-h-[420px] w-full object-cover"
              loading="lazy"
              itemProp="image"
            />
            <figcaption className="border-t border-[var(--brand-border)] p-5 text-sm text-[var(--brand-gray-600)]">
              {primary.caption}
            </figcaption>
          </figure>

          <div className="grid min-w-0 bg-white">
            <article className="p-7 sm:p-9">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="mono-index inline-flex items-center gap-2 border border-[var(--brand-border)] px-3 py-2">
                  <CalendarDays size={14} /> {featured.date}
                </span>
                <span className="mono-index inline-flex items-center gap-2 border border-[var(--brand-border)] px-3 py-2">
                  <MapPin size={14} /> {featured.city}, {featured.country}
                </span>
              </div>

              <p className="mono-index mb-4">{featured.shortName}</p>
              <h3 className="text-3xl font-semibold leading-tight text-[var(--brand-black)] md:text-4xl">
                {featured.headline}
              </h3>
              <p className="b2b-body mt-5" itemProp="description">
                {featured.summary}
              </p>

              <div className="mt-8 grid gap-px bg-[var(--brand-border)]">
                {featured.proofPoints.map((point) => (
                  <div key={point.title} className="bg-white p-4 text-sm leading-6 text-[var(--brand-gray-700)]">
                    <strong className="font-semibold text-[var(--brand-black)]">{point.title}</strong> {point.body}
                  </div>
                ))}
              </div>
            </article>

            <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] sm:grid-cols-2">
              {supporting.map((image) => (
                <figure key={image.src} className="bg-white">
                  <img src={image.src} alt={image.alt} className="h-56 w-full object-cover" loading="lazy" />
                  <figcaption className="p-4 text-xs font-semibold leading-5 text-[var(--brand-gray-600)]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {showFullGallery && (
          <div className="mt-12">
            <div className="mb-6 flex items-center justify-between gap-6">
              <div>
                <p className="b2b-eyebrow" style={{ marginBottom: 8 }}>Event gallery</p>
                <h3 className="text-2xl font-semibold text-[var(--brand-black)]">More from {featured.shortName}</h3>
              </div>
              <span className="mono-index hidden items-center gap-2 md:inline-flex">
                More trade shows coming next <ArrowRight size={14} />
              </span>
            </div>
            <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-3">
              {gallery.map((image) => (
                <figure key={image.src} className="bg-white">
                  <img src={image.src} alt={image.alt} className="h-72 w-full object-cover" loading="lazy" />
                  <figcaption className="p-4 text-sm leading-6 text-[var(--brand-gray-600)]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {featured.seoKeywords.slice(0, variant === "home" ? 3 : featured.seoKeywords.length).map((keyword) => (
            <span key={keyword} className="mono-index border border-[var(--brand-border)] bg-white px-3 py-2">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
