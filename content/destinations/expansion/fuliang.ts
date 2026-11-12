import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/fuliang.svg",
  alt: "Original Fuliang planning schematic separating county history, a confirmed tea experience and a rural stay from Jingdezhen's city ceramics visits; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const fuliangGuide: ExpandedDestination = {
  id: "fuliang",
  name: "Fuliang",
  region: "east",
  kicker: "Tea country and county history beyond the porcelain city",
  description:
    "Explore Fuliang through its historic county seat, tea landscape and a carefully chosen rural stay, with clear boundaries around workshops, art and Yaoli outings.",
  stay: "A focused day from Jingdezhen or 2–3 nights for a rural chapter",
  bestFor: "Tea culture, county history and thoughtful countryside time near Jingdezhen",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["yaoli", "jingdezhen", "wuyuan", "huangshan", "hongcun"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Fuliang Travel Guide: Tea Country, History & Stays",
    seoTitle: "Fuliang Guide: Tea Country, History & Stays",
    seoDescription:
      "Plan Fuliang near Jingdezhen: county history, a confirmed tea visit, rural hotel choices and two or three nights. Keep Yaoli and art events distinct.",
    answer:
      "Fuliang (浮梁) is a county administered by Jingdezhen in northeastern Jiangxi. It adds a different chapter to a porcelain-focused journey: the historic county seat, tea-growing landscapes and time in a selected rural setting. Start with the old county government complex for local administration and trade context, then choose a tea visit or village route with a clear purpose. A focused day from a Jingdezhen hotel can work; two rural nights provide one full day when the room and setting justify moving. Fuliang is a wider county, not one walkable tea village. Yaoli lies within its planning geography but needs a separate route and should not be treated as automatically included.",
    stayAnswer:
      "Use a day visit from Jingdezhen for one coherent county-history or tea subject when the complete return journey fits. Two nights suit a genuinely worthwhile countryside property and one focused full day; three give two days for different interests or a slower pace. Do not move hotels merely to gain a rural address. A confirmed teacher, a useful village route or a room you intend to enjoy should explain the extra nights. A late arrival and early departure leave little time for the setting.",
    hotelAnswer:
      "Keep a Jingdezhen city base when museums, studios and city meals remain the main purpose, adding Fuliang as a defined excursion. Choose a named Fuliang rural property when the actual village, room and local activity justify it. Ask about bathroom separation, bedding, climate control, stairs, dinner, breakfast, pickup and wet-weather comfort. The county name covers a large area: a tea-view image does not locate the hotel beside the selected visit. A historic-style exterior does not prove an original house or reliable facilities.",
    sightseeingQuestion: "Should I choose the old county seat, a tea visit, Hanxi or Yaoli?",
    sightseeingAnswer:
      "Choose the historic Fuliang county government complex for a built setting in which to discuss administration, commerce and the region's history. Choose a tea visit for a confirmed lesson in growing, processing or tasting; those are different activities. A Hanxi village outing needs a current public route and a reason beyond an old photograph of an art installation. Yaoli is a separate village-and-landscape chapter with its own drive, walking and possible overnight. Choose one principal subject and a complementary stop rather than assume all four fit a relaxed excursion from every Jingdezhen hotel.",
    visitorResources: [
      {
        label: "Fuliang county government",
        href: "https://www.fuliang.gov.cn/",
        scope:
          "Official county context and dated public notices, mainly in Chinese. Confirm heritage-site openings, public village routes and any event information with the responsible bodies. County publicity does not establish a tea producer appointment, the continued presence of an artwork or access to private homes and fields.",
      },
      {
        label: "Jingdezhen municipal government",
        href: "https://www.jdz.gov.cn/",
        scope:
          "Regional administrative and cultural context. Distinguish the city ceramics institutions from Fuliang's separate county routes. A regional description is not proof of a currently available factory tour, kiln visit, rural hotel or specialist host.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains and full station names. Compare the actual arrival, often researched through Jingdezhen gateways, with the complete road to the booked rural property. A station in the wider area is not an arrival at every Fuliang village or tea producer.",
      },
    ],
    serviceScope:
      "A proposal should identify the public heritage route, actual tea provider and activity where arranged, village, hotel and room, full vehicle journey, guide language, admissions and meals. Explain whether a tea stop is a walk, tasting, lesson or commercial purchase opportunity. Field entry, leaf picking, production rooms, firing sites, private courtyards, expert meetings and temporary art events need their own current permission and arrangements. Agree a useful indoor or shorter alternative if rain, harvest work or a closure changes the principal activity.",
    routeAdvice:
      "Fuliang can complement Jingdezhen's museums and ceramics studios with county history and rural tea interests. Keep one city base when the countryside visit is a single day; move only when the actual property and slower local plan earn an overnight. Wuyuan adds different village and landscape routes, while Huangshan and Hongcun belong to a separately timed onward chapter. There is no matching published Fuliang tour in the current catalog. Share dates, gateways, tea or heritage interests, walking needs and room priorities for a tailored plan with explicit inclusions.",
    practicalPlanning: {
      timing:
        "Build the day around the activity that makes you want to go. A tea lesson depends on a willing provider and suitable timing; an ordinary tasting need not coincide with picking or processing. Give the historic county complex proper interpretation and allow lunch and rest before another rural route. Temporary art and flower photographs are date-specific. Protect the full return to your booked room or station rather than add distant villages at the end of an already complete day.",
      walking:
        "Historic compounds can involve stone paving, steps and thresholds. Tea-field routes may have slopes, narrow paths, wet ground and little shade or seating; a village road walk and a working field are different levels of effort. Confirm where the vehicle stops and how far bags travel to a rural bedroom. Agree toilets, seated breaks and a shorter worthwhile option. A private car does not make a hillside field, pagoda approach or traditional upper-floor room step-free.",
      cost: "Compare the exact room and meals, full vehicle scope, guide language and preparation, named admissions and any separately arranged tea service. Explain whether purchases are optional and whether the visit includes instruction or simply shop time. A countryside transfer, a hosted lesson and a rural overnight are different services. A premium should buy a comfortable useful stay and good explanation rather than unverified master access, a private plantation or an art event that may no longer be running.",
    },
    attractions: [
      "Historic Fuliang county government complex / Fuliang Gu Xianya through its current public route",
      "Hongta / the Red Pagoda area, with actual public access and viewing conditions checked",
      "A named tea producer or teaching venue for a specifically confirmed tasting or lesson",
      "A selected public village or tea-landscape route with land access respected",
      "Hanxi village only with its current public route and any art content checked",
      "A Gaoling-related materials-history subject only through a named available public visitor route",
      "Yaoli as a separately planned village-and-landscape excursion rather than an automatic inclusion",
    ],
    stays: [
      {
        label: "Day visit / keep the Jingdezhen room",
        advice:
          "Choose one clear county-history or tea subject, a realistic meal and a manageable complementary stop. This works well when city ceramics visits still anchor the trip. Use the actual hotel-to-site return journey, not a generic distance between city and county names.",
      },
      {
        label: "2 nights / one full rural day",
        advice:
          "Move to a countryside property for a real room, landscape or local-experience benefit. Allow time to arrive, settle in and eat well. Use the full day for a confirmed tea or cultural subject and a slower village route rather than spend it returning to city museums.",
      },
      {
        label: "3 nights / two distinct days or a gentler pace",
        advice:
          "Combine county history with a different tea or village interest, or protect more time at a property that genuinely suits the brief. A separate Yaoli chapter needs its own full road and visitor plan. Additional nights should create depth or rest, not a longer list of unconfirmed hosts.",
      },
    ],
    hotelAreas: [
      {
        name: "Jingdezhen city / a practical base for one countryside day",
        advice:
          "Choose the address around the city institutions and meals you will use, then price and plan the full Fuliang excursion. This avoids another luggage move when rural time is limited. A city ceramics hotel is not automatically near the selected tea field or county heritage complex.",
      },
      {
        name: "A named Fuliang village property / a deliberate rural stay",
        advice:
          "Ask for the booked bedroom, bathroom, stairs, air conditioning or heating, bedding and noise context. Check breakfast, dinner, luggage approach and access after rain. Remote or photogenic does not establish quiet, strong service, privacy or easy access to a willing tea teacher.",
      },
      {
        name: "A county-town or heritage-area address / a particular route advantage",
        advice:
          "Use a specific property and full address. The modern county seat, historic county complex and distant villages are not interchangeable bases. Compare meals and room facilities with the cultural journey before booking by a broad Fuliang label.",
      },
      {
        name: "Yaoli / another overnight decision",
        advice:
          "Consider a Yaoli stay for its own village and landscape purpose, with the actual room, evening food, climate control and approach assessed. A Fuliang county booking does not mean you are sleeping in Yaoli. Do not move again merely to collect another old-village hotel photograph.",
      },
    ],
    tradeoffs: [
      {
        title: "Tea learning, picking and buying are different experiences",
        advice:
          "A useful tasting compares the dry leaf, aroma after brewing, texture and finish, with the tea and brewing method explained. Ask what comes from the leaf, processing and preparation rather than treat a prestigious origin as a quality grade. This can be done without entering a working field or production room. Picking is seasonal agricultural work and needs a willing producer, suitable conditions and permission. A sales visit should be described honestly, with purchases optional. Neither a tea-growing reputation nor a photograph confirms the lesson available on your travel date.",
      },
      {
        title: "Fuliang adds context to Jingdezhen; it does not replace it",
        advice:
          "County administration, tea trade and rural materials history can enrich a ceramics journey. They are different from a city museum, archaeological kiln display or studio class. Choose how the subjects connect before adding hotel nights. A day in Fuliang is not automatically a pottery lesson, and a Jingdezhen maker visit does not include a rural host.",
      },
      {
        title: "An art photograph is not a current exhibition program",
        advice:
          "Rural art projects and temporary installations can change, move or close. If Hanxi or another village is chosen for art, identify what remains publicly visitable and why it matters now. The village and tea landscape may still be worthwhile, but explain that purpose rather than promise an old event image or unrestricted field access.",
      },
      {
        title: "Historic administration and surviving fabric need separate explanation",
        advice:
          "The old county government complex can introduce how a county was governed and how trade related to the region. Explain restored, reconstructed and older elements accurately instead of treating every visible hall as unchanged imperial fabric. A Red Pagoda view does not establish an open tower climb or admission to every surrounding structure.",
      },
      {
        title: "Materials history is not permission to enter an extraction site",
        advice:
          "Gaoling-related heritage can help explain the material story behind porcelain when a suitable public route is available. A historical mining association does not authorize quarry entry, collecting, active operations or off-path exploration. Name the public site and interpretive content before making it a reason for a substantial drive.",
      },
      {
        title: "A quiet rural stay needs evidence in the room and daily plan",
        advice:
          "Ask about neighboring works, events, shared courtyards, heating or cooling, dinner and the final vehicle approach. A villa label does not prove privacy or high service standards. Good value comes from the right property, a confirmed activity and time to enjoy both, rather than a remote address that produces longer daily transfers.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yaoli",
        advice:
          "The dedicated Yaoli guide compares the riverside town, Raonan ceramics heritage and Wanghu nature routes. Choose one principal subject and assess the actual room before adding an overnight. A county-history or tea day does not automatically include this separate journey or complete all of its scenic components.",
      },
      {
        slug: "jingdezhen",
        advice:
          "Jingdezhen provides the city museums, ceramics institutions and separately arranged studio teaching that can give the rural chapter a clear context. Keep one city base for a selective Fuliang day or add a countryside stay for a defined benefit. Existing city visits do not automatically include tea hosts or Fuliang accommodation.",
      },
      {
        slug: "wuyuan",
        advice:
          "Wuyuan offers another set of villages, rural routes and seasonal interests. Choose complementary places rather than repeat a generic village-and-fields itinerary. Include the complete road journey and exact room addresses; flowers, harvest displays and art projects have separate timing and should not be promised together by default.",
      },
      {
        slug: "huangshan",
        advice:
          "Huangshan adds a distinct mountain journey with separate gateway, accommodation and walking decisions. Allow the full connection after rural Jiangxi, then assess the mountain route on its own terms. A tea-country stay does not make a mountain summit visit a nearby afternoon activity.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun provides a different village form and architectural comparison in Anhui. Give that comparison a purpose and useful time rather than collect similar courtyard photographs. The onward journey, luggage access and actual room require separate planning from a Fuliang village stay.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates by the subject. Spring tea work may interest visitors, but picking dates, weather and a producer's capacity vary; a normal tasting is a different activity and can be researched separately. Summer brings heat, humidity and rain that affect field paths and rural comfort. Autumn can suit a slower landscape stay without guaranteeing particular colors. Winter makes heating and dinner arrangements especially important. Temporary art, harvest work and heritage-site hours follow separate calendars, so avoid promising all of them through one seasonal label.",
    orientation:
      "Fuliang is a county within the wider Jingdezhen administrative area in northeastern Jiangxi. Its modern county seat, historic county government complex, tea villages and outlying sites occupy different locations. Hanxi, Gaoling-related heritage and Yaoli need precise addresses and independent route choices. This guide helps choose a Fuliang chapter; use the separate Yaoli guide for its riverside settlement, Raonan and Wanghu choices. Neither guide establishes access to every rural site. The Jingdezhen gateway and the actual bedroom can be far apart in practical travel terms even when both use the same municipal label.",
    experiences: [
      "Understand county administration and regional commerce through a selected public heritage route",
      "Learn about a named tea through a confirmed tasting or teaching session",
      "Spend useful time in a chosen village or rural property with a clear cultural purpose",
    ],
    planningNotes: [
      "Decide between a Jingdezhen-based excursion and a worthwhile rural overnight",
      "Confirm the tea provider, current village route and any temporary art before booking",
      "Keep Yaoli and materials-history outings separate from assumed county-wide inclusions",
    ],
    arrival:
      "Compare dated trains or operating flights through the actual Jingdezhen gateway with the full transfer to your selected village or property. Use the complete Chinese address and agree luggage help where the final lane cannot take a vehicle. A direct arrival to a rural room may be sensible, but protect the main activity from an uncertain train or flight window. For an onward road day, include comfort breaks, meals and daylight or weather considerations rather than quote only an ideal uninterrupted drive.",
    gettingAround:
      "Use a coherent road sequence rather than move between unrelated villages because they share a county name. Confirm entrances, final walking, available toilets, seating, meals and pickup. A guide should be able to explain the chosen tea or heritage subject; a driver alone is a different service. Private transport does not authorize field entry, private homes or extraction sites. In rain, substitute a suitable confirmed indoor subject or shorten the walk instead of sending guests onto an unassessed agricultural path.",
    stayStrategy:
      "Keep the city room for a single purposeful excursion. Choose two or three countryside nights only when the exact property and available local interests justify time away from Jingdezhen's museums and studios. Assess sleep, bathroom, temperature control, dinner and luggage access before decorative style. A premium rural plan should make the days more comfortable and meaningful, not rely on invented exclusivity or a promise that the surrounding landscape belongs to the guest.",
    firstTimerNote:
      "Ask what Fuliang adds that your Jingdezhen stay does not: a tea lesson, county-history interpretation, or time in a specific rural setting. Then check the provider, route and room that make that answer real. A list of tea fields, art villages and old buildings without current detail is a weak reason for another hotel move.",
    faqs: [
      {
        question: "Is Fuliang worth visiting from Jingdezhen?",
        answer:
          "It can be for a clear interest in county history, tea culture or a particular rural setting. A focused day can work without moving hotels. Choose the actual subject and complete return journey rather than assume every countryside attraction is near your Jingdezhen room.",
      },
      {
        question: "Should I stay in Fuliang or Jingdezhen?",
        answer:
          "Keep a Jingdezhen base when city museums and studios lead the trip and Fuliang is a single excursion. Choose a named rural property for a genuine room, landscape or local-experience benefit, with meals, facilities and access checked. A county address alone is not a reason to move.",
      },
      {
        question: "How many nights should I spend in Fuliang?",
        answer:
          "A day visit suits one focused subject from a suitable city base. Two rural nights give one full day; three allow two distinct interests or a slower stay. Count useful arrival and departure hours and make sure the property and activities justify the extra nights.",
      },
      {
        question: "Can I pick tea or visit a tea factory in Fuliang?",
        answer:
          "Only with an actual willing producer, appropriate access and confirmed timing. A tasting, a field walk, picking and a production-room visit are different activities. Harvest dates and working conditions vary, so do not treat a tea-growing landscape as a permanently available class.",
      },
      {
        question: "Are Hanxi village art installations always open?",
        answer:
          "Do not assume so. Check the current public route, which works remain and any event or land-access rules. A photograph from an earlier exhibition does not establish today's program. Choose a village or tea-landscape visit for a clear current purpose, with an alternative if art is the main reason for coming.",
      },
      {
        question: "Is Yaoli included in a Fuliang day trip?",
        answer:
          "Not automatically. Yaoli is a distinct village-and-landscape decision within the wider county, with its own journey, walking and possible overnight. Decide whether it replaces another subject or needs another day instead of quietly adding it to a full tea-and-heritage plan.",
      },
      {
        question: "Can I combine Fuliang with a pottery class?",
        answer:
          "Yes, when the class is separately arranged with a suitable studio and the full route leaves enough teaching time. A city ceramics session and a rural tea visit are different services. Confirm language, content, firing and any collection or shipping rather than assume the county excursion includes them.",
      },
      {
        question: "Is a Fuliang countryside stay suitable for limited mobility?",
        answer:
          "Suitability depends on the exact room and route. Check stairs, thresholds, bathrooms, the vehicle-to-door luggage walk and the surfaces around the property. Tea-field slopes and wet paths may be unsuitable even when the village road is manageable. A ground-floor room is not necessarily step-free.",
      },
    ],
    culturalStory: {
      title: "Connect tea, administration and the porcelain region",
      paragraphs: [
        "Fuliang adds useful context to a ceramics journey because it shifts attention from finished objects to a wider region of trade, administration and rural work. Bai Juyi's poem Pipa Xing refers to a merchant going to Fuliang to buy tea, a concrete literary starting point for discussing its tea-trading associations rather than proof that a modern product is unchanged from the Tang era. The old county government complex offers a way to discuss how places were governed, while a carefully arranged tea session can focus on material, season and preparation. These are distinct subjects; a guide should explain their relationship without turning every local story into proof of an exclusive experience.",
        "The countryside is a working landscape and a contemporary home, not an empty backdrop. Tea production, domestic life and temporary art projects have their own purposes and rhythms. Ask before photographing people or entering a courtyard, stay on agreed public routes and distinguish current art from earlier publicity. Understanding what is genuinely present makes the visit more interesting than trying to recreate a promotional photograph.",
      ],
    },
    foodStory: {
      title: "Let the meal support the rural day",
      paragraphs: [
        "A village meal is most useful when the kitchen, timing and dishes have been discussed. Ask what is actually available, how much chili you want and whether a proper seated lunch is possible between visits. A tea session should explain the named tea and preparation rather than become an obligatory purchase. A hosted family meal or cooking lesson needs a willing provider and separate arrangements; a rural restaurant is not the same service.",
        "Clarify pork, meat stock, freshwater fish, wheat, soy-based seasonings, nuts and shared preparation where relevant. A vegetable dish or farm-style label does not establish vegetarian, halal or allergy suitability. Tea contains caffeine, so offer a suitable pace and an alternative drink when needed. Serious dietary requirements need a specific kitchen's confirmed capacity and a fallback, especially at a remote property with limited evening options.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / a rural first night if staying",
        title: "Make the room and meal part of the plan",
        description:
          "Transfer to the exact property with agreed luggage help, settle in and take a meal. A modest public village walk can fit if arrival and weather allow. Keep the principal tea appointment or heritage subject off an uncertain late arrival.",
      },
      {
        day: "Full day 1 / a focused Fuliang chapter",
        title: "Choose county history or tea as the anchor",
        description:
          "Give the old county complex or a confirmed tea lesson proper time, then a realistic lunch, rest and manageable complementary village interest. For a Jingdezhen-based day visit, include the complete return drive. Do not append Yaoli, a distant art route and a kiln visit to an already full plan.",
      },
      {
        day: "Optional full day 2 / for a three-night stay",
        title: "Add a different subject rather than more of the same",
        description:
          "Choose a second confirmed cultural interest, a slower property day or a separately planned Yaoli excursion with the road and walking assessed. Current art or materials-history visits need a named available public route. Leave room for a useful alternative in wet weather.",
      },
      {
        day: "Departure / city ceramics or the onward region",
        title: "Protect the full final journey",
        description:
          "Return to a separately arranged Jingdezhen city chapter or reach the actual ticketed gateway with luggage and road time allowed. This is an illustrative outline, not a published package or a guarantee of tea picking, hosts, art installations, factory access or specific rooms.",
      },
    ],
  },
};
