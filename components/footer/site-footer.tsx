import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { CookiePreferencesButton } from "@/components/privacy/cookie-preferences-button";
import { siteConfig } from "@/config/site";
import type { NavigationItem } from "@/types/component-library";
import styles from "./site-footer.module.css";

type SiteFooterProps = {
  brand?: string;
  description?: string;
  columns: Array<{ title: string; items: NavigationItem[] }>;
  email?: string;
  social?: Array<{ label: string; href: string }>;
};

export function SiteFooter({
  brand = "AVIORA",
  description = `Tailored private China tours with local guides, carefully chosen hotels and clear support from arrival to departure.`,
  columns,
  email = siteConfig.email,
  social = [],
}: SiteFooterProps) {
  const whatsappHref = `https://wa.me/447985052302?text=${encodeURIComponent(
    "Hello AVIORA, I would like help planning a private trip to China.",
  )}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <section className={styles.conversion}>
          <div>
            <p className={styles.eyebrow}>Private travel, planned in China</p>
            <h2>Planning a private trip to China?</h2>
            <p className={styles.conversionCopy}>
              Share your dates, travel style and priorities. Our China-based team will suggest a
              clear first direction.
            </p>
          </div>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/start-planning?source=site-footer">
              Start planning <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <a
              className={styles.whatsappAction}
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon aria-hidden="true" /> Message an Advisor
            </a>
          </div>
        </section>

        <div className={styles.main}>
          <div>
            <p
              className={`brand-wordmark ${styles.brand} [--brand-wordmark-color:rgba(255,255,255,0.92)]`}
            >
              {brand}
            </p>
            <p className={styles.description}>{description}</p>
            <div className={styles.trust}>
              <span>Licensed inbound tour operator</span>
              <span>China-based local support</span>
            </div>
            <a className={styles.email} href={`mailto:${email}`}>
              {email}
            </a>
            {social.length ? (
              <div className={styles.socialLinks}>
                {social.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {getSocialLabel(item)}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <nav className={styles.columns} aria-label="Footer navigation">
            {columns.map((column) => (
              <div className={styles.column} key={column.title}>
                <p className={styles.columnTitle}>{column.title}</p>
                <ul>
                  {column.items.slice(0, 5).map((item) => (
                    <li key={`${column.title}-${item.label}-${item.href}`}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.legal}>
          <p>
            © {new Date().getFullYear()} AVIORA · Operated in China by{" "}
            {siteConfig.operator.englishReferenceName}
          </p>
          <div className={styles.legalLinks}>
            <Link href="/about">About AVIORA</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookie Policy</Link>
            <CookiePreferencesButton className={styles.cookiePreferences} />
            <Link href="/terms">Booking Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function getSocialLabel(item: { label: string; href: string }) {
  const href = item.href.toLowerCase();
  if (href.includes("instagram.com")) return "Instagram";
  if (href.includes("facebook.com")) return "Facebook";
  return item.label === "Social" ? "Follow AVIORA" : item.label;
}
