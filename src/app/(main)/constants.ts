import { HabitRowData, Quote } from "./types";

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

export const quotes: Quote[] = [
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Well done is better than well said.",
    author: "Benjamin Franklin",
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    text: "Energy and persistence conquer all things.",
    author: "Benjamin Franklin",
  },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Lost time is never found again.",
    author: "Benjamin Franklin",
  },
  {
    text: "Nothing will work unless you do.",
    author: "Maya Angelou",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
  {
    text: "Small deeds done are better than great deeds planned.",
    author: "Peter Marshall",
  },
  {
    text: "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.",
    author: "Benjamin Franklin",
  },
  {
    text: "If there is no struggle, there is no progress.",
    author: "Frederick Douglass",
  },
  {
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    text: "The more we do, the more we can do.",
    author: "William Hazlitt",
  },
];
