import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/gannan.svg",
  alt: "Original Gannan route-planning schematic comparing a Xiahe-focused stay, a Langmusi chapter and a separately chosen Zhagana walking base; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const gannanGuide: ExpandedDestination = {
  id: "gannan",
  name: "Gannan",
  region: "northwest",
  kicker: "Choose a regional journey, not a collection of roadside names",
  description:
    "Plan Gannan around distinct Xiahe, Langmusi and Zhagana chapters, with clear monastery, walking, hotel and gateway decisions instead of an overloaded loop.",
  stay: "4–6 regional nights for selected bases; gateway and onward nights additional",
  bestFor:
    "Tibetan Buddhist interpretation, mountain-village walks and selective plateau road journeys",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["langmusi", "xiahe", "lanzhou", "zoige", "songpan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Gannan Travel Guide: Xiahe, Langmusi & Route Planning",
    seoTitle: "Gannan Guide: Xiahe, Langmusi & Where to Stay",
    seoDescription:
      "Choose a Gannan itinerary with Xiahe, Langmusi or Zhagana: compare 4–6 nights, hotel bases, walking, altitude and full road journeys from Lanzhou.",
    answer:
      "Gannan (甘南) is Gannan Tibetan Autonomous Prefecture in southern Gansu, outside the Tibet Autonomous Region. It is a large region, not a single town or scenic park. Xiahe is the base for Labrang Monastery; Hezuo is the prefectural capital; Langmusi is a border-town destination spanning Gansu and Sichuan; and Zhagana is a distinct mountain-village landscape in Diebu County. Choose two meaningful chapters rather than assume every famous place belongs in one short loop. Four to six regional nights can support a selective journey when the complete road and sleeping profile suit the guests. Gateway nights, a longer Zhagana stay and onward Sichuan travel need their own time. Gannan's geography does not provide blanket clearance for every road, religious site or traveler.",
    stayAnswer:
      "A focused two- or three-night Xiahe visit is worthwhile without claiming to cover all Gannan. For a regional journey, four nights might give two nights at each of two selected bases, while five or six allow a distinct third chapter or deeper time at fewer bases. Actual arrival and departure roads determine what remains useful. Adding both Langmusi and Zhagana needs more than a few photo stops between long drives. Count Lanzhou and any Zoige or Songpan nights separately. More nights improve time and flexibility, not guaranteed acclimatization or access.",
    hotelAnswer:
      "Choose actual overnight bases before comparing hotel categories. Xiahe supports Labrang; Langmusi supports the named religious and valley routes you select; a specific Zhagana property supports its own village or walking chapter. Hezuo can serve a purposeful city interest or practical overnight when the route benefits. For every property, assess heating, hot water, bathroom, quiet, stairs, meals, vehicle access and actual sleeping elevation. A decorative lobby, mountain image or luxury label does not establish the room standard. Moving hotels only earns its cost when the next location provides useful time or a distinctly better experience.",
    sightseeingQuestion: "Should I choose Xiahe, Langmusi, Zhagana or Hezuo?",
    sightseeingAnswer:
      "Choose Xiahe for Labrang's specific religious and learning history. Choose Langmusi for a separately planned border-town chapter, identifying the monastery and which side of the provincial boundary it occupies. Choose Zhagana for a selected mountain-village route with walking and current visitor arrangements assessed. Choose Hezuo when its Milarepa Pavilion or another defined city interest justifies the stop. These are different subjects and bases. One thoughtfully interpreted monastery stay and one contrasting landscape chapter can offer more than a hurried circuit of every name.",
    visitorResources: [
      {
        label: "Gannan prefecture government",
        href: "https://www.gnzrmzf.gov.cn/",
        scope:
          "Official regional context and dated public notices, mainly in Chinese. Use the responsible county, institution and provider for current roads, visitor arrangements and services. Information about the prefecture does not confirm every monastery interior, valley path or foreign-guest hotel arrangement.",
      },
      {
        label: "Gansu provincial government",
        href: "https://www.gansu.gov.cn/",
        scope:
          "Provincial context and public-service notices. Gannan is geographically separate from Tibet Autonomous Region, but current traveler eligibility and specific route conditions still need checking. A Gansu source does not establish arrangements on the Sichuan side of Langmusi or a farther cross-provincial continuation.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General guidance on ascent and altitude illness, not individual medical clearance. Review the actual sleeping nights and highest road and walking points with appropriate qualified advice. A gradual-looking map, short walk or hotel oxygen provision does not establish suitability for the complete journey.",
      },
    ],
    serviceScope:
      "A useful proposal names every base and room, complete vehicle days, driver and guide roles, selected religious sites, actual walking routes, admissions, meals and change arrangements. Clarify the role of any institution's visitor guide separately from the private tour guide. Establish current eligibility, local access and check-in arrangements for the actual travelers and dates. Ceremonies, religious participation, specialist teaching, private homes, riding, longer hikes and drone use require separate appropriate arrangements where available. A private driver cannot authorize every road or restricted space, and no regional guide promises universal access.",
    routeAdvice:
      "Begin with the exact Lanzhou arrival or another verified gateway, then choose a focused Xiahe chapter and only the additional bases that advance the trip. A route toward Langmusi and onward Zoige or Songpan creates a different journey from a return to Lanzhou. Zhagana needs its own road and walking decision; do not add it merely to close a circle on a map. There is no matching published Gannan tour recommended here. Share dates, actual gateways, previous sleeping elevations, walking needs, room expectations and cultural interests for a tailored sequence with explicit inclusions.",
    practicalPlanning: {
      timing:
        "Use complete door-to-door road days, including meals, toilets, current conditions and final check-in. Keep essential monastery visits off uncertain arrival windows. A festival can affect demand and visitor arrangements; a normal tour booking does not guarantee participation or an unobstructed view of a ceremony. Summer green landscapes, mountain light and cloud are variable. Retain an alternative to a wet walk or unavailable interior, and avoid fixing a tight flight after a long idealized return drive.",
      walking:
        "Assess monastery thresholds, steps and standing separately from village lanes, a valley path or a mountain hike. At Zhagana, an entrance-area panorama and a longer route beyond the settlements are different physical commitments. At Langmusi, name the actual temple and any separate valley walk. Agree pickup, toilets, rest and a shorter worthwhile option. Most regional bases involve substantial altitude; gentle-looking pasture and limited walking do not remove that exposure. Review symptoms appropriately rather than continue higher to preserve the route.",
      cost: "Compare the full base sequence, room categories, guide language, vehicle and driver arrangements, named admissions, institution-led interpretation and meals. Remote stays may have different facilities from a city hotel. A lower headline daily price can conceal extra driving or room changes; a higher one should deliver clear benefits in rest, interpretation and useful time. Specify cancellation and substitution terms for road, site or property changes. Exclusive religious access, guaranteed hosts and a treatment for altitude concerns are not benefits to infer from a premium quote.",
    },
    attractions: [
      "Labrang / Labuleng Monastery in Xiahe, with public and interior visits distinguished",
      "Sangke as a selected landscape outing within a Xiahe chapter",
      "Langmusi, with the Gansu or Sichuan monastery and actual visitor route named",
      "Zhagana / Zagana in Diebu County as a separately planned village-and-mountain subject",
      "Hezuo's Milarepa Pavilion / Milariba Foge when current visitor access supports a defined interest",
      "Selected lawful grassland or mountain-road stops with safe parking and a clear purpose",
      "Zoige / Ruoergai in Sichuan only as a separate onward chapter",
    ],
    stays: [
      {
        label: "2–3 Xiahe nights / a focused introduction",
        advice:
          "Give Labrang a full cultural day, then add a distinct Sangke or town interest when time and guest needs support it. This is a valid focused trip, not an incomplete version of a compulsory grand circuit. Other Gannan places require separate time rather than an expanded attraction list.",
      },
      {
        label: "4 regional nights / two selected bases",
        advice:
          "Consider two nights at each of two purposeful bases when the approach and onward journeys work. Protect actual full days instead of dividing the time among four hotels. Gateway travel is additional, and the complete sleeping and road profile still needs individual assessment.",
      },
      {
        label: "5–6 regional nights / depth or a distinct third chapter",
        advice:
          "Use the extra time for another genuinely different subject or more flexibility at fewer bases. A longer Zhagana walking interest or onward Sichuan route can require more. Duration alone does not establish that every site, road or guest is suitable, and a slower cultural stay may be better than adding more highland mileage.",
      },
    ],
    hotelAreas: [
      {
        name: "Xiahe / a Labrang-led cultural base",
        advice:
          "Compare actual rooms near the monastery with a modern town property, including noise, heating, bathroom, stairs, dinner and pickup. Monastery proximity does not grant early or private interior access. Give the base useful time rather than leave immediately after the arrival night.",
      },
      {
        name: "Langmusi / name the property and provincial side",
        advice:
          "Use the full Chinese address and intended religious sites. Check quiet, heating, hot water, meals, vehicle access and the actual sleeping elevation. A general Langmusi listing does not establish which monastery is convenient or provide access to every valley route.",
      },
      {
        name: "Zhagana / a specific village-area stay",
        advice:
          "Choose by the intended walk and actual room rather than a mountain photograph alone. Assess final vehicle approach, stairs, luggage, warmth, bathroom, dinner and current visitor transport. Construction or visitor activity can change the feel of a location; a remote setting is not proof of silence or resort service.",
      },
      {
        name: "Hezuo / a defined city or road-stage choice",
        advice:
          "Consider it for a specific cultural subject, practical services or a useful break in the route. It is not interchangeable with staying beside Labrang or a Zhagana walking start. Judge the room and complete driving pattern rather than use the prefectural-capital label as a universal base.",
      },
    ],
    tradeoffs: [
      {
        title: "Gannan is a region, not one compact sightseeing circuit",
        advice:
          "A short Xiahe visit and a multi-base regional journey answer different interests. Start with the reasons to go, then allocate nights and complete road days. A list containing Labrang, Langmusi, Zhagana and Hezuo is not proof that a brief trip can do them justice. Avoid treating every stop as compulsory simply because it appears on a popular loop map.",
      },
      {
        title: "Langmusi crosses a provincial boundary",
        advice:
          "The commonly used destination name covers a border-town setting with distinct religious institutions in Gansu and Sichuan. Sertri and Kirti / Ge'erdi are different monastery names and visitor decisions, not two translations for one universally accessible complex. Confirm the exact site, side, interpretation and current access before comparing itineraries.",
      },
      {
        title: "Zhagana sightseeing and extended hiking are different activities",
        advice:
          "A selected public village route or panorama is not the same as a long mountain hike. Identify the actual start, finish, surfaces, elevation, weather, route status and support. Do not use a short visitor-area image to sell an easy day that contains an unassessed climb. Choose a worthwhile shorter alternative and respect farming, private property and closed paths.",
      },
      {
        title: "Sleeping elevations vary across the itinerary",
        advice:
          "Xiahe town is roughly 2,900 meters, while Langmusi and Hezuo are around 3,300 meters, with property and route variation. Zhagana's village and mountain routes span different elevations. Record each overnight and daytime high point instead of using one reassuring regional figure. Extra nights, fitness and oxygen-equipped rooms do not guarantee acclimatization; individual advice and a flexible response matter.",
      },
      {
        title: "Tibetan cultural geography and Tibet travel arrangements are different questions",
        advice:
          "Gannan lies in Gansu, outside the Tibet Autonomous Region. Do not copy the TAR permit process onto every Gannan visit, or assume the distinction means every local route is unrestricted for every traveler. Check the actual documents, dates, areas and hotels. A future continuation into TAR would need its own applicable organized arrangements and authorization.",
      },
      {
        title: "Culture does not require privileged access",
        advice:
          "Labrang, a Langmusi institution and Hezuo's pavilion deserve different explanations. Public access, interiors, worship, a private lesson and a household invitation have separate boundaries. A well-informed guide can provide depth without promising ceremonies or entry to private life. Ask before portraits and avoid marketing sensitive funerary practices as visitor entertainment.",
      },
      {
        title: "A return loop and a Sichuan continuation serve different priorities",
        advice:
          "Returning to Lanzhou can suit actual flights and a selected Gansu journey. Continuing toward Zoige or Songpan can make sense when their distinct landscapes, higher profile and gateway connections deserve their own nights. Compare both complete routes before deciding. A one-way line is not inherently gentler, and closing a circle is not inherently more efficient.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "langmusi",
        advice:
          "The Langmusi guide separates Gansu-side Sertri from Sichuan-side Kirti / Ge’erdi and explains the actual room and valley-walking decisions. Give the town a focused local day when its distinct subject earns the road and nights. The regional Gannan route does not automatically include both institutions, a long hike or private religious access.",
      },
      {
        slug: "xiahe",
        advice:
          "Use the Xiahe guide for the detailed Labrang and Sangke choices, town hotel areas and a focused two- or three-night chapter. This regional guide helps decide what else, if anything, to add. A wider Gannan route should deepen the trip rather than replace Xiahe's useful local time with extra driving.",
      },
      {
        slug: "lanzhou",
        advice:
          "Lanzhou provides a distinct city stay and a common gateway, with Zhongchuan airport and the actual railway stations requiring different transfers. Give the city its own purpose and count the whole road to the first regional base. A gateway night is not automatically a Gannan sightseeing day or proof of altitude readiness.",
      },
      {
        slug: "zoige",
        advice:
          "Zoige / Ruoergai in Sichuan adds distinct Huahu wetland and Tangke Yellow River decisions, often at higher elevations. Give it appropriate nights, actual visitor routes and a separate room assessment. A Langmusi stop does not by itself complete a Zoige landscape chapter or authorize every wetland route.",
      },
      {
        slug: "songpan",
        advice:
          "Songpan adds an old-town chapter and potential regional transport options after a separately planned northern Sichuan journey. Use the actual operating rail service and full station transfer, with walking and higher road sections assessed. It is not a quick local gateway for every Gannan base merely because both appear on one map.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The warmer part of the year is a useful starting point for combining religious history with green grassland or village walking, while summer rain and cloud can affect paths and mountain views. Popular holiday periods can increase room demand and traffic. Spring and autumn bring different colors, temperatures and operating conditions; winter needs a distinct cold-weather and heating assessment. Religious calendars can shape access and demand, but a festival is not an automatically included performance. Choose the actual bases and interests, then assess the season for each rather than assign one perfect month to all Gannan.",
    orientation:
      "Gannan Tibetan Autonomous Prefecture is in southern Gansu, with its capital at Hezuo. Xiahe, Luqu's Gansu-side Langmusi area and Diebu's Zhagana are distinct county-level route decisions. Langmusi also extends into Sichuan, and Zoige farther along a possible journey is not a Gannan county. The regional name identifies a broad planning context, not a hotel district. Use full Chinese addresses and actual visitor-site names to make the route and responsibilities clear.",
    experiences: [
      "Understand Labrang through a focused Xiahe stay with appropriate interpretation",
      "Choose a distinct Langmusi or Hezuo religious-history subject rather than repeat generic temple stops",
      "Give a selected Zhagana or other landscape route its real walking time and suitable base",
    ],
    planningNotes: [
      "Choose two purposeful chapters before adding a third base or closing a loop",
      "Record actual sleeping elevations, complete road days and current visitor arrangements",
      "Separate public cultural access from hosts, religious participation and specialist hiking",
    ],
    arrival:
      "Begin with the actual Lanzhou airport or station, or a separately verified gateway that fits the selected route. Lanzhou Zhongchuan airport, Lanzhou West and Lanzhou station are different pickup points. Any Gannan Xiahe airport proposal needs an actual operating dated flight and full final transfer. A Songpan-area rail arrival is another substantial cross-region plan, not an arrival in every Gannan town. Compare the full ascent, meals and usable first evening rather than select by a gateway name alone.",
    gettingAround:
      "Arrange named base-to-base road days with safe stopping, driver hours, meals and toilets allowed. Internal site transport and walking may still apply after the car transfer. A local visit should have a clear subject, actual access and enough time for explanation. Avoid roadside promises of private pastoral encounters or shortcuts through closed land. Weather, road or guest needs can change the order, so keep a practical alternative without rushing the next drive.",
    stayStrategy:
      "For a focused visit, two or three Xiahe nights may be enough. For a regional journey, four to six nights can support selected bases when full transfers fit, with longer or additional chapters assessed separately. Prioritize sleep, warmth, bathroom, meals and vehicle access at each property. Moving every night is not automatically more comprehensive, and staying in one town does not make every distant interest local. Choose the pattern that provides actual depth and a suitable overall ascent.",
    firstTimerNote:
      "Ask which two experiences justify the regional journey, how many full days remain at their bases and what the alternative is if a path or religious interior is unavailable. Then compare the complete sleeping and road sequence. Clear answers reveal more about the quality of a Gannan proposal than a large collection of temple and grassland names or an unsupported luxury label.",
    faqs: [
      {
        question: "Where is Gannan, and is it in Tibet?",
        answer:
          "Gannan Tibetan Autonomous Prefecture is in southern Gansu, outside the Tibet Autonomous Region. Its Tibetan cultural setting does not make TAR permit procedures automatically applicable. Current eligibility, specific routes and hotel arrangements still need checking for the actual travelers, dates and documents.",
      },
      {
        question: "Is Xiahe enough for a first Gannan trip?",
        answer:
          "A focused two- or three-night Xiahe stay can be worthwhile for Labrang and a distinct local contrast. It does not cover all Gannan, but you do not need a grand circuit to have a meaningful visit. Add other bases only when their different subjects and complete road journeys justify more time.",
      },
      {
        question: "How many days do I need for a Gannan itinerary?",
        answer:
          "Four to six regional nights can support a selective multi-base trip when the arrival and departure roads fit. Four might allow two nights at each of two bases; five or six can add depth or another distinct chapter. Gateway nights, extended hiking and onward Sichuan travel need separate time.",
      },
      {
        question: "Are Xiahe, Langmusi and Zhagana close enough for one base?",
        answer:
          "Do not assume so. They are distinct destinations with substantial road legs and different reasons to stay. Use actual hotel addresses and full door-to-door days. Repeated distant return outings can remove the time intended for interpretation, walking and rest.",
      },
      {
        question: "Is Langmusi in Gansu or Sichuan?",
        answer:
          "The commonly used destination name spans the provincial boundary. Name the actual monastery and hotel: Gansu-side Sertri and Sichuan-side Kirti / Ge'erdi are different institutions and visitor decisions. One general Langmusi label does not confirm both sites or access to every nearby valley.",
      },
      {
        question: "Is Zhagana suitable for travelers who do not want a long hike?",
        answer:
          "A selected village-area or panorama visit can be researched separately from extended mountain hiking. Confirm the current route, visitor transport, steps, surfaces and shorter option. A mountain image does not establish accessible viewing, and a short walk still involves the actual elevation and weather.",
      },
      {
        question: "What altitude should I expect in Gannan?",
        answer:
          "There is no single regional figure. Xiahe town is roughly 2,900 meters and Langmusi or Hezuo around 3,300 meters, with route and property variation. Record every sleeping location and higher road or walking point. Obtain appropriate individual advice; extra nights and hotel oxygen do not guarantee acclimatization.",
      },
      {
        question: "Can I combine Gannan with Zoige and Songpan?",
        answer:
          "It can be researched as a longer cross-provincial journey with its own nights, actual roads, gateways and altitude review. Zoige wetlands and Songpan old town add distinct subjects. Do not squeeze them into a nominal Gannan day trip or assume a map line establishes an easy or suitable route.",
      },
      {
        question: "Does a private Gannan tour include ceremonies or family visits?",
        answer:
          "Not automatically. Public grounds, interiors, religious participation, personal teaching and household invitations have separate access and consent requirements. Identify the actual institution or willing host and confirmed service. Paying for a private guide does not buy unrestricted access to religious or private life.",
      },
    ],
    culturalStory: {
      title: "Let different institutions and places tell different stories",
      paragraphs: [
        "Gannan's religious and cultural settings reward specificity. Labrang's learning traditions, the distinct Langmusi institutions and Hezuo's Milarepa subject should not receive the same generic explanation because they share a broad regional identity. A guide should name the actual place, explain what guests can see and distinguish documented history from a popular story. Landscape interpretation can likewise connect a village, pasture and road to present livelihoods instead of treating the region as a timeless backdrop.",
        "Religious activity and private life have boundaries that a good visit respects. Ask before portraits, follow hall-specific photography instructions and avoid interrupting prayer or work. Funerary practices are not a sightseeing performance. A scholarly conversation, household meal or craft visit needs willing participants and a defined arrangement, not an assumption based on the word authentic. Clear interpretation and time to listen can create depth without claims of privileged access.",
      ],
    },
    foodStory: {
      title: "Plan reliable meals across changing bases",
      paragraphs: [
        "A multi-base journey needs actual meal arrangements, especially on long driving days or at rural properties. Noodles, a suitable meat or tofu preparation, vegetables and warm dishes can offer practical choices where available. Ask the specific kitchen about local specialties, portions and ingredients rather than assume every community serves one standard Tibetan menu. Agree dinner and any early breakfast before arrival; a good meal at a sensible hour is part of the quality of the route.",
        "Clarify dairy, wheat, meat stock, nuts, sauces and shared preparation where relevant. Tea and yogurt preparations vary, and a vegetarian-looking dish may include animal stock. Serious allergies, halal requirements or strict diets need confirmed kitchen capacity and a workable alternative between bases. A hosted meal is a separate consented service, while alcohol should remain optional. Food and warm drinks support comfort; they should not be marketed as prevention or treatment for altitude illness.",
      ],
    },
    itinerary: [
      {
        day: "Regional nights 1–2 / a focused Xiahe chapter",
        title: "Give Labrang one full cultural day",
        description:
          "Arrive through the separately planned gateway road, keep the first evening modest and use the full local day for permitted public and interior routes as available. Allow interpretation, a proper meal and rest. Gateway city nights are additional to this regional outline.",
      },
      {
        day: "Regional nights 3–4 / a selected second base",
        title: "Choose a different subject rather than another rushed stop",
        description:
          "Move through the confirmed road sequence to Langmusi or another researched base. Protect a full local day for the named institution or landscape route, with actual walking, meals and pickup assessed. The border-town name does not guarantee access to every monastery or valley.",
      },
      {
        day: "Optional regional nights 5–6 / depth or a third chapter",
        title: "Add Zhagana only when it earns its road and nights",
        description:
          "Choose a specific village-and-walking plan with appropriate room, current visitor arrangements and a shorter alternative, or remain longer at fewer bases. These nights are not a promise to include every Gannan highlight, extended trek or private host.",
      },
      {
        day: "Departure or separately planned Sichuan continuation",
        title: "Count the real onward day",
        description:
          "Return to the actual gateway or continue toward a separately assessed Zoige or Songpan stay. Review the complete driving, sleeping profile and current conditions. This framework is illustrative, not a published package, medical ascent plan or guarantee of access, rooms or cultural encounters.",
      },
    ],
  },
};
