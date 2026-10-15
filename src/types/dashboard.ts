export type DashboardHabit = {
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

export type DashboardProgress = {
  completed: number;
  total: number;
  percentage: number;
};

export type DashboardData = {
  date: string;
  habits: DashboardHabit[];
  progress: DashboardProgress;
};

export type DashboardResponse = {
  sucess: boolean;
  data: DashboardData;
};
