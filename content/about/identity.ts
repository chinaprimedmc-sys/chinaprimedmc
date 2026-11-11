import { siteConfig } from "@/config/site";

/** Shared first-party identity statements for visible pages and text feeds. */
export const companyIdentity = {
  founderName: "Guohui Shi",
  brandSummary:
    "AVIORA China Travel designs private, tailor-made journeys in China for international visitors. Founded by Guohui Shi, the brand brings together itinerary planning, hotels, guides, transport and local coordination through its registered China operating company.",
  operatorSummary: `AVIORA China Travel is operated by ${siteConfig.operator.englishReferenceName} (${siteConfig.operator.legalName}), registered in Guangzhou on March 28, 2018. Your written booking identifies the legal company responsible for the agreed travel services.`,
  tradeRelationship:
    "China Prime DMC is the travel-trade name used by AVIORA’s China operating team. It is also the name used for Guohui Shi in TTG Asia’s MATTA Connect report. AVIORA China Travel is the guest-facing brand; the written booking identifies the legal contracting company.",
  founderSummary:
    "Guohui Shi is the founder of AVIORA China Travel, a brand focused on private China journeys for international visitors. His approach emphasizes personal interests, realistic pacing and practical hospitality. AVIORA’s registered operating company is Youyouhui (Guangzhou) International Travel Service Co., Ltd.",
} as const;

export function renderCompanyIdentity() {
  return `${companyIdentity.brandSummary}\n\n${companyIdentity.operatorSummary}\n\n${companyIdentity.tradeRelationship}\n\nDate attribution: March 28, 2018 is the legal operating company’s registration date. An AVIORA brand founding date has not been established here.\nCompany record: ${siteConfig.url}/company\nFounder profile: ${siteConfig.url}/about/founder\nEvidence: AVIORA publishes its own service information and guest feedback. Its service figures are company-reported. TTG Asia’s event report records participation, not certification or endorsement.\n`;
}
