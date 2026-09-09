import Habit from "../models/Habit.js";
import HabitCompletion from "../models/HabitCompletion.js";

const getDayOfWeek = (date) => {
  const [year, month, day] = date.split("-").map(Number);

  const jsDay = new Date(Date.UTC(year, month - 1, day)).getUTCDay();

  return jsDay === 0 ? 7 : jsDay;
};

const getDashboard = async (userId, date) => {
  const dayOfWeek = getDayOfWeek(date);

  const habits = await Habit.find({
    userId,
    isActive: true,
  }).sort({
    scheduledTime: 1,
    createdAt: 1,
  });

  const completions = await HabitCompletion.find({
    userId,
    date,
  });

  const completionMap = new Map(
    completions.map((completion) => [
      completion.habitId.toString(),
      completion,
    ]),
  );

  const scheduledHabits = habits.filter((habit) => {
    if (habit.repeat.type === "daily") {
      return true;
    }

    return habit.repeat.days.includes(dayOfWeek);
  });

  const dashboardHabits = scheduledHabits.map((habit) => {
    const completion = completionMap.get(habit._id.toString());

    return {
      id: habit._id,
      name: habit.name,
      description: habit.description,
      category: habit.category,
      icon: habit.icon,
      color: habit.color,
      scheduledTime: habit.scheduledTime,
      completed: Boolean(completion),
      completedAt: completion ? completion.completetedAt : null,
    };
  });

  const completed = dashboardHabits.filter((habit) => habit.completed).length;

  const total = dashboardHabits.length;

  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return {
    date,
    habits: dashboardHabits,
    progress: {
      completed,
      total,
      percentage,
    },
  };
};

const dashboardService = { getDashboard };
export default dashboardService;
