import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/bomi.svg",
  alt: "Original Bomi planning schematic comparing Zhamu town, a Guxiang-area stay and distinct peach-valley or Gangyun forest days; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const bomiGuide: ExpandedDestination = {
  id: "bomi",
  name: "Bomi",
  region: "southwest",
  kicker: "Stay for the forest and valley, not just the road photograph",
  description:
    "Explore Bomi through selected peach-valley scenery, Gangyun forest walks and thoughtful Guxiang-area stays, with realistic Tibet road days and hotel choices.",
  stay: "2–3 local nights; gateway and other Nyingchi nights counted separately",
  bestFor: "Forest walks, seasonal landscape photography and slower eastern Tibet routes",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["nyingchi", "lhasa"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Bomi Travel Guide: Peach Blossoms, Forests & Hotels",
    seoTitle: "Bomi Guide: Peach Blossoms & Where to Stay",
    seoDescription:
      "Plan 2–3 nights in Bomi, Tibet: peach-blossom timing, Gangyun forest walks, Guxiang Lake, Zhamu hotel choices and the full Nyingchi road journey.",
    answer:
      "Bomi, also written Pome, rewards travelers who want forest walks, river-valley photography and more time in Nyingchi's mountain landscapes. Two local nights give one full day; three allow another interest or flexibility for weather. Zhamu, the county town, sits at roughly 2,700 meters, with higher terrain nearby. Count the approach from the Bayi or Mainling area separately. Foreign passport holders need the applicable organized Tibet arrangements and authorization confirmed for the exact route before booking.",
    stayAnswer:
      "Choose two nights for one focused local day, such as a suitable Gangyun forest route with a separate short landscape stop. Three nights can add a peach-valley day in the right season or another genuinely different interest. One night is a road-stage stop, often with little useful local time after arrival. Count Bayi, Lulang, airport transfers and departure travel separately. Extra nights help with flexibility, but do not guarantee blossom, mountain visibility, acclimatization or approval for an additional county.",
    hotelAnswer:
      "Compare a specific Zhamu town hotel with a named Guxiang-area or other valley property. Town can make meals, practical services and onward travel simpler. A landscape property may give a more rewarding setting when the actual room, dinner and approach work. Check heating, hot water, bathroom, quiet, stairs or lift, breakfast and the booked room's view. A lake photograph does not prove private shore access, and a premium label does not establish international resort service. Confirm the actual sleeping elevation, traveler check-in arrangements and full route before choosing by scenery alone.",
    sightseeingQuestion: "Should I choose peach-valley scenery, Gangyun forest or Guxiang Lake?",
    sightseeingAnswer:
      "Give each a distinct role. A selected Bomi peach-valley route is a seasonal photography and rural-landscape day, not a guaranteed flowering display. Gangyun forest is a walking choice with its own current route, surfaces and effort. Guxiang Lake can be a considered landscape stop or the setting for a specific stay. In a short visit, choose one substantial local day and a complementary shorter interest. Do not assume they share one entrance, that every path is easy, or that a passing lake view supplies a full day of exploration.",
    visitorResources: [
      {
        label: "Nyingchi municipal government",
        href: "https://www.linzhi.gov.cn/",
        scope:
          "Official regional information and dated public notices, mainly in Chinese. Bomi is a distinct county within the wider Nyingchi area. Confirm current roads, visitor routes, travel eligibility and individual properties with the responsible parties; regional tourism information does not confirm a particular booking.",
      },
      {
        label: "Tibet Autonomous Region government",
        href: "https://www.xizang.gov.cn/",
        scope:
          "Regional context and current public notices. Organized Tibet arrangements, authorization and any additional route conditions must be checked for each traveler's documents, dates and exact itinerary. A general reference does not grant permission for Motuo, a border-area route or an onward overland continuation.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General ascent and altitude-illness guidance, not individual medical clearance. Review the actual sleeping elevations, higher road sections and health needs with a suitably qualified clinician. Bomi town's elevation does not describe every stop on the approach or make the wider itinerary risk-free.",
      },
    ],
    serviceScope:
      "A tailored proposal should name every overnight, actual room, complete road day, driver and guide roles, meals, admissions and selected walking route. Foreign passport holders generally need organized Tibet travel arrangements and a Tibet Travel Permit in addition to valid China entry permission; current requirements depend on documents, dates and route. Establish the responsible operator, approvals and outstanding conditions before treating the trip as confirmed. Hosted meals, specialist photography guiding, longer hikes, glacier activities, drone use and additional counties need their own specific review and arrangement. No private vehicle or hotel reservation provides blanket access.",
    routeAdvice:
      "Give Bomi useful local days within a selective Nyingchi journey, comparing a stay in Bayi or Lulang when either adds a distinct experience. Lhasa needs its own cultural time, transfers and higher sleeping profile. For a tailored assessment, share your dates, gateways, available nights, walking needs, room expectations and seasonal interests. The proposed sequence must align with the applicable organized Tibet arrangements and authorization for the actual travelers; the illustrative local outline is a starting point for that discussion.",
    practicalPlanning: {
      timing:
        "Count the whole arrival and departure journey, including actual road conditions, meals, visitor procedures and the final property approach. Keep essential local interests off an uncertain arrival afternoon. Peach flowering is often researched for late March into April, but location, elevation and that year's weather change the sequence; seek current local reports rather than purchase a fixed peak-bloom promise. Snow peaks may remain clouded. A forest-and-valley itinerary should still offer value if the hoped-for photograph does not appear.",
      walking:
        "Check the exact Gangyun route rather than assign one easy grade to the whole forest. Paths can include uneven ground, roots, mud, wet timber, steps or slopes. Agree the walk length, turnaround, guide support, toilets and pickup after current assessment. A roadside lake view is a different physical activity from a woodland outing or a higher mountain hike. Stay on permitted paths and away from unstable river edges. A private vehicle reduces some walking but does not remove altitude exposure or make every sightseeing route step-free.",
      cost: "Compare full vehicle days, driver and guide arrangements, actual room category, meals, admissions and any internal transport. A spring room rate should be assessed alongside cancellation terms and the full journey, not treated as a guarantee of blossom. Identify which services change if a road, walk or property becomes unavailable. Premium value should appear in sleep, useful time, well-chosen interpretation and realistic alternatives, rather than an unverified luxury label, empty-forest promise or supposed exclusive viewpoint.",
    },
    attractions: [
      "A selected Bomi peach-valley route, with specific location and current seasonal conditions reviewed",
      "Gangyun spruce forest through a suitable, currently available walking route",
      "Guxiang Lake as a defined landscape stop or a specific nearby overnight setting",
      "Zhamu town for the actual base, meals and a modest local chapter",
      "River-and-mountain photography from lawful, safely accessible stopping places",
      "A named public cultural subject or willing host only when separately arranged",
      "Midui Glacier only as a distinct eastern excursion with current access, effort and full road time assessed",
    ],
    stays: [
      {
        label: "1 night / a selective road-stage stop",
        advice:
          "Make the overnight comfortable and keep sightseeing expectations modest. Arrival light, meals and the next road leg determine what is actually possible. A late check-in and early departure do not provide a complete Bomi forest or photography day.",
      },
      {
        label: "2 nights / one complete local day",
        advice:
          "Choose a substantial suitable subject, with a complementary short interest, lunch and rest. Separate it from the road arrival and departure. The plan should retain a worthwhile shorter or different outing if the intended walk or weather changes.",
      },
      {
        label: "3 nights / two distinct days and more flexibility",
        advice:
          "Add a peach-valley day when seasonal conditions support it, or another well-defined local interest. Keep the two days different rather than repeat roadside viewpoints. The extra night improves available time but does not guarantee blooming trees, clear peaks, approvals or readiness for higher onward travel.",
      },
    ],
    hotelAreas: [
      {
        name: "Zhamu county town / practical services and an actual room",
        advice:
          "Useful when restaurants, pickup and onward logistics matter. Compare the room's quiet, bathroom, hot water, heating, breakfast and vehicle approach. Check road noise and the actual outlook rather than assume all central hotels offer the same restful night or valley view.",
      },
      {
        name: "Guxiang-area property / a specific landscape stay",
        advice:
          "Choose the exact property for an identifiable setting or route advantage. Confirm the booked view, dinner, warmth, staff, stairs and final approach. A nearby lake does not mean every room faces it or that visitors can freely use every shore. Map the drive to the intended forest or valley subject.",
      },
      {
        name: "Another rural or forest-side stay / assessed individually",
        advice:
          "Verify current operation, traveler registration, room facilities, meals, access and sleeping elevation. Establish whether the location improves useful time or merely adds another transfer. A remote-looking image is not proof of solitude, quality guiding or a private trail.",
      },
      {
        name: "Bayi or Lulang / separate regional overnight chapters",
        advice:
          "These may help create a coherent wider journey, but they are not interchangeable with a Bomi local night. Count the entire drive and preserve worthwhile time at each base. Avoid a nominal Bomi day trip that leaves most of the day in the vehicle.",
      },
    ],
    tradeoffs: [
      {
        title: "Peach blossom is a season to research, not a guaranteed date",
        advice:
          "Trees at different locations and elevations can flower at different times. Weather affects both the bloom and the road journey, while popular periods can increase room demand and visitor numbers. Identify the actual valley route and ask for current conditions near travel. Choose a broader reason for Bomi so that forest, landscape and a comfortable stay retain value outside the hoped-for peak.",
      },
      {
        title: "A forest walk and a forest-view hotel are different purchases",
        advice:
          "A lodge image does not establish which public path is available, whether the walk starts at the property or how far the vehicle travels. Confirm the exact Gangyun or other route, current condition, effort and pickup. Choose accommodation and walking together, with enough local time for both, rather than assume one automatically supplies the other.",
      },
      {
        title: "Lower town elevation does not define the whole ascent",
        advice:
          "Zhamu is roughly 2,700 meters, but the approach, sleeping sequence and selected excursions can involve higher elevations. A green valley is not proof of low-altitude travel. Review the actual profile with qualified advice where needed, and take concerning symptoms seriously. Hotel oxygen, fitness and extra nights do not guarantee acclimatization or replace appropriate assessment.",
      },
      {
        title: "Midui Glacier needs its own road and visitor plan",
        advice:
          "Its appearance in Bomi photography does not make it a short outing from every hotel. Establish the full eastern road journey, current visitor route, walking and actual viewpoint before adding it. A glacier-viewing excursion does not include walking on the ice, climbing or specialist safety support. Choose it only when the complete day and guests' interests justify the commitment.",
      },
      {
        title: "Bomi is not automatic access to Motuo",
        advice:
          "Motuo, also written Medog, is a separate county and route decision. Traveler eligibility, current roads, authorization and services require their own confirmation. Do not add it as an informal detour after a Bomi booking, or infer permission from a road map or a domestic travel account. If the continuation is unavailable, Bomi should still stand as a worthwhile visit in its own right.",
      },
      {
        title: "A 318 road journey needs useful time outside the vehicle",
        advice:
          "Driving a famous route and experiencing a destination are different things. Build the overnight sequence around selected subjects and guest comfort, with realistic meals, rest and driver arrangements. Avoid using a long attraction list to conceal a late arrival and early departure. A more selective route can deliver greater depth without pretending that every scenic road section is a local sightseeing day.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "nyingchi",
        advice:
          "Use the Nyingchi regional guide to compare Bayi, Lulang, Basum Tso and the canyon area before deciding which chapter belongs beside Bomi. Choose actual bases and full road days; the shared regional name does not make them neighboring attractions or guarantee access to every county.",
      },
      {
        slug: "lhasa",
        advice:
          "Lhasa adds a distinct palace, temple and urban-history stay at a higher city elevation than Bomi town. Allow its own nights, current reservations and the complete transfer and sleeping sequence. A forested start or a Bomi hotel booking does not establish readiness for Lhasa or replace required Tibet arrangements.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late March into April is a starting point for researching Bomi peach blossom, not a fixed annual appointment. Exact locations and elevations respond differently to each season. Autumn can offer a different valley-and-forest interest, while summer rain can affect paths, visibility and road reliability. Winter brings colder room and road conditions and needs a distinct assessment. Ask for the actual local outlook near departure and choose a schedule that remains worthwhile without full bloom or clear mountains. A date sold as peak season is not evidence that every tree, room or road will cooperate.",
    orientation:
      "Bomi / Pome is a county within Nyingchi in eastern Tibet. Zhamu is the county town, while Guxiang, selected peach-valley routes, Gangyun forest and the farther eastern Midui Glacier form different travel decisions. The Parlung Tsangpo river landscape and National Highway 318 help frame the journey, but a road name is not a complete itinerary. Bayi, Lulang and the Mainling gateway lie in the wider regional plan. Motuo is a separate county, not an automatically available Bomi attraction.",
    experiences: [
      "Give a selected forest route time for walking and observation beyond a roadside stop",
      "Explore a specific peach-valley landscape when seasonal conditions support it",
      "Choose a Guxiang-area setting or town base that makes the local days comfortable",
    ],
    planningNotes: [
      "Compare full road days and overnight addresses before counting usable local time",
      "Confirm the actual forest walk and room rather than buy a scenery label",
      "Keep Tibet authorization, higher road exposure and additional counties explicit",
    ],
    arrival:
      "Nyingchi Mainling Airport, code LZY, is a possible regional gateway, not a Bomi airport. A Bayi rail arrival creates a different onward transfer, and both require the applicable Tibet arrangements plus a full road plan to the actual hotel. Assess whether Lulang or another regional night adds useful time, rather than hide the entire approach inside an airport pickup. Keep the arrival evening light. For any wider 318 continuation, review each road stage, sleeping elevation, current operation and traveler-specific requirements instead of inferring availability from the route's fame.",
    gettingAround:
      "Use a confirmed vehicle sequence for selected local routes, with lawful stopping places and walking described separately. A private car does not enter every path or provide access to private land, religious buildings or closed sites. Agree actual entrances, surfaces, meals, toilets and pickup, with a shorter alternative for a wet or unsuitable walk. Leave time for the subject itself. A photographer needs safe standing space and appropriate light, not a rushed stop on a narrow road bend.",
    stayStrategy:
      "For a focused Bomi chapter, two nights preserve one full local day; three can support a different second subject and more flexibility. Choose Zhamu for an assessed practical base or a named Guxiang-area property for a real setting advantage. Compare quiet, warmth, hot water, bathroom, meals and final access before a mountain-view or retreat label. Establish the actual guests' registration arrangements. The most expensive room is not automatically the best match for the route or a promise of clear peaks.",
    firstTimerNote:
      "Ask how many hours remain for a real local experience after the arrival drive, where you actually sleep and what the alternative is if blossom or a walk disappoints. Those answers show whether Bomi has been given a meaningful role or merely used as a road-stage name. Choose a focused forest-and-valley chapter over an itinerary whose every day depends on a famous photograph appearing on demand.",
    faqs: [
      {
        question: "Where is Bomi, and is Pome the same place?",
        answer:
          "Bomi, also written Pome, is a county within Nyingchi in the Tibet Autonomous Region. Zhamu is its county town. Use the actual hotel, village or visitor-route name when planning; a Bomi label can refer to a much wider area than the town itself.",
      },
      {
        question: "How many nights should I stay in Bomi?",
        answer:
          "Two nights provide one full local day between travel journeys. Three allow two different days and more flexibility for weather or seasonal interests. A single night is a more selective road-stage stop. Count other Nyingchi bases and full arrival and departure journeys separately.",
      },
      {
        question: "When are the peach blossoms in Bomi?",
        answer:
          "Late March into April is a useful research window, but exact flowering varies by location, elevation and that year's weather. Seek current reports for the intended valley route. A fixed date, premium hotel or early start does not guarantee peak blossom or clear mountain backgrounds.",
      },
      {
        question: "Is Bomi worth visiting outside peach-blossom season?",
        answer:
          "It can be for a suitable forest walk, river-and-mountain landscapes and a comfortable slower stay, provided the actual season and roads support those interests. Choose a defined route and property. It is a weaker fit if the entire journey is justified by one seasonal photograph and no alternative would satisfy you.",
      },
      {
        question: "Should I stay in Zhamu town or near Guxiang Lake?",
        answer:
          "Compare a specific town room for practical services and meals with an actual Guxiang-area property for a worthwhile setting. Check quiet, heating, bathroom, dinner, the booked view and the complete road pattern. Neither address automatically supplies every forest walk or private lake access.",
      },
      {
        question: "Is Gangyun forest an easy walk?",
        answer:
          "That depends on the selected route and current conditions. Roots, uneven ground, mud, wet timber, steps and slopes can change the effort. Ask for the exact walking plan, turnaround and pickup, plus a shorter option. A forest-view photograph does not establish an accessible trail.",
      },
      {
        question: "What is Bomi's altitude?",
        answer:
          "Zhamu county town is roughly 2,700 meters above sea level, with variation by property. Higher road sections and other overnight locations need separate attention. Review the complete ascent and sleeping profile with qualified medical advice where appropriate; the town figure does not make the whole Tibet journey risk-free.",
      },
      {
        question: "Can foreign travelers visit Bomi independently?",
        answer:
          "Do not plan an informal independent Tibet visit on the basis of this guide. Foreign passport holders generally need organized Tibet travel arrangements and authorization in addition to valid China entry permission. Confirm the exact current requirements, responsible operator, approved route and hotels for the actual documents and dates.",
      },
      {
        question: "Does a Bomi visit include Midui Glacier or Motuo?",
        answer:
          "Neither is automatic. Midui needs a distinct road, visitor-route and effort assessment; a viewing trip does not include walking on glacier ice. Motuo / Medog is a separate county needing its own traveler-specific eligibility, roads, authorization and services checked before it can be proposed.",
      },
    ],
    culturalStory: {
      title: "Read the valley as a lived landscape",
      paragraphs: [
        "Bomi's forests, fields and settlements offer more than a backdrop to snow peaks. Good interpretation connects the actual place to its livelihoods, local history and contemporary change, separating what can be seen from what belongs to a wider regional story. A village near a blossom route is not a timeless stage set. Explain the particular settlement and public features rather than assign one generic Tibetan tradition to every household or building.",
        "A public path does not grant entry to homes, farm work or religious activity. Identify a willing participant when a hosted encounter is genuinely arranged, ask before portraits and make clear whether a presentation is commercial, institutional or personal. Do not promise ceremonies or private access simply because a route is described as bespoke. Patient observation and accurate explanation can make an ordinary local walk more meaningful without inventing exclusivity.",
      ],
    },
    foodStory: {
      title: "Reliable meals are part of a good road and forest stay",
      paragraphs: [
        "Agree breakfast before a local walk, a practical lunch stop and dinner at a sensible hour after the road journey. A well-prepared selection of vegetables, a suitable protein, rice or noodles and a warm soup can provide a satisfying meal where available. Ask the actual kitchen about its specialties and ingredients instead of assuming that every valley property serves the same regional menu. A signature dish should earn its place in the day rather than require a lengthy extra detour.",
        "Clarify wheat, dairy, meat stocks, mushrooms, nuts, sauces and shared preparation where dietary requirements matter. A vegetarian-looking dish may contain animal stock, and a wild-mushroom description is not proof of safety. Serious allergies need confirmed kitchen capacity and a workable backup before remote travel. Arrange late-arrival food and early breakfast with the actual property. A personally hosted meal is a separate, consented service; it is not included merely because a village appears in the itinerary.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / after the separately planned regional road journey",
        title: "Reach the actual base without overloading the evening",
        description:
          "Allow the full road approach, meals and hotel access. A suitable short landscape stop can fit only if the actual day allows it. Check the room and local conditions before fixing the next outing. Gateway and other Nyingchi nights are separate from this local outline.",
      },
      {
        day: "Full day 1 / a selected forest-and-valley subject",
        title: "Give the walk a useful part of the day",
        description:
          "Follow the assessed Gangyun or other agreed route with interpretation, lunch and pickup. Complement it with a shorter appropriate local interest rather than a distant compulsory excursion. Use the agreed alternative when conditions or guest needs change.",
      },
      {
        day: "Full day 2 / for a three-night stay",
        title: "Add a different seasonal or landscape interest",
        description:
          "Choose a specific peach-valley route when conditions support it, or another worthwhile subject with appropriate access. Preserve time for photography and the property without promising blossom, empty viewpoints or visible peaks. Midui is a separate decision that must fit the entire road day.",
      },
      {
        day: "Departure / the actual onward road sequence",
        title: "Protect the next journey and sleeping profile",
        description:
          "Allow the whole transfer to the next confirmed base or dated gateway service. Any Motuo or wider overland continuation requires its own prior review. This outline is illustrative, not a published package, medical plan or guarantee of authorization, rooms, hosts or seasonal conditions.",
      },
    ],
  },
};
