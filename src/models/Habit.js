import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 100,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },
    category: {
      type: String,
      trim: true,
      maxlength: 50,
      default: "General",
    },
    icon: {
      type: String,
      default: "check_circle",
    },
    color: {
      type: String,
      default: "#5B5CE2",
    },
    scheduledTime: {
      type: String,
      default: null,
    },
    repeat: {
      type: {
        type: String,
        enum: ["daily", "weekly", "monthly"],
        default: "daily",
      },
      days: {
        type: [Number],
        default: [],
        validate: {
          validator: (days) =>
            days.every((day) => Number.isInteger(day) && day >= 1 && day <= 7),
          message: "Days must contain numbers from 1 to 7",
        },
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

habitSchema.index({ userId: 1, isActive: 1 });

module.exports = mongoose.model("Habit", habitSchema);
