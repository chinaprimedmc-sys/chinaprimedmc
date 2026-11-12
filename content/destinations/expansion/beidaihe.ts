import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/beidaihe.svg",
  alt: "Original Beidaihe planning schematic comparing a practical coastal base, family beach downtime and a specialist birding day, with Nandaihe and Aranya assessed separately; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const beidaiheGuide: ExpandedDestination = {
  id: "beidaihe",
  name: "Beidaihe",
  region: "north",
  kicker: "Make the seaside stay work beyond the sea-view photograph",
  description:
    "Choose Beidaihe for a considered coastal break, with practical hotel-area advice, family pacing, seasonal birding and clear distinctions from Nandaihe and Aranya.",
  stay: "2–3 coastal nights; add time for a separate Great Wall or specialist day",
  bestFor:
    "Coastal downtime, family-friendly pacing and separately planned migration-season birding",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["qinhuangdao", "beijing", "tianjin"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Beidaihe Travel Guide: Beaches, Birding & Where to Stay",
    seoTitle: "Beidaihe Guide: Beaches, Birding & Hotels",
    seoDescription:
      "Plan a Beidaihe coastal stay with hotel-area choices, family beach time, seasonal birding, train transfers and clear Nandaihe and Aranya distinctions.",
    answer:
      "Beidaihe (北戴河) is a seaside district of Qinhuangdao in Hebei, on the Bohai coast east of Beijing. It can suit a short coastal break, a slower family chapter or a separately planned migration-season birding visit. Choose it for time by the sea and a specific property or outdoor interest, rather than expecting a tropical island resort. Two or three nights give the stay room to breathe beyond the station transfer. The traditional Beidaihe seaside area, Nandaihe, Beidaihe New Area and Aranya should not be treated as interchangeable hotel locations. Use the actual address, beach route and intended activities when comparing proposals.",
    stayAnswer:
      "Two nights provide one full coastal day. Three nights allow two different days, a slower family rhythm or flexibility for weather. If Shanhaiguan and Laolongtou are important, give that separate history outing real time instead of using the only beach day for a long return drive. Birders should allocate time around their target habitats and season with an appropriate guide; one dawn outing is not a complete specialist trip. Longer stays make sense when the actual room, meals and activities support genuine downtime, rather than because a generic resort description promises unlimited attractions.",
    hotelAnswer:
      "Begin with the exact walk from the room to the coast, not the sea-view label. A central seaside address near the Laohushi area can help meals and short outings, but check street activity, noise, the shore entrance and room orientation. A property toward the Geziwo side may suit a particular coastal or birding brief, with the actual route and transport verified. A quieter inland room can be a sensible value choice if short transfers work. Nandaihe and Aranya properties need their own assessment rather than being treated as another block of the same neighborhood.",
    sightseeingQuestion: "What should I do in Beidaihe beyond spending time on the beach?",
    sightseeingAnswer:
      "Choose one complementary subject that suits the dates. A selected Geziwo / Pigeon Nest coastal route can offer a different outlook and, when conditions and access fit, time to observe intertidal habitat. A modest streets-and-coast walk can introduce the seaside town's development without assuming private villa access. Migration-season birding is a distinct specialist interest requiring habitat knowledge, lawful routes and patience. Shanhaiguan and Laolongtou are a separate history day in the wider Qinhuangdao area. Aranya architecture is another location and admission decision, not a guaranteed local afternoon addition.",
    visitorResources: [
      {
        label: "Qinhuangdao municipal government",
        href: "https://www.qhd.gov.cn/",
        scope:
          "Official municipal context and dated notices, mainly in Chinese. Check the responsible local authorities, parks and operators for current coastal access, conditions and services. A regional overview does not establish swimming supervision, an open intertidal route or access to a particular private property.",
      },
      {
        label: "Hebei provincial government",
        href: "https://www.hebei.gov.cn/",
        scope:
          "Provincial public information and context. The administrative district, wider development-area names and individual resort addresses need to be distinguished in the actual booking. Regional birdlife or tourism descriptions are not current habitat access or target-species guarantees.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and exact stations. Beidaihe / 北戴河, Qinhuangdao / 秦皇岛 and Shanhaiguan / 山海关 have different final transfers. Compare the full hotel journey and useful arrival time rather than choose by a broad coastal destination label.",
      },
    ],
    serviceScope:
      "A proposal should specify the actual property and room, full station transfers, intended shore route, meals and any guiding or activity hours. For families, establish bed configuration, extra-bed policy, breakfast, stairs or lift, shade, toilets and the actual indoor fallback. For birding, agree the guide's relevant expertise, target habitats, field hours, transport, equipment expectations and access boundaries. Swimming, water sports, riding, private villas, specialist architecture, resort venues and drone use require separate appropriate confirmation. A room reservation does not imply unrestricted beach, wetland or community entry.",
    routeAdvice:
      "Beidaihe can provide a slower contrast to Beijing's cultural days or Tianjin's port-city architecture when the season and chosen property fit. Use the Qinhuangdao guide for the distinct Shanhaiguan-and-Laolongtou history chapter. Decide whether that day improves the trip or takes away the rest you came for. There is no matching published Beidaihe tour recommended here. Share dates, gateways, family ages if relevant, preferred daily rhythm, dietary needs and room priorities for a tailored stay with actual facilities and services spelled out.",
    practicalPlanning: {
      timing:
        "Give arrival time to check-in, a meal and a short orientation rather than a fixed sunrise, tide or beach performance. In warmer months, plan outdoor time around heat, shade and rest. A sunrise viewpoint needs the real shore orientation, entry and forecast, while birding must respond to the habitat and conditions instead of an attraction checklist. Summer weekends and holidays can change room demand, traffic and noise. Keep the actual departure-station transfer realistic and do not finish a distant excursion immediately before a train.",
      walking:
        "A paved promenade, soft sand, wet intertidal ground and a park viewpoint have different demands. Check steps, gradients, the actual shore entrance, seating and toilets. A sea-view hotel room can still require a substantial or awkward walk to the intended beach. Families need shade and a simple return route; mobility needs may favor a shorter paved outing rather than a sand crossing. Use permitted visitor paths and stay out of restricted or unstable intertidal areas. A driver cannot remove these final access questions.",
      cost: "Compare room category, dates, breakfast, beach or pool facilities actually included, full transfers and any guide or specialist field time. A family room name does not establish bed sizes, occupancy or meals for children. A birding day and a general driver-guided coastal outing are different services. Clarify changes if weather or access alters activities. Premium value comes from sleep, convenient routines, reliable food and well-matched expertise, rather than an unverified private-beach promise or guaranteed wildlife photograph.",
    },
    attractions: [
      "A selected Laohushi / Tiger Stone coastal area with current access and conditions reviewed",
      "Geziwo / Pigeon Nest Park through a specific currently available coastal route",
      "A modest seaside streets-and-promenade walk with private properties respected",
      "A specialist migration-season birding outing at lawful, currently appropriate habitats",
      "Time at the actual booked property with its operating family or indoor facilities confirmed",
      "Shanhaiguan and Laolongtou as a separate wider-city history day",
      "Nandaihe or an Aranya venue only as a separately researched coastal chapter",
    ],
    stays: [
      {
        label: "1 night / a brief coastal pause",
        advice:
          "Useful when real connections leave enough time to enjoy the shore and a meal. A late arrival and early train provide little rest, especially with children and luggage. Choose a straightforward property rather than cross the wider coast for a single photograph.",
      },
      {
        label: "2 nights / one full day by the sea",
        advice:
          "Protect actual downtime, a manageable coastal outing and proper meals. A specific birding day can take this role when that is the main purpose. Do not silently replace the only full day with distant Wall sites or resort venues if guests expected a restful beach break.",
      },
      {
        label: "3 nights / two different days or a slower rhythm",
        advice:
          "Add another coastal interest, a separate history day or more time at a property whose actual facilities suit the group. Keep the order flexible for weather. More nights do not guarantee swimming, clear sunrises, quiet shores or target birds; a longer stay needs benefits that remain useful when conditions change.",
      },
    ],
    hotelAreas: [
      {
        name: "Central seaside / Laohushi-area address",
        advice:
          "Can support meals, modest walks and a simple return to the room. Check the actual street, noise, shore entrance, booked view and pickup. Near the beach does not establish sand access without steps or a supervised swimming zone. Evaluate a family routine from room to breakfast to shore and back.",
      },
      {
        name: "Geziwo-side or another named coastal property",
        advice:
          "Choose for an actual outlook, suitable outdoor route or specialist brief, then verify the room, meals and transport. Proximity to bird habitat does not supply a qualified guide or permission to enter sensitive areas. A dawn plan needs actual access and conditions, not merely a promising map location.",
      },
      {
        name: "An inland Beidaihe room / value with explicit transfers",
        advice:
          "May offer a quieter or better-equipped room for the budget. Compare the full daily shore journey, food and pickup rather than assume walking convenience. The saving is useful only if the transport and time suit the stay, especially for children who need a midday return.",
      },
      {
        name: "Nandaihe, Beidaihe New Area or Aranya / a different address and stay",
        advice:
          "Treat each actual property and venue as its own proposal. Check full station transfer, current operation, room, meals, shore access and any community or event admission. A broad Beidaihe search label is not evidence that it sits in the traditional seaside district or offers the same local outings.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose a seasonal north-China coast, not a tropical-resort expectation",
        advice:
          "Beidaihe's appeal changes through the year. A warm-season beach brief needs current swimming conditions and operating services; a cooler-season visit needs another purpose such as coastal walking or researched birding. Judge the actual trip against those interests. Sea view and an open hotel do not establish warm water, full summer facilities or a destination that suits every beach-holiday expectation.",
      },
      {
        title: "Sea view, shore access and swimming are three separate benefits",
        advice:
          "Ask what the booked room sees, how you reach the actual shore and whether a designated swimming area is operating under suitable conditions. A photograph can answer none of these fully. For children, establish supervision expectations, shade, toilets and the return to the room. A private-sounding hotel beach description is not a safety or exclusivity guarantee.",
      },
      {
        title: "Beidaihe, Nandaihe and Aranya require precise addresses",
        advice:
          "They are not interchangeable neighborhood names. Booking platforms and travel accounts may use the wider coast's labels loosely, including Beidaihe New Area. Compare the full Chinese property and venue locations before choosing the station or excursions. A stay selected for Aranya buildings may make different tradeoffs from one designed around a traditional Beidaihe beach routine.",
      },
      {
        title: "Birding needs habitat expertise and a realistic target list",
        advice:
          "Spring and autumn migration are useful research contexts, but species, timing and conditions vary. An appropriate specialist should select lawful habitats and adjust the outing, using suitable observation distance and avoiding disturbance. Do not enter closed wetland, approach nests or use bait to secure a photograph. A general park ticket and a coastal driver are not substitutes for a defined birding service, and sightings remain uncertain.",
      },
      {
        title: "Historical seaside interest does not grant villa or institutional entry",
        advice:
          "The area's development can support a thoughtful public streets-and-coast walk, with individual buildings identified accurately. Some properties or institutional compounds are private or restricted. Do not promise interiors, grounds or unrestricted photography from a generic historic-villa label. Choose a public route that is worthwhile without relying on entry that has not been confirmed.",
      },
      {
        title: "A family break should preserve its restful hours",
        advice:
          "After a busy Beijing stay, room comfort, meals and a short shore routine may matter more than another full-day checklist. Compare adding Shanhaiguan with retaining the only coastal day for downtime. Both can be good choices, but they answer different needs. Confirm actual beds, pool operation and activity ages before calling a property family-friendly.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "qinhuangdao",
        advice:
          "Use the wider Qinhuangdao guide for Shanhaiguan pass, Laolongtou and the region's history-versus-coast decision. Give the full excursion and walking their real time. A Beidaihe hotel stay does not automatically include those sites, and the history day should not replace promised rest without a clear choice.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing adds a separate cultural chapter before or after the coast. Compare actual trains, stations and both final transfers, protecting useful time at each base. Existing Beijing family or Great Wall tours do not include Beidaihe accommodation or coastal activities by implication.",
      },
      {
        slug: "tianjin",
        advice:
          "Tianjin offers a different urban and port-city architecture interest. Choose a meaningful city stay and the actual onward connection, rather than assume every Bohai-area destination is one easy beach circuit. Give the coast its intended rest or specialist time after the transfer.",
      },
    ],
  },
  editorial: {
    bestTime:
      "For a seaside holiday, start by researching the warmer summer period, then assess the actual dates, swimming conditions and property services. Popular weekends and holidays can bring high demand. Spring and autumn may suit coastal walks or a researched migration-season birding brief, with cooler water and changing weather. Winter is a distinct cold-coast visit, not the same summer itinerary at a lower rate. Choose the experience first, then the season and room; no calendar window guarantees particular birds, calm water or clear dawn light.",
    orientation:
      "Beidaihe is a district of Qinhuangdao in Hebei, on the Bohai coast. The traditional seaside area, railway station and specific park entrances are separate locations. Nandaihe, the wider Beidaihe New Area labels and Aranya require their own exact addresses. Shanhaiguan and Laolongtou lie in a different part of the wider city. Use full Chinese property and venue names so a broad resort tag does not conceal the real transfer or access arrangement.",
    experiences: [
      "Enjoy a simple room-to-shore routine at a property chosen for actual comfort and access",
      "Explore a selected coastal park or public route with time for observation and rest",
      "Research specialist birding or a separate heritage day when it matches the trip's purpose",
    ],
    planningNotes: [
      "Choose the season and actual property before expecting beach or pool services",
      "Separate traditional Beidaihe addresses from Nandaihe and Aranya proposals",
      "Confirm family facilities or specialist birding as real services, not labels",
    ],
    arrival:
      "Choose an actual dated service to Beidaihe / 北戴河 or another station only when its full transfer better serves the property. Qinhuangdao and Shanhaiguan are different arrivals. Include luggage, meals, check-in and useful first-day time. A wider regional airport proposal needs a verified operating flight and the whole road to the room. For a short family break, a simple reliable connection can be more valuable than a nominally faster service with awkward final transfers.",
    gettingAround:
      "Use short local routes where possible and plan longer coastal or heritage outings explicitly. A family day may need only a transfer and independent property time rather than a guide on standby. Specialist birding needs different hours, habitats and transport from general sightseeing. Confirm the final shore walk, steps, sand, seating, toilets and return pickup. Remain on lawful paths and respect private or sensitive areas; a driver cannot supply venue or habitat access merely by reaching the area.",
    stayStrategy:
      "For two or three nights, favor one well-chosen base and a manageable routine. Assess quiet, temperature control, bed arrangement, bathroom, breakfast, dinner and the actual coast route before a sea-view premium. Give an outlying property a clear reason to be in the plan. A longer stay should still work on a wet or windy day through real room comfort and operating facilities, rather than rely on a vague promise of luxury or unlimited resort activities.",
    firstTimerNote:
      "Describe what a good full day looks like for your group: beach and rest, a modest coastal walk, or specialist birding. Then ask the proposal to show how the room, season, meals and transport support that day. This reveals whether Beidaihe is a useful contrast to a busy city itinerary or merely a coastal label attached to a hotel that does not deliver the holiday you want.",
    faqs: [
      {
        question: "Is Beidaihe worth adding to a Beijing trip?",
        answer:
          "It can be for coastal downtime, a suitable family break or a separately researched birding interest. Choose the actual season, property and complete transfer. It is a weaker fit if you expect tropical water, guaranteed resort facilities or a short sightseeing stop that also supplies meaningful rest.",
      },
      {
        question: "How many nights should I stay in Beidaihe?",
        answer:
          "Two nights give one full coastal day; three allow another interest or a slower rhythm. Give a separate Shanhaiguan day real time if it is important. Longer stays need actual property and activity benefits, while one night can feel brief after the station transfers.",
      },
      {
        question: "Are Beidaihe, Nandaihe and Aranya the same place?",
        answer:
          "No. Treat them as distinct location choices and use the full Chinese hotel and venue addresses. Wider Beidaihe New Area or Qinhuangdao labels can hide different transfers and local experiences. A booking under one coastal search term does not establish proximity or entry to the others.",
      },
      {
        question: "Where should families stay in Beidaihe?",
        answer:
          "Choose a specific room with suitable beds, a manageable coast route, reliable meals, quiet and a workable indoor alternative. A central seaside address may simplify outings, but check the actual street and beach access. Confirm pool operation, activity ages and any additional charges rather than rely on a family-friendly tag.",
      },
      {
        question: "When is Beidaihe good for birdwatching?",
        answer:
          "Spring and autumn migration are useful starting points, with actual species, habitat, dates and conditions researched through an appropriate guide. Follow lawful access and low-disturbance observation. A coastal park visit does not guarantee target birds, and a general driver is not necessarily a specialist birding guide.",
      },
      {
        question: "Does a sea-view hotel include beach access and swimming?",
        answer:
          "Not automatically. Confirm the booked outlook, actual shore route and any designated swimming area separately. Weather, water conditions and operating supervision matter. A beach photograph or room rate does not establish safe swimming, private sand or suitable access for children and limited mobility.",
      },
      {
        question: "Can I visit Shanhaiguan from a Beidaihe hotel?",
        answer:
          "Research it as a distinct wider-city history outing with full road time, selected pass and Laolongtou routes, walking and lunch. It is not a short beach stroll. Decide whether to add a day or consciously use a coastal day for history rather than quietly remove the rest you expected.",
      },
      {
        question: "Which station should I use for Beidaihe?",
        answer:
          "Choose the actual dated train and property journey. Beidaihe station is a distinct gateway from Qinhuangdao and Shanhaiguan. Compare final transfers, luggage and useful arrival hours, using the exact hotel address rather than a broad coastal label to select pickup.",
      },
    ],
    culturalStory: {
      title: "Read the seaside town through public space and changing uses",
      paragraphs: [
        "Beidaihe's value is not limited to sand. A modest walk can introduce the area's development as a seaside destination, its public coastal spaces and the relationship between older buildings and contemporary holiday life. Explain the particular street or structure rather than assume every villa-looking property has the same history. A public exterior, an operating hotel and an institutional compound are different settings with different visitor boundaries.",
        "Good interpretation also makes room for the present coast: residents, holidaymakers, conservation concerns and changing visitor infrastructure. Avoid treating a working neighborhood as an empty historic set or photographing private spaces without permission. A specialist architectural visit needs actual research and available access, while the ordinary shore can be enjoyed without a claim of exclusivity. The strongest cultural addition is often a clear, accurate explanation that fits a relaxed day.",
      ],
    },
    foodStory: {
      title: "Make seaside meals easy to choose and easy to enjoy",
      paragraphs: [
        "Agree what kind of meal suits the group before choosing a seafood restaurant. Confirm species, portion, price basis and cooking method rather than order from a photograph alone. A coastal address does not establish sourcing or freshness. Suitable cooked vegetables, rice, noodles and other dishes can support guests who prefer a simple meal. For families, flexible portions, a realistic dinner time and a short return to the room often matter more than a lengthy specialty banquet.",
        "Seafood allergies need particular attention to stock, sauces, utensils and shared cooking equipment. Removing visible shellfish does not establish a suitable meal. Vegetarian, halal and other strict requirements also need a specific venue and confirmed preparation capacity. Plan breakfast and a late-arrival option with the property, especially outside peak season. A cooking activity or family-hosted meal is separately arranged with a real willing provider, not included merely because the itinerary describes local culture.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / the real station-to-room journey",
        title: "Establish a comfortable coastal routine",
        description:
          "Transfer to the actual property, settle in and take a straightforward meal. A short shore orientation can fit if conditions and energy allow. Check the next day's route and operating facilities rather than promise an essential sunset or swim tied to arrival time.",
      },
      {
        day: "Full day 1 / coast and useful downtime",
        title: "Keep the main reason for staying intact",
        description:
          "Use a manageable permitted coast or park route, with shade, meals, toilets and rest. Swimming depends on the actual conditions and designated service. If birding is the main purpose, substitute the separately researched field plan with appropriate guide and lawful habitat access.",
      },
      {
        day: "Full day 2 / for a three-night stay",
        title: "Choose another interest or enjoy the property",
        description:
          "Keep a slower family day, choose a distinct coastal subject or begin a separately planned Shanhaiguan history outing. An Aranya venue needs its own actual booking and full road sequence. More time does not guarantee wildlife, clear light or exclusive resort access.",
      },
      {
        day: "Departure / the ticketed onward service",
        title: "Leave room for the complete transfer",
        description:
          "Allow luggage, check-out and the actual station road before continuing to Beijing, Tianjin or another confirmed chapter. This outline is illustrative, not a published package or a guarantee of beds, pool operation, swimming, bird sightings, venue access or weather.",
      },
    ],
  },
};
