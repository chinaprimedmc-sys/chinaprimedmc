import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Opening" },
  { href: "/journeys", label: "Journeys" },
  { href: "/private-china-tours", label: "Private" },
  { href: "/destinations", label: "China" },
  { href: "/about", label: "Studio" },
  { href: "/b2b", label: "Advisors" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`cinema-nav ${scrolled || mobileOpen ? "is-scrolled" : ""}`}
      >
        <div className="cinema-nav-inner">
          <Link href="/" className="cinema-brand" aria-label="China Prime DMC home">
            <span className="cinema-brand-mark" aria-hidden="true">
              <span>CP</span>
            </span>
            <span className="cinema-brand-copy">
              <span className="cinema-brand-name">China Prime</span>
              <span className="cinema-brand-sub">Private China journeys</span>
            </span>
          </Link>

          <nav className="cinema-nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`cinema-nav-link ${isActive ? "is-active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact" className="cinema-nav-cta">
            Begin <ArrowRight size={14} />
          </Link>

          <button
            className="cinema-menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="cinema-mobile-menu">
          <nav>
            <Link href="/" className="cinema-mobile-feature">
              <span>China Prime DMC</span>
              <strong>Enter China with a better point of view.</strong>
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={location === link.href ? "is-active" : ""}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              Start a private brief
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
