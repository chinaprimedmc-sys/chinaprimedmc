import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/weizhou-island.svg",
  alt: "Original Weizhou Island planning schematic comparing coast and village accommodation, volcanic-landscape walking and separate Beihai ferry days; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const weizhouIslandGuide: ExpandedDestination = {
  id: "weizhou-island",
  name: "Weizhou Island",
  region: "south",
  kicker: "Make the island stay worth the crossing",
  description:
    "Choose Weizhou for volcanic coastlines, village context and time by the sea. Compare island hotel locations, two or three nights and a realistic Beihai ferry plan.",
  stay: "2–3 island nights, plus separately planned mainland connections",
  bestFor: "Coastal geology, small-property stays and an unhurried island chapter",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["beihai", "nanning", "sanya"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Weizhou Island Travel Guide: Ferries, Hotels & Coastal Routes",
    seoTitle: "Weizhou Island Guide: Ferries, Hotels & Beaches",
    seoDescription:
      "Plan Weizhou Island from Beihai: two or three nights, coast and village hotel choices, Crocodile Hill walking, beach conditions and ferry change plans.",
    answer:
      "Choose Weizhou Island, off Beihai in Guangxi, for volcanic coastal scenery, village walks, church history and seafood. Two island nights give one full day; three allow a coastal outing and more time at your hotel. Pick a few complementary locations, such as Crocodile Hill and a village or beach, rather than circling every viewpoint. The passenger crossing from Beihai and the onward island transfer are separate parts of the journey; allow for changes to sailing conditions.",
    stayAnswer:
      "Two island nights provide one full day between crossing days. Three nights are the stronger option when you want both interpreted coastal scenery and an unhurried day at the property or in villages. One night is highly dependent on useful sailing hours and leaves little flexibility. A day trip can only be assessed against the actual operating timetable and a selective visit plan. Count mainland approach and departure nights separately. Extra island nights give more time, not protection against every period of disrupted sailings.",
    hotelAnswer:
      "Compare a named west-coast property around the Shiluokou or Dishui Danping direction with a South Bay (南湾, Nanwan) room for its particular dining access, or an east-coast or village property chosen for quiet and its own setting. These are broad starting points, not room guarantees. Check bedroom orientation, noise, bathroom, cooling, stairs, luggage, meals and the real route to the shore. A sea view may be from a shared roof rather than the bedroom. A photogenic small hotel does not automatically provide full resort service, a pool, step-free access or staff who can support every dietary or language need.",
    sightseeingQuestion:
      "Should I choose volcanic scenery, beach time or village visits on Weizhou?",
    sightseeingAnswer:
      "Make a permitted Crocodile Hill route the main subject when volcanic and coastal landforms interest you, checking its actual walking, steps and current access. Choose beach-area or hotel time for a slower day, with swimming assessed separately. A selected village and church visit offers a different cultural subject, subject to actual public access. Wucaitan's tidal shore and the west-coast scenery have different conditions and timing. One well-explained main route and a compatible second interest can be more rewarding than driving to every named coast.",
    visitorResources: [
      {
        label: "Beihai municipal government",
        href: "https://www.beihai.gov.cn/",
        scope:
          "Regional background and dated public notices. Check the responsible island operator and booked passenger service for current site routes, visitor charges, identity requirements and sailings. A destination overview is not an operating notice or ticket confirmation.",
      },
      {
        label: "Guangxi regional visitor information",
        href: "https://en.gxzf.gov.cn/",
        scope:
          "English-language regional context. Confirm the actual island itinerary and willing providers separately; a regional description does not establish a private church, boat or household visit.",
      },
      {
        label: "China Meteorological Administration weather service",
        href: "https://weather.cma.cn/",
        scope:
          "Forecast and warning starting point. Passenger operations, marine warnings and site decisions also require current notices from the responsible authorities and operator. City weather alone cannot establish sea state or a safe tidal-shore route.",
      },
    ],
    serviceScope:
      "A tailored proposal should name both mainland terminal transfers, the passenger operator and ticket, booked island pickup, actual room, guide language, meals and selected routes. Identify scenic admission and local transport separately from the ferry. Explain change and cancellation terms and who coordinates a revised stay if sailings stop. Any boat activity, hosted meal or church conversation requires a willing provider and defined content. A private land arrangement does not make a scheduled ferry exclusive or confer unrestricted access to shorelines and religious interiors.",
    routeAdvice:
      "Compare two or three island nights with a Beihai-only coastal stay before committing to the crossing. For a tailored route, share your mainland connections, room preferences, walking needs and whether geology, village life or rest matters most. The proposal should show the accommodation on every mainland and island night, port transfers and arrangements if sailings change. Keep a firm onward flight or train clear of an uncertain island return so the final day feels manageable.",
    practicalPlanning: {
      timing:
        "A ferry day includes mainland pickup, check-in, boarding, disembarkation and island pickup before useful sightseeing time. Do not use crossing duration alone to promise a half-day arrival program. Group one main coastal route with meals and rest; an early shore visit and a late west-coast outing need breaks between them. Tidal access, daylight and current site operation determine the sensible sequence. Leave departure arrangements flexible enough to respond to changed sailings rather than treating the last boat as a guaranteed connection.",
      walking:
        "Crocodile Hill and other coastal routes can involve steps, slopes, heat and exposed sections. A viewpoint may require a different approach from a beach or hotel. Tidal rock platforms can be sharp, slippery or covered by incoming water; use only currently permitted routes with a clear return and local assessment. Do not enter sea caves, cross closed barriers or stand below unstable coastal faces for a photograph. Follow managed swimming rules and current warnings; a volcanic beach or calm-looking bay is not automatic swimming access.",
      cost: "Compare dated passenger tickets, luggage, terminal transfers, island pickup, room, meals, guide, scenic admission and local transport. A ferry ticket should not be assumed to include every island visitor charge. Confirm the actual vehicle and service scope instead of relying on an all-island label. Separate optional boat activities, seafood purchases and extra-night or rerouting costs. A higher room price should correspond to identifiable comfort and service, not an implied guarantee of calm crossings, private beaches or a clear sunset.",
    },
    attractions: [
      "Crocodile Hill / 鳄鱼山 coastal volcanic landscape on the current permitted visitor route",
      "Shiluokou / 石螺口 and Dishui Danping / 滴水丹屏 as distinct coastal settings",
      "Wucaitan / 五彩滩 tidal-shore scenery only with suitable current access and conditions",
      "South Bay / 南湾 as a selected dining and settlement interest, not an all-purpose beach base",
      "Shengtang Catholic Church / 盛塘天主教堂 and village context when public access fits",
      "Time at the chosen island property with meals and full pickup arrangements established",
    ],
    stays: [
      {
        label: "Day trip or 1 night / a narrow and timetable-dependent choice",
        advice:
          "Assess actual sailings before promising useful island hours. Choose a small selection and count every transfer. A short visit trades away flexibility and property time, and cannot be described as a complete island holiday.",
      },
      {
        label: "2 island nights / one full day",
        advice:
          "Separate the main coastal visit from arrival and departure. Choose one additional interest only when walking and conditions fit. Mainland nights are separate, and no swimming or boat activity is automatically included.",
      },
      {
        label: "3 island nights / two full days",
        advice:
          "Give volcanic scenery and a slower village, beach-area or property day their own time. Choose the room for the hours you will actually spend there. More nights improve pacing without guaranteeing open shore routes, clear skies or continuous sailings.",
      },
    ],
    hotelAreas: [
      {
        name: "Shiluokou or Dishui Danping direction / a west-coast stay",
        advice:
          "Compare the particular property's bedroom view, shore approach, steps and evening dining. A west-coast address can suit later-light interests without guaranteeing a sunset or a clear horizon from the room. Establish vehicle pickup and where guests wait in rain.",
      },
      {
        name: "South Bay / dining convenience with room-level checks",
        advice:
          "Choose the actual room for its relationship to restaurants and your selected visits. Check traffic, evening noise, shore use and pickup. A bay view is not proof of a quiet beach outside the door or a full-service resort environment.",
      },
      {
        name: "East coast or a village property / choose the setting deliberately",
        advice:
          "A quieter-looking setting needs dependable breakfast, dinner, transport and a worthwhile room. Confirm the view and actual early shore approach if dawn matters. A village address can add cultural context but does not include entry to private homes or religious activity.",
      },
    ],
    tradeoffs: [
      {
        title: "A ferry ticket and an island holiday are different purchases",
        advice:
          "Confirm the passenger operator, departure terminal, date, identity details, check-in and booked seat or cabin category. Ask how passport information is handled for the actual guest. Scenic admission, local transfers and the hotel are separate unless explicitly listed. A reseller's attractive itinerary or available room does not establish an operating outbound and return crossing.",
      },
      {
        title: "Volcanic geology and today's coastal erosion need to be distinguished",
        advice:
          "A good explanation connects visible rock, layers and landforms with the island's volcanic origin while acknowledging later shaping by waves and weather. Do not invent an exact age or label every colorful layer as lava. View the landscape from permitted routes; close access to a dramatic cliff, cave or rock platform is not required for it to be interesting.",
      },
      {
        title: "A tide table is only one part of shore access",
        advice:
          "A low-water period does not establish safe footing, calm waves or an open route. Check local site guidance, actual sea conditions and the return before approaching a tidal platform. Leave living shore organisms and protected material in place. A shore walk should not be sold as guaranteed wildlife collecting or an invitation to go farther onto exposed rocks.",
      },
      {
        title: "A boutique room should prove its comfort",
        advice:
          "Ask about the room's own cooling, bathroom, sound insulation, water supply, stairs and meals. Establish whether a pool, terrace or restaurant belongs to the property and is operating, and what service is included. A striking photograph or premium label does not establish privacy, step-free access, dependable English assistance or the facilities of a large beach resort.",
      },
      {
        title: "Religious buildings are part of contemporary village life",
        advice:
          "Shengtang's church can support a considered discussion of local Catholic history and the community today. Confirm public visiting, conduct and photography separately from services or a meeting with clergy. A historic facade does not mean every visible part is original or every interior open. Do not stage worship or imply a household invitation as part of a premium island day.",
      },
      {
        title: "Protect the departure without promising that a buffer solves everything",
        advice:
          "Consider a mainland night before a fixed onward flight or train and agree how changed sailings affect rooms and transport. A longer disruption can exceed any fixed buffer, so establish who communicates updates and what alternatives genuinely exist. An unverified private boat is not a reliable backup to suspended passenger operations. Choose the mainland holiday if ferry dependence does not fit the guest's needs.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "beihai",
        advice:
          "Beihai is the mainland chapter for the passenger crossing, port-city history, Qiaogang food and a selected Silver Beach stay. Give it its own room and transfers when useful. An island room cannot substitute for a mainland room before a fixed departure, and a city arrival does not guarantee a same-day ferry connection.",
      },
      {
        slug: "nanning",
        advice:
          "Nanning can add Guangxi collections, city food and a different gateway. Plan the complete island-to-mainland sequence before the dated rail or road journey. Avoid a tightly fixed connection whose only route depends on the island return operating exactly as hoped.",
      },
      {
        slug: "sanya",
        advice:
          "Compare Sanya when the priority is a full-service coastal hotel stay with a different transport and resort pattern. Weizhou offers small-property island time, coastal geology and ferry dependence. Assess actual rooms, seasons and flights rather than assume both destinations provide the same beach holiday.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose the season by the whole crossing-and-stay experience. Warmer months bring heat, rain and periods of marine disruption; cooler months may suit walking but can bring wind and water temperatures that do not fit a swimming holiday. A quieter date does not establish calm sea conditions. Check current forecasts, marine notices and the passenger operator near travel. Avoid promising a particular sunset, clear water or operating boat activity, and choose a property worth enjoying when a coast route needs to change.",
    orientation:
      "Weizhou is an offshore island administered by Beihai, Guangxi, in the Beibu Gulf. The mainland departure terminal, island arrival port, South Bay, coastal sites and village hotels are distinct locations. It is not a road-connected neighborhood of Beihai or part of Hainan. This guide covers a selected island stay, not unrestricted access to every rock platform, protected shoreline, offshore islet, dive site or marine activity.",
    experiences: [
      "Understand coastal volcanic landforms through a well-chosen permitted route",
      "Enjoy a suitable island room and slower village or shore time between crossing days",
      "Explore a church setting and coastal food with contemporary community context explained",
    ],
    planningNotes: [
      "Count island nights separately from mainland approach and departure stays",
      "Choose the actual room, shore approach and meal plan before booking by a sea-view label",
      "Confirm operating crossings, site routes and a changed-sailing response for the travel date",
    ],
    arrival:
      "Reach the booked Beihai passenger terminal with check-in, identity and luggage requirements confirmed for the actual guest. The mainland airport or railway arrival is only the start of that connection. After the operating crossing, allow disembarkation, finding the agreed pickup and the drive or final walk to the room. Confirm each stage instead of assuming a hotel transfer begins at the mainland airport and continues uninterrupted to an island bedroom. Use actual operator notices rather than old fixed timetables.",
    gettingAround:
      "Use an agreed island transport plan with named pickup points and the actual vehicle's operating scope. A touring vehicle may not reach every shore route or hotel entrance. Group visits sensibly and check final walking, steps and shade. Bicycle or scooter rental is a separate decision involving the guest's experience, current legal requirements, equipment and conditions; do not make it the default way to enjoy the island. Recreational boats and diving need separate qualified-provider and suitability checks.",
    stayStrategy:
      "One well-chosen room can simplify two or three island nights. A hotel change should offer enough different value to justify checkout, bags and another pickup on a small island. Choose the west coast, bay or village by what you want to do between visits, not only by a single photograph. Keep mainland departure arrangements visible and a Beihai-only stay available as an alternative when crossings or service conditions do not fit the brief.",
    firstTimerNote:
      "Start with the kind of island day you want: a meaningful geology walk, quiet property time or village context. Then choose the room and a compatible second interest. You do not need to swim, ride a scooter, dive or visit every coast to enjoy Weizhou. The strongest plan can be a modest selection with enough time for the room, meals and the inevitable transitions around a boat journey.",
    faqs: [
      {
        question: "Where is Weizhou Island in China?",
        answer:
          "Weizhou Island (涠洲岛) is offshore from Beihai in Guangxi, in the Beibu Gulf. It is distinct from mainland Beihai and Hainan. Reaching it involves an operating passenger crossing and a separate island transfer rather than a road drive from the city.",
      },
      {
        question: "How many nights should I spend on Weizhou Island?",
        answer:
          "Two island nights give one full day; three give two full days for a main coastal route and slower property or village time. Mainland approach and departure nights are additional. One night or a day trip depends heavily on actual useful sailing hours.",
      },
      {
        question: "Where should I stay on Weizhou Island?",
        answer:
          "Compare a specific west-coast room near the Shiluokou or Dishui Danping direction, a South Bay room for its dining relationship, or an east-coast or village property for its own setting. Check bedroom view, noise, cooling, meals, steps and the actual shore approach.",
      },
      {
        question: "Is the ferry ticket the only ticket I need for Weizhou?",
        answer:
          "Do not assume that. Confirm dated passenger tickets, any applicable scenic admission, selected site access and island transport separately. Use the responsible operator's current terms and the actual guest's identity requirements rather than an old all-inclusive description.",
      },
      {
        question: "Is Crocodile Hill an easy beach walk?",
        answer:
          "Assess the actual permitted visitor route. Coastal volcanic sightseeing can involve steps, slopes, heat and exposed walking, distinct from relaxing on a beach. Review final access, rest opportunities and a shorter alternative before describing it as easy or accessible.",
      },
      {
        question: "Can I swim or snorkel anywhere on Weizhou?",
        answer:
          "No unrestricted access should be assumed. Follow current managed-area rules, sea conditions and warnings. Swimming, snorkeling, diving and a shore walk have different demands and provider requirements. A hotel beside the sea does not establish suitable water access or an included activity.",
      },
      {
        question: "Can I walk on the Wucaitan tidal shore at low tide?",
        answer:
          "Only assess a currently permitted route with local conditions and the full return understood. Low tide alone does not establish safe footing or calm waves. Stay away from closed areas, unstable faces and sea caves, and leave living organisms and protected material in place.",
      },
      {
        question: "Can I visit Shengtang Catholic Church?",
        answer:
          "Confirm the actual public visiting arrangements and current conduct and photography rules. A visit to the building and village is different from joining a service or meeting clergy. Neither religious participation nor access to private homes is implied by a guided island stay.",
      },
      {
        question: "Can I fly from Beihai on the day I leave Weizhou?",
        answer:
          "Avoid a tight flight dependent on the island return. Allow the whole crossing and terminal-to-airport journey and consider a mainland night before a fixed departure. Sailings can stop for longer than a fixed buffer, so agree change options instead of relying on a guaranteed connection.",
      },
      {
        question: "Is there a published Weizhou Island tour here?",
        answer:
          "No matching product is listed. Share dates, mainland connections, island nights, room needs and walking or coastal interests for a tailored assessment. The illustrative outline does not establish booked sailings, a particular hotel, private religious access or recreational boat activities.",
      },
    ],
    culturalStory: {
      title: "An island shaped by rock, settlement and belief",
      paragraphs: [
        "Volcanic origin gives Weizhou a distinctive physical setting, but the view is also shaped by waves, weather and human use. A good coastal explanation begins with what guests can actually see: different surfaces, layers and the way a shoreline changes. Avoid turning every feature into an unsupported eruption story. Looking carefully from an appropriate path can be more revealing than approaching the most dramatic edge for a photograph.",
        "Village and church visits add another scale of understanding. At Shengtang, distinguish the building's historical context, later change and current religious use. Residents are participants in contemporary island life, not an exhibit attached to a geology tour. Ask permission for personal photographs and arrange any hosted conversation with willing people. A public village route can be worthwhile without entry to homes, a staged ceremony or a claim of exclusive access.",
      ],
    },
    foodStory: {
      title: "Choose a dependable meal before chasing a seafood spectacle",
      paragraphs: [
        "An island stay needs a reliable breakfast and dinner plan, particularly when a hotel is away from a dining area or a crossing changes arrival time. Ask what the actual kitchen prepares well, keep a comfortable non-seafood alternative and choose portions for the group. A selected South Bay meal can offer context as well as a change of setting, but repeated drives for a supposed must-try dish can consume a quiet island day.",
        "For seafood, agree the item, unit, weight or portion and cooking fee before preparation. Clarify whether guests are buying directly from a restaurant or using a separate purchase-and-cook arrangement, including who takes responsibility for the order. Discuss shellfish, fish sauces, meat stocks, nuts and shared equipment. A small kitchen may have limited substitutes, so confirm capability in advance. Transparent ordering and dependable service create more value than a promise of the freshest or most authentic meal without evidence.",
      ],
    },
    itinerary: [
      {
        day: "Arrival crossing day",
        title: "Complete both sides of the boat journey",
        description:
          "Use the actual operating service with check-in, luggage and island pickup confirmed. Settle into the room and have a dependable meal. Add only a suitable short orientation if useful daylight remains; do not make a major shore route depend on an uncertain arrival.",
      },
      {
        day: "First full day / a main coastal subject",
        title: "Understand volcanic landforms from a permitted route",
        description:
          "Choose the actual Crocodile Hill or another assessed coastal visit with walking, shade and breaks understood. Explain the visible landscape, then leave a seated meal. Swimming or a recreational boat is a separate choice, not the default afternoon.",
      },
      {
        day: "Optional second full day / village or slower island time",
        title: "Give the property and a different interest their own time",
        description:
          "With three island nights, consider an agreed church-and-village route, another suitable coast or time at the property. Follow current access and sea conditions. These are alternatives rather than a promise to visit every shore or attend religious activity.",
      },
      {
        day: "Departure crossing day",
        title: "Return to the mainland with the next night explicit",
        description:
          "Complete the booked island pickup, passenger crossing and mainland transfer, adjusting to current operations. Keep fixed onward departures separate from a tight boat return. This two-to-three-night outline is illustrative and does not create a published package or guaranteed sailing.",
      },
    ],
  },
};
