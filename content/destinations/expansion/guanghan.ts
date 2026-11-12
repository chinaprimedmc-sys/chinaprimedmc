import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/guanghan.svg",
  alt: "Original Guanghan planning schematic separating Sanxingdui Museum interpretation, a focused Chengdu day trip and an optional local overnight; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const guanghanGuide: ExpandedDestination = {
  id: "guanghan",
  name: "Guanghan",
  region: "southwest",
  kicker: "Sanxingdui, ancient Shu and the pleasure of looking closely",
  description:
    "Plan Guanghan's Sanxingdui Museum with useful archaeological context, sensible gallery time, family pacing and a clear choice between a Chengdu outing and a local stay.",
  stay: "A focused day from Chengdu; local nights only for a clear purpose",
  bestFor: "Ancient Shu archaeology, bronze art and curious families",
  interests: ["heritage", "food"],
  relatedDestinationIds: ["chengdu", "mianzhu"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Guanghan & Sanxingdui Guide: Museum, Tickets & Stays",
    seoTitle: "Guanghan Guide: Sanxingdui Museum & Stays",
    seoDescription:
      "Plan Sanxingdui Museum in Guanghan: bronze masks, ancient Shu context, ticket checks, family pacing, Chengdu day trips and whether a local stay adds value.",
    answer:
      "Guanghan (广汉) is a county-level city administered by Deyang, north of Chengdu in Sichuan. Its main international travel draw is Sanxingdui Museum (三星堆博物馆), which introduces the archaeology and extraordinary bronze objects of ancient Shu. Give the museum a substantial part of the day, with enough explanation to move beyond the famous masks. A focused outing from a Chengdu hotel works for many first visits; staying in Guanghan is a separate choice, worthwhile only when the room and wider route improve the trip. Museum galleries, the wider archaeological site and active excavation work are different places and access arrangements.",
    stayAnswer:
      "For a first Sanxingdui visit, keep a Chengdu base when a dedicated outing leaves time for transport, admission, a substantial gallery visit, food and the return. A few hours inside may suit a selective introduction, but a short glance between other major sights is a different experience. One Guanghan night can reduce a pressured travel day when it leaves useful local hours. Two nights provide one complete day and make sense for a serious museum interest or a separately confirmed second subject. Do not add nights solely because Sanxingdui is outside Chengdu.",
    hotelAnswer:
      "Compare your existing Chengdu hotel with a specific Guanghan town property and any museum-side accommodation by the actual journey and room. A Guanghan city hotel can provide practical meals and services, but the precise road to the museum still matters. A property promoted as near Sanxingdui may require a vehicle and may offer fewer evening dining choices. Check the booked room's quiet, bathroom, temperature control, breakfast, lift or stairs and pickup point. A local stay should improve the visiting day or onward route, not simply replace a stronger Chengdu room with an inconvenient check-in.",
    sightseeingQuestion: "Can I combine Sanxingdui with pandas or Leshan in one day?",
    sightseeingAnswer:
      "For a thoughtful first visit, give Sanxingdui its own main outing rather than compete with another substantial attraction. Panda-base visits have their own early timing, walking and crowd considerations, while Leshan lies in a different direction and requires a distinct route. A very compressed combination may collect names but sacrifices gallery interpretation, meals and rest. A modest nearby town interest can fit when it genuinely complements the museum and current hours allow. Choose what you want to understand, then protect the time for it.",
    visitorResources: [
      {
        label: "Sanxingdui Museum",
        href: "https://www.sxd.cn/",
        scope:
          "Museum reference for institutional information and current visitor notices. Confirm dated reservation channels, passport entry details, opening arrangements, available galleries and interpretation rules. A museum ticket does not establish active excavation, storage, conservation-lab or research access.",
      },
      {
        label: "Guanghan municipal government",
        href: "https://www.guanghan.gov.cn/",
        scope:
          "Local context and public notices, primarily in Chinese. Check the actual site, room and transport for the proposed dates. Municipal promotion is not confirmation of a particular gallery object, specialist appointment or public access to an archaeological working area.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Reference for dated services and exact stations. Compare both station transfers and the museum approach with a complete road journey. A Guanghan or Sanxingdui-related station name does not place guests at the gallery entrance or guarantee the best connection.",
      },
    ],
    serviceScope:
      "A proposal should identify the ticket and passport plan, pickup and return addresses, full transport, guiding language, service hours and meal arrangements. Ask whether interpretation is a general guided introduction or a separately confirmed archaeology specialist session. Institution rules govern guiding devices, group arrangements and interior conduct. Private service cannot guarantee tickets, a named object on display, after-hours entry or access to excavation and conservation work. A good guide explains the evidence and its limits, using the available galleries rather than promise answers archaeology has not established.",
    routeAdvice:
      "Guanghan fits naturally as a distinct ancient-Shu chapter during a Chengdu stay. Mianzhu offers a different living-art subject within the wider Deyang area, but its host appointments and roads need separate time. Our published 12-day China family journey offers Sanxingdui as one choice for its Chengdu choice day; it is not automatically included alongside cooking, Leshan and rest. A specialist upgrade is separately quoted and subject to availability. Choose that wider journey if its cities and family pace fit, or request a tailored museum-focused outing.",
    practicalPlanning: {
      timing:
        "Use the current reservation and admission plan to set the departure, then count entrance procedures, the actual gallery route, interpretation, seated breaks, food and the return. A three-hour gallery window and a three-hour hotel-to-hotel outing are very different proposals. Protect a demanding museum session from an uncertain flight arrival. Do not promise every object or a fixed route based on an old building plan; current displays and visitor circulation may change.",
      walking:
        "A museum day can involve extensive standing, large interior spaces, queues and movement between entrance facilities and galleries. Ask about the current accessible entrance, lifts, seating, toilets, mobility aids and any reservation needs. A private car helps with the road but does not eliminate the gallery visit's physical demands. Families should choose a manageable number of anchor objects and breaks, with the duration shaped around children's attention rather than an adult lecture stretched across every case.",
      cost: "Compare standard admission, any interpretation or specialist fee, transport, service hours, guiding devices and meals. A road car retained for the outing differs from separate station transfers. Children, mobility needs and a subject specialist can change the practical arrangement. Clarify all inclusions before comparing prices; a private guide does not buy ticket priority, research access or guaranteed quiet galleries. Museum-shop purchases and optional activities remain separate unless specified.",
    },
    attractions: [
      "Sanxingdui Museum's currently available ancient-Shu galleries",
      "Selected bronze masks and heads, interpreted through material and context",
      "Bronze-tree and standing-figure subjects when represented in the current display",
      "Gold, jade and other material traditions rather than a bronze-only checklist",
      "Excavation, conservation and reconstruction explained through public interpretation",
      "A modest Guanghan town interest, such as Fanghu Park, if it suits the actual day",
    ],
    stays: [
      {
        label: "Chengdu day trip / one substantial museum outing",
        advice:
          "Keep the existing room and dedicate the day to Sanxingdui, allowing food and the full return. This often gives more value than moving hotels for one museum. Compare a complete road arrangement with actual dated rail and station transfers; the shortest train segment is not necessarily the easiest day.",
      },
      {
        label: "1 local night / reduce a specific travel pressure",
        advice:
          "Choose when useful arrival or departure hours, the actual property and wider road sequence improve the trip. A late check-in and early departure do not create a museum day. Verify dinner and breakfast rather than assume a museum-side hotel has the same choices as central Chengdu.",
      },
      {
        label: "2 local nights / a full day without moving bags",
        advice:
          "Can suit a serious archaeological interest, slower walking or another separately confirmed local purpose. Assess the room for downtime and be clear about what distinguishes the extra hours. Specialist research, a second admission or access beyond the public visitor route is not implied by a longer stay.",
      },
    ],
    hotelAreas: [
      {
        name: "Your Chengdu base / a dedicated return outing",
        advice:
          "Compare the complete pickup and return from the actual hotel. Keeping a comfortable room can simplify a first Sichuan visit and preserve dining options. An eastern or northern map position alone does not establish an easy transfer; road conditions, entrance and timing matter.",
      },
      {
        name: "Guanghan town / services and a local overnight",
        advice:
          "Check the exact hotel, room noise, breakfast, bathroom, temperature control, vehicle approach and road to the museum. Choose when useful local time or an onward route justifies staying. Guanghan town, Deyang city and the museum entrance are not equivalent locations.",
      },
      {
        name: "A named museum-area property / assess practical benefits",
        advice:
          "Establish the actual entrance distance, walking conditions, meals and luggage arrangement. Nearby branding does not guarantee a pleasant walk, early admission or access before public opening. The room should improve comfort or useful visiting hours enough to justify changing hotels.",
      },
    ],
    tradeoffs: [
      {
        title: "Start with ancient Shu, then look at the celebrated faces",
        advice:
          "Use a short introduction to place Sanxingdui within the Sichuan Basin and the wider Bronze Age world. Then compare selected faces, scale, posture and materials. The unusual forms are a reason to ask better archaeological questions, not evidence for an invented extraterrestrial story or a completely isolated civilization.",
      },
      {
        title: "Separate what the object shows from what scholars infer",
        advice:
          "Ask which observations are directly visible, how an object was found and what supports an interpretation of its use. Some identities, beliefs and practices remain debated. A compelling guide can explain alternative readings without presenting a dramatic hypothesis as a settled fact. The uncertainty is part of the intellectual value of the visit.",
      },
      {
        title: "Reconstruction and conservation are subjects worth noticing",
        advice:
          "An impressive object may involve joins, support or reconstruction that help communicate fragmentary evidence. Read the label and ask what is original and what has been inferred. Public conservation interpretation, a display about excavation and access to active working areas are different things. A specialist guide does not automatically open a laboratory or archaeological pit.",
      },
      {
        title: "A family visit needs a small set of useful questions",
        advice:
          "Choose a few anchor objects and ask children to compare eyes, hands, scale or material before offering an explanation. A visual puzzle and a pause can work better than continuous narration. Younger children may need a shorter route; older children and teenagers can engage with competing interpretations. Agree the format before booking a specialist.",
      },
      {
        title: "The current museum visit is not an old two-hall checklist",
        advice:
          "The museum's newer building changed the visitor experience, while displays can continue to evolve. Plan around current galleries, reservation rules and attention span rather than copy an old itinerary. A famous object may move or be absent, so build the visit around the collection's ideas instead of guarantee every promotional image.",
      },
      {
        title: "Mianzhu adds another subject, not spare time after the museum",
        advice:
          "Mianzhu's New Year picture traditions introduce printing, color and household use, distinct from Bronze Age archaeology. A meaningful studio session needs a host and sufficient time, so compare a separate day or properly planned local chapter. Sharing Deyang administration does not make two cultural visits interchangeable or automatically close together.",
      },
    ],
    products: [
      {
        slug: "china-family-tour-with-pandas-12-day-private-tour",
        label: "Explore the 12-day private China family journey",
        reason:
          "This wider Beijing–Xi'an–Chengdu–Shanghai journey offers Sanxingdui as one option for the Chengdu choice day. It suits families who want archaeology within a multi-city trip. The selected option and any specialist upgrade must be stated in the proposal; Sanxingdui is not included alongside every alternative.",
        comparison: {
          bestFor: "Families wanting ancient-Shu archaeology within a wider first China journey.",
          localPlan:
            "Choose Sanxingdui for the Chengdu choice day, with the agreed museum and transport arrangement.",
          importantChoice:
            "One principal choice replaces cooking, Leshan or rest; specialist interpretation is a separately confirmed upgrade.",
        },
      },
    ],
    articles: [],
    connections: [
      {
        slug: "chengdu",
        advice:
          "Chengdu provides the main city base, varied meals and separate panda, tea and food interests. Give Sanxingdui its own substantial outing and compare the full return to the actual hotel. A general Chengdu product does not automatically include the museum; the family journey offers it as a specified choice.",
      },
      {
        slug: "mianzhu",
        advice:
          "Mianzhu adds New Year picture heritage through museum, studio or practical craft formats. Protect a confirmed host window and the full road rather than attach a rushed workshop after Sanxingdui. The two cities share wider Deyang administration but answer different cultural questions.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The museum can provide a substantial indoor subject across the year, with current opening and admission arrangements checked for the actual date. School holidays and public holidays can affect crowds and ticket availability. Summer still brings heat during the road, entrance and outdoor transitions; winter calls for comfortable layers rather than an assumption that every part of the day is indoors. Weather resilience is a useful advantage, but not a promise of quiet galleries or unrestricted access during rain.",
    orientation:
      "Guanghan lies north of Chengdu within Deyang's administrative area in Sichuan. Sanxingdui Museum is a distinct location from Guanghan's town center and the wider archaeological site. A public museum visit is not a tour of all excavations. Make Sanxingdui the main commitment of the day. Deyang city and Mianzhu offer different cultural subjects and need additional time rather than a quick detour after the museum. Use the museum's full name, actual entrance and hotel address in the transport plan.",
    experiences: [
      "Compare selected bronze, gold and jade objects through material, form and archaeological context",
      "Explore the difference between visible evidence, conservation and a debated interpretation",
      "Give families a small set of engaging visual questions and enough time to rest",
    ],
    planningNotes: [
      "Confirm current museum reservations and actual traveler entry details before fixing the day",
      "Count the complete road, entrance, substantial galleries, meal and return",
      "Keep specialist interpretation, current displays and research access as separate questions",
    ],
    arrival:
      "From Chengdu, compare a complete private road outing with an actual dated train and both station transfers. The correct station and final museum entrance matter; a short train ride does not describe the full day. An arrival through a Chengdu airport adds another substantial transfer, so avoid attaching the essential museum session to an uncertain flight. For a local stay, send the precise hotel address and check whether bags can be stored while visiting. Recheck dated transport and admission before booking a tight onward connection.",
    gettingAround:
      "A vehicle can link the hotel, museum entrance and selected town stop, but the public galleries remain a walking and standing visit. Confirm pickup, bags, lunch and service hours, and ask about current museum arrangements for groups, guide equipment and mobility support. A private guide may provide strong context without being an archaeologist. If specialist knowledge matters, agree the person's relevant expertise and language support instead of infer it from a premium label.",
    stayStrategy:
      "For most first visits based in Chengdu, a dedicated day avoids an unnecessary hotel move. Choose Guanghan overnight when a suitable local room, gentler pace or wider route makes the difference clear. The additional value should be better sleep, useful museum time or a real second purpose. It should not depend on promised empty halls, special excavation access or an unconfirmed scholarly meeting. High-quality planning protects attention and comfort as much as it arranges transport.",
    firstTimerNote:
      "You do not need archaeological training to enjoy Sanxingdui. Begin with three questions: What can I actually see? What was the object made from and how? What evidence supports the explanation of its use? Let a guide connect those observations to ancient Shu and explain where the answer remains uncertain. This approach makes even a small selection memorable and keeps the extraordinary imagery from becoming only a series of photographs.",
    faqs: [
      {
        question: "Is Sanxingdui Museum in Chengdu?",
        answer:
          "It is in Guanghan, a county-level city within Deyang north of Chengdu. A dedicated day trip from a Chengdu hotel can work, but the complete road and museum visiting time need to be included. Guanghan town and the museum are also distinct locations.",
      },
      {
        question: "How long should I allow for Sanxingdui Museum?",
        answer:
          "Give it a substantial gallery window, often several hours for a thoughtful introduction, plus admission, breaks, food and the full journey. The right duration depends on interest, current displays, crowds and mobility. A brief stop between two major outings is a more selective experience.",
      },
      {
        question: "Do I need to stay overnight in Guanghan?",
        answer:
          "Not necessarily. Many first visits work as a dedicated outing while keeping a Chengdu room. Stay locally only when the actual hotel, useful hours and wider route improve the trip. Two local nights give one complete day but do not establish special museum access.",
      },
      {
        question: "Can I see active Sanxingdui excavations or conservation laboratories?",
        answer:
          "A standard museum visit does not establish access to active archaeological or conservation work. Public interpretation and working-area access are different arrangements. Follow the institution's current rules; a private guide or specialist booking cannot independently authorize restricted entry.",
      },
      {
        question: "Is Sanxingdui suitable for children?",
        answer:
          "It can be rewarding with a manageable route, selected visual questions and breaks. Older children and teenagers may enjoy comparing evidence and theories. Younger children may need a shorter visit. Confirm walking, standing, toilets and the guide's family format before choosing the day.",
      },
      {
        question: "Can I visit Sanxingdui and Leshan on the same day?",
        answer:
          "For a meaningful first visit, plan separate main outings. They require different roads, substantial visiting time and their own physical assessment. A compressed combination sacrifices interpretation, meals and rest, even when a private vehicle is available.",
      },
      {
        question: "Does the 12-day family tour include Sanxingdui automatically?",
        answer:
          "No. Sanxingdui is one option for its Chengdu choice day, alongside alternative cooking, Leshan or rest plans. Choose one principal option and have tickets, transport, meals and service hours specified. An archaeology-specialist upgrade is separately confirmed and subject to availability.",
      },
    ],
    culturalStory: {
      title: "The masks are the beginning of the question",
      paragraphs: [
        "Sanxingdui's striking faces can dominate a first impression, but their context makes them more interesting. Look at scale, the treatment of eyes and ears, the relationship between heads and bodies, and the materials used across different objects. Then ask what excavation and comparison can tell us. Ancient Shu belongs within a wider account of the Sichuan Basin and Bronze Age interaction; unusual imagery should open discussion rather than invite a sensational explanation unsupported by evidence.",
        "The way an object reaches a gallery is another part of its story. Fragmentary finds, careful conservation, reconstruction and a changing interpretation can all shape what a visitor sees. Labels and good guiding should distinguish an original surface from a restored form and an observation from a hypothesis. An unresolved question is not a weakness to be hidden. It can give children and adults a more honest sense of how archaeology builds knowledge.",
      ],
    },
    foodStory: {
      title: "Leave a proper meal window in the museum day",
      paragraphs: [
        "Choose lunch by the actual visiting sequence rather than assume it can fit between every gallery. A museum-area meal, Guanghan town restaurant and return to Chengdu create different roads and timing. Local noodles, rice dishes or a suitable shared Sichuan meal may work depending on the kitchen. Ask about spice and portion size, especially for families, and avoid turning a focused archaeological day into another long food-and-shopping circuit unless that is genuinely wanted.",
        "Review chili, Sichuan pepper, wheat, soy, sesame, peanuts, eggs and meat stocks as relevant to the actual dishes. Mild cooking does not establish allergen avoidance, and a vegetable plate does not guarantee vegetarian stock or separate preparation. Confirm the restaurant's ability and a practical alternative for serious needs. Carry agreed snacks and drinking water within current museum rules, with seated food breaks planned rather than improvised among displays.",
      ],
    },
    itinerary: [
      {
        day: "Dedicated day / departure",
        title: "Reach the museum with the admission plan settled",
        description:
          "Leave the actual Chengdu hotel with the full road and current reservation window allowed for. Complete public entry procedures and begin with a concise ancient-Shu introduction. Do not use the transfer as a reason to attach another major distant attraction.",
      },
      {
        day: "Main gallery visit",
        title: "Move from a few anchor objects to useful questions",
        description:
          "Compare selected bronze, gold or jade subjects in the current display, with breaks and a suitable family or specialist format. Explain conservation and competing interpretations where relevant. The exact sequence follows current galleries rather than a guarantee that every named object will be on view.",
      },
      {
        day: "Meal and return / optional local stay",
        title: "Keep the ending as comfortable as the beginning",
        description:
          "Allow a suitable meal and the complete return to Chengdu, or settle into a confirmed Guanghan room when a local overnight genuinely improves the route. A modest town stop may fit; a substantial Mianzhu craft visit needs another plan. This outline is illustrative, not a separate published package or guarantee of admission, specialists or research access.",
      },
    ],
  },
};
