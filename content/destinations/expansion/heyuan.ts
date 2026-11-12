import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/heyuan.svg",
  alt: "Original Heyuan planning schematic separating Wanlü Lake, city museums and a selected Hakka village, with city versus lakeside bases; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const heyuanGuide: ExpandedDestination = {
  id: "heyuan",
  name: "Heyuan",
  region: "south",
  kicker: "Reservoir landscapes, dinosaur discoveries and Hakka countryside",
  description:
    "Choose a purposeful Heyuan break: Wanlü Lake scenery, a city museum visit or a selected Hakka village, with realistic transfers and city versus lakeside stays.",
  stay: "2–3 nights for a focused lake and cultural stay",
  bestFor: "Reservoir scenery, family museum interests and selected Hakka village visits",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["huizhou", "meizhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Heyuan Travel Guide: Wanlü Lake & Where to Stay",
    seoTitle: "Heyuan Guide: Wanlü Lake, Culture & Stays",
    seoDescription:
      "Plan Heyuan and Wanlü Lake: compare city and lakeside stays, dinosaur museum and Hakka village interests, two-night itineraries and complete transfers.",
    answer:
      "Heyuan (河源) is an inland city in northeastern Guangdong, suited to a slower lake-and-countryside chapter rather than a long list of urban monuments. Wanlü Lake, also written Wanlv Lake (万绿湖), is the tourism name associated with the Xinfengjiang Reservoir, a managed water landscape rather than a natural alpine lake. The city adds Heyuan Dinosaur Museum (河源恐龙博物馆) and Guifeng Tower; a selected Dongyuan village can introduce local Hakka architecture and rural history. These experiences need different addresses and roads. Two nights give one full local day; three can separate the lake from a substantial cultural outing. Choose the actual hotel and main purpose before deciding whether to stay in the city or by the reservoir.",
    stayAnswer:
      "Two nights are a useful starting point for one full lake or cultural day between arrival and departure. Three provide two complete days, allowing a reservoir outing and a museum or village chapter without forcing them together. One night can suit a focused stop with favorable transport. A day visit from another Guangdong city should be judged on the whole return journey and useful time at the destination. Extra nights make sense when the hotel genuinely rewards downtime or a second confirmed interest adds depth, rather than simply adding another lake viewpoint.",
    hotelAnswer:
      "Compare a Yuancheng city hotel for meals, services and museum access with a specifically located Wanlü Lake-area property for its actual setting. A Dongyuan countryside address can mean a different road again. Check the room category, booked view, quiet, bathroom, temperature control, breakfast, luggage access and evening food. Lake views, direct shore access, a boarding point and swimming are four separate questions. A remote-looking photograph does not establish seclusion, good service or a short transfer to the operating visitor pier.",
    sightseeingQuestion: "Should I choose Wanlü Lake, a museum or a Hakka village?",
    sightseeingAnswer:
      "Choose Wanlü Lake for a defined reservoir landscape outing, with the operating pier, boat or shore route specified. Choose the city museum interest for a focused introduction to Heyuan's dinosaur discoveries, particularly when children enjoy fossils and evidence. Choose a named Hakka village when architecture, household organization and rural change are the main questions. A village label does not guarantee occupied interiors or a resident host. With one full day, give one subject priority; with two, combine contrasting experiences and leave space for meals and rest.",
    visitorResources: [
      {
        label: "Heyuan municipal government",
        href: "https://www.heyuan.gov.cn/",
        scope:
          "Municipal background and dated notices, mainly in Chinese. Verify the exact Wanlü visitor operator, pier, shore route, museum opening and village access separately. A regional introduction does not confirm a sailing, particular exhibition, host or hotel service.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and exact station names, then the complete room and visitor transfers. Heyuan East and Heyuan station are different gateways. A fast rail segment excludes terminal access, bags and the final road to a lakeside property.",
      },
    ],
    serviceScope:
      "A proposal should identify the actual room, gateway, complete vehicle and guide time, visitor entrances, admissions, meals and selected public routes. At Wanlü Lake, name the operating pier, sailing format, included stops and boarding requirements. Distinguish a public visitor boat from a private charter or a hotel view; neither is implied by a private car. For museum learning, specify the collection and guide language. For a village, identify publicly accessible buildings and any confirmed resident or specialist appointment. Buying, private home entry and participation in domestic life are optional separate arrangements.",
    routeAdvice:
      "Huizhou adds a different city, mountain or coastal choice; Meizhou develops Hakka house layouts and regional history in greater depth. Choose a genuine reason for each stop and compare the exact addresses, roads and useful nights. Heyuan is not automatically a convenient midpoint for every Guangdong route. No matching published product is recommended here. Send your dates, gateways, interest in lake scenery, fossils or architecture, walking preferences and room expectations for a tailored proposal with one clear purpose per day.",
    practicalPlanning: {
      timing:
        "For a lake day, count the road, check-in, boarding, sailing, any actual island or shore stop, lunch and return. Protect a booked departure from a weather-dependent sailing. A museum visit needs time for the displays the group wants to understand, rather than a quick photograph of the building. Village access or a specialist appointment should be confirmed before routing the day around it. A rainy-day alternative should have verified opening and practical transport.",
      walking:
        "Check the complete path from vehicle to pier, boarding steps or ramps, seating, toilets and the walk at each included stop. Water levels and the vessel used can change the boarding experience. A seated boat trip is not automatically step-free. Village lanes can have uneven paving, thresholds and wet surfaces; Guifeng Tower surroundings and any interior or upper-level visit need separate access checks. Agree a coherent shorter option rather than rely on a general description of an easy outing.",
      cost: "Compare the actual room and meal plan, full vehicle and guide time, named admissions, public boat tickets or a specifically quoted charter, and any confirmed specialist. A lake-view room rate does not necessarily include a cruise or facilities. Check cancellation terms for outdoor activities and what replaces a canceled sailing. A premium proposal should demonstrate room comfort, interpretation, useful timing and dependable support rather than an unexplained luxury label.",
    },
    attractions: [
      "Wanlü Lake / Wanlv Lake / Xinfengjiang Reservoir, through a selected operating visitor route",
      "A named lake pier and any confirmed public boat itinerary, assessed separately from hotel views",
      "Heyuan Dinosaur Museum / 河源恐龙博物馆, with the open collection and entrance confirmed",
      "Guifeng Tower and a selected city-history walk under current access",
      "Sujiawei / 苏家围 in Dongyuan as a selected Hakka village subject, where current public access supports the visit",
      "A regional meal connecting Hakka food traditions with the actual kitchen and ingredients",
    ],
    stays: [
      {
        label: "Day visit or 1 night / a single priority",
        advice:
          "Choose a lake, museum or defined cultural stop around the actual transport window. A brief visit should not claim to complete the reservoir, every village and the city's collections. Review the full return before making a day trip depend on a boat schedule.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Choose the city or a specific lake property to support the main purpose. Keep arrival and departure modest. Add a complementary short subject only if the actual road, opening and energy make it worthwhile.",
      },
      {
        label: "3 nights / two contrasting days",
        advice:
          "Separate reservoir scenery from a museum or selected village. Choose depth rather than two versions of the same lake circuit. One suitable base may be easier than moving rooms; change hotels only when the benefit is clear.",
      },
    ],
    hotelAreas: [
      {
        name: "Yuancheng city / services and museum interests",
        advice:
          "Compare exact hotel addresses for meals, quiet, bathroom, breakfast and pickup. This can suit mixed days and a practical indoor alternative. A station-area room is not automatically convenient for the museum, city walk and chosen lake pier.",
      },
      {
        name: "Wanlü Lake surroundings / a particular reservoir setting",
        advice:
          "Choose by the actual room, view and worthwhile property time. Check the road to the operating pier, evening food, indoor seating and facilities included. A reservoir-facing address does not establish private shore access, a bathing beach, a boat departure or permission to swim.",
      },
      {
        name: "Dongyuan countryside / a specific village-led stay",
        advice:
          "Consider when an actual property supports the chosen cultural route. Assess noise, dampness, temperature control, food and vehicle access. Village visiting and sleeping in a historic residence are different bookings; rural surroundings do not establish heritage authenticity or high-end service.",
      },
    ],
    tradeoffs: [
      {
        title: "A reservoir has a human history as well as a view",
        advice:
          "Wanlü Lake is associated with the Xinfengjiang Reservoir. Islands, shorelines and water levels should be understood within a managed landscape, including its water-supply role. Ask what the selected route actually reveals about the reservoir's creation and use. A tourism name is not permission to swim, fish, launch a craft or enter protected shore areas.",
      },
      {
        title: "Pick the boat route before choosing the photograph",
        advice:
          "Different sailings can offer different stops, time ashore and boarding conditions. Ask what is operating, how much of the outing is seated and what happens in unsuitable weather. A public sightseeing boat, hotel activity and private charter have different terms. A shore-based stay can be worthwhile without a cruise when the actual setting and services justify it.",
      },
      {
        title: "Dinosaur learning begins with evidence",
        advice:
          "Use an identified museum collection to distinguish an egg, a bone, a trace fossil, a cast and a reconstructed skeleton. Ask which objects are original and how their interpretation is supported. Finding eggs does not by itself establish the exact appearance or behavior of the animal that laid them. A fossil display does not imply access to a dig, research laboratory or a handling session.",
      },
      {
        title: "A Hakka village is not one universal building type",
        advice:
          "At a named building in Sujiawei or another confirmed village, look at its plan, shared spaces, materials and present use. Ask which parts are historic fabric and which reflect repair or tourism adaptation. Hakka cultural identity does not mean every residence is a round tulou or a Meizhou-style weilong house. Public lanes and a household invitation are separate forms of access.",
      },
      {
        title: "Rest depends on what the room offers after the outing",
        advice:
          "A lake view can be attractive, but quiet sleep, a good bathroom, climate control, meals and somewhere comfortable in rain determine the stay. Compare those details with a practical city hotel. A short break can lose its value through repeated pier transfers or a remote property whose services do not match the guest's expectations.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "huizhou",
        advice:
          "Huizhou adds a separate choice of West Lake city culture, Luofu Mountain or a coastal property. Choose the actual district and complete connection; the municipality's name alone does not establish an easy transfer from a Heyuan lake hotel. The two lake settings have different histories and visitor arrangements.",
      },
      {
        slug: "meizhou",
        advice:
          "Meizhou offers more detailed Hakka house and regional-history planning. Choose a specific architectural question rather than repeat similar village stops. Compare the actual city or rural bases and full connection; shared Hakka interests do not create one compact sightseeing district.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for shore and village walks, with current rain, heat and holidays checked. Summer needs shade, water and shorter exposed blocks; storms can alter sailing and outdoor access. Cooler dates change the value of room heating and an exposed deck. Reservoir views and water levels vary. Choose a property that works indoors and verify any museum alternative instead of promising sunshine, empty boats or a fixed shoreline appearance.",
    orientation:
      "Heyuan is a large municipality in northeastern Guangdong. Yuancheng provides the main city base; Wanlü Lake and selected Dongyuan countryside visits require their own precise addresses. Wanlü / Wanlv / 万绿湖 and Xinfengjiang Reservoir describe related tourism and infrastructure contexts, not two automatically separate lake excursions. Sujiawei is a specific Dongyuan village interest. Linzhai in Heping and other distant county visits need additional road time; compare a local overnight with returning to Heyuan city.",
    experiences: [
      "Understand Wanlü Lake as a managed reservoir landscape on a clearly specified route",
      "Explore dinosaur evidence through a selected city museum collection",
      "Read a named Hakka house through layout, materials and current use",
    ],
    planningNotes: [
      "Choose the actual lake pier and hotel before fixing the transfer",
      "Distinguish a fossil specimen from a cast or reconstruction",
      "Keep village public access separate from a resident-hosted appointment",
    ],
    arrival:
      "Check dated trains and exact station names, including Heyuan East versus Heyuan, then both terminal and hotel roads. A Shenzhen, Guangzhou or Huizhou rail journey is only one part of the trip. For a direct vehicle approach, compare the full address, breaks, luggage and useful arrival time. Do not make a boat departure or important host appointment depend on an uncertain inbound connection. Protect the complete onward road from the final visitor exit.",
    gettingAround:
      "Use an address-based plan with the selected hotel, pier, museum and village, not a general instruction to tour Heyuan. Clarify waiting time, guide accompaniment, luggage and pickup. Scenic operators control their own boats and internal access. A vehicle and general guide do not automatically provide specialist fossil interpretation, a charter or entry to a private house. Keep each day's route coherent rather than repeatedly crossing between city and countryside.",
    stayStrategy:
      "Two nights suit one main full day; three can separate the reservoir from a substantial cultural subject. Choose city services or a particular lake setting according to the principal purpose and actual room. Check meals, quiet, bathroom, temperature control and what remains useful in rain. A high-end stay needs these details and good interpretation; it does not require a remote label, an expensive boat or a promise of private cultural access.",
    firstTimerNote:
      "Ask what you will do at the lake, not just whether the itinerary includes it. Then ask what a museum or village adds that is different. A well-explained fossil, a particular house plan and a relaxed reservoir outing can create a varied stay. They need useful time and clear arrangements rather than every available attraction squeezed into the hours between two trains.",
    faqs: [
      {
        question: "Is Heyuan worth visiting on a Guangdong trip?",
        answer:
          "It can suit travelers who want reservoir scenery, a specific dinosaur-museum interest or a thoughtful Hakka village chapter. Choose it for those interests and a suitable room, rather than assume it is an essential stop on every Guangdong itinerary.",
      },
      {
        question: "Is Wanlü Lake the same as Wanlv Lake?",
        answer:
          "Yes, Wanlü and Wanlv are common Latin-script forms of 万绿湖. The destination is associated with the Xinfengjiang Reservoir near Heyuan. Use the full Chinese pier and hotel names to identify the actual booked places.",
      },
      {
        question: "How many nights should I spend in Heyuan?",
        answer:
          "Two nights give one full local day; three allow separate lake and cultural days. One night or a day visit needs a selective plan and favorable transport. More time should add depth or worthwhile rest rather than repeated lake viewpoints.",
      },
      {
        question: "Should I stay in Heyuan city or by Wanlü Lake?",
        answer:
          "Choose city services for mixed outings or a specific lake property when its actual room and setting justify the stay. Compare quiet, bathroom, meals, pier access and full roads. A lake view does not automatically include a boat trip or direct shore access.",
      },
      {
        question: "Can I swim in Wanlü Lake?",
        answer:
          "Do not assume so. The reservoir has managed uses and access rules. A lake-view hotel or sightseeing ticket does not establish an authorized swimming location. Confirm any actual supervised swimming facility separately; a hotel pool is a different facility.",
      },
      {
        question: "Can children see dinosaur fossils in Heyuan?",
        answer:
          "A selected city museum visit can provide that interest when the actual institution, open displays and guide language are confirmed. Explain original specimens, casts and reconstructions clearly. Exhibition access does not include excavation, handling or a research visit.",
      },
      {
        question: "Which published Heyuan tour is recommended?",
        answer:
          "No matching published product is recommended here. Request a tailored proposal specifying the room, full transport, selected lake route, cultural visits, meals and any confirmed specialist. The sample outline is not a package or a promise of sailings and household invitations.",
      },
    ],
    culturalStory: {
      title: "Three ways to ask how a place took shape",
      paragraphs: [
        "A reservoir, a fossil and a house each reward a different kind of attention. At Wanlü Lake, ask how the water landscape was created and how it is managed today. In a dinosaur collection, ask what is actually preserved and which conclusions follow from it. An egg or bone offers evidence, while a life-size model translates an interpretation into a form visitors can imagine. A good explanation identifies that difference. Families can use it as a simple question throughout the visit: what are we looking at, and how do we know?",
        "A selected Hakka building brings the inquiry into lived history. Its entrances, communal areas, walls and additions can reveal how households organized space and how use changed over time. The interpretation should refer to the actual building and reliable local information rather than assign one architectural label to every village. A restored façade, an occupied house and a tourism exhibition are different encounters. An informative public visit need not include a private home, staged family gathering or an unconfirmed resident host.",
      ],
    },
    foodStory: {
      title: "Understand the preparation before choosing the signature dish",
      paragraphs: [
        "A Hakka-influenced meal might include stuffed tofu, a chicken preparation, preserved vegetables and seasonal greens, depending on the actual kitchen. Stuffed tofu makes a useful starting point: ask what fills it, how it is cooked and what the sauce contributes. The answer can explain more than a menu translation. Meat fillings and stocks are common possibilities, so a tofu dish is not automatically vegetarian. Balance the table rather than order several rich dishes merely because each is promoted as a specialty.",
        "At a reservoir restaurant, a lake-fish label does not by itself prove where a fish was caught or whether wild capture is permitted. Ask about the actual species, preparation, portion or weight basis and any additional cooking charge before ordering. Confirm bones and children's needs. Soy, wheat-containing sauces, peanuts, sesame and shared preparation matter for dietary requirements. A dependable lunch, drinking water and a comfortable dinner are especially useful on a day built around boating or village roads.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the right base",
        description:
          "Complete the actual gateway road and check the booked room. Keep the first meal or walk modest. Review the current pier, sailing conditions and cultural opening arrangements rather than putting an essential boat trip on an uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "Choose a clearly defined reservoir outing",
        description:
          "Use the selected Wanlü Lake public route, with any sailing and stops confirmed. Keep time for the landscape's human history, lunch and rest. A shore-based alternative should be genuinely worthwhile if weather changes the boat plan.",
      },
      {
        day: "Optional full day 2 / three-night stay",
        title: "Add a different kind of evidence",
        description:
          "Choose the identified dinosaur collection or a confirmed village chapter according to the group's interests. If both are proposed, check full roads and useful visiting time. Distinguish original objects from reconstruction and public access from a household appointment.",
      },
      {
        day: "Departure",
        title: "Keep the onward connection comfortable",
        description:
          "Allow breakfast, bags and the full station or next-hotel road. Continue to a chosen Huizhou or Meizhou base only when its own purpose and nights work. This outline is illustrative, not a published package or guarantee of vessels, hosts or current operation.",
      },
    ],
  },
};
