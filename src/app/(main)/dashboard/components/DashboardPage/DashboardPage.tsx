"use client";

import { Box } from "@mui/material";
import DailyFocus from "../DailyFocus/DailyFocus";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import RoutineSection from "../RoutineSection/RoutineSection";
import {
  DashboardStyled,
  DashboardContentStyled,
} from "./DashboardPage.styles";
import WeeklyFlow from "../WeeklyFlow/WeeklyFlow";

export default function DashboardPage() {
  return (
    <DashboardStyled>
      <DashboardHeader />

      <DashboardContentStyled>
        <RoutineSection />

        <Box>
          <DailyFocus completed={4} total={6} streak={12} />

          <WeeklyFlow />
        </Box>
      </DashboardContentStyled>
    </DashboardStyled>
  );
}
