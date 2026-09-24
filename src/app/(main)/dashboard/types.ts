import { ReactNode } from "react";

export type MainLayoutProps = {
  children: ReactNode;
};

export type HabitRowData = {
  id: string;
  name: string;
  category: string;
  time: string;
  completed: boolean;
  completedAt?: string;
};

export type HabitRowProps = {
  habit: HabitRowData;
};

export type DailyFocusProps = {
  completed: number;
  total: number;
  streak: number;
};
