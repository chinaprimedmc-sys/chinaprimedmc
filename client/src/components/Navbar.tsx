/**
 * Navbar — Smart Scroll-Aware Design
 * - At top: transparent / light background
 * - Scrolled: frosted glass (white/blur)
 * - Scroll down: hides; scroll up: reappears
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LOGO_URL = "/manus-storage/logo_ab631d47.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/destinations", label: "Destinations" },
  { href: "/journeys", label: "Journeys" },
  { href: "/blog", label: "Blog" },
  { href: "/b2b", label: "B2B Partnerships" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // Mark as scrolled once past 40px
      setScrolled(currentY > 40);

      // Hide when scrolling down more than 8px, show when scrolling up
      if (diff > 8 && currentY > 100) {
        setVisible(false);
        setMobileOpen(false);
      } else if (diff < -4) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled
    ? "rgba(255, 255, 255, 0.92)"
    : "rgba(255, 255, 255, 0.0)";

  const navBorder = scrolled
    ? "1px solid rgba(226, 232, 240, 0.8)"
    : "1px solid transparent";

  const navShadow = scrolled
    ? "0 2px 20px rgba(0,0,0,0.08)"
    : "none";

  const textColor = scrolled ? "#475569" : "#FFFFFF";
  const activeColor = "#D4A373";
  const logoTextColor = scrolled ? "#0F172A" : "#FFFFFF";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: navBg,
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: navBorder,
          boxShadow: navShadow,
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between" style={{ height: "72px" }}>

            {/* Brand Lockup */}
            <Link href="/" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
              <div className="relative flex-shrink-0">
                <img
                  src={LOGO_URL}
                  alt="China Prime DMC"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
              <div className="hidden sm:block">
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: logoTextColor,
                  lineHeight: 1.1,
                  letterSpacing: "0.02em",
                  transition: "color 0.3s ease",
                }}>
                  China Prime
                </div>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#D4A373",
                  marginTop: "2px",
                  fontWeight: 500,
                }}>
                  DMC
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium"
                    style={{
                      color: isActive ? activeColor : textColor,
                      textDecoration: "none",
                      borderBottom: isActive ? `2px solid ${activeColor}` : "2px solid transparent",
                      paddingBottom: "4px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.85rem",
                      letterSpacing: "0.04em",
                      transition: "color 0.18s ease, border-color 0.18s ease, transform 0.12s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = scrolled ? "#0F172A" : "#F0E6D3";
                        e.currentTarget.style.borderBottom = `2px solid ${scrolled ? "#E2C99A" : "rgba(212,163,115,0.6)"}`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = textColor;
                        e.currentTarget.style.borderBottom = "2px solid transparent";
                      }
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.transform = "scale(0.96)";
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:block px-5 py-2 rounded text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: "#D4A373",
                color: "#FFFFFF",
                textDecoration: "none",
                letterSpacing: "0.05em",
                fontFamily: "'Montserrat', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#B8915F";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(212, 163, 115, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D4A373";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Begin Your Journey
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                color: scrolled ? "#0F172A" : "#FFFFFF",
                backgroundColor: mobileOpen ? "rgba(248,245,240,0.9)" : "transparent",
                transition: "color 0.3s ease",
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed top-[72px] left-0 right-0 z-40 md:hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid #E2E8F0",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }}
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: location === link.href ? "#D4A373" : "#475569",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.04em",
                  borderLeft: location === link.href ? "3px solid #D4A373" : "3px solid transparent",
                  paddingLeft: "12px",
                  transition: "all 0.15s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 rounded text-sm font-medium text-center transition-all"
              style={{
                backgroundColor: "#D4A373",
                color: "#FFFFFF",
                textDecoration: "none",
                marginTop: "8px",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Begin Your Journey
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
