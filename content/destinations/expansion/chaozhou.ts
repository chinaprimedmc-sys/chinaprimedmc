import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/chaozhou.svg",
  alt: "Chaozhou planning schematic separating an old-city walk, a well-paced food and tea interest and a distinct outlying cultural visit; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const chaozhouGuide: ExpandedDestination = {
  id: "chaozhou",
  name: "Chaozhou",
  region: "south",
  kicker: "Teochew food, gongfu tea and an old city worth staying in",
  description:
    "Give Chaozhou time for its old-city streets, Guangji Bridge, religious heritage and a considered introduction to Teochew food, with practical hotel, walking and onward-route choices.",
  stay: "2–3 nights",
  bestFor: "Teochew food, tea culture and slower old-city exploration",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: [
    "meizhou",
    "jieyang",
    "shantou",
    "quanzhou",
    "xiamen",
    "guangzhou",
    "shunde",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Chaozhou Travel Guide: Teochew Food, Tea & Stays",
    seoTitle: "Chaozhou Travel Guide: Teochew Food, Tea & Stays",
    seoDescription:
      "Plan two or three nights in Chaozhou with old-city hotel advice, Guangji Bridge, Teochew food and gongfu tea, plus realistic rail and airport transfers.",
    answer:
      "Chaozhou (潮州), also encountered as Teochew or Chiuchow in cultural and food contexts, is a city in eastern Guangdong with a distinctive regional identity. Visit for the relationship between old-city streets, Guangji Bridge, living temples, gongfu tea and Teochew cooking, rather than treating it as another generic Cantonese food stop. The city is part of the wider Chaoshan region alongside places such as Shantou and Jieyang; those names are related but not interchangeable. Two or three nights let a first visit unfold through a coherent walk, a proper meal and time to sit over tea.",
    stayAnswer:
      "Two nights usually provide one full day for the old city, a bridge or temple interest and a regional meal. Three nights give a second full day for a separately arranged craft or tea subject, a different neighborhood or an easier pace. One night can work as a selective stop when connections leave useful time, but it should not promise every landmark and a comprehensive food tour. Keep Shantou, Jieyang and more distant outings separate unless the added subject genuinely justifies their road journey.",
    hotelAnswer:
      "Choose a property in or near the old city for evening food and lanes, a hotel at its edge for a balance of access and pickup, or a modern city base when room comfort and straightforward road arrival matter more. Check the quoted room, stairs, soundproofing, bathroom and the final luggage approach. A courtyard photograph does not tell you whether the room faces a busy lane or a shared dining area. For a short visit, a quieter room in a useful location can be worth more than moving hotels for another decorative setting.",
    sightseeingQuestion:
      "Should you stay in Chaozhou Old Town or visit from another Chaoshan city?",
    sightseeingAnswer:
      "Stay in Chaozhou when unhurried old-city time, dinner and tea are part of the reason to come. A visit from Shantou or another base can provide a focused introduction, but the complete return drive and available hours determine what fits. Paifang Street, Kaiyuan Temple and Guangji Bridge are not just entrances to collect; each adds a different subject. A night here can protect evening time, but does not guarantee a particular light display, quiet street or late-running activity. Choose the base around the experience rather than the broad Chaoshan label.",
    visitorResources: [
      {
        label: "Chaozhou municipal government",
        href: "https://www.chaozhou.gov.cn/",
        scope:
          "Municipal background and public notices, mainly in Chinese. Confirm current Guangji Bridge visitor arrangements, religious-site access, exhibitions, public events and local transport with the relevant authority or venue. City information does not verify a particular host, restaurant or room.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Check the exact ticketed station and service, then the road journey to the hotel. Chaoshan station, Chaozhou-related stations and a Shantou arrival are not interchangeable pickup instructions or guarantees of the same city access.",
      },
    ],
    serviceScope:
      "A tailored Chaozhou proposal can identify the hotel and room, exact airport or station pickup, selected old-city route, guiding and meals. Name any admissions and distinguish a snack walk from a fully included seated meal. A tea host, craft demonstration, cooking session, performance or specialist interpreter requires separate confirmation. Private guiding does not open homes, workshops or religious areas beyond normal access. Share dietary needs, interest in tea, preferred walking length and whether you want a cultural or food-led stay before comparing proposals.",
    routeAdvice:
      "Chaozhou can form an eastern Guangdong chapter or connect with Xiamen and Quanzhou when the actual rail services and useful nights make sense. Guangzhou and Shunde offer different culinary and cultural subjects farther west, not local add-ons. No matching published Chaozhou product is recommended here. Use the illustrative three-night outline to request a tailored visit, keeping the city stay, any wider Chaoshan travel and optional hosts clearly defined rather than borrowing a Guangdong product that does not include Chaozhou.",
    practicalPlanning: {
      timing:
        "Keep the first old-city walk coherent, with a shaded pause and a proper meal instead of continuous snacking. Review the bridge's current visiting arrangements before fixing the sequence. A temple, museum or host appointment can have a different schedule from the public lanes. Leave an evening food or tea interest unhurried, and avoid relying on a late activity before an early station transfer.",
      walking:
        "Old-city paving, thresholds, crowded lanes and bridge approaches create different demands. Agree a route with seating, toilets and a practical pickup point. Small historic properties may have stairs and a last stretch where a vehicle cannot reach the door. A private car helps between districts but does not make every lane or heritage building step-free. In heat or rain, a shorter walk with better explanation can be the stronger plan.",
      cost: "Compare room category, breakfast, complete transfers, guide language and named admissions. A food walk may include small shared purchases while a restaurant meal has its own menu and portion basis. Tea sessions, craft hosts and performances should have clear fees and purchase expectations. Paying a premium should improve room comfort, interpretation and meal quality, not simply add several similar shops or an unsupported promise of private cultural access.",
    },
    attractions: [
      "Paifang Street and selected old-city lanes, with restoration and living commerce explained",
      "Guangji Bridge / Xiangzi Bridge, with current visitor arrangements checked",
      "Chaozhou Kaiyuan Temple, distinct from the temple of the same name in Quanzhou",
      "Han Wengong Shrine as a separately chosen river-side cultural subject",
      "A confirmed gongfu tea session with a clear topic and host",
      "A specific craft or Teochew food interest selected for genuine explanation",
    ],
    stays: [
      {
        label: "1 night: a selective stop",
        advice:
          "Choose one strong route and one meal when arrival and departure leave enough time. A late check-in followed by an early train is not an old-city immersion. Avoid promising several temples, crafts, bridge time and extensive food touring within the same narrow window.",
      },
      {
        label: "2 nights: one useful full day",
        advice:
          "Explore a selected old-city sequence and leave time for dinner or a tea interest. This can work well when the city itself is the priority and additional hosts are optional. Count station transfers separately so the one full day is not quietly consumed by transport.",
      },
      {
        label: "3 nights: depth and a slower table",
        advice:
          "Use the second full day for a confirmed tea or craft subject, another distinct city interest or a gentler rhythm. Leave enough appetite and time for meals. An extra night does not require a distant excursion or another round of similar shops.",
      },
    ],
    hotelAreas: [
      {
        name: "Inside or immediately beside the old city",
        advice:
          "Choose for evening food and time on foot. Check the street, quoted room, stairs, sound transmission and the last luggage approach. A characterful property can be a good stay without matching a full-service hotel's facilities. Clarify breakfast and dinner options rather than assuming every courtyard has a quiet restaurant.",
      },
      {
        name: "An old-city-edge property with practical pickup",
        advice:
          "Consider when easier road access and a manageable walk to selected interests are the right balance. Review the actual crossing, pavement and hotel entrance. Edge of old town is not a precise distance or a guarantee of quietness. A suitable room and a reliable meeting point can improve the whole day.",
      },
      {
        name: "A modern city hotel",
        advice:
          "Useful for room layout, facilities and straightforward vehicle access. Compare the real transfer to old-city interests and evening meals. A view over the river or city is separate from convenient pedestrian access. Choose a modern base knowingly rather than expecting every Chaozhou address to place you among historic lanes.",
      },
    ],
    tradeoffs: [
      {
        title: "Teochew is a useful identity, not another name for all Cantonese culture",
        advice:
          "Chaozhou's language, tea practices, crafts and cooking have their own context within eastern Guangdong. A guide should explain the subject at the chosen place rather than repeat the same account used for Guangzhou. The wider Chaoshan region includes other cities, and Chaozhou city does not automatically cover them. Keep names precise when choosing restaurants, family-history interests or a multi-city route.",
      },
      {
        title: "Guangji Bridge deserves a current visit plan, not a fixed spectacle promise",
        advice:
          "Its distinctive bridge structure and river setting can be worth understanding in daylight. Current pontoon, opening and visitor arrangements determine what can be crossed or observed. A night view or public light event, if operating, is a different experience. Do not guarantee a particular opening scene, display or unrestricted crossing from an old photograph, and keep an alternative if conditions change.",
      },
      {
        title: "Gongfu tea is an attentive practice, not a martial-arts show",
        advice:
          "The term describes skill and care in preparation rather than kung fu entertainment. A useful session can explain the tea, small brewing vessel, sequence and changes between infusions. Agree the host, language, duration and whether the setting is a shop, cultural venue or private invitation. Tasting should not depend on pressure to buy, and a retail tea stop is not automatically a hosted cultural encounter.",
      },
      {
        title: "Choose a craft subject before promising a workshop",
        advice:
          "Woodcarving, embroidery and other local crafts can provide depth through a suitable collection, demonstration or willing practitioner. Those are different visits. Identify the venue, process, interpretation and opportunity to observe before calling it hands-on or master-led. A shop window can show interesting work without providing production access, a private studio appointment or evidence for every provenance claim.",
      },
      {
        title: "A good food day balances dishes rather than maximizing stops",
        advice:
          "Beef hotpot, braised dishes, rice-based snacks and tea offer different ways to understand a meal. Choose what the group actually enjoys, clarify portions and let a few stops do real work. Fully cooked alternatives can be selected where raw or lightly prepared seafood does not suit the traveler. Dietary needs, stocks, sauces and shared equipment matter more than claiming every visitor must eat every signature dish.",
      },
      {
        title: "Use the correct Chaoshan gateway",
        advice:
          "Jieyang Chaoshan Airport serves a region, not just one old-city hotel. A railway service using Chaoshan or another regional station can require a separate drive in a different direction. Choose by the full ticket, hotel address and onward route. A short rail time from Xiamen or Guangzhou does not include both terminal transfers, luggage and the time needed to enjoy Chaozhou.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "meizhou",
        advice:
          "Meizhou adds a distinct Hakka regional-history, weilong-house and food interest. Its guide compares city and countryside rooms and explains why weilongwu and Fujian tulou are not interchangeable terms. Choose named buildings and complete transport before adding the stay; shared regional themes do not establish a short local connection or private household access.",
      },
      {
        slug: "jieyang",
        advice:
          "Jieyang adds Rongcheng’s Confucian academy and a distinct city-history subject beyond the regional airport. Include a selective visit or useful stay when it adds something different. Any Yingge event or Puning chapter needs its own actual location, availability and roads; a shared Chaoshan label is not a performance booking or a short-transfer guarantee.",
      },
      {
        slug: "shantou",
        advice:
          "Shantou adds Little Park’s port-city streets and an urban Teochew food stay, with a separate Nan’ao Island decision. Choose distinct subjects and useful nights rather than repeat the same tasting list. Compare exact stations and full hotel transfers; the wider Chaoshan name does not make every city or island a local stop.",
      },
      {
        slug: "quanzhou",
        advice:
          "Quanzhou adds maritime-trade history and a different religious and food landscape in Fujian. Its Kaiyuan Temple is not Chaozhou's temple of the same name. Compare complete rail connections and allow each city enough time rather than turning two distinctive heritage stays into brief photo stops.",
      },
      {
        slug: "xiamen",
        advice:
          "Xiamen offers Gulangyu and coastal city interests. Check the actual station pair and both hotel transfers; the connection is not described by rail time alone. Give the ferry-and-luggage chapter in Xiamen its own planning rather than adding it to a Chaozhou departure day by default.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou provides Cantonese city culture and trading history as a different chapter. Chaozhou is in eastern Guangdong, not a nearby Guangzhou neighborhood. Choose enough nights and compare the complete journey so the culinary contrast has time to become meaningful.",
      },
      {
        slug: "shunde",
        advice:
          "Shunde offers another distinct food tradition and selected Lingnan garden or village interests within Foshan. Combine it with Chaozhou only when the geographic separation and available days support two worthwhile stays. A food-focused route should explain the contrast, not repeat the same generic Cantonese menu in two places.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler parts of the year are useful starting points for old-city walks and time at the table. Summer heat, humidity and rain call for shade, breaks and flexible outdoor timing; storm-related conditions can affect transport and river-side plans. Festivals, performances and any bridge-related public event need date-specific confirmation. A quieter weekday can be worth comparing, but neither an old-city postcode nor a particular season guarantees empty lanes or a silent room.",
    orientation:
      "Chaozhou is a city in eastern Guangdong within the wider Chaoshan cultural region. Shantou and Jieyang are separate cities with their own neighborhoods and gateways. The old city, Guangji Bridge, the river's other side and the airport or rail stations create different routes. Kaiyuan is also the name of a temple in Quanzhou, Fujian; use the city and Chinese address together to avoid confusing collections, photographs or meeting points.",
    experiences: [
      "Explore a selected old-city route with the bridge, temple or shrine given clear context",
      "Understand a Teochew meal and a thoughtful gongfu tea subject without a compulsory shopping itinerary",
      "Enjoy a well-placed room and unhurried evenings instead of a rushed wider-Chaoshan checklist",
    ],
    planningNotes: [
      "Distinguish Chaozhou city from the wider Chaoshan region when choosing tickets and hotels",
      "Check the old-city property's stairs, noise and final luggage approach before booking",
      "Confirm bridge arrangements, tea hosts, craft visits and meal inclusions individually",
    ],
    arrival:
      "Jieyang Chaoshan International Airport uses code SWA. The airport, Chaoshan railway station and other ticketed arrivals require different road journeys to the hotel. Send the full station or terminal, luggage and Chinese address before arranging pickup. A regionally named gateway is not a guarantee of a short final transfer, and any child seat or mobility support needs separate agreement. Keep a long arrival day clear of fixed bridge or host appointments.",
    gettingAround:
      "Use walking for a coherent old-city route and planned transfers where the site or gateway lies farther away. Agree the vehicle meeting point because narrow lanes and pedestrian areas may prevent door-to-door access. A food-led day should allow seating and an easy return rather than continuous walking between snacks. River-side conditions, religious access and public visitor arrangements can change the sequence; keep a shorter alternative instead of forcing every planned stop.",
    stayStrategy:
      "For two or three nights, choose one base that balances evening atmosphere with sleep and luggage access. Review the actual room, soundproofing, bathroom, temperature control and breakfast. A central location can be valuable without being the quietest option. A larger modern hotel may suit comfort needs better, provided the transfer to chosen interests is realistic. Spend the saved check-in time on a better meal or a meaningful cultural subject.",
    firstTimerNote:
      "Chaozhou rewards a slower introduction. Give the old city one clear route, choose a few dishes with explanation and leave time to sit over tea. The strongest proposal is not necessarily the one listing the most snacks, bridge photographs and workshops. It is the one that makes the region's distinct identity understandable while keeping the room, meals and daily pace comfortable.",
    faqs: [
      {
        question: "Are Chaozhou, Teochew and Chaoshan the same thing?",
        answer:
          "Chaozhou is a city; Teochew is a name encountered in language, cultural and food contexts associated with the region. Chaoshan is a wider regional term that also includes places such as Shantou and Jieyang. Use the precise city and address when planning transport, hotels or a family-history interest.",
      },
      {
        question: "How many nights should I stay in Chaozhou?",
        answer:
          "Two nights give one full day for selected old-city interests and regional food. Three nights allow a separate tea or craft subject, another city interest or a slower pace. One night works only as a focused stop when the complete connections leave useful time.",
      },
      {
        question: "Should I stay in Chaozhou Old Town?",
        answer:
          "Choose an old-city or edge base for evening food and lanes, checking noise, stairs and the final luggage route. A modern city hotel can suit room comfort and pickup better, with a separate transfer to the old city. The best choice depends on the exact room and the stay you want.",
      },
      {
        question: "Can I cross Guangji Bridge and see the pontoons open?",
        answer:
          "Check current visitor and operating arrangements for the date before planning a particular crossing or scene. Daytime heritage viewing and any night event are different experiences. An old timetable or photograph does not guarantee the same access, pontoon arrangement or display during your visit.",
      },
      {
        question: "Is Chaozhou's Kaiyuan Temple the one in Quanzhou?",
        answer:
          "No. They are different temples in different cities and provinces. Chaozhou is in Guangdong and Quanzhou in Fujian. Confirm the city, Chinese name and address when comparing photographs or booking a route.",
      },
      {
        question: "What is a Chaozhou gongfu tea experience?",
        answer:
          "It can be an attentive introduction to tea preparation, vessels and successive infusions. Agree the tea, host, language, setting and purchase expectations. Gongfu refers to skill and care here, not a martial-arts performance, and a shop stop is not automatically a private cultural session.",
      },
      {
        question: "Is a Chaozhou food tour suitable for dietary restrictions?",
        answer:
          "It needs a venue-and-preparation review. Discuss meat stocks, seafood, sauces, spice, shared cooking and allergies before choosing the stops. A snack walk and a seated meal have different inclusions. Fully cooked alternatives and fewer well-explained dishes can make a better visit than a fixed must-eat list.",
      },
      {
        question: "Can I combine Chaozhou with Xiamen or Quanzhou?",
        answer:
          "Yes, when the actual rail service, both hotel transfers and available nights support each city. The cultural and food subjects differ, so preserve useful time rather than reducing either place to a brief station-to-photo circuit. Xiamen's ferry arrangements are another separate planning task if Gulangyu is included.",
      },
    ],
    culturalStory: {
      title: "Let the old city reveal a distinct regional identity",
      paragraphs: [
        "Chaozhou's value comes from the relationship between built heritage, trade, religion, tea and everyday city life. A walk through Paifang Street can discuss the meaning of its ceremonial forms while distinguishing present-day commerce and restoration from older fabric. Guangji Bridge adds a river and engineering subject; a temple or shrine adds another kind of context. The places become more interesting when their differences are explained rather than all described as timeless ancient China.",
        "Tea and crafts offer another way to understand the region when a suitable host or collection is available. Choose a specific process or question, and respect the boundary between a public visitor space, a shop, a working studio and a home. A demonstration, lesson and master appointment require different arrangements. Cultural depth can come from an informed public visit and a thoughtful conversation without promising exclusive access or asking residents to perform a generic tradition.",
      ],
    },
    foodStory: {
      title: "Build a Teochew meal with contrast and room to enjoy it",
      paragraphs: [
        "A meal might introduce beef hotpot with cuts and cooking explained, a braised preparation, vegetables and a rice-based snack rather than an indiscriminate tour of famous dishes. Different restaurants and households prepare these foods differently. Let the guide clarify portions, sauce ingredients and whether the meal suits the group's appetite. The point is to understand the table, not to prove how many bowls and plates can be finished before the next stop.",
        "Tea can provide a quieter pause between food interests, with caffeine preferences and buying expectations discussed. Seafood, meat broths, peanuts, fish sauces and shared equipment can matter for dietary needs even when a dish name sounds simple. Choose fully cooked options where appropriate and clarify any raw or lightly prepared item before ordering. A seated lunch, clean facilities and enough time to eat make the food experience more convincing than a long list of compulsory tastes.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the base and enjoy an easy first meal",
        description:
          "Allow the complete station or airport transfer and the final luggage approach. Settle in, then take a short local walk or dinner if timing allows. Keep a bridge scene or special host out of a tightly timed arrival evening.",
      },
      {
        day: "Full day 1",
        title: "An old-city route with a proper table",
        description:
          "Choose a coherent walk with a temple, bridge or other heritage subject matched to current access. Include shade, seated pauses and a regional meal. Avoid turning every lane into another tasting stop or trying to cover the entire wider Chaoshan region.",
      },
      {
        day: "Full day 2",
        title: "Tea, craft or a different city perspective",
        description:
          "Use a confirmed host or collection for a clear subject, or choose another public cultural interest when that is stronger. Leave time for the room and a slower meal. A private visit or hands-on session belongs in the plan only when the arrangement is actually available and agreed.",
      },
      {
        day: "Departure",
        title: "Continue from the precise gateway",
        description:
          "Allow the hotel departure, luggage and full transfer to the ticketed service. Xiamen, Quanzhou or another Guangdong city needs its own useful stay. This three-night outline is illustrative, not a published product or a promise of optional hosts, performances and private interiors.",
      },
    ],
  },
};
