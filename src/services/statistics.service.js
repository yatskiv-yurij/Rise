import Habit from "../models/Habit.js";
import HabitCompletion from "../models/HabitCompletion.js";

const getDateRange = (from, to) => {
  const dates = [];

  const current = new Date(`${from}T00:00:00.000Z`);
  const end = new Date(`${to}T00:00:00.000Z`);

  while (current <= end) {
    dates.push(current.toISOString().slice(0, 10));
    current.setUTCDate(current.getUTCDate() + 1);
  }

  return dates;
};

const getDayOfWeek = () => {
  const [year, month, day] = date.split("-").map(Number);

  const jsDay = new Date(Date.UTC(year, month - 1, day)).getUTCDay();

  return jsDay === 0 ? 7 : jsDay;
};

const isHabitScheduleOnDate = (habit, date) => {
  if (habit.repeat.type === "daily") {
    return true;
  }

  const dayOfWeek = getDayOfWeek(date);

  return habit.repeat.days.includes(dayOfWeek);
};

const calculateStreaks = (dailyConsistency) => {
  let currentStreak = 0;
  let bestStreak = 0;
  let runningStreak = 0;

  for (const day of dailyConsistency) {
    if (day.completed > 0) {
      runningStreak += 1;

      if (runningStreak > bestStreak) {
        bestStreak = runningStreak;
      }
    } else {
      runningStreak = 0;
    }
  }

  for (let index = dailyConsistency.length - 1; index >= 0; index -= 1) {
    const day = dailyConsistency[index];

    if (day.completed > 0) {
      currentStreak += 1;
    } else {
      break;
    }
  }

  return { currentStreak, bestStreak };
};

const getStatistics = async (userId, from, to) => {
  const dates = getDateRange(from, to);

  const habits = await Habit.find({
    userId,
    isActive: true,
  }).sort({
    createdAt: 1,
  });

  const completions = await HabitCompletion.find({
    userId,
    date: {
      $gte: from,
      $lte: to,
    },
  }).sort({
    date: 1,
  });

  const completionMap = new Map();

  for (const completion of completions) {
    const key = `${completion.habitId.toString()}_${completion.date}`;

    completionMap.set(key, completion);
  }

  const dailyConsistency = dates.map((date) => {
    const scheduledHabits = habits.filter((habit) =>
      isHabitScheduleOnDate(habit, date),
    );

    const completed = scheduledHabits.filter((habit) => {
      const key = `${habit._id.toString()}_${date}`;

      return completionMap.has(key);
    }).length;

    const total = scheduledHabits.length;

    const percentage = total === 0 ? 0 : Math.round((completed / total) * 1000);

    return { date, completed, total, percentage };
  });

  const totalScheduled = dailyConsistency.reduce(
    (sum, day) => sum + day.total,
    0,
  );

  const totalCompleted = dailyConsistency.reduce(
    (sum, day) => sum + day.completed,
    0,
  );

  const completionRate =
    totalScheduled === 0
      ? 0
      : Math.round((totalCompleted / totalScheduled) * 100);

  const streaks = calculateStreaks(dailyConsistency);

  const habitPerformance = habits.map((habit) => {
    const scheduledDays = dates.filter((date) =>
      isHabitScheduleOnDate(habit, date),
    );

    const completedDays = scheduledDays.filter((date) => {
      const key = `${habit._id.toString()}_${date}`;

      return completionMap.has(key);
    });

    const total = scheduledDays.length;
    const completed = completedDays.length;

    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    return {
      habitId: habit._id,
      name: habit.name,
      category: habit.category,
      color: habit.color,
      completed,
      total,
      percentage,
    };
  });

  const insights = [];

  if (completionRate >= 80) {
    insights.push("You are building a strong and consistent routine.");
  } else if (completionRate >= 50) {
    insights.push("You are making progress. Keep showing up every day.");
  } else {
    insights.push(
      "Small steps matter. Focus on completing one habit at a time.",
    );
  }

  const bestHabit = [...habitPerformance]
    .filter((habit) => habit.total > 0)
    .sort((a, b) => b.percentage - a.percentage)[0];

  if (bestHabit) {
    insights.push(`${bestHabit.name} is your strongest habit in this period.`);
  }

  return {
    range: {
      from,
      to,
      days: dates.length,
    },

    metrics: {
      completionRate,
      currentStreak: streaks.currentStreak,
      bestStreak: streaks.bestStreak,
      totalCompletions: totalCompleted,
    },

    consistency: dailyConsistency,
    habitPerformance,
    insights,
  };
};

export default getStatistics;
