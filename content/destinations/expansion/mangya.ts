import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/mangya.svg",
  alt: "Original Mangya planning schematic distinguishing Huatugou, Mangya Emerald Lake, Aiken Spring and a separate Lenghu route; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const mangyaGuide: ExpandedDestination = {
  id: "mangya",
  name: "Mangya",
  region: "northwest",
  kicker: "Western Qaidam landscapes with a reason for every road day",
  description:
    "Decide whether Mangya belongs in your Qinghai road trip: distinguish its Emerald Lake from Dachaidan, assess Aiken Spring and plan Huatugou stays and full transfers.",
  stay: "2–3 local nights; gateway and wider Qaidam stages are additional",
  bestFor: "Salt-lake landscapes, considered photography and a substantial plateau road journey",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["xining", "dunhuang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Mangya Travel Guide: Emerald Lake, Aiken & Stays",
    seoTitle: "Mangya Guide: Emerald Lake, Aiken & Stays",
    seoDescription:
      "Plan Mangya in western Qinghai: Emerald Lake vs Dachaidan, Aiken Spring photo expectations, Huatugou hotels, two- or three-night stays and full Qaidam road stages.",
    answer:
      "Mangya (茫崖) is a county-level city in Haixi Prefecture in western Qinghai, within the wider Qaidam Basin. Huatugou (花土沟) is a practical service and accommodation reference for a focused stay around Mangya Emerald Lake and Aiken Spring. Mangya Emerald Lake is not Dachaidan Emerald Lake; the shared English name can lead to a major routing mistake. Two local nights give one full day between arrival and departure, while three can separate selected landscape visits and leave more room for conditions. The long gateway approach and onward Qaidam journey require their own road stages. Come for a specific landscape or photography interest, not an expectation that every famous image can be reproduced from a roadside stop.",
    stayAnswer:
      "Allow two local nights for one full day when the actual approach, accommodation and selected visits make sense. Three give two days for separate interests or a less rushed photography plan, but do not guarantee clear skies, color or flight permission for a drone. One night is a selective road stop, not a complete exploration. Count gateway and wider Qaidam overnights separately. A Lenghu or Eboliang extension needs its own route, access and accommodation assessment; do not hide it inside a supposedly local Mangya day.",
    hotelAnswer:
      "Begin with a specific Huatugou hotel for practical services, meals and the chosen local roads. Review the actual room, heating, hot water, bathroom, bedding, noise, luggage access and breakfast. Confirm current check-in arrangements for the actual travelers before booking. A room described as oxygen-equipped needs its equipment and terms checked and is not medical clearance for a plateau itinerary. Lenghu is a different route and overnight decision, not another convenient hotel district for the same sightseeing day. A remote camp needs its own evidence for location, lawful operation, sanitation, temperature control, food and support.",
    sightseeingQuestion: "Is Mangya worth the detour on a Qinghai road trip?",
    sightseeingAnswer:
      "It can be worthwhile for travelers who specifically want western Qaidam salt-lake scenery and accept the full roads, plateau conditions and actual hotel options. It is less compelling when the plan repeats similar lake stops or sacrifices meaningful time elsewhere for a brief photograph. Compare Mangya with the other salt-lake experiences already in your itinerary before adding it. A good proposal should explain what is different here, where you will stay and how much useful time remains after the transfer. With limited days, a shorter, coherent Qinghai route may be the better choice.",
    visitorResources: [
      {
        label: "Qinghai provincial government",
        href: "https://www.qinghai.gov.cn/",
        scope:
          "Provincial background and dated notices, mainly in Chinese. Use responsible local authorities and operators to confirm the exact site, traveler arrangements, roads and visitor routes. Regional promotion does not establish current admission, unrestricted industrial access or drone permission.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services to a practical gateway and the remaining road to the named hotel. A rail connection elsewhere in Qinghai is not a direct arrival at Mangya's landscape sites. Compare the whole journey rather than the rail segment alone.",
      },
    ],
    serviceScope:
      "A tailored proposal should identify the exact gateway, every overnight, full road stages, vehicle and driver arrangements, guide language, selected public visitor routes, meals and booked rooms. Confirm current travel and check-in arrangements for the actual guests. Specify what a photo outing offers from permitted ground positions and whether any separately authorized aerial work is involved. Private transport does not open industrial premises, closed roads, fragile salt surfaces or protected land. Remote camping, off-road activities, specialist photography or drone use require separate arrangements and any necessary authorization; none follows automatically from a private tour.",
    routeAdvice:
      "Xining offers a different Qinghai city and cultural chapter; it is not a local base for Mangya. Dunhuang can add Mogao's Buddhist art and oasis context through a separately planned connection, with its cave reservation protected from uncertain road arrival. Neither pairing is an automatic short transfer. No matching published Mangya product is recommended here. Share dates, actual gateways, available nights, previous plateau experience, preferred walking, photography aims and room expectations for a tailored proposal. Ask which landscape stops add something distinct before accepting a longer circuit.",
    practicalPlanning: {
      timing:
        "Work from the actual hotel, visitor entrance and next overnight. Include meals, fuel planning, suitable stops, road conditions and driver arrangements. A long approach is not also a full photography day. Avoid a fixed sunset promise on arrival after a substantial road stage. Allow the full onward journey and a sensible margin before a flight or train. Verify any proposed Huatugou airport service for the actual date rather than assume the airport name guarantees a useful scheduled connection.",
      walking:
        "The journey is on a high plateau, with exact overnight and route elevations to be reviewed before booking. Easy-looking ground does not remove the effects of altitude, sun, wind or cold. Discuss individual medical concerns with a qualified clinician and choose a suitable arrival profile. At lakes and spring sites, use the designated visitor route; salt crust and wet edges can be unstable or environmentally sensitive. Review steps, distance, toilets, seating and the return pickup for the actual outing rather than assume a vehicle reaches every photo position.",
      cost: "Compare complete vehicle days, driver expenses and repositioning, actual rooms, guide time, meals, admissions and any internal transport. A low town-hotel rate does not describe the cost of a remote road journey. A specialist photography service should identify its actual expertise, permitted locations and deliverables. Drone operation, camping or special vehicles need their own confirmed terms. Paying more should improve sleep, route judgment, interpretation and support rather than purchase an unsupported promise of a particular image.",
    },
    attractions: [
      "Mangya Emerald Lake / Mangya Feicui Lake, under the current public visitor arrangements",
      "Aiken Spring / Aiken Quan as a separately assessed landscape and photography interest",
      "Huatugou as a practical base for meals, rest and the selected roads",
      "The wider Qaidam landscape from lawful stopping places, with no highway posing",
      "Lenghu and Eboliang only as a distinct, separately checked extension",
    ],
    stays: [
      {
        label: "1 local night / a selective road stop",
        advice:
          "Choose the one interest that fits the real travel window and current access. A late arrival and early departure leave little useful time. Do not sell the overnight as a complete Mangya experience or attach an essential sunset shoot to an uncertain approach.",
      },
      {
        label: "2 local nights / one full local day",
        advice:
          "Use one suitable base and plan the main landscape visit with meals, rest and the complete local roads. A second site is worthwhile only when it adds contrast and fits the actual day. The gateway approach and departure remain separate stages.",
      },
      {
        label: "3 local nights / two distinct days",
        advice:
          "Separate lake and spring interests when the conditions and route justify it, or keep time for a more selective photography plan. Additional time offers flexibility, not guaranteed light or access. A remote extension should show its own nights and transport rather than be folded into the local label.",
      },
    ],
    hotelAreas: [
      {
        name: "Huatugou / practical town services",
        advice:
          "Compare exact hotels for sleep, bathroom, heating, hot water, breakfast and dinner choices, with the full road to the selected entrance. Check parking and pickup. A practical town room can be the strongest comfort choice without being presented as a secluded luxury retreat.",
      },
      {
        name: "A named outlying property or camp / a deliberate location choice",
        advice:
          "Consider only with verified operation, actual guest arrangements, road access, sanitation, climate protection, meals, power and support. A beautiful tent image does not establish a reliable overnight service. If those details cannot meet the group's needs, retain a town base and a selective daytime outing.",
      },
      {
        name: "Lenghu / a separate route-stage decision",
        advice:
          "Research when the actual itinerary includes that area for a distinct reason. It is not an interchangeable neighborhood for Huatugou-based visits. Assess its own room, meals, roads and visitor arrangements before adding a night, particularly for Eboliang or astronomy-related interests.",
      },
    ],
    tradeoffs: [
      {
        title: "Name the Emerald Lake before booking the road",
        advice:
          "Mangya Emerald Lake and Dachaidan Emerald Lake are different locations. Use the full English and Chinese place name, entrance and hotel address in the proposal. A caption saying only Qinghai Emerald Lake is insufficient. Adding both should serve a distinct purpose, not repeat similar imagery at the cost of another substantial drive.",
      },
      {
        title: "Lake color is a condition, not a guaranteed product",
        advice:
          "Light, sky, water and viewing angle affect what visitors see. Salt-lake basins and extraction landscapes can also have changing operating boundaries. A photograph may emphasize color through viewpoint and editing. Choose the visit for the actual setting and lawful route rather than a promise that the water will match a social-media image.",
      },
      {
        title: "Aiken Spring's famous aerial image is not the ground-level visit",
        advice:
          "Aiken Spring is often promoted as a colored eye-like feature. The familiar overhead composition depends on an aerial viewpoint; a permitted ground visit offers a different perspective. Ask what is actually visible from the current visitor route. Drone use needs its own current authorization and operator assessment, and should never be assumed from the fact that other visitors have posted footage.",
      },
      {
        title: "A spring is not automatically a bathing experience",
        advice:
          "Aiken is a landscape interest, not a promise of a spa or safe water contact. Observe current barriers and instructions; do not enter water or fragile surrounding ground for a photograph. A place name or unusual color does not establish water composition, health benefits or permission to collect material.",
      },
      {
        title: "Lenghu and Eboliang require a distinct proposal",
        advice:
          "Their desert-landscape and astronomy associations are different interests from a Huatugou-based lake visit. Assess exact roads, current visitor access, transport, room and support. A research facility is not automatically a public observatory, and an otherworldly landscape does not imply unrestricted off-road driving or camping.",
      },
      {
        title: "A plateau road holiday needs more than a list of scenic stops",
        advice:
          "Confirm the overnight height, arrival profile, meals, drinking water, communication and practical response to disruption. A guide or oxygen-equipped room does not eliminate altitude concerns. Guests who want short transfers and a resort standard should compare the actual available trip with a less demanding route before committing.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "xining",
        advice:
          "Xining provides Qinghai city culture and regional context, with its own worthwhile stay. A wider plateau route must show the intervening road stages and elevation profile. Xining's city services and rail links do not make Mangya a local excursion or establish a gradual itinerary by themselves.",
      },
      {
        slug: "dunhuang",
        advice:
          "Dunhuang adds a distinct Buddhist-art and oasis chapter. Check the full interregional connection, hotels and any flight or road arrangements separately. Keep the reserved Mogao visit clear of an uncertain long arrival; a famous northwest loop label does not make every pairing comfortable.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Research the warmer part of the year as a starting point, then compare the exact route's wind, temperature, daylight, road conditions and current visitor operation. Summer daylight does not remove strong sun, wind or cold evenings, and winter changes driving and room-heating requirements. Weather can affect both photography and transport. Do not select a month solely because a photograph shows vivid water or clear stars; neither color nor visibility is assured by the calendar.",
    orientation:
      "Mangya lies in western Qinghai's Qaidam Basin within Haixi Prefecture. The administrative area is much larger than a single town or lake. Huatugou is a useful service-base reference; Mangya Emerald Lake and Aiken Spring require their exact entrances and full roads. Lenghu and Eboliang are distinct route decisions. Dachaidan Emerald Lake, Qarhan Salt Lake and Chaka Salt Lake are other places, not alternative names for Mangya's lake. Choose a few permitted landscape visits around a dependable overnight base; distances and road conditions matter more than the number of map pins.",
    experiences: [
      "Understand a selected salt-lake landscape beyond its most saturated photograph",
      "Evaluate Aiken Spring from the actual permitted viewpoint and useful interpretation",
      "Build a comfortable plateau road stay with suitable rooms and distinct landscape interests",
    ],
    planningNotes: [
      "Write Mangya or Dachaidan explicitly whenever the itinerary says Emerald Lake",
      "Separate a ground visit from aerial imagery and any drone arrangements",
      "Count complete gateway roads, overnight heights and actual room standards before adding stops",
    ],
    arrival:
      "Compare actual operating flight or rail gateways with the complete road to the named Huatugou hotel. Any proposed Huatugou airport connection needs a dated service and practical onward transfer, not merely an airport pin on a map. A route through Dunhuang, Golmud or another Qaidam stage needs its own road sequence, overnight decisions, meals and support. Do not assume a one-day return from Xining or fit the main visit between a substantial arrival and tight departure. Send exact Chinese hotel and entrance names for pickup.",
    gettingAround:
      "Use a road plan based on current lawful visitor access, the actual vehicle and sensible driver arrangements. Agree fuel, meals, stops, communications and what happens if the road or site changes. Vehicles cannot enter every salt surface, industrial area or desert track. Walk only where permitted and use safe stopping places for photographs; a straight empty-looking highway is still a road. Any special vehicle, remote excursion or aerial work requires a separate confirmed arrangement.",
    stayStrategy:
      "Two local nights give one full day; three can separate distinct interests or improve pacing. Choose the actual room first for sleep, bathroom, temperature control and food, then assess whether the local road plan suits it. Keep gateway nights separate and review the plateau arrival profile. A high-end proposal should be candid about the lodging available and the demands of the journey. If the room standard or road burden does not fit, recommend a shorter or different route rather than compensate with premium adjectives.",
    firstTimerNote:
      "Ask to see the full name of every lake, the exact hotel and the view available from the permitted visitor route. Then ask how much of the day is spent traveling. This exposes both accidental place-name substitutions and unrealistic photo expectations. A selective visit can be memorable without copying an aerial image or reaching every remote point on a popular loop.",
    faqs: [
      {
        question: "Is Mangya Emerald Lake the same as Dachaidan Emerald Lake?",
        answer:
          "No. They are different locations in Qinghai. Confirm the full place name, Chinese entrance name and complete road in the itinerary. A generic Emerald Lake caption is not enough to choose a hotel or gateway.",
      },
      {
        question: "Where should I stay for Mangya Emerald Lake and Aiken Spring?",
        answer:
          "Assess a specific Huatugou hotel against the actual visitor entrances and full roads. Check room quiet, heating, hot water, meals and current guest arrangements. Lenghu is a separate route decision, not an interchangeable neighborhood for the same plan.",
      },
      {
        question: "How many nights do I need in Mangya?",
        answer:
          "Two local nights give one full day; three allow two distinct local days or a less rushed photography plan. Count gateway and wider Qaidam road stages separately. One night should be described as a selective stop, not a full exploration.",
      },
      {
        question: "Will Aiken Spring look like the eye-shaped aerial photographs?",
        answer:
          "The familiar overhead composition uses an aerial viewpoint. A permitted ground visit gives a different view, with conditions affecting appearance. Confirm the current visitor route and treat drone operation as a separate authorization question, not an included right.",
      },
      {
        question: "Can I swim or bathe at the lake or spring?",
        answer:
          "Do not treat either as a swimming or spa experience. Follow current barriers and visitor instructions, stay on permitted surfaces and avoid entering water or fragile edges. The destination names do not establish safe bathing or unrestricted water access.",
      },
      {
        question: "Can I add Eboliang and Lenghu to a Mangya stay?",
        answer:
          "Consider them only through a separate plan showing exact roads, current access, transport, accommodation and support. They are not automatic local additions. Astronomy facilities, off-road activities and camping require their own confirmed visitor arrangements.",
      },
      {
        question: "Is Mangya suitable for a first high-altitude trip?",
        answer:
          "Review the actual route and overnight elevations, arrival profile and individual health needs before deciding. Seek qualified medical advice for relevant concerns. A private vehicle, guide or oxygen-equipped room does not remove altitude risk or establish that the plan suits everyone.",
      },
      {
        question: "Is there a published Mangya tour recommended here?",
        answer:
          "No matching published product is recommended. A tailored proposal should specify gateways, road stages, rooms, meals, guide, selected routes and inclusions. The sample outline is not a package or guarantee of access, lake color or aerial photography.",
      },
    ],
    culturalStory: {
      title: "Read the basin beyond the idea of an empty wilderness",
      paragraphs: [
        "Qaidam's salt landscapes belong to a basin shaped by water, evaporation and geological history. A useful interpretation explains the visible setting and distinguishes natural processes from extraction basins, roads and visitor infrastructure where those are present. Color alone does not identify a mineral or establish an exact chemical composition. Nor should a guide assign precise ages to a feature without a reliable source. The visitor gains more from a clear account of what can be seen than from a string of dramatic nicknames.",
        "Western Qinghai is also a lived and worked landscape. Huatugou's service role and the region's resource industries help explain why settlements and roads are where they are. Industrial premises are not unrestricted attractions, and a remote-looking photograph can conceal a working area or sensitive ground. Respect current boundaries and let interpretation acknowledge both the striking scenery and the contemporary activity around it. Calling a place untouched should never substitute for understanding it.",
      ],
    },
    foodStory: {
      title: "Plan food around the road and the actual kitchen",
      paragraphs: [
        "A long plateau drive needs a dependable lunch plan and a proper dinner, not just snacks between photography stops. Ask the actual hotel or restaurant about freshly prepared vegetables, tofu, rice, noodles, soup and meat choices as appropriate. A simpler meal at a sensible hour may serve the group better than a regional specialty that requires another detour. Do not infer a local ingredient, a halal kitchen or a particular culinary tradition from the fact that the journey is in Qinghai.",
        "Discuss wheat, dairy, nuts, meat stocks and shared preparation where relevant, and confirm serious-allergy or strict-diet capacity with the responsible kitchen. Agree breakfast timing, drinking water and suitable road-day food before departure. A remote camp menu requires the same practical scrutiny as its bathroom and heating. Food arrangements are part of the comfort promised by the trip and should be explicit, especially when services cannot be improvised along the road.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / after the separately planned gateway approach",
        title: "Reach a suitable Huatugou room",
        description:
          "Complete the actual road stage with meals and breaks, settle luggage and keep the first evening modest. Review current visitor arrangements and conditions. A landscape stop fits only when useful time remains; do not make an essential shoot depend on an uncertain long arrival.",
      },
      {
        day: "Full local day / two-night stay",
        title: "Give the main landscape a worthwhile visit",
        description:
          "Use the confirmed public route at the selected Mangya lake or spring, with appropriate interpretation, meals and rest. A second site is optional when the roads and conditions support a distinct experience. Ground-level viewing and any separately authorized aerial work remain different arrangements.",
      },
      {
        day: "Optional second full day / three-night stay",
        title: "Add contrast or better pacing",
        description:
          "Choose a genuinely different confirmed interest or retain time for a thoughtful photography plan. Do not use the extra day as an excuse for unassessed desert tracks. A Lenghu extension needs its own route and overnight assessment rather than being silently included here.",
      },
      {
        day: "Departure / the real next stage",
        title: "Protect the onward connection",
        description:
          "Allow breakfast, bags, the full road and the appropriate gateway margin. Wider Qinghai or Dunhuang stages need useful nights of their own. This outline is illustrative, not a published package, medical clearance, private-access arrangement or guarantee of weather, colors and site operation.",
      },
    ],
  },
};
