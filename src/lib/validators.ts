import { z } from "zod";

export const phoneSchema = z
  .string()
  .min(8)
  .max(20)
  .regex(/^\+?[0-9\s-]+$/);

export const otpSchema = z.string().length(6);

export const createGroupSchema = z.object({
  title: z.string().min(3).max(80),
  description: z.string().min(10).max(600),
  category: z.enum(["SUBSCRIPTION", "PHYSICAL_GOODS"]),
  city: z.string().min(2).max(80),
  area: z.string().max(80).optional(),
  deadlineAt: z.string().datetime(),
  maxMembers: z.number().int().min(2).max(20)
});

export const chatMessageSchema = z.object({
  groupId: z.string().min(4),
  body: z.string().min(1).max(500)
});

export const meetupSchema = z.object({
  time: z.string().datetime(),
  place: z.string().min(3).max(120),
  notes: z.string().max(300).optional()
});
