import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { createContactSubmission, getContactSubmissions, updateContactSubmissionStatus } from "../db";

export const contactRouter = router({
  getSubmissions: publicProcedure
    .query(async () => {
      const submissions = await getContactSubmissions(100, 0);
      return submissions;
    }),

  updateStatus: publicProcedure
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "archived"]),
      })
    )
    .mutation(async ({ input }) => {
      const result = await updateContactSubmissionStatus(input.id, input.status);
      return result;
    }),

  submit: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().optional(),
        country: z.string().optional(),
        travelersCount: z.string().optional(),
        estimatedTravelTime: z.string().optional(),
        travelStyle: z.string().optional(),
        budgetRange: z.string().optional(),
        message: z.string().min(5, "Message must be at least 5 characters"),
      })
    )
    .mutation(async ({ input }) => {
      try {
        await createContactSubmission({
          name: input.name,
          email: input.email,
          phone: input.phone,
          country: input.country,
          travelersCount: input.travelersCount,
          estimatedTravelTime: input.estimatedTravelTime,
          travelStyle: input.travelStyle,
          budgetRange: input.budgetRange,
          message: input.message,
          status: "new",
        });

        console.log(`[Contact] New submission from ${input.name} (${input.email})`);

        return {
          success: true,
          message: "Thank you! We'll respond within 24 hours.",
        };
      } catch (error) {
        console.error("[Contact] Failed to save submission:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to save your enquiry. Please try again.",
        });
      }
    }),
});
