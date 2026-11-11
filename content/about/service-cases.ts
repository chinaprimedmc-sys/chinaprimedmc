import { getPublicTravelerReviews } from "@/content/home/traveler-reviews";

/** Editorial accounts of published guest feedback, not independently audited trip records.
 * Do not infer travel dates, party size, destinations or services beyond the source review.
 * Resolve authorization at render time; quotations must occur verbatim in the source.
 */
const serviceCaseDrafts = [
  {
    id: "first-china-at-your-pace",
    reviewId: 1,
    theme: "A first visit, thoughtfully paced",
    title: "Making a first journey to China feel manageable.",
    introduction:
      "For Emily Carter, planning a first visit meant finding a way to enjoy China without an exhausting schedule. Her feedback describes how the conversation about comfort and pace shaped the experience.",
    need: "Emily had spent time researching travel in China. She wanted to avoid a large group, repeated early starts and the feeling of continually moving between attractions. Hotel preferences, free time and comfortable walking levels mattered to her as much as the sightseeing itself.",
    response:
      "In her account, AVIORA began by asking about those preferences before preparing the itinerary. She describes well-located hotels and a private vehicle that gave the journey more flexibility than a rigid timetable. The focus was on how the days would feel, alongside what they would include.",
    outcome:
      "Emily felt the itinerary was genuinely personal. She reported that the location and comfort of the hotels made a noticeable difference after sightseeing, and that the arrangements helped China feel accessible while preserving the depth of the experience.",
    takeaway:
      "For a first visit, a useful brief includes walking comfort, preferred starting times and free time—not just a list of cities. Those answers give the planner a basis for discussing a realistic pace.",
    quote:
      "What we appreciated most was that AVIORA made China feel accessible without making it feel simplified.",
  },
  {
    id: "hotels-that-support-the-journey",
    reviewId: 4,
    theme: "Hotel selection with a purpose",
    title: "Choosing a stay for the days around it.",
    introduction:
      "Sophie Bennett's feedback shows why hotel planning goes beyond choosing a star rating. She describes how location, comfort and the surrounding itinerary worked together during her trip.",
    need: "Sophie initially associated a luxury hotel with the most expensive five-star property. What mattered in practice was how each stay supported her time in the destination: where she could go in the evening, how she could rest after sightseeing and whether the morning would feel relaxed.",
    response:
      "According to Sophie, AVIORA considered where she would spend time and selected hotels balancing design, service, location and comfort. She describes being able to walk to restaurants and shopping areas in some cities, while other stays offered a quiet retreat after a busy day.",
    outcome:
      "She singled out spacious rooms, comfortable beds and breakfasts that allowed an unhurried start. She also valued combining polished accommodation with time in markets, tea houses and local neighborhoods. The hotel supported the wider journey rather than becoming its only focus.",
    takeaway:
      "When discussing hotels, explain the evenings and mornings you enjoy as well as your room preferences. Location and the rhythm of the stay can affect your experience just as much as the property category.",
    quote:
      "They looked at where we would actually spend our time and selected hotels that balanced design, service, location and comfort.",
  },
  {
    id: "time-to-follow-your-curiosity",
    reviewId: 6,
    theme: "Flexibility during the journey",
    title: "Knowing when a good afternoon deserves more time.",
    introduction:
      "Laura Mitchell had traveled privately before. In her feedback, the difference was feeling that the itinerary belonged to her party, including an afternoon when their interest in a neighborhood changed the day's rhythm.",
    need: "Laura wanted a journey adjusted around her interests. She valued the freedom to spend time where an experience was rewarding, rather than moving on simply because another stop appeared in the original schedule.",
    response:
      "She recalls enjoying a neighborhood more than expected. Her guide suggested slowing down and staying longer. They had coffee, walked, browsed local shops and eventually ate an early dinner nearby. These details come from Laura's account of that afternoon; they are not a promise that every reserved activity can be changed in the same way.",
    outcome:
      "Laura remembered this freedom as an important part of the trip's value. Her feedback describes a route, timing and experiences that felt adjusted to her interests, and an afternoon made more enjoyable by allowing an existing experience to unfold.",
    takeaway:
      "Tell your guide when something interests you. Where the day's bookings, opening hours and transport allow, the team can discuss a change. Fixed reservations and supplier terms still need to be considered before an adjustment is agreed.",
    quote: "Sometimes it is about having the freedom to stay where the experience is good.",
  },
] as const;

export function getServiceCases() {
  const reviews = new Map(getPublicTravelerReviews().map((review) => [review.id, review]));
  return serviceCaseDrafts.flatMap((story) => {
    const review = reviews.get(story.reviewId);
    if (!review || !review.paragraphs.some((paragraph) => paragraph.includes(story.quote)))
      return [];
    return [
      {
        ...story,
        author: review.author,
        location: review.location,
        sourceHref: `/reviews?review=${review.id}`,
      },
    ];
  });
}
