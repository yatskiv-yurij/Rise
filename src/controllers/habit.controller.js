import habitService from "../services/habit.service.js";

export const createHabit = async (req, res) => {
  try {
    const habit = await habitService.createHabit(req.user.userId, req.body);
    res.status(201).json({ success: true, data: { habit } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create habit" });
  }
};

export const getHabbits = async (req, res) => {
  try {
    const habits = await habitService.getHabbits(req.user.userId);
    res.status(200).json({ success: true, data: { habits } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to get habits" });
  }
};

export const getHabitById = async (req, res) => {
  try {
    const habit = await habitService.getHabitById(
      req.user.userId,
      req.params.id,
    );
    if (!habit) {
      return res
        .status(404)
        .json({ success: false, message: "Habit not found" });
    }

    res.status(200).json({ success: true, data: { habit } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to get habit" });
  }
};

export const updateHabit = async (req, res) => {
  try {
    const habit = await habitService.updateHabit(
      req.user.userId,
      req.params.id,
      req.body,
    );
    if (!habit) {
      return res
        .status(404)
        .json({ success: false, message: "Habit not found" });
    }
    res.status(200).json({ success: true, data: { habit } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update habit" });
  }
};

export const deleteHabit = async (req, res) => {
  try {
    const habit = await habitService.deleteHabit(
      req.user.userId,
      req.params.id,
    );
    if (!habit) {
      return res
        .status(404)
        .json({ success: false, message: "Habit not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Habit deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete habit" });
  }
};
