import type { ExpandedDestination } from "./types";

export const guangzhouGuide: ExpandedDestination = {
  id: "guangzhou",
  name: "Guangzhou",
  region: "south",
  kicker: "Cantonese food, trade & a well-placed city stay",
  description:
    "Choose Guangzhou for Cantonese food and trading history, or build a comfortable city stay around meetings and exhibitions without losing time crossing town.",
  stay: "3–4 nights; longer for business",
  bestFor: "Cantonese culture and business with leisure",
  interests: ["food", "heritage", "city"],
  relatedDestinationIds: [
    "zhanjiang",
    "dongguan",
    "zhongshan",
    "shaoguan",
    "zhaoqing",
    "yingde",
    "qingyuan",
    "huizhou",
    "macao",
    "shenzhen",
    "shanghai",
    "guilin",
    "quanzhou",
    "shunde",
    "kaiping",
  ],
  assets: {
    hero: {
      src: "/destinations/planning/guangzhou.svg",
      alt: "Guangzhou hotel-area planning diagram comparing Yuexiu and Liwan, Tianhe and Pazhou; not a geographic map",
      width: 1600,
      height: 1200,
    },
    gallery: [
      {
        src: "/destinations/planning/guangzhou.svg",
        alt: "Guangzhou hotel-area planning diagram comparing Yuexiu and Liwan, Tianhe and Pazhou; not a geographic map",
        width: 1600,
        height: 1200,
      },
    ],
  },
  planning: {
    title: "Guangzhou Travel Guide: Food, Hotels & Private Tours",
    seoTitle: "Guangzhou Travel Guide: Food & Where to Stay",
    seoDescription:
      "Plan Guangzhou around Cantonese food, historic districts or business commitments. Compare hotel areas, airport transfers and a flexible Guangzhou–Shenzhen tour.",
    answer:
      "Guangzhou rewards travelers interested in Cantonese food, neighborhood life and the history of a city shaped by trade. It is also a practical base for meetings and exhibitions, but the best hotel for a food-focused visit may not be the best one for Pazhou. Begin with the addresses that matter, then group culture and meals around them rather than spending each day crossing the city.",
    stayAnswer:
      "Three nights usually allow two full days for a city introduction: one centered on historic neighborhoods and food, another for a different district or specialist interest. Four nights offer more time for unhurried meals and a separate outing. Business stays should follow the actual meeting and exhibition diary; a four-day sample tour is not evidence that every agenda fits in four days.",
    hotelAnswer:
      "Consider Yuexiu or Liwan for historic neighborhoods and local food, Tianhe and Zhujiang New Town for many business addresses and modern hotels, or Pazhou when exhibition access is the main priority. Verify the actual entrance and daily destination: a hotel advertised as convenient for the Canton Fair may still require a significant journey to your hall or meeting.",
    sightseeingQuestion: "Should you stay in central Guangzhou or near the Canton Fair?",
    sightseeingAnswer:
      "Stay near the relevant Pazhou venue when repeated exhibition days dominate your trip. Choose a central base when sightseeing, food and meetings elsewhere matter more. Compare the complete morning and evening journeys, not just a hotel’s distance to a metro stop. During major events, establish room availability and transport arrangements before adding leisure activities.",
    visitorResources: [
      {
        label: "Guangzhou municipal government",
        href: "https://www.gz.gov.cn/",
        scope:
          "City background and official public announcements. This does not confirm a hotel, restaurant booking, exhibition badge or private visit.",
      },
      {
        label: "Canton Fair official website",
        href: "https://www.cantonfair.org.cn/",
        scope:
          "Use the organizer’s current dates, buyer registration and admission instructions. Private travel services do not provide automatic admission, a buyer badge or a queue bypass.",
      },
    ],
    serviceScope:
      "We plan Guangzhou around your confirmed arrival, hotel and priorities, with guiding, private vehicle service and bilingual support specified in the proposal. For business travel, agree the support required for each appointment and the service hours. Professional interpretation, sourcing, factory audits and access to private companies are separate services; a city guide or driver should not be assumed to provide them.",
    routeAdvice:
      "Our Guangzhou and Shenzhen business journey is designed around your actual agenda, usually over four to seven days. The four-day hotel example uses two Guangzhou nights and one Shenzhen night; it is a starting arrangement, not a fixed limit. Choose it when you want business commitments and selected cultural experiences coordinated together. A leisure-only Guangzhou stay needs its own proposal rather than being presented as the same service.",
    practicalPlanning: {
      timing:
        "Group a historic-area walk with a nearby meal, and keep a separate block for Tianhe, the riverfront or business appointments elsewhere. Protect exhibition and meeting hours first. A tasting session, hosted meal or cooking visit needs enough time to be worthwhile; do not squeeze it between appointments with uncertain finishes.",
      walking:
        "Historic neighborhoods can involve narrow pavements, steps and pedestrian lanes. Exhibition halls can require long periods walking and standing even when the vehicle reaches an approved drop-off. Explain walking comfort, rest needs and luggage before the day is planned; private transport helps between stops but cannot follow you through every building or lane.",
      cost: "Compare the actual hotel dates, room category, meeting addresses, vehicle hours and support language. Event-period room rates, late finishes, professional interpreters, exhibition admission arrangements and any cross-boundary transfer may change the price. A quoted four-day example should be rebuilt when your agenda or travel dates change.",
    },
    attractions: [
      "Chen Clan Ancestral Hall",
      "Shamian Island",
      "Liwan historic neighborhoods",
      "Yuexiu",
      "Zhujiang New Town",
      "Pearl River waterfront",
      "Pazhou exhibition area",
    ],
    stays: [
      {
        label: "2 nights: one city priority",
        advice:
          "Use the single full day for a focused food-and-history introduction or a business commitment. Do not assume both a full exhibition day and extensive sightseeing fit.",
      },
      {
        label: "3 nights: a fuller city introduction",
        advice:
          "Separate historic neighborhoods and food from a second district or interest. Keep arrival and departure as travel time unless the tickets genuinely allow more.",
      },
      {
        label: "4 nights or more: follow the diary",
        advice:
          "Add meaningful leisure time or extra business days according to the actual agenda. A longer stay does not automatically include more guided or vehicle service.",
      },
    ],
    hotelAreas: [
      {
        name: "Yuexiu and Liwan",
        advice:
          "Useful for a historic-city and food focus. Compare the exact property and vehicle entrance, nearby meals and room comfort. Older surroundings do not mean every hotel is a heritage property or every walk is step-free.",
      },
      {
        name: "Tianhe and Zhujiang New Town",
        advice:
          "Consider for business addresses, modern accommodation and dining. Check the side of the district and daily pickup route; the skyline alone is not a practical location test.",
      },
      {
        name: "Pazhou",
        advice:
          "Prioritize when repeated exhibition visits justify the base. Check the precise venue and hall, event access arrangements and evening dining rather than assuming all exhibition hotels serve every agenda equally well.",
      },
    ],
    tradeoffs: [
      {
        title: "Use food to understand the city",
        advice:
          "Leave time for a proper dim sum or Cantonese meal rather than treating it as a quick tasting between distant sights. Explain allergies, seafood restrictions and food preferences before choosing the venue; steaming and light seasoning do not make a dish suitable for every diet.",
      },
      {
        title: "Match business support to the task",
        advice:
          "A bilingual coordinator, city guide, conference interpreter and technical interpreter perform different jobs. Share the subject, documents, languages and confidentiality needs so the right support can be quoted. Supplier evaluation and quality assurance require their own scope.",
      },
      {
        title: "Treat exhibition access as an organizer decision",
        advice:
          "Check registration, credentials and badge rules through the event organizer. Travel planning can support your arrival and schedule, but cannot promise admission or substitute for the documents the organizer requires.",
      },
      {
        title: "Choose cultural visits with clear arrangements",
        advice:
          "A market walk, restaurant meal, private kitchen session and family-hosted encounter are different experiences. Agree the venue, host, language, menu and consent in advance. A traditional medicine introduction is cultural learning, not a medical diagnosis or promised treatment result.",
      },
    ],
    products: [
      {
        slug: "guangzhou-shenzhen-tailor-made-business-tour-4-day",
        label: "Explore the tailor-made Guangzhou & Shenzhen business journey",
        reason:
          "This flexible journey coordinates hotels, transport and agreed language support around your meetings, fairs and selected cultural interests. The four-day hotel example uses two Guangzhou nights before Shenzhen; longer stays and a different starting city are discussed around your actual agenda. Review business support and access requirements before selecting additional experiences.",
        comparison: {
          bestFor: "Business travelers combining confirmed commitments with selected city culture.",
          localPlan:
            "Two Guangzhou nights in the four-day hotel example; the agenda can require a different allocation.",
          importantChoice:
            "Usually planned over four to seven days; event badges, professional interpretation and company access require separate confirmation.",
        },
      },
    ],
    articles: [],
    connections: [
      {
        slug: "zhanjiang",
        advice:
          "Zhanjiang adds southwestern Guangdong port-city history, distinct Chikan and Xiashan walks and regional seafood. Compare dated gateways and full hotel roads before allocating useful nights. Its Naozhou Island chapter needs separate ferry planning; the published Guangzhou–Shenzhen business itinerary does not include this extension.",
      },
      {
        slug: "dongguan",
        advice:
          "Dongguan adds Keyuan garden, selected Humen history, Nanshe village or a defined Songshan Lake chapter. Choose the actual area and useful local time, not an assumption that every site lies on the way to Shenzhen. The published Guangzhou–Shenzhen business itinerary does not include Dongguan by default, and corporate access requires a confirmed host.",
      },
      {
        slug: "zhongshan",
        advice:
          "Zhongshan adds Sun Yat-sen history at Cuiheng, selected Shiqi city streets and Qijiang Park industrial-landscape reuse. Choose a distinct question rather than repeat commemorative stops. Compare exact gateways and full hotel roads; the Guangzhou–Shenzhen business product does not automatically include this extension.",
      },
      {
        slug: "shaoguan",
        advice:
          "Shaoguan adds northern Guangdong red-cliff scenery at Danxia Mountain and a separate Nanhua Temple history day. Compare exact rail stations, full hotel transfers, actual steps and useful nights. The published Guangzhou–Shenzhen business itinerary does not automatically include this extension.",
      },
      {
        slug: "zhaoqing",
        advice:
          "Zhaoqing adds a different lake-and-limestone setting, a separately chosen Dinghu forest route or an identified Duan inkstone learning interest. Compare the complete station and hotel transfers, actual walking and useful nights. Private city service does not automatically include this extension, a boat or a craft host.",
      },
      {
        slug: "yingde",
        advice:
          "Yingde adds a defined black-tea session or a slower Yingxi limestone-countryside stay. Compare actual dated trains, both road transfers and useful local nights. A tea-themed property does not establish a producer appointment, and the existing Guangzhou–Shenzhen business product does not automatically include this extension.",
      },
      {
        slug: "qingyuan",
        advice:
          "Qingyuan adds a selected northern Guangdong countryside or resort chapter. Choose the exact property and purpose before comparing gateways: city and Qingxin bases, Yingde tea or karst interests and Lianzhou caves need different roads. The published Guangzhou–Shenzhen business tour does not automatically include this extension.",
      },
      {
        slug: "huizhou",
        advice:
          "Huizhou offers West Lake cultural time, a defined Luofu route or a property-led Huidong coastal break. Choose one coherent base and compare the complete road or rail chain. Its Guangdong setting does not make every bay a short Guangzhou excursion or an inclusion in the published Guangzhou–Shenzhen business tour.",
      },
      {
        slug: "macao",
        advice:
          "Macao offers a separate peninsula-heritage, food or resort chapter. Choose a day trip or overnight by the complete crossing and actual local plan, checking every entry and any mainland return. The Guangzhou–Shenzhen business product does not automatically include Macao guiding, accommodation or cross-boundary transport.",
      },
      {
        slug: "kaiping",
        advice:
          "Kaiping adds diaolou and overseas-Chinese village architecture as a distinct countryside chapter. Compare a focused full-day outing with a worthwhile overnight, allowing the full road or rail-and-road journey. Choose the village clusters, room and meals explicitly; the published Guangzhou-Shenzhen business route does not include this rural extension automatically.",
      },
      {
        slug: "shunde",
        advice:
          "Shunde adds a focused culinary chapter and a selected garden, village or art interest within Foshan. Choose one coherent district route for a return outing, or a separate overnight when dinner, breakfast and the property justify it. Compare the full road journey with rail plus both terminal transfers; the existing Guangzhou-Shenzhen business itinerary does not automatically include this extension.",
      },
      {
        slug: "quanzhou",
        advice:
          "Quanzhou adds another southern trading-city history through a distributed maritime heritage landscape and Fujian food. Compare the actual connection and give it separate nights when cultural depth matters. It is not an automatic stop within the Guangzhou–Shenzhen business journey.",
      },
      {
        slug: "shenzhen",
        advice:
          "Combine the cities when Shenzhen adds real meetings, a selected innovation visit or leisure value. Place the transfer between actual addresses; changing cities just to sample a second hotel can waste a useful workday.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai adds another business and cultural chapter. Compare flights or rail with both hotel transfers, and avoid fixing a distant appointment immediately after arrival.",
      },
      {
        slug: "guilin",
        advice:
          "Guilin and Yangshuo offer a contrasting landscape stay after city or business travel. Reserve enough nights for the river and countryside, with the correct arrival station and final hotel arranged.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn often suit outdoor sightseeing, with humidity and rain still possible. Summer can be hot and wet; winter is usually milder than northern China but can feel damp. Major fairs, holidays and your business diary may matter more than a general season recommendation, so check the event calendar before choosing rooms.",
    orientation:
      "Guangzhou is a large city with distinct historic, commercial and exhibition areas. Liwan and Yuexiu, Tianhe and Zhujiang New Town, Pazhou, the airport and railway stations are separate planning points. Start with your purpose and exact addresses instead of assuming one central hotel minimizes every journey.",
    experiences: [
      "Explore the Chen Clan Ancestral Hall for Guangdong craftsmanship, or Shamian for a different chapter of trading history",
      "Make time for dim sum or an arranged market-to-kitchen experience suited to your diet",
      "Choose a riverfront or modern-city chapter around the rest of your day",
    ],
    planningNotes: [
      "Place fixed meetings and exhibition hours before leisure visits",
      "Confirm the airport or railway station and hotel vehicle entrance",
      "Distinguish city guiding, business coordination and professional interpretation",
    ],
    arrival:
      "Guangzhou Baiyun International Airport and the city’s railway stations are distinct arrival points. Use the flight or train number, terminal or station and hotel address to plan pickup. A Guangzhou South arrival should not be treated as a central-hotel drop-off or confused with another station simply because the ticket says Guangzhou.",
    gettingAround:
      "The metro is useful for independent trips when stations and walking suit the route. Private transfers help with luggage, grouped appointments and separated districts. Event access and traffic still affect drop-off and pickup, and a vehicle booked for a service window is not automatically available all evening.",
    stayStrategy:
      "Choose a base around the largest fixed commitment, then use nearby meals and culture to make the stay enjoyable. For multiple venue days, convenience may outweigh a preferred skyline view. Confirm room setup, breakfast timing and workspace alongside hotel category.",
    firstTimerNote:
      "Guangzhou, Shenzhen and Hong Kong are not interchangeable arrival labels. A mainland vehicle cannot be assumed to cross the Hong Kong boundary. Check entry requirements, tickets and permitted transfer arrangements for the exact gateway before choosing the hotel sequence.",
    faqs: [
      {
        question: "Is Guangzhou the same city as Canton?",
        answer:
          "Yes. Canton is the historic English name for Guangzhou. Use Guangzhou for current flight, train and hotel searches; the Canton Fair retains its established English name. Cantonese also describes the language and food traditions associated with Guangdong and neighboring communities.",
      },
      {
        question: "How many days do I need in Guangzhou?",
        answer:
          "For leisure, two full days usually make a useful introduction, commonly with three nights. Business travel should follow the actual meeting and exhibition agenda. Add separate time for culture rather than assuming it fits after a full working day.",
      },
      {
        question: "Where should I stay for the Canton Fair?",
        answer:
          "Start with your venue, hall and event dates. A Pazhou base can help with repeated exhibition days; Tianhe or another central area may suit a mixed agenda better. Check actual transport and registration arrangements before choosing.",
      },
      {
        question: "Can I combine Guangzhou and Shenzhen in one private trip?",
        answer:
          "Yes. Our flexible business journey covers both, with a four-day hotel example of two Guangzhou nights and one Shenzhen night. Your final city sequence and duration follow the confirmed agenda and arrival points.",
      },
      {
        question: "Does a private guide provide business interpretation?",
        answer:
          "Not automatically. City guiding and professional interpretation are different services. Share the meeting subject, languages and documents so the required support and service hours can be agreed in writing.",
      },
      {
        question: "Can AVIORA arrange a Cantonese cooking or hosted food experience?",
        answer:
          "We can discuss a suitable market-to-kitchen or hosted meal within the private plan. The host, venue, menu, timing and dietary arrangements need confirmation. Such a visit is not an automatic addition to every city or business day.",
      },
      {
        question: "Are airport, exhibition and Hong Kong transfers all included?",
        answer:
          "Only the transfers listed in your proposal are included. Exact terminals, venue access, vehicle hours and any cross-boundary permissions affect the plan. Do not assume a mainland airport transfer covers Hong Kong service.",
      },
    ],
    culturalStory: {
      title: "Understand a trading city through its neighborhoods",
      paragraphs: [
        "The Chen Clan Ancestral Hall introduces Guangdong craftsmanship through carved wood, brick and architectural decoration. Shamian offers a different chapter through its former concession-era streetscape. These are separate stops: combine them with a Liwan food outing only when opening arrangements, heat and walking comfort support the day. Give each place time rather than rushing between distant monuments.",
        "For business visitors, a cultural chapter can add context without competing with the main agenda. A conversation around a market or meal should be properly hosted and interpreted, with permission for photographs and private spaces. It is a chance to learn about contemporary life, not a promise that one family or encounter represents all Cantonese culture.",
      ],
    },
    foodStory: {
      title: "Give Cantonese food enough time",
      paragraphs: [
        "Dim sum works best as a meal with time to choose and share, rather than a single must-try dish. Rice rolls, dumplings and steamed dishes can introduce the range, while roast meats, soups and seafood offer other directions. Ask about ingredients: pork, shellfish and meat stock may be present in dishes whose names do not make them obvious.",
        "For a premium meal, the right choice depends on your group and the day. A private room, dietary checks, convenient location and a relaxed service pace can matter more than a famous address. Reserve and explain needs in advance; a busy fair day is a poor time to improvise an elaborate dinner far from the hotel.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Transfer to the base that serves tomorrow",
        description:
          "Use the confirmed arrival point and hotel. Keep the evening local and review the next pickup rather than placing a long city tour after the journey.",
      },
      {
        day: "Full day 1",
        title: "History and Cantonese food, or your fixed agenda",
        description:
          "For leisure, pair a compact historic-area walk with a proper meal. For business, protect the confirmed commitments and add culture only when the available window supports it.",
      },
      {
        day: "Full day 2",
        title: "A different city chapter",
        description:
          "Choose a modern district, riverfront or arranged specialist experience. If moving to Shenzhen, plan the drive around the last Guangzhou and first Shenzhen addresses.",
      },
      {
        day: "Departure",
        title: "Leave through the correct gateway",
        description:
          "Build pickup around the actual ticket, luggage and terminal or station. Cross-boundary arrangements need their own confirmation.",
      },
    ],
  },
};
