export type CompletionPayload = {
  habitId: string;
  date: string;
};

export type HabitCompletion = {
  habitId: string;
  date: string;
  completedAt: string;
};

export type CompletionResponse = {
  success: boolean;
  data: {
    completion: HabitCompletion | null;
  };
};

export type CompletionsByDateResponse = {
  success: boolean;
  data: {
    completions: HabitCompletion[];
  };
};
