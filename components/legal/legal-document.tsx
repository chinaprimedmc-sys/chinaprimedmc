import { Children, isValidElement, type ReactNode } from "react";

import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { homeNavItems } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  effectiveDate?: string;
  introduction: ReactNode;
  children: ReactNode;
};

export function LegalDocument({
  eyebrow,
  title,
  effectiveDate = "July 18, 2026",
  introduction,
  children,
}: LegalDocumentProps) {
  const headings = Children.toArray(children)
    .filter(isValidElement<{ title?: string }>)
    .map((child) => child.props.title)
    .filter((title): title is string => Boolean(title));
  return (
    <PageContainer>
      <SiteNavigation />
      <Section spacing="spacious">
        <ContentContainer size="lg" className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-muted text-sm font-semibold">{eyebrow}</p>
            <h1 className="type-page-title mt-4">{title}</h1>
            <p className="text-muted mt-5 text-base">Effective {effectiveDate}</p>
            <div className="text-muted mt-6 text-base leading-7">{introduction}</div>
            <details className="mt-6">
              <summary className="min-h-11 cursor-pointer font-semibold">On this page</summary>
              <nav aria-label="Policy sections" className="grid gap-3 py-3">
                {headings.map((heading) => (
                  <a
                    key={heading}
                    href={`#${legalAnchor(heading)}`}
                    className="text-sm underline underline-offset-4"
                  >
                    {heading}
                  </a>
                ))}
              </nav>
            </details>
          </aside>
          <article className="legal-copy border-border border-t pt-8">{children}</article>
        </ContentContainer>
      </Section>
      <SiteFooter columns={[{ title: "Explore", items: homeNavItems }]} social={[]} />
    </PageContainer>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section id={legalAnchor(title)} className="border-border border-b pb-9 [&+&]:pt-9">
      <h2 className="type-card-title">{title}</h2>
      <div className="text-muted mt-4 grid gap-4 text-base leading-7">{children}</div>
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="grid list-disc gap-2 pl-5">{children}</ul>;
}

function legalAnchor(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
