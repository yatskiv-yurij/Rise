import { HabitRowData } from "./types";

export const weekDays = [
  { name: "Mon", number: 22 },
  { name: "Tue", number: 23 },
  { name: "Wed", number: 24 },
  { name: "Thu", number: 25, active: true },
  { name: "Fri", number: 26 },
  { name: "Sat", number: 27 },
  { name: "Sun", number: 28 },
];

export const habits: HabitRowData[] = [
  {
    id: "1",
    name: "Morning workout",
    category: "Exercise",
    time: "07:30",
    completed: true,
    completedAt: "07:45",
  },
  {
    id: "2",
    name: "Read 20 pages",
    category: "Learning",
    time: "09:00",
    completed: true,
    completedAt: "09:15",
  },
  {
    id: "3",
    name: "Drink 2L of water",
    category: "Health",
    time: "All day",
    completed: true,
    completedAt: "16:20",
  },
  {
    id: "4",
    name: "Meditation",
    category: "Mindfulness",
    time: "18:00",
    completed: false,
  },
  {
    id: "5",
    name: "Evening journaling",
    category: "Reflection",
    time: "21:30",
    completed: false,
  },
];

export const data = [
  { day: "M", value: 4 },
  { day: "T", value: 3 },
  { day: "W", value: 6 },
  { day: "T", value: 2 },
  { day: "F", value: 4, active: true },
  { day: "S", value: 6 },
  { day: "S", value: 3 },
];
