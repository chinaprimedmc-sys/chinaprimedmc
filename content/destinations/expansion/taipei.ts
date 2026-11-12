import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/taipei.svg",
  alt: "Taipei planning schematic separating a city base, Beitou or a tea outing, and the airport or rail connection; original diagram, not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const taipeiGuide: ExpandedDestination = {
  id: "taipei",
  name: "Taipei",
  region: "east",
  kicker: "Neighborhoods, tea and museums with time to enjoy them",
  description:
    "Plan Taipei around a well-placed city hotel, distinct neighborhoods, a considered museum visit and tea or hot springs, with New Taipei excursions and onward rail kept separate.",
  stay: "4–5 nights",
  bestFor: "City culture, food, tea and a comfortable first Taiwan stay",
  interests: ["city", "heritage", "food"],
  relatedDestinationIds: ["tainan", "hong-kong"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Taipei Travel Guide: Where to Stay, Tea & Day Trips",
    seoTitle: "Taipei Travel Guide: Stays, Tea & Day Trips",
    seoDescription:
      "Plan 4–5 nights in Taipei: compare Zhongshan, Da'an and Xinyi hotels, museums, Beitou hot springs, tea outings, day trips and airport transfers.",
    answer:
      "Taipei (台北 / 臺北) rewards a stay built around neighborhoods, food, museums and the hills at its edge. Four nights give three full days: enough for contrasting city areas, a selected museum and one tea or hot-spring interest. Start with a hotel that fits the evenings you want, then decide whether an excursion adds more than another city day. Jiufen, Shifen and Pinglin are in New Taipei City, not central Taipei; visiting them means choosing a separate journey rather than adding a few nearby sights to an already full afternoon.",
    stayAnswer:
      "Allow four nights for a first stay with three useful full days. Five nights make room for a New Taipei excursion, a slower tea day or a deeper museum interest. Three nights can work for two focused city days when flights are convenient. A long-haul arrival, airport transfer and onward train do not count as full sightseeing days. If you also want Tainan, give it its own nights rather than treating a high-speed train as a reason to compress the entire island into daily hotel moves.",
    hotelAnswer:
      "Compare Zhongshan for dining and an established city base, Da'an for neighborhood meals and access to green space, and Xinyi for a contemporary hotel stay around the modern business district. Wanhua or Ximending can suit an older-city and lively evening focus; the exact street and room matter. Check soundproofing, bedding, breakfast, station approach and pickup rather than choosing from a district label alone. A Beitou hot-spring hotel serves a different purpose and is not automatically the most convenient base for repeated central-city evenings.",
    sightseeingQuestion: "Which Taipei day trips are worth taking on a first visit?",
    sightseeingAnswer:
      "Choose one excursion for a clear interest. Beitou suits hot-spring history and a specifically booked bathing experience; Maokong offers a hill-and-tea setting within Taipei. Pinglin suits a separate tea-focused journey in New Taipei. Jiufen and Shifen offer different town, landscape and railway interests, with their own road, walking and crowd considerations. Do not combine every famous name by default. If the excursion mainly produces hours of transfers and rushed photographs, an unhurried neighborhood day and a good meal may be the better choice.",
    visitorResources: [
      {
        label: "Taipei City tourism portal",
        href: "https://www.travel.taipei/en",
        scope:
          "Official background on Taipei neighborhoods and visitor interests. Confirm individual opening days, transport operation, current access and bookings with the responsible venue or operator. A tourism listing does not establish a private host, bathing reservation or hotel benefit.",
      },
      {
        label: "Taiwan Tourism Administration",
        href: "https://eng.taiwan.net.tw/",
        scope:
          "Destination and wider-route background, including places outside Taipei City. Check the exact locality and current operator information before arranging an excursion. This reference does not verify local service delivery, dated transport or entry eligibility.",
      },
      {
        label: "National Palace Museum",
        href: "https://www.npm.gov.tw/?l=2",
        scope:
          "Official museum information for the Taipei visit, current exhibitions and visitor arrangements. Confirm which branch and collection displays apply. A famous object may be on rotation or loan; general admission is not a guarantee of any particular treasure or specialist appointment.",
      },
      {
        label: "Bureau of Consular Affairs",
        href: "https://www.boca.gov.tw/mp-2.html",
        scope:
          "Official starting point for Taiwan visa and consular guidance. Check the actual passport or travel document, purpose, dates and onward itinerary, and consult the responsible authority where needed. Mainland China, Hong Kong or Macao entry permission does not establish Taiwan admission.",
      },
      {
        label: "Taiwan High Speed Rail",
        href: "https://en.thsrc.com.tw/",
        scope:
          "Official rail planning and station information. Verify the dated service, actual boarding station, ticket conditions and luggage arrangements. A rail ticket does not include both hotel transfers or establish a single through booking with an international flight.",
      },
    ],
    serviceScope:
      "A proposed Taipei stay should specify the actual hotel and room, arrival airport, city routes, museum admission, any tea host and separately booked bathing. Taiwan local providers and availability must be established before a service commitment. A local rail journey, guided walk and private vehicle day serve different needs; a driver is useful for some excursions without being necessary for every city day. Interpretation language, meal basis, host consent, pickup and wet-weather alternatives belong in the written arrangement. Neither a mainland booking nor this editorial guide establishes an included Taiwan service.",
    routeAdvice:
      "Use Taipei as a real city stay, then consider Tainan for a contrasting southern history-and-food chapter. Compare the full hotel-to-hotel rail journey and keep useful time in each place. Hong Kong is a possible separate city chapter only when the actual flights and entry arrangements work. No matching published Taipei itinerary is recommended here. Use the illustrative four-night outline to request a separately confirmed Taiwan proposal, sharing dates, hotel expectations, food interests, walking needs and whether tea, museums or hot springs matter most.",
    practicalPlanning: {
      timing:
        "Give the National Palace Museum a defined part of the day rather than placing it between distant neighborhoods and a timed tea appointment. Pair nearby visits and protect lunch. A morning market, long museum visit and late night market can make a tiring first day after a long flight. Keep an excursion weather-dependent where possible, with an indoor alternative and a clear decision point before committing to the drive.",
      walking:
        "City days can involve station corridors, stairs, crossings, standing in small food venues and humid weather. Jiufen has slopes and steps; hill walks and viewpoints require a separate assessment. Ask for the actual step-free route, toilet stops, seating and car approach when mobility matters. A central hotel and private driver do not remove every pedestrian section, and a short map distance is not a measure of comfort in rain or heat.",
      cost: "Compare the exact room, bed setup, total charges, breakfast and cancellation terms. Price guiding, local transport, admissions, a tea session and private bathing separately where appropriate. A teahouse bill may depend on tea, water or service arrangements; confirm the basis instead of assuming a fixed tasting package. Taiwan uses New Taiwan dollars, code TWD, often shown as NT$. Check payment options at small venues and distinguish an illustrative food budget from an included meal allowance.",
    },
    attractions: [
      "Dadaocheng and Dihua Street for a selected trading-neighborhood and food route",
      "Wanhua and Longshan Temple with worship and visitor practices respected",
      "The National Palace Museum's Taipei branch and its current exhibitions",
      "Da'an neighborhoods and Daan Forest Park as a slower city chapter",
      "Xinyi and a separately reserved Taipei 101 observation visit if wanted",
      "Beitou for hot-spring history and a specifically chosen bathing arrangement",
      "Maokong for a hill-and-tea outing with transport and weather considered",
    ],
    stays: [
      {
        label: "3 nights: two focused city days",
        advice:
          "Choose contrasting neighborhoods and one major museum or specific tea interest. This works best with convenient arrival and departure times. Keep the evenings useful rather than adding a distant excursion that leaves only fragments of Taipei itself.",
      },
      {
        label: "4 nights: a balanced first stay",
        advice:
          "Use three full days for older neighborhoods, a museum-and-modern-city contrast and one selected tea or Beitou outing. The order can respond to openings and weather. One well-chosen base usually gives more than switching hotels for each subject.",
      },
      {
        label: "5 nights: add a distinct interest",
        advice:
          "Add a considered New Taipei day, deeper museum time or an overnight hot-spring chapter only when it changes the experience. Keep enough time for the hotel and meals. More nights need not mean a more ambitious daily driving circuit.",
      },
    ],
    hotelAreas: [
      {
        name: "Zhongshan / dining and a well-connected city stay",
        advice:
          "Compare the actual hotel street with dinner plans and station access. The district contains different settings; a Zhongshan address alone does not promise a quiet room or a short walk everywhere. Review room condition, soundproofing, breakfast, lifts and the vehicle pickup point.",
      },
      {
        name: "Da'an / neighborhood meals and a gentler city rhythm",
        advice:
          "Choose an address near the particular restaurants, park or rail connection you will use. Da'an is larger than one dining street. Ask about traffic noise, room orientation and the walking route after dinner rather than relying only on a fashionable neighborhood description.",
      },
      {
        name: "Xinyi / contemporary hotels and a modern-city setting",
        advice:
          "This can suit a property-led stay and modern architecture, with a different journey to older trading neighborhoods. Compare the booked category, view, club benefits and breakfast rather than the skyline image alone. A distant landmark view and direct observation-deck admission are different things.",
      },
      {
        name: "Wanhua / Ximending and older-city interests",
        advice:
          "Choose the exact block for the desired evening atmosphere and sleep requirements. Lively streets may be a benefit for some guests and a drawback for others. Check stairs, pickup, late-night noise and the route to religious and historic visits; the entire district is not one preserved old town.",
      },
      {
        name: "Beitou / a purpose-built hot-spring chapter",
        advice:
          "Book for a particular bathing and room experience. Confirm whether the facility is a public bath, reserved private bathing room or an in-room bath, its water source, operating rules and actual inclusions. Compare the journey to city dinners before using Beitou as the only base for a short Taipei stay.",
      },
    ],
    tradeoffs: [
      {
        title: "Taipei City and New Taipei City are distinct places",
        advice:
          "Jiufen, Shifen and Pinglin belong to New Taipei City and require their own routes. Beitou and Maokong are Taipei interests with different approaches again. An umbrella Taipei day-trip label can obscure the distance between them. Choose the actual subject first, then assess transport and walking; do not regard all the names as one compact sightseeing loop.",
      },
      {
        title: "Maokong tea and a Pinglin tea visit answer different questions",
        advice:
          "Maokong can suit time at a hill teahouse and an introduction to tea. Pinglin offers a different regional setting and potential production-related interests when the actual host and season fit. A tea shop visit is not automatically a farm visit or a hands-on harvest. Ask what will be explained, by whom, in which language, and whether tasting or buying is optional.",
      },
      {
        title: "A museum visit should not depend on one famous object",
        advice:
          "The National Palace Museum can support a rewarding visit through the current displays and an informed selection of objects. Do not build the promise around the Jadeite Cabbage or another famous work without checking its location and display dates. Taipei and the southern branch are not interchangeable addresses, and a specialist-led session needs a genuine booking.",
      },
      {
        title: "Private bathing and an ordinary hotel tub are different bookings",
        advice:
          "For Beitou, confirm the actual bathing space, water supply, duration, privacy, attire and age rules. An in-room bathtub does not establish hot-spring water or a reserved bath experience. Personal suitability for hot bathing needs appropriate medical advice where relevant; a premium property description does not resolve it. Keep sightseeing of the thermal area separate from entering a bathing facility.",
      },
      {
        title: "A night market is a flexible food outing, not a compulsory feast",
        advice:
          "Choose a market that fits the route and appetite. Crowds, standing and queues can make an earlier meal followed by a short market walk more comfortable than relying on stalls for the entire dinner. Name the dishes and ingredients, allow portions to be shared where practical and provide a seated alternative. A famous stall list is not a reservation or an allergy guarantee.",
      },
      {
        title: "Premium service does not require a car outside every museum",
        advice:
          "Local rail and walking can be useful for a city day, with a private transfer or excursion car where it makes the route easier. Judge the arrangement by pickup, station walking, seating, weather and guide continuity. Repeated road transfers between close neighborhoods can consume time without adding comfort, while an outlying host appointment may justify a dedicated vehicle.",
      },
      {
        title: "Taiwan entry and onward journeys need their own checks",
        advice:
          "Check the actual travel documents, purpose and intended stay against current official requirements. Do not apply mainland transit or visa policies to a Taiwan visit. Flights from Hong Kong or elsewhere and any cross-strait connection need current dated services and independent admission checks. A destination guide explains planning choices; it is not an immigration determination or confirmation of local service delivery.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "tainan",
        advice:
          "Tainan adds southern temple streets, distinct food and a different urban history. Give it two or three nights rather than treating it as a station-to-station day trip. Taiwan HSR Tainan station is outside the historic center; compare both hotel transfers and the chosen train before deciding the useful time left on arrival.",
      },
      {
        slug: "hong-kong",
        advice:
          "Hong Kong can provide a different urban, museum and harbor chapter when a current flight fits the wider trip. Compare the full airport journeys and separate entry requirements. The link is a planning comparison, not a promise of a through ticket, cross-boundary vehicle or an included Taiwan extension to a Hong Kong or mainland booking.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit walking, but rain and temperature changes remain part of planning. Summer is often hot and humid, with heavy rain and typhoon-related disruption possible; shorter outdoor sections and useful indoor choices matter. Winter can be cool and damp in Taipei, even when a southern Taiwan forecast looks warmer. Check current forecasts and notices near departure rather than treating a best-month list as a weather guarantee. A tea day should have value without a clear hill view.",
    orientation:
      "Taipei is a northern city, distinct from surrounding New Taipei City. Zhongshan, Da'an, Xinyi and Wanhua support different city stays; Beitou is a northern Taipei district and Maokong a hill area in the southeast. Taoyuan International Airport, Taipei Songshan Airport, Taipei Main Station and Nangang are different arrival points. Use the complete booking name and hotel address so a generic Taipei pickup does not send a driver to the wrong terminal or station.",
    experiences: [
      "Explore a trading neighborhood and a living temple through a coherent city route",
      "Make a considered museum visit based on the collection actually on display",
      "Choose a tea or hot-spring outing with its format, travel and inclusions clear",
    ],
    planningNotes: [
      "Select the hotel around actual evenings, quiet and transport rather than the district name alone",
      "Give New Taipei excursions their own time and compare them with another useful city day",
      "Confirm Taiwan entry, local providers, museum access and specialist sessions separately",
    ],
    arrival:
      "Taoyuan International Airport uses code TPE and lies outside Taipei; Taipei Songshan Airport uses TSA and is a different, more central gateway with a different service network. Check the flight and terminal rather than requesting only Taipei airport pickup. Airport rail and a private transfer have different luggage and final-hotel journeys. Taipei Main, Nangang and Taoyuan HSR stations are also distinct; the Taoyuan HSR station is not an airport terminal. An onward rail connection needs the full arrival process, transfer and ticket conditions considered.",
    gettingAround:
      "Combine neighborhood walks and local rail with selected transfers. Consider station exits, lifts, rain, luggage and the guest's walking tolerance before calling any route easy. A museum or outlying tea visit may benefit from a car; a compact city-food route can work better without constant pickups. Maokong transport is weather- and operation-dependent, so confirm the current arrangement rather than guaranteeing a gondola ride. New Taipei excursions need named stops and realistic road time instead of an unlimited driver day.",
    stayStrategy:
      "Keep one central base for most first visits. Compare the actual room's quiet, beds, bathroom, breakfast and evening food options. A separate Beitou night can be worthwhile when the property and bathing are central to the trip; it also introduces packing and another transfer. For a short stay, a day visit or reserved bathing session may provide the desired subject with less disruption. A larger hotel budget should improve sleep, position and useful arrangements, not merely add a skyline photograph.",
    firstTimerNote:
      "Taipei is more rewarding when meals and neighborhoods have room between headline sights. Choose a museum, an older-city walk and a contrasting modern area, then decide on one tea or hot-spring interest. Keep the arrival day forgiving. A destination can be easy to enjoy independently in parts while still benefiting from a thoughtful guide for history, collections or a well-arranged specialist session.",
    faqs: [
      {
        question: "How many nights should I spend in Taipei on a first visit?",
        answer:
          "Four nights provide three full days for contrasting neighborhoods, a museum and one tea or hot-spring interest. Five add a distinct excursion or slower pace. Three can work for two focused city days with convenient flights. Count airport and station transfers before calling arrival or departure a sightseeing day.",
      },
      {
        question: "Where should I stay in Taipei for food and sightseeing?",
        answer:
          "Compare Zhongshan for dining and a central base, Da'an for neighborhood meals, Xinyi for contemporary hotels and Wanhua or Ximending for an older-city and lively evening focus. Choose the exact street, room and station approach. Beitou serves a different hot-spring purpose and may be less convenient for repeated central-city evenings.",
      },
      {
        question: "Are Jiufen and Shifen in Taipei City?",
        answer:
          "No. They are in New Taipei City and require their own journey. Their walking and transport demands also differ from each other. Do not assume they fit alongside every major Taipei sight in one day; compare a selected excursion with the value of more city time.",
      },
      {
        question: "Should I choose Maokong or Pinglin for a tea experience?",
        answer:
          "Maokong can suit a Taipei hill-and-teahouse outing. Pinglin is a separate New Taipei tea-region visit with its own transport and host requirements. Choose by the actual explanation, tasting, setting and season. Neither label guarantees a farm visit, harvest activity, English-speaking specialist or a no-pressure buying experience without agreement.",
      },
      {
        question: "Can I book a private hot-spring bath in Beitou?",
        answer:
          "Consider a named facility and confirm a reserved bathing room, an in-room hot-spring bath or another specific format. They are different bookings. Check water source, duration, privacy, age and attire rules, actual availability and personal suitability. An ordinary hotel bathtub is not evidence of a hot-spring experience.",
      },
      {
        question: "Will the National Palace Museum display its famous treasures?",
        answer:
          "Check the current exhibition information and the actual Taipei branch. Objects can rotate or be loaned, so do not promise the Jadeite Cabbage or another particular work from a general ticket. A selected visit can remain worthwhile through the objects and interpretation actually available.",
      },
      {
        question: "Are Taipei Taoyuan and Songshan the same airport?",
        answer:
          "No. TPE is Taoyuan International Airport outside the city; TSA is Taipei Songshan Airport. Confirm the actual flight and terminal. Taoyuan HSR station is another separate location and is not an airport terminal. Compare the complete hotel or onward-rail journey before choosing a gateway.",
      },
      {
        question: "Do I need a private driver for every day in Taipei?",
        answer:
          "No. Walking and local rail can suit selected city routes, with a transfer or private vehicle where it improves comfort or reaches an outlying appointment. Consider station walking, weather, pickup and mobility needs. High-quality planning means choosing useful transport for the day rather than booking a car by default.",
      },
      {
        question: "Can I add Tainan to a Taipei trip by high-speed rail?",
        answer:
          "Compare a separately planned Tainan stay with its own nights and hotel transfers. HSR Tainan station is outside the historic center and differs from central TRA Tainan station. The train segment alone is not the whole journey. Current tickets, local services and providers need confirmation before a proposal becomes a booking.",
      },
    ],
    culturalStory: {
      title: "Connect the trading streets, temples and museum objects",
      paragraphs: [
        "Dadaocheng can introduce Taipei through trading streets, tea, dry goods and buildings adapted to present-day uses. Wanhua and Longshan Temple offer a different historical and religious chapter. A useful guide connects those places to the city around them while distinguishing original fabric, restoration and contemporary businesses. A decorated shopfront is not automatically an unchanged historic interior, and a temple is a place of worship as well as a visitor interest.",
        "At the National Palace Museum, a small selection of well-explained objects can make craftsmanship and historical context easier to understand than a hurried sweep through famous names. Elsewhere, modern architecture and ordinary neighborhoods show another Taipei. Leave room for those contrasts, respect worship and photography instructions, and book any specialist meeting explicitly. Cultural depth comes from the explanation and the encounter, not from calling every stop exclusive.",
      ],
    },
    foodStory: {
      title: "Let meals shape the day without turning them into a checklist",
      paragraphs: [
        "Beef noodle soup, braised pork rice, a soy-milk breakfast, dumplings and a chosen market can provide very different meals. Not every famous dish belongs in one sitting. Compare a seated lunch, shared small dishes and a shorter evening market walk around appetite, opening hours and comfort. Dihua Street can add a dry-goods or tea context, while a proper tea session deserves enough attention to explain the leaf, brewing and the host's particular approach.",
        "Explain wheat, soy, sesame, peanuts, shellfish, pork, beef, stocks, sauces and shared preparation before choosing venues. A vegetable filling does not prove a dish is vegan, and leaving out a topping may not resolve an allergy. Confirm the kitchen's actual capacity and keep a seated alternative if a market is too crowded or wet. A thoughtful food plan offers choices, portions and context without making every queue or purchase compulsory.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the right city base",
        description:
          "Use the actual airport and agreed hotel transfer, then enjoy a nearby meal or short walk if energy allows. Keep essential museum admission, tea appointments and prepaid dining away from an uncertain long-haul arrival.",
      },
      {
        day: "Full day 1",
        title: "An older neighborhood and a living temple",
        description:
          "Choose a coherent Dadaocheng or Wanhua chapter, with a meal, seating and current religious access considered. Add a contrasting neighborhood only when the day remains comfortable. Allow time to understand the places rather than collect every famous street.",
      },
      {
        day: "Full day 2",
        title: "A selected collection and a modern-city contrast",
        description:
          "Plan the National Palace Museum around current displays, then use a different part of the day for the city or hotel. Xinyi or another contemporary neighborhood adds contrast when the transport works; a Taipei 101 visit is separately chosen and reserved if wanted.",
      },
      {
        day: "Full day 3",
        title: "Choose tea, Beitou or a distinct excursion",
        description:
          "Select the actual interest and format rather than linking every hill destination. Confirm the tea host or bathing session and a weather alternative. A fifth night permits a separate New Taipei day without displacing the only useful city time.",
      },
      {
        day: "Departure",
        title: "Make the next connection a complete journey",
        description:
          "Use the actual airport or rail station and allow luggage, check-in and both hotel transfers. This four-night outline is illustrative, not a published product, guaranteed Taiwan service, museum display promise or confirmation of entry eligibility.",
      },
    ],
  },
};
