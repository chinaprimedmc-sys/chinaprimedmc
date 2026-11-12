import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/changbai-mountain.svg",
  alt: "Original Changbai Mountain planning schematic comparing the north-side town, west-side resorts and separate ski time; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const changbaiMountainGuide: ExpandedDestination = {
  id: "changbai-mountain",
  name: "Changbai Mountain",
  region: "northeast",
  kicker: "Crater-lake scenery, forest time and a base that fits the trip",
  description:
    "Choose Changbai Mountain's north or west side before booking a room. Compare Heaven Lake access, forest visits, winter resort stays and separate ski days.",
  stay: "3–4 nights for two or three full days",
  bestFor: "Volcanic scenery, forests and a carefully planned winter or summer escape",
  interests: ["landscape"],
  relatedDestinationIds: ["changchun", "harbin", "beijing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Changbai Mountain Travel Guide: North or West Slope?",
    seoTitle: "Changbai Mountain Guide: North or West Slope?",
    seoDescription:
      "Compare Changbai Mountain's north and west sides, Erdaobaihe and resort hotels, Heaven Lake weather, winter visits, ski days and complete gateway transfers.",
    answer:
      "Changbai Mountain in Jilin combines a volcanic summit landscape with forest scenery and seasonal resort stays. Choose the north or west scenic approach before booking: an Erdaobaihe base and a west-side resort serve different routes. Three nights give two full days; four allow a separate ski, forest or rest day. Heaven Lake views depend on cloud, wind and operating conditions, so build a worthwhile lower-altitude day into the plan as well.",
    stayAnswer:
      "Allow three nights for two full days with one main mountain attempt and a worthwhile lower-level or hotel day. Four nights can separate mountain sightseeing from skiing or give a slower family pace. Two nights leave only one complete day and little weather flexibility. Extra nights improve scheduling options but cannot guarantee an open summit route or a clear view. Staying on both sides makes sense only when the second area adds a real subject and the transfer is worth the packing, not simply to collect two entrances.",
    hotelAnswer:
      "Choose the side first, then the actual property. Erdaobaihe is a practical north-side town base with dining and access arrangements to assess. Songjianghe and west-side resort properties serve a different approach; a ski resort stay can be convenient for the booked slopes without being close to every mountain entrance. Check heating, room temperature, breakfast, dinner, pool or bathing access, luggage handling and the full pickup route. A Changbaishan hotel label does not locate the property precisely, and a package shuttle may serve a ski area rather than the scenic-area gate you need.",
    sightseeingQuestion: "Should I choose Changbai Mountain's north or west slope?",
    sightseeingAnswer:
      "The north side is a useful starting point if you want to combine a possible Tianchi visit with the waterfall, Julong hot-spring area and selected lower forest interests through their current public routes. The west side offers a different crater approach, often involving a substantial stair climb, and can suit a stay focused on a particular west-side resort. Neither is automatically the easy or uncrowded choice. Compare the actual upper transport, stairs and open lower attractions for your dates. Pick one principal side for a short stay; a different angle on the lake is not by itself a reason to rush across both.",
    visitorResources: [
      {
        label: "UNESCO: Changbaishan Biosphere Reserve",
        href: "https://www.unesco.org/en/mab/changbaishan",
        scope:
          "Ecological context for the Changbaishan biosphere reserve, including its forests and mountain environments. A biosphere designation is not the same as a World Heritage inscription and does not confirm current visitor routes, wildlife sightings, ski operations or summit access.",
      },
      {
        label: "Jilin provincial government",
        href: "https://www.jl.gov.cn/",
        scope:
          "Regional context and dated public notices, primarily in Chinese. Check the responsible scenic-area and resort operators for current entrances, reservations, closures and activities. A regional tourism description does not confirm a specific hotel's shuttle, room or ski inclusion.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for the actual train date and station. Changbaishan station, Songjianghe-area gateways and city connections need their complete hotel transfer compared. Similar mountain, airport and station names do not establish the same arrival point.",
      },
    ],
    serviceScope:
      "A proposal should name the side, hotel, room, gateway, public visitor route, required internal transport, admissions, guiding and meals. Separate any upper-mountain transport from the lower-area journey and set out the remaining stairs. A ski day needs its own slope access, equipment, lesson language and ability assessment. A bathing or spa inclusion needs the actual facility and conditions specified. Private guiding does not override scenic-area closures or authorize border access, a closed trail or a guaranteed wildlife encounter. Agree alternatives before weather changes the plan.",
    routeAdvice:
      "Choose the mountain side and hotel first, then assess the wider northeastern China journey. Changchun adds modern history and cinema, while Harbin offers railway-city history and seasonal ice art; each needs its own useful days and actual connections. Share dates, arrival city, available nights, walking ability, ski experience and hotel preferences for a tailored route. We can compare a summit-and-forest stay with a longer resort break and allow for weather-dependent mountain access.",
    practicalPlanning: {
      timing:
        "Reserve a main mountain day and a different lower-level, resort or forest interest. Recheck actual opening, reservation and transport instructions close to the visit; entry to a lower area does not guarantee the summit section. Winter light and cold shorten comfortable outdoor sessions. Keep a substantial mountain outing away from a tight flight or train departure, and review the alternative early enough to preserve a useful day rather than spend all day waiting for a lake view.",
      walking:
        "Ask for the complete route after each shuttle or mountain vehicle. Upper viewpoints can involve stairs, exposed ground, cold and altitude even when much of the approach is motorized. The west-side crater route can demand a sustained climb; the north side still requires a specific mobility review. Snow and ice change footing. A forest boardwalk may have steps or closed sections and is not automatically wheelchair-accessible. Discuss heart, lung, balance or knee concerns with an appropriate clinician before choosing the physical plan.",
      cost: "Compare the exact room, meal plan, airport or station road, scenic-area admission and internal transport, upper transport where selected, guide and alternative-day arrangements. Resort packages may include limited ski access, equipment or bathing under specific conditions; read what applies to the actual guest and date. Lessons, clothing, extra equipment and private transport can be separate. A higher room rate should improve the stay you will use, not be treated as a promise of clear Tianchi views or unrestricted mountain access.",
    },
    attractions: [
      "Heaven Lake / Tianchi through an actually open Chinese-side visitor approach",
      "A north-side waterfall and Julong hot-spring landscape visit through public routes",
      "A selected lower forest route suitable for the season and walking ability",
      "A west-side crater approach when the remaining climb suits the group",
      "Erdaobaihe town time and a seated regional meal",
      "A separately planned ski day at a named operating resort",
      "A specific hotel bathing or spa facility when its actual service is confirmed",
    ],
    stays: [
      {
        label: "2 nights / one full day",
        advice:
          "Choose one main side and accept limited weather flexibility. Align arrival and departure with the actual room and visitor access. Do not promise two scenic areas, skiing and relaxed resort time within a single full day.",
      },
      {
        label: "3 nights / two full days",
        advice:
          "Give the main mountain route one day and plan a distinct lower forest, town or resort interest for the other. Adjust the order to current operation where possible. The second day should have its own purpose rather than depend entirely on repeating the same summit attempt.",
      },
      {
        label: "4 nights or more / separate mountain and activity days",
        advice:
          "Allow skiing, lessons, a slower family schedule or substantial hotel time without attaching it to a full mountain day. Assess whether changing sides adds enough value to justify the transfer. Longer stays still need meaningful alternatives when high routes remain unsuitable.",
      },
    ],
    hotelAreas: [
      {
        name: "Erdaobaihe / a north-side town base",
        advice:
          "Choose for the actual north-area plan, dining and town services. Check the full route to the correct visitor collection point, heating, room quiet and evening meals. A town hotel is not a room beside the crater, and the last stage of mountain access remains a separate operation.",
      },
      {
        name: "Songjianghe area / a west-side gateway",
        advice:
          "Compare the property's precise address, food and pickup with the selected western route. A Songjianghe-area stay and a resort booking are different decisions. Use the whole station-to-room and room-to-entrance journey rather than assume the area name identifies a convenient gate.",
      },
      {
        name: "A named west-side resort / skiing and hotel time",
        advice:
          "Useful when the specific resort's slopes, facilities and room are central to the trip. Confirm ski ability levels, lesson language, equipment, children's rules, meal choices and the actual mountain-day transfer. Ski-in/ski-out, bathing and scenic shuttles are property-specific services, not general features of all Changbai hotels.",
      },
      {
        name: "A separate retreat property / judge the whole stay",
        advice:
          "A quieter location can suit several settled nights if the room, dining and road work well. Check how long each planned excursion takes, what remains open after dark and what guests can do in poor weather. A remote address alone does not establish privacy, specialist hosting or luxury service.",
      },
    ],
    tradeoffs: [
      {
        title: "A clear crater lake is a possibility, not an inclusion",
        advice:
          "Cloud can hide Tianchi and wind can stop upper access while lower areas remain usable. Choose a route with a worthwhile forest, geological or resort purpose as well. Distinguish a closed route, an open route without visibility and a guest deciding not to climb; their practical options differ.",
      },
      {
        title: "A north-side town and a west-side resort solve different problems",
        advice:
          "Decide whether the holiday centers on mountain sightseeing, ski instruction or comfortable resort time. A room chosen for one can create unnecessary driving for another. Ask for exact hotel and entrance names before comparing price, stars or promotional mountain photographs.",
      },
      {
        title: "Winter sightseeing and skiing need separate days",
        advice:
          "A mountain route has transport, exposure, warming breaks and its own operating limits. A beginner lesson also needs equipment fitting, suitable terrain and patient teaching. Combining both as small additions can leave neither useful; establish the full workload before booking a package.",
      },
      {
        title: "A geothermal landscape is not a bathing reservation",
        advice:
          "Seeing the Julong hot-spring area does not mean visitors can bathe there. A hotel pool, spa treatment and geothermal bathing facility are separate offers. Confirm temperature, access, supervision, hygiene, health suitability and what is actually included rather than infer them from a hot-spring label.",
      },
      {
        title: "Protected forests are richer than a wildlife checklist",
        advice:
          "Look at the change in vegetation with elevation, volcanic ground and the contrast between forest and exposed upper terrain. Follow the public route and leave wildlife undisturbed. Specialist natural-history interests need an appropriately prepared guide; rare animal sightings or off-trail access cannot be promised.",
      },
      {
        title: "The border setting does not make this a cross-border excursion",
        advice:
          "This guide concerns the Chinese-side visitor areas. Do not infer access to North Korea, an unrestricted crater circuit or permission to leave marked routes. Specific traveler documents, public admission and any special itinerary conditions need review for the actual plan.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "changchun",
        advice:
          "Give Changchun its own time for twentieth-century history and film heritage. Compare dated train or flight options with the full transfer to the chosen Changbai side. A provincial-capital connection is not itself a reason to spend a night without a useful city visit.",
      },
      {
        slug: "harbin",
        advice:
          "Harbin's seasonal ice art and city history offer a different northeastern chapter. Keep the long connection and useful nights explicit; do not describe Changbai as a spare Harbin day trip. Confirm ice-attraction dates and the separate ski or mountain arrangements before fixing the whole winter route.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing can combine imperial history and an international gateway with a separate mountain stay. Check the actual service, arrival point and complete road to the room. Protect useful Beijing days and avoid a late mountain departure before an inflexible international flight.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Summer and early autumn are useful starting points for a forest-and-mountain visit, though cloud, rain and wind still affect high routes. Autumn color varies by elevation and year rather than appearing everywhere on one date. Winter suits a deliberately planned snow or ski holiday with cold protection and realistic expectations for mountain access. Spring thaw can leave mixed or restricted conditions. Choose the season around the experience you want and the actual resort operation; no month guarantees a clear Tianchi view.",
    orientation:
      "Changbai Mountain is a mountain landscape, not a single town or hotel zone. Erdaobaihe serves a northern approach; Songjianghe-area properties and western resorts serve another. The scenic entrances, resort slopes and transport gateways are distinct places. Baishan city and Yanji have their own urban interests and are not automatically covered by a mountain stay. A southern scenic-area option requires its own current opening and access assessment rather than being assumed available as an interchangeable third day.",
    experiences: [
      "Understand the volcanic crater and changing mountain vegetation through a route suited to the day",
      "Spend time in an actually open lower forest landscape without depending on a summit photograph",
      "Give skiing or a comfortable resort day its own space when it genuinely fits the trip",
    ],
    planningNotes: [
      "Choose north or west before booking the hotel and gateway",
      "Keep a worthwhile alternative for poor visibility or high-route closure",
      "Separate skiing, scenic admission, upper transport and bathing inclusions",
    ],
    arrival:
      "Compare the actual dated train or flight with the full road to the chosen side. Changbaishan railway station, Changbaishan airport and a hotel using the same mountain name are not one arrival point. A Yanji or Changchun gateway adds another connection to assess. Confirm the ticketed station, Chinese hotel address, driver collection and any resort shuttle rules. In winter, road and flight disruption require realistic margins; keep essential sightseeing away from an uncertain arrival afternoon.",
    gettingAround:
      "Private road transport between the room and the correct collection point is different from regulated scenic-area transport. Name the internal buses, upper vehicles where operating and remaining walking. Do not assume a private driver can continue to every viewpoint. Changing sides requires a genuine road transfer. Build in meals, toilets and warming breaks, and use the operator's current public route when snow, wind or conservation controls change access.",
    stayStrategy:
      "Three or four settled nights usually provide more value than a rushed sequence of mountain hotels. Start with the actual guest priorities: scenery, gentle forest time, skiing or resort comfort. Compare the room, food and service in that context. Families should assess sleep, children's activities and warm indoor time; active guests should assess terrain and teaching rather than only room category. A premium stay earns its value through comfort and suitable planning, with any special services explicitly confirmed.",
    firstTimerNote:
      "Choose a side and a purpose before choosing a hotel photograph. The biggest planning mistake is to book a western ski-resort room, assume it sits beside every scenic entrance, and squeeze a Tianchi outing between lessons. A north-side cultural and nature stay can be just as rewarding when its route and services fit. The right plan remains enjoyable even if the crater lake stays hidden.",
    faqs: [
      {
        question: "Is Changbai Mountain worth visiting if Heaven Lake is hidden?",
        answer:
          "It can be, if forests, volcanic scenery, a suitable resort or skiing are real interests. Build a distinct lower-level or hotel day rather than promise the lake will appear. Not every lower attraction stays open when upper access closes, so review the actual alternatives.",
      },
      {
        question: "How many nights should I stay at Changbai Mountain?",
        answer:
          "Three nights provide two full days; four allow a separate activity or slower pace. Two nights leave one full day with little flexibility. Extra time cannot guarantee a clear lake view, and changing sides needs a worthwhile reason beyond collecting viewpoints.",
      },
      {
        question: "Is the north or west slope better for a first visit?",
        answer:
          "Compare the north side's combination of lake access and lower attractions with the western approach and the resort you actually want. The west-side crater route can involve a substantial climb. Neither side is automatically easy or quiet; choose using the current route and your walking ability.",
      },
      {
        question: "Should I stay in Erdaobaihe or a Changbai ski resort?",
        answer:
          "Erdaobaihe can suit a north-side town and mountain plan. A specific resort can suit skiing and hotel time, with a separate transfer for the chosen scenic entrance. Compare precise addresses, meals and included shuttles before booking.",
      },
      {
        question: "Can I visit Changbai Mountain in winter without skiing?",
        answer:
          "Yes, if the actual open scenic routes, snow landscape and hotel facilities fit your interests. Plan short outdoor sessions and warm breaks. Winter summit access and visibility are uncertain, so the stay needs value beyond a possible Tianchi view.",
      },
      {
        question: "Can I bathe in the hot springs near the waterfall?",
        answer:
          "A visit to a geothermal landscape does not establish public bathing access. Book a specific operating bathing or hotel facility separately, checking health suitability, conditions and inclusions. Do not assume admission to the scenic area includes a spa.",
      },
      {
        question: "Is Changbai Mountain suitable for limited mobility?",
        answer:
          "It depends on the exact route, transport, steps, weather and property. Motorized approaches do not make upper viewpoints step-free, and winter surfaces can be difficult. Review a specific lower route and suitable room rather than promise general accessibility.",
      },
      {
        question: "Can I visit Changbai Mountain as a day trip from Harbin?",
        answer:
          "Treat it as a separate stay with a full connection and useful mountain days. Harbin's ice venues and Changbai's scenic areas have different gateways and operating conditions. A compressed out-and-back does not provide the flexibility this mountain trip needs.",
      },
    ],
    culturalStory: {
      title: "A volcanic landscape with more than one identity",
      paragraphs: [
        "The crater lake is the most familiar image, but the journey through changing vegetation helps explain the mountain. Forest, exposed upper ground, volcanic landforms and geothermal activity belong to the same larger landscape. A good visit gives those transitions attention rather than treating every lower stop as something to complete before the 'real' attraction. Ask a guide to explain what is visible from the public route, with seasonal limits made clear.",
        "The wider mountain also carries important associations in Manchu and Korean cultural traditions. The Chinese name Changbaishan and the Korean name Baekdu or Paektu occur in different cultural and geographic contexts; this itinerary concerns Chinese-side visitor areas. Interpret those histories respectfully without turning a scenic visit into a claim of cross-border access. The UNESCO biosphere designation concerns ecological conservation and should not be presented as proof of a World Heritage listing.",
      ],
    },
    foodStory: {
      title: "Choose the meal around the base and the weather",
      paragraphs: [
        "A warming seated meal is part of a comfortable mountain stay. Northeastern dumplings and stews offer one direction, while Korean-Chinese food may offer another depending on the actual town and restaurant. Ask which dishes the kitchen does well rather than assume every resort meal represents every regional tradition. Portion size, meat fillings, spice and fermented flavors are useful choices to discuss, especially when traveling with children or returning cold from outside.",
        "Check stocks, pork, wheat, soy, sesame and shared preparation where relevant. A vegetable or mushroom dish does not establish vegetarian, allergy, coeliac or halal suitability. Wild ingredients require particular care; a mountain location is not evidence that an unfamiliar mushroom or preparation is safe. Confirm serious requirements with the kitchen and agree an alternative. At a remote resort, review dinner options and opening hours before relying on a distant town after a tiring day.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night",
        title: "Settle on the chosen side",
        description:
          "Complete the actual station or airport transfer, check the room and eat. Review the next day's public operation and weather. Keep an essential mountain visit away from uncertain arrival hours; a short town or hotel orientation can be enough.",
      },
      {
        day: "Full day 1 / principal mountain route",
        title: "Give one scenic area a complete day",
        description:
          "Use an operating route matched to the group's walking ability. Attempt the crater viewpoint only when conditions and access allow, and include suitable lower interests, meals and breaks. Follow the agreed alternative if the high route is unsuitable rather than force the headline photograph.",
      },
      {
        day: "Full day 2 / a different purpose",
        title: "Choose forest, town, resort or a real ski day",
        description:
          "Choose a distinct open lower landscape, time around Erdaobaihe or a substantive resort activity. If skiing is the purpose, give fitting, instruction and practice their own day. Reordering days can help where operation permits, but this is not a promise of another clear-weather summit attempt.",
      },
      {
        day: "Optional full day 3 / for four nights",
        title: "Deepen the stay rather than add compulsory mileage",
        description:
          "Add another lesson, a suitable nature interest or relaxed hotel time. A second scenic side needs its complete transfer and physical effort assessed. Use the extra day to support the guests' interests instead of require every entrance.",
      },
      {
        day: "Departure / onward city or gateway",
        title: "Allow the whole journey",
        description:
          "Protect the actual road, ticketed station or airport connection and seasonal margin. This outline is illustrative, not a published package or a guarantee of lake visibility, rooms, slopes, vehicles, snow conditions or current activities.",
      },
    ],
  },
};
