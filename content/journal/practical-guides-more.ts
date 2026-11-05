/**
 * 本模块职责：2026-10 批次的后 6 篇指南——小费、导游核验、保险、九寨沟时令、二刷中国、安全付款。
 * 输入：无运行时输入，内容为人工撰写，写作工具复用 practical-guides.ts。
 * 输出：JournalArticle 列表，由 published.ts 汇入公开目录。
 * 不负责：价格数字（以 /terms 与 catalog 为准）、路由与结构化数据。
 * 关键规则：第三方做法一律写成"常见做法"并注明来源；本公司的政策只引用 /terms 与 /company 已公开的内容。
 */

import type { JournalArticle } from "@/types/journal";
import {
  build,
  cta,
  faq,
  h,
  note,
  ol,
  p,
  photos,
  table,
  ul,
  warn,
  type Spec,
} from "@/content/journal/practical-guides";

const specs: Spec[] = [
  /* 5 ─────────────────────────────────────────────────────────── */
  {
    slug: "china-tipping-guide-guides-drivers-hotels",
    title: "Tipping in China: What to Give Guides, Drivers and Hotel Staff",
    dek: "Tipping is not part of daily life in China, but it is a recognised courtesy on private tours. Here is who, how much and how to hand it over.",
    excerpt:
      "A practical guide to tipping in China: when it is expected, commonly quoted amounts for guides and drivers, how to give it and where to skip it.",
    category: "Travel Guides",
    tags: ["first-time-china", "private-guides"],
    readingTime: "6 min read",
    hero: photos.tea,
    heroEyebrow: "Etiquette, simply",
    seoTitle: "Tipping in China: Guides, Drivers and Hotels",
    seoDescription:
      "How much to tip in China: commonly quoted amounts for private guides and drivers, how to hand it over, and where tipping is not expected at all.",
    keywords: [
      "tipping in China",
      "how much to tip tour guide China",
      "tipping driver China",
      "China tipping etiquette",
    ],
    related: {
      destinations: ["beijing", "shanghai"],
      tours: ["beijing-xian-shanghai-private-10-day-tour"],
      articles: [
        "private-guide-vs-driver-china",
        "what-is-included-private-china-tour",
        "china-mobile-payments-foreign-tourists",
        "first-trip-to-china-planning-guide",
      ],
    },
    conversion: {
      eyebrow: "No surprises in the proposal",
      title: "See exactly what is and is not included.",
      description:
        "Our proposals state what is included and what is excluded, including gratuities, before you pay.",
      label: "Request a proposal",
      href: "/start-planning?source=journal-china-tipping",
    },
    contentType: "practical",
    decisionStage: "prepare",
    keyAnswer:
      "Tipping is not expected in everyday life in China. For private guides and drivers it is a customary courtesy, not an obligation. Commonly quoted guidance is about RMB 100 to 200 per day for a guide and RMB 50 to 100 per day for a driver, given by the whole group in cash, not per person.",
    appliesTo: ["First-time visitors", "Private tour travelers", "Families"],
    operatorRead:
      "Tip for good service, not by formula. Commonly quoted amounts are a starting point, and the group gives one amount, not each person.",
    changeWhen:
      "Your party is large, your guide changes between cities, or you received service well beyond the ordinary.",
    relatedJourneyReason:
      "Gratuities are listed as not included on our published journeys, so this guide helps you plan for them.",
    watchFor:
      "Amounts quoted online mostly come from tour operators and are conventions, not rules. Foreign currency is awkward for staff to spend.",
    citations: [
      {
        name: "Tipping in China: How to Tip When Joining a China Tour Group",
        url: "https://www.travelchinaguide.com/essential/tipping.htm",
        publisher: "Travel China Guide",
      },
      {
        name: "Tipping customs in Asia",
        url: "https://www.lonelyplanet.com/articles/tipping-customs-asia",
        publisher: "Lonely Planet",
      },
    ],
    content: [
      h("The short answer"),
      p(
        "You do not need to tip in everyday life in China. Restaurants, taxis and most hotels do not expect it. On a private tour, however, tipping your guide and driver at the end of the day or trip is a recognised courtesy, and many international visitors do it. It is a thank-you, not a requirement, and you should give it for service you appreciated.",
      ),
      h("What people commonly give"),
      p(
        "Published guidance varies, and most of it comes from tour operators, so treat these figures as conventions rather than rules. The most commonly quoted range is below, with lower figures also cited by some sources.",
      ),
      table(
        ["Who", "Commonly quoted", "Lower end cited", "Paid by"],
        [
          "Private guide",
          "RMB 100–200 per day",
          "RMB 50–100 per day",
          "The group, not each person",
        ],
        ["Private driver", "RMB 50–100 per day", "RMB 30–50 per day", "The group, per vehicle"],
        ["Restaurant, taxi", "Not expected", "-", "-"],
        ["Hotel porter", "Optional small amount", "-", "You, if you wish"],
      ),
      p(
        "Lonely Planet notes that guides and drivers in China do not expect tips, while operator guides describe a tip as a highly appreciated gesture that has become customary for international groups. Both are true: it is welcome, not demanded.",
      ),
      h("A worked example"),
      p(
        "On a ten-day journey with seven guided days, using the commonly quoted range, a group might give roughly RMB 700–1,400 to the guide and RMB 350–700 to the driver across the trip. That is a total for the whole party, so a family of four divides it. If your guide changes between cities, divide the amount by the days each person worked with you.",
      ),
      h("How to give it"),
      ul(
        "**Use cash in RMB.** Foreign currency is hard for staff to spend, and tipping through payment apps is not straightforward for visitors.",
        "**Put it in an envelope.** A plain envelope handed over discreetly at the end of the day or the trip is the usual way.",
        "**Give it directly.** Hand it to the person who served you, not to the office.",
        "**Say thank you.** A short, warm comment about what you enjoyed is often valued as much as the money.",
      ),
      h("What our proposals say"),
      p(
        "Gratuities for hosts, guides and drivers are listed as not included in our proposals, so they never appear as a hidden charge. You decide whether and how much to give. If you are unhappy with a guide or driver, tell us during the trip so we can fix it; do not use a tip as the only signal.",
      ),
      note(
        "Where tipping is not expected",
        "Restaurants, taxis, bars and most hotel staff do not expect tips, and some will politely refuse. Do not feel obliged outside your private guide and driver.",
      ),
      cta(
        "Know the full price before you commit",
        "Request a written proposal and see inclusions, exclusions and gratuities set out clearly.",
        "/start-planning?source=journal-china-tipping-mid",
        "Request a proposal",
      ),
      faq(
        "Should I tip in US dollars?",
        "Cash RMB is easier to spend. Foreign currency can be inconvenient for guides and drivers to exchange, so we suggest carrying small RMB notes for this purpose.",
      ),
      faq(
        "Do I tip each guide in each city?",
        "If you have different guides in different cities, tip each one for the days they worked with you. Our guide and driver arrangement is described in our [guide versus driver article](/journal/private-guide-vs-driver-china).",
      ),
      faq(
        "Is it rude not to tip?",
        "No. Tipping is voluntary in China, and not tipping is not considered rude, especially outside private tours.",
      ),
    ],
  },

  /* 6 ─────────────────────────────────────────────────────────── */
  {
    slug: "how-to-check-china-tour-guide-is-licensed",
    title: "How to Check a China Tour Guide Is Licensed (and Why It Matters)",
    dek: "Two things need checking: the company that sells your tour and the person who leads it. Here is what to ask, what to look for and what to do if answers are vague.",
    excerpt:
      "Learn how to verify a China tour operator and a tour guide's credentials, what a working guide card shows and the red flags to avoid.",
    category: "Travel Guides",
    tags: ["private-guides", "first-time-china"],
    readingTime: "7 min read",
    hero: photos.summerPalace,
    heroEyebrow: "Verify before you pay",
    seoTitle: "How to Check a China Tour Guide Is Licensed",
    seoDescription:
      "How to verify a China tour guide and the operator behind your trip: what a guide card shows, questions to ask in advance and red flags to avoid.",
    keywords: [
      "China tour guide license",
      "verify China tour guide",
      "licensed tour guide China",
      "check China travel agency license",
    ],
    related: {
      destinations: ["beijing", "xian"],
      tours: ["beijing-xian-shanghai-private-10-day-tour"],
      articles: [
        "how-to-choose-private-china-tour-company",
        "private-guide-vs-driver-china",
        "private-china-tour-proposal-checklist",
        "what-private-support-changes-first-china-trip",
      ],
    },
    conversion: {
      eyebrow: "Ask us the same questions",
      title: "See who operates your trip before you pay.",
      description:
        "We publish our operating company and licensing details and are glad to answer your verification questions in writing.",
      label: "Ask about our team",
      href: "/start-planning?source=journal-guide-license",
    },
    contentType: "operator",
    decisionStage: "evaluate",
    keyAnswer:
      "Check two layers: the travel company that contracts your tour, using its registered legal name, and the guide, who should hold a tour guide qualification and carry a working guide ID with a QR code that authorities and travelers can scan. Ask for the guide's name and credentials before arrival and be wary of vague answers.",
    appliesTo: ["First-time visitors", "Private tour travelers", "Families"],
    operatorRead:
      "Verify the company that contracts your tour and the guide who leads it as two separate checks, and do both before you pay.",
    changeWhen:
      "The operator cannot name the guide, the legal entity or the payment account before you are asked to pay.",
    relatedJourneyReason:
      "A private journey names the operating company and builds guide and driver coverage into a written proposal you can check.",
    watchFor:
      "A guide who approaches you offering a private tour, an operator that will not name its company, or a request to pay a personal account.",
    citations: [
      {
        name: "Certificate of Tour Guide",
        url: "https://baike.baidu.com/en/item/Certificate%20of%20Tour%20Guide/1477707",
        publisher: "Baidu Baike",
      },
    ],
    content: [
      h("The short answer"),
      p(
        "Verify two things separately. First, the company that sells and operates your tour: ask for its registered legal name and check it against official records. Second, the guide: a person leading paid tours in China is expected to hold a tour guide qualification and carry a working guide ID. Both can be asked about before you pay, and a good operator will answer without hesitation.",
      ),
      h("Layer one: the company behind the tour"),
      ul(
        "**Legal name.** Ask for the registered company name and operating location, not just a brand name.",
        "**Licence.** Ask for the travel agency licence or permit details and check them with the local culture and tourism authority.",
        "**Contract.** The entity on your contract and payment instructions should match the licensed company.",
        "**Contact.** Look for a real address, phone and named contacts rather than a form only.",
      ),
      p(
        "For transparency, AVIORA is operated by Youyouhui (Guangzhou) International Travel Service Co., Ltd., a registered China company licensed for inbound tourism, and we publish company details on our [company and licensing page](/company). Our [operator selection guide](/journal/how-to-choose-private-china-tour-company) covers more checks.",
      ),
      h("Layer two: the guide"),
      p(
        "China issues tour guide qualifications and, for working guides, an ID card that shows the guide is registered to a travel company or guide service. Reporting on the current system describes an electronic certificate held on the guide's phone, with a QR code on the card that officials and travelers can scan to verify details. The qualification alone is not the same as permission to lead tours: a guide also needs to be registered with a licensed company.",
      ),
      note(
        "Be careful with details",
        "We could not find a single official English page that sets out every verification step, and cards and platforms are updated from time to time. Treat the QR check as one tool, and ask your operator to show you what a valid card looks like.",
      ),
      h("Questions to ask before you arrive"),
      ul(
        "What is my guide's name, and can I have their WhatsApp number in advance?",
        "Which company is the guide registered with?",
        "Which languages does the guide speak at a professional level?",
        "Is the driver also the guide, or are they two people? (See our [guide versus driver article](/journal/private-guide-vs-driver-china).)",
        "Who do I call if the guide does not turn up?",
      ),
      h("Red flags"),
      ul(
        'A "guide" who approaches you at an airport, station or attraction offering a private tour.',
        "An operator who will not name the company or guide.",
        "Payment requested to a personal account instead of the company.",
        "Pressure to pay before you have a written itinerary.",
        "A guide who steers you to shops and gives vague answers about why.",
      ),
      cta(
        "Know who is meeting you",
        "Ask us who your guide will be, which company contracts them and how we support them during your trip.",
        "/start-planning?source=journal-guide-license-mid",
        "Ask about our team",
      ),
      faq(
        "Is a driver allowed to guide?",
        "A driver's role is to drive. Guiding at sites is normally a separate, licensed role. Ask whether your package includes a guide, a driver or both, and see our [guide versus driver explanation](/journal/private-guide-vs-driver-china).",
      ),
      faq(
        "Can I hire a guide independently on arrival?",
        "You can, but you take on the risk of checking credentials and handling any problem yourself. A private operator verifies and briefs the guide for you and answers when plans change.",
      ),
      faq(
        "What does a private operator add beyond the guide?",
        "Ticket handling, supplier confirmations, vehicle booking, and a team that responds when something changes. Read [what private support changes on a first trip](/journal/what-private-support-changes-first-china-trip).",
      ),
    ],
  },

  /* 7 ─────────────────────────────────────────────────────────── */
  {
    slug: "china-travel-insurance-for-private-tours",
    title: "China Travel Insurance: What a Private Tour Traveler Should Cover",
    dek: "What to look for in a policy for a multi-city China trip, the questions to ask your insurer and how insurance fits with an operator's cancellation terms.",
    excerpt:
      "Choose travel insurance for China: medical care and evacuation, cancellation, altitude, baggage and documents to keep for claims.",
    category: "Travel Guides",
    tags: ["first-time-china", "private-guides"],
    readingTime: "7 min read",
    hero: photos.zhangjiajie,
    heroEyebrow: "Prepare for the unexpected",
    seoTitle: "China Travel Insurance: What to Cover Before You Go",
    seoDescription:
      "What China travel insurance should cover for a private multi-city trip: medical, evacuation, cancellation, altitude, baggage and how to claim.",
    keywords: [
      "China travel insurance",
      "travel insurance for China trip",
      "medical evacuation China",
      "cancellation insurance China tour",
    ],
    related: {
      destinations: ["jiuzhaigou", "zhangjiajie"],
      tours: ["chengdu-pandas-jiuzhaigou-private-7-day-tour"],
      articles: [
        "china-travel-safety-for-foreign-visitors",
        "china-travel-emergency-support-what-to-do",
        "jiuzhaigou-altitude-walking-accessibility",
        "yunnan-altitude-private-tour",
      ],
    },
    conversion: {
      eyebrow: "Understand the cancellation terms first",
      title: "Read our terms before you choose cover.",
      description:
        "Your proposal states payment dates and the cancellation schedule so you can match your insurance to them.",
      label: "Request a proposal",
      href: "/start-planning?source=journal-china-insurance",
    },
    contentType: "practical",
    decisionStage: "prepare",
    keyAnswer:
      "A China trip policy should cover medical care and evacuation, cancellation and interruption, baggage and the specific activities and altitudes on your itinerary. Declare existing conditions, buy cancellation cover soon after you pay a deposit, and keep receipts and any police report for claims.",
    appliesTo: ["First-time visitors", "Families", "Older travelers", "Nature travelers"],
    operatorRead:
      "A private operator coordinates services and responds to problems, but it does not replace your own medical, evacuation and cancellation cover.",
    changeWhen:
      "Your route reaches high ground, you travel with children or older relatives, or you hold a pre-existing condition.",
    relatedJourneyReason:
      "Altitude routes such as Chengdu to Jiuzhaigou are the ones where checking your policy's limits matters most.",
    watchFor:
      "Altitude limits, existing-condition rules and the window for buying cancellation cover after your first payment.",
    citations: [
      {
        name: "China travel advice: warnings and insurance",
        url: "https://www.gov.uk/foreign-travel-advice/china",
        publisher: "UK Foreign, Commonwealth & Development Office",
      },
    ],
    content: [
      h("The short answer"),
      p(
        "Buy travel insurance for any China trip, and match it to your actual itinerary. The UK government's China travel advice puts it plainly: insurance should cover your itinerary, planned activities and expenses in an emergency. For a private multi-city journey that means medical care and evacuation, cancellation and interruption, baggage and documents, and a check on any altitude or activity limits.",
      ),
      h("What to cover and what to ask"),
      table(
        ["Cover", "Why it matters in China", "Ask your insurer"],
        [
          "Medical care",
          "You may need treatment far from home and may have to arrange payment during the visit.",
          "Does the policy pay providers directly or reimburse me later?",
        ],
        [
          "Medical evacuation",
          "Remote destinations can be far from major hospitals.",
          "What triggers evacuation, and who arranges it?",
        ],
        [
          "Cancellation",
          "Non-refundable hotels, trains and tickets can become costly if you cannot travel.",
          "Which reasons are covered, and by when must I buy cover?",
        ],
        [
          "Interruption and delay",
          "Weather and rail changes can disrupt a connected route.",
          "What is covered if I miss a connection?",
        ],
        [
          "Baggage and documents",
          "Pickpocketing is the most common problem visitors report.",
          "What are the limits, and do I need a police report?",
        ],
        [
          "Activities and altitude",
          "Jiuzhaigou, Yunnan and mountain routes include altitude and long walks.",
          "Are there altitude or activity exclusions?",
        ],
      ),
      h("Timing and conditions"),
      ul(
        "**Buy soon after your first payment.** Cancellation cover often depends on buying within a set period after you pay a deposit; check the exact window with your insurer.",
        "**Declare existing conditions.** Failing to disclose can invalidate a claim.",
        "**Read the altitude rule.** If your route reaches high ground, confirm cover applies there. See our guides for [Jiuzhaigou](/journal/jiuzhaigou-altitude-walking-accessibility) and [Yunnan](/journal/yunnan-altitude-private-tour).",
        "**Check family and age limits.** Some policies change terms for older travelers or children.",
      ),
      h("How insurance fits with our cancellation terms"),
      p(
        "Our standard cancellation schedule applies charges that rise as departure approaches, and your proposal states any stricter supplier conditions before you pay. Travel insurance should be arranged to cover those costs and other risks, because a change of mind or a personal circumstance is normally treated as a traveler cancellation. You can read our [booking terms](/terms) in full.",
      ),
      h("If something goes wrong"),
      ul(
        "In an emergency, call 120 for an ambulance or tell your guide immediately. Do not delay treatment over paperwork.",
        "Keep every receipt and medical document.",
        "For theft, ask for a written police report, which insurers often require.",
        "Notify your insurer as soon as practical, and tell our China team so we can help with logistics.",
      ),
      warn(
        "We are not your insurer",
        "AVIORA coordinates local services and responds to problems, but travel insurance is a separate contract. Confirm what yours covers in writing before you travel.",
      ),
      cta(
        "Plan around your cover",
        "Share your route and dates and we will point out where altitude, activities and flexibility matter for your policy.",
        "/start-planning?source=journal-china-insurance-mid",
        "Request a proposal",
      ),
      faq(
        "Do I need insurance if my tour is fully private?",
        "Yes. A private operator organises services and responds to problems, but it does not replace medical, evacuation or cancellation cover that you hold personally.",
      ),
      faq(
        "Does standard insurance cover high-altitude destinations?",
        "Not always. Some policies exclude or limit cover above certain altitudes. Check the policy wording for the specific places on your route.",
      ),
      faq(
        "Should I buy insurance before or after paying a deposit?",
        "Buy soon after your first payment. Many policies require you to purchase within a window after the initial deposit for cancellation cover to apply, so confirm the exact period with your insurer.",
      ),
    ],
  },

  /* 8 ─────────────────────────────────────────────────────────── */
  {
    slug: "best-time-to-visit-jiuzhaigou",
    title: "Best Time to Visit Jiuzhaigou: Autumn Color, Crowds and Seasons",
    dek: "When the lakes look their best, when the valley is busiest and how to plan around daily visitor limits and the autumn holiday.",
    excerpt:
      "Choose the best time to visit Jiuzhaigou with a season-by-season guide to autumn foliage, crowds, daily limits and weather.",
    category: "Destinations",
    tags: ["chengdu", "autumn", "spring"],
    readingTime: "7 min read",
    hero: photos.jiuzhaigou,
    heroEyebrow: "Plan the season",
    seoTitle: "Best Time to Visit Jiuzhaigou: Season-by-Season Guide",
    seoDescription:
      "The best time to visit Jiuzhaigou: autumn color and crowds, spring and summer, winter, daily visitor limits and how to book around the October holiday.",
    keywords: [
      "best time to visit Jiuzhaigou",
      "Jiuzhaigou autumn colors",
      "Jiuzhaigou in October",
      "Jiuzhaigou crowds",
    ],
    related: {
      destinations: ["jiuzhaigou", "chengdu"],
      tours: ["chengdu-pandas-jiuzhaigou-private-7-day-tour"],
      articles: [
        "chengdu-jiuzhaigou-7-day-itinerary",
        "jiuzhaigou-altitude-walking-accessibility",
        "chengdu-to-jiuzhaigou-transport",
        "china-golden-week-travel-2026",
      ],
    },
    conversion: {
      eyebrow: "Book the timing, not just the trip",
      title: "Tell us your month and we will check the timing.",
      description:
        "Share your preferred dates. We will advise on crowds, visibility and the timed entry system before you commit.",
      label: "Plan Jiuzhaigou",
      href: "/start-planning?source=journal-jiuzhaigou-season",
    },
    contentType: "practical",
    decisionStage: "prepare",
    keyAnswer:
      "Late September to early November is the usual best window for Jiuzhaigou, with peak autumn color commonly reported between mid and late October. The first week of October is the busiest. Book well ahead, because entry is timed and the official site lists daily visitor entries and sold-out notices.",
    appliesTo: ["Nature travelers", "Photographers", "Families"],
    operatorRead:
      "Autumn is the strongest season for color, and also the most crowded. Aim for days outside the first week of October if you can.",
    changeWhen:
      "Your dates fall in the early-October holiday, you are sensitive to altitude, or you can only travel in winter.",
    relatedJourneyReason:
      "The seven-day Chengdu and Jiuzhaigou journey is built around the lakes, with altitude-aware planning.",
    watchFor:
      "Foliage peaks move from year to year and sources disagree on the week. Entry is timed, and busy dates can sell out.",
    citations: [
      {
        name: "Jiuzhaigou Scenic Area official website",
        url: "https://www.jiuzhai.com/",
        publisher: "Jiuzhaigou Scenic Area Administration Bureau",
      },
    ],
    content: [
      h("The short answer"),
      p(
        "The best time to visit Jiuzhaigou is late September to early November, when autumn color meets clear light. Sources place peak foliage in the second half of October but disagree on the exact week, and the timing moves with the year. The price of the most beautiful weeks is crowds, especially during China's early-October holiday.",
      ),
      h("Season by season"),
      table(
        ["Season", "What to expect", "Our view"],
        [
          "Spring (Apr–May)",
          "Fresh green, cool mornings, fewer visitors",
          "Good, with changeable weather",
        ],
        [
          "Summer (Jun–Aug)",
          "Lush forest, higher water, more rain and domestic holiday crowds",
          "Beautiful but busy",
        ],
        [
          "Early autumn (Sep)",
          "Clear skies, color beginning, fewer crowds",
          "Excellent value timing",
        ],
        [
          "Peak autumn (Oct)",
          "Strongest color, heaviest crowds around the first week",
          "Spectacular, book early",
        ],
        [
          "Late autumn (early Nov)",
          "Fading color, cold mornings, thinner crowds",
          "Quiet and atmospheric",
        ],
        [
          "Winter (Dec–Mar)",
          "Cold, possible ice and snow, very few visitors",
          "Peaceful, dress warmly",
        ],
      ),
      h("The October holiday problem"),
      p(
        "China's National Day holiday begins on 1 October and brings the heaviest domestic travel of the year. At Jiuzhaigou that means long lines and a less enjoyable visit, which is why many planners suggest the days just after the holiday, or late September, when color is still strong and crowds are lighter. Our [Golden Week guide](/journal/china-golden-week-travel-2026) explains how the holiday affects transport and hotels.",
      ),
      h("Daily limits and timed entry"),
      p(
        "Jiuzhaigou limits entry. The official scenic-area website lists daily visitor entries, with figures around 41,000 for several dates, and publishes sold-out notices when capacity is reached. Entry is by reservation, and in autumn operators commonly advise booking well ahead. Prices and rules change, so confirm current details on the [official site](https://www.jiuzhai.com/) or through your operator.",
      ),
      h("Planning around altitude and weather"),
      ul(
        "The valley sits at altitude; give yourself an easy day in Chengdu first and read our [altitude and walking guide](/journal/jiuzhaigou-altitude-walking-accessibility).",
        "Mornings are cold even in autumn, so pack layers and a rain shell.",
        "Weather changes quickly in the mountains, so keep one flexible day if you can.",
        "Transport between Chengdu and Jiuzhaigou takes real time; see [Chengdu to Jiuzhaigou transport](/journal/chengdu-to-jiuzhaigou-transport).",
      ),
      note(
        "A good compromise",
        "If your dates are flexible, the days just after the early-October holiday or the first part of November often combine good color with fewer people. Avoid planning around a single exact date.",
      ),
      cta(
        "Choose dates with the crowds in mind",
        "Tell us your month. We will check entry timing, altitude and the best order of days.",
        "/start-planning?source=journal-jiuzhaigou-season-mid",
        "Plan Jiuzhaigou",
      ),
      faq(
        "Is Jiuzhaigou worth visiting in October?",
        "Yes, for color, but go with realistic expectations about crowds. Book early, aim for days outside the first week of October, and start the day early.",
      ),
      faq(
        "Can I visit Jiuzhaigou in winter?",
        "Yes. It is cold and quiet, and some visitors prefer it for that reason. Expect lower temperatures and possible ice, and dress accordingly.",
      ),
      faq(
        "Do I need to book Jiuzhaigou tickets in advance?",
        "Yes, in busy periods in particular. Entry is timed and capacity is limited, and the official site publishes sold-out notices. Your operator can reserve entry once dates are confirmed.",
      ),
    ],
  },

  /* 9 ─────────────────────────────────────────────────────────── */
  {
    slug: "second-trip-to-china-where-to-go-next",
    title: "Second Trip to China: Where to Go After the Classics",
    dek: "You have seen the Great Wall and Shanghai. Here is how to choose a second trip by what you loved, with routes that feel nothing like the first.",
    excerpt:
      "Plan a second trip to China by interest: landscapes, food and cities, highland culture or desert and Silk Road heritage, with region-by-region guidance.",
    category: "Destinations",
    tags: ["luxury-travel", "chengdu", "food"],
    readingTime: "7 min read",
    hero: photos.chongqing,
    heroEyebrow: "Go beyond the classics",
    seoTitle: "Second Trip to China: Where to Go After Beijing",
    seoDescription:
      "Plan a second trip to China after Beijing, Xi'an and Shanghai: choose by interest, from Zhangjiajie and Sichuan to Yunnan and Ningxia.",
    keywords: [
      "second trip to China",
      "where to go in China after Beijing",
      "China itinerary for repeat visitors",
      "off the beaten path China",
    ],
    related: {
      destinations: ["chengdu", "chongqing", "zhangjiajie"],
      tours: [
        "chengdu-chongqing-zhangjiajie-private-11-day-tour",
        "luxury-yunnan-private-tour",
        "muslim-friendly-china-tour-great-wall-desert-stars",
      ],
      articles: [
        "chengdu-chongqing-zhangjiajie-itinerary",
        "jiuzhaigou-or-zhangjiajie",
        "yunnan-itinerary-10-days",
        "how-difficult-is-zhangjiajie",
      ],
    },
    conversion: {
      eyebrow: "Build a route that feels new",
      title: "Tell us what you loved the first time.",
      description:
        "Share your first trip and what you want more or less of. We will propose a second route that does not repeat it.",
      label: "Plan my second trip",
      href: "/start-planning?source=journal-second-trip",
    },
    contentType: "route",
    decisionStage: "prepare",
    keyAnswer:
      "Choose a second China trip by what you enjoyed on the first: dramatic landscapes point to Zhangjiajie and Jiuzhaigou, food and city energy to Chengdu and Chongqing, culture at a slower pace to Yunnan, and desert and Hui heritage to Ningxia. Pick one or two regions rather than four.",
    appliesTo: ["Repeat visitors", "Couples", "Food and nature travelers"],
    operatorRead:
      "Choose a second trip by what you enjoyed the first time, and pick one or two regions rather than four.",
    changeWhen:
      "You want both landscapes and food in one trip, or your first trip was fast and you now want a slower rhythm.",
    relatedJourneyReason:
      "The 11-day Chengdu, Chongqing and Zhangjiajie journey is the clearest second-trip route: different food, scenery and city energy from the classics.",
    watchFor:
      "Second-trip regions sit far apart and often need flights or long rail days, so each added region costs half a day.",
    content: [
      h("The short answer"),
      p(
        "A second trip to China works best when it feels different from the first. If Beijing, Xi'an and Shanghai gave you imperial history and a modern skyline, the rewards now are landscapes, food, highland culture and regions with their own languages and traditions. Choose one or two regions and give each enough time, rather than trying to cover everything.",
      ),
      h("Choose by what you loved"),
      table(
        ["If you loved…", "Look at", "Why it feels different", "Our route"],
        [
          "Food and city energy",
          "Chengdu and Chongqing",
          "Sichuan flavors, teahouses, pandas, and a mountain city that glows at night",
          "[11-day Chengdu, Chongqing and Zhangjiajie](/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour)",
        ],
        [
          "Dramatic scenery",
          "Zhangjiajie and Jiuzhaigou",
          "Sandstone pillars and turquoise lakes rather than cities",
          "[Zhangjiajie](/tours/shanghai-zhangjiajie-floating-peaks), [Jiuzhaigou](/tours/chengdu-pandas-jiuzhaigou-private-7-day-tour)",
        ],
        [
          "Culture at a slower pace",
          "Yunnan",
          "Old trading towns, mountains and a highland rhythm",
          "[10-day Yunnan](/tours/luxury-yunnan-private-tour)",
        ],
        [
          "Desert and Silk Road heritage",
          "Ningxia",
          "Hui Muslim culture and desert landscapes",
          "[13-day Muslim-friendly journey](/tours/muslim-friendly-china-tour-great-wall-desert-stars)",
        ],
      ),
      h("Sichuan and Chongqing: food, pandas and a vertical city"),
      p(
        "Chengdu is the home of giant pandas and Sichuan cuisine, with a teahouse culture that rewards slow afternoons. Chongqing, a river-and-hill city, is dense, vertical and best after dark. Together with Zhangjiajie's sandstone peaks, they form the 11-day route that suits most repeat visitors. Read our [Chengdu, Chongqing and Zhangjiajie itinerary](/journal/chengdu-chongqing-zhangjiajie-itinerary).",
      ),
      h("Zhangjiajie and Jiuzhaigou: scenery first"),
      p(
        "If landscapes matter more than cities, these two are the strongest. They are different experiences: Zhangjiajie is about sandstone pillars, cable cars and walkways, while Jiuzhaigou is lakes and waterfalls at altitude. Our [Jiuzhaigou or Zhangjiajie comparison](/journal/jiuzhaigou-or-zhangjiajie) helps you choose, and [how difficult Zhangjiajie is](/journal/how-difficult-is-zhangjiajie) explains the walking.",
      ),
      h("Yunnan: slower, older, higher"),
      p(
        "Yunnan's old towns, lakes and mountains reward unhurried travel. The route runs from Dali up to Shangri-La, so altitude matters; see our [Yunnan itinerary](/journal/yunnan-itinerary-10-days) and [altitude guide](/journal/yunnan-altitude-private-tour).",
      ),
      h("Ningxia and the desert: a different China"),
      p(
        "For repeat visitors interested in living Muslim heritage and open landscapes, Ningxia adds something the classic route does not. Our 13-day journey combines Beijing and Xi'an with Ningxia's Hui culture and a desert finale, with meal and prayer details confirmed in writing.",
      ),
      h("Practical advice for a second trip"),
      ul(
        "**Pick one or two regions.** Distances are large, and each move costs half a day.",
        "**Match season to place.** Mountains and lakes depend heavily on weather and holiday crowds.",
        "**Expect more flights and rail.** Second-trip regions are farther apart; plan buffers around flights.",
        "**Tell us what you did before.** It lets us avoid repeating sights and focus on what is new.",
      ),
      cta(
        "Build a route that feels new",
        "Tell us what you loved and what you would skip. We will propose a second trip around it.",
        "/start-planning?source=journal-second-trip-mid",
        "Plan my second trip",
      ),
      faq(
        "How long should a second China trip be?",
        "Ten to twelve days works well for one or two regions. Longer risks repeating the logistics that made the first trip tiring.",
      ),
      faq(
        "Is Chengdu or Yunnan better for a second visit?",
        "Chengdu and Chongqing suit food, pandas and city energy; Yunnan suits scenery and quiet culture. If you want both, plan them on separate trips.",
      ),
      faq(
        "Do I need a guide for a second trip?",
        "Many repeat visitors still choose private service for regions with longer distances and less English support. You can keep free days and travel independently in simpler cities.",
      ),
    ],
  },

  /* 10 ────────────────────────────────────────────────────────── */
  {
    slug: "how-to-pay-china-tour-operator-safely",
    title: "How to Pay a China Tour Operator Safely: Deposits, Contracts, Refunds",
    dek: "Paying a company on another continent is the part of booking that worries people most. Here is what a safe process looks like and the questions to ask first.",
    excerpt:
      "Learn how to pay a China tour operator safely: verify the company, read the contract, understand deposits and cancellation charges and spot red flags.",
    category: "Travel Guides",
    tags: ["first-time-china", "luxury-travel"],
    readingTime: "8 min read",
    hero: photos.greatWall,
    heroEyebrow: "Book with confidence",
    seoTitle: "How to Pay a China Tour Operator Safely",
    seoDescription:
      "How to pay a China tour operator safely: verify the company, read the contract, understand deposits, cancellation charges and refunds, and avoid red flags.",
    keywords: [
      "how to pay China tour operator",
      "China tour deposit safe",
      "China tour cancellation policy",
      "booking a China tour safely",
    ],
    related: {
      destinations: ["beijing", "shanghai"],
      tours: ["beijing-xian-shanghai-private-10-day-tour"],
      articles: [
        "how-to-choose-private-china-tour-company",
        "private-china-tour-proposal-checklist",
        "what-is-included-private-china-tour",
        "how-far-in-advance-book-private-china-tour",
      ],
    },
    conversion: {
      eyebrow: "Read it before you pay",
      title: "Review our terms and ask us anything.",
      description:
        "Our booking and cancellation terms are public, and your proposal states the payment dates before you commit.",
      label: "Request a proposal",
      href: "/start-planning?source=journal-pay-operator-safely",
    },
    contentType: "operator",
    decisionStage: "decide",
    keyAnswer:
      "Pay only after you have a written itinerary and a contract that names the licensed company, and make sure the payee matches that company. Ask for the payment schedule, accepted payment methods, cancellation charges and refund method in writing, and be cautious of pressure, personal accounts and vague terms.",
    appliesTo: ["First-time visitors", "Private tour travelers", "Families"],
    operatorRead:
      "Pay only when you hold a written itinerary, a contract naming the licensed company and a payment and cancellation schedule.",
    changeWhen:
      "The payee does not match the contracting company, or the terms are not in writing before you are asked for money.",
    relatedJourneyReason:
      "Our published terms and the written proposal show what a clear payment and cancellation process looks like before you commit.",
    watchFor:
      "Pressure to pay today, personal payment accounts, a missing company name and refund terms that say a refund will be considered.",
    content: [
      h("The short answer"),
      p(
        "Pay only when you can see three things in writing: a complete itinerary, a contract that names the licensed company, and a payment and cancellation schedule. Make sure the account you are paying belongs to that company. If an operator cannot give you these before asking for money, that is your answer.",
      ),
      h("Before you pay: five checks"),
      ol(
        "**Who is the company?** Get the registered legal name and confirm it matches the contract and payment details. Our [guide to checking guides and operators](/journal/how-to-check-china-tour-guide-is-licensed) explains how.",
        "**What exactly is included?** The proposal should list hotels, transport, tickets, meals and exclusions. See our [proposal checklist](/journal/private-china-tour-proposal-checklist).",
        "**When is each payment due?** Ask for the deposit, balance date and amounts.",
        "**How can I pay?** Ask which methods are accepted, which fees apply and how currency is handled.",
        "**What happens if I cancel?** The schedule should be explicit and in writing.",
      ),
      h("What a clear cancellation schedule looks like"),
      p(
        "Cancellation terms vary a great deal between operators. As a reference, here is our standard schedule for private journeys; your proposal states any stricter supplier conditions before you pay, and the full terms are on our [booking terms page](/terms).",
      ),
      table(
        ["When you cancel", "Charge"],
        ["More than 60 days before departure", "10%"],
        ["46–60 days before departure", "30%"],
        ["31–45 days before departure", "50%"],
        ["15–30 days before departure", "75%"],
        ["14 days or fewer, or no-show", "100%"],
      ),
      p(
        "Under our terms, undisputed refunds are paid to the original payment method within 14 calendar days. Whatever operator you choose, look for a stated refund method and timeline, not a promise to be flexible.",
      ),
      h("How your booking becomes binding"),
      p(
        "Your booking becomes binding only after the written travel contract and booking terms are accepted, the required initial payment is received in cleared funds, and we confirm the booking and relevant supplier arrangements in writing. A trustworthy operator explains its own sequence this clearly.",
      ),
      h("Red flags"),
      ul(
        "Pressure to pay today to hold a price, before you have a written itinerary.",
        "A request to pay into a personal account rather than the company's.",
        "A discount only if you pay by a method with no dispute options.",
        "No registered company name or address.",
        'Terms that say a refund will be "considered" without a schedule.',
      ),
      warn(
        "Think about reversibility",
        "A direct bank transfer abroad is hard to reverse. Ask whether the operator accepts methods that offer dispute protection, understand any fees, and consider travel insurance for cancellation cover.",
      ),
      h("Pair payment with insurance"),
      p(
        "A refund schedule limits what you can recover if you cancel for personal reasons, which is where insurance helps. Read our [China travel insurance guide](/journal/china-travel-insurance-for-private-tours) for what to cover.",
      ),
      cta(
        "See a full proposal before any payment",
        "We send a written proposal with itinerary, inclusions and payment dates before you commit. No payment is required to ask.",
        "/start-planning?source=journal-pay-operator-safely-mid",
        "Request a proposal",
      ),
      faq(
        "How much deposit is normal?",
        "It varies by operator, and published examples range widely. Rather than a number, look for an itinerary-linked payment schedule, written terms and a company that explains each step. Your proposal states the exact amounts and dates.",
      ),
      faq(
        "Can I pay in my own currency?",
        "Ask the operator how currency and fees are handled. Your proposal states the currency and accepted payment method before you pay.",
      ),
      faq(
        "What if I need to cancel for medical reasons?",
        "Our standard schedule applies unless your insurer or mandatory law provides otherwise, which is why we recommend insurance that covers cancellation. Tell us in writing as soon as possible so we can identify recoverable services.",
      ),
    ],
  },
];

export const moreGuideArticles: JournalArticle[] = specs.map(build);
