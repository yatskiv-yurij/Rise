import mongoose from "mongoose";

const habitCompletionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    habitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habit",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    completedAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

habitCompletionSchema.index(
  { userId: 1, habitId: 1, date: 1 },
  { unique: true },
);

const HabitCompletion = mongoose.model(
  "HabitCompletion",
  habitCompletionSchema,
);
export default HabitCompletion;
