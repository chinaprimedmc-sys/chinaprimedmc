import { Link } from "wouter";
import { EMAIL, WHATSAPP_URL } from "@/lib/data";

const partnerLinks = [
  { href: "/journeys", label: "Find a trip that fits" },
  { href: "/private-china-tours", label: "How private planning works" },
  { href: "/destinations", label: "Choose the right region" },
  { href: "/about", label: "Why travelers trust us" },
  { href: "/b2b", label: "For travel advisors" },
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
          <p className="cinema-kicker">Start with the trip in your head</p>
          <h2>You do not need to figure out China alone.</h2>
        </div>
        <div className="cinema-footer-actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <Link href="/contact">Get a first route idea</Link>
        </div>
      </div>

      <div className="cinema-footer-grid">
        <div>
          <Link href="/" className="cinema-footer-brand">
            <span>CP</span>
            <strong>China Prime DMC</strong>
          </Link>
          <p>
            China-based private journey planning for travelers who want the country to feel beautiful, safe, well paced, and quietly handled.
          </p>
          <small>Established in 2012 · Operated by Youyouhui Travel Services Co., Ltd.</small>
        </div>

        <div>
          <h4>Plan</h4>
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
          <p>Send dates, travelers, pace, hotel style, food needs, and what you do not want to worry about.</p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp concierge</a>
        </div>
      </div>

      <div className="cinema-footer-bottom">
        <span>© {new Date().getFullYear()} China Prime DMC</span>
        <span>Private China tours · Luxury China travel · Family and custom China itineraries</span>
      </div>
    </footer>
  );
}
