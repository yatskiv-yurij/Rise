import mongoose from "mongoose";

import Habit from "../models/Habit.js";

const createHabit = async (userId, data) => {
  const habit = await Habit.create({ userId, ...data });
  return habit;
};

const getHabbits = async (userId) => {
  const habits = await Habit.find({ userId }).sort({ createdAt: -1 });
  return habits;
};

const getHabitById = async (userId, habitId) => {
  if (!mongoose.Types.ObjectId.isValid(habitId)) {
    return null;
  }

  const habit = await Habit.findOne({ _id: habitId, userId });
  return habit;
};

const updateHabit = async (userId, habitId, data) => {
  if (!mongoose.Types.ObjectId.isValid(habitId)) {
    return null;
  }

  const habit = await Habit.findOneAndUpdate(
    {
      _id: habitId,
      userId,
    },
    data,
    { returnDocument: "after", runValidators: true },
  );
  return habit;
};

const deleteHabit = async (userId, habitId) => {
  if (!mongoose.Types.ObjectId.isValid(habitId)) {
    return null;
  }

  const habit = await Habit.findOneAndDelete({ _id: habitId, userId });
  return habit;
};

const habitService = {
  createHabit,
  getHabbits,
  getHabitById,
  updateHabit,
  deleteHabit,
};

export default habitService;
