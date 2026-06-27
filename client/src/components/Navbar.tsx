import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/b2b", label: "Services" },
  { href: "/journeys", label: "Programs" },
  { href: "/destinations", label: "Coverage" },
  { href: "/about", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;
      if (diff > 8 && currentY > 120) {
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

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50"
        style={{
          backgroundColor: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid var(--brand-border)",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex h-[72px] items-center justify-between">
            <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
              <div
                className="flex h-10 w-10 items-center justify-center"
                aria-hidden="true"
                style={{
                  backgroundColor: "var(--brand-black)",
                  color: "var(--brand-white)",
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 760,
                  letterSpacing: "0.08em",
                }}
              >
                CP
              </div>
              <div className="block">
                <div
                  style={{
                    color: "var(--brand-black)",
                    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                    fontSize: "0.94rem",
                    fontWeight: 720,
                    letterSpacing: 0,
                    lineHeight: 1.1,
                  }}
                >
                  China Prime
                </div>
                <div
                  style={{
                    color: "var(--brand-gray-500)",
                    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 720,
                    letterSpacing: "0.22em",
                    marginTop: 3,
                    textTransform: "uppercase",
                  }}
                >
                  DMC
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm"
                    style={{
                      color: isActive ? "var(--brand-black)" : "var(--brand-gray-600)",
                      fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: isActive ? 760 : 620,
                      letterSpacing: "0.08em",
                      paddingBottom: 4,
                      textDecoration: "none",
                      textTransform: "uppercase",
                      borderBottom: isActive ? "1px solid var(--brand-black)" : "1px solid transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link href="/contact" className="mono-button hidden md:inline-flex" style={{ minHeight: 40, padding: "0 18px" }}>
              Request quote
            </Link>

            <button
              className="flex h-[42px] w-[42px] items-center justify-center md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                backgroundColor: "transparent",
                border: "1px solid var(--brand-border)",
                color: "var(--brand-black)",
              }}
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed left-0 right-0 top-[72px] z-40 md:hidden"
          style={{
            backgroundColor: "var(--brand-white)",
            borderBottom: "1px solid var(--brand-border)",
          }}
        >
          <nav className="flex flex-col gap-px bg-[var(--brand-border)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  backgroundColor: "var(--brand-white)",
                  color: location === link.href ? "var(--brand-black)" : "var(--brand-gray-700)",
                  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 720,
                  letterSpacing: "0.08em",
                  padding: "18px 24px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mono-button" style={{ justifyContent: "flex-start", margin: 0 }}>
              Request quote
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
