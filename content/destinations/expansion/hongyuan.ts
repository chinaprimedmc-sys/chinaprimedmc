import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/hongyuan.svg",
  alt: "Original Hongyuan planning schematic comparing Moon Bay, a season-dependent Emutang flower outing and county-town or grassland accommodation; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const hongyuanGuide: ExpandedDestination = {
  id: "hongyuan",
  name: "Hongyuan",
  region: "southwest",
  kicker: "A grassland stay should offer more than a flower photograph",
  description:
    "Plan Hongyuan around Moon Bay, a carefully timed Emutang visit and a comfortable plateau base, comparing seasons, actual room facilities and a wider Sichuan route.",
  stay: "2 nights for a focused stay; 3 for a distinct second day or slower pace",
  bestFor: "Open grassland, river meanders and a considered plateau stay",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["zoige", "songpan", "chengdu"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Hongyuan Travel Guide: Grassland, Moon Bay & Where to Stay",
    seoTitle: "Hongyuan Guide: Grassland, Moon Bay & Hotels",
    seoDescription:
      "Plan Hongyuan with Moon Bay, Emutang's changing flower season, town versus grassland stays, altitude and full road or airport transfers in northern Sichuan.",
    answer:
      "Hongyuan in northern Sichuan suits travelers drawn to broad pasture, river bends and an unhurried highland stay. Moon Bay is a focused landscape visit; Emutang's flowers are a separate seasonal interest whose timing varies. Two nights give one full day when the approach suits your group. The county town, Qiongxi, is around 3,500 meters high, so assess the full ascent and sleeping plan. Zoige is a different destination, requiring additional road time and its own useful days.",
    stayAnswer:
      "Allow two nights when you want a clear grassland chapter rather than a brief roadside stop. That leaves one full day for Moon Bay and a selected local interest, or an Emutang-led outing when current conditions justify it. Three nights provide two distinct days, useful weather flexibility or time at a property whose setting and facilities you genuinely want. One night can work within a suitable longer route, but late arrival and early departure provide little Hongyuan experience. More nights do not guarantee acclimatization; review the complete road and sleeping profile before fixing the sequence.",
    hotelAnswer:
      "Compare a Qiongxi town hotel with a specifically named grassland lodge or tented property, and an Emutang-area stay only when its location serves the actual trip. A town base may provide more practical dining and dependable room options, while an outlying stay can offer direct landscape time. Ask what the booked room actually has: heating, bed, private bathroom, hot water, power, quiet, staff support and meals. Confirm the sleeping elevation and road approach. Grassland, glamping and luxury are marketing categories unless the facilities and service are clear. For a short visit, a warm room and a well-planned landscape day can be the better premium choice.",
    sightseeingQuestion: "Should I choose Moon Bay, Emutang or a slower grassland stay?",
    sightseeingAnswer:
      "Choose Moon Bay for a defined river-meander view and a manageable visitor route, with the actual viewpoint and remaining walking checked. Choose Emutang when its current flower conditions, access and the drive fit the trip; early-summer imagery should not determine a visit in another season. Choose a slower stay when the particular property offers a rewarding setting and real comfort without constant transfers. These are different priorities. A two-night trip usually benefits from one main subject, while a three-night stay can separate them when the second day adds something distinct.",
    visitorResources: [
      {
        label: "Aba prefecture government",
        href: "https://www.abazhou.gov.cn/",
        scope:
          "Regional administrative, environmental and public-service background, mainly in Chinese. Confirm dated roads, local visitor conditions, Moon Bay and Emutang operation with the responsible authority and venue. General descriptions and historic flower photographs do not establish current bloom, camp facilities or access to pasture.",
      },
      {
        label: "Sichuan provincial government",
        href: "https://www.sc.gov.cn/",
        scope:
          "Provincial background and public notices. An airport or road-development reference is not confirmation of a dated flight, a particular journey time or a property's service standard. Check the operating carrier and actual route before using Aba Hongyuan Airport in a proposal.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General high-altitude travel guidance, not individual medical clearance. Review the full ascent and sleeping elevations with an appropriately qualified clinician where needed. Flat-looking grassland, a flight, a private car or hotel oxygen equipment does not remove altitude risk.",
      },
    ],
    serviceScope:
      "A tailored proposal should name the room, overnight base, sleeping elevation, full arrival route, selected landscape visits, guiding language, admissions and any internal transport. Specify meals, toilets, remaining walking and a workable alternative for unsuitable weather or changed operation. Horse riding, a hosted pastoral visit, specialist photography, drone use and religious interiors need their own current permission and confirmed service. Private transport does not permit driving across pasture, crossing fences or entering homes. A campsite's name does not establish private grassland or international resort standards. No particular bloom, sunset, festival or family encounter is promised by this guide.",
    routeAdvice:
      "Use Hongyuan for a focused highland stay, adding Zoige for a different wetland and Yellow River subject or Songpan for town history. Moon Bay and Tangke's First Bend are separate landscapes. Share your dates, previous sleeping elevations, gateways, walking needs and room expectations for a tailored northern Sichuan route. We can assess whether each additional overnight adds enough variety to justify the drive, with seasonal flower expectations checked against the actual travel period.",
    practicalPlanning: {
      timing:
        "Make the day work from the actual room, not a county label. Include the full road approach, entry and visitor transport if applicable, the selected viewpoint or walk, lunch and a comfortable return. Early-summer flowers change with weather and location; request current conditions close to travel before making them the main reason for coming. Summer can also bring rain, storms and busy popular sites. For evening light, consider wind, cloud, descent and dinner together. A worthwhile landscape day should still work when sunset is obscured.",
      walking:
        "An open horizon can disguise wet ground, channels and the effort of walking at elevation. Use the permitted Moon Bay or Emutang route and establish its surface, length, steps, seating and toilets. A scenic vehicle does not necessarily reach the viewpoint, and a boardwalk is not automatically suitable for every wheelchair. Keep a shorter option that still offers a rewarding visit. Stay off fragile or waterlogged ground, respect fences and give livestock room. Concerning altitude symptoms need appropriate assessment rather than another viewpoint or a higher hotel to finish the schedule.",
      cost: "Compare the exact room and dates, dependable facilities, meals, full vehicle sequence, guide hours, admissions and any scenic transport. A camp may charge for setting while offering less warmth, privacy or service than a town hotel. Decide which compromises the guest accepts before calling it an upgrade. A premium can be better spent on a suitable room, a knowledgeable guide and fewer rushed transfers. Set out the effect of weather, bloom or operating changes on the actual services and cancellation terms; a flower-led visit is more than an entrance ticket.",
    },
    attractions: [
      "Moon Bay / Yueliangwan for a specifically selected river-meander viewpoint",
      "Emutang / E'mutang as a separate flower-landscape outing when current conditions support it",
      "A selected grassland walk from lawful access points, with local permission where required",
      "Qiongxi county town as a practical room and meal base rather than an assumed historic attraction",
      "Waqie / Wache prayer-flag and stupa setting when the actual visitor arrangement is appropriate",
      "A named grassland property's setting and facilities as a distinct reason to stay",
      "Zoige or Songpan as separately planned onward chapters",
    ],
    stays: [
      {
        label: "2 nights / a focused landscape stay",
        advice:
          "Choose the main reason for visiting and a room that supports the real arrival and departure. Give Moon Bay or an Emutang-led day a useful window with meals and rest. Add another stop only if it makes the day better, rather than requiring several distant sights to justify the stay.",
      },
      {
        label: "3 nights / a second subject or time at the property",
        advice:
          "Separate the flower-led outing from a river-and-grassland day when both are worthwhile. Alternatively use the extra time to enjoy a genuinely comfortable landscape base. Review what the guest will do if rain changes the outdoor plan; additional nights should have a purpose beyond repeating the same view.",
      },
      {
        label: "A wider plateau route / avoid interchangeable grassland nights",
        advice:
          "Assign Hongyuan, Zoige and any Songpan stay different roles, with complete road legs and actual sleeping elevations. It may be better to choose one grassland base well than change hotels every night. A sequence of similar-looking destinations does not itself establish a safe ascent or a rewarding trip.",
      },
    ],
    hotelAreas: [
      {
        name: "Qiongxi / the county-town base",
        advice:
          "Compare heating, hot water, bathroom, noise, meal options and vehicle access. This can be a dependable base for a short landscape stay without promising a grassland view from every room. Use the exact address and booked room, then assess the actual Moon Bay or Emutang road plan.",
      },
      {
        name: "A named grassland lodge or camp / the setting is part of the stay",
        advice:
          "Request current room and bathroom details, heating method, power, staff availability, meal times and wet-weather access. Check what guests can do on site and where walking is allowed. A photograph of a tent beside flowers does not establish private land access, bloom during the stay or comfort on a cold night.",
      },
      {
        name: "Emutang-area accommodation / a specific seasonal brief",
        advice:
          "Choose only when the actual property, flower conditions and wider road sequence justify the location. Establish service dates, room facilities, meals and what remains rewarding outside the main bloom. Do not accept a broad scenic-area label as proof that a room sits beside the currently accessible flower route.",
      },
      {
        name: "An airport-focused room / a transport decision",
        advice:
          "Use only when a real flight and the complete transfer justify it. Confirm where the room actually is, not merely that the description mentions Aba Hongyuan Airport. A short road journey after landing does not make a rapid arrival onto the plateau medically suitable. Protect meals, rest and the next day's plan.",
      },
    ],
    tradeoffs: [
      {
        title: "Moon Bay and Tangke's Yellow River panorama are different experiences",
        advice:
          "Hongyuan's Moon Bay is associated with a meander of the Bai River, also rendered White River, within the Yellow River drainage. Tangke's well-known First Bend of the Yellow River is a separate Zoige visit. Name the river and actual viewpoint rather than sell both as one attraction. A photograph of a broad bend is not enough to identify the place or the route.",
      },
      {
        title: "Emutang needs current flower conditions, not a fixed annual promise",
        advice:
          "Early summer, often around June into July, is a starting point for researching flowers rather than a guaranteed peak on a particular date. Weather, elevation and the selected area change what is visible. Check recent conditions and actual access, then retain a landscape alternative. Outside the flower season, choose Hongyuan for other reasons instead of describing a dormant meadow as a missed summer spectacle.",
      },
      {
        title: "Choose Hongyuan or Zoige through the actual experience",
        advice:
          "Hongyuan can serve a Moon Bay, Emutang or particular-property brief. Zoige adds Huahu wetland and Tangke's distinct river panorama. Both share a wider plateau setting, so staying in each is worthwhile only when the added experiences justify roads and hotel changes. A shorter journey can select one thoughtfully without treating the other as a compulsory checkbox.",
      },
      {
        title: "Pasture is working land, not an unlimited recreation ground",
        advice:
          "A broad open field may be grazed, fenced, wet or ecologically sensitive. Use designated routes and obtain local permission where needed, keeping vehicles on lawful roads. Do not flatten flowers for photographs or approach livestock for a staged encounter. The appeal comes from observing a living landscape, not assuming remoteness makes every piece of land available to visitors.",
      },
      {
        title: "Waqie deserves respectful interpretation and an actual access plan",
        advice:
          "Prayer flags and stupas have religious meaning beyond their visual effect. Identify the specific site, current visitor arrangements and any photography rules, and keep worship or private practice separate from sightseeing. A stop does not include a ceremony, teaching or access to every building. A brief respectful visit may be appropriate when it adds understanding to the route.",
      },
      {
        title: "Flying saves a road leg but changes the ascent question",
        advice:
          "Aba Hongyuan Airport is a high-elevation gateway. An actual flight can alter useful time, but it also changes how quickly a traveler reaches the plateau. Compare the dated service, terminal, hotel transfer, contingency and sleeping profile rather than assume flying is always the gentler option. A regional airport on a map is not evidence of a convenient operating flight for your dates.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "zoige",
        advice:
          "Zoige / Ruoergai adds Huahu wetland and Tangke's Yellow River landscape as distinct visitor subjects. Compare the full roads and room sequence before deciding whether both counties deserve nights. Tangke's First Bend and Hongyuan's Moon Bay are different places; allow time for both only if the two landscapes add enough variety to justify the road.",
      },
      {
        slug: "songpan",
        advice:
          "Songpan adds an old-town chapter and a different range of regional arrival choices. Use the actual station and hotel, with the complete road and sleeping-elevation profile reviewed. A Songpan stop should retain useful town time rather than become a late arrival between two long grassland transfers.",
      },
      {
        slug: "chengdu",
        advice:
          "Chengdu adds Sichuan food, neighborhoods and a separately planned panda visit. Compare the actual mountain-road sequence with a verified flight if available, including terminals and hotel transfers. A Chengdu return is a real travel chapter, not an automatic inclusion in every northern Sichuan stay.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Match the date to the reason for coming. Early summer is a useful starting point for an Emutang flower enquiry, but current conditions determine the actual display. Summer grassland can be green and lively, with rain, storms, cold evenings and demand at popular places. Autumn shifts the colors and the atmosphere; winter is a different cold-weather journey with potentially fewer services. At any time, confirm the real property operation, heating, meals and outdoor access. A flower image should not stand in for a seasonal plan.",
    orientation:
      "Hongyuan County is in Aba, Sichuan; Qiongxi is the county-town base. Moon Bay, Emutang, Waqie and a named grassland property are distinct visitor or accommodation locations with separate roads. Zoige / Ruoergai is another county and route chapter, not an alternative spelling of Hongyuan. Aba Hongyuan Airport is a highland gateway with its own operating services, not a guarantee of direct access from the traveler's previous city. Use exact Chinese hotel and entrance names and review each sleeping elevation rather than assign one county-wide figure to the whole trip.",
    experiences: [
      "Read Moon Bay's river meander through its pasture and plateau setting",
      "Choose a season-appropriate Emutang outing or a different rewarding landscape day",
      "Spend real time at a suitable grassland base with warmth, good meals and a manageable pace",
    ],
    planningNotes: [
      "Distinguish Hongyuan's Moon Bay from Tangke's Yellow River viewpoint in Zoige",
      "Check recent flower conditions and property facilities before committing to a scenic camp",
      "Review actual flights, complete roads and sleeping elevations before fixing the hotel sequence",
    ],
    arrival:
      "Build the arrival from the booked gateway and actual route. A road approach from Chengdu may cross other mountain areas before reaching the plateau; identify the full profile, stops and useful arrival time. A proposed flight to Aba Hongyuan Airport requires a dated operating service, complete hotel transfer and contingency for changes. Neither airport proximity nor a private car establishes a suitable ascent. Keep the first evening modest, with dependable room access and dinner, rather than attach a remote flower field or sunset viewpoint to an uncertain arrival.",
    gettingAround:
      "Cluster the day around the actual base and main landscape interest. Name entry points, permitted visitor routes, internal transport where relevant and the real final approach. A private road service can improve timing without removing steps, exposure or altitude. Plan safe stopping places, meals, toilets and a shorter option. Keep vehicles off pasture and avoid crossing fences or wet ground for photographs. Riding, specialist guiding and hosted encounters are separate activities needing assessed providers and permissions, not features automatically supplied by a grassland transfer.",
    stayStrategy:
      "Decide which facilities are essential before selecting the view. A dependable Qiongxi room can make two nights rewarding; a named outlying property can add value when the setting and current service support a slower stay. Check heating, private bathroom, hot water, power, staff and meal arrangements in the exact booked room. Avoid changing hotels solely to repeat a similar landscape. A camp premium or oxygen-equipped room does not establish luxury service or medical suitability; the proposal should make its real benefits and compromises clear.",
    firstTimerNote:
      "Ask whether the trip still makes sense if the flowers are modest or the evening is cloudy. If the answer is yes because the room, landscape, interpretation and pace are right, the Hongyuan stay has a strong purpose. If the whole plan depends on one seasonal image, obtain current evidence or choose a different date or destination. A good operator should explain that choice rather than promise the same photograph in every season.",
    faqs: [
      {
        question: "Where is Hongyuan, and is it the same as Zoige?",
        answer:
          "Hongyuan is a county in Aba, Sichuan, with Qiongxi as its county-town base. Zoige / Ruoergai is a different county. Both can feature in a plateau route, but their named sights, rooms and road journeys need separate planning. Visiting one does not mean the other is covered.",
      },
      {
        question: "How many nights should I stay in Hongyuan?",
        answer:
          "Two nights give one focused full day; three can support a separate second interest, weather flexibility or meaningful time at a suitable property. Count real arrival and departure hours. One gateway night is not a full grassland experience, and extra nights do not guarantee altitude adaptation.",
      },
      {
        question: "What is Hongyuan's altitude?",
        answer:
          "Qiongxi town is around 3,500 meters above sea level, with different elevations at rooms, roads and viewpoints across the county. Review the complete sleeping and daytime profile. Flat terrain, a short walk or hotel oxygen equipment does not establish suitability for every traveler.",
      },
      {
        question: "When does Emutang flower, and can you guarantee the display?",
        answer:
          "Early summer, often around June into July, is a useful research window, not a fixed bloom guarantee. Conditions vary by weather, elevation and area. Check recent reports and current access before a flower-led visit, with another worthwhile landscape plan if the display does not match expectations.",
      },
      {
        question: "Is Hongyuan Moon Bay the First Bend of the Yellow River?",
        answer:
          "No. Moon Bay / Yueliangwan in Hongyuan concerns a meander of the Bai, or White, River in the Yellow River drainage. Tangke's well-known First Bend of the Yellow River is a separate Zoige visit. Identify the actual river, viewpoint and entrance when comparing photographs or proposals.",
      },
      {
        question: "Can I fly to Hongyuan instead of driving from Chengdu?",
        answer:
          "Consider Aba Hongyuan Airport only after verifying an actual dated flight and full hotel transfer. Compare the entire journey, possible changes and rapid arrival at high elevation. An airport reference does not establish a convenient service, and flying is not automatically the more suitable ascent choice.",
      },
      {
        question: "Are Hongyuan grassland camps suitable for a luxury trip?",
        answer:
          "Assess the named property and exact room through current evidence of heating, bed, private bathroom, hot water, power, staff, meals and access. A tent photograph or high price does not prove international resort standards. Choose the setting when its real comforts and compromises suit the guest; otherwise compare a dependable town base.",
      },
      {
        question: "Should I visit both Hongyuan and Zoige on a short trip?",
        answer:
          "Only when the distinct experiences justify the roads and hotel sequence. Hongyuan can serve Moon Bay, Emutang or a specific-property brief; Zoige adds Huahu and Tangke. A shorter route may be stronger with one carefully chosen grassland chapter and more useful time, rather than multiple similar overnight stops.",
      },
    ],
    culturalStory: {
      title: "Notice how the river and pasture shape the view",
      paragraphs: [
        "Moon Bay rewards more than a quick stop if visitors understand what they are looking at: a river turning across a highland landscape, with water, vegetation and pastoral use shaping the scene. That view is different from Tangke's Yellow River panorama, even when both appear under broad grassland labels. A thoughtful guide can help guests read those differences without inventing a geological explanation for every curve. Flower meadows likewise belong to a seasonal ecosystem, not a permanent carpet maintained for photography.",
        "The county is also a contemporary Tibetan cultural landscape with working communities and religious places. Pasture access, homes, portraits and worship each call for appropriate permission and conduct. At a prayer-flag or stupa setting such as Waqie, explain the actual site and observe current rules rather than turn religious activity into a staged attraction. A consented conversation or carefully chosen local detail can add depth, but family hospitality and ceremonies are separate arrangements, never automatic benefits of hiring a vehicle.",
      ],
    },
    foodStory: {
      title: "A good grassland stay needs dependable meals",
      paragraphs: [
        "Agree the food plan with the actual property before choosing an isolated room. Breakfast timing, a practical lunch and a warm dinner can make a plateau day more enjoyable than an ambitious tasting schedule. Where genuinely available, yak-meat or dairy preparations can introduce local tastes, alongside vegetables and other dishes the group enjoys. Ask the kitchen about preparation, portions and spice rather than expect one uniform Tibetan menu. Guests who prefer different food should have a proper alternative rather than an obligatory tasting.",
        "Clarify dairy, wheat, meat stock, soy, nuts and shared equipment when dietary needs matter. A vegetable dish may contain animal ingredients, while a small camp may have fewer substitutions than a town restaurant. Serious allergy or religious requirements need confirmed kitchen capability before the stay, with a workable fallback. Butter tea, food and supplemental oxygen should not be promoted as preventing altitude illness. Meal planning supports comfort; health concerns require appropriate professional advice rather than a culinary promise.",
      ],
    },
    itinerary: [
      {
        day: "Day 1 / arrival",
        title: "Reach the chosen room with time for a quiet evening",
        description:
          "Follow the assessed road or verified flight-and-transfer sequence. Check the room, settle in and enjoy a suitable meal. A short permitted local walk can fit when conditions and guest needs allow; a remote scenic stop should not be required after uncertain travel.",
      },
      {
        day: "Day 2 / the main landscape brief",
        title: "Choose Moon Bay or a current Emutang-led outing",
        description:
          "Use the named viewpoint or flower visitor route, with complete roads, entry, walking and lunch planned. Give time to observe and understand the setting. If bloom or weather changes the experience, use the agreed alternative rather than promise an unchanged summer photograph.",
      },
      {
        day: "Optional second full day / three-night stay",
        title: "Add a different subject or enjoy the property",
        description:
          "Choose the complementary landscape interest, an appropriate Waqie stop or a slower day at the actual base when its facilities support that choice. Confirm access and consent for any cultural encounter. Avoid filling the day with transfers to several similar grassland stops.",
      },
      {
        day: "Departure / a separate onward chapter",
        title: "Continue through the confirmed route",
        description:
          "Allow the real road journey to Zoige, Songpan, another agreed overnight base or the actual departure terminal. A two-night version has one full day; the extra night supports the second. This is an illustrative outline, not a published package, medical ascent plan or guarantee of flowers, hosts, room facilities or flight operation.",
      },
    ],
  },
};
