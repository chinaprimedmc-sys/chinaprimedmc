/**
 * Footer — Light Editorial Luxury Design System
 * Pure white background + deep navy text + gold accents
 */
import { Link } from "wouter";
import { WHATSAPP_URL, EMAIL } from "@/lib/data";

const LOGO_URL = "/manus-storage/china-prime-logo_05497ab4.png";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#F8F5F0", borderTop: "1px solid #E2E8F0" }}
    >
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO_URL} alt="China Prime DMC" className="w-12 h-12 object-contain" />
              <div>
                <div className="font-display text-lg" style={{ color: "#0F172A", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  China Prime
                </div>
                <div className="font-label text-[9px] tracking-[0.25em] uppercase" style={{ color: "#D4A373", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                  DMC
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#475569", fontFamily: "'Lora', Georgia, serif" }}>
              Private tailor-made journeys through China's most extraordinary landscapes and cultures. Designed by local experts with 23+ years of experience.
            </p>
            <div className="space-y-2">
              <p className="font-label text-[10px] tracking-[0.15em] uppercase mb-3" style={{ color: "#D4A373", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                Operated By
              </p>
              <p className="text-xs" style={{ color: "#0F172A", fontFamily: "'Lora', Georgia, serif" }}>
                Youyouhui Travel Services Co., Ltd.
              </p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-label text-[10px] tracking-[0.2em] uppercase mb-6" style={{ color: "#D4A373", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/destinations", label: "Destinations" },
                { href: "/journeys", label: "Journeys" },
                { href: "/blog", label: "Travel Journal" },
                { href: "/about", label: "Our Story" },
                { href: "/b2b", label: "B2B Partnerships" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#475569", fontFamily: "'Lora', Georgia, serif", textDecoration: "none" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#D4A373"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#475569"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-label text-[10px] tracking-[0.2em] uppercase mb-6" style={{ color: "#D4A373", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              Popular Destinations
            </h4>
            <ul className="space-y-3">
              {["Beijing", "Shanghai", "Yunnan", "Tibet", "Xi'an", "Guilin", "Chengdu", "Xinjiang"].map((dest) => (
                <li key={dest}>
                  <Link
                    href={`/destinations/${dest.toLowerCase().replace("'", "").replace(" ", "-")}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#475569", fontFamily: "'Lora', Georgia, serif", textDecoration: "none" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#D4A373"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#475569"; }}
                  >
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label text-[10px] tracking-[0.2em] uppercase mb-6" style={{ color: "#D4A373", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              Begin Your Journey
            </h4>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#475569", fontFamily: "'Lora', Georgia, serif" }}>
              Every journey begins with a conversation. Reach us via WhatsApp for the fastest response.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-center mb-4 px-4 py-2 rounded transition-all"
              style={{
                backgroundColor: "#D4A373",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#B8915F";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(212, 163, 115, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D4A373";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="block text-xs text-center px-4 py-2 rounded transition-all"
              style={{
                backgroundColor: "transparent",
                color: "#0F172A",
                border: "1px solid #0F172A",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F8F5F0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "#E2E8F0" }} />

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: "#94A3B8", fontFamily: "'Montserrat', sans-serif" }}>
            © {new Date().getFullYear()} China Prime DMC. All rights reserved. | {EMAIL}
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "#94A3B8", fontFamily: "'Montserrat', sans-serif", textDecoration: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#D4A373"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#94A3B8"; }}
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
