import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/shengsi.svg",
  alt: "Original Shengsi planning schematic separating Sijiao, Shengshan and Gouqi island bases and the complete ferry connection; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const shengsiGuide: ExpandedDestination = {
  id: "shengsi",
  name: "Shengsi Islands",
  region: "east",
  kicker: "Fishing-island scenery and a sea escape with the right base",
  description:
    "Plan the Shengsi Islands with Sijiao and Shengshan–Gouqi compared, realistic ferry connections, specific hotel advice and useful alternatives when sea conditions change.",
  stay: "3 nights on one island base; longer for a justified change",
  bestFor: "Coastal walks, fishing-island landscapes and a slower Shanghai extension",
  interests: ["landscape", "food"],
  relatedDestinationIds: ["shanghai", "ningbo", "hangzhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Shengsi Islands Guide: Ferries, Hotels & Island Choice",
    seoTitle: "Shengsi Islands Guide: Ferries & Where to Stay",
    seoDescription:
      "Choose Sijiao or Shengshan–Gouqi in the Shengsi Islands. Plan ferry gateways, three-night stays, coastal walks, seafood, hotel locations and weather alternatives.",
    answer:
      "The Shengsi Islands (嵊泗列岛) are an island group in northern Zhejiang's Zhoushan area, often considered for a sea escape after Shanghai. Shengsi is a county of islands, not one beach or one ferry pier. Sijiao is a practical first-visit base; Shengshan and Gouqi offer a different outer-island stay and are linked to each other by a bridge. They are not joined by road to Sijiao. Choose the island and the actual room before selecting the sailing. Three nights on one base give two full days for coastal scenery, meals and rest, but sailings remain dependent on current operation and sea conditions. This is an island holiday, not a guaranteed tropical beach break.",
    stayAnswer:
      "Allow three nights on one base for two complete days with a coastal route, local meals and time to enjoy the room. Two nights can suit one focused full day when both sailings work, but leave little flexibility. One night often gives disproportionate time to roads, piers and packing. Four or more nights can support a quieter pace or a justified second island, counting the complete transfer rather than treating island-hopping as free time. Extra nights do not guarantee a return sailing in rough conditions; protect onward commitments separately.",
    hotelAnswer:
      "On Sijiao, compare Caiyuan town for practical services with a specific Jihu, Nanchangtu or eastern coastal-village property for the beach or scenery you actually want. On Shengshan or Gouqi, assess the exact village, pier road, room and walking access. A sea-view label can mean a steep uphill approach, exposure to wind or a working harbor rather than a beach outside the door. Check quiet, humidity control, hot water, bathroom, meals, luggage and what remains enjoyable in rain. A stylish small property does not automatically provide resort facilities or English-speaking service.",
    sightseeingQuestion: "Should I choose Sijiao or Shengshan and Gouqi?",
    sightseeingAnswer:
      "Choose Sijiao for a selective mix of town services, Jihu or Nanchangtu beach time and an eastern coastal route such as Liujingtan or Heshangtao when open. Choose Shengshan–Gouqi for an outer-island stay built around fishing landscapes, coastal viewpoints and a specific room. Houtouwan, the former village known for vegetation-covered buildings, is on Shengshan and needs its own current visitor arrangement; it is not a short walk from every Shengsi hotel. With a short stay, one well-chosen base is usually more rewarding than changing islands simply to collect photographs.",
    visitorResources: [
      {
        label: "Shengsi county government",
        href: "https://www.shengsi.gov.cn/",
        scope:
          "Local context and dated public notices, primarily in Chinese. Verify actual island, pier, public route, beach operation and current visitor arrangements with the responsible operators. A county tourism description does not confirm a particular sailing, room, swimming service or fishing activity.",
      },
      {
        label: "Zhoushan municipal government",
        href: "https://www.zhoushan.gov.cn/",
        scope:
          "Wider island-region information and notices. Shengsi, Zhoushan's main urban islands and Putuoshan are different travel areas. A regional promotion does not establish a direct ferry between every destination or a single combined ticket.",
      },
      {
        label: "Zhejiang Department of Transport",
        href: "https://jtyst.zj.gov.cn/",
        scope:
          "Provincial transport context and dated notices. Confirm the actual passenger sailing, booking and identity requirements, weather decisions and collection instructions with the authorized service. A notice or timetable reference does not guarantee operation on the travel date.",
      },
    ],
    serviceScope:
      "A proposal should name the island, hotel and room, mainland departure pier, island arrival pier, road legs, actual passenger service, guiding, meals and public visits. Explain passport booking, check-in and luggage arrangements for the actual travelers. A private mainland transfer is not a private ferry and does not bypass port controls. Separate beach admission, supervised swimming, boats, fishing-related activities and any additional pier transfers. Agree how a canceled sailing affects rooms and onward transport, and provide a workable mainland alternative before the journey starts.",
    routeAdvice:
      "Shanghai can supply a contrasting city chapter and a mainland staging night. A plan may use a road connection to Shenjiawan followed by a suitable sailing, but the actual service and island destination must be established. Ningbo and Hangzhou need their own complete road or rail-to-pier assessment; they are not interchangeable nearby ferry gates. Do not schedule an essential island return immediately before an international flight. No matching published Shengsi tour is recommended here. Share dates, actual mainland base, island interests, sea-travel comfort and room priorities to develop a tailored route.",
    practicalPlanning: {
      timing:
        "Build the day from the actual check-in deadline and pier, including the mainland road, ticket collection or identity checks, boarding and island hotel transfer. A sailing duration alone is not the travel time. Confirm current booking release and changes rather than use an old timetable. Keep a meaningful mainland interval before an inflexible flight or event, recognizing that severe conditions may require a larger change. A canceled return is not solved merely by booking a faster car on land.",
      walking:
        "Assess gangways, luggage, boat motion and the exact room approach. A village room can sit above a steep lane or stairs even when the promotional photograph shows a flat sea horizon. Coastal viewpoints may involve exposed paths, steps and slippery rock; tides and waves change the shoreline. Use marked public routes and current instructions. Beaches are not automatically supervised swimming areas. Agree an appropriate route, seats, toilets and an alternative for guests who prefer less exposure or uneven walking.",
      cost: "Compare the actual room and meals, full mainland road, passenger service, island transfers, guiding, public admissions and any specific activity. Account for luggage handling and early or late pickup where applicable. A sea-view upgrade, pool access, seafood dinner and private boat are separate choices. Clarify cancellation and disruption terms for each service rather than assume one booking covers the whole chain. A premium should improve sleep, location and coordination, not imply guaranteed sailings, empty beaches or private access to every shore.",
    },
    attractions: [
      "A selected Sijiao beach visit at Jihu or Nanchangtu under current public conditions",
      "Liujingtan or Heshangtao coastal scenery through an actually open visitor route",
      "A Shengshan–Gouqi stay with defined fishing-landscape and viewpoint interests",
      "Houtouwan's current public visitor area on Shengshan, with entry arrangements confirmed",
      "A working-harbor view from a permitted public location, respecting local activity",
      "A seafood meal and settled room with time to enjoy the island pace",
    ],
    stays: [
      {
        label: "2 nights / one full island day",
        advice:
          "Choose one base and one principal coastal subject, with useful meals and rest. Actual sailings must support the stay. Avoid changing islands or promising a full scenic circuit between uncertain arrival and departure windows.",
      },
      {
        label: "3 nights / two full days on one base",
        advice:
          "Combine a suitable coastal walk with another beach, village or hotel day. Choose the sequence around conditions rather than force the same route in poor weather. The room and dining should make the stay worthwhile even when an outdoor plan changes.",
      },
      {
        label: "4 nights or more / depth or a justified second base",
        advice:
          "Stay longer for a genuine slow holiday or add another island only when its scenery and room justify the transfer. Research the actual connection instead of assume a convenient daily hop. Retain a separate strategy for disruption and fixed mainland commitments.",
      },
    ],
    hotelAreas: [
      {
        name: "Caiyuan on Sijiao / town services",
        advice:
          "Consider for meals, shops and a practical island base. Compare the exact road to the arrival pier and chosen coast. A town hotel is not automatically beachfront, but may provide more useful services than a remote room when weather changes.",
      },
      {
        name: "Jihu or Nanchangtu area / a specific beach purpose",
        advice:
          "Choose the exact room for access to the beach you intend to use. Confirm public entry, operation, swimming conditions, noise and dinner. A nearby beach does not establish private sand, tropical water color, lifeguards or year-round swimming.",
      },
      {
        name: "Eastern Sijiao villages / scenery and smaller properties",
        advice:
          "Assess the actual village, viewpoint route, meals and room approach. Check hills, luggage, after-dark transport, humidity and weather exposure. A quiet-looking image does not establish isolation from traffic, neighbors or restaurant noise.",
      },
      {
        name: "Shengshan or Gouqi / a different outer-island stay",
        advice:
          "Book by precise island, village and pier road. The bridge links these two islands, but does not place every viewpoint or Houtouwan beside the room. Check stairs, dining, sleep and current services. Do not use a Gouqi booking as though it were a room on Sijiao.",
      },
    ],
    tradeoffs: [
      {
        title: "Pick the island before the attractive room",
        advice:
          "A room on the wrong island can make the arrival, return and daily visits needlessly difficult. Confirm the island and full Chinese address, then work backward through the arrival pier and sailing. A shared Shengsi search label is not evidence that two properties share the same ferry.",
      },
      {
        title: "A three-night stay is not a sailing guarantee",
        advice:
          "Extra time creates a better holiday and more scheduling choices, but high winds, rough seas or other operational conditions can interrupt service beyond a single day. Decide who checks updates, how changes are communicated and what happens to the next room or flight. Protect fixed commitments on the mainland rather than rely on an assumed last boat.",
      },
      {
        title: "Choose this coast for its real landscape",
        advice:
          "Fishing boats, headlands, village slopes and a changing sea are stronger reasons to visit than an expectation of permanent turquoise water. Water color, visibility and beach conditions vary with weather and local conditions. A worthwhile coastal walk and good room should retain value when the sea does not resemble a promotional image.",
      },
      {
        title: "Houtouwan is a managed visitor subject, not permission to enter ruins",
        advice:
          "The vegetation-covered former village is a specific Shengshan interest. Confirm the public route and current entry arrangement, stay out of restricted or unstable buildings and respect anyone working or living nearby. A familiar photograph does not establish unrestricted access or a private photography session.",
      },
      {
        title: "Fishing scenery and a fishing excursion are different offers",
        advice:
          "Watching a harbor from a public area can explain island livelihoods without boarding a working vessel. An actual boat activity requires an authorized operator, suitable conditions, safety provision and clear passenger and language arrangements. Do not promise access to active aquaculture sites or make a guest outing depend on an unconfirmed working boat.",
      },
      {
        title: "A small sea-view hotel needs practical comfort as well as design",
        advice:
          "Check sound, damp, temperature, hot water, bathroom, bedding and the real view from the booked category. Ask what guests can do indoors and where they eat if rain limits walking. Good coordination and a suitable room provide more reliable value than an unsupported luxury-island label.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "shanghai",
        advice:
          "Shanghai adds architecture, neighborhoods and an international gateway. Allow the complete road-to-pier, sailing and island transfer, with a separate return strategy before fixed flights. Existing Shanghai tours do not automatically include Shengsi ferries, rooms or guiding.",
      },
      {
        slug: "ningbo",
        advice:
          "Ningbo provides library culture, architecture and a different coastal-region food chapter. Research the actual mainland-to-island connection for the selected Shengsi base; Ningbo, Putuoshan and Shengsi are not one ferry hub. Do not infer a direct sailing simply from their place in a Zhejiang route.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake and selected tea or city interests. Count its whole onward road or rail connection to the correct ferry, and keep a real mainland stay after the island if needed. A map line between Zhejiang destinations does not establish a convenient same-day boat and flight sequence.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring, summer and early autumn are useful starting points for an outdoor sea escape, but wind, rain, heat, fog and storms can change the trip. Warmer months do not guarantee safe swimming or operating boats; summer and early autumn plans need particular attention to severe-weather notices. Winter is a different coastal stay with fewer daylight hours and potentially reduced services. Choose the date around the actual sailing, room and desired experience rather than a generic beach season.",
    orientation:
      "Shengsi is a county of islands in the northern Zhoushan archipelago. Sijiao, with Caiyuan and its beach and coastal-village areas, is one principal base. Shengshan and Gouqi form another paired island choice linked by a bridge. Shengsi county is not the same destination as Zhoushan's principal urban islands or Putuoshan. Choose the island before the hotel, then check the dated ferry connection; moving between island groups can use much of a day. Use the exact island, pier and hotel address at every booking stage.",
    experiences: [
      "Follow an open coastal route for headlands, village slopes and changing sea views",
      "Understand fishing-island life from appropriate public spaces and a thoughtful meal",
      "Enjoy an actual sea-view room with time to slow down between outdoor visits",
    ],
    planningNotes: [
      "Choose Sijiao or Shengshan–Gouqi before booking rooms and sailings",
      "Count roads, pier check-in, the crossing and the final hotel approach",
      "Protect mainland commitments and agree a useful disruption plan",
    ],
    arrival:
      "Build the actual journey from the mainland hotel to the correct pier, then the ticketed island arrival and final road to the room. A Shanghai plan may involve Shenjiawan; verify the specific service rather than assume every island departure uses the same port. Establish current passport booking and check-in instructions, luggage and seasickness needs. A separately arranged vehicle does not guarantee that a passenger sailing carries cars. Recheck operation before leaving the mainland, not only when buying the ticket.",
    gettingAround:
      "Island taxis, arranged vehicles and public services need confirmation for the actual island and hours. A private mainland car is not automatically available after the crossing. Group visits around the room, with time for hills, steps and meals. The Shengshan–Gouqi bridge is a local connection, while movement to Sijiao requires an actual sea service. Do not improvise boat trips, enter working harbor areas or take exposed shore paths against current instructions.",
    stayStrategy:
      "Choose one good base for three nights before adding another island. A premium brief should prioritize the actual room, quiet, dry indoor comfort, meals, luggage and a workable weather plan. Families need safe public routes and specific swimming supervision where relevant; photographers need appropriate locations without promises of private access or perfect light. A successful island stay feels unhurried even when a viewpoint is unsuitable, rather than depend on completing every outdoor photograph.",
    firstTimerNote:
      "Read the island name on the hotel and ferry, not just the word Shengsi. A beautiful Gouqi room and a Sijiao sailing do not describe the same arrival. Once the correct base is chosen, give it useful time and keep the return independent of a tight international departure. That practical decision matters more than adding another island name to the itinerary.",
    faqs: [
      {
        question: "Are the Shengsi Islands worth visiting after Shanghai?",
        answer:
          "They can be for coastal scenery, fishing-island landscapes and a slower stay. Choose one good base and allow the full ferry journey. If the main goal is guaranteed tropical beach conditions or a tightly timed return flight, assess a different kind of extension.",
      },
      {
        question: "Should I stay on Sijiao or Gouqi Island?",
        answer:
          "Sijiao can suit a first visit combining town services, beaches and selected coastal routes. Shengshan–Gouqi is a different outer-island stay with its own room and ferry choices. Compare the actual interests, pier and property rather than treat the islands as interchangeable.",
      },
      {
        question: "How many nights should I spend in Shengsi?",
        answer:
          "Three nights on one base give two full days. Two can work for a selective stay when sailings align; one often gives too much time to transport. Extra nights improve the holiday but do not guarantee operation in rough conditions.",
      },
      {
        question: "Can I take a day trip to Shengsi from Shanghai?",
        answer:
          "Assess the actual dated sailing and complete road, check-in and island transfers before considering it. A short stay usually gives more useful time and less pressure. Do not assume a Shanghai departure leaves a full island day or that the last return can support a fixed flight.",
      },
      {
        question: "Is Houtouwan on Gouqi or Sijiao?",
        answer:
          "Houtouwan is on Shengshan, which is linked by a bridge to Gouqi. It is not on Sijiao. Confirm the current public visitor route and complete transfer; the well-known images do not establish unrestricted entry to buildings.",
      },
      {
        question: "What happens if a Shengsi ferry is canceled?",
        answer:
          "Follow the actual operator's instructions and the agreed disruption plan. Rooms, road transfers and onward tickets may have different change terms. Reassess the whole journey rather than assume another sailing or a private boat will be available, especially before fixed mainland commitments.",
      },
      {
        question: "Can I swim at every Shengsi beach?",
        answer:
          "No. Check the specific beach, current conditions, permitted area and actual supervision. A sandy shore or a nearby hotel does not establish safe or year-round swimming. Follow local instructions and keep coastal sightseeing separate from a confirmed swimming plan.",
      },
    ],
    culturalStory: {
      title: "Look at an island that works as well as welcomes visitors",
      paragraphs: [
        "Fishing boats, harbor infrastructure and aquaculture landscapes help explain the islands beyond a sea-view photograph. Ask how the particular place works and what can be observed from public areas. A village street and a working pier have different rules and purposes. The most useful interpretation connects the landscape with livelihoods without pretending every boat or household is available for a guest encounter.",
        "Tourism has also changed how some villages are used and presented. A vegetation-covered former settlement, a contemporary small hotel and an active harbor belong to different stories. Explain that difference, respect private and restricted spaces and avoid turning every quiet corner into an abandoned-world claim. A meaningful visit can be an informed walk and meal rather than a staged fishing performance or unauthorized entry.",
      ],
    },
    foodStory: {
      title: "Order seafood by the actual catch and kitchen",
      paragraphs: [
        "Ask what is available that day, how it is prepared and how portions are priced before ordering. Steaming, braising and other preparations offer different ways to enjoy seafood; an elaborate banquet is not essential. Mussel farming is part of the Gouqi-area landscape, but a view of farms does not mean a particular restaurant's shellfish came from the site you saw or that guests can enter production areas.",
        "Check shellfish, fish, stocks, soy, wheat and shared preparation as relevant. A seafood-focused kitchen may have limited capacity for a serious allergy, vegetarian diet, coeliac requirement or halal need. Confirm the actual restaurant and an alternative, including dinner near a remote room. A coastal setting is not evidence that raw seafood is suitable, and a restaurant's proximity to the water does not establish handling quality.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night",
        title: "Complete the whole crossing",
        description:
          "Follow current operator instructions through the mainland road, pier check-in and correct sailing. Reach the actual island room, eat and settle. Keep essential viewpoints away from uncertain arrival; a modest local orientation is enough if useful time remains.",
      },
      {
        day: "Full day 1",
        title: "Choose a coastal subject for this base",
        description:
          "On Sijiao, choose an open headland or beach route. On Shengshan–Gouqi, choose a defined viewpoint or Houtouwan public visit if operating. Allow steps, weather, lunch and rest. These are alternative base-specific examples, not a promise to visit all islands in a day.",
      },
      {
        day: "Full day 2",
        title: "Keep the island pace",
        description:
          "Add a suitable village walk, a different shore or useful hotel time. Swimming or a boat activity requires separate confirmation. Adjust to current conditions, and review the return before the evening rather than let the entire stay depend on one unverified departure assumption.",
      },
      {
        day: "Departure / mainland interval",
        title: "Protect the onward journey",
        description:
          "Allow the island road, pier, actual crossing and full mainland transfer. Retain an appropriate mainland interval before fixed commitments. This outline is illustrative, not a published package or a guarantee of sailings, rooms, sea conditions, swimming, private boats or current activities.",
      },
    ],
  },
};
