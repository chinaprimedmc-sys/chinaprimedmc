/** Planning guidance summarizes existing /terms and /company content; it creates no new terms. */
export const bookingProcess = [
  {
    title: "Begin with what matters to you",
    body: "A China specialist reviews your enquiry and asks about your dates, traveling party, interests and comfort. A rough idea is enough to begin; you can work through the route together.",
    detail: "A personal reply normally within 24 hours. No payment is needed to enquire.",
  },
  {
    title: "Shape the journey and review the price",
    body: "Discuss the cities, pace, hotel preferences and practical needs before reviewing a written proposal. The quotation sets out the services, price and payment conditions so you can decide with the details in front of you.",
    detail:
      "Proposed hotels and services remain subject to availability until confirmed in writing.",
  },
  {
    title: "Confirm when you are ready",
    body: "A binding booking requires a written proposal or confirmation, your formal acceptance of the contract and terms, receipt of the required initial payment in cleared funds, and our written acceptance with the relevant supplier arrangements.",
    detail:
      "Your booking documents set the initial payment, balance date and accepted payment method.",
  },
  {
    title: "Prepare for the days ahead",
    body: "Before departure, review your arrival arrangements, meeting points and on-trip contact details with our China team. During the journey, raise a practical issue with your guide or the team so they can discuss the available options with you.",
    detail:
      "Changes are checked against availability, supplier conditions and any additional cost.",
  },
] as const;

export const proposalChecklist = [
  {
    title: "Your route and daily pace",
    body: "Cities, travel dates, sightseeing, free time and the transfers between them. Discuss walking, stairs and rest needs before agreeing the itinerary.",
  },
  {
    title: "Hotels and room arrangements",
    body: "The hotel and room basis, occupancy and meals included, with any proposed alternatives or availability conditions made clear.",
  },
  {
    title: "Guides, transport and inclusions",
    body: "Guide language, guided days, vehicle arrangements and included admissions or activities, alongside anything you will pay for separately.",
  },
  {
    title: "Price and payment",
    body: "Currency, total price, initial payment, balance date, accepted payment method and payee details. Your enquiry itself requires no payment.",
  },
  {
    title: "Changes and cancellation",
    body: "The applicable cancellation charges and any stricter hotel, ticket or activity conditions disclosed before payment. Ask about anything you would like clarified.",
  },
  {
    title: "The company responsible",
    body: "The legal contracting company, its contact details and the services it is responsible for providing, recorded in your booking documents.",
  },
] as const;

export const bookingQuestions = [
  {
    question: "Can I enquire before choosing dates or cities?",
    answer:
      "Yes. Share your approximate travel period, the number of travelers and a few interests. If you are still deciding, say so. Your specialist can discuss a sensible route and pace before you settle the details.",
  },
  {
    question: "Does sending this form reserve my trip?",
    answer:
      "An enquiry starts the planning conversation. A proposal is also a planning stage. Your booking becomes binding only after the written documents, formal acceptance, required cleared payment and AVIORA’s written confirmation described above are complete.",
  },
  {
    question: "Can you plan around dietary, mobility or family needs?",
    answer:
      "Tell us early about walking limits, stairs, allergies, dietary requirements and room arrangements. We check what is practical on your route and explain any limitations. A specific arrangement is included only once confirmed in writing.",
  },
  {
    question: "What if I need to change or cancel after booking?",
    answer:
      "Send your request to our China team in writing. We check availability and explain the relevant costs and supplier conditions. Cancellation charges depend on the notice received and the accepted booking terms; the full policy explains the calculation and refund process.",
  },
] as const;
