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
import { DashboardData } from "@/types/dashboard";
import { useEffect, useState } from "react";
import { dashboardApi } from "@/api/dashboard.api";

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setError("");

        const response = await dashboardApi.getDashboard();
        setDashboard(response.data);
        console.log(response);
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
          <RoutineSection habits={dashboard.habits} />
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
