import type { Metadata } from "next";

import { LegalDocument, LegalList, LegalSection } from "@/components/legal";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms and Booking Conditions",
  description:
    "AVIORA booking terms for private China tours, including quotations, payment, changes, cancellation, suppliers, insurance and liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms and Booking Conditions"
      introduction={
        <p>
          These terms explain how website inquiries and private China bookings work. Your written
          proposal and booking confirmation contain the itinerary-specific price, payment schedule,
          cancellation terms, inclusions, and contracting details and take priority if they
          expressly differ from these general terms.
        </p>
      }
    >
      <LegalSection title="1. Brand and contracting entity">
        <p>
          AVIORA is the travel brand used on this website. “China Prime DMC” is a service name for
          our work in China. Unless your booking confirmation states otherwise, your travel services
          in China are contracted and provided by{" "}
          <strong className="text-foreground">{siteConfig.operator.englishReferenceName}</strong> (
          {siteConfig.operator.legalName}; English translation for reference), a company registered
          in Guangzhou on March 28, 2018 and {siteConfig.operator.tourismLicense.statement}.
        </p>
      </LegalSection>

      <LegalSection title="2. Website information and inquiries">
        <p>
          Website routes, hotels, durations, images, and descriptions are inspiration and planning
          examples. Sending an inquiry, receiving a route idea, or discussing availability does not
          create a booking. Details can change because of dates, availability, traveler needs,
          supplier conditions, local rules, weather, or operational constraints.
        </p>
      </LegalSection>

      <LegalSection title="3. When a booking becomes binding">
        <p>A booking becomes binding only when all of the following have occurred:</p>
        <LegalList>
          <li>we issue a written proposal, quotation, invoice, or booking confirmation;</li>
          <li>
            the lead traveler or authorized booking party signs or otherwise formally accepts the
            written travel contract and stated booking terms;
          </li>
          <li>the required initial payment is received in cleared funds; and</li>
          <li>we confirm acceptance and the relevant supplier arrangements in writing.</li>
        </LegalList>
        <p>
          The person making the booking confirms that they are at least 18, are authorized to act
          for all travelers named in the booking, and will make these terms and all booking details
          available to them.
        </p>
      </LegalSection>

      <LegalSection title="4. Price and payment">
        <LegalList>
          <li>
            The quotation states the currency, total price, included and excluded services, initial
            payment, balance due date, and accepted payment method.
          </li>
          <li>
            Prices are based on the traveler number, dates, rooming, transport, exchange
            assumptions, taxes, fees, and supplier availability stated in the proposal.
          </li>
          <li>
            Bank, card, platform, currency-conversion, and intermediary fees are borne as stated on
            the invoice. We never ask you to send card details by ordinary email.
          </li>
          <li>
            If a payment is not received by its due date, we may be unable to hold services and may
            treat the booking as cancelled after reasonable written notice.
          </li>
        </LegalList>
        <p>
          We do not publish a universal deposit percentage because rail tickets, hotels, permits,
          seasonal allocations, and special experiences have different supplier deadlines. The exact
          payment schedule is shown before you commit.
        </p>
      </LegalSection>

      <LegalSection title="5. Changes requested by travelers">
        <p>
          Change requests must be made in writing. We will try to accommodate them but cannot
          guarantee availability. Additional supplier charges, fare differences, administrative
          work, or non-refundable costs will be explained before a material change is confirmed
          where practicable. A reduction in traveler numbers may change the per-person price.
        </p>
      </LegalSection>

      <LegalSection title="6. Cancellation by the traveler">
        <p>
          Cancellation must be sent in writing by the lead traveler or authorized booking party and
          takes effect when we acknowledge receipt. The cancellation schedule in your accepted
          proposal or booking confirmation applies. Charges may include planning or administrative
          work already performed and amounts paid or committed to hotels, transport providers,
          ticketing systems, guides, permits, and other suppliers.
        </p>
        <p>
          Some services become non-refundable as soon as they are booked or issued. Where no
          itinerary-specific schedule has yet been accepted, we will identify and document
          reasonable, unrecoverable costs rather than inventing a blanket cancellation percentage.
          Travel insurance may cover qualifying cancellation reasons; claims are made directly to
          the insurer.
        </p>
      </LegalSection>

      <LegalSection title="7. Changes or cancellation by us">
        <p>
          Travel arrangements can require changes for safety, weather, closures, transport changes,
          government measures, or supplier failure. We may substitute a reasonably comparable
          service or adjust sequence and timing while preserving the overall character of the
          journey where possible.
        </p>
        <p>
          If we cancel a material service for reasons within our control and cannot provide a
          reasonable alternative, the booking confirmation will govern the refund or credit for the
          affected service. We are not required to refund services already properly performed or
          costs that cannot reasonably be recovered from independent suppliers because of
          extraordinary circumstances, subject always to mandatory law.
        </p>
      </LegalSection>

      <LegalSection title="8. Extraordinary circumstances">
        <p>
          Events beyond reasonable control can include severe weather, natural disaster, epidemic,
          war, civil disturbance, government action, border restriction, transport disruption,
          closure, cyber incident, labor action, or other serious safety or operational event. We
          will provide reasonable assistance and alternatives, but additional accommodation,
          transport, meals, insurance, visa, or repatriation costs remain the traveler&apos;s
          responsibility unless the accepted booking terms or mandatory law provide otherwise.
        </p>
      </LegalSection>

      <LegalSection title="9. Passports, visas, health, and suitability">
        <LegalList>
          <li>
            Travelers are responsible for valid passports, visas, transit permissions, entry rules,
            vaccinations, medication, and other personal documentation.
          </li>
          <li>
            Visa and entry information we share is general and can change. Confirm current rules
            with the relevant embassy, consulate, or official authority before travel.
          </li>
          <li>
            Tell us before confirmation about mobility, health, dietary, accessibility, age, or
            other needs that may affect suitability or safe delivery. We will not knowingly promise
            arrangements that suppliers cannot reasonably provide.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="10. Traveler conduct and safety">
        <p>
          Travelers must follow reasonable safety instructions, local laws, site rules, and supplier
          conditions and must not endanger other people or materially disrupt services. We may take
          proportionate action, including ending an affected service, where conduct creates a
          serious safety, legal, or operational risk. Resulting costs are the traveler&apos;s
          responsibility to the extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="11. Independent suppliers">
        <p>
          Hotels, airlines, rail operators, attractions, restaurants, and some transport or activity
          providers are independent suppliers. Their conditions may apply in addition to ours. We
          select and coordinate suppliers with reasonable care, but schedules, access, and service
          delivery can remain subject to their operational control and applicable law.
        </p>
      </LegalSection>

      <LegalSection title="12. Insurance">
        <p>
          We strongly recommend comprehensive travel insurance from the time of booking, including
          appropriate medical care, evacuation, trip cancellation, interruption, baggage, personal
          liability, and activities planned. It is the traveler&apos;s responsibility to understand
          exclusions, limits, and claim procedures.
        </p>
      </LegalSection>

      <LegalSection title="13. Liability">
        <p>
          We are responsible for providing contracted services with reasonable care and skill,
          subject to the accepted booking documents and mandatory law. We are not responsible for
          loss caused by traveler acts or omissions, undisclosed needs, independent events we could
          not reasonably prevent, or services arranged independently by the traveler.
        </p>
        <p>
          Nothing in these terms excludes or limits liability where doing so would be unlawful,
          including liability that cannot legally be excluded for personal injury, fraud, or
          deliberate misconduct. Any contractual liability cap or applicable international
          convention will be stated or incorporated in the booking confirmation where relevant.
        </p>
      </LegalSection>

      <LegalSection title="14. Complaints and assistance">
        <p>
          Raise a service concern promptly with the guide, local contact, or our team so there is a
          fair opportunity to help while you are traveling. If the matter is not resolved, send a
          written summary and supporting documents to{" "}
          <a className="text-foreground underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>{" "}
          as soon as reasonably possible after the journey.
        </p>
      </LegalSection>

      <LegalSection title="15. Law, disputes, and general terms">
        <p>
          Unless the booking confirmation expressly states otherwise, the booking is governed by the
          laws of the People&apos;s Republic of China. The parties should first try to resolve a
          dispute through good-faith written discussion. If it cannot be resolved, it may be brought
          before a competent court at the China operating company&apos;s registered location,
          without limiting any consumer right or remedy that cannot lawfully be excluded.
        </p>
        <p>
          If a provision is invalid, the remaining provisions continue to apply. A delay in
          enforcing a right is not a waiver. These general terms, the accepted proposal, invoice,
          and booking confirmation form the agreement and replace earlier statements about the same
          booking.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
