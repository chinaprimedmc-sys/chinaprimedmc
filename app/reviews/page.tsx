import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { verifiedCredentials } from "@/content/trust";

export default function ReviewsPage() {
  return (
    <PageContainer>
      <SiteNavigation />
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-16">
        <p className="text-muted text-sm font-semibold">Guest feedback</p>
        <h1 className="type-page-title mt-4">Make an informed choice.</h1>
        <p className="mt-6 text-base leading-7">
          Verified guest reviews are not yet published on this website. We do not display unverified
          ratings or testimonials. Before booking, you can ask our team about the operating company
          and the services in your written proposal.
        </p>
        <div className="mt-10 grid gap-6">
          {verifiedCredentials.map((fact) => (
            <div key={fact.title} className="border-border border-t pt-5">
              <h2 className="text-xl font-semibold">{fact.title}</h2>
              <p className="text-muted mt-2 text-base leading-7">{fact.description}</p>
            </div>
          ))}
        </div>
        <Link
          className="mt-8 inline-flex min-h-11 items-center font-semibold underline"
          href="/contact"
        >
          Talk to a China specialist
        </Link>
      </section>
    </PageContainer>
  );
}
