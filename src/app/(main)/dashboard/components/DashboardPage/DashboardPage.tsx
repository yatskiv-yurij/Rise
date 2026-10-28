"use client";

import { Box, CircularProgress, Typography } from "@mui/material";
import DailyFocus from "../DailyFocus/DailyFocus";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import RoutineSection from "../RoutineSection/RoutineSection";
import {
  DashboardStyled,
  DashboardContentStyled,
  DashboardSidebarStyled,
  LoadingBoxStyled,
} from "./DashboardPage.styles";
import WeeklyFlow from "../WeeklyFlow/WeeklyFlow";
import DailyQuote from "../DailyQuote/DailyQuote";
import { DashboardData, DashboardHabit } from "@/types/dashboard";
import { useEffect, useState, useCallback } from "react";
import { dashboardApi } from "@/api/dashboard.api";
import { completionsApi } from "@/api/completions.api";

function getLocalDate(): string {
  const today = new Date();
  return [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");
}

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingHabitIds, setUpdatingHabitIds] = useState<string[]>([]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setError("");

        const response = await dashboardApi.getDashboard();
        setDashboard(response.data);
      } catch {
        setError(
          "Dashboard could not be loaded. Please try refreshing the page",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const handleToggleHabit = useCallback(
    async (habit: DashboardHabit) => {
      if (!dashboard || updatingHabitIds.includes(habit.id)) {
        return;
      }

      const date = dashboard.date || getLocalDate();

      setError("");
      setUpdatingHabitIds((ids) => [...ids, habit.id]);

      try {
        if (habit.completed) {
          await completionsApi.uncompleteHabit({
            habitId: habit.id,
            date,
          });
        } else {
          await completionsApi.completeHabit({
            habitId: habit.id,
            date,
          });
        }

        setDashboard((current) => {
          if (!current) {
            return current;
          }

          const habits = current.habits.map((item) =>
            item.id === habit.id
              ? {
                  ...item,
                  completed: !habit.completed,
                  completedAt: habit.completed
                    ? null
                    : new Date().toISOString(),
                }
              : item,
          );

          const completed = habits.filter((item) => item.completed).length;
          const total = habits.length;

          return {
            ...current,
            habits,
            progress: {
              completed,
              total,
              percentage:
                total === 0 ? 0 : Math.round((completed / total) * 100),
            },
          };
        });
      } catch {
        setError(`Could not update "${habit.name}". Please try again.`);
      } finally {
        setUpdatingHabitIds((ids) => ids.filter((id) => id !== habit.id));
      }
    },
    [dashboard, updatingHabitIds],
  );

  if (isLoading) {
    <DashboardStyled>
      <LoadingBoxStyled>
        <CircularProgress />
      </LoadingBoxStyled>
    </DashboardStyled>;
  }

  if (error || !dashboard) {
    return (
      <DashboardStyled>
        <Typography color="error">
          {error || "Dashboard data missing"}
        </Typography>
      </DashboardStyled>
    );
  }

  return (
    <DashboardStyled>
      <DashboardHeader />

      <DashboardContentStyled>
        <Box>
          <RoutineSection
            habits={dashboard.habits}
            onToggleHabit={handleToggleHabit}
            updatingHabitIds={updatingHabitIds}
          />
          <DailyQuote />
        </Box>

        <DashboardSidebarStyled>
          <DailyFocus
            completed={dashboard.progress.completed}
            total={dashboard.progress.total}
            streak={12}
          />

          <WeeklyFlow />
        </DashboardSidebarStyled>
      </DashboardContentStyled>
    </DashboardStyled>
  );
}
