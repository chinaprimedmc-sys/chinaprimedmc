/**
 * Blog Post Detail Page — Light Editorial Luxury Design System (方案 B)
 * 纯白背景、深黑标题、中性灰正文、深金色强调
 */
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts, WHATSAPP_URL } from "@/lib/data";

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
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

function generateContent(post: typeof blogPosts[0]): string {
  return `
${post.title} is one of the most important topics for anyone planning a journey to China. Whether you are a first-time visitor or a seasoned traveler returning to explore new regions, understanding this subject deeply will transform your experience.

China is not a single destination — it is a continent-sized country of extraordinary diversity, where climate, culture, cuisine, and landscape change dramatically from province to province. The knowledge we share here comes from our China-based operations work and the supplier relationships we have built since Youyouhui Travel Services Co., Ltd. was established in 2012.

## Why This Matters for Your Journey

The difference between a good China journey and an extraordinary one often comes down to preparation and knowledge. Travelers who understand what they are encountering — the historical context, the cultural nuances, the practical realities — experience China at a fundamentally different level.

This is not about reading guidebooks. It is about developing a genuine understanding that allows you to engage with China on its own terms, rather than through the lens of your own cultural assumptions.

## What Our Experts Say

Our China-based team works with licensed guides, drivers, hotels, restaurants, attractions, and regional suppliers across the country. We focus on practical, current, partner-ready knowledge rather than generic travel writing.

The insights we share in this article come from that accumulated experience — not from secondary sources or generic travel writing, but from the ground-level knowledge that only comes from deep, sustained engagement with a place.

## Planning Your China Journey

If this article has sparked your interest in visiting China, we would love to help you design a journey that goes far beyond what any guidebook can offer. Our approach is entirely bespoke — we begin with a conversation about your interests, your travel style, and what you hope to discover, and we design a journey from scratch around those foundations.

Every journey we design includes private access to experiences not available through standard operators, expert local guides who are genuine specialists in their regions, and the kind of insider knowledge that transforms a visit into a revelation.

## Getting in Touch

The best way to begin planning your China journey is to speak with one of our specialists. We offer a complimentary consultation — a conversation about your travel dreams and how we might help realize them.

Contact us via WhatsApp for the fastest response, or use our enquiry form to tell us more about what you are looking for. We look forward to hearing from you.
  `.trim();
}

export default function BlogPost() {
  const params = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === params.id);
  const related = blogPosts.filter(p => p.id !== params.id && p.category === post?.category).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFFFFF", paddingTop: "72px" }}>
        <div className="text-center">
          <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "2rem", color: "var(--brand-text)", marginBottom: "24px" }}>Article not found</h2>
          <Link href="/blog" className="inline-flex items-center gap-2" style={{
            backgroundColor: "var(--brand-champagne)",
            color: "#FFFFFF",
            padding: "12px 24px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 500,
          }}>
            <ArrowLeft size={16} /> Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  const content = generateContent(post);
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "var(--brand-text)", paddingTop: "72px" }}>
      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17, 24, 39, 0.4) 0%, rgba(17, 24, 39, 0.1) 60%)" }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 w-full">
          <Link href="/blog" className="inline-flex items-center gap-2 mb-6 text-xs tracking-[0.15em] uppercase transition-colors" style={{ color: "var(--brand-gray-100)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-champagne)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "var(--brand-gray-100)"; }}>
            <ArrowLeft size={12} /> All Articles
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontWeight: 600 }}>
              {post.category}
            </span>
            <div className="flex items-center gap-2" style={{ fontSize: "0.75rem", color: "var(--brand-gray-100)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
              <Clock size={12} /> {post.readTime}
            </div>
          </div>
          <h1 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ARTICLE CONTENT
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[800px] mx-auto">
          <FadeSection>
            <div className="prose prose-lg max-w-none" style={{ color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
              {paragraphs.map((para, i) => {
                if (para.startsWith("##")) {
                  return (
                    <h2 key={i} style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "2rem", fontWeight: 400, color: "var(--brand-text)", marginTop: "2rem", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                      {para.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={i} style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "var(--brand-text-muted)" }}>
                    {para}
                  </p>
                );
              })}
            </div>
          </FadeSection>

          {/* Tags */}
          <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--brand-border)" }}>
            <div className="flex flex-wrap gap-2 items-center">
              <Tag size={16} style={{ color: "var(--brand-champagne)" }} />
              {post.tags.map((tag) => (
                <span key={tag} style={{
                  display: "inline-block",
                  backgroundColor: "var(--brand-parchment)",
                  color: "var(--brand-champagne)",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-lg" style={{ backgroundColor: "var(--brand-parchment)", border: "1px solid var(--brand-border)" }}>
            <h3 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "1.8rem", fontWeight: 400, color: "var(--brand-text)", marginBottom: "12px" }}>
              Interested in exploring China?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--brand-text-muted)", marginBottom: "16px", lineHeight: 1.7 }}>
              Our team of specialists would love to help you design a journey based on the insights from this article. Contact us for a complimentary consultation.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2" style={{
                backgroundColor: "var(--brand-champagne)",
                color: "#FFFFFF",
                padding: "12px 24px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.95rem",
                transition: "all 0.3s ease",
              }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-champagne-hover)"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-champagne)"; e.currentTarget.style.transform = "scale(1)"; }}>
                Get in Touch <ArrowRight size={16} />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2" style={{
                border: "2px solid var(--brand-champagne)",
                color: "var(--brand-champagne)",
                padding: "10px 20px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.95rem",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
              }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--brand-champagne)"; e.currentTarget.style.color = "#FFFFFF"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--brand-champagne)"; }}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          RELATED ARTICLES
          ══════════════════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="py-24 px-6 lg:px-10" style={{ backgroundColor: "var(--brand-parchment)", borderTop: "1px solid var(--brand-border)" }}>
          <div className="max-w-[1400px] mx-auto">
            <FadeSection className="mb-16 text-center">
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "12px", fontWeight: 600 }}>
                More Insights
              </div>
              <h2 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 300, color: "var(--brand-text)", letterSpacing: "-0.02em" }}>
                Related Articles
              </h2>
            </FadeSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((article, i) => (
                <FadeSection key={article.id} delay={i * 80}>
                  <Link href={`/blog/${article.id}`} style={{ textDecoration: "none" }}>
                    <div style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--brand-border)", borderRadius: "8px", overflow: "hidden", transition: "all 0.3s ease", cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.08)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                      <img src={article.image} alt={article.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} loading="lazy" decoding="async" />
                      <div style={{ padding: "20px" }}>
                        <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--brand-champagne)", marginBottom: "8px", fontWeight: 600 }}>
                          {article.category}
                        </div>
                        <h3 style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "1.2rem", fontWeight: 400, color: "var(--brand-text)", marginBottom: "8px", lineHeight: 1.3 }}>
                          {article.title}
                        </h3>
                        <p style={{ fontSize: "0.85rem", color: "var(--brand-text-muted)", lineHeight: 1.6 }}>
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
