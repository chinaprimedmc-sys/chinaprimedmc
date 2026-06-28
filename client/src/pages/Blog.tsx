import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
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
    <div className="btoc-shell" style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section className="btoc-hero min-h-[68svh]">
        <div className="btoc-hero-media">
          <img src={pageHeroImages.journal} alt="Zhangye Danxia landscape for China travel journal insights." loading="eager" decoding="async" fetchPriority="high" />
        </div>
        <div className="btoc-hero-inner btoc-wrap min-h-[68svh]">
          <div className="btoc-hero-grid">
            <FadeSection>
              <span className="btoc-eyebrow" style={{ color: "rgba(255,255,255,0.82)" }}>Travel journal</span>
              <h1>The China Journal</h1>
              <p className="btoc-lede">Short, visual field notes for travelers who want China to feel vivid before they arrive: routes, culture, food, hidden places, and practical planning ideas.</p>
            </FadeSection>
            <FadeSection delay={120}>
              <div className="btoc-glass-panel"><div className="btoc-stat-grid">
                {[{ value: String(blogPosts.length), label: "Field notes" }, { value: "2012", label: "China-based" }].map((item) => <div key={item.label} className="btoc-stat"><strong>{item.value}</strong><span>{item.label}</span></div>)}
              </div></div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section
        className="btoc-wrap py-8 sticky top-[72px] z-30"
        style={{
          backgroundColor: "rgba(251,248,241,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--brand-border)",
          transform: filterVisible ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: filterVisible ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="btoc-wrap">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="btoc-pill transition-transform hover:-translate-y-0.5"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  backgroundColor: activeCategory === cat ? "var(--btoc-navy)" : "rgba(255,255,255,0.72)",
                  color: activeCategory === cat ? "#FFFFFF" : "var(--btoc-ink)",
                  border: `1px solid ${activeCategory === cat ? "var(--btoc-navy)" : "rgba(20,33,61,0.12)"}`,
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
        <section className="btoc-section">
          <div className="btoc-wrap">
            <FadeSection>
              <Link href={`/blog/${blogPosts[0].id}`}>
                <div className="btoc-card group grid cursor-pointer overflow-hidden md:grid-cols-2">
                  <div className="btoc-image-frame h-80 rounded-none md:h-auto">
                      <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(17,24,39,0.5) 100%)" }} />
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className="font-label text-[9px] tracking-[0.2em] uppercase mb-4" style={{ color: "var(--btoc-gold)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                      Featured · {blogPosts[0].category}
                    </div>
                    <h2 className="mb-4 leading-tight" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 560, color: "var(--btoc-ink)" }}>
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(17,24,39,0.68)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(17,24,39,0.56)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                        <Clock size={10} /> {blogPosts[0].readTime}
                      </span>
                      <span className="font-label text-[10px] tracking-[0.15em] uppercase flex items-center gap-2 transition-colors duration-200 group-hover:text-[var(--btoc-gold)]" style={{ color: "rgba(17,24,39,0.66)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
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
      <section className="btoc-section pt-4">
        <div className="btoc-wrap">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {(activeCategory === "All" ? filtered.slice(1) : filtered).map((post, i) => (
              <FadeSection key={post.id} delay={i * 60}>
                <Link href={`/blog/${post.id}`}>
                  <div className="btoc-card group h-full cursor-pointer">
                    <div className="btoc-image-frame h-60 rounded-none">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(17,24,39,0.7) 0%, transparent 60%)" }} />
                    </div>
                    <div className="p-6">
                      <div className="font-label text-[9px] tracking-[0.2em] uppercase mb-3" style={{ color: "var(--btoc-gold)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                        {post.category}
                      </div>
                      <h3 className="mb-3 leading-snug" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif", fontSize: "1.3rem", fontWeight: 400, color: "var(--brand-ink)" }}>
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(17,24,39,0.70)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                        {post.excerpt.substring(0, 120)}...
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(17,24,39,0.52)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
                          <Clock size={10} /> {post.readTime}
                        </span>
                        <span className="font-label text-[10px] tracking-[0.12em] uppercase flex items-center gap-1 transition-colors duration-200 group-hover:text-[var(--btoc-gold)]" style={{ color: "rgba(17,24,39,0.58)", fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
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
