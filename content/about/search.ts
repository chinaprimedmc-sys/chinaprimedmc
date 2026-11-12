import { siteConfig } from "@/config/site";
import { companyIdentity } from "@/content/about/identity";

export const aboutSearch = {
  title: "About AVIORA China Travel: Team & Founder",
  description:
    "Meet Guohui Shi, founder of AVIORA China Travel. Explore our China team, operating company, private services and the details to check before booking.",
  facts: [
    {
      label: "Travel brand",
      value: "AVIORA China Travel",
      href: "/about",
      linkLabel: "Our approach to private travel",
    },
    {
      label: "Founder",
      value: companyIdentity.founderName,
      href: "/about/founder",
      linkLabel: "Meet our founder",
    },
    {
      label: "Legal operating company",
      value: siteConfig.operator.englishReferenceName,
      href: "/company",
      linkLabel: "Company identity and registration record",
    },
    {
      label: "Travel format",
      value: "Private journeys for your own party, with no compulsory shopping stops.",
      href: "/tailor-made-china-tours",
      linkLabel: "Explore how private journeys work",
    },
  ],
  identityAnswers: [
    {
      id: "aviora-and-china-prime-dmc",
      question: "Are AVIORA China Travel and China Prime DMC the same company?",
      answer: companyIdentity.tradeRelationship,
      href: "/company",
      linkLabel: "Check the legal company behind your booking",
    },
    {
      id: "who-founded-aviora",
      question: "Who founded AVIORA China Travel?",
      answer: companyIdentity.founderSummary,
      href: "/about/founder",
      linkLabel: "Read Guohui Shi’s founder’s letter",
    },
    {
      id: "when-registered",
      question: "Was AVIORA founded in 2018?",
      answer:
        "March 28, 2018 is the registration date of the legal operating company, Youyouhui (Guangzhou) International Travel Service Co., Ltd. It is not presented here as AVIORA’s brand founding date. Your written booking identifies the contracting company and agreed services.",
      href: "/company",
      linkLabel: "View the company registration information",
    },
    {
      id: "check-travel-company",
      question: "How can I check the company before booking a China tour?",
      answer:
        "Compare the legal name in the proposed booking with the company information, relevant registration and permit details, and payment instructions. Business registration and a travel-agency business permit are different records. Ask for the document or clarification you need before paying; a photograph, service claim or media appearance is not a substitute for that check.",
      href: "/company",
      linkLabel: "Follow our company verification steps",
    },
  ],
  reading: [
    {
      href: "/journal/how-to-choose-private-china-tour-company",
      title: "How to choose a private China tour company",
      text: "Compare responsibility, local coordination and the detail offered before making a decision.",
      query: "how to choose a private China tour company",
    },
    {
      href: "/journal/private-china-tour-proposal-checklist",
      title: "What should a private-tour proposal include?",
      text: "Check room basis, guide language, transport, exclusions and the status of essential requests.",
      query: "what should a private China tour quotation include",
    },
    {
      href: "/journal/how-to-pay-china-tour-operator-safely",
      title: "What to check before paying an operator",
      text: "Review the contracting party, payee, deposit and written cancellation conditions together.",
      query: "how to pay a China tour operator safely",
    },
    {
      href: "/journal/how-to-check-china-tour-guide-is-licensed",
      title: "Guide qualifications and service roles",
      text: "Understand the checks to make and why a driver, guide and specialist are different services.",
      query: "how to check a China tour guide is licensed",
    },
    {
      href: "/journal/china-tour-no-forced-shopping",
      title: "What no compulsory shopping means",
      text: "Distinguish requested shopping time from a mandatory retail stop in the itinerary.",
      query: "private China tour with no forced shopping",
    },
    {
      href: "/journal/private-china-tour-transfers-handoffs-support",
      title: "How transfers and local support connect",
      text: "Review meeting instructions, city-to-city handovers and the services included during travel.",
      query: "private China tour local support and transfers",
    },
  ],
} as const;

export function renderAboutVerificationGuide() {
  return `## Understanding AVIORA and checking your booking\n\n${aboutSearch.identityAnswers.map((item) => `### ${item.question}\n\n${item.answer}\n\nDetails: ${new URL(`/about#${item.id}`, siteConfig.url)}`).join("\n\n")}\n\n${aboutSearch.reading.map((item) => `- [${item.title}](${new URL(item.href, siteConfig.url)}): ${item.text}`).join("\n")}`;
}
