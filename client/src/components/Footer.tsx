import { Link } from "wouter";
import { EMAIL, WHATSAPP_URL } from "@/lib/data";

const partnerLinks = [
  { href: "/journeys", label: "Private journeys" },
  { href: "/private-china-tours", label: "Custom travel" },
  { href: "/destinations", label: "China coverage" },
  { href: "/about", label: "Our point of view" },
  { href: "/b2b", label: "Advisor standards" },
];

const coverageLinks = [
  { href: "/destinations/north-china", label: "North China" },
  { href: "/destinations/east-china", label: "East China" },
  { href: "/destinations/south-china", label: "South China" },
  { href: "/destinations/southwest-china", label: "Southwest China" },
  { href: "/destinations/northwest-china", label: "Northwest China" },
  { href: "/destinations/central-china", label: "Central China" },
  { href: "/destinations/western-china", label: "Western China" },
];

export default function Footer() {
  return (
    <footer className="cinema-footer">
      <div className="cinema-footer-hero">
        <div>
          <p className="cinema-kicker">The closing frame</p>
          <h2>China should feel considered before you arrive.</h2>
        </div>
        <div className="cinema-footer-actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <Link href="/contact">Start a brief</Link>
        </div>
      </div>

      <div className="cinema-footer-grid">
        <div>
          <Link href="/" className="cinema-footer-brand">
            <span>CP</span>
            <strong>China Prime DMC</strong>
          </Link>
          <p>
            China-based private journey planning and destination management for travelers and advisors who expect taste, clarity, and control.
          </p>
          <small>Established in 2012 · Operated by Youyouhui Travel Services Co., Ltd.</small>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            {partnerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>China</h4>
          <ul>
            {coverageLinks.slice(0, 6).map((region) => (
              <li key={region.href}>
                <Link href={region.href}>{region.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Concierge</h4>
          <p>Send dates, travelers, pace, hotel level, and what China should feel like.</p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp concierge</a>
        </div>
      </div>

      <div className="cinema-footer-bottom">
        <span>© {new Date().getFullYear()} China Prime DMC</span>
        <span>Private China journeys · Travel advisor partnerships · Destination management</span>
      </div>
    </footer>
  );
}
