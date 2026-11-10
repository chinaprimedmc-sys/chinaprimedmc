import Link from "next/link";
import styles from "./about-navigation.module.css";

const pages = [
  { href: "/about", label: "About AVIORA" },
  { href: "/company", label: "Company & licensing" },
  { href: "/about/founder", label: "Founder’s letter" },
] as const;

export function AboutNavigation({ current }: { current: (typeof pages)[number]["href"] }) {
  return (
    <nav className={styles.navigation} aria-label="About AVIORA pages">
      <ul>
        {pages.map((page) => (
          <li key={page.href}>
            <Link href={page.href} aria-current={current === page.href ? "page" : undefined}>
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
