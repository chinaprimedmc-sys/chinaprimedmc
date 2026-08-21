import { z } from "zod";

const optionalContact = z.string().trim().max(200).optional().default("");

export const inquirySchema = z
  .object({
    sourcePage: z.string().trim().min(1).max(500),
    landingPage: z.string().trim().max(500).optional().default(""),
    referrer: z.string().trim().max(500).optional().default(""),
    utmSource: z.string().trim().max(160).optional().default(""),
    utmMedium: z.string().trim().max(160).optional().default(""),
    utmCampaign: z.string().trim().max(160).optional().default(""),
    utmContent: z.string().trim().max(160).optional().default(""),
    utmTerm: z.string().trim().max(160).optional().default(""),
    gclid: z.string().trim().max(240).optional().default(""),
    journeySlug: z.string().trim().max(160).optional().default(""),
    viewedJourneys: z.array(z.string().trim().min(1).max(160)).max(40).optional().default([]),
    travelerType: z
      .enum(["family", "couple", "solo", "small-group", "undecided"])
      .nullable()
      .optional()
      .default(null),
    adults: z.number().int().min(1).max(20).nullable().optional().default(null),
    children: z.number().int().min(0).max(20).nullable().optional().default(null),
    travelingWithSeniors: z.boolean(),
    timing: z.string().trim().max(300).optional().default(""),
    duration: z.string().trim().max(120).optional().default(""),
    destinations: z.array(z.string().trim().min(1).max(100)).max(12),
    budgetTier: z
      .enum(["comfortable", "luxury", "ultra-bespoke"])
      .nullable()
      .optional()
      .default(null),
    styles: z.array(z.string().trim().min(1).max(100)).max(12),
    name: z.string().trim().min(1, "Please enter your name.").max(120),
    email: optionalContact.refine(
      (value) => !value || z.email().safeParse(value).success,
      "Please enter a valid email address.",
    ),
    whatsapp: optionalContact,
    notes: z.string().trim().max(4000).optional().default(""),
    website: z.string().max(0).optional().default(""),
    turnstileToken: z.string().trim().min(1).max(4000),
  })
  .superRefine((data, context) => {
    if (!data.email && !data.whatsapp) {
      context.addIssue({
        code: "custom",
        message: "Please provide an email address or WhatsApp number.",
        path: ["contact"],
      });
    }
  });

export type InquiryInput = z.infer<typeof inquirySchema>;
