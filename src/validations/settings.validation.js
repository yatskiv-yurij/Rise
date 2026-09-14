import z from "zod";

const updateSettingsSchema = z.object({
  theme: z.enum(["light", "dark", "system"]).optional(),

  nitification: z
    .object({
      habitReminders: z.boolean().optional(),
      dailySummary: z.boolean().optional(),
      weeklyProgress: z.boolean().optional(),
    })
    .optional(),

  defaultHabitSettings: z
    .object({
      reminderTime: z
        .string()
        .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format")
        .optional(),
      weekStartsOn: z.union([z.literal(1), z.literal(7)]),
      defaultView: z.literal("today", "statistics").optional(),
    })
    .optional(),
});

export default updateSettingsSchema;
