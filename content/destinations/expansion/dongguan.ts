import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/dongguan.svg",
  alt: "Original Dongguan planning schematic separating Guancheng Keyuan, Humen history, Nanshe village and Songshan Lake, with purpose-led hotel bases; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const dongguanGuide: ExpandedDestination = {
  id: "dongguan",
  name: "Dongguan",
  region: "south",
  kicker: "A Lingnan garden, Humen history and a city beyond its factory reputation",
  description:
    "Plan Dongguan around a clear purpose: Keyuan garden, Humen history, Nanshe village or Songshan Lake, with realistic hotel bases and separate business-visit arrangements.",
  stay: "A focused day visit or 2 nights for one full local day",
  bestFor:
    "Lingnan gardens, modern Chinese history, village architecture and agenda-led business travel",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["guangzhou", "shenzhen"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Dongguan Travel Guide: Keyuan, Humen & Stays",
    seoTitle: "Dongguan Guide: Keyuan, Humen & Stays",
    seoDescription:
      "Plan Dongguan's Keyuan garden, Humen history, Nanshe village or Songshan Lake. Compare hotel areas, day visits, two-night stays and confirmed business appointments.",
    answer:
      "Dongguan (东莞) is a large city between Guangzhou and Shenzhen, with distinct local areas rather than one compact sightseeing center. Guancheng (莞城) offers Keyuan (可园), a Lingnan garden and cultural subject; Humen (虎门) provides a separate chapter in the history of the opium trade and conflict; Nanshe (南社) offers selected village architecture in the Chashan area. Songshan Lake (松山湖) is another landscape and business-base choice. A focused day visit can work for one clear purpose. Two nights give one full local day; three can separate genuinely different chapters. Choose the actual hotel and route first. The city's manufacturing reputation does not establish access to a factory or private corporate campus.",
    stayAnswer:
      "Choose a day visit when one main subject justifies the complete return from the actual starting hotel. Two nights support one substantial local day with a comfortable arrival and departure. Three can separate Guancheng, Humen or another defined chapter without rushing, but the full roads must still work. One night can suit a specific appointment or onward route when useful hours remain. For business travel, nights follow the confirmed agenda, not a standard sightseeing duration. Additional time should add depth or useful rest rather than a circuit through every industrial and scenic label.",
    hotelAnswer:
      "Compare Guancheng or a precisely located central-city hotel for Keyuan and urban services, Humen for a Humen-led day or actual gateway, and a named Songshan Lake property for a particular appointment or landscape stay. Dongcheng, Nancheng and other city labels also need exact addresses. Check quiet, bathroom, temperature control, breakfast, luggage, pickup and the full road to the principal visit. A hotel near one station or company is not automatically convenient for the rest of the city. A lakeside room should be assessed on actual services and worthwhile hotel time, not a campus photograph.",
    sightseeingQuestion: "Should I choose Keyuan, Humen, Nanshe or Songshan Lake?",
    sightseeingAnswer:
      "Choose Keyuan for garden design and a specific Lingnan cultural introduction. Choose Humen for a substantial historical visit with the actual museum and public site route identified. Choose Nanshe for a defined village-architecture interest. Choose Songshan Lake for a selected public landscape route, a particular property or confirmed business agenda. These are different chapters. With one full day, one main area and a compatible secondary subject are usually more useful than a citywide checklist. A corporate visit is a separate appointment, not a sightseeing stop that a general guide can automatically provide.",
    visitorResources: [
      {
        label: "Dongguan municipal government",
        href: "https://www.dg.gov.cn/",
        scope:
          "City background and dated public notices, mainly in Chinese. Confirm the actual Keyuan, Humen museum, Nanshe or Songshan Lake public route with the responsible institution. General promotion does not establish a particular exhibition, specialist, company appointment or private campus access.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and exact stations, then full hotel and visitor transfers. Dongguan, Dongguan East, Dongguan South and Humen are different gateways. Choose from the actual booked service and main area, not the municipal name alone.",
      },
    ],
    serviceScope:
      "A proposal should identify the actual hotel and room, gateway, complete transfers, guide language, named public routes, admissions and meals. At Humen, distinguish the actual museum institution, exhibition and selected historic sites rather than use one broad history label. At Keyuan, specify whether the priority is garden observation or substantive art and cultural interpretation. Business appointments require a named organization, agreed purpose, host, language, visitor terms and confirmed time. Private guiding does not authorize factory entry, confidential discussion, photography or contact with unconfirmed suppliers.",
    routeAdvice:
      "Guangzhou adds Cantonese city, food and trade history; Shenzhen adds a different contemporary design or business chapter. Compare exact hotels, districts, station choices and useful local hours before adding Dongguan between them. Geographic position alone does not mean every chosen visit is on the way. No matching published Dongguan product is recommended here; the existing Guangzhou–Shenzhen business itinerary does not automatically include this city. Share dates, gateways, walking preferences and whether the purpose is culture, a specific appointment or property time for a tailored proposal with clear scope.",
    practicalPlanning: {
      timing:
        "Protect the main museum, garden or appointment within confirmed opening or host hours. Count the complete road, entry, internal walking, interpretation, lunch and return. Do not make an important business meeting depend on an uncertain train arrival or a distant sightseeing finish. A company cancellation needs a worthwhile public alternative; the alternative should have actual opening and a practical route. Avoid treating every hour between two cities as available local sightseeing time.",
      walking:
        "Review the actual garden thresholds, paths, steps, hall access, shade, seating and toilets. A village route may include uneven paving and occupied spaces; a waterfront or lake walk should have a defined length and return. Humen museums and selected outdoor historic sites can have different physical demands. A private vehicle does not remove internal walking. For appointments, check building access and any required visitor procedures separately rather than infer accessibility from a modern office image.",
      cost: "Compare the actual room, full guide and vehicle time, named admissions and meals. A specialist historian, art interpreter or business interpreter needs a defined format and fee. Company-hosted access, supplier research, sourcing advice and commercial due diligence are different services and should not be hidden inside a general day rate. A premium quote should explain better interpretation, room comfort, useful timing and dependable support rather than imply privileged entry or a verified commercial relationship.",
    },
    attractions: [
      "Keyuan / 可园 in Guancheng, on a selected garden and cultural route",
      "The Opium War Museum / 鸦片战争博物馆 in Humen, with the actual open institution and exhibition specified",
      "A selected Humen historic-site route, such as Weiyuan Fort / 威远炮台, under current public access",
      "Nanshe village / 南社村 in the Chashan area, with named public buildings and current access",
      "A defined Songshan Lake / 松山湖 public landscape route or specifically assessed property",
      "A regional meal, including a Houjie-style roast-goose rice-noodle interest when it fits the actual route",
    ],
    stays: [
      {
        label: "Day visit or 1 night / a focused purpose",
        advice:
          "Choose one main area around actual transport or a confirmed appointment. A short stay should not claim complete coverage of Keyuan, Humen, Nanshe and every business interest. One overnight is useful only when it improves the actual agenda or local hours.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Use one suitable base and protect the principal cultural route or appointments. Include a considered meal and rest. Add a second subject only when it is compatible with the full roads and current opening.",
      },
      {
        label: "3 nights / two genuinely different days",
        advice:
          "Can separate garden and city culture from a Humen or village chapter. For business, follow confirmed host times and keep changes manageable. More nights should add depth, useful flexibility or property comfort rather than repeated cross-city transfers.",
      },
    ],
    hotelAreas: [
      {
        name: "Guancheng / a specific central-city base",
        advice:
          "Compare exact addresses for Keyuan, chosen urban interests and dinner. Check room quiet, bathroom, climate control, breakfast and pickup. Adjacent central-area labels do not eliminate the need to compare complete roads.",
      },
      {
        name: "Humen / a history- or gateway-led stay",
        advice:
          "Useful when the actual museum route, historic-site choice or ticketed station is the main priority. Check the final hotel road, dinner and room standards. A Humen name does not put every exhibition, fort and station on the same walk.",
      },
      {
        name: "Songshan Lake / a particular property or appointment",
        advice:
          "Choose by the actual room, public landscape route or confirmed host address. Review meal options, internal walking and full gateway transfers. A scenic setting does not provide corporate access; an external campus photograph does not establish a public attraction.",
      },
      {
        name: "The actual appointment area / business-led only when confirmed",
        advice:
          "Choose the hotel after host addresses and times are established. Compare the real commute, quiet, desk, connectivity and meal needs with any leisure interests. A famous city-center property can be less useful than a dependable room close to the confirmed agenda.",
      },
    ],
    tradeoffs: [
      {
        title: "Keyuan rewards close attention to a compact space",
        advice:
          "Look at how paths, rooms, courtyards, openings and planting shape movement and views. A small garden can sustain a thoughtful visit without being compared only by size. Identify the particular object or space and distinguish historic fabric, repair and current exhibition. A famous Lingnan label does not make every displayed artwork original to the house or every upper room open.",
      },
      {
        title: "Humen history needs more than one dramatic anecdote",
        advice:
          "A useful explanation distinguishes the opium trade, the destruction of opium associated with Lin Zexu, later conflict and the particular sites visitors see today. Connect each claim with actual objects, documents or reliable interpretation. Museum narrative, surviving fabric and reconstructed display are different evidence. An outdoor fort and an indoor collection deserve their own time and route assessment.",
      },
      {
        title: "Nanshe is a village subject, not a generic old-town substitute",
        advice:
          "Choose particular public buildings, lanes or communal spaces and ask how their use changed. Distinguish original structure, repair, newer presentation and occupied household space. A guide should explain visible layout and supported local history rather than assign one age to the whole village. Public admission does not imply access to every house or a resident-hosted encounter.",
      },
      {
        title: "A technology address is not automatically a visitor attraction",
        advice:
          "At Songshan Lake or another business area, separate a public landscape walk from a company's private premises. A confirmed appointment needs its actual host and terms. A driver, interpreter and commercial adviser perform different roles; clarify which are being provided. Do not promise research access, factory-floor demonstrations or supplier introductions from a regional reputation alone.",
      },
      {
        title: "Between Guangzhou and Shenzhen does not mean every stop is on the way",
        advice:
          "The useful route depends on the actual district, hotel, museum or company and ticketed stations. Compare door-to-door time and the value of a local night before adding a detour. A few well-chosen subjects can offer more than a day spent crossing the municipality to complete a long list.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds a distinct city, food and trade-history stay. Choose complementary questions and compare exact gateways and full roads. The published Guangzhou–Shenzhen business itinerary does not automatically include Dongguan museums, Keyuan or a company visit.",
      },
      {
        slug: "shenzhen",
        advice:
          "Shenzhen develops contemporary city, design and specific business-base choices. Name actual districts and confirmed appointments before connecting the cities. A regional technology theme does not establish access to either city's private campuses or make every site convenient from one hotel.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for garden, village and public landscape walking, with actual rain, heat and holidays checked. Summer needs shade, water and shorter exposed blocks. An indoor museum alternative needs its own confirmed opening. Business dates follow the actual host agenda and operating calendar rather than a generic tourism season. Keep realistic alternatives and a room that works when outdoor plans change instead of promising a particular garden scene, quiet village or company access.",
    orientation:
      "Dongguan is a large municipality in Guangdong with distinct towns and urban areas. Guancheng's Keyuan, Humen's historical institutions and sites, Nanshe in the Chashan area and Songshan Lake require different roads. Its major rail gateways are not interchangeable. A company or industrial park name is an address and access question, not a public attraction by default. Choose a base near the main reason for your visit: a Humen history day, Guancheng culture and a business appointment may involve quite different journeys.",
    experiences: [
      "Read Keyuan through the relationship between garden space, rooms and cultural evidence",
      "Understand a selected Humen historical collection and public site with clear context",
      "Choose a substantive village, public landscape or confirmed business chapter around actual access",
    ],
    planningNotes: [
      "Choose the main area and exact addresses before fixing a hotel",
      "Distinguish museum evidence, surviving fabric and reconstructed display",
      "Keep corporate appointments separate from public sightseeing and commercial due diligence",
    ],
    arrival:
      "Check dated services to the exact gateway: Dongguan, Dongguan East, Dongguan South and Humen serve different approaches. Compare the full hotel and visitor roads rather than choosing by the municipal name. A Guangzhou or Shenzhen segment excludes terminal access, bags and the final local transfer. For a vehicle approach, use actual addresses and useful arrival time. Keep a key host or museum visit away from uncertain arrival and protect the complete onward return from the last stop.",
    gettingAround:
      "Use a coherent area-led day with named museum or garden entrances, actual village buildings, meals and pickup points. Clarify vehicle waiting, guide accompaniment and luggage. Public landscape routes and private premises have different permissions. Business interpretation, historical guiding and driving are distinct roles; specify the actual language and knowledge required. Avoid crossing the city repeatedly to collect unrelated landmarks between meetings.",
    stayStrategy:
      "A focused day visit can work for one purpose; two nights give one full local day and three can separate distinct chapters. Business nights follow confirmed addresses and times. Compare Guancheng, Humen, a named Songshan Lake property or the actual appointment area on room quiet, bathroom, climate control, meals, connectivity where needed and complete roads. High-end value comes from dependable support, careful interpretation and time well used rather than unverified privileged access.",
    firstTimerNote:
      "Start with the reason to visit. A garden, a historical museum, a village and a company appointment need different preparation. Then ask which base leaves enough time for the principal subject and a comfortable meal. A well-explained local chapter can be more rewarding than an ambitious circuit built mainly around Dongguan's position between two larger cities.",
    faqs: [
      {
        question: "Is Dongguan worth visiting for leisure?",
        answer:
          "It can be for a clear interest in Keyuan's Lingnan garden, Humen history, a selected Nanshe village route or a particular landscape stay. Choose one main purpose and actual access rather than assume the manufacturing reputation defines the whole city.",
      },
      {
        question: "How many nights should I spend in Dongguan?",
        answer:
          "Two nights give one full local day; three can separate genuinely different chapters. A focused day visit may suit one purpose. Business travel follows confirmed appointments, while one night is useful only when arrival, departure and the actual agenda leave worthwhile time.",
      },
      {
        question: "Where should I stay in Dongguan?",
        answer:
          "Choose the exact hotel around the main purpose: Guancheng or a specific central address for Keyuan, Humen for a defined history or gateway plan, Songshan Lake for a particular property or host, or the actual appointment area. Compare full roads and room comfort rather than broad city labels.",
      },
      {
        question: "Can I visit Keyuan and Humen in one day?",
        answer:
          "It may be possible as a selective plan when actual opening, full roads, walking and useful visiting hours support it. They are different areas and subjects. A deeper interest may be better served by one substantive chapter rather than abbreviated visits to both.",
      },
      {
        question: "Can I visit a factory or corporate campus in Dongguan?",
        answer:
          "Only through an actual confirmed appointment and the organization's visitor terms. Identify the purpose, host, language, timing and permitted activities in advance. A private driver or general guide does not provide automatic factory access, supplier validation or confidential introductions.",
      },
      {
        question: "Is Songshan Lake a public alternative to a company visit?",
        answer:
          "A defined public landscape route can be proposed separately when current access and conditions support it. It is not equivalent to entering private premises or meeting company staff. Check the actual path, shade, distance and complete transport rather than rely on a campus image.",
      },
      {
        question: "How do I plan a private Dongguan visit?",
        answer:
          "Share dates, exact gateways, main cultural or business purpose, walking needs and room expectations. Ask for the actual public routes or confirmed host agenda, guide roles, meals and full transfers. No matching published product is recommended here; build the proposal around the visits that can genuinely be arranged.",
      },
    ],
    culturalStory: {
      title: "A garden, a historical collection and a village ask different questions",
      paragraphs: [
        "At Keyuan, begin with how a compact garden organizes attention. A doorway frames a view; a courtyard changes light and movement; a room can connect cultivated space with cultural life. Identify the actual feature and what reliable evidence explains about its use. At a Humen institution, the task changes: objects, documents, surviving sites and later interpretation help visitors understand trade, opium and conflict. A strong explanation preserves that complexity and distinguishes an original source from a reconstructed scene. Neither subject benefits from being reduced to a brief exterior photograph.",
        "Nanshe and other selected village interests introduce another scale of history through lanes, communal spaces, buildings and current use. The story should follow particular evidence rather than a claim that an entire village is unchanged. Dongguan's manufacturing and technology landscape is part of its present, but it does not erase these earlier layers. A thoughtful itinerary can connect them when each chapter has a clear purpose. It should also respect the difference between observing public space and entering a private workplace or household.",
      ],
    },
    foodStory: {
      title: "Let a bowl explain a preparation, not dictate the whole route",
      paragraphs: [
        "A Houjie-style roast-goose laifen / 烧鹅濑粉 interest can add specificity when the actual kitchen and route support it. Ask how the rice noodles are prepared, what goes into the broth and how the goose is served; recipes vary. Rice-based noodles do not establish a wheat-free dish because sauces, stock and shared preparation matter. Confirm bones, portion size and whether a full bowl fits the day's appetite. A local specialty is more useful as a well-timed meal than as the reason for another long cross-city transfer.",
        "Balance the table with suitable vegetables, tofu or another preparation rather than several rich dishes simply because each is promoted as famous. Check meat and fish stocks, soy, wheat-containing sauces, peanuts, sesame and shared preparation where relevant. Serious requirements need the actual kitchen's confirmed capacity and an alternative. For a business day, a quiet meal with predictable timing may matter more than a crowded landmark restaurant. A comfortable lunch and enough time to return can improve both cultural and appointment-led visits.",
      ],
    },
    itinerary: [
      {
        day: "Approach or arrival",
        title: "Settle near the main purpose",
        description:
          "Complete the actual station or hotel road and check any booked room. Keep the first meal or walk modest. Review public opening or the confirmed host agenda; an essential meeting or museum visit should not depend on uncertain arrival.",
      },
      {
        day: "Main local day",
        title: "Give one area useful time",
        description:
          "Choose Keyuan and compatible city context, a substantive Humen route, or a separately confirmed village, landscape or business purpose. Keep interpretation, lunch and rest. These are choices around the main interest, not a promise to complete all areas in one circuit.",
      },
      {
        day: "Optional second full day / three-night stay",
        title: "Add a genuinely different chapter",
        description:
          "Use the additional day for another selected area when it adds depth and actual roads support it. A corporate appointment needs its own host, roles and terms. If it is unavailable, use a confirmed public alternative rather than imply that another private site can simply replace it.",
      },
      {
        day: "Return or departure",
        title: "Protect the complete onward journey",
        description:
          "Allow breakfast, bags and the full road to the exact station or next hotel. Continue to Guangzhou or Shenzhen with useful time for its own purpose. This outline is illustrative, not a published package, supplier-verification service or guarantee of private premises and specialist access.",
      },
    ],
  },
};
