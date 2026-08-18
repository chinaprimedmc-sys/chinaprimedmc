import type { Metadata } from "next";

import { LegalDocument, LegalList, LegalSection } from "@/components/legal";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy",
  description:
    "How AVIORA China Travel uses necessary storage, optional analytics and privacy preferences across this website.",
  path: "/cookies",
});

export default function CookiePolicyPage() {
  return (
    <LegalDocument
      eyebrow="Privacy"
      title="Cookie Policy"
      effectiveDate="August 17, 2026"
      introduction={
        <p>
          This policy explains how {siteConfig.siteName} uses cookies and similar browser storage,
          what each category does, and how you can change your choice.
        </p>
      }
    >
      <LegalSection title="1. What We Use">
        <p>
          Cookies and similar technologies can remember information in your browser. We use only the
          storage needed to operate the website and optional analytics that you choose to allow.
        </p>
      </LegalSection>

      <LegalSection title="2. Necessary Storage">
        <p>
          Necessary storage supports functions that the website cannot reasonably provide without
          it.
        </p>
        <LegalList>
          <li>Remembering your cookie and privacy preference.</li>
          <li>Protecting forms and administrative sessions from abuse.</li>
          <li>Maintaining information during a secure form or planning workflow.</li>
        </LegalList>
        <p>This category is always active and is not used for advertising.</p>
      </LegalSection>

      <LegalSection title="3. Optional Analytics">
        <p>
          If you allow analytics, we may use Vercel Analytics and Speed Insights to understand
          anonymous page usage, performance and technical quality. We may also retain the landing
          page and campaign parameters that brought you to the site so we can understand which
          travel content leads to genuine inquiries.
        </p>
        <p>
          Optional analytics remains disabled until you select “Accept All” or enable Analytics in
          Cookie Preferences.
        </p>
      </LegalSection>

      <LegalSection title="4. Advertising and Profiling">
        <p>
          We do not currently load advertising pixels or cross-site behavioral profiling through
          this consent manager. If that changes, we will add a separate category and request consent
          before those technologies run.
        </p>
      </LegalSection>

      <LegalSection title="5. Changing Your Choice">
        <p>
          You can reopen Cookie Preferences from the footer on any page. Rejecting optional
          analytics does not affect access to journeys, destination guides or inquiry forms.
        </p>
      </LegalSection>

      <LegalSection title="6. Retention and Updates">
        <p>
          Your consent choice remains in your browser until you clear site data or we replace the
          consent version. Analytics providers may retain aggregated technical information under
          their own documented retention and security practices.
        </p>
        <p>
          We will update this policy when categories, providers or purposes materially change.
          Questions can be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
