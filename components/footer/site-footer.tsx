import Link from "next/link";

import { CtaButton } from "@/components/cta";
import { siteConfig } from "@/config/site";
import type { NavigationItem } from "@/types/component-library";

type SiteFooterProps = {
  brand?: string;
  description?: string;
  columns: Array<{ title: string; items: NavigationItem[] }>;
  email?: string;
  social?: Array<{ label: string; href: string }>;
};

export function SiteFooter({
  brand = "AVIORA",
  description = `Private China journeys by China Prime DMC, operated in China by a ${siteConfig.operator.tourismLicense.shortLabel.toLowerCase()}.`,
  columns,
  email = "chinaprimedmc@gmail.com",
  social = [],
}: SiteFooterProps) {
  return (
    <footer className="bg-neutral-950 px-5 py-12 text-white md:px-8 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1.4fr]">
        <div>
          <p className="brand-wordmark text-xl [--brand-wordmark-color:rgba(255,255,255,0.92)]">
            {brand}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">{description}</p>
          <div className="mt-6">
            <CtaButton href={`mailto:${email}`} variant="glass">
              Write to a China Specialist
            </CtaButton>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
                {column.title}
              </p>
              <ul className="mt-4 grid gap-3">
                {column.items.map((item) => (
                  <li key={`${column.title}-${item.label}-${item.href}`}>
                    <Link
                      href={item.href}
                      className="-mx-2 inline-flex min-h-9 items-center rounded-full px-2 text-sm text-white/72 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} AVIORA · China operator: {siteConfig.operator.legalName}
        </p>
        <div className="flex flex-wrap gap-4">
          {social.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="-mx-2 inline-flex min-h-8 items-center rounded-full px-2 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/about"
            className="-mx-2 inline-flex min-h-8 items-center rounded-full px-2 hover:text-white"
          >
            Company
          </Link>
          <Link
            href="/privacy"
            className="-mx-2 inline-flex min-h-8 items-center rounded-full px-2 hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="-mx-2 inline-flex min-h-8 items-center rounded-full px-2 hover:text-white"
          >
            Booking Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
