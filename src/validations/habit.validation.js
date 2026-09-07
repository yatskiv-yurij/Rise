import z from "zod";

export const createHabitSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Habit name is required")
    .max(100, "Habit name must be at most 100 characters"),
  description: z
    .string()
    .trim()
    .max(500, "Description is too long")
    .optional()
    .default(""),
  category: z
    .string()
    .trim()
    .max(50, "Category is too long")
    .optional()
    .default("General"),
  icon: z.string().max(100).optional().default("check_circle"),
  color: z.string().optional().default("#5B5CE2"),
  scheduledTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format")
    .optional()
    .nullable()
    .default(null),
  repeat: z
    .object({
      type: z.enum(["daily", "weekly", "monthly"]),
      days: z.array(z.number().int().min(1).max(7)).default([]),
    })
    .optional()
    .default({ type: "daily", days: [] }),
  isActive: z.boolean().optional().default(true),
});

export const updateHabitSchema = createHabitSchema.partial();
