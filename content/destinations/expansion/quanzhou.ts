import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/quanzhou.svg",
  alt: "Quanzhou planning diagram comparing old-city stays, a modern city hotel and an outlying heritage day; schematic rather than a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const quanzhouGuide: ExpandedDestination = {
  id: "quanzhou",
  name: "Quanzhou",
  region: "south",
  kicker: "Maritime history, living temples & southern Fujian food",
  description:
    "Explore Quanzhou through its port history and living religious landscape, with an old-city route, well-placed hotel and a separate choice of outlying heritage sites.",
  stay: "3–4 nights",
  bestFor: "Maritime history and living cultural heritage",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: [
    "fuzhou",
    "xiapu",
    "guangzhou",
    "jingdezhen",
    "wuyishan",
    "xiamen",
    "chaozhou",
    "tainan",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Quanzhou Travel Guide: Heritage, Food & Where to Stay",
    seoTitle: "Quanzhou Travel Guide: Heritage & Where to Stay",
    seoDescription:
      "Plan Quanzhou for maritime history, living temples and Fujian food. Compare old-city hotels, outlying heritage visits and a tailored cultural itinerary.",
    answer:
      "Quanzhou in Fujian is worth visiting for the relationship between maritime trade, different religious traditions and the everyday life of a southern Chinese city. Its UNESCO-listed heritage is a distributed set of sites, not one enclosed old-town attraction. Start with a coherent city walk and selected religious or museum visits, then choose an outlying heritage chapter if it deepens your interest. The value is understanding how the places connect, rather than trying to tick off the entire listing.",
    stayAnswer:
      "Three nights give two full days: one for the old city and selected religious heritage, another for a museum and an outlying interest or more neighborhood time. Four nights allow a slower stay or a separate cultural encounter. Two nights can suit one focused city day, but should not promise every heritage component, a coastal excursion and specialist visits. A day trip from another Fujian city is a selective introduction, with station transfers counted in the available time.",
    hotelAnswer:
      "Choose an old-city or nearby base when neighborhood walks and evening food are central to the visit. Check the specific street, noise, stairs and vehicle approach at small historic properties. Compare a modern city hotel when room setup, facilities and straightforward pickup matter more. A coastal property offers a different holiday and requires its own heritage-day transfers; a Quanzhou address does not establish easy access to the old city.",
    sightseeingQuestion: "Should you stay overnight in Quanzhou or visit from Xiamen?",
    sightseeingAnswer:
      "A day visit can work for a limited old-city introduction if the full rail and road plan leaves worthwhile time. Stay two or three nights when maritime history, temples and local evenings are real interests. A short train ride is not the complete journey from your Xiamen hotel to the first visit. Choose the overnight for time in Quanzhou, rather than assuming every nearby city belongs in one day.",
    visitorResources: [
      {
        label: "UNESCO: Quanzhou — Emporium of the World in Song–Yuan China",
        href: "https://whc.unesco.org/en/list/1561/",
        scope:
          "Background on the serial heritage property and the relationships among its components. This does not verify current opening, religious access, individual tickets, private hosts or a complete day route.",
      },
      {
        label: "Quanzhou municipal government",
        href: "https://www.quanzhou.gov.cn/",
        scope:
          "City background and public announcements. Confirm specific site, transport, accommodation and cultural arrangements separately for your dates.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Quanzhou plan with the selected sites, hotel, guide, transfers and any cultural host specified in the proposal. Good interpretation connects port history and living places without treating religious communities as performances. Normal public access and worship rules apply. Private hosts, Nanyin music sessions, craft encounters and entry to particular interiors require their own consent and confirmation.",
    routeAdvice:
      "Plan Quanzhou as a tailored cultural chapter within Fujian or a wider China journey. Begin with the nights available and your interest in maritime history, religion, architecture or food, then select a limited set of visits. We do not currently recommend a published Quanzhou package on this page. The final proposal should identify the city base, outlying sites, admissions and hosts rather than treating every example in this guide as included.",
    practicalPlanning: {
      timing:
        "Build a walk around a manageable old-city area, then give a museum or outlying site its own window. Kaiyuan Temple, Qingjing Mosque, transport heritage and other components tell different stories and need different arrangements. Check opening and worship considerations before choosing the sequence. A specialist music or craft appointment should not sit immediately after an uncertain train arrival.",
      walking:
        "City lanes and religious sites can involve thresholds, stone paving, steps, standing and crowded sections. Larger temple grounds or outlying sites add their own distances and shade conditions. Review the actual route, seats and remaining barriers before booking. A private vehicle reduces travel between visits but does not remove walking within them or guarantee doorstep access on narrow streets.",
      cost: "Compare the actual hotel and room, guiding expertise, outlying vehicle mileage, admissions and any hosted session. A neighborhood food walk, a sit-down meal and a privately arranged cultural visit are different services. Confirm meals, interpretation, performance or workshop fees and purchase expectations. Premium service should be described through the agreed arrangements rather than promises of exclusive access to public heritage.",
    },
    attractions: [
      "Kaiyuan Temple in Quanzhou",
      "Qingjing Mosque",
      "Quanzhou Maritime Museum",
      "Luoyang Bridge in Quanzhou",
      "Quanzhou historic streets",
    ],
    stays: [
      {
        label: "2 nights: one focused city day",
        advice:
          "Choose a coherent old-city route and selected interiors or a museum. Leave out distant components when they would reduce every stop to a brief photograph.",
      },
      {
        label: "3 nights: two complementary days",
        advice:
          "Separate the old-city introduction from a museum and a selected outlying heritage interest. Keep time for meals and an evening near the chosen hotel.",
      },
      {
        label: "4 nights or more: depth and cultural time",
        advice:
          "Add time for a confirmed specialist encounter, a different heritage theme or a slower city stay. More nights should deepen understanding rather than turn the full UNESCO list into an obligatory circuit.",
      },
    ],
    hotelAreas: [
      {
        name: "Old city and nearby neighborhood bases",
        advice:
          "Consider for walking and evening food. Check the actual lane, room sound, stairs, bathroom and where luggage leaves the vehicle. Historic atmosphere does not automatically mean quiet rooms, heritage interiors or an accessible stay.",
      },
      {
        name: "Modern city hotels with straightforward road access",
        advice:
          "Compare when room configuration, facilities and pickup matter. Check journeys to your actual visits and evening dining. A newer hotel can improve practical comfort while offering a different atmosphere from sleeping near historic lanes.",
      },
      {
        name: "Coastal or outlying stays within the wider Quanzhou area",
        advice:
          "Choose for the property and setting, with a separate plan for city heritage. Verify the real address and road connections before calling it a convenient old-city base. A landscape or resort stay should not silently replace a cultural-city hotel.",
      },
    ],
    tradeoffs: [
      {
        title: "A serial heritage listing needs a selective route",
        advice:
          "The UNESCO property connects religious, transport, production and administrative evidence across different places. You need not visit every component to understand the story. Choose examples with a guide who explains their relationships and distinguishes documented history from interpretation.",
      },
      {
        title: "Religious diversity is more than a checklist",
        advice:
          "Kaiyuan Temple and Qingjing Mosque provide different perspectives within the city's history and present life. Check what is open to visitors and follow dress and photography instructions. Sightseeing access does not imply access to worship areas or permission to interrupt religious activity.",
      },
      {
        title: "Choose an outlying visit that adds a new subject",
        advice:
          "Luoyang Bridge offers a transport-related chapter away from the central walk. Other sites may serve different production, religious or landscape interests. Confirm the actual destination and road journey instead of adding a distant stop only because it appears on a heritage list. Quanzhou's Luoyang Bridge is not the city of Luoyang in Henan.",
      },
      {
        title: "Confirm the form of a cultural encounter",
        advice:
          "Nanyin music can be a rewarding subject when a suitable session is available. A public performance, privately hosted explanation and informal rehearsal are different arrangements. Agree the host, language, duration, consent and fee before advertising the experience. No named performer or backstage access is automatic.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "fuzhou",
        advice:
          "Fuzhou adds courtyard lanes, provincial collections and jasmine tea, with Mawei shipbuilding history as a separately chosen subject. These differ from Quanzhou's maritime and religious landscape. Compare the actual rail stations, both hotel transfers and useful nights rather than treat the two cities as interchangeable short stops.",
      },
      {
        slug: "xiapu",
        advice:
          "Xiapu adds a working coast and tide-dependent landscapes to a cultural Fujian route. Choose the actual town or coastal base and whether photography matters. Compare full rail and road transfers, giving light windows and a substantive Quanzhou city stay their own time rather than promising a generic beach extension.",
      },
      {
        slug: "tainan",
        advice:
          "Tainan provides a separate comparison through temple neighborhoods, southern Taiwanese food and layered trading history. Shared cultural themes do not establish a direct connection or make the cities interchangeable. Check actual dated transport, entry and locally confirmed services, with useful nights in each place.",
      },
      {
        slug: "chaozhou",
        advice:
          "Chaozhou adds a distinct Teochew food, gongfu tea and old-city subject in eastern Guangdong. Its Kaiyuan Temple is not Quanzhou's temple of the same name. Compare the complete rail connection and both hotel transfers, giving each city useful nights rather than treating them as interchangeable brief heritage stops.",
      },
      {
        slug: "xiamen",
        advice:
          "Xiamen adds coastal city time and a separately planned Gulangyu visit. Choose a city or island hotel deliberately, accounting for ferries and luggage. Compare the actual rail stations and both hotel transfers before deciding whether Quanzhou is a day visit or a separate stay.",
      },
      {
        slug: "wuyishan",
        advice:
          "Wuyishan adds rock tea and a different landscape to a Fujian itinerary. Give scenery and the tea host useful days, compare the actual rail gateways and include both hotel transfers. A shared province does not make a fixed appointment safe immediately after an uncertain connection.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds a different southern trading city and Cantonese food tradition. Compare the actual flight or rail options and both hotel transfers before combining them. A shared maritime theme does not make the cities interchangeable or the transfer negligible.",
      },
      {
        slug: "jingdezhen",
        advice:
          "Jingdezhen adds a production and design perspective through porcelain history and confirmed studios. Compare the full regional connection and allow separate useful days; an historical trade connection does not mean a modern workshop appointment fits into a transfer afternoon.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit city walks, with rain and variable temperatures still possible. Summer can be hot and humid and needs attention to coastal storms and current notices. Winter may offer more comfortable walking for some travelers but is not a guarantee of warmth. Religious dates, holidays and individual opening arrangements can affect the plan as much as a seasonal label.",
    orientation:
      "Quanzhou is a city and wider administrative area in Fujian. The old city, museum sites, Luoyang Bridge and coastal or other outlying places are distinct planning points. The UNESCO listing is distributed rather than enclosed within one ticketed zone. Choose the actual hotel, station and component sites to build a realistic route.",
    experiences: [
      "Connect an old-city walk with selected religious heritage and a clear account of maritime trade",
      "Choose a museum or outlying transport-related site for a different part of the port story",
      "Explore southern Fujian food or an agreed Nanyin music encounter with time for context and respectful participation",
    ],
    planningNotes: [
      "Select heritage components for their relationships rather than trying to complete the list",
      "Check religious access, photography and host consent separately from general sightseeing",
      "Use actual station and hotel addresses when comparing a day visit with an overnight stay",
    ],
    arrival:
      "Quanzhou Jinjiang International Airport and the city's railway stations are different gateways. Quanzhou, Quanzhou South and other station names should not be treated as interchangeable pickups. Confirm the ticket and final hotel address, then calculate the complete transfer. If coming from Xiamen, include the journey from your actual hotel to the departure station rather than counting only time on the train.",
    gettingAround:
      "Combine manageable walking with road transfers to separate sites and museums. Narrow streets and busy areas can affect pickup and drop-off, so confirm the meeting point rather than assuming the vehicle reaches every entrance. Outlying heritage needs a real road plan. A boat or other visitor activity, if discussed, is not a substitute for the agreed city transport arrangements.",
    stayStrategy:
      "Choose the room and evening geography as carefully as the sightseeing route. A small old-city stay may offer atmosphere but needs checks on sound, stairs, temperature control and luggage. A modern property may suit the group better when access or room configuration is a priority. Leave time for local meals without a long drive after every day of touring.",
    firstTimerNote:
      "Quanzhou is most rewarding when its different sites explain each other. A temple, mosque, bridge and collection are not simply interchangeable monuments. Give the guide time to connect them, while respecting that several places remain part of contemporary religious or neighborhood life.",
    faqs: [
      {
        question: "Is Quanzhou worth visiting for a first China trip?",
        answer:
          "It can be when maritime history, religious heritage and southern Fujian food interest you. Give it its own useful time rather than adding a rushed stop solely for UNESCO status. With limited nights, compare it with your other cultural priorities.",
      },
      {
        question: "How many days should I spend in Quanzhou?",
        answer:
          "Two full days, commonly with three nights, allow a city introduction and a museum or selected outlying heritage chapter. Two nights suit one focused day. Add more for a confirmed specialist interest or a slower stay, not to visit every component automatically.",
      },
      {
        question: "Can I visit Quanzhou as a day trip from Xiamen?",
        answer:
          "A selective visit can work if the actual transport leaves worthwhile time. Calculate hotel-to-station journeys, the booked train and the Quanzhou transfer. Stay overnight when local evenings and more than one cultural chapter matter.",
      },
      {
        question: "Where should I stay in Quanzhou?",
        answer:
          "Compare an old-city base for neighborhood atmosphere with a modern hotel for its particular room and access. Check exact addresses, noise, stairs and dining. A coastal property is a different stay and is not automatically convenient for the historic city.",
      },
      {
        question: "Can visitors enter Quanzhou's temples and mosque?",
        answer:
          "Access depends on the specific site, date and area. Confirm current visitor rules and follow dress, photography and worship instructions. A sightseeing plan does not grant entry to every religious interior or guarantee a prayer arrangement.",
      },
      {
        question: "Do I need to see all the UNESCO sites?",
        answer:
          "No. Choose a coherent selection that explains the port's history and fits your interests and walking. The serial listing covers different locations; trying to complete it can replace understanding with road travel.",
      },
      {
        question: "Is food around Qingjing Mosque automatically halal?",
        answer:
          "No location-based guarantee is appropriate. Agree the evidence needed for certification, ownership, ingredients and preparation, then check the actual restaurant or hotel meal. Religious heritage does not establish every nearby kitchen's suitability.",
      },
    ],
    culturalStory: {
      title: "Understand a port through the places it connected",
      paragraphs: [
        "Quanzhou's maritime history is visible through several kinds of evidence rather than one waterfront monument. Religious sites, transport structures and museum collections can illuminate different aspects of trade and community. A selective itinerary works when the guide connects those examples and explains why a particular site belongs in the story, instead of presenting a string of unrelated superlatives.",
        "Those places also have contemporary meanings. Follow worship instructions, respect private spaces and ask before photographing people. A Nanyin session or cultural conversation can add depth when the participants welcome it and the language support is right. It should be described as the arrangement actually confirmed, without promising a private ceremony or exclusive cultural authority.",
      ],
    },
    foodStory: {
      title: "Use meals to explore southern Fujian at a comfortable pace",
      paragraphs: [
        "Quanzhou's food offers a different southern perspective from Cantonese dining. Local snacks, soups and seafood can introduce the range, but the group should choose according to appetite and preference rather than a compulsory tasting list. A seated meal can be a welcome change after temple grounds and neighborhood walking. Plan it near the day's route and leave time to eat without rushing to another entrance.",
        "Explain allergies and dietary needs before reservations. Seafood, stocks, sauces and shared preparation can matter even when a dish's name does not make them obvious. A mosque-area restaurant is not automatically suitable for every Muslim traveler, and a vegetable dish is not automatically vegetarian. Clarify the actual ingredients and preparation rather than relying on the neighborhood or cuisine label.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the chosen city base",
        description:
          "Transfer from the exact airport or station and keep the first meal and neighborhood walk manageable. Do not attach a fixed cultural appointment to an uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "A coherent old-city and religious-heritage route",
        description:
          "Choose selected sites with interpretation, breaks and respect for current access. The point is understanding their connections, not entering every religious building.",
      },
      {
        day: "Full day 2",
        title: "A different part of the maritime story",
        description:
          "Select a museum and an outlying heritage interest, or give an agreed cultural encounter its own time. Include the full road journey and a proper meal.",
      },
      {
        day: "Departure",
        title: "Continue through the actual gateway",
        description:
          "Work backward from the booked transport, station and luggage needs. This outline is a tailored planning example, not a published package with every option included.",
      },
    ],
  },
};
