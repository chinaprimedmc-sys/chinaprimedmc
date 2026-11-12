import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/tainan.svg",
  alt: "Tainan planning schematic comparing a central historic-city base, a separate Anping chapter and the outlying high-speed rail arrival; original diagram, not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const tainanGuide: ExpandedDestination = {
  id: "tainan",
  name: "Tainan",
  region: "east",
  kicker: "Temple streets, Anping and meals at a southern pace",
  description:
    "Give Tainan's historic streets, temples and food their own stay, with a considered central or Anping base and a clear distinction between the high-speed and city rail stations.",
  stay: "3 nights, or 2 for a focused visit",
  bestFor: "Urban history, temple culture and southern Taiwanese food",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["taipei", "quanzhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Tainan Travel Guide: Historic Streets, Food & Where to Stay",
    seoTitle: "Tainan Travel Guide: Food & Where to Stay",
    seoDescription:
      "Plan 2–3 nights in Tainan: compare central and Anping stays, temple walks, local food, HSR versus city-station transfers and a Taipei connection.",
    answer:
      "Tainan (台南 / 臺南) is worth a separate stay for the relationship between temple life, historic streets and a distinctive southern food culture. Three nights give two full days: one for a selected central-city route and another for Anping or a deeper food-and-history interest. The historic center, Anping and the high-speed rail station are different places, not one compact arrival-and-sightseeing area. Choose the hotel around the evenings and meals you want, then build short, coherent walks with breaks for heat rather than trying to visit every temple and snack stall.",
    stayAnswer:
      "Three nights provide two full days and useful evenings without requiring a dense circuit. Two nights can work for one focused city day when arrivals leave time for a second short chapter. A Taipei day trip is a selective visit only after counting both station transfers and the return journey; it gives up much of the slower food and neighborhood rhythm. Four nights can suit a specialist interest or an easier pace, but nearby counties and landscapes still need their own route rather than being treated as automatic additions.",
    hotelAnswer:
      "Start with a well-placed West Central District hotel when historic-city walks, temple streets and evening meals are the priority. Compare the actual address with your chosen route: the district is not one pedestrian zone. Anping offers a different setting for its heritage chapter or a particular property, with separate journeys into the center. A modern city hotel can provide easier pickup, room layout and facilities than a small converted house. An attractive historic interior does not establish soundproofing, lifts, luggage access or a staffed reception at every hour.",
    sightseeingQuestion: "Should you stay in central Tainan or Anping?",
    sightseeingAnswer:
      "Choose the center for repeated access to historic streets and meals, using Anping as a distinct outing. Choose an Anping property when that setting or the actual hotel is an important part of the stay, accepting the journey to central-city visits. Anping Old Fort, Anping Tree House and the surrounding neighborhood tell different stories and have different access arrangements. Neither base makes all of Tainan walkable. For most short stays, one carefully chosen hotel gives more useful time than moving between the two.",
    visitorResources: [
      {
        label: "Tainan City tourism portal",
        href: "https://www.twtainan.net/en/",
        scope:
          "Official background on Tainan's neighborhoods, heritage and food. Confirm individual openings, restoration works, event dates and visitor arrangements with the responsible venue. A listing is not a private host, reserved temple access or evidence that every historic interior is currently available.",
      },
      {
        label: "Taiwan Tourism Administration",
        href: "https://eng.taiwan.net.tw/",
        scope:
          "Destination and wider-route information for comparing Tainan with other Taiwan stops. Confirm the actual location, transport operator and dated service separately. General tourism information does not establish local service delivery or entry eligibility.",
      },
      {
        label: "Taiwan High Speed Rail",
        href: "https://en.thsrc.com.tw/",
        scope:
          "Official HSR schedules, ticket and station information. HSR Tainan station is distinct from the central conventional-rail Tainan station. Check the actual train, onward connection, ticket terms and full hotel transfer before booking around a short rail duration.",
      },
      {
        label: "Bureau of Consular Affairs",
        href: "https://www.boca.gov.tw/mp-2.html",
        scope:
          "Official starting point for Taiwan visa and consular requirements. Check the actual traveler documents, purpose, intended stay and onward journey. Mainland China, Hong Kong or Macao admission does not itself grant Taiwan entry, and this guide does not determine eligibility.",
      },
    ],
    serviceScope:
      "A tailored Tainan proposal should identify the actual room, station or airport, transfers, selected historic route, guiding language, admission basis and meal arrangements. Taiwan providers and local delivery must be confirmed before any service commitment. A food walk, seated meal, public temple visit and privately hosted cultural explanation are different arrangements. Specify dietary capacity, walking, rest, pickup and a rain or heat alternative. Specialist access, a private kitchen or a religious encounter is included only through an actual agreed arrangement, never implied by a cultural-tour label.",
    routeAdvice:
      "Pair a real Tainan stay with Taipei when the wider journey benefits from northern city culture and a contrasting southern chapter. Compare the chosen HSR service, the outlying Tainan station and both hotel transfers. Quanzhou offers a separate comparative interest in southern Fujian heritage, not a nearby day trip or an assumed direct connection. No matching published Tainan itinerary is recommended here. Use the illustrative three-night outline to request a separately confirmed local proposal, stating food interests, walking tolerance, room preferences and the balance between central history and Anping.",
    practicalPlanning: {
      timing:
        "Organize each half-day around one part of the city and an actual meal window. A stall's breakfast or lunch hours may matter more than its place on a famous-food list. Put longer exposed walks earlier when conditions suit, with a seated lunch and indoor or hotel time in the hotter part of the day. Check heritage openings and restoration before promising interiors. Anping belongs in its own sequence, not as a rushed final stop before an outlying HSR departure.",
      walking:
        "Expect uneven paving, temple thresholds, narrow lanes, steps, road crossings and periods without shade. Traffic continues through parts of the historic city; an old neighborhood is not automatically a car-free walking area. Check the actual approach, seating, toilets and vehicle meeting point. A shorter route with good explanation can be more rewarding than many temple courtyards in heat. Review small-property stairs and luggage access separately from whether the room itself is comfortable.",
      cost: "Compare the exact room, occupancy, beds, breakfast, total charges and cancellation terms. A small heritage house and a modern full-service hotel provide different benefits. Clarify whether a food route includes tastings, a full seated meal, transport or only guiding; the number of stalls does not measure value. Extra admissions, private sessions and transfers need their own basis. Prices may be shown as NT$ or TWD, New Taiwan dollars; confirm payment options and cash needs for the actual venues rather than assuming every stall accepts a foreign card.",
    },
    attractions: [
      "The Confucius Temple and nearby streets as a focused central-history chapter",
      "Chihkan Tower and its layered site history, with current accessible areas checked",
      "A selected West Central District route through temple neighborhoods and present-day streets",
      "Anping Old Fort and the changing history of the settlement around it",
      "Anping Tree House as a distinct warehouse-and-vegetation site, not part of the fort interior",
      "A considered food route with seated alternatives and actual serving hours",
      "A suitable museum visit chosen for the collection and openings rather than as a generic rain stop",
    ],
    stays: [
      {
        label: "2 nights: a focused city introduction",
        advice:
          "Use one full day for a coherent central route and meals. A short Anping chapter may fit on arrival or departure only when the complete transfers leave useful time. This is not a promise to cover every important temple, both museum collections and a long tasting list.",
      },
      {
        label: "3 nights: central history and a separate Anping chapter",
        advice:
          "Two full days let the older city and Anping have their own rhythm, with room for heat breaks and proper meals. Keep one base, then adjust the order to openings and weather. The extra evening is valuable when it supports a good meal or neighborhood time rather than another obligatory sight.",
      },
      {
        label: "4 nights: deepen one real interest",
        advice:
          "Add museum interpretation, a genuinely arranged food or craft session, or a slower pace. An outlying wetland or other landscape is a separate route with its own season, access and transport. Do not extend a city stay by filling it with vaguely described countryside visits that have not been checked.",
      },
    ],
    hotelAreas: [
      {
        name: "West Central District / historic-city and food access",
        advice:
          "Map the actual hotel to the chosen temple route, dinner and pickup. Compare noise, road crossings, lifts and the luggage approach. A central address helps but does not remove the need for selected transfers or make every lane suitable for a guest with limited mobility.",
      },
      {
        name: "A small converted house / character with practical tradeoffs",
        advice:
          "Confirm the exact room, stairs, bathroom privacy, soundproofing, reception hours and breakfast. Ask how luggage reaches the door and how early pickup works. A photogenic courtyard may be shared, and a historic-building label does not establish a quiet private retreat or full-service staffing.",
      },
      {
        name: "Anping / a different heritage or property-led stay",
        advice:
          "Choose for a particular setting and show the journey into the central city. Confirm the evening dining options, transport and actual walk to the Anping visits. A waterfront description does not guarantee a sea view, swimming beach or a car-free route to the fort.",
      },
      {
        name: "A modern city hotel / room comfort and straightforward transfers",
        advice:
          "Compare the actual address, room layout, beds, breakfast and useful facilities. A newer property outside the historic core may suit a family or an easier pickup, but requires a clear plan for meals and visits. Choose the benefit intentionally rather than assuming a major brand is in the old city.",
      },
    ],
    tradeoffs: [
      {
        title: "HSR Tainan station is not the central Tainan railway station",
        advice:
          "The high-speed rail station is in Guiren, away from the historic center. Conventional TRA Tainan station serves a different city location. A rail transfer via Shalun may be an option, but the actual dated timetable, connection and luggage route need checking. Compare that full journey with a direct road transfer instead of confusing a fast intercity train with hotel-door arrival.",
      },
      {
        title: "The central city and Anping tell different histories",
        advice:
          "A central route can connect the Confucius Temple, selected religious sites and present-day streets. Anping adds a different settlement, trading and coastal-history chapter. Avoid repeating loosely explained temple stops simply to increase the count. The two areas can complement each other over a stay, but require actual travel and their own walking routes.",
      },
      {
        title: "Anping Old Fort is not an unchanged Dutch town",
        advice:
          "The site relates to Fort Zeelandia and later periods, with surviving traces and subsequent structures requiring explanation. Chihkan Tower, associated with a different former Dutch site, is not the same monument. Anping Tree House is another subject again. Distinguish historical layers and the actual remains rather than describing every present building as an intact seventeenth-century original.",
      },
      {
        title: "Temple life is not a performance on request",
        advice:
          "Choose a small number of places with enough interpretation to explain what visitors see. Opening, worship, processions, photography and access can vary. A public visit does not guarantee a ceremony, permission for portraits or private access to religious areas. Festivals can change the experience and traffic; arrange around current information rather than staging an encounter for the itinerary.",
      },
      {
        title: "A food itinerary needs timing and appetite, not just more dishes",
        advice:
          "Beef soup, milkfish, rice dishes and sweet snacks can each deserve a different meal or a shared portion. Some vendors have narrow serving windows or sell out, so use alternatives rather than promising one famous stall. A guide should explain ingredients and choices, offer seating when needed and leave room for dinner. No visitor has to try every signature food to understand Tainan.",
      },
      {
        title: "Heritage character and luxury comfort require separate evidence",
        advice:
          "A converted house can be memorable while offering a different service level from a full-service hotel. Verify stairs, quiet, bathroom, bedding, staff availability and vehicle access. A higher budget can improve the room and interpretation without buying special religious access or an empty historic street. Quote the actual experience rather than using exclusive as a substitute for detail.",
      },
      {
        title: "The gateway and Taiwan entry need their own confirmation",
        advice:
          "Kaohsiung International Airport and Tainan Airport have different locations and service networks. Use actual dated flights, not an old route list or the assumption that the airport sharing the city name is always best. Check Taiwan admission for the actual traveler and any onward destination separately. A mainland, Hong Kong or Macao itinerary does not establish permission or local services for Tainan.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "taipei",
        advice:
          "Taipei adds a northern museum, tea and contemporary-city chapter. Choose useful nights in both cities, then check the actual HSR train and both hotel transfers. Tainan HSR station is outside the historic center. Neither a short rail segment nor a shared Taiwan itinerary removes local-provider and booking confirmation.",
      },
      {
        slug: "quanzhou",
        advice:
          "Quanzhou offers a separate comparison through southern Fujian religious and trading heritage. Similar themes do not make the cities interchangeable or establish a direct service between them. Compare the actual flights or other lawful dated connections and admission requirements; each destination deserves its own stay and locally confirmed arrangements.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler part of the year often makes exposed city walks more comfortable, though rain and temperature changes still occur. Summer can be very hot and humid, with heavy rain and typhoon-related disruption possible. Build shorter outdoor sections, seating and a useful indoor alternative into the day. Temple events and holiday periods can affect streets, noise, availability and travel. Confirm actual dates rather than assuming a festival takes place on the same Gregorian day each year.",
    orientation:
      "Tainan is a southern city with a historic central area and a separate Anping chapter toward the coast. Its wider municipal area reaches well beyond the short visitor circuit. HSR Tainan station in Guiren, the conventional-rail Tainan station, Tainan Airport and Kaohsiung International Airport are distinct gateways. A Tainan place name does not establish a central location. Use the full property, station and terminal details for every transfer, especially when the itinerary is sold around a fast Taipei connection.",
    experiences: [
      "Read a selected temple-and-street route through Tainan's changing urban history",
      "Give Anping its own chapter, distinguishing the fort, Tree House and surrounding neighborhood",
      "Enjoy a paced food introduction with ingredients, serving windows and seated options explained",
    ],
    planningNotes: [
      "Compare the actual central or Anping hotel address, noise, stairs and evening meals",
      "Distinguish HSR Tainan, central TRA Tainan station and the complete hotel journey",
      "Confirm local providers, heritage access, food alternatives and Taiwan entry before committing",
    ],
    arrival:
      "HSR Tainan station is in Guiren and requires onward travel to a central hotel. TRA Tainan station is a different conventional-rail arrival in the city; do not send a pickup to the wrong one. A connection using Shalun needs the current timetable and actual luggage route checked. Kaohsiung International Airport uses KHH; Tainan Airport uses TNN and has a different service network. Choose from dated flights and the full transfer, not airport names alone. Keep prepaid meals or specialist appointments away from an uncertain arrival.",
    gettingAround:
      "Combine short neighborhood walks with selected vehicle transfers. The historic city contains working streets and traffic, while Anping is a separate outing rather than the far end of every central walk. Heat, shade, road crossings and seating should shape the route. Check pickup points where lanes restrict vehicle access. Cycling or scooters are not assumed parts of a comfortable cultural stay; if requested, suitability, operator arrangements and current local rules need separate review.",
    stayStrategy:
      "One base usually works for two or three nights. A central hotel can make meals and evening walks easier; an Anping property may justify its transfers through a particular room or setting. Compare the exact room's soundproofing, stairs, beds and bathroom before paying for atmosphere. A slower afternoon at the property is part of the experience when heat makes another exposed walk unattractive. Avoid a hotel move simply to suggest the center and Anping are two distant holidays.",
    firstTimerNote:
      "Tainan's appeal is cumulative: a well-explained temple, a street still in everyday use, a meal at the right hour and another neighborhood that adds context. A short list can produce a rich day. Stay overnight when those meals and evenings matter, and let the route reflect energy and appetite rather than measure success by the number of dishes or heritage gates photographed.",
    faqs: [
      {
        question: "How many nights should I spend in Tainan?",
        answer:
          "Three nights give two full days for the central city and a separate Anping or deeper food-and-history chapter. Two nights can work for a focused visit with convenient arrivals. Count both station transfers and useful evenings before deciding. More nights should support a real interest or easier pace rather than a longer checklist.",
      },
      {
        question: "Is Tainan worth staying in rather than visiting from Taipei?",
        answer:
          "Stay when historic streets, temple interpretation and meals are genuine interests. An overnight gives the visit a different rhythm, while a day trip is a selective introduction after the full return rail and road journey. Fast HSR travel does not put you directly in Tainan's historic center.",
      },
      {
        question: "Should I stay in central Tainan or Anping?",
        answer:
          "Choose a well-placed central hotel for repeated historic-city walks and meals. Choose an Anping property for its particular setting or hotel experience, with separate central-city transfers. Review the exact room, street, evening options and walking. One base usually works better than changing hotels during a short stay.",
      },
      {
        question: "Are Tainan HSR station and Tainan railway station the same?",
        answer:
          "No. The HSR station is in Guiren outside the historic center; conventional TRA Tainan station is a different city arrival. Check a direct road transfer or an actual Shalun rail connection with current timetables and luggage needs. Use the full station name and ticket when arranging pickup.",
      },
      {
        question: "Can I visit Anping Old Fort and Chihkan Tower as one site?",
        answer:
          "No. They are different places associated with different historical sites and later layers. Anping Tree House is another separate visit. Choose the actual routes and check current access rather than treating them as one intact Dutch complex or assuming every interior is available.",
      },
      {
        question: "What should I eat in Tainan if I do not want a packed food tour?",
        answer:
          "Choose a few dishes across real meals: for example, beef soup when wanted, a milkfish preparation, a rice dish or a smaller sweet stop. Explain ingredients and share portions where practical. No dish is compulsory. A seated meal and a short food walk can be more comfortable than repeated queues and standing.",
      },
      {
        question: "Is Tainan suitable for travelers who prefer less walking?",
        answer:
          "A shorter route with selected transfers, seating and cooler parts of the day can help, but check actual temple steps, thresholds, lanes, crossings and hotel access. A private car does not remove every approach. Describe the guest's needs in advance so the proposed visits can be assessed individually.",
      },
      {
        question: "Which airport should I use for Tainan?",
        answer:
          "Compare actual dated services at Tainan Airport, TNN, and Kaohsiung International Airport, KHH, with the complete onward transfer. A Taipei flight plus rail is another separate journey. The city name or a short flight segment alone does not establish the most practical arrival.",
      },
      {
        question: "Does this guide include a bookable Tainan tour?",
        answer:
          "No matching published product is recommended here. The sample stay illustrates a possible structure. Request a proposal with dates, hotel expectations, food preferences and walking needs; local providers, availability, inclusions and Taiwan entry arrangements must be confirmed separately before a service commitment.",
      },
    ],
    culturalStory: {
      title: "Understand the city through different historical layers",
      paragraphs: [
        "Tainan's history can be approached through religious institutions, education, trading places and changing political periods rather than a single oldest-city slogan. The Confucius Temple, Chihkan site and Anping do not tell the same story. A good route explains their relationships while distinguishing surviving material, later construction and restoration. The small streets between major sites also matter, but present-day homes and businesses should not be described as unchanged historical exhibits.",
        "Temples continue to serve worshippers and local communities. Interpretation should help guests understand what they encounter without interrupting ritual or promising a ceremony for the visit. Ask before photographing people, follow local instructions and establish permission for any privately hosted explanation. A smaller route with time for questions can reveal more than a sequence of similar courtyards visited only because each appears on a must-see list.",
      ],
    },
    foodStory: {
      title: "Plan around serving hours, portions and the guest's appetite",
      paragraphs: [
        "Tainan's food reputation is best explored through choices with context. Beef soup and milkfish offer different meals; danzai noodles, rice dishes and a smaller sweet stop add other possibilities. Serving windows and portion sizes matter, and different kitchens prepare their own versions. Avoid assuming every visitor wants an early meat breakfast or every dish belongs in one afternoon. Use a short list of primary venues and alternatives rather than making a queue at one famous stall essential to the experience.",
        "Clarify beef, pork, shellfish, fish, peanuts, soy, wheat, eggs and stocks or sauces before selecting dishes. A fish dish may contain bones, a vegetable preparation may use animal stock, and leaving off a garnish may not address shared equipment or an allergy. Explain what can genuinely be accommodated and offer a seated alternative. Food adds value when guests understand the choice and enjoy eating it, not when tasting counts replace a comfortable meal.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual hotel and enjoy a nearby meal",
        description:
          "Allow the complete journey from the booked HSR station, conventional railway station or airport. Settle in before a short local walk if timing and heat suit. Keep essential food appointments away from uncertain transport and leave appetite for a proper meal.",
      },
      {
        day: "Full day 1",
        title: "A coherent central-city history and food route",
        description:
          "Choose the Confucius Temple area or another defined historical sequence, adding selected religious or museum interests with current access checked. Keep exposed sections manageable, protect lunch and return to the hotel when useful. A second short walk or meal can give the evening its own purpose.",
      },
      {
        day: "Full day 2",
        title: "Anping with its separate layers explained",
        description:
          "Visit selected Anping places rather than treating the fort, Tree House and neighborhood as one attraction. Plan walking, shade and a meal around actual openings and conditions. Alternatively, use the day for a genuinely arranged deeper food, collection or cultural interest when that better suits the guests.",
      },
      {
        day: "Departure",
        title: "Protect the onward rail or airport connection",
        description:
          "Allow the actual hotel transfer and boarding time, using the correct station or airport. This three-night outline is illustrative, not a published product or guarantee of local providers, historic interiors, private temple access, particular food vendors or Taiwan admission.",
      },
    ],
  },
};
