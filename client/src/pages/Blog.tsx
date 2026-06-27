/**
 * Blog Page — Light Editorial Luxury Design System
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import MediaHero from "@/components/MediaHero";
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
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

const categories = ["All", "China Travel Guides", "Hidden China", "Culture & People", "Food & Culinary Travel", "Destination Guides"];

function useHideOnScrollDown() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y - lastY.current > 8 && y > 160) setVisible(false);
      else if (lastY.current - y > 4) setVisible(true);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible;
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filterVisible = useHideOnScrollDown();
  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter(p => p.category === activeCategory);

  return (
    <div style={{ backgroundColor: "#FFFFFF", color: "var(--brand-ink)", paddingTop: "72px" }}>
      {/* Hero */}
      <MediaHero
        image={pageHeroImages.journal}
        alt="Zhangye Danxia landscape for China travel journal insights."
        eyebrow="Travel journal"
        title="The China Journal"
        body="Authoritative guides, insider knowledge, and stories from the field. Everything partners need to understand, position, and plan China journeys."
        stats={[
          { value: String(blogPosts.length), label: "Field notes" },
          { value: "2012", label: "China-based perspective" },
          { value: "B2B", label: "Planning lens" },
        ]}
        minHeightClassName="min-h-[72svh]"
      />

      {/* Filter */}
      <section
        className="px-6 lg:px-10 py-8 sticky top-[72px] z-30"
        style={{
          backgroundColor: "rgba(247,245,240,0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--brand-border)",
          transform: filterVisible ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: filterVisible ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-label text-[10px] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-200"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  backgroundColor: activeCategory === cat ? "var(--brand-champagne)" : "transparent",
                  color: activeCategory === cat ? "#FFFFFF" : "var(--brand-ink-3)",
                  border: `1px solid ${activeCategory === cat ? "var(--brand-champagne)" : "var(--brand-border)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {activeCategory === "All" && (
        <section className="py-16 px-6 lg:px-10">
          <div className="max-w-[1400px] mx-auto">
            <FadeSection>
              <Link href={`/blog/${blogPosts[0].id}`}>
                <div className="card-hover group grid md:grid-cols-2 overflow-hidden cursor-pointer" style={{ backgroundColor: "var(--brand-parchment)", border: "1px solid var(--brand-border)", borderRadius: "2px" }}>
                  <div className="img-zoom-container h-72 md:h-auto relative">
                      <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(17,24,39,0.5) 100%)" }} />
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className="font-label text-[9px] tracking-[0.2em] uppercase mb-4" style={{ color: "var(--brand-champagne-soft)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                      Featured · {blogPosts[0].category}
                    </div>
                    <h2 className="mb-4 leading-tight" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, color: "var(--brand-ink)" }}>
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.65)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs" style={{ color: "var(--brand-gray-500)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                        <Clock size={10} /> {blogPosts[0].readTime}
                      </span>
                      <span className="font-label text-[10px] tracking-[0.15em] uppercase flex items-center gap-2 transition-colors duration-200 group-hover:text-[var(--brand-champagne-soft)]" style={{ color: "var(--brand-text-muted)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                        Read Article <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeSection>
          </div>
        </section>
      )}

      {/* Blog grid */}
      <section className="py-12 px-6 lg:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All" ? filtered.slice(1) : filtered).map((post, i) => (
              <FadeSection key={post.id} delay={i * 60}>
                <Link href={`/blog/${post.id}`}>
                  <div className="card-hover group cursor-pointer h-full" style={{ backgroundColor: "var(--brand-parchment)", border: "1px solid var(--brand-border)", borderRadius: "2px" }}>
                    <div className="img-zoom-container h-52 relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,24,39,0.7) 0%, transparent 60%)" }} />
                    </div>
                    <div className="p-6">
                      <div className="font-label text-[9px] tracking-[0.2em] uppercase mb-3" style={{ color: "var(--brand-champagne-soft)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                        {post.category}
                      </div>
                      <h3 className="mb-3 leading-snug" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "1.3rem", fontWeight: 400, color: "var(--brand-ink)" }}>
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--brand-ink-3)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                        {post.excerpt.substring(0, 120)}...
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(245,240,232,0.35)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                          <Clock size={10} /> {post.readTime}
                        </span>
                        <span className="font-label text-[10px] tracking-[0.12em] uppercase flex items-center gap-1 transition-colors duration-200 group-hover:text-[var(--brand-champagne-soft)]" style={{ color: "var(--brand-gray-500)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                          Read <ArrowRight size={10} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
