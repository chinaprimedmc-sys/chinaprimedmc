import type { ReactNode } from "react";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, ExternalLink, MapPin } from "lucide-react";
import { Link, useParams } from "wouter";
import { tradeShows } from "@/lib/tradePresence";

function HighlightMarker({ children }: { children: ReactNode }) {
  return (
    <strong className="inline bg-[var(--brand-black)] px-1.5 py-0.5 font-semibold text-white">
      {children}
    </strong>
  );
}

function ExternalTextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[var(--brand-black)] underline decoration-[var(--brand-gray-400)] underline-offset-4 hover:decoration-[var(--brand-black)]"
    >
      {children}
    </a>
  );
}

export default function TradeShowDetail() {
  const params = useParams<{ id: string }>();
  const show = tradeShows.find((event) => event.id === params.id);

  useEffect(() => {
    if (!show) return;

    const originalTitle = document.title;
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";
    const metaDescription = document.querySelector('meta[name="description"]');

    document.title = `${show.shortName} ${show.city} | China DMC Trade Show Case Study`;
    metaDescription?.setAttribute("content", show.metaDescription);

    return () => {
      document.title = originalTitle;
      metaDescription?.setAttribute("content", previousDescription);
    };
  }, [show]);

  if (!show) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6" style={{ paddingTop: "72px" }}>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[var(--brand-black)]">Trade show not found</h1>
          <Link href="/trade-shows" className="mono-button mt-8">
            <ArrowLeft size={16} /> Back to trade shows
          </Link>
        </div>
      </main>
    );
  }

  const primary = show.images.find((image) => image.role === "primary") ?? show.images[0];
  const supporting = show.images.filter((image) => image.role !== "primary");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: show.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main
      className="mono-shell"
      style={{ color: "var(--brand-text)", paddingTop: "72px" }}
      itemScope
      itemType="https://schema.org/Event"
    >
      <meta itemProp="name" content={`${show.shortName} - ${show.name}`} />
      <meta itemProp="startDate" content={show.isoDate} />
      <meta itemProp="eventAttendanceMode" content="https://schema.org/OfflineEventAttendanceMode" />
      <meta itemProp="eventStatus" content="https://schema.org/EventScheduled" />
      <div itemProp="location" itemScope itemType="https://schema.org/Place">
        <meta itemProp="name" content={`${show.city}, ${show.country}`} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <Link href="/trade-shows" className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-600)] no-underline hover:text-[var(--brand-black)]">
            <ArrowLeft size={14} /> Trade show archive
          </Link>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.92fr_0.8fr] lg:items-end">
            <div>
              <p className="b2b-eyebrow">{show.shortName}</p>
              <h1 className="text-[clamp(2.5rem,8vw,6.2rem)] font-semibold leading-[0.95] text-[var(--brand-black)]">
                {show.headline}
              </h1>
            </div>
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="mono-index inline-flex items-center gap-2 border border-[var(--brand-border)] bg-white px-3 py-2">
                  <CalendarDays size={14} /> {show.date}
                </span>
                <span className="mono-index inline-flex items-center gap-2 border border-[var(--brand-border)] bg-white px-3 py-2">
                  <MapPin size={14} /> {show.city}, {show.country}
                </span>
              </div>
              <p className="b2b-lede" style={{ marginTop: 0 }} itemProp="description">
                {show.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-0 lg:px-10">
        <div className="mono-wrap">
          <figure className="border border-[var(--brand-border)] bg-white">
            <img src={primary.src} alt={primary.alt} className="h-[58vh] min-h-[360px] w-full object-cover" itemProp="image" loading="eager" decoding="async" fetchPriority="high" />
            <figcaption className="border-t border-[var(--brand-border)] p-5 text-sm text-[var(--brand-gray-600)]">
              {primary.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1fr]">
          <div>
            <p className="b2b-eyebrow">Why it matters</p>
            <h2 className="text-4xl font-semibold leading-tight text-[var(--brand-black)] md:text-5xl">
              Trade presence is not decoration. It is operating intelligence.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="b2b-lede" style={{ marginTop: 0 }}>
              {show.detailIntro}
            </p>
            <p className="b2b-body text-lg">
              {show.conversationLead.before} <HighlightMarker>{show.conversationLead.highlight}</HighlightMarker>, {show.conversationLead.after}
            </p>
            <p className="b2b-body text-lg">
              For China Prime DMC, the value of {show.city} was simple: it gave us market-specific conversations that influence how we design China private tours, group programs, incentive travel, family itineraries, and white-label China ground services for overseas partners.
            </p>
            {show.contextLinks.map((link) => (
              <p key={link.url} className="b2b-body text-lg">
                <ExternalTextLink href={link.url}>{link.label}</ExternalTextLink> {link.sentence}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <div>
              <p className="b2b-eyebrow">Buyer context</p>
              <h2 className="b2b-heading">What partners wanted to understand.</h2>
            </div>
            <p className="b2b-lede" style={{ marginTop: 0 }}>
              The conversations were practical, commercial, and focused on what helps a travel agency sell China with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2">
            {show.discussionTopics.map((topic) => (
              <article key={topic.title} className="bg-white p-7 sm:p-8">
                <h3 className="b2b-card-title">{topic.title}</h3>
                <p className="b2b-body">{topic.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <div className="mb-10 max-w-3xl">
            <p className="b2b-eyebrow">Partner signals</p>
            <h2 className="b2b-heading">What we brought back from the room.</h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2">
            {show.proofPoints.map((point) => (
              <article key={point.title} className="bg-white p-7 sm:p-8">
                <div className="mb-5 inline-block bg-[var(--brand-black)] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
                  Highlight
                </div>
                <h3 className="b2b-card-title text-[var(--brand-black)]">{point.title}</h3>
                <p className="b2b-body">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap">
          <div className="mb-10 max-w-3xl">
            <p className="b2b-eyebrow">Why partners benefit</p>
            <h2 className="b2b-heading">How one event improves future China programs.</h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2">
            {show.partnerValue.map((item) => (
              <article key={item.title} className="bg-white p-7 sm:p-8">
                <div className="mono-index mb-8">B2B value</div>
                <h3 className="b2b-card-title">{item.title}</h3>
                <p className="b2b-body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="b2b-eyebrow">Event gallery</p>
              <h2 className="b2b-heading">Inside {show.shortName}.</h2>
            </div>
            <p className="b2b-body max-w-xl">
              A focused visual record of meetings, buyer conversations, booth materials, and partner moments from {show.city}.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2 xl:grid-cols-3">
            {supporting.map((image) => (
              <figure key={image.src} className="bg-white">
                <img src={image.src} alt={image.alt} className="h-72 w-full object-cover" loading="lazy" decoding="async" />
                <figcaption className="p-4 text-sm leading-6 text-[var(--brand-gray-600)]">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1fr]">
          <div>
            <p className="b2b-eyebrow">FAQ</p>
            <h2 className="text-4xl font-semibold leading-tight text-[var(--brand-black)] md:text-5xl">
              Questions partners ask after a trade show meeting.
            </h2>
          </div>
          <div className="grid gap-px bg-[var(--brand-border)]">
            {show.faqs.map((faq) => (
              <article key={faq.question} className="bg-white p-6 sm:p-7">
                <h3 className="text-lg font-semibold leading-snug text-[var(--brand-black)]">{faq.question}</h3>
                <p className="b2b-body mt-3">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-white)]">
        <div className="mono-wrap">
          <div className="mb-10 max-w-3xl">
            <p className="b2b-eyebrow">External context</p>
            <h2 className="b2b-heading">Useful references for partners.</h2>
            <p className="b2b-lede">
              These external links give additional context around the event, market, organizer, venue, and official travel environment for {show.city}.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-border)] md:grid-cols-2">
            {show.externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-7 text-[var(--brand-black)] no-underline sm:p-8"
              >
                <div className="mb-8 inline-flex h-10 w-10 items-center justify-center border border-[var(--brand-border)]">
                  <ExternalLink size={16} />
                </div>
                <h3 className="b2b-card-title group-hover:underline">{link.title}</h3>
                <p className="b2b-body">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 items-end gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>SEO focus</p>
            <h2 className="b2b-heading" style={{ color: "var(--brand-white)", maxWidth: 860 }}>
              Built for partners searching for a China DMC with real trade relationships.
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {show.seoKeywords.map((keyword) => (
                <span key={keyword} className="mono-index border border-[var(--brand-gray-700)] px-3 py-2 text-[var(--brand-gray-300)]">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <Link href="/contact" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
            Discuss China programs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
