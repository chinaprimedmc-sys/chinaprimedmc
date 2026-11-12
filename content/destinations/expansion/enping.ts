import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/enping.svg",
  alt: "Original Enping planning schematic comparing a hot-spring property stay, Encheng city services and selected village or aviation-history visits; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const enpingGuide: ExpandedDestination = {
  id: "enping",
  name: "Enping",
  region: "south",
  kicker: "A considered hot-spring stay with a distinct Wuyi cultural chapter",
  description:
    "Choose Enping for a well-assessed hot-spring stay, with clear room and bathing inclusions, useful downtime and selected village or aviation-history interests.",
  stay: "2 nights for a full day of rest; 3 for a distinct cultural outing",
  bestFor: "Hot-spring breaks, slower Wuyi journeys and selected local-history interests",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["jiangmen", "taishan-guangdong"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Enping Travel Guide: Hot Springs & Where to Stay",
    seoTitle: "Enping Guide: Hot Springs, Culture & Stays",
    seoDescription:
      "Plan an Enping hot-spring break: compare private tubs and shared pools, actual hotel inclusions, two-night stays and selected village or aviation-history visits.",
    answer:
      "Enping (恩平) is a county-level city within Jiangmen, Guangdong, best considered for a carefully chosen hot-spring stay rather than a fast circuit of attractions. Encheng (恩城) provides the city base; the actual hot-spring property may be elsewhere in the municipality. A selected Xiema village (歇马村) visit or a Feng Ru (冯如) aviation-history subject can add a different cultural interest. Two nights give one full day between arrival and departure; three can add a substantive outing while preserving rest. Choose the exact property, room and bathing arrangements first. A hot-spring label does not tell you which pools are open, whether bathing is included or whether the booked room has a private tub.",
    stayAnswer:
      "Two nights are a useful starting point for a property-led break: settle on arrival, keep one full day largely free, and leave without rushing breakfast or a final transfer. Three nights can support a separate village or aviation-history outing if it adds a real interest. One night may work for a convenient stop, but late arrival and early departure can leave little time to enjoy the facilities you paid for. More nights need a room, meals and indoor comfort that reward the pause rather than a longer list of nearby sights.",
    hotelAnswer:
      "Compare an actual hot-spring resort room with an Encheng city hotel and a separately booked bathing visit. A resort can reduce daily transfers when its facilities, meals and room genuinely suit the group. A city hotel may offer more practical services but needs the road and terms of any day visit checked. For a private tub, confirm the exact room category, whether it is indoors or outdoors, visibility from other rooms, water supply, cleaning, included fills and operating hours. Private does not automatically mean open-air, secluded or continuously available.",
    sightseeingQuestion: "Should I book a resort stay or a city hotel with a hot-spring visit?",
    sightseeingAnswer:
      "Choose a resort stay when the actual room, bathing, food and downtime are the main reason to travel. Choose a city hotel and a defined day visit when city services or cultural outings matter more and the full return remains comfortable. Compare the total experience, not just the room rate: admission, re-entry, pool access, meals, transfers and private-tub use may differ. A property-led day does not need a guide waiting throughout; ask for transfers and any cultural guiding to be quoted around the support you actually want.",
    visitorResources: [
      {
        label: "Enping municipal government",
        href: "https://www.enping.gov.cn/",
        scope:
          "Local background and dated notices, mainly in Chinese. Confirm the actual hot-spring operator, room services, village access and aviation-history venue separately. A destination description does not certify a water source, medical effect, private pool or current facility operation.",
      },
      {
        label: "Jiangmen municipal government",
        href: "https://www.jiangmen.gov.cn/",
        scope:
          "Wider Wuyi cultural context and regional public notices. Current local routes, exhibitions, hosts and resort terms need confirmation with the responsible institution or operator. Use these notices for regional background; arrange village visits and any family appointment separately.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and the exact station, then the complete road to the actual hotel. Enping station is a gateway rather than a guarantee of a short resort transfer. A rail duration excludes both terminal access and the final property road.",
      },
    ],
    serviceScope:
      "A proposal should name the hotel, room category, included bathing facilities, opening hours, meals, complete transfers and support contact. Clarify private-tub use separately from shared pools, spa treatments, swimming pools and children's facilities. For a cultural outing, identify the open public route or collection, guide language, admissions, meal and return. A village visit does not include occupied interiors or a resident host unless confirmed. The supplier should explain actual services; a local hot-spring reputation is not a medical qualification or proof of a specific water source and treatment.",
    routeAdvice:
      "Jiangmen city adds a wider Wuyi overseas Chinese history introduction and a separate Xinhui food-culture interest. Taishan adds selected emigrant-era architecture and a different family-root brief. Combine them only when each has useful time and the full roads make sense. No matching published Enping product is recommended here. Share dates, gateways, room and privacy expectations, bathing preferences, dietary needs and any cultural interest for a proposal showing exactly what the room and facilities include.",
    practicalPlanning: {
      timing:
        "Protect useful property hours instead of attaching the main bathing period to a late arrival. Ask when facilities open, which periods are busiest, whether checkout ends pool access and what happens if an outdoor area closes. A cultural day should have its own confirmed route and comfortable return. Avoid using every free hour for transfers; the point of a restful stay is time to use the room, eat well and pause.",
      walking:
        "Review the actual room-to-pool route, lifts, changing areas, wet surfaces, handrails, seating and toilets. A garden-style resort may involve slopes and outdoor paths. A private tub can have a high edge even when the bedroom is accessible. For a village or exhibition, check thresholds, stairs and seating separately. Ask how guests who do not bathe can enjoy the same stay, rather than assuming everyone wants identical facilities.",
      cost: "Compare the booked room, number of guests, breakfast, dinner options, shared-pool admissions, private-tub fills and any re-entry or towel charges. Spa treatments, upgrades and children's activities may be separate. Quote full transfers and actual cultural guiding without assuming a vehicle and guide must wait through every rest day. Higher prices should buy demonstrably better sleep, privacy, food, service and support, rather than a vague luxury or wellness label.",
    },
    attractions: [
      "A named Enping hot-spring property, assessed by actual room and open facilities",
      "Encheng / 恩城 city services and a selected modest local walk",
      "Xiema village / 歇马村, with an identified public heritage route and current access",
      "A confirmed Feng Ru / 冯如 aviation-history exhibition or public heritage venue",
      "A regional meal chosen for the group's appetite and actual kitchen capacity",
      "Unscheduled property time that the booked room, food and facilities genuinely support",
    ],
    stays: [
      {
        label: "1 night / a convenient short pause",
        advice:
          "Works only when arrival and departure leave useful facility time. Confirm opening and checkout terms. A bargain room can be poor value if you arrive after bathing closes and leave before a comfortable breakfast.",
      },
      {
        label: "2 nights / one full property day",
        advice:
          "Choose a room and meal plan that reward staying put. Leave time for bathing if suitable, reading, a gentle walk and rest. Guests who do not bathe should still have comfortable places to sit and a worthwhile stay.",
      },
      {
        label: "3 nights / add a distinct cultural day",
        advice:
          "Can separate a restful property day from a confirmed village or aviation-history subject. Add the third night for contrast and comfort, not to fill the schedule with unrelated shopping stops. One suitable base may be easier than a short split stay.",
      },
    ],
    hotelAreas: [
      {
        name: "A specific hot-spring property / a room-led break",
        advice:
          "Choose by booked category, quiet, bathroom, climate control, food and actual pool access. Ask whether photos show the room being sold. Check indoor comfort, construction or event noise and the route to meals. A property name alone does not establish a geothermal source or premium service.",
      },
      {
        name: "Encheng / city services with a separate outing",
        advice:
          "Useful when a city room, meals and local services matter more than continuous resort access. Check the complete road and day-visit terms before comparing prices. A city stay with a short bathing visit is a different product from two nights enjoying a resort.",
      },
      {
        name: "A specific rural address / culture-led only when it helps",
        advice:
          "Assess any village-side room on actual facilities, dampness, noise, meals and vehicle access. A nearby heritage interest does not make a rural property a full-service retreat or authorize household visits. Choose the city or resort alternative when it better supports comfort.",
      },
    ],
    tradeoffs: [
      {
        title: "A private tub and a shared bathing garden offer different value",
        advice:
          "A private tub may suit quiet or privacy preferences, while a shared complex can offer more variety. Ask about sightlines, water provision, cleaning, temperature, opening and the walk from the room. Confirm whether children and non-bathing companions have appropriate alternatives. Do not infer the terms from a photograph or from the word villa.",
      },
      {
        title: "Warm water is a leisure choice, not a treatment plan",
        advice:
          "Ask the operator what it can document about source, water handling, temperature and facility rules. Do not use a mineral label as evidence of a health benefit. Follow the actual operator's guidance; guests with medical questions should obtain individual advice before choosing heat exposure. The itinerary should remain enjoyable for anyone who decides not to bathe.",
      },
      {
        title: "Xiema is an opportunity to ask about learning and village life",
        advice:
          "The village is associated with an educational tradition. A useful visit asks how that story is evidenced in particular buildings, inscriptions or documented lives, and what has changed in present use. A tourism label does not establish every claimed examination success or an original interior. Choose visible public evidence and time for explanation rather than promise a resident classroom or private ceremony.",
      },
      {
        title: "Feng Ru adds a different kind of cross-Pacific connection",
        advice:
          "Feng Ru's early aviation work in the United States and China provides a subject distinct from a general emigrant-house visit. Use a confirmed exhibition to separate surviving objects, photographs, documentary evidence and replicas. A displayed aircraft model is not necessarily an original machine. The historical story does not imply access to a workshop, flight activity or research collection.",
      },
      {
        title: "A restful break should still work when outdoor plans change",
        advice:
          "Assess the room, seating, meals and indoor facilities before paying for a scenic bathing photograph. Rain, maintenance or operating decisions can change an outdoor plan. Know the cancellation and replacement terms, and confirm any cultural alternative's opening. Better comfort and clear support can matter more than the number of pools advertised.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jiangmen",
        advice:
          "Jiangmen city offers a broader Wuyi overseas Chinese history introduction and selected city or Xinhui subjects. Choose exact bases and full roads. A regional museum day does not automatically include Enping resort admissions, private bathing or a village appointment.",
      },
      {
        slug: "taishan-guangdong",
        advice:
          "Taishan adds Taicheng, selected Duanfen architecture and a separately scoped ancestral-village interest. Give each cultural subject a reason and useful local hours. Its Shangchuan or Xiachuan island chapter requires a separate ferry and hotel plan rather than a casual extension of an Enping rest day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Cooler dates can make warm-water leisure appealing, but the actual room heating, outdoor approach and open facilities still matter. Summer plans need shade, cooling and comfortable alternatives for guests who do not want hot bathing. Rain and holiday demand can change the atmosphere sharply. Confirm current maintenance, events and pool operation around the proposed dates. A cultural appointment follows the actual venue's opening and host availability, not the resort's advertised seasonal calendar.",
    orientation:
      "Enping is a county-level city within Jiangmen in Guangdong's wider Wuyi cultural region. Encheng provides the urban base, while resort properties and selected rural interests occupy different addresses. Xiema village is a particular cultural subject rather than a name for every local village. Feng Ru provides a local aviation-history interest whose actual visitor venue must be specified. Choose the resort for its actual room and included pools, then add a named cultural visit if it fits the stay.",
    experiences: [
      "Enjoy a genuinely comfortable property stay with room and bathing terms made clear",
      "Explore Xiema's educational heritage through specific public evidence",
      "Understand Feng Ru's aviation story through a confirmed collection and careful interpretation",
    ],
    planningNotes: [
      "Book the actual room and bathing entitlement, not a generic hot-spring label",
      "Leave a full day largely free when rest is the reason to travel",
      "Give a cultural outing its own confirmed venue, language and complete roads",
    ],
    arrival:
      "Compare dated trains to the exact gateway and the full road to the booked property. Enping station does not describe the resort entrance or eliminate the final transfer. A direct vehicle from Jiangmen or another Guangdong base needs actual addresses, breaks and useful arrival time. Check whether facilities will still be open after check-in. Keep an important cultural session away from uncertain arrival and allow the complete return road before an onward train.",
    gettingAround:
      "For a property-led stay, arrange the support actually needed: arrival and departure transfers, a reachable contact and a separately guided cultural day where useful. Clarify luggage, vehicle waiting and pickup rather than assume full-day touring is necessary. Inside the resort, confirm the room-to-facility route. Village public access, household invitations and exhibition interpretation are different arrangements; a private car does not supply specialist knowledge or permission to enter closed spaces.",
    stayStrategy:
      "Two nights support one full day of rest; three can add a genuinely different cultural outing. Choose the exact room around quiet, bathroom, temperature control, food, privacy and a comfortable alternative to bathing. Compare shared pools, a private tub and a city-based day visit on their actual terms. A high-end proposal should make the pause work well, with sensible support and clear inclusions, rather than sell every free hour as another activity.",
    firstTimerNote:
      "Ask what your particular room rate includes and what a non-bathing companion would enjoy. Those two questions quickly reveal whether the property fits the group. Then decide whether a cultural outing adds something you care about. A well-chosen room, a thoughtful meal and an unhurried day can provide more value than visiting multiple resorts to compare their entrances.",
    faqs: [
      {
        question: "Is Enping worth visiting for hot springs?",
        answer:
          "It can be when an actual property offers the room comfort, bathing format, food and downtime you want. Choose the specific hotel and inclusions rather than the destination label alone. A two-night stay gives one full day to enjoy the facilities between transfers.",
      },
      {
        question: "How many nights should I spend in Enping?",
        answer:
          "Two nights are a useful starting point for one full property day. Three can add a separate village or aviation-history outing. One night needs favorable arrival, opening and departure times; a longer stay should be justified by the actual room, food and interests.",
      },
      {
        question: "Does an Enping hot-spring hotel include a private tub?",
        answer:
          "Not automatically. Confirm the exact room category, privacy, water supply, cleaning, included fills and operating hours. Shared-pool access, spa treatments, swimming pools and a private tub can have different terms and charges.",
      },
      {
        question: "Should I stay in Encheng or at a hot-spring resort?",
        answer:
          "Choose a resort when its actual facilities and downtime are central. Choose Encheng for city services and a separately arranged day visit when that better fits the trip. Compare complete transfers, admission, re-entry, meals and room comfort rather than only the nightly rate.",
      },
      {
        question: "What can I do in Enping besides bathing?",
        answer:
          "A selected Xiema village route can explore educational and rural heritage, while a confirmed Feng Ru exhibition can introduce early aviation history. Check the actual venue, opening and interpretation. These should be substantive choices, not guaranteed household visits or flight activities.",
      },
      {
        question: "Is hot-spring bathing suitable for every guest?",
        answer:
          "No single itinerary can establish that. Follow current facility rules and obtain individual medical advice where relevant. Confirm temperature, access and alternatives, and make sure the stay remains comfortable and worthwhile for anyone who chooses not to bathe.",
      },
      {
        question: "Which published Enping itinerary is recommended?",
        answer:
          "No matching published product is recommended here. Request a tailored proposal naming the room, bathing inclusions, meals, full transfers and any separately confirmed cultural outing. The sample outline is not a package, treatment program or guarantee of every advertised facility.",
      },
    ],
    culturalStory: {
      title: "A quiet stay can make room for a more precise cultural question",
      paragraphs: [
        "Enping's place within the Wuyi region connects it with wider stories of movement, education and overseas ties, but those themes become useful through specific evidence. At Xiema, ask which accessible building, inscription or documented life supports an account of village learning. Distinguish a remembered tradition from a statistic or date that needs a source. How a place is repaired, interpreted and used today is part of the story, not a reason to describe the whole village as unchanged. A modest route with good explanation can offer more than a fast circuit of impressive-sounding labels.",
        "Feng Ru introduces a different line of inquiry: early powered flight and technical work across the Pacific. A confirmed exhibition can help visitors follow the relationship between an individual life, the conditions of experimentation and later commemoration. Photographs, documents and models each provide different evidence. Identify a replica as a replica and avoid making the display promise a working aircraft or laboratory encounter. This cultural day can complement a restful stay without turning either history or relaxation into a checklist.",
      ],
    },
    foodStory: {
      title: "Good meals are part of the reason to stay put",
      paragraphs: [
        "For a two-night resort break, compare actual breakfast and dinner provision before choosing the room. Ask whether meals use a buffet, set menu or à la carte service, what the stated rate covers and which kitchens are operating on the booked dates. A country-style chicken dish, tofu preparation or seasonal vegetable can start a useful conversation about the actual kitchen rather than a claim that every ingredient is local or farm-grown. Balance portions and appetite; a restful schedule does not need a heavy banquet at every meal.",
        "Confirm stocks, meat, fish, soy, wheat-containing sauces, peanuts, sesame and shared preparation where relevant. A vegetable dish is not automatically vegetarian, and a large buffet does not establish allergen-safe preparation. Serious requirements need the actual kitchen's confirmed capacity and an alternative. On a village outing, agree lunch and drinking water before departure. If evening dining is limited at a remote property, know the realistic option instead of discovering after arrival that the attractive room has no suitable dinner.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Check the room and settle into the actual facilities",
        description:
          "Complete the full gateway road, review the booked room and confirm pool or private-tub terms. Keep the first meal and any bathing optional and unhurried. An uncertain arrival should not determine whether the main experience is possible.",
      },
      {
        day: "Full day 1",
        title: "Keep the rest day restful",
        description:
          "Use the confirmed facilities if suitable, with time for meals, reading, a modest walk and sitting comfortably. Non-bathing guests should have worthwhile alternatives. Avoid adding a circuit of resorts or shopping stops simply because the day has no formal sightseeing.",
      },
      {
        day: "Optional full day 2 / three-night stay",
        title: "Choose one substantial cultural interest",
        description:
          "Use a confirmed Xiema route or Feng Ru aviation-history venue with the appropriate interpretation, meal and full return. If both are proposed, test the actual roads and useful visiting time. Public visiting does not include resident-hosted or research access unless separately arranged.",
      },
      {
        day: "Departure",
        title: "Leave without losing the value of the pause",
        description:
          "Allow breakfast, bags, checkout and the complete station or next-hotel road. Continue to a clearly chosen Jiangmen or Taishan chapter with its own useful time. This outline is illustrative, not a published package, treatment plan or guarantee of pools, specialists and private access.",
      },
    ],
  },
};
