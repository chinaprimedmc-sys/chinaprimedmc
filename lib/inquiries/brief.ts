export const guestOptions = ["1", "2", "3", "4", "3-4", "5-6", "7+", "Not sure yet"] as const;
export const timingOptions = [
  "Within 3 months",
  "3-6 months",
  "6-12 months",
  "Next year",
  "Not sure yet",
] as const;
export type InquiryBrief = {
  name: string;
  whatsapp: string;
  timing: string;
  guests: string;
  notes: string;
};
export type BriefErrors = Partial<Record<keyof InquiryBrief, string>>;

export function exactGuestCount(value: string): number | null {
  return /^[1-9]\d?$/.test(value) && Number(value) <= 20 ? Number(value) : null;
}

export function validateBrief(brief: InquiryBrief): BriefErrors {
  const errors: BriefErrors = {};
  if (!brief.name.trim()) errors.name = "Please enter your name.";
  if (!/^\+?[\d\s().-]{7,30}$/.test(brief.whatsapp.trim()))
    errors.whatsapp = "Enter your WhatsApp number, including country code.";
  if (!brief.timing) errors.timing = "Choose a time, or select Not sure yet.";
  if (!brief.guests) errors.guests = "Choose your group size, or select Not sure yet.";
  return errors;
}

export function briefPayload(
  brief: InquiryBrief,
  context: { journeySlug?: string; summary?: string; duration?: string } = {},
) {
  return {
    travelerType: null,
    adults: exactGuestCount(brief.guests),
    children: null,
    travelingWithSeniors: false,
    timing: brief.timing,
    duration: context.duration ?? "",
    destinations: [],
    budgetTier: null,
    styles: [],
    name: brief.name.trim(),
    email: "",
    whatsapp: brief.whatsapp.trim(),
    journeySlug: context.journeySlug ?? "",
    notes: [context.summary, `Travellers: ${brief.guests}`, brief.notes.trim()]
      .filter(Boolean)
      .join("\n\n"),
  };
}
