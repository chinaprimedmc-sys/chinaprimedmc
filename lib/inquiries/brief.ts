export type InquiryBrief = {
  name: string;
  whatsapp: string;
};
export type BriefErrors = Partial<Record<keyof InquiryBrief, string>>;

export function exactGuestCount(value: string): number | null {
  return /^[1-9]\d?$/.test(value) && Number(value) <= 20 ? Number(value) : null;
}

export function validateBrief(brief: InquiryBrief): BriefErrors {
  const errors: BriefErrors = {};
  if (!brief.name.trim()) errors.name = "Please enter your first name.";
  if (!/^\+?[\d\s().-]{7,30}$/.test(brief.whatsapp.trim()))
    errors.whatsapp = "Enter your WhatsApp number, including country code.";
  return errors;
}

export function briefPayload(
  brief: InquiryBrief,
  context: {
    journeySlug?: string;
    summary?: string;
    duration?: string;
    guests?: string;
    timing?: string;
  } = {},
) {
  return {
    travelerType: null,
    adults: context.guests ? exactGuestCount(context.guests) : null,
    children: null,
    travelingWithSeniors: false,
    timing: context.timing ?? "",
    duration: context.duration ?? "",
    destinations: [],
    budgetTier: null,
    styles: [],
    name: brief.name.trim(),
    email: "",
    whatsapp: brief.whatsapp.trim(),
    journeySlug: context.journeySlug ?? "",
    notes: [context.summary, context.guests ? `Travellers: ${context.guests}` : ""]
      .filter(Boolean)
      .join("\n\n"),
  };
}
