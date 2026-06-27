/**
 * Footer — quiet B2B brand surface
 * Parchment background, deep ink text, and restrained champagne accents.
 */
import { Link } from "wouter";
import { WHATSAPP_URL, EMAIL } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--brand-parchment)", borderTop: "1px solid var(--brand-border)" }}
    >
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center"
                style={{
                  backgroundColor: "var(--brand-ink)",
                  border: "1px solid var(--brand-ink)",
                  color: "var(--brand-champagne-soft)",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                CP
              </div>
              <div>
                <div className="font-display text-lg" style={{ color: "var(--brand-ink)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  China Prime
                </div>
                <div className="font-label text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--brand-champagne)", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                  DMC
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--brand-ink-3)", fontFamily: "'Lora', Georgia, serif" }}>
              China ground services for travel advisors, tour operators, DMC partners, and corporate travel teams. Established in 2012.
            </p>
            <div className="space-y-2">
              <p className="font-label text-[10px] tracking-[0.15em] uppercase mb-3" style={{ color: "var(--brand-champagne)", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                Operated By
              </p>
              <p className="text-xs" style={{ color: "var(--brand-ink)", fontFamily: "'Lora', Georgia, serif" }}>
                Youyouhui Travel Services Co., Ltd.
              </p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-label text-[10px] tracking-[0.2em] uppercase mb-6" style={{ color: "var(--brand-champagne)", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              For Partners
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/b2b", label: "Partner Services" },
                { href: "/journeys", label: "Sample Programs" },
                { href: "/destinations", label: "China Coverage" },
                { href: "/about", label: "Company" },
                { href: "/contact", label: "Request a Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--brand-ink-3)", fontFamily: "'Lora', Georgia, serif", textDecoration: "none" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-champagne)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--brand-ink-3)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-label text-[10px] tracking-[0.2em] uppercase mb-6" style={{ color: "var(--brand-champagne)", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              China Coverage
            </h4>
            <ul className="space-y-3">
              {["Beijing", "Shanghai", "Yunnan", "Tibet", "Xi'an", "Guilin", "Chengdu", "Xinjiang"].map((dest) => (
                <li key={dest}>
                  <Link
                    href={`/destinations/${dest.toLowerCase().replace("'", "").replace(" ", "-")}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--brand-ink-3)", fontFamily: "'Lora', Georgia, serif", textDecoration: "none" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-champagne)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--brand-ink-3)"; }}
                  >
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label text-[10px] tracking-[0.2em] uppercase mb-6" style={{ color: "var(--brand-champagne)", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              Partner Desk
            </h4>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--brand-ink-3)", fontFamily: "'Lora', Georgia, serif" }}>
              Send us your China brief. We respond fastest on WhatsApp and email.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-center mb-4 px-4 py-2 rounded transition-all"
              style={{
                backgroundColor: "var(--brand-champagne)",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-champagne-hover)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(184, 145, 90, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-champagne)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              WhatsApp Partner Desk
            </a>
            <Link
              href="/contact"
              className="block text-xs text-center px-4 py-2 rounded transition-all"
              style={{
                backgroundColor: "transparent",
                color: "var(--brand-ink)",
                border: "1px solid var(--brand-ink)",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-parchment)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "var(--brand-border)" }} />

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: "var(--brand-text-muted)", fontFamily: "'Montserrat', sans-serif" }}>
            © {new Date().getFullYear()} China Prime DMC. All rights reserved. | {EMAIL}
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "var(--brand-text-muted)", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--brand-champagne)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--brand-text-muted)"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
