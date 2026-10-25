export const siteConfig = {
  name: "AVIORA",
  siteName: "AVIORA China Travel",
  url: "https://www.chinaprimedmc.com",
  description:
    "AVIORA China Travel plans private China tours for international travelers, with offices in Beijing, Shanghai and Xi'an and a Guangzhou-registered China operator coordinating routes, hotels, guides, transport and local support.",
  email: "chinaprimedmc@gmail.com",
  phone: "+86 180 2743 8191",
  phoneHref: "tel:+8618027438191",
  ogImage: "/og/aviora-private-china-tours-social-v2.webp",
  logo: "/brand/aviora-logo.jpg",
  operator: {
    legalName: "游友汇（广州）国际旅行社有限公司",
    englishReferenceName: "Youyouhui (Guangzhou) International Travel Service Co., Ltd.",
    founded: "2018-03-28",
    locality: "Guangzhou",
    officeCities: ["Beijing", "Shanghai", "Xi'an"],
    address: {
      streetAddress:
        "Room 301, Building D, No. 66 Nanxing Road, Nanpai Village, Shilou Town, Panyu District",
      addressLocality: "Guangzhou",
      addressRegion: "Guangdong",
      addressCountry: "China",
      full: "Room 301, Building D, No. 66 Nanxing Road, Nanpai Village, Shilou Town, Panyu District, Guangzhou, Guangdong, China",
    },
    country: "CN",
    tourismLicense: {
      shortLabel: "Licensed inbound tourism operator",
      statement: "licensed to conduct inbound tourism business in China",
    },
  },
  socials: [
    "https://www.facebook.com/p/Aviora-Travel-61593357154006/",
    "https://www.instagram.com/chinaprimedmc/",
  ],
  entity: {
    /** Names that may appear in search, contracts and trade conversations. */
    aliases: ["AVIORA Travel", "AVIORA China Travel", "China Prime DMC"],
    guestBrandRelationship:
      "AVIORA China Travel is the guest-facing travel brand. China Prime DMC is the trade-facing DMC brand. Both operate through the same Guangzhou-registered legal operator.",
    services: [
      "Private tailor-made China journeys",
      "Private China day tours",
      "Guide, driver and transport coordination",
      "China ground handling for travel trade partners",
    ],
    reviewPolicy:
      "Only guest feedback that has been approved for publication and authorized for website use is displayed. New feedback is not published until AVIORA has reviewed the submission and its supporting booking or manual verification record.",
    editorialPolicy:
      "AVIORA distinguishes its own operating judgment and service policy from third-party rules. Time-sensitive visitor rules are linked to primary official sources and reviewed on a scheduled basis.",
    correctionEmail: "chinaprimedmc@gmail.com",
  },
} as const;
