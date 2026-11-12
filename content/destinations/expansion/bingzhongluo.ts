import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/bingzhongluo.svg",
  alt: "Original Bingzhongluo planning schematic comparing a town base, selected Nu River village walks and the separate Dulong Valley decision; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const bingzhongluoGuide: ExpandedDestination = {
  id: "bingzhongluo",
  name: "Bingzhongluo",
  region: "southwest",
  kicker: "Give the Nu River valley time beyond the viewpoint",
  description:
    "Plan a thoughtful Bingzhongluo stay around the Nu River bend, village paths and living religious traditions, with realistic road days and a well-chosen room.",
  stay: "2–3 local nights; the wider Nujiang road journey needs additional nights",
  bestFor: "Valley walks, landscape photography and thoughtful cultural interpretation",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["nujiang", "dali", "tengchong", "nuodeng"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Bingzhongluo Travel Guide: Nujiang Walks & Where to Stay",
    seoTitle: "Bingzhongluo Guide: Walks & Where to Stay",
    seoDescription:
      "Plan 2–3 nights in Bingzhongluo, Yunnan: Nu River scenery, Wuli village walks, hotel choices, road-day planning and the separate Dulong Valley decision.",
    answer:
      "Bingzhongluo, in northwest Yunnan's Nujiang valley, rewards travelers who want river-and-mountain scenery, village walks and thoughtful cultural interpretation. Allow two or three local nights for more than a photo stop at the river bend. The long approach through the valley needs additional road days and overnight decisions, so plan the whole journey before choosing flights. Dulong Valley and any onward route toward Tibet require separate access and itinerary checks.",
    stayAnswer:
      "Two nights give one full local day between arrival and departure. Three nights allow two different local days: for example, a suitable Wuli-area walk followed by a more selective river, village or religious-history day. One night is a brief stop, with little resilience if the approach runs late or rain changes a walk. Count the lower Nujiang valley and gateway nights separately. Four or more local nights make sense for a defined walking or photography project; they should not be filled with repetitive viewpoints or unconfirmed border-road excursions.",
    hotelAnswer:
      "Choose between a practical town room and a specific surrounding village or valley property. In town, compare meals, quiet, vehicle access and the actual view; a central address can be convenient after a road day. Outside town, establish the final approach, luggage handling, heating or cooling, hot water, bathroom, dinner and return transport. A riverside or mountain-view description does not establish the outlook from your room. For a premium trip, good sleep, reliable meals, useful local interpretation and an unhurried schedule matter more than calling an unassessed guesthouse a luxury lodge.",
    sightseeingQuestion: "What is worth doing beyond the Nu River bend viewpoint?",
    sightseeingAnswer:
      "Build one day around a selected village-and-path route, such as an appropriate Wuli-area walk, and give a second interest its own purpose. That could be river-and-mountain photography from safe stopping places or a thoughtfully arranged introduction to local religious history. Qiunatong is a separate village outing rather than a compulsory extension of every walk. Confirm the actual path, starting point, finish, surfaces and present access before choosing. A list of village names does not tell you whether a day is rewarding or whether the walking suits your group.",
    visitorResources: [
      {
        label: "Nujiang prefecture government",
        href: "https://www.nujiang.gov.cn/",
        scope:
          "Official prefecture-wide information and dated notices, mainly in Chinese. Use it as a starting point for regional context and responsible local contacts, not as proof of today's path condition, a hotel's foreign-guest arrangements or permission for a border-area continuation.",
      },
      {
        label: "Gongshan county government",
        href: "https://www.gongshan.gov.cn/",
        scope:
          "County-level public information for the wider Gongshan area. Bingzhongluo and Dulong Valley are different route decisions. Current travel eligibility, road operation, specific visitor sites and accommodation need confirmation for the actual dates and travelers; the existence of a tourism description does not settle them.",
      },
    ],
    serviceScope:
      "A useful proposal names the gateway, each overnight, full road sequence, selected village walk, vehicle and guide roles, actual room and meals. Describe the walking surface, approximate effort, pickup and rain alternative after checking the intended route. Establish current travel and check-in arrangements for the actual guests before confirming the itinerary. Any home visit, church interior, ceremony, specialist trek, Dulong Valley extension, drone use or Tibet continuation needs a separate, specific arrangement where available. A private guide does not confer unrestricted access to homes, worship or border roads.",
    routeAdvice:
      "Give Bingzhongluo a clear role in a Nujiang journey, with local walking time and well-paced valley stages. Dali adds a contrasting Bai cultural and lakeside stay; Tengchong offers Heshun and volcanic landscapes. Both need substantial connecting travel. For a tailored proposal, share your dates, gateway, walking preferences, room expectations and onward plans. We can assess which lower-valley nights improve the journey and whether a separate Nuodeng village chapter merits the detour.",
    practicalPlanning: {
      timing:
        "Plan with the exact gateway and hotel addresses, not just the distance between city names. The approach may include meals, roadworks, weather-related disruption and a lower-valley overnight. Leave a modest arrival evening and keep the last road leg separate from a tightly timed flight. For photography, ask which direction and subject matter suit the available light; a famous dawn label does not guarantee clear peaks or an empty viewpoint. Use a flexible sequence that still offers a worthwhile day if a particular path is unsuitable.",
      walking:
        "A short village outing can include stone or dirt paths, uneven steps, mud, wet leaves and exposed edges. Establish the exact Wuli or other village route rather than infer difficulty from a photograph of one level section. Agree a turnaround or pickup, toilets, footwear and a worthwhile shorter option. Stay on open paths, respect farm work and do not approach the fast-flowing Nu River as though it were a bathing spot. Road-accessible viewpoints and longer mountain hikes are different experiences; extra hiking needs its own route, weather and support assessment.",
      cost: "Compare the complete vehicle days and driver arrangements, actual room category, meals, guide language and local interpretation. Clarify luggage assistance, any site charges and the practical alternative if a walk or road changes. A low local room rate does not make the whole long-distance journey inexpensive. Conversely, paying more should produce visible benefits in comfort, useful time, appropriate interpretation and responsive planning. A personal host, specialist guide or unusual access must be named and confirmed rather than implied by the word bespoke.",
    },
    attractions: [
      "The Nu River bend landscape from an appropriate, safely accessible viewing point",
      "A selected Wuli village-area path with the actual walking route checked",
      "Qiunatong as a separately chosen village and landscape outing",
      "Bingzhongluo town and its valley setting, with time for a proper meal",
      "Public religious-history subjects or an available church visit with access and conduct agreed",
      "Selected river-and-mountain photography stops that allow safe parking and standing",
    ],
    stays: [
      {
        label: "1 local night / a brief valley stop",
        advice:
          "Choose a small number of realistic interests and be clear about useful time after the approach. An arrival viewpoint and departure morning are not equivalent to a full village walking day. Keep meals and room access straightforward, particularly if the previous road day is substantial.",
      },
      {
        label: "2 local nights / one complete local day",
        advice:
          "Protect a selected village walk, a proper lunch and a river-landscape interest without cramming the whole stay into arrival afternoon. The route should still work with a shorter walk or changed weather. Departure travel is a separate day, not an assumed second full day of sightseeing.",
      },
      {
        label: "3 local nights / two different days and more flexibility",
        advice:
          "Combine a suitable walking day with a distinct landscape or cultural-history day. Adjust the order to current conditions. A third night is particularly useful when the approach is long or guests want photography time, but it does not guarantee access, clear weather or a willing private host.",
      },
    ],
    hotelAreas: [
      {
        name: "Bingzhongluo town / practical base for a focused stay",
        advice:
          "Assess the actual room's quiet, bathroom, hot water, temperature control and meals, plus pickup and parking. A town base can simplify a late arrival and changes to the day plan. Look at the booked room category and surrounding road activity rather than assume all central rooms are equally restful.",
      },
      {
        name: "A named surrounding village or valley property / a deliberate location choice",
        advice:
          "Choose it for a real advantage such as the setting or a suitable walking start, then check road access, stairs, luggage, food and staff availability. A view across the valley is different from being able to walk safely to the river. Confirm the actual travelers' check-in arrangements and avoid relying on a remote-looking photograph as evidence of privacy.",
      },
      {
        name: "Gongshan or the lower Nujiang valley / separate road-stage nights",
        advice:
          "These can support the wider journey when their locations and interests fit the route. They are not interchangeable with a Bingzhongluo night: compare the additional driving to your selected local walk and the full onward leg. Choose the overnight sequence before comparing a single hotel's headline rate.",
      },
    ],
    tradeoffs: [
      {
        title: "A river-bend stop and a Bingzhongluo stay offer different depth",
        advice:
          "The overview establishes the landscape quickly. Staying gives time to move through a selected village route, understand the valley's settlement and religious histories and adapt to light or rain. If the itinerary only allows a brief stop, say so; do not sell a passing photograph as an immersive cultural visit.",
      },
      {
        title: "Choose one worthwhile walk before adding more village names",
        advice:
          "Wuli and Qiunatong are not interchangeable labels for an unlimited easy trail network. Ask where each walk begins and ends, what is visible, how much climbing is involved and how the vehicle rejoins the guests. A coherent route with time to observe is more rewarding than hurriedly collecting several settlement signs.",
      },
      {
        title: "Dulong Valley is a separate extension",
        advice:
          "Dulong Valley, also written Dulongjiang, lies within the wider Gongshan county area but requires a different road journey and overnight decision. Check present travel eligibility, roads and actual services for the guests before allocating nights. A Bingzhongluo booking is not evidence that the extension is open, included or convenient.",
      },
      {
        title: "Bingzhongluo is in Yunnan; a Tibet continuation changes the proposal",
        advice:
          "The wider Bingcha road reputation can obscure substantial differences between a local valley visit and travel toward Chawalong or Chayu in Tibet. A continuation needs its own current route, traveler eligibility, permissions where applicable, vehicle and support assessment. It is not a scenic detour that can be added simply because the road appears on a map.",
      },
      {
        title: "Cultural diversity calls for specific interpretation",
        advice:
          "The valley has Nu, Lisu, Tibetan and other communities, with varied religious traditions and contemporary lives. Identify the actual village, institution or speaker instead of presenting the region as one homogeneous minority culture. A public exterior visit, an open church and a private household are different invitations. Ask before portraits and respect worship and work.",
      },
      {
        title: "A remote setting and a luxury service standard are separate questions",
        advice:
          "A memorable view does not establish soundproofing, heating, trained staff or reliable dietary provision. Assess the room and service that can actually be delivered, then decide whether the setting justifies the journey. For some travelers, a comfortable shorter Yunnan route is a better choice than a long drive to accommodation that does not meet their needs.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "nujiang",
        advice:
          "Nujiang’s regional guide explains the wider valley journey, lower and middle overnight stages, full gateway roads and separate side-valley decisions. Use it to judge whether the available nights and rooms support a rewarding trip, with Bingzhongluo local days counted within the regional plan rather than replacing the approach.",
      },
      {
        slug: "dali",
        advice:
          "Dali offers a separate chapter of Erhai scenery, Bai cultural history and more varied hotel choices. Give both places useful nights and count the entire Nujiang road approach. An existing Dali tour is not a booking for Bingzhongluo, and one should not be presented as the other's day trip.",
      },
      {
        slug: "tengchong",
        advice:
          "Tengchong adds Heshun, volcanic geology and a different accommodation decision. Research the full route and any lower-valley overnight before combining it with Bingzhongluo. A hot-spring stay has different weather and activity priorities from a village walking stay; choose each for its own value.",
      },
      {
        slug: "nuodeng",
        advice:
          "Nuodeng provides a distinct salt-history and village-architecture interest in Yunlong County. Include it only when the actual road sequence and nights make sense. Its stepped village access, luggage needs and accommodation deserve their own assessment rather than being treated as a quick scenic stop between long drives.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for researching village walks and valley scenery, with the final choice based on the actual route and current conditions. The wetter summer period can affect paths, road reliability and visibility, while colder months bring different room-heating and daylight considerations. Conditions on a higher road are not established by the forecast for the valley town. Choose dates for the experience you want, then retain a suitable alternative to a wet or closed walk. A quieter period does not guarantee an empty village, a festival or clear mountains.",
    orientation:
      "Bingzhongluo is a town in Gongshan Dulong and Nu Autonomous County, within Nujiang Prefecture in northwestern Yunnan. Nujiang can mean the prefecture or the river landscape; the Nu River continues downstream beyond China as the Salween. Gongshan county town, Bingzhongluo, Wuli and Qiunatong are distinct locations in the wider itinerary. Dulong Valley is a separate side of the county's travel geography. Use full Chinese addresses and specific walking starts when comparing hotels and routes; a prefecture name alone does not establish a convenient base.",
    experiences: [
      "Understand the river-bend landscape before following a suitable village path",
      "Explore Wuli or another selected settlement through its actual surroundings and present life",
      "Give religious history and landscape photography time without assuming private access",
    ],
    planningNotes: [
      "Count the lower-valley approach and departure as real road stages with their own nights",
      "Confirm the exact walk, pickup and rain alternative before choosing the local day",
      "Assess the actual room and keep Dulong Valley or Tibet continuations separate",
    ],
    arrival:
      "Start with an actual operating flight or rail arrival and the full road sequence to the first valley hotel. Dali, Baoshan or Tengchong may be researched as gateways according to current services and the rest of the trip; none makes the final journey disappear. Compare a staged approach with any proposed long driving day, including meals, road conditions and driver arrangements. Keep the first Bingzhongluo evening simple and agree the practical response to delayed arrival. Do not fix a tight departure flight using an idealized uninterrupted driving estimate.",
    gettingAround:
      "A vehicle can connect selected villages and viewing points, but the interesting part of a visit often begins after leaving it. Confirm safe parking, the actual trailhead, steps and the meeting point at the end. Roadside photography should use a suitable stopping place, not a narrow bend chosen for a social-media angle. A local guide adds value through route judgment and specific interpretation, not unrestricted entry. Check footpath conditions after rain and respect closures, farming, private land and religious activity.",
    stayStrategy:
      "Choose two nights for one complete local day or three for a more flexible stay with two distinct interests. Compare town convenience with a named outside property on the basis of the actual room, meals, access and atmosphere. Good sleep after the road journey matters. Resolve serious dietary requirements and the actual guests' check-in arrangements before booking. A remote view is a reason to consider a property, not proof of the comfort and service expected on a premium holiday.",
    firstTimerNote:
      "Ask to see the route as a sequence of overnight addresses, full road days and one clearly described local walk. Then ask what remains worthwhile if that walk changes. This reveals far more than a long list of river bends, villages and churches, and helps decide whether Bingzhongluo deserves a substantial place in your Yunnan trip. If the available time only supports a rushed return, a shorter route with better local time may serve you better.",
    faqs: [
      {
        question: "Where is Bingzhongluo, and is it the same as Nujiang?",
        answer:
          "Bingzhongluo is a town in Gongshan county, within Nujiang Prefecture in northwestern Yunnan. Nujiang is a much wider regional name and also refers to the river. A stay elsewhere in the prefecture does not automatically give you useful time for Bingzhongluo's village walks.",
      },
      {
        question: "Is Bingzhongluo worth the long journey?",
        answer:
          "It can be for travelers who want valley scenery, village walking and thoughtful cultural interpretation, with enough time for the approach and two or three local nights. It is a weaker choice if your main priority is a short transfer, a resort stay or one famous viewpoint without time to explore beyond it.",
      },
      {
        question: "How many nights do I need in Bingzhongluo?",
        answer:
          "Two local nights give one full day; three allow two distinct local days and more flexibility. The wider Nujiang approach and departure require additional road time and may need other overnight stops. Do not count an arrival evening as a second complete sightseeing day.",
      },
      {
        question: "Can I visit Bingzhongluo on a day trip from Dali?",
        answer:
          "Plan it as a separate road journey with appropriate nights, not a convenient Dali day trip. Compare the full gateway-to-hotel route, meals, conditions and useful time on arrival. A map distance or optimistic driving estimate is not a sound basis for a rewarding return outing.",
      },
      {
        question: "Is the Wuli village walk easy?",
        answer:
          "That depends on the exact start, finish and current path. Village routes can include uneven stone, steps, mud and exposed edges. Ask for a route-specific description, a pickup plan and a shorter option. A photograph of a flat stretch does not establish the difficulty of the whole outing.",
      },
      {
        question: "Does a Bingzhongluo trip include Dulong Valley?",
        answer:
          "No, not automatically. Dulong Valley / Dulongjiang requires a separate road and overnight plan, with present access and services checked for the actual travelers. Being within the same county does not make it a local afternoon excursion or guarantee that it is available.",
      },
      {
        question: "Can foreign travelers include Bingzhongluo in a Yunnan itinerary?",
        answer:
          "Confirm current arrangements for the actual passports, dates, roads and hotel before booking. Do not use information about Dulong Valley or a Tibet continuation as a substitute for checking the specific Bingzhongluo visit. Any additional border-area route needs its own assessment; this guide does not guarantee access approval.",
      },
      {
        question: "Are there luxury hotels in Bingzhongluo?",
        answer:
          "Assess a specific available property and room rather than rely on a luxury label. Compare quiet, temperature control, bathroom, meals, vehicle access and the actual view. A premium journey here depends on a well-chosen stay, thoughtful guiding and realistic time; it should not imply an international resort standard without evidence.",
      },
    ],
    culturalStory: {
      title: "Understand a diverse valley through particular places and people",
      paragraphs: [
        "The landscape becomes more meaningful when a guide connects paths, farmland, settlement and religious buildings to specific local histories. Nu, Lisu, Tibetan and other communities do not share one uniform language, faith or household tradition. Christian institutions and Buddhist traditions are among the region's cultural subjects, but their presence should be explained locally rather than reduced to a slogan about harmony. Ask what a building is, who uses it and which parts of its story are supported by evidence.",
        "A church exterior, an interior visit during agreed opening, a service and an invitation into a home are different experiences. Arrange each appropriately and let the people involved decide how they wish to participate. Ask before portraits, avoid interrupting worship and do not treat ordinary agricultural work as a staged performance. Good interpretation also includes contemporary change: roads, schooling, livelihoods and the decisions people make about tourism. Time to listen can be more valuable than a promise of an exclusive encounter.",
      ],
    },
    foodStory: {
      title: "Make meals part of a comfortable valley journey",
      paragraphs: [
        "Choose a reliable breakfast before walking and a realistic lunch location rather than assume every village has an open restaurant when you arrive. A small selection of freshly prepared dishes, vegetables, rice or another staple and a soup can make a satisfying shared meal where available. Let the actual kitchen explain its specialties and ingredients instead of prescribing one menu as representative of all the valley's communities. A locally hosted meal needs a willing host and its own arrangement; it does not follow automatically from a village visit.",
        "Discuss meat stock, wheat, dairy, nuts, spice and shared preparation where relevant. Serious allergies or strict dietary requirements need confirmation of what the kitchen can manage and an alternative for long road days. Alcohol should be an optional choice rather than an expectation of cultural participation. After a wet walk or substantial drive, a warm meal at a sensible hour can add more to the holiday than a famous dish requiring another long detour. Agree dinner and any early departure breakfast with the actual property.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / after the separately planned valley approach",
        title: "Settle into the real base",
        description:
          "Complete the full road leg with meals and sensible stops, check into the booked room and keep the evening modest. A suitable river-bend overview can fit only if time and conditions allow. The wider Nujiang gateway and lower-valley nights are not compressed into this local outline.",
      },
      {
        day: "Full day 1 / a selected village walk",
        title: "Explore one coherent route at a comfortable pace",
        description:
          "Follow the checked Wuli-area or other agreed walk with appropriate interpretation, lunch and pickup. Use the shorter alternative if the path or weather calls for it. Preserve time to observe the settlement and landscape instead of adding several villages simply to lengthen the list.",
      },
      {
        day: "Full day 2 / for a three-night stay",
        title: "Choose a different local interest",
        description:
          "Select Qiunatong, suitable landscape photography or an actually available religious-history visit according to interests and conditions. Keep private households and worship separate from public sightseeing. This day provides flexibility rather than a guaranteed festival, host or clear mountain view.",
      },
      {
        day: "Departure / the actual next road stage",
        title: "Leave room for the onward journey",
        description:
          "Allow the full transfer to the next overnight or verified gateway. Any Dulong Valley or Tibet continuation is a separately assessed itinerary. This outline is illustrative, not a published package or a guarantee of access, hotels, cultural encounters or present trail conditions.",
      },
    ],
  },
};
