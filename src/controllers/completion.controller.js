import completionService from "../services/completion.service.js";

const completeHabit = async (req, res) => {
  try {
    const { habitId, date } = req.validated.body;

    const result = await completionService.completeHabit(
      req.user.userId,
      habitId,
      date,
    );
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Habit not found" });
    }
    return res
      .status(200)
      .json({ success: true, data: { completion: result.completion } });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to complete habit" });
  }
};

const uncompleteHabit = async (req, res) => {
  try {
    const { habitId, date } = req.validated.body;

    const result = await completionService.uncompleteHabit(
      req.user.userId,
      habitId,
      date,
    );
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Habit not found" });
    }
    return res
      .status(200)
      .json({ success: true, data: { completion: result.completion } });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to uncomplete habit" });
  }
};

const getCompletionsByDate = async (req, res) => {
  try {
    const { date } = req.validated.query;
    const completions = await completionService.getCompletionsByDate(
      req.user.userId,
      date,
    );
    return res
      .status(200)
      .json({ success: true, data: { completions: completions.completions } });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to get completions" });
  }
};

const completionController = {
  completeHabit,
  uncompleteHabit,
  getCompletionsByDate,
};

export default completionController;
