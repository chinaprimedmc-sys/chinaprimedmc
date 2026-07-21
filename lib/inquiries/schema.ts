import { z } from "zod";

const optionalContact = z.string().trim().max(200).optional().default("");

export const inquirySchema = z
  .object({
    sourcePage: z.string().trim().min(1).max(500),
    journeySlug: z.string().trim().max(160).optional().default(""),
    travelerType: z.enum(["family", "couple", "solo", "small-group"]),
    adults: z.number().int().min(1).max(20),
    children: z.number().int().min(0).max(20),
    travelingWithSeniors: z.boolean(),
    timing: z.string().trim().max(300).optional().default(""),
    duration: z.string().trim().max(120).optional().default(""),
    destinations: z.array(z.string().trim().min(1).max(100)).max(12),
    budgetTier: z.enum(["comfortable", "luxury", "ultra-bespoke"]),
    styles: z.array(z.string().trim().min(1).max(100)).max(12),
    name: z.string().trim().min(1, "Please enter your name.").max(120),
    email: optionalContact.refine(
      (value) => !value || z.email().safeParse(value).success,
      "Please enter a valid email address.",
    ),
    whatsapp: optionalContact,
    phone: optionalContact,
    contactMethods: z
      .array(z.enum(["email", "whatsapp", "phone"]))
      .min(1)
      .max(3),
    notes: z.string().trim().max(4000).optional().default(""),
    website: z.string().max(0).optional().default(""),
    turnstileToken: z.string().trim().min(1).max(4000),
  })
  .superRefine((data, context) => {
    if (!data.email && !data.whatsapp && !data.phone) {
      context.addIssue({
        code: "custom",
        message: "Please provide an email address, WhatsApp number, or phone number.",
        path: ["contact"],
      });
    }

    for (const method of data.contactMethods) {
      if (!data[method]) {
        context.addIssue({
          code: "custom",
          message: `Please provide the ${method} contact details you selected.`,
          path: [method],
        });
      }
    }
  });

export type InquiryInput = z.infer<typeof inquirySchema>;
