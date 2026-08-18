import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument, LegalList, LegalSection } from "@/components/legal";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How AVIORA and its licensed China company collect, use, secure, retain and share information when you plan or book a trip.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Privacy"
      title="Privacy Policy"
      introduction={
        <p>
          AVIORA is the travel brand you see on this website. Trip planning and travel services in
          China are provided by {siteConfig.operator.englishReferenceName} (
          {siteConfig.operator.legalName}; English translation for reference), referred to here as
          “we,” “us,” or “our.”
        </p>
      }
    >
      <LegalSection title="1. Information we collect">
        <p>We collect information you choose to provide when you contact us or plan a journey.</p>
        <LegalList>
          <li>Name, email address, telephone number, WhatsApp details, and contact preference.</li>
          <li>
            Travel dates, destinations, traveler numbers, ages or family composition, budget tier,
            room needs, mobility considerations, dietary needs, and other planning preferences.
          </li>
          <li>
            Booking information reasonably required to arrange confirmed services, such as passport
            details, emergency contacts, arrival information, and payment records.
          </li>
          <li>
            Technical information such as IP address, device and browser type, referral page, and
            basic security logs when you use the website or submit a form.
          </li>
        </LegalList>
        <p>
          Please do not send passport copies, medical records, or payment-card details through an
          ordinary inquiry form or email unless we specifically provide a secure method and explain
          why the information is needed.
        </p>
      </LegalSection>

      <LegalSection title="2. Why we use your information">
        <LegalList>
          <li>To respond to your inquiry and prepare a relevant route or written quotation.</li>
          <li>To arrange, administer, and support services you ask us to book.</li>
          <li>To share important service updates before and during your trip.</li>
          <li>To protect our forms, systems, customers, and business from fraud or abuse.</li>
          <li>To comply with accounting, tax, regulatory, insurance, and legal obligations.</li>
          <li>
            To understand website performance and improve our service where analytics are enabled.
          </li>
        </LegalList>
        <p>
          Depending on the circumstances and applicable law, we rely on your request before a
          contract, performance of a contract, legal obligations, legitimate business interests, or
          consent. We do not sell personal information.
        </p>
      </LegalSection>

      <LegalSection title="3. Sensitive and traveler information">
        <p>
          Health, accessibility, dietary, religious, and passport information can be sensitive. We
          request it only when it is relevant to safety, suitability, entry formalities, or a
          service you ask us to arrange. When you provide information about another traveler, you
          confirm that you are authorized to share it and that the traveler understands how it will
          be used.
        </p>
      </LegalSection>

      <LegalSection title="4. Who may receive information">
        <p>We disclose only what is reasonably necessary to:</p>
        <LegalList>
          <li>
            Hotels, guides, transport providers, ticketing partners, restaurants, activity
            providers, insurers, and other suppliers involved in a requested or confirmed journey.
          </li>
          <li>
            Technology providers that support website hosting, inquiry storage, communications,
            security, and payment processing under appropriate contractual or security controls.
          </li>
          <li>
            Professional advisers, regulators, law-enforcement bodies, or courts where disclosure is
            required or reasonably necessary to protect legal rights and safety.
          </li>
        </LegalList>
        <p>
          Travel services may require information to move between your country and China, and
          between jurisdictions used by our technology or communications providers. We use
          reasonable safeguards appropriate to the information and transfer.
        </p>
      </LegalSection>

      <LegalSection title="5. Storage, security, and retention">
        <p>
          Inquiry data is stored in access-controlled systems. We use technical and organizational
          safeguards intended to prevent unauthorized access, alteration, disclosure, or loss.
          Internet transmission can never be guaranteed to be completely secure.
        </p>
        <p>
          We retain inquiries for the period reasonably needed to continue the planning
          conversation, maintain service history, and protect the parties&apos; legitimate
          interests. Booking, transaction, tax, dispute, and safety records may be retained longer
          where necessary for the contract or required by law. We delete or anonymize information
          when it is no longer reasonably needed.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies and analytics">
        <p>
          The website uses necessary storage for security, forms and your saved privacy choice.
          Optional analytics and attribution storage remains disabled until you give consent. You
          can reject it or change your selection at any time through Cookie Preferences in the
          footer.
        </p>
        <p>
          See our <Link href="/cookies">Cookie Policy</Link> for the current categories, providers
          and purposes.
        </p>
      </LegalSection>

      <LegalSection title="7. Your choices and rights">
        <p>
          Subject to applicable law, you may ask to access, correct, delete, restrict, or receive a
          copy of personal information, or object to certain uses. You may withdraw consent where
          processing is based on consent. We may need to verify identity and may retain information
          that we are legally required or entitled to keep.
        </p>
      </LegalSection>

      <LegalSection title="8. Children">
        <p>
          Our services are arranged by adults. Information about children should be provided only by
          a parent, guardian, or authorized group organizer and only when necessary to plan or
          deliver the journey.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact and updates">
        <p>
          Privacy questions or requests can be sent to{" "}
          <a className="text-foreground underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          . Material changes will be published here with a revised effective date.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
