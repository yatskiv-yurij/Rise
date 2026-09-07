import mongoose from "mongoose";

import HabitCompletion from "../models/HabitCompletion.js";
import Habit from "../models/Habit.js";

const completeHabit = async (userId, habitId, date) => {
  if (!mongoose.Types.ObjectId.isValid(habitId)) {
    return null;
  }

  const habit = await Habit.findOne({ _id: habitId, userId });
  if (!habit) {
    return null;
  }

  const existingCompletion = await HabitCompletion.findOne({
    habitId,
    userId,
    date,
  });

  if (existingCompletion) {
    return {
      completion: existingCompletion,
    };
  }
  const completion = await HabitCompletion.create({ habitId, userId, date });
  return {
    completion,
  };
};

const uncompleteHabit = async (userId, habitId, date) => {
  if (!mongoose.Types.ObjectId.isValid(habitId)) {
    return null;
  }

  const habit = await Habit.findOne({ _id: habitId, userId });

  if (!habit) {
    return null;
  }

  const completion = await HabitCompletion.findOneAndDelete({
    habitId,
    userId,
    date,
  });
  return {
    completion,
  };
};

const getCompletionsByDate = async (userId, date) => {
  const completions = await HabitCompletion.find({ userId, date }).sort({
    createdAt: 1,
  });
  return { completions };
};

const completionService = {
  completeHabit,
  uncompleteHabit,
  getCompletionsByDate,
};

export default completionService;
