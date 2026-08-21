import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";

import { CookiePreferencesButton } from "@/components/privacy/cookie-preferences-button";
import { siteConfig } from "@/config/site";
import type { NavigationItem } from "@/types/component-library";
import styles from "./site-footer.module.css";

type LegacyFooterProps = {
  brand?: string;
  description?: string;
  columns?: Array<{ title: string; items: NavigationItem[] }>;
  email?: string;
  social?: Array<{ label: string; href: string }>;
  variant?: "consumer" | "trade";
};

const consumerFooterGroups = [
  {
    title: "Explore",
    items: [
      { label: "Private Journeys", href: "/tours" },
      { label: "Destinations", href: "/destinations" },
      { label: "China Travel Journal", href: "/journal" },
    ],
  },
  {
    title: "Plan With Us",
    items: [
      { label: "Plan My Trip", href: "/start-planning" },
      { label: "Travel FAQ", href: "/faq" },
      { label: "Message Our China Team", href: "/contact" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About AVIORA", href: "/about" },
      { label: "The AVIORA Standard", href: "/#aviora-standard" },
      { label: "For Travel Trade", href: "/china-dmc" },
    ],
  },
] as const;

const tradeFooterGroups = [
  {
    title: "China DMC",
    items: [
      { label: "Operating Services", href: "/china-dmc#capabilities" },
      { label: "Operating Standard", href: "/china-dmc#standards" },
      { label: "Working Process", href: "/china-dmc#process" },
    ],
  },
  {
    title: "Trade Contact",
    items: [
      { label: "Send a Trade Brief", href: "/china-dmc#trade-brief" },
      { label: "Trade Evidence", href: "/journal/aviora-ttg-asia-matta-connect-2026" },
      { label: "About the China Team", href: "/about" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
      { label: "Booking Terms", href: "/terms" },
    ],
  },
] as const;

export function SiteFooter({
  email = siteConfig.email,
  variant = "consumer",
}: LegacyFooterProps = {}) {
  const trade = variant === "trade";
  const footerGroups = trade ? tradeFooterGroups : consumerFooterGroups;

export function SiteFooter({ email = siteConfig.email, tone = "default" }: LegacyFooterProps = {}) {
  return (
    <footer className={`${styles.footer} ${tone === "blue" ? styles.blue : ""}`}>
      <div className={styles.inner}>
        <div className={styles.rule} aria-hidden="true" />
        <div className={styles.main}>
          <section className={styles.brandPanel} aria-labelledby="footer-brand">
            <Link
              id="footer-brand"
              href={trade ? "/china-dmc" : "/"}
              className={`brand-wordmark ${styles.brand}`}
            >
              {trade ? "CHINA PRIME DMC" : "AVIORA"}
            </Link>
            <p className={styles.positioning}>
              {trade
                ? "Your client relationship protected. Our China delivery accountable."
                : "One China-based team, responsible throughout."}
            </p>
            <p className={styles.relationship}>
              {trade
                ? "Tailor-made China operations for tour operators and travel advisors, managed by one accountable local team."
                : "Private journeys designed around your dates, pace and priorities, with local support from arrival to departure."}
            </p>
            <div className={styles.trustLine}>
              <span>Licensed In China</span>
              <span>Established 2018</span>
              <span>{trade ? "Clear Net Quotations" : "No Forced Shopping"}</span>
            </div>
            <div className={styles.contactRow}>
              <a href={`mailto:${email}`} className={styles.contactLink}>
                <Mail size={16} aria-hidden="true" /> {email}
              </a>
              <div
                className={styles.socials}
                aria-label={`${trade ? "China Prime DMC" : "AVIORA"} social media`}
              >
                <a
                  href={siteConfig.socials[1]}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${trade ? "China Prime DMC" : "AVIORA"} on Instagram`}
                  title="Instagram"
                >
                  <Instagram size={17} aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.socials[0]}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${trade ? "China Prime DMC" : "AVIORA"} on Facebook`}
                  title="Facebook"
                >
                  <Facebook size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <nav className={styles.navigation} aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div className={styles.desktopGroup} key={`desktop-${group.title}`}>
                <p>{group.title}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {footerGroups.map((group) => (
              <details className={styles.mobileGroup} key={`mobile-${group.title}`}>
                <summary>{group.title}</summary>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </nav>
        </div>

        <div className={styles.legal}>
          <p>
            © {new Date().getFullYear()} {trade ? "China Prime DMC" : "AVIORA"} · Operated by{" "}
            {siteConfig.operator.englishReferenceName}
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
            <CookiePreferencesButton className={styles.cookiePreferences} />
            <Link href="/terms">Booking Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
