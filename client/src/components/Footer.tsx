import { Link } from "wouter";
import { EMAIL, WHATSAPP_URL } from "@/lib/data";
import { coverageRegions } from "@/lib/coverageData";

const partnerLinks = [
  { href: "/b2b", label: "Services" },
  { href: "/journeys", label: "Sample programs" },
  { href: "/destinations", label: "China coverage" },
  { href: "/about", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--brand-black)", color: "var(--brand-white)" }}>
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-[var(--brand-gray-800)] pb-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center bg-white text-[var(--brand-black)] text-xs font-bold tracking-[0.08em]">
                CP
              </div>
              <div>
                <div className="text-base font-bold leading-none">China Prime</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand-gray-400)]">DMC</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[var(--brand-gray-300)]">
              China ground services for travel advisors, tour operators, DMC partners, and corporate travel teams. Established in 2012.
            </p>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-gray-500)]">
              Operated by Youyouhui Travel Services Co., Ltd.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-gray-500)]">For partners</h4>
            <ul className="space-y-3">
              {partnerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--brand-gray-200)] transition-colors hover:text-white" style={{ textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-gray-500)]">Coverage</h4>
            <ul className="space-y-3">
              {coverageRegions.slice(0, 7).map((region) => (
                <li key={region.id}>
                  <Link
                    href={`/destinations/${region.id}`}
                    className="text-sm text-[var(--brand-gray-200)] transition-colors hover:text-white"
                    style={{ textDecoration: "none" }}
                  >
                    {region.name.replace(" Coverage", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-gray-500)]">Partner desk</h4>
            <p className="mb-6 text-sm leading-7 text-[var(--brand-gray-300)]">
              Send us your China brief. We respond fastest on WhatsApp and email.
            </p>
            <div className="grid gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
                WhatsApp
              </a>
              <Link href="/contact" className="mono-button" style={{ backgroundColor: "transparent", borderColor: "var(--brand-gray-600)", color: "var(--brand-white)" }}>
                Request quote
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-[var(--brand-gray-500)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} China Prime DMC. All rights reserved. | {EMAIL}</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-[var(--brand-gray-500)] hover:text-white" style={{ textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
