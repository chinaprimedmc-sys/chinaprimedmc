import { z } from "zod";

const slugSchema = z
  .string()
  .trim()
  .min(2)
  .max(120)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens.");

const commonSchema = z.object({
  id: z.uuid().optional(),
  updatedAt: z.iso.datetime().optional(),
  title: z.string().trim().min(3).max(180),
  slug: slugSchema,
  subtitle: z.string().trim().min(10).max(400),
  summary: z.string().trim().min(20).max(1000),
  status: z.enum(["draft", "published"]),
  heroImageId: z.uuid().nullable().optional(),
  seoTitle: z.string().trim().min(3).max(180),
  seoDescription: z.string().trim().min(20).max(500),
  body: z.string().trim().max(30000),
  gallery: z
    .array(
      z.object({
        src: z.string().url(),
        alt: z.string().trim().min(3).max(300),
        width: z.number().int().positive().optional(),
        height: z.number().int().positive().optional(),
        objectPosition: z.string().trim().max(40).optional(),
      }),
    )
    .max(40),
});

export const cmsJourneyInputSchema = commonSchema.extend({
  type: z.literal("journey"),
  route: z.string().trim().min(3).max(300),
  durationLabel: z.string().trim().min(2).max(80),
  bestFor: z.string().trim().min(3).max(300),
  styles: z.array(z.string().trim().min(1).max(80)).max(12),
  destinations: z.array(z.string().trim().min(1).max(80)).max(20),
  days: z
    .array(
      z.object({
        day: z.string().trim().min(1).max(40),
        city: z.string().trim().min(1).max(100),
        title: z.string().trim().min(3).max(180),
        description: z.string().trim().min(10).max(1500),
      }),
    )
    .max(40),
});

export const cmsBlogInputSchema = commonSchema.extend({
  type: z.literal("blog"),
  category: z.string().trim().min(2).max(100),
  author: z.string().trim().min(2).max(150),
  tags: z.array(z.string().trim().min(1).max(80)).max(30),
  readingTime: z.string().trim().max(40).default("5 min read"),
});
