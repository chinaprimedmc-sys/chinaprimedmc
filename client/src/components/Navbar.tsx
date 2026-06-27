/**
 * Navbar — stable B2B brand bar
 * A consistent parchment surface keeps the logo and navigation readable across every page.
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/b2b", label: "Services" },
  { href: "/journeys", label: "Sample Programs" },
  { href: "/destinations", label: "China Coverage" },
  { href: "/about", label: "Company" },
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

  const navBg = scrolled ? "rgba(255, 255, 255, 0.94)" : "rgba(247, 245, 240, 0.98)";
  const navBorder = scrolled ? "1px solid rgba(216, 210, 198, 0.82)" : "1px solid var(--brand-border)";

  const navShadow = scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none";

  const textColor = "var(--brand-ink-3)";
  const activeColor = "var(--brand-champagne)";
  const logoTextColor = "var(--brand-ink)";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: navBg,
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
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
              <div
                className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
                style={{
                  alignItems: "center",
                  backgroundColor: "var(--brand-ink)",
                  border: "1px solid var(--brand-ink)",
                  color: "var(--brand-champagne-soft)",
                  display: "flex",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  height: "42px",
                  justifyContent: "center",
                  letterSpacing: "0.02em",
                  width: "42px",
                }}
              >
                CP
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
                  color: "var(--brand-champagne)",
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
                        e.currentTarget.style.color = "var(--brand-ink)";
                        e.currentTarget.style.borderBottom = "2px solid var(--brand-champagne-soft)";
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
                backgroundColor: "var(--brand-champagne)",
                color: "#FFFFFF",
                textDecoration: "none",
                letterSpacing: "0.05em",
                fontFamily: "'Montserrat', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-champagne-hover)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(184, 145, 90, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--brand-champagne)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Request a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                color: "var(--brand-ink)",
                backgroundColor: mobileOpen ? "rgba(247,245,240,0.9)" : "transparent",
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
            borderBottom: "1px solid var(--brand-border)",
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
                  color: location === link.href ? "var(--brand-champagne)" : "var(--brand-ink-3)",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.04em",
                  borderLeft: location === link.href ? "3px solid var(--brand-champagne)" : "3px solid transparent",
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
                backgroundColor: "var(--brand-champagne)",
                color: "#FFFFFF",
                textDecoration: "none",
                marginTop: "8px",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
