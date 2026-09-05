import mongoose from "mongoose";

const userSettingsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    theme: {
      type: String,
      enum: ["light", "dark", "system"],
      default: "system",
    },
    notifications: {
      habitReminders: {
        type: Boolean,
        default: true,
      },
      dailySummary: {
        type: Boolean,
        default: true,
      },
      weeklyProgress: {
        type: Boolean,
        default: false,
      },
    },
    defaultHabitSettings: {
      reminderTime: {
        type: String,
        default: "09:00",
      },
      weekStartsOn: {
        type: Number,
        enum: [1, 7],
        default: 1,
      },
      defaultView: {
        type: String,
        enum: ["today", "statistics"],
        default: "today",
      },
    },
  },
  {
    timestamps: true,
  },
);
const UserSettings = mongoose.model("UserSettings", userSettingsSchema);
export default UserSettings;
