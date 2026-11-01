export const siteConfig = {
  name: "AVIORA",
  siteName: "AVIORA China Travel",
  url: "https://www.chinaprimedmc.com",
  description:
    "AVIORA China Travel plans private China tours for international travelers throughout China, with offices in Beijing, Shanghai and Xi'an and a Guangzhou-registered China operator coordinating routes, hotels, guides, transport and local support.",
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
  /** 导游服务语言：对外所有语言说明以此为准，具体语种与日期的可用性以书面确认为准。 */
  guideLanguages: [
    "English",
    "French",
    "German",
    "Spanish",
    "Russian",
    "Italian",
    "Japanese",
    "Chinese",
    "Thai",
  ],
  socials: [
    "https://www.facebook.com/p/Aviora-Travel-61593357154006/",
    "https://www.instagram.com/chinaprimedmc/",
  ],
  entity: {
    /** Names that may appear in search, contracts and trade conversations. */
    aliases: ["AVIORA", "AVIORA Travel", "AVIORA China Travel"],
    guestBrandRelationship:
      "AVIORA China Travel (AVIORA) is a travel brand for individual international travelers, operated by a Guangzhou-registered, licensed inbound tourism company.",
    services: [
      "Private tailor-made China journeys",
      "Private China day tours",
      "Private guide, driver and transport coordination",
    ],
    reviewPolicy:
      "Only guest feedback that has been approved for publication and authorized for website use is displayed. New feedback is not published until AVIORA has reviewed the submission and its supporting booking or manual verification record.",
    editorialPolicy:
      "AVIORA distinguishes its own operating judgment and service policy from third-party rules. Time-sensitive visitor rules are linked to primary official sources and reviewed on a scheduled basis.",
    correctionEmail: "chinaprimedmc@gmail.com",
  },
} as const;
