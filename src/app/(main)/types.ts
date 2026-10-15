import { ReactNode } from "react";

export type MainLayoutProps = {
  children: ReactNode;
};

export type HabitRowData = {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  scheduledTime: string | null;
  completed: boolean;
  completedAt: string | null;
};

export type HabitRowProps = {
  habit: HabitRowData;
};

export type DailyFocusProps = {
  completed: number;
  total: number;
  streak: number;
};

export interface Quote {
  text: string;
  author: string;
}
