import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/baisha.svg",
  alt: "Original Baisha planning schematic comparing a village and mural visit, a separate Yuhu interest and Baisha versus Lijiang hotel bases; not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const baishaGuide: ExpandedDestination = {
  id: "baisha",
  name: "Baisha",
  region: "southwest",
  kicker: "Give the paintings and the village more attention than the backdrop",
  description:
    "Explore Baisha near Lijiang for mural art, Naxi cultural context and village time, with clear choices about a day visit, local stays and separate Yuhu or mountain plans.",
  stay: "A focused visit from Lijiang, or 2 nights when the actual property is part of the trip",
  bestFor: "Art and regional history, village walks and a considered Lijiang extension",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["lijiang", "shaxi", "heqing", "dali", "shangri-la"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Baisha Travel Guide: Murals, Village Stays & Lijiang Trips",
    seoTitle: "Baisha Guide: Murals, Village Stays & Lijiang",
    seoDescription:
      "Plan Baisha near Lijiang: mural interpretation, Naxi culture, village walks and hotel choices. Compare a day visit, a local stay and separate Yuhu outings.",
    answer:
      "Visit Baisha, north of Lijiang's Dayan Old Town, for its mural tradition, historic streets and Naxi cultural history. A focused excursion from your Lijiang hotel can be enough; stay locally when a particular property and village evenings justify the move. Baisha forms part of the UNESCO-listed Old Town of Lijiang, alongside Dayan and Shuhe. Choose an accessible mural or cultural visit as the main subject; Yuhu and Jade Dragon Snow Mountain are separate outings.",
    stayAnswer:
      "A focused visit from Lijiang can combine a selected mural interest, a manageable village walk and lunch when the day's full transfers allow. One useful night adds an evening and morning but needs a room you actually want. Two nights give a full day and more time at the property, perhaps with a separately assessed nearby interest. Do not add several nights solely because Baisha is described as quieter: current visitor levels, construction, road noise and the individual room determine the experience. A Lijiang stay and a Baisha visit do not require a hotel move.",
    hotelAnswer:
      "Compare the exact Baisha village or village-edge room with a Dayan, Shuhe or outlying Lijiang hotel. Baisha can suit guests who value that particular setting and property, while an existing Lijiang base may offer easier evening dining or fuller services. Check booked view, sound insulation, heating, bathroom, stairs, breakfast, dinner and the last vehicle point. A mountain-view photograph does not establish the view from every room, clear weather or a quiet courtyard. A Yuhu property is a different base, not simply another street in Baisha.",
    sightseeingQuestion: "Should I visit Baisha, Shuhe or Dayan Old Town?",
    sightseeingAnswer:
      "Choose Dayan for its larger old-town experience and a broad choice of dining and hotels; Shuhe offers another historic settlement and base; Baisha suits a more focused village, mural and regional-history interest. They share a heritage relationship but are separate places with different transfers and room choices. You do not need all three in one day. Select Baisha because you want to understand its art and history or enjoy a particular property, rather than assume the name guarantees empty lanes or unchanged village life.",
    visitorResources: [
      {
        label: "UNESCO: Old Town of Lijiang",
        href: "https://whc.unesco.org/en/list/811/",
        scope:
          "Heritage background on the property and its Dayan, Baisha and Shuhe components. Listing does not establish current entry to individual mural halls, conservation access, photography rules, tickets, hotel standards or a host appointment.",
      },
      {
        label: "Lijiang municipal government",
        href: "https://www.lijiang.gov.cn/",
        scope:
          "Reference entry point for regional background and public notices. Obtain current instructions from the actual mural venue, village host, Yuhu site or mountain operator separately. General tourism information does not establish a ceremony, open residence or mountain ticket.",
      },
    ],
    serviceScope:
      "A tailored Baisha visit should identify the public village route, selected mural venue if included, interpretation language, pickup and return, admissions and meal basis. A Dongba cultural introduction needs its own willing practitioner or specialist, subject and setting; it is not a promised religious ceremony. Confirm photography and conservation instructions at each interior. Yuhu, a workshop, a household meal or a mountain outing are separate arrangements. Private guiding does not open closed halls, private homes or restricted mountain paths.",
    routeAdvice:
      "For Baisha within a wider Yunnan holiday, start with our ten-day Dali–Shaxi–Lijiang–Shangri-La journey. It includes two Lijiang nights and a Lijiang-and-Baisha day with Naxi cultural interpretation and a choice of mountain-landscape plans. Tell us if mural art is your priority so the proposal protects time for the selected venue and explanation. The route does not promise a Baisha overnight or a Yuhu visit. A village-focused day can be discussed without a high-elevation cableway.",
    practicalPlanning: {
      timing:
        "Reserve a useful window for mural interpretation rather than arriving near the venue's closing time after a long mountain day. Combine a selected public walk with a seated meal, then choose one distinct optional interest. Yuhu has its own drive and walking approach. A high-elevation mountain route can dominate the day; if paintings and village culture are the priority, protect those first instead of treating them as quick stops on the way to a cableway.",
      walking:
        "Village paving, lanes, thresholds and interior steps can be uneven. Agree continuous walking, seats, toilets, the last vehicle point and a shorter route. Dim interiors may require slower movement and time for eyes to adjust. Yuhu's stone lanes and a selected foothill walk need their own assessment. Jade Dragon's cableway sectors and higher routes have distinct elevation and physical demands; neither a village outing nor transport availability establishes personal suitability for them.",
      cost: "Compare the actual room category, complete transfers, guide language, listed admissions, meals and any separately contracted cultural session. A public village walk and a mural-led day are different offers. Specify whether a mountain ticket, scenic transport, Yuhu venue or hosted activity is included. A premium visit should be evident in good interpretation, protected time, a suitable room and thoughtful pacing, rather than an unsupported promise of private religious access.",
    },
    attractions: [
      "A selected public walk in Baisha / 白沙 with regional history explained",
      "Baisha murals / 白沙壁画 through the particular halls open on the date",
      "Dabaoji Palace / 大宝积宫 as a mural interest when visitor access permits",
      "A separately confirmed Dongba cultural conversation with a willing practitioner or specialist",
      "Yuhu / 玉湖 as a distinct village and optional Joseph Rock-related interest",
      "Jade Dragon Snow Mountain scenery from an appropriate public viewpoint, with weather and access considered",
    ],
    stays: [
      {
        label: "Focused visit / keep the Lijiang base",
        advice:
          "Choose the village and a selected cultural subject, with enough time for explanation and lunch. Use the actual hotel-to-venue journey and current access. There is no need to move rooms for a worthwhile Baisha visit.",
      },
      {
        label: "1 useful night / evening and morning time",
        advice:
          "Choose a Baisha room when the setting, comfort and useful hours justify the move. Confirm dinner, breakfast, heating and luggage access. A late arrival and early departure may offer less than a well-paced excursion from an existing Lijiang hotel.",
      },
      {
        label: "2 nights / enjoy a particular property and a full day",
        advice:
          "Allow a coherent cultural day, rest and the room itself. Consider Yuhu or another defined interest separately, rather than fill every hour with village transfers. Longer stays need a stronger room or subject than an assumption that Baisha will always be quiet.",
      },
    ],
    hotelAreas: [
      {
        name: "Baisha village or immediate edge / a specific local stay",
        advice:
          "Pin the room against meals, the public route and vehicle access. Check evening noise, building work, bathroom privacy, heating, stairs and who is available to help. Heritage or courtyard styling alone does not establish the age of the house, exclusive use or full hotel service.",
      },
      {
        name: "Dayan or Shuhe / an excursion from another Lijiang base",
        advice:
          "Choose the exact neighborhood and room for your wider Lijiang days, then plan a complete Baisha outing. Dayan and Shuhe are different locations with their own luggage and noise considerations. A suitable existing base can avoid a short stay becoming repeated packing and hotel moves.",
      },
      {
        name: "A Yuhu or other outlying property / a different setting",
        advice:
          "Choose the named property for its room, meals and time in the landscape. Yuhu is a separate village with stone surfaces and its own approach. Check transfers to Baisha, the mountain route and the departure gateway rather than infer convenience from a shared mountain-view description.",
      },
    ],
    tradeoffs: [
      {
        title: "Mural interpretation needs a selected subject and time to look",
        advice:
          "The Baisha mural tradition brings together several artistic and religious influences rather than one simple style. Ask the guide to identify the actual hall, depicted figures, composition and surviving condition, distinguishing the painting's date from the building's repair history. A short explanation of one section can be more useful than an untranslated list of deities. Which halls can be seen is a current conservation and visitor-access question.",
      },
      {
        title: "Looking at historic art and meeting a Dongba specialist are different experiences",
        advice:
          "A mural venue concerns visible art and its setting. A Dongba cultural session can introduce selected pictographic writing, objects and stories through an appropriate practitioner or specialist. Do not describe every Naxi person as a Dongba priest, every written character as a simple picture, or every session as a religious ritual. The host, subject and consent need to be clear in the proposal.",
      },
      {
        title: "Yuhu adds a distinct question rather than another Baisha lane",
        advice:
          "Yuhu can introduce stone-built village surroundings and a separately assessed Joseph Rock-related interest. Rock was a foreign researcher associated with the region, not a substitute for local voices or the whole explanation of Naxi culture. Confirm any relevant former-residence display and public route before including it. The village and its residents do not constitute an invitation into homes or a guarantee of horse riding.",
      },
      {
        title: "A mountain horizon does not require the highest cableway",
        advice:
          "A Baisha visit can make sense without a high-elevation excursion. A visible peak depends on weather and the actual viewpoint; a clear mountain cannot be guaranteed from a cafe, room or village street. If a cableway or foothill route is proposed, specify the sector, elevation, remaining walking and current operating conditions. Seek individual medical advice when altitude suitability is in question.",
      },
      {
        title: "World Heritage status does not make every facade equally old",
        advice:
          "Baisha is a component of the Old Town of Lijiang World Heritage property. That distinction should not turn every shop, restored facade, contemporary artwork or converted guesthouse into an unchanged historic building. Ask about the actual structure and present use, and keep private courtyards outside a public walk unless an invitation has been agreed.",
      },
    ],
    products: [
      {
        slug: "luxury-yunnan-private-tour",
        label: "Review the 10-day Yunnan journey with a Lijiang and Baisha day",
        reason:
          "The existing route has two Lijiang nights and explicitly includes a Lijiang and Baisha day with Naxi cultural interpretation and a choice of mountain-landscape plans. It suits a wider regional trip rather than a Baisha-only stay. The published outline does not specify mural admission, Yuhu or a Baisha hotel; request those separately when they are priorities.",
        comparison: {
          bestFor:
            "Travelers who want Baisha within a wider Dali, Shaxi, Lijiang and Shangri-La journey.",
          localPlan:
            "Two Lijiang nights; the full cultural day includes Baisha rather than a separate overnight there.",
          importantChoice:
            "Confirm the cultural host and exact visits; mural halls and Yuhu are not automatic inclusions, and the high-elevation option is not compulsory.",
        },
      },
    ],
    articles: [],
    connections: [
      {
        slug: "lijiang",
        advice:
          "Use the Lijiang guide to compare Dayan, Shuhe and outlying rooms and to separate village days from mountain or gorge plans. Baisha can be a focused outing from the selected base. The existing Yunnan journey stays in Lijiang, so a Baisha hotel move or mural-led extension needs explicit agreement.",
      },
      {
        slug: "shaxi",
        advice:
          "Shaxi adds Sideng's market square, valley life and a separately selected Shibaoshan route before Lijiang in the existing Yunnan journey. Its caravan and Buddhist-art subjects differ from Baisha's mural and Naxi context. Protect the full transfer and useful nights rather than treating both as interchangeable old-town photo stops.",
      },
      {
        slug: "heqing",
        advice:
          "Heqing adds a defined Xinhua silvercraft interest and separately permitted wetland choices. It is not part of the published Baisha cultural day. Confirm a willing host and the full road sequence before adding the extension; avoid replacing a cultural conversation with compulsory retail stops.",
      },
      {
        slug: "dali",
        advice:
          "Dali adds Erhai and Bai village interests earlier in the existing route. Compare specific cultural questions and room settings rather than assume all Yunnan village traditions are the same. Keep the full road sequence and the time needed in each base visible when choosing a longer journey.",
      },
      {
        slug: "shangri-la",
        advice:
          "Shangri-La adds a different highland and Tibetan-cultural chapter after Lijiang. Its sleeping elevations and outing demands need individual review. A Baisha village day does not establish acclimatization or make a higher extension suitable for every guest; the complete route should remain adjustable to needs and conditions.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit village walking, while strong sun, cool mornings and wind still matter. Summer rain and cloud may obscure the mountain and affect outdoor plans, but a suitable open cultural interior can remain worthwhile. Winter requires a room-heating and warm-meal check. Holiday visitor levels and construction can change a village's atmosphere. Choose for the art, setting and actual property rather than guarantee uncrowded streets or a clear snow-mountain view in any season.",
    orientation:
      "This is Baisha / 白沙 near Lijiang in Yunnan, a historic settlement and component of the UNESCO-listed Old Town of Lijiang property. It is different from similarly named destinations elsewhere, including Baisha County in Hainan and lakes called Baisha. Dayan, Shuhe, Yuhu and the Jade Dragon mountain access points are separate locations. The page covers a selected Baisha visit and base decision, not every local household, mural hall, trail, religious activity or provider.",
    experiences: [
      "Understand a selected mural subject through clear interpretation and the actual open hall",
      "Walk public village streets with time for Naxi history and present-day context",
      "Enjoy a meal and mountain setting without making a high-elevation outing essential",
    ],
    planningNotes: [
      "Specify the mural venue and admissions if art is the main reason for the visit",
      "Keep a Dongba session distinct from a promised religious ritual",
      "Compare a Baisha room with an excursion from a suitable existing Lijiang base",
    ],
    arrival:
      "Plan from the actual Lijiang hotel, railway station or airport to the named Baisha venue or room. A ticket to Lijiang is not arrival at the village, and the last pedestrian approach can matter with luggage. On a wider Shaxi-to-Lijiang transfer, protect rest and the following cultural day rather than add every village on arrival. Yuhu and each mountain departure point need a distinct local road sequence. Keep essential departure connections away from uncertain mountain returns.",
    gettingAround:
      "Use a manageable public village route and a clear vehicle meeting point, with seats, toilets and a shorter option agreed. A mural interior may involve thresholds, steps, low light and conservation instructions. Use road transport for Yuhu or separate sites rather than assume the whole area is one lane walk. Check weather and the remaining route before any foothill outing. A private vehicle helps between places but cannot create access to private courtyards or closed halls.",
    stayStrategy:
      "Choose a Baisha overnight only when the property, meals and usable hours improve the trip. A courtyard can be appealing but needs heating, hot water, privacy, bed and noise checks. Ask which room has the advertised view and where luggage is dropped. If your existing Lijiang room works well, a day visit can provide the cultural value without packing again. Two nights suit a property-led stay with a coherent full day, not an assumed need to visit every neighboring village.",
    firstTimerNote:
      "Ask what the painting shows, how the guide knows and why that subject belongs here. Then spend time in the village without expecting residents to perform an unchanged past. A short, understood cultural visit can be stronger than an extended circuit of cafes with the same distant mountain backdrop. Neither a specialist session nor a high cableway is necessary unless it serves your interests and is properly arranged.",
    faqs: [
      {
        question: "Is Baisha worth visiting from Lijiang?",
        answer:
          "Yes when mural art, regional Naxi history or a focused village visit interests you. Choose a selected cultural subject and time for a walk and meal. If the main aim is just another mountain-view cafe, compare the full journey with enjoying your existing hotel or another planned day.",
      },
      {
        question: "Is Baisha part of the Old Town of Lijiang World Heritage Site?",
        answer:
          "Yes. Baisha is one component of the UNESCO-listed Old Town of Lijiang property, alongside Dayan and Shuhe. It is a separate visitor location rather than another lane of Dayan, and not a separate World Heritage inscription. Listing does not establish current access to every mural interior.",
      },
      {
        question: "Are the Baisha murals included in every visit?",
        answer:
          "No. A village walk, a cultural session and entry to a particular mural hall are different arrangements. Specify the venue, interpretation and admissions when art is the priority. Current conservation access and opening must be confirmed; the existing Yunnan outline does not promise every hall or mural ticket.",
      },
      {
        question: "Can I photograph the Baisha murals?",
        answer:
          "Follow the current instructions for the specific hall, including any restrictions on cameras, flash and video. Do not assume permission because photographs circulate online. A private guide or ticket does not override conservation rules; allow time to look and understand even when photography is restricted.",
      },
      {
        question: "Should I stay in Baisha or Lijiang Old Town?",
        answer:
          "Choose Baisha for a particular property and village setting when meals, comfort and transfers suit you. Choose an existing Dayan, Shuhe or other Lijiang base for the wider stay if it serves your needs better. A worthwhile Baisha visit does not require moving hotels.",
      },
      {
        question: "How many nights should I stay in Baisha?",
        answer:
          "A focused excursion can be sufficient. One useful night adds evening and morning time; two nights provide a full day and more time at the property. Longer stays need a clear room or local interest rather than an assumption that the village will always be quiet.",
      },
      {
        question: "Is Yuhu the same village as Baisha?",
        answer:
          "No. Yuhu / 玉湖 is a separate village with its own stone-lane walking and optional Joseph Rock-related interest. Confirm the actual site, access and transfers. A Baisha visit does not automatically include Yuhu, a former-residence display, horse riding or a private home.",
      },
      {
        question: "Does Baisha require a Jade Dragon Snow Mountain cableway trip?",
        answer:
          "No. The village and cultural visit can stand on their own. A mountain outing needs its own sector, tickets, elevation, remaining walking and suitability assessment. The existing Yunnan route offers different landscape plans; a high-elevation cableway is not compulsory.",
      },
      {
        question: "Can I meet a Dongba practitioner in Baisha?",
        answer:
          "A session needs an appropriate willing practitioner or specialist, with the subject, setting, language and date confirmed. Cultural explanation is not a promise of a religious ceremony or private household. The existing Yunnan outline includes a Naxi cultural session, but the exact host and location belong in the final proposal.",
      },
      {
        question: "Which published tour includes Baisha?",
        answer:
          "The ten-day private Yunnan journey includes a Lijiang and Baisha cultural day within two Lijiang nights. It connects Dali, Shaxi, Lijiang and Shangri-La. A Baisha hotel, Yuhu visit or specified mural admission is not automatically included; identify those interests when reviewing the proposal.",
      },
    ],
    culturalStory: {
      title: "Look at one painting before trying to explain an entire culture",
      paragraphs: [
        "A selected mural can open a useful conversation about how different artistic and religious traditions met in the region. Begin with what can actually be seen: figures, arrangement, surviving color and the relationship to the hall. Explain what is known and where interpretation is uncertain, without turning several centuries of art into one simple Naxi style. Conservation, restoration and current access are part of the visit's context, not reasons to invent a complete view of closed spaces.",
        "A Dongba cultural conversation is a different kind of encounter, grounded in the knowledge and consent of a particular person. Selected writing, objects and stories can be explained without staging ritual or presenting one speaker as the voice of every Naxi resident. Keep the village's current life visible too: commercial spaces, repaired houses and daily routines belong to today's Baisha. Respect people and private spaces rather than expect an untouched settlement arranged for visitors.",
      ],
    },
    foodStory: {
      title: "Choose a good table for the cultural day",
      paragraphs: [
        "A seated lunch gives the village and mural visit a more comfortable rhythm. Choose the actual kitchen for its strengths and your preferred meal rather than treat a mountain-view cafe as proof of local cooking. Rice, vegetables and suitable meat or tofu dishes can make a balanced meal; ask about preparation, portions and spice. The existing Yunnan day offers a picnic or selected Baisha lunch, so confirm which option fits the weather, chosen visits and guests.",
        "For a local overnight, settle dinner and breakfast arrangements before arrival, especially when a small property has limited staffing. Check stocks, pork, soy, wheat, dairy and shared preparation as relevant; a vegetable dish may still contain meat stock. Seasonal mushroom dishes need reliable sourcing and preparation. A private-home meal, cooking lesson or courtyard banquet is a separate hosted activity, not something implied by booking a village room or cultural walk.",
      ],
    },
    itinerary: [
      {
        day: "Start of a focused visit",
        title: "Choose the cultural question before the street circuit",
        description:
          "Reach the selected venue from the actual hotel and agree the day's priorities. If murals are the purpose, protect the open hall and interpretation window. Introduce the heritage relationship with Dayan and Shuhe without treating all three as one pedestrian area.",
      },
      {
        day: "Village and lunch",
        title: "Keep time for the place beyond the painting",
        description:
          "Walk selected public streets, distinguishing older fabric, repair and contemporary use. Take a seated meal or a properly arranged picnic when conditions support it. A Dongba session is included only through the actual agreed host and location, with no automatic ceremony or house access.",
      },
      {
        day: "Optional separate interest",
        title: "Choose Yuhu or a suitable landscape plan",
        description:
          "Add Yuhu only with its own route and access plan, or choose an appropriate public landscape interest. A higher mountain sector requires its own suitability and operating checks. If culture is the priority, keep the afternoon for explanation or rest instead of a rushed cableway objective.",
      },
      {
        day: "Return / useful overnight",
        title: "Review the wider route and real inclusions",
        description:
          "Return to the chosen Lijiang base or enjoy a separately booked Baisha room with dinner arranged. Review the ten-day Yunnan itinerary for its existing Baisha day. The final proposal should state the host, mural venue if included, admissions, room location, transport, meals and any optional extension.",
      },
    ],
  },
};
