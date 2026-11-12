import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/macao.svg",
  alt: "Macao planning schematic comparing the peninsula's historic city, Cotai resort stays and separate Taipa or Coloane interests; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const macaoGuide: ExpandedDestination = {
  id: "macao",
  name: "Macao",
  region: "south",
  kicker: "Give the historic city and the resort stay different roles",
  description:
    "Choose a Macao day trip or overnight around peninsula heritage, Macanese food and a particular property, with Cotai, Taipa, Coloane and cross-boundary logistics clearly distinguished.",
  stay: "A focused day trip or 2–3 nights",
  bestFor: "Urban heritage, Macanese food and a considered hotel stay",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["zhuhai", "hong-kong", "guangzhou", "shenzhen"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Macao Travel Guide: Historic City, Cotai & Where to Stay",
    seoTitle: "Macao Travel Guide: Heritage, Cotai & Stays",
    seoDescription:
      "Plan Macao or Macau as a day trip or 2–3-night stay, with peninsula and Cotai hotels, Taipa, Macanese food, historic walks and crossing advice.",
    answer:
      "Macao (澳门), also widely written Macau, is a Special Administrative Region with separate immigration arrangements and its own currency. A rewarding visit distinguishes the peninsula's historic streets and religious places from Cotai's large resort complexes, with Taipa and Coloane providing other neighborhood interests. Come for a well-explained historic route, a proper meal or a particular hotel experience rather than assuming the whole destination is a casino or one walkable old town. A day trip can introduce a selected part; an overnight gives the visit a different pace.",
    stayAnswer:
      "A day trip can cover a focused peninsula route and meal when the complete crossing and return leave enough useful time. Two nights provide one full day and an unhurried evening; three nights allow a distinct Taipa, Coloane or property-led chapter. A single night works only when arrivals and departures leave more than a brief evening. Choose the actual interests and room before fixing duration. Cotai facilities and a substantive heritage day can each deserve time without requiring a daily hotel move.",
    hotelAnswer:
      "Choose a peninsula property when historic-city walks and nearby food are the main reason to stay. Choose a named Cotai property for its actual room, dining and confirmed facilities, accepting a different route to the peninsula. A Taipa or Coloane base serves another purpose and should be assessed by the exact address and evening options. Compare room size, noise, bedding, breakfast, pool operation, internal walking and pickup. A famous resort name or a suite photograph does not establish the same experience in every tower, category or season.",
    sightseeingQuestion: "Should you choose the historic peninsula, Cotai, Taipa or Coloane?",
    sightseeingAnswer:
      "Start with a manageable peninsula route for urban history, selected churches or temples and a meal that explains the region's food. Choose Cotai when a particular hotel, dining reservation or confirmed entertainment is central to the stay. Taipa Village offers a different neighborhood-and-food interest; Coloane can provide another pace when the actual route appeals. These areas are connected but are not one continuous pedestrian circuit. Select two complementary subjects rather than trying to visit every resort lobby and famous facade in a short day.",
    visitorResources: [
      {
        label: "Macao Government Tourism Office",
        href: "https://www.macaotourism.gov.mo/en/",
        scope:
          "Official destination information and visitor resources. Confirm individual openings, events, current terminals and operating arrangements with their responsible venues or providers. A tourism reference is not a hotel benefit, restaurant reservation, private host or entertainment ticket.",
      },
      {
        label: "Macao government services portal",
        href: "https://www.gov.mo/en/",
        scope:
          "Official public-service entry point, including directions to immigration and relevant authorities. Check the current requirements for the actual passport, purpose, length of stay and onward route. Permission for Hong Kong or mainland China does not itself establish Macao entry eligibility or a return mainland entry.",
      },
      {
        label: "UNESCO: Historic Centre of Macao",
        href: "https://whc.unesco.org/en/list/1110/",
        scope:
          "Background on the inscribed historic urban ensemble. The designation is not one attraction ticket and does not guarantee every church interior, house, museum or religious space is open. Use the responsible institution for current visitor access and reservations.",
      },
      {
        label: "Hong Kong–Zhuhai–Macao Bridge: Hong Kong government portal",
        href: "https://www.hzmb.gov.hk/en/",
        scope:
          "Bridge and Hong Kong Port background for the cross-boundary journey. Confirm actual services, ports, documents and local transfers on each side. A shuttle, eligible through-car service and private city vehicle are different arrangements; a bridge arrival is not arrival at a peninsula or Cotai hotel.",
      },
    ],
    serviceScope:
      "A tailored proposal can specify the room and tower, exact arrival terminal, selected heritage route, local guiding, admissions and meal basis, with Macao providers and delivery confirmed separately. Name a restaurant, performance or hosted subject only when an actual arrangement can be established. Cross-boundary transport needs its own service, traveler documents, luggage plan and operating window. A mainland or Hong Kong vehicle booking does not automatically continue into Macao. Hotel facilities, entertainment and private dining are included only when expressly confirmed for the actual room, dates and guests.",
    routeAdvice:
      "Macao can be a focused Hong Kong excursion, a two- or three-night stay, or part of a separately planned Greater Bay Area journey. Hong Kong, Guangzhou and Shenzhen have different entry and transport arrangements; the full crossing and onward connection must work in each direction. No matching published Macao product is recommended here. The existing Guangzhou–Shenzhen business journey is not a Macao heritage or resort package. Use the illustrative two-night outline to request a locally confirmed stay, giving the historic city and hotel their own useful time.",
    practicalPlanning: {
      timing:
        "Keep the main heritage walk coherent, with shade, seating and a meal rather than backtracking between the peninsula and Cotai. Check individual openings and any fixed dining or show reservation before setting the sequence. A day visitor needs time for the real terminal transfer and border process in both directions. Do not plan the final church, resort visit or dinner so tightly that a weather-related ferry change leaves no workable return.",
      walking:
        "Historic streets can involve slopes, steps, uneven paving, crowds and standing. A short route on a map may still be demanding in heat. Resorts can add long internal walks between room, breakfast, transport and the booked activity. Review lifts, pickup, toilets and rest points for the actual guest. A private car or hotel shuttle does not remove the approach to every facade, temple or museum, and a ground-floor room alone does not establish an accessible holiday.",
      cost: "Compare the actual room and tower, occupancy, beds, meals, pool access, total charges and cancellation terms. Shows, special dining, spa, club access and children's activities may be separate. For crossings, price the whole hotel-to-hotel service rather than only a ferry or bridge ticket. Confirm whether an amount is in patacas, code MOP, or Hong Kong dollars, and how payment or change is handled; do not assume exchange equivalence or universal acceptance of another currency or app.",
    },
    attractions: [
      "A selected Historic Centre route around Senado Square and neighboring streets",
      "The Ruins of St. Paul's facade and the actual accessible surrounding visitor areas",
      "A-Ma Temple as a distinct religious and historical subject with current visitor practices respected",
      "Taipa Village on a defined neighborhood-and-food route",
      "Coloane as a separate interest rather than an automatic extra stop",
      "A named Cotai property, dining or entertainment subject with actual access confirmed",
    ],
    stays: [
      {
        label: "Day trip: one focused historic-city introduction",
        advice:
          "Use a selected peninsula walk and meal with the whole outward and return journey included. A rushed route through heritage, several resorts, Taipa and Coloane may leave little understanding. Choose the part of Macao you actually came to experience rather than collect every district in one day.",
      },
      {
        label: "2 nights: a city day and an easier evening",
        advice:
          "One full day supports heritage with useful time for a meal and the property. Arrival or departure can add a short interest when the actual schedule fits. Keep one base and do not treat an overnight as proof that a particular restaurant or performance is available.",
      },
      {
        label: "3 nights: add a contrasting neighborhood or property day",
        advice:
          "Use the second full day for Taipa, Coloane or facilities and dining that the booked property genuinely provides. Choose by interest rather than requiring another heritage walk of similar character. A hotel move within a short stay should have a clear benefit that outweighs packing and transfer.",
      },
    ],
    hotelAreas: [
      {
        name: "Macao peninsula / heritage and urban food",
        advice:
          "Map the actual property to the selected historic walk and evening meals. Check noise, room condition, lifts, pickup and the approach with luggage. A peninsula address is not proof that all heritage places are a short flat walk. A well-chosen city room can serve a rich visit without a resort's scale.",
      },
      {
        name: "Cotai / a particular resort experience",
        advice:
          "Choose the room and tower, not simply the resort complex's name. Review internal walking, pool seasonality, actual included benefits, dining reservations and the route to the peninsula. A large resort can be worthwhile for non-gamblers, but family activities and entertainment need specific access and availability rather than assumptions.",
      },
      {
        name: "Taipa / a different neighborhood or transport priority",
        advice:
          "Distinguish the actual village, surrounding urban areas, airport and ferry terminal. Nearby on a map does not establish a simple luggage walk or quiet room. Compare dinner and the complete route to the visits you want before choosing only on a Taipa name or an apparently short arrival transfer.",
      },
      {
        name: "Coloane / a setting-led stay",
        advice:
          "Consider a named property when its setting and slower rhythm are the real purpose. Show the complete transfer to peninsula heritage, meals and any booked event. A coastal location does not guarantee sea swimming, an empty beach or easy independent dining; confirm the actual facilities and routes.",
      },
    ],
    tradeoffs: [
      {
        title: "Macao is not one old town or one resort complex",
        advice:
          "The peninsula, Taipa, Cotai and Coloane create different days. A heritage-led visit can stand on its own without gaming, and a resort stay needs time to use the property. Choose a coherent geographic sequence rather than assuming every recognizable image sits within the same walk. A private vehicle improves some connections but does not make repeated district crossings disappear.",
      },
      {
        title: "The Ruins of St. Paul's are not an intact church interior",
        advice:
          "The surviving facade and the site's historical interpretation are different from visiting a complete functioning church building. Check the actual accessible areas and surrounding route. Likewise, UNESCO's historic ensemble contains multiple places with different visitor and religious arrangements. Recognition does not establish one ticket, all interiors or unrestricted photography.",
      },
      {
        title: "Portuguese and Macanese food are related subjects, not synonyms",
        advice:
          "A Portuguese restaurant, a Macanese dish and a Cantonese meal offer different culinary contexts. Macanese food reflects a distinctive historical development rather than simply any Western dish served in Macao. Ask what the kitchen actually prepares and choose a balanced table. A famous food name or a decorative setting does not establish provenance, a private chef or a guaranteed reservation.",
      },
      {
        title: "A resort booking does not include every show or family facility",
        advice:
          "Different towers, room categories and dates can have different benefits. Confirm the specific pool, activity, performance, age rules, supervision and charges. A general family-friendly label is not childcare, and an attractive hotel gallery can show facilities unavailable to the booked room. Non-gamblers can choose a property for dining and comfort without assuming every entertainment venue is suitable for every age.",
      },
      {
        title: "Ferry and bridge routes need a whole-journey comparison",
        advice:
          "Macao's peninsula-side Outer Harbour and Taipa ferry terminals serve different local transfers. Bridge ports are another gateway again. Compare current services, weather contingency, documents, luggage and final hotel arrival rather than choosing the shortest crossing segment. A private road booking does not automatically provide a private crossing or eligible through vehicle, and immigration time cannot be removed by labeling the transfer premium.",
      },
      {
        title: "Each border entry must work for the actual traveler",
        advice:
          "Macao, Hong Kong and mainland China have separate entry arrangements. Check every intended admission and any mainland re-entry against the actual documents and itinerary. A short regional excursion can still use an entry on a visa or require another authorization. Do not assume eligibility, identical rules or a particular permitted stay from nationality shorthand, an old travel blog or the fact that the route is geographically close.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "zhuhai",
        advice:
          "Zhuhai develops city-seafront, Tangjiawan and Beishan heritage, with Gongbei, Hengqin and offshore hotels as different choices. Confirm individual mainland entry or re-entry eligibility, exact crossing, each provider and the complete hotel handover. A nearby mainland room does not establish a through-car service or replace useful time in Macao.",
      },
      {
        slug: "hong-kong",
        advice:
          "Hong Kong adds a different urban, museum and food chapter. Compare a Macao day trip with separate nights through the complete crossing and local transfers. Choose the actual terminal, confirm entry eligibility on both sides and retain an alternative if the chosen transport cannot operate.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds Cantonese food and trading-city history or a separately defined business agenda. Check the real road or rail connection, boundary process and final hotel transfer. A Guangzhou–Shenzhen product does not automatically include Macao guiding, accommodation or a through car.",
      },
      {
        slug: "shenzhen",
        advice:
          "Shenzhen offers a distinct contemporary urban or business interest on the mainland. Choose a current route and allow the complete terminal or checkpoint journey. The two places are not one walkable bay-area destination, and local vehicle service should not be assumed to extend across boundaries.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler part of the year often suits heritage walks, while variable cloud, rain and cooler spells still occur. Summer can be hot, humid and wet, making shade, shorter walks and indoor choices important. Typhoon-related conditions can affect ferries, bridge services and outdoor activities. Check current forecasts and official notices closer to travel. Choose a property and cultural or food alternatives that remain worthwhile without a particular show, clear viewpoint or uninterrupted crossing.",
    orientation:
      "Macao and Macau are common English spellings of the same destination. The peninsula contains much of the historic-city introduction; Taipa, Cotai and Coloane have different neighborhood and hotel patterns. Outer Harbour, Taipa ferry terminal, Macao International Airport and bridge ports are different gateways. Use exact property and terminal names rather than only Macau pickup. Immigration and currency arrangements differ from Hong Kong and the mainland even when the journey is short.",
    experiences: [
      "Read a selected historic-city route through its buildings, religious places and present-day streets",
      "Enjoy a clearly explained Macanese, Portuguese or Cantonese meal without treating the terms as interchangeable",
      "Choose a specific resort or contrasting neighborhood with enough time to use what has actually been booked",
    ],
    planningNotes: [
      "Compare peninsula and Cotai stays by the actual room, daily routes and evening plans",
      "Confirm historic interiors, dining, entertainment and local service providers individually",
      "Plan each terminal, crossing, admission and mainland re-entry for the actual documents and journey",
    ],
    arrival:
      "Macao International Airport uses code MFM. Outer Harbour and Taipa ferry terminals, bridge ports and mainland land checkpoints create different arrivals and final hotel transfers. Confirm current services and the actual entry arrangement before choosing the gateway. A Hong Kong or mainland flight does not put the guest in Macao without the onward journey and formalities. Send the ticket, full terminal and property address; do not attach an essential dining reservation or last crossing to an uncertain arrival.",
    gettingAround:
      "Combine selected walks with planned transfers between distinct areas. Public transport and hotel shuttles have their own routes, hours and access rules and are not a guaranteed door-to-door private service. A Cotai complex can involve substantial walking even after the vehicle arrives. Agree pickup, seating and rest on the historic route. Cross-boundary service is a separate arrangement from a local car day, with the actual vehicle eligibility and passenger process specified.",
    stayStrategy:
      "Choose one base for two or three nights unless a second property materially improves a distinct chapter. Prioritize the booked room, tower, quiet, bathroom, breakfast and useful facilities. A peninsula hotel can support heritage and meals; a Cotai property can be the reason for a slower stay. Neither should be sold as universally superior. Protect enough time to enjoy the room and reservations rather than leaving an expensive hotel empty during an overloaded sightseeing circuit.",
    firstTimerNote:
      "Macao can be rewarding without gambling or a long list of resort lobbies. Start with a coherent heritage walk and a meal, then decide whether a particular property, Taipa or Coloane deserves more time. An overnight changes the rhythm when it permits a better evening and less rushed crossing. The best plan states that benefit clearly rather than adding nights only because the destination is close to Hong Kong.",
    faqs: [
      {
        question: "Are Macao and Macau the same place?",
        answer:
          "Yes, both are common English spellings of the same Special Administrative Region. Use the actual property, district and terminal for bookings. The peninsula, Taipa, Cotai and Coloane have different local journeys even when all addresses are described simply as Macau.",
      },
      {
        question: "Is Macao worth visiting if I do not gamble?",
        answer:
          "Yes. A selected historic-city route, a well-explained meal and a particular property can provide a worthwhile stay without gaming. Choose real interests rather than a circuit of casino lobbies. Entertainment, pools and family facilities still need individual confirmation rather than being assumed from the resort name.",
      },
      {
        question: "Should I visit Macao as a day trip or stay overnight?",
        answer:
          "A focused day trip can work when the complete outward and return journey leaves useful time. Two nights give one full day and an easier evening; three add another neighborhood or property-led subject. Choose the format by the actual crossing, meal and hotel value rather than geography alone.",
      },
      {
        question: "Should I stay on the peninsula or in Cotai?",
        answer:
          "Choose the peninsula for a specific heritage-and-food route, or Cotai for a named property's actual room, dining and facilities. Compare noise, internal walking, breakfast and transfers. Neither area is universally better, and a famous complex's gallery may show a different tower or room from the quoted booking.",
      },
      {
        question: "Can I go inside the original St. Paul's church?",
        answer:
          "The Ruins of St. Paul's are not an intact original church interior. The surviving facade and currently accessible surrounding visitor areas form a different visit. Confirm the actual route and interpretation rather than assuming a complete functioning church or unrestricted access to every area.",
      },
      {
        question: "Are Portuguese food and Macanese food the same?",
        answer:
          "No. They are related through history but are not interchangeable menu labels. A Macanese dish has a particular local cultural context, while Portuguese and Cantonese meals offer other subjects. Ask what the kitchen actually serves and confirm ingredients, portions and dietary capacity rather than relying on the restaurant's general style.",
      },
      {
        question: "Is a ferry or the Hong Kong–Zhuhai–Macao Bridge better?",
        answer:
          "Compare the complete journey from the actual hotel through terminals, current services, entry formalities and final transfer. Weather, luggage and dated operation matter. A shorter crossing segment does not always make an easier trip, and an ordinary private city vehicle is not automatically eligible to cross.",
      },
      {
        question: "Does Hong Kong or mainland entry permission cover Macao?",
        answer:
          "Macao has separate entry arrangements. Check current official guidance for the actual passport, purpose and stay, as well as Hong Kong or mainland admission and any return entry. A short excursion does not remove immigration requirements or guarantee that a single-entry mainland visa permits coming back.",
      },
      {
        question: "Are all activities included in a Cotai hotel room?",
        answer:
          "No. Benefits vary by property, tower, room category and dates. Confirm the particular pool, show, club, age rule, supervision and charges. A family-friendly label or attractive gallery does not establish included access, childcare or operation during the booked stay.",
      },
    ],
    culturalStory: {
      title: "Read the historic city as more than a collection of facades",
      paragraphs: [
        "Macao's historic interest lies in streets and places shaped by long exchange, religious institutions, commerce and local life. A coherent walk can connect a square, a temple or church setting and surrounding lanes without claiming that every building survives unchanged. The Ruins of St. Paul's and A-Ma Temple require different explanations. UNESCO's ensemble provides context for the city, not a shortcut that makes every site the same kind of monument.",
        "The present city also includes contemporary homes, businesses and very large hospitality complexes. Those layers can be understood together without flattening them into an East-meets-West slogan. Respect worship, residents and photography rules, distinguish public spaces from private interiors and name a host only when genuinely arranged. A smaller number of clearly explained places can offer more than a rushed sequence of famous backgrounds.",
      ],
    },
    foodStory: {
      title: "Make room for a meal with a specific story",
      paragraphs: [
        "A Macanese meal can introduce dishes such as minchi or a particular chicken preparation when a suitable kitchen can explain its version and ingredients. Portuguese dining and Cantonese cooking provide different, complementary subjects. Egg tarts or local cookies can be an enjoyable smaller stop, but are not a substitute for a proper meal or a claim that all versions have one origin. Choose portions and the table for the guests rather than treating every famous snack as compulsory.",
        "Clarify pork, seafood, nuts, dairy, eggs, wheat, sauces, alcohol and shared preparation. An almond-cookie name does not prove an absence of other nuts or gluten, and a vegetable dish may use meat stock. For a special dinner, confirm the actual menu, dietary capacity, deposits and cancellation terms. A thoughtful food plan should explain choices and protect appetite, not pressure guests into a long checklist between crossings and resort visits.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual peninsula or resort base",
        description:
          "Complete the agreed entry and terminal-to-hotel transfer, then settle into the booked room. Add a nearby interest or an easy meal when timing allows. Keep essential dining or entertainment away from an uncertain cross-boundary arrival.",
      },
      {
        day: "Full day",
        title: "A coherent historic-city route and a good table",
        description:
          "Explore selected peninsula places with current access, religious practices and walking demands clear. Leave a proper meal and time to enjoy the property. The visit should remain valuable without entering every church or touring several resort lobbies.",
      },
      {
        day: "Optional second full day",
        title: "A different neighborhood or property-led experience",
        description:
          "Use a third night for Taipa, Coloane or confirmed facilities and dining at the chosen resort. Compare the complete road sequence and avoid adding similar stops simply to fill time. Family supervision, shows and private dining need explicit arrangements.",
      },
      {
        day: "Departure",
        title: "Allow the whole crossing and onward transfer",
        description:
          "Use the exact terminal or checkpoint, current service and applicable entry arrangement for the next destination. This two-night outline with an optional third night is illustrative, not a published product or guarantee of through vehicles, resort benefits, private heritage access or immigration admission.",
      },
    ],
  },
};
