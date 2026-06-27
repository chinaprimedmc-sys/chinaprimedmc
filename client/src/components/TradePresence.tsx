import type { ReactNode } from "react";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "wouter";
import { tradeShows } from "@/lib/tradePresence";

type TradePresenceProps = {
  variant?: "home" | "about";
};

function HighlightMarker({ children }: { children: ReactNode }) {
  return (
    <strong className="inline bg-[var(--brand-black)] px-1.5 py-0.5 font-semibold text-white">
      {children}
    </strong>
  );
}

export default function TradePresence({ variant = "home" }: TradePresenceProps) {
  const visibleShows = variant === "home" ? tradeShows.slice(0, 2) : tradeShows;

  return (
    <section className={variant === "home" ? "mono-section bg-[var(--brand-white)]" : "mono-section bg-[var(--brand-gray-50)]"}>
      <div className="mono-wrap">
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_0.75fr] lg:items-end">
          <div>
            <p className="b2b-eyebrow">Trade presence</p>
            <h2 className="text-[clamp(2.25rem,10vw,5.4rem)] font-semibold leading-[0.98] text-[var(--brand-black)] md:text-[clamp(3rem,5vw,5.4rem)]">
              A growing archive of real partner conversations.
            </h2>
          </div>
          <p className="b2b-lede" style={{ marginTop: 0 }}>
            We meet travel partners <HighlightMarker>face to face</HighlightMarker>, listen to what their clients need, and turn those conversations into <HighlightMarker>operable China programs</HighlightMarker>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] lg:grid-cols-2">
          {visibleShows.map((show) => {
            const primary = show.images.find((image) => image.role === "primary") ?? show.images[0];

            return (
              <Link
                key={show.id}
                href={`/trade-shows/${show.id}`}
                className="group grid bg-white text-[var(--brand-black)] no-underline transition-colors hover:bg-[var(--brand-gray-50)]"
                aria-label={`View details from ${show.shortName} in ${show.city}`}
              >
                <article>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--brand-gray-100)]">
                    <img
                      src={primary.src}
                      alt={primary.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute left-4 top-4 bg-[var(--brand-black)] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white">
                      {show.shortName}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="mb-5 flex flex-wrap gap-3">
                      <span className="mono-index inline-flex items-center gap-2 border border-[var(--brand-border)] px-3 py-2">
                        <CalendarDays size={14} /> {show.date}
                      </span>
                      <span className="mono-index inline-flex items-center gap-2 border border-[var(--brand-border)] px-3 py-2">
                        <MapPin size={14} /> {show.city}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold leading-tight text-[var(--brand-black)] md:text-3xl">
                      {show.headline}
                    </h3>
                    <p className="b2b-body mt-4">{show.cardIntro}</p>

                    <div className="mt-8 inline-flex items-center gap-3 border-b border-[var(--brand-black)] pb-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-black)]">
                      View event details <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="b2b-body max-w-2xl">
            These meetings give our team current buyer insight before we design, quote, and operate China programs for overseas partners.
          </p>
          {variant === "home" && (
            <Link href="/trade-shows" className="mono-button mono-button-secondary">
              View all trade shows <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
