import type { ReactNode } from "react";

import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { homeNavItems, primaryAction } from "@/content/home/homepage";
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
  return (
    <PageContainer>
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />
      <Section spacing="spacious">
        <ContentContainer size="lg" className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">{eyebrow}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight font-medium md:text-6xl">
              {title}
            </h1>
            <p className="text-muted mt-5 text-sm">Effective {effectiveDate}</p>
            <div className="text-muted mt-6 text-sm leading-7">{introduction}</div>
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
    <section className="border-border border-b pb-9 [&+&]:pt-9">
      <h2 className="text-2xl font-semibold tracking-[-0.025em]">{title}</h2>
      <div className="text-muted mt-4 grid gap-4 text-base leading-7">{children}</div>
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="grid list-disc gap-2 pl-5">{children}</ul>;
}
