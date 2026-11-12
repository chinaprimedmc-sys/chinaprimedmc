import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/fanjing-mountain.svg",
  alt: "Original Fanjingshan planning schematic comparing an eastern Jiangkou approach, remaining summit stairs and Jiangkou-town or mountain-foot rooms; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const fanjingMountainGuide: ExpandedDestination = {
  id: "fanjing-mountain",
  name: "Fanjing Mountain",
  region: "southwest",
  kicker: "A forest mountain whose value reaches beyond the summit photograph",
  description:
    "Plan Fanjingshan with clear advice on the Jiangkou approach, cableway and remaining stairs, summit choices, nearby rooms and a realistic eastern Guizhou route.",
  stay: "2–3 nights for a considered mountain visit",
  bestFor: "Mountain forest, Buddhist landscape and walking matched to your ability",
  interests: ["landscape", "heritage"],
  relatedDestinationIds: ["tongren", "guiyang", "zhenyuan", "zhaoxing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Fanjingshan Travel Guide: Routes & Stays",
    seoTitle: "Fanjingshan Guide: Routes, Steps & Hotels",
    seoDescription:
      "Plan Fanjingshan with Jiangkou hotel choices, cableway and summit-step advice, east versus west approaches and a two- or three-night Guizhou itinerary.",
    answer:
      "Fanjingshan (梵净山), also called Fanjing Mountain or Mount Fanjing, is a forested mountain landscape in the Tongren area of northeastern Guizhou. It combines exceptional natural heritage with Buddhist associations, but the UNESCO inscription is for its natural value rather than a designation for every temple. For most first visits, begin by assessing the eastern Jiangkou (江口) approach and its current visitor transport. The cableway does not deliver guests directly onto the famous summit bridge: substantial walking and steep summit steps can remain. Two nights give one full mountain day; three can provide a less compressed stay with another worthwhile local subject. A successful visit need not include every summit.",
    stayAnswer:
      "Allow two nights for arrival, a full mountain day and departure when the complete gateway transfers work. Three nights add a separate local interest or a slower pace, and may provide some scope to adjust the mountain day if tickets and bookings allow. An extra night does not guarantee that a ticket can be moved or that the summits will open. One night is demanding unless the actual arrival, room, entry and onward journey leave enough time. Avoid planning a long-distance same-day return simply because the map shows a cableway.",
    hotelAnswer:
      "Compare a specific property near the eastern mountain-foot approach when reducing the entry-day road matters. Jiangkou town offers a different balance of restaurants, services and the full drive to the entrance. A Tongren city or railway-gateway room is a separate connection choice, not automatically a convenient mountain base. Ask about quiet, temperature control, hot water, bathroom, early breakfast, dinner and vehicle pickup. A boutique or luxury label near Fanjingshan does not establish resort facilities, step-free access or a room inside the protected mountain.",
    sightseeingQuestion: "Do you need to climb Red Cloud Golden Summit to enjoy Fanjingshan?",
    sightseeingAnswer:
      "No. The wider mountain setting, forest and rock forms can justify a visit without the steep final summit route, provided the selected open paths suit your ability. Red Cloud Golden Summit (红云金顶), Old Golden Summit (老金顶) and Mushroom Stone (蘑菇石) are distinct features, not one effortless viewing platform. The famous upper route includes steep, narrow sections and exposure; queues and weather can add difficulty. Agree what you will do and how you return if you omit it. Do not assume you can wait comfortably at any point or leave a regulated route wherever you choose.",
    visitorResources: [
      {
        label: "UNESCO: Fanjingshan",
        href: "https://whc.unesco.org/en/list/1559/",
        scope:
          "Natural World Heritage context for the defined property's biodiversity and ecological importance. The listing does not confirm current routes, summit access, cableway operation, ticket availability or unrestricted wildlife observation.",
      },
      {
        label: "Tongren municipal government",
        href: "https://www.trs.gov.cn/",
        scope:
          "Regional background and public notices. Obtain date-specific scenic-entry, identity-document, weather and transport instructions from the actual authorized visitor operation before booking.",
      },
      {
        label: "China Railway 12306",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated train services and the exact station. Tongren and Tongren South are different gateways; compare the complete transfer to the booked room and mountain entrance rather than the train time alone.",
      },
    ],
    serviceScope:
      "A useful Fanjingshan proposal should state the actual entrance, dated entry arrangements for your passport, scenic transport, cableway if selected, remaining paths, room and road transfers. Explain your comfort with steep descents, narrow steps and heights before the route is fixed. A guide can help interpret the landscape and manage the agreed visit, but cannot override closures or make a public summit private. A specialist naturalist, hosted village visit or religious encounter requires a separate confirmed arrangement and appropriate permissions.",
    routeAdvice:
      "Guiyang can introduce Guizhou through collections and regional food before a separate mountain stay. Zhenyuan offers river-town evenings and a different cultural landscape, with the complete road or rail sequence assessed. Zhaoxing adds a Dong architectural and living-community subject through a longer regional connection that deserves its own useful nights. There is no matching published Fanjingshan product recommended here. Share dates, gateways, walking ability and room expectations for a tailored plan that makes the mountain worthwhile even if the most photographed summit is unsuitable or closed.",
    practicalPlanning: {
      timing:
        "Give the mountain its own full day, including the room-to-entrance road, entry checks, visitor transport, cableway queues, walking, food and descent. Fix a conservative return plan against the actual operating times. A hotel near the entrance can simplify the morning but does not remove public entry limits. Keep a fixed train or flight separate from an ambitious summit day, and confirm what can be changed if weather disrupts the main visit.",
      walking:
        "Assess the exact route after the cableway, including sustained steps, descent, narrow sections and exposure. Wet stone, wind, fog and crowding can change how difficult it feels. Some mountain routes rise above 2,000 meters; distinguish the highest point visited from the altitude of the room. Guests with knee, balance or height concerns need a worthwhile assessed alternative before booking. A cableway reduces a stage of ascent; it is not a step-free mountain tour.",
      cost: "Compare the named entrance and tickets, required scenic transport, cableway directions, full guide and vehicle hours, actual room and meals. Confirm whether admission and transport reservations are separate, how your travel document is handled and what happens if operation changes. A premium quote should improve room comfort, clear interpretation and time use; it should not promise priority over public queues, guaranteed summit access or private protected-area routes.",
    },
    attractions: [
      "A selected permitted Fanjingshan / 梵净山 forest-and-mountain route",
      "Mushroom Stone / 蘑菇石, when the open route and walking suit the group",
      "Red Cloud Golden Summit / 红云金顶, only after assessment of steps, exposure and current access",
      "Old Golden Summit / 老金顶 as a separate route choice rather than an automatic extra",
      "Buddhist cultural interpretation at the actual accessible religious sites",
      "A separately agreed public village or local cultural visit near the selected base",
    ],
    stays: [
      {
        label: "1 night / only with a workable complete journey",
        advice:
          "Assess the actual arrival and onward timing carefully. A brief overnight is not a reason to promise a summit before a fixed departure. Consider adding a night or choosing a different stop when it would force an early start after a long journey and an inflexible return.",
      },
      {
        label: "2 nights / one full mountain day",
        advice:
          "Use arrival for the complete road and rest, preserve a full day for the selected mountain route, and depart separately. Choose the entrance, room and required bookings together. The goal is a good day outdoors, not compulsory completion of both summit routes.",
      },
      {
        label: "3 nights / another distinct day or a slower pace",
        advice:
          "Add a worthwhile confirmed local subject, time at the property or some potential to reorder the mountain day. Ticket validity and availability may limit weather flexibility. Do not sell a spare night as a guarantee of a clear view or an unrestricted second attempt.",
      },
    ],
    hotelAreas: [
      {
        name: "Eastern Jiangkou mountain-foot approach",
        advice:
          "A useful starting point for a first visit using that entrance. Check the exact entrance road, vehicle meeting point, early breakfast and room comfort. Near Fanjingshan can cover very different distances; a photogenic guesthouse may have stairs, damp rooms or limited dinner choices that matter after walking.",
      },
      {
        name: "Jiangkou town: services and a separate morning transfer",
        advice:
          "Compare for restaurants and an actual property that meets the group's needs. Calculate the full entry-day drive and return, and ask whether breakfast fits the booked arrival window. Do not assume town accommodation and an entrance-area room produce the same daily schedule.",
      },
      {
        name: "Tongren or the actual rail gateway: a connection brief",
        advice:
          "Useful only when a dated arrival or departure justifies the room. Tongren and Tongren South stations are separate places. A station hotel can ease a rail connection while adding road time to the mountain; compare the whole stay rather than choose on the ticket's city name.",
      },
    ],
    tradeoffs: [
      {
        title: "The eastern and western approaches are different bookings",
        advice:
          "The Jiangkou eastern approach and Yinjiang / 印江西部 approach should not be treated as interchangeable gates. Compare the actual open trail, ascent, visitor transport, cableway availability and return to the vehicle. Do not assume facilities at one entrance exist at the other or that a cross-mountain route is permitted and practical for the booked day.",
      },
      {
        title: "A summit photograph is not a measure of a successful visit",
        advice:
          "The mountain's broader forest, geology and setting deserve attention. Red Cloud Golden Summit may be unsuitable for someone uncomfortable with narrow steep steps, or unavailable in the actual conditions. Choose a clear alternative that has real value and a workable return, rather than promise the famous bridge to every traveler.",
      },
      {
        title: "Natural heritage does not mean guaranteed wildlife",
        advice:
          "The property's biodiversity is a reason for conservation and thoughtful interpretation, not a promise of seeing Guizhou snub-nosed monkeys on a normal visitor path. A wild observation, managed animal setting and exhibition are different experiences. Stay on permitted routes and do not approach or feed wildlife.",
      },
      {
        title: "Village culture is a separate, specific visit",
        advice:
          "A public village walk can complement the mountain when its history, present life and actual route are explained. It is not automatically a private home visit, a ceremony or a performance. Identify the place, topic, consent and interpreter rather than use a generic minority-culture label as an included luxury experience.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "tongren",
        advice:
          "Tongren city can add a Jinjiang river evening and selected Zhongnanmen visit when actual arrival hours and interests justify it. Compare that room with continuing directly to Jiangkou for the mountain. Tongren and Tongren South stations are different gateways, and a city overnight should not be counted as a full Fanjingshan day.",
      },
      {
        slug: "guiyang",
        advice:
          "Guiyang can provide provincial collections, regional food and an arrival or departure chapter. Compare the actual train and gateway roads before fixing the mountain hotel. Sharing a province does not make Fanjingshan a short outing from a central Guiyang room.",
      },
      {
        slug: "zhenyuan",
        advice:
          "Zhenyuan adds river-town history and useful evenings after a mountain stay. Compare the complete road or rail sequence, the actual room and Qinglongdong's separate steps. A restful river-view stay should not be filled automatically with another strenuous climb after the summit day.",
      },
      {
        slug: "zhaoxing",
        advice:
          "Zhaoxing adds Dong architecture and living-community context, with its own village and terrace choices. Assess the substantial full regional connection and allow proper local nights. A through train or a broad Guizhou circuit is not evidence that the two places fit into one sightseeing day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring through autumn is a useful starting window for a mountain visit, with rainfall, mist and temperature changing with elevation. Summer can be busy and wet; autumn does not guarantee clear summit views. Winter requires careful assessment of cold, ice, road and scenic operations. Check the Chinese holiday calendar and current forecast, but do not treat any month as a promise of an open upper route or the exact light in a promotional photograph.",
    orientation:
      "Fanjingshan is in the Tongren region of Guizhou, not Tongren / 同仁 in Qinghai. Jiangkou provides the eastern approach and a common accommodation base; Yinjiang is a different western approach with its own route and transport. Tongren city, Tongren South station and Tongren Fenghuang Airport are separate gateways. Write the entrance and hotel addresses into the itinerary, and assess the route after the cableway rather than letting the mountain name stand for a complete day's plan.",
    experiences: [
      "Read the mountain forest and changing vegetation on a permitted route matched to your actual walking ability",
      "Choose Mushroom Stone and any summit section individually, with steep steps and exposure assessed before booking",
      "Understand the relationship between natural heritage and Buddhist cultural associations without treating either as unrestricted access",
    ],
    planningNotes: [
      "Confirm the eastern or western entrance and the facilities actually serving that route",
      "Assess the remaining paths and descent after the cableway; the famous upper summit route is not compulsory",
      "Choose the room, passport-entry arrangements and complete gateway transfer together, with a realistic weather alternative",
    ],
    arrival:
      "Compare the dated train to the actual Tongren or Tongren South station, an operating flight to Tongren Fenghuang Airport, or an agreed road connection using total room-to-room time. The two stations are not interchangeable. Add luggage, meals and the final road to Jiangkou or the booked entrance-area room. Keep arrival separate from an essential timed mountain entry unless the entire sequence leaves a reliable margin.",
    gettingAround:
      "A private vehicle connects the actual gateway, room and permitted scenic entrance. Inside the mountain, current scenic transport and cableway arrangements may replace the private car. Identify where the driver waits, the guide's walking route, the final return and the treatment of luggage if the journey ends elsewhere. A private booking does not authorize closed trails, research habitat or vehicle access beyond the normal permitted road.",
    stayStrategy:
      "Two nights protect a full mountain day. Three should add a worthwhile local subject, a restful property stay or realistic scheduling flexibility rather than a promise to control the weather. Compare entrance-area and Jiangkou-town rooms through warmth, quiet, bathroom, breakfast and dinner. A high-end nature stay is stronger when those details and the guide's actual knowledge are clear; remoteness alone is not a service standard.",
    firstTimerNote:
      "Before buying the trip, ask what remains after the cableway and what happens if you do not climb Red Cloud Golden Summit. The answer should name worthwhile permitted paths, remaining effort, a return plan and the effect of weather. That is more useful than a promise that everyone can reach the summit because the tour is private.",
    faqs: [
      {
        question: "Is Fanjingshan the same place as Fanjing Mountain?",
        answer:
          "Yes. Fanjingshan, Fanjing Mountain and Mount Fanjing refer to 梵净山 in Guizhou's Tongren region. Use the actual entrance and hotel address when planning: the shared mountain name does not identify a gate, a station or the upper summit route.",
      },
      {
        question: "How many nights do I need for Fanjingshan?",
        answer:
          "Two nights usually protect one full mountain day between arrival and departure. Three can add another local subject or a slower pace, with any weather-related day change subject to actual ticket rules and availability. One night needs a particularly workable complete arrival and onward journey.",
      },
      {
        question: "Does the Fanjingshan cableway take me to the summit temples?",
        answer:
          "No. The cableway reduces one stage of ascent but does not remove the remaining paths and steep upper summit steps. Ask which route is included, how much descent remains and what a non-summit option involves. A cableway booking should not be presented as a step-free visit to the famous upper bridge.",
      },
      {
        question: "Can I skip Red Cloud Golden Summit?",
        answer:
          "Yes when the actual open visitor route supports a worthwhile alternative suited to you. The mountain forest, rock forms and broader setting can be rewarding without the steep final climb. Agree the paths, waiting or meeting arrangements and return before entering, rather than assume you can leave any regulated section at will.",
      },
      {
        question: "Should I choose the east or west entrance to Fanjingshan?",
        answer:
          "Begin by assessing the Jiangkou eastern approach for a typical first visit, then compare the Yinjiang western route only with its actual walking, facilities and current operation understood. The gates are not interchangeable. Do not assume cableway access or the same return route from both sides.",
      },
      {
        question: "Is Tongren South station the same as Tongren station?",
        answer:
          "No. Tongren South and Tongren are different railway gateways. Compare the dated train and complete road to the booked Jiangkou or mountain-foot room. A shorter rail journey may not produce the shortest overall transfer, so avoid choosing a station from its city label alone.",
      },
      {
        question: "Can I visit Fanjingshan as a day trip from Guiyang?",
        answer:
          "Assess the entire train, road, entry, walking and return sequence before considering it. A distant same-day trip can leave little useful mountain time and a fragile return after queues or weather changes. Two local nights are a stronger starting point for a considered visit when the mountain is a real priority.",
      },
      {
        question: "Can a private guide guarantee Fanjingshan summit access?",
        answer:
          "No. Weather, closures, entry limits and the visitor's ability still determine the route. A good proposal confirms the actual bookings and explains useful alternatives. Private guiding does not override public rules, guarantee visibility or make steep narrow steps suitable for every guest.",
      },
    ],
    culturalStory: {
      title: "Natural heritage and Buddhist associations are different layers",
      paragraphs: [
        "Fanjingshan's natural World Heritage value concerns a defined landscape and its ecological importance. Explain vegetation, isolation and habitat through what can responsibly be observed on the permitted route. The presence of rare species does not make a normal sightseeing path a wildlife-viewing guarantee. Keeping those limits clear protects both the visitor's expectations and the environments that give the mountain its value.",
        "Buddhist associations add a different cultural perspective. Interpret the actual accessible temples, summit setting and religious use without assuming that every structure is ancient, every interior is open or a resident practitioner is available to host visitors. Temple sightseeing, a religious conversation and a staged performance are separate arrangements. The mountain is richer when natural history and cultural tradition are explained on their own evidence, rather than merged into a claim of mystical private access.",
      ],
    },
    foodStory: {
      title: "Plan breakfast, water and a comfortable meal after the descent",
      paragraphs: [
        "The most useful food planning begins with the mountain day: an actual early breakfast, drinking water and a meal arrangement that fits the selected route. Ask the kitchen for a balanced selection of available vegetables, tofu, rice or noodles and suitable meat dishes, with spice discussed rather than assumed. After a long descent, a seated dinner near the real room often adds more comfort than another drive for a specialty restaurant.",
        "Discuss pork, meat stock, soy, wheat, chili and shared equipment when dietary needs matter. A vegetable dish need not be vegetarian, and a small guesthouse does not automatically have an allergy-safe kitchen. Ask about mushroom ingredients and source; do not collect or eat unidentified forest plants or fungi. A hosted village meal, cooking session or foraging activity needs a separate lawful, consent-based arrangement and is not implied by a nature-stay description.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / night 1",
        title: "Reach the correct base and prepare for the real route",
        description:
          "Complete the actual gateway transfer, settle in and have dinner. Confirm the entrance, document and ticket arrangements, visitor transport, remaining stairs and weather. Keep a short local walk optional rather than placing an essential summit attempt after uncertain arrival.",
      },
      {
        day: "Full day 1 / night 2",
        title: "Give the mountain a full, appropriately paced day",
        description:
          "Follow the booked permitted route with its transport stages, breaks and return understood. Choose Mushroom Stone and any upper summit individually according to actual operation and ability. Preserve enough time for the descent and a proper meal rather than insist on both summits to complete a checklist.",
      },
      {
        day: "Optional full day 2 / night 3",
        title: "Add a different local subject or enjoy the chosen property",
        description:
          "Use a specifically agreed public village or cultural route, a worthwhile local interest or time at the room. A change of mountain day depends on current reservations and conditions; this extra day does not guarantee a second entry, a private encounter or a clear summit photograph.",
      },
      {
        day: "Departure",
        title: "Continue to a separate Guizhou chapter",
        description:
          "Transfer to the correct station or next Zhenyuan, Guiyang or other regional base using the full agreed journey. This illustrative two- or three-night outline is not a published package and does not guarantee summits, wildlife, private access, visibility or rooms.",
      },
    ],
  },
};
