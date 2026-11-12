import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/hemu.svg",
  alt: "Original Hemu planning schematic distinguishing a village-and-river stay, the hillside viewing platform and separately arranged winter skiing, with cabin facilities and last luggage transfer checked; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const hemuGuide: ExpandedDestination = {
  id: "hemu",
  name: "Hemu",
  region: "northwest",
  kicker: "Stay for a village day, not only a dawn photograph",
  description:
    "Plan Hemu for its river valley, timber-house setting and selected walks, with practical cabin advice, a realistic morning viewpoint plan and winter travel distinguished from skiing.",
  stay: "2 village nights for a full day; longer for a distinct winter or specialist brief",
  bestFor: "Altai village landscapes, unhurried photography and a carefully chosen cabin stay",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["kanas", "urumqi"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Hemu Travel Guide: Village Stays, Viewpoints & Winter",
    seoTitle: "Hemu Guide: Village Stays, Seasons & Winter",
    seoDescription:
      "Plan Hemu with one versus two nights, actual cabin comfort, river walks and the hillside viewpoint. Compare Kanas, autumn and a separately arranged ski stay.",
    answer:
      "Hemu in northern Xinjiang suits a slower village stay among timber buildings, river scenery and forested slopes. Two village nights give one full day; one night works only when arrival and departure leave useful hours. Choose the cabin and final access carefully, since room comfort and visitor transport shape the experience as much as the view. Kanas Lake is a separate destination requiring another transfer. A timber guesthouse does not necessarily offer a historic family-home stay or luxury-lodge service.",
    stayAnswer:
      "Two nights are a strong starting point for a first Hemu stay: arrive, spend a full village day and leave without making one dawn view the entire purpose. One night can suit a focused route when the complete road and room access leave a meaningful afternoon and morning. Three or more nights need a distinct interest, such as a properly arranged ski brief, specialist photography or genuine time at a suitable property. Count Kanas and Burqin nights separately. Adding an extra village does not improve a short trip if it turns both stays into late arrivals and early luggage transfers.",
    hotelAnswer:
      "Choose between a specific room near the village's river and established walking areas, another village address with a potentially different noise and pickup pattern, and a property selected for an actual skiing or winter-transfer brief. Verify the exact map location rather than rely on labels such as old village, new village or Hemu resort. Ask for the booked room's heating, insulation, hot water, private bathroom, bed, soundproofing, meals and final luggage approach. A cabin photograph does not establish the room's view or whether neighbors, music and vehicle activity affect sleep. In winter, heating reliability and safe access matter more than decorative styling.",
    sightseeingQuestion:
      "Should I prioritize the Hemu viewing platform, a river walk or time in the village?",
    sightseeingAnswer:
      "Give the village and river a useful daytime window so the stay does not depend on a misty sunrise. The main hillside viewing platform offers a broader panorama but has a real approach and climb, with current routes, steps and conditions checked. A selected bridge-and-river walk provides a closer view of the setting, with the actual return route and surfaces assessed. Use the platform when visibility, timing and mobility justify it. A guided cultural subject can add depth only through a named public venue or a separately consented host, not an assumption that every timber house is open to visitors.",
    visitorResources: [
      {
        label: "Altay prefecture government",
        href: "https://www.xjalt.gov.cn/",
        scope:
          "Regional background and dated public notices, mainly in Chinese. Confirm Hemu entry, current visitor transport, paths, seasonal roads and property operation with the responsible venue and providers. A regional winter-tourism reference does not establish a particular ski lesson, village transfer or cabin's heating.",
      },
      {
        label: "Xinjiang regional government",
        href: "https://www.xinjiang.gov.cn/",
        scope:
          "Regional context and public-service information. Check current traveler-specific conditions, any applicable documents, the proposed route and actual hotel check-in arrangements before booking. A tourism overview is not a clearance for every border-area excursion or a guarantee of winter road access.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains and exact stations. An Altay-area rail arrival still requires a separate road and final village-access sequence. Compare complete hotel-to-hotel time, use ticketed transport times and do not infer a railway station beside the cabin.",
      },
    ],
    serviceScope:
      "A proposal should name the exact cabin and room, complete gateway and road journey, scenic entry and current visitor transport, final luggage transfer, guide language, meals and selected walks. Identify whether the hillside platform is part of the plan and what approach remains. For winter, state the road and vehicle arrangement, property heating, suitable clothing needs and contingency. Skiing, lift passes, rental equipment, lessons, snowmobile or horse-sleigh activities and hosted visits are separate services requiring actual providers and any applicable permissions. A private vehicle does not authorize driving to every village door or into restricted terrain. No sunrise, mist, snow depth, private family hospitality or exclusive village access is promised here.",
    routeAdvice:
      "Pair Hemu with Kanas when village life and the lake-and-river landscape each have useful time. Send your dates, actual gateway, available nights, room requirements and walking or photography interests for a tailored northern Xinjiang proposal. We can assess a gateway night in Burqin and the full inter-destination transfer, entry and luggage sequence. Urumqi is a separate city stage. Current traveler eligibility and access arrangements must be checked before the itinerary is confirmed.",
    practicalPlanning: {
      timing:
        "Use Beijing time, UTC+8, for written meetings and actual ticketed services, resolving any different local convention explicitly. For a dawn outing, compare the real seasonal light, current platform access, approach, return and breakfast before agreeing pickup. Do not apply a clock time from another month or ignore the wait in cold conditions. A late road arrival may make a slower morning the better choice. Autumn color, mist and snow cover vary, while popular dates can bring room pressure and busy viewpoints. Keep the daytime village experience rewarding when the hoped-for photograph does not appear.",
      walking:
        "Assess village lanes, bridge and riverside paths separately from the hillside platform climb. Timber structures, steps, mud, frost, snow or ice can change surfaces, and the return to a room may be longer than the view suggests. Check current route, seating, toilets and a shorter alternative; a private transfer does not remove the final walk. In winter, plan footwear and traction appropriate to the actual conditions, with indoor warm breaks. Stay on permitted paths, keep away from water and unsafe ice, and do not enter fenced land or a household's yard for a better photograph.",
      cost: "Compare the actual room category and view, heating, bathroom, meals, complete road service, entry, internal transport, luggage handling and guiding. A scenic cabin premium may buy location or styling without quieter sleep or better service. Clarify winter vehicle requirements and the effect of road changes or delayed departure. Ski passes, equipment and lessons should be named and priced separately when selected. Premium value lies in dependable facilities, useful time and clear arrangements, not a vague promise of untouched village life or an automatic upgrade based on timber architecture.",
    },
    attractions: [
      "A selected Hemu village walk with the actual streets and cultural context explained",
      "Hemu River and an appropriate bridge-and-riverside route through permitted public areas",
      "The main hillside viewing platform when the current approach, weather and mobility support it",
      "Seasonal birch and valley scenery from lawful paths rather than private yards or fenced fields",
      "A named public cultural venue or separately agreed host, if genuinely arranged",
      "A distinct Jikepulin ski-area visit only with current operation and specific services confirmed",
      "Kanas Lake and its river bays as a separate destination chapter",
    ],
    stays: [
      {
        label: "1 night / a focused stop with useful hours",
        advice:
          "Choose a real arrival that leaves time to settle and walk, and a departure that does not erase the morning. Keep dawn optional rather than the single reason for coming. A long transfer, late check-in and immediate early exit should be described as a brief stop, not a full village immersion.",
      },
      {
        label: "2 nights / a full village day and flexibility",
        advice:
          "Give the river, village and a suitable viewpoint separate windows with meals and rest. One dependable cabin can support a more rewarding stay than moving to a second village after every night. A second morning also offers flexibility without guaranteeing mist or a particular sunrise.",
      },
      {
        label: "3 or more nights / a specific slow-stay or winter brief",
        advice:
          "Add time for real skiing, specialist photography or a property whose setting and facilities the guest wants to enjoy. State the actual activities, transport, instruction and weather alternatives. Do not assume more nights automatically create more cultural access or that every traveler wants a ski holiday.",
      },
    ],
    hotelAreas: [
      {
        name: "A specific river- or village-walk address / useful local time",
        advice:
          "Compare the actual walk to the river, bridge, meals and selected platform approach. Check noise, outlook and privacy from the booked room rather than the property's best photograph. A central address can help access while bringing foot traffic or music; confirm what matters for sleep.",
      },
      {
        name: "Another village address / judge the exact location",
        advice:
          "Labels such as old village and new village are too broad to prove tranquility, historic fabric or transport convenience. Obtain the Chinese address, actual pickup and final luggage arrangement. Compare heating, bathroom, breakfast and return after dinner with the value of a potentially quieter or more open setting.",
      },
      {
        name: "A ski-focused property / a different daily route",
        advice:
          "Choose through the actual relationship to the named ski area, rental, lessons and transfers. A Hemu address is not automatically ski-in/ski-out, and a ski-area hotel does not necessarily deliver the village's river-and-cabin setting. Decide whether village time or time on snow leads the stay before booking.",
      },
      {
        name: "Burqin or Jiadengyu / gateways rather than Hemu village rooms",
        advice:
          "These can serve another part of the regional route, but neither should be counted as a night in Hemu. Include the full remaining road, entry and room transfer. A cheaper gateway night can be sensible when labeled honestly; it does not provide a village dawn without another journey.",
      },
    ],
    tradeoffs: [
      {
        title: "A timber cabin needs the same practical checks as any premium room",
        advice:
          "Ask about insulation, heating method, temperature control, hot water, bathroom, sound transmission, staff and food. Clarify whether the quoted unit is a private building or a room in a shared structure. A cabin exterior does not establish a historic family home, seclusion, a particular view or international lodge service. Current room evidence is more useful than an undefined luxury label.",
      },
      {
        title: "A village stay should work without dawn mist",
        advice:
          "The hillside panorama depends on weather, light and visibility, while chimney smoke and mist are not a scheduled display. Choose the viewpoint for the actual conditions and guest needs; a later visit or lower walk can be more enjoyable than a cold wait with no view. Allow time to experience the river and village in daylight rather than make one image the measure of success.",
      },
      {
        title: "Autumn color is a window, not an exact annual appointment",
        advice:
          "September is a common starting point for researching the birch-and-valley autumn landscape, but elevation and weather change timing and leaf retention. Check recent conditions close to travel. Popular periods can also be busy and expensive; an atmospheric cabin photo is not evidence of an empty village. Summer, autumn and winter offer different reasons to stay rather than one permanent postcard.",
      },
      {
        title: "Winter sightseeing and skiing are different holidays",
        advice:
          "A snow-covered village visit focuses on the room, short walks, viewpoints and dependable transport. A Jikepulin ski brief adds slope suitability, operating lifts, passes, equipment, instruction and its own transfer. Neither is automatically included in the other. Snowmobile and horse-sleigh services require separately assessed providers and conditions, not an assumption that every winter transfer uses them.",
      },
      {
        title: "Kanas and Hemu deserve different visiting time",
        advice:
          "Kanas leads with lake, river bays and forest routes; Hemu offers a village-and-valley setting and a particular overnight experience. Both can be rewarding in a longer northern Xinjiang journey. With limited nights, choose which experience matters most rather than attempt a complete lake circuit, Hemu sunset and dawn platform between two long gateway transfers.",
      },
      {
        title: "Public village space is not permission to enter private life",
        advice:
          "Tuva cultural associations deserve specific, respectful interpretation. Public exhibitions, commercial venues, guesthouses and private homes have different functions. Name the actual place and establish any host's consent rather than promise family life with every cabin booking. Ask before portraits, respect working spaces and keep off fenced land. A performance or lesson needs its own confirmed arrangement.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "kanas",
        advice:
          "Kanas adds lake, river bays and a separate pavilion choice to Hemu's village setting. Allow the full inter-destination road, entry, luggage and room sequence, then protect useful scenic time. A Kanas booking does not automatically include Hemu accommodation or transport, and the two should not share interchangeable destination photographs.",
      },
      {
        slug: "urumqi",
        advice:
          "Urumqi can add regional museum context, food and a genuine transport connection. Compare the dated flight or rail gateway and full onward road journey rather than treat the capital as a local Hemu base. Count any gateway nights separately so the proposal makes clear how much time is actually spent in the village.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose the season through the actual brief. Summer offers green valley and walking interests, with variable weather. Autumn is sought for birch color, often researched around September, but its timing and duration vary. Winter creates a different snow-and-cabin stay or a separately arranged ski trip, requiring current roads, heating and activities to be verified. Transition periods can have different surfaces and services. No season guarantees mist, snow depth, a sunrise or solitude, and popular photography or holiday dates may affect prices and visitor flow.",
    orientation:
      "Hemu is in Burqin County, Altay, northern Xinjiang. The village, its river paths, hillside platform, scenic entry or transfer points and the separate ski-area brief are not one interchangeable location. Kanas Lake, Jiadengyu and Burqin town require distinct road and overnight decisions. Locate the exact room and actual final access rather than infer convenience from the name Hemu. A proposed flight through Kanas or Altay, or an actual railway arrival, still needs the complete road sequence and current seasonal operation.",
    experiences: [
      "Read the village, river and forest as a connected valley landscape at an unhurried pace",
      "Choose a hillside panorama or a rewarding lower walk for actual conditions and mobility",
      "Enjoy a well-chosen cabin for its real warmth, sleep and useful village time",
    ],
    planningNotes: [
      "Count full road, entry and final luggage stages before choosing one or two village nights",
      "Verify actual cabin facilities and location rather than infer luxury from timber styling",
      "Separate winter village sightseeing, ski services and any snow activities in the proposal",
    ],
    arrival:
      "Build the journey from the booked flight or train and actual operating gateway, with current roads and final village access included. A Kanas or Altay airport label does not place the traveler at the cabin. Confirm pickup, meals, entry, luggage and any change of vehicle or public transport before check-in. Winter needs its own vehicle, driver and contingency arrangements. Keep the first evening modest after substantial travel, and do not make a rushed sunset or immediate pre-dawn outing compulsory for a successful arrival.",
    gettingAround:
      "Use the currently confirmed village transport arrangements and permitted walking routes. Identify the room's final approach, the platform route, meals and a clear return rather than assume a private car can stop at every door. A bridge-and-river walk and a hillside climb need different surface and mobility checks. Snow activities and skiing are distinct services. Keep away from unsafe ice, respect closures and private yards, and establish a shorter route with indoor breaks when conditions or guest needs make the full outing unsuitable.",
    stayStrategy:
      "For a first visit, two village nights can create a useful full day without hinging the experience on one morning. Choose a room through warmth, bathroom, bed, quiet, meals and actual location. Confirm who handles the final luggage stage and how early breakfast works if a dawn outing is selected. More nights should support a real slow-stay, photography or ski purpose. A scenic premium should buy a stated benefit rather than simply a cabin facade or an assumption of private cultural access.",
    firstTimerNote:
      "Ask what you want from Hemu beyond the famous hillside photograph. If the answer is a good cabin, a river walk, a considered village introduction and time to enjoy the setting, give those things a full day. If the main purpose is skiing, choose the room and services through that brief. A clear priority makes it easier to decide whether to add Kanas or protect more time in one place instead of spending the holiday changing vehicles and rooms.",
    faqs: [
      {
        question: "Is Hemu worth staying overnight, or can I visit for the day?",
        answer:
          "A day visit can serve a selective interest when the complete route fits. An overnight adds different hours and a cabin experience; two nights provide a full village day and flexibility. A late arrival followed by an early departure gives much less than the overnight label suggests, so compare useful time rather than only room nights.",
      },
      {
        question: "How many nights should I stay in Hemu?",
        answer:
          "Two village nights are a useful starting point for one full day. One can work with a meaningful afternoon and morning; three or more need a distinct slow-stay, photography or ski brief. Count Kanas and gateway nights separately, with actual roads and luggage transfers included.",
      },
      {
        question: "Should I choose Kanas or Hemu on a short trip?",
        answer:
          "Choose Kanas for lake, river-bay and forest routes; choose Hemu for the village-and-valley setting and a specific cabin stay. Both need real transport and visitor time. A shorter journey can choose one well rather than compress both into late arrivals, an early photograph and little else.",
      },
      {
        question: "Where should I stay in Hemu for comfort and quiet?",
        answer:
          "Assess an exact property and room, including heating, insulation, hot water, bathroom, bed, noise, meals and final access. Broad old-village or new-village labels do not prove quiet or convenience. Check the actual outlook and nearby activity rather than assume a timber cabin is private, historic or luxurious.",
      },
      {
        question: "Do I need to go to the Hemu viewpoint at sunrise?",
        answer:
          "No. Choose a time through current access, weather, light and guest needs. The hillside approach and possible cold wait are real parts of the outing, while mist and dramatic sunrise are not guaranteed. A later panorama or selected river walk can be more rewarding than an unsuitable pre-dawn climb.",
      },
      {
        question: "When is the best time for Hemu autumn colors?",
        answer:
          "September is a common research window, but elevation and weather change the actual color and leaf retention. Check recent conditions near travel rather than expect a fixed annual peak. Keep village, river and room quality valuable even if the leaves are earlier or later than the preferred photograph.",
      },
      {
        question: "Does a winter Hemu stay include skiing at Jikepulin?",
        answer:
          "Not automatically. A ski visit needs the actual resort operation, transfer, slope suitability, lift pass, rental and any instruction specified separately. A village cabin is not necessarily ski-in/ski-out. Snowmobile or horse-sleigh activities are also separate arrangements, not standard inclusions in a winter room booking.",
      },
      {
        question: "Does a Hemu cabin stay include a Tuva family visit?",
        answer:
          "No. A guesthouse, public cultural venue and private home are different places. Any hosted visit needs a willing host, a defined service and respectful conduct. A timber room or village entry does not purchase access to family life, a performance or permission to photograph people.",
      },
    ],
    culturalStory: {
      title: "Understand a village that is both lived in and visited",
      paragraphs: [
        "Hemu's timber buildings and Tuva cultural associations are an entry into the place, not a complete explanation of it. Residents, guesthouses, public visitor spaces, tourism businesses and new construction can coexist. A thoughtful walk identifies the actual building or venue and its current function, rather than describe every cabin as an unchanged ancestral home. Public interpretation and a personally hosted encounter offer different experiences; the latter requires a real invitation and clear expectations.",
        "The river, bridge, forest and hillside view help visitors understand the valley at different scales. From above, buildings and trees form a broad composition; at ground level, the experience includes work, travel, weather and ordinary daily routines. Leave people room to carry on with those routines. Ask before portraits, respect private yards and keep the story grounded in contemporary life rather than promise an untouched village staged for dawn photography.",
      ],
    },
    foodStory: {
      title: "A cabin stay is only as practical as its meal arrangements",
      paragraphs: [
        "Confirm where breakfast and dinner are served, whether a dawn outing changes breakfast timing and what happens if the guest returns later than planned. A room with a beautiful exterior may not have an equally dependable kitchen. Where genuinely offered, choose a noodle or meat preparation, vegetables and other dishes the group enjoys, with dairy or local specialties optional. A warm meal at the right time often adds more to a winter village stay than an elaborate menu requiring another cold transfer.",
        "Clarify wheat, dairy, meat stock, nuts and shared preparation where dietary needs matter. Small properties and winter kitchens may have fewer substitutions than a city restaurant, so serious allergies or religious requirements need confirmed capability before booking and a workable alternative. A vegetable dish is not proof of a vegan meal. A family-hosted dinner or cooking encounter needs an actual willing host and separate arrangement; it is not included merely because the room resembles a traditional house.",
      ],
    },
    itinerary: [
      {
        day: "Day 1 / village arrival",
        title: "Reach the real room and settle into the setting",
        description:
          "Complete the gateway, road, entry and final luggage sequence. Check the room and take a manageable local introduction if useful hours remain, followed by a suitable dinner. Do not attach a rushed hillside climb to an uncertain arrival simply to match a sunset photograph.",
      },
      {
        day: "Day 2 / a full village day",
        title: "Choose the panorama and a closer river view",
        description:
          "Consider the hillside platform at a suitable time, with current access, approach and weather understood, then use a selected village-and-river route at a comfortable pace. Include breakfast, lunch, rest and a clear return. Mist and color are natural possibilities, not conditions the day must satisfy.",
      },
      {
        day: "A separate winter or specialist day, when adding nights",
        title: "Define the activity instead of treating it as an automatic inclusion",
        description:
          "For skiing, specify the actual resort, transfer, operating services, equipment and instruction. For photography or a cultural subject, name the route, guide or consented venue. These are additional arrangements and may replace ordinary village sightseeing rather than fit around every other activity.",
      },
      {
        day: "Departure / the next chapter",
        title: "Continue with the full transfer counted",
        description:
          "Coordinate luggage, current village exit and the actual road to Kanas, a gateway base or the booked airport or station. This two-night outline is illustrative, with the additional activity day requiring extra time. It is not a package or a guarantee of mist, snow, hosts, room facilities, ski operation or unrestricted road access.",
      },
    ],
  },
};
