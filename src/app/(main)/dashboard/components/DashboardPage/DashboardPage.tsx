"use client";

import { Box } from "@mui/material";
import DailyFocus from "../DailyFocus/DailyFocus";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import RoutineSection from "../RoutineSection/RoutineSection";
import {
  DashboardStyled,
  DashboardContentStyled,
  DashboardSidebarStyled,
} from "./DashboardPage.styles";
import WeeklyFlow from "../WeeklyFlow/WeeklyFlow";
import DailyQuote from "../DailyQuote/DailyQuote";

export default function DashboardPage() {
  return (
    <DashboardStyled>
      <DashboardHeader />

      <DashboardContentStyled>
        <Box>
          <RoutineSection />
          <DailyQuote />
        </Box>

        <DashboardSidebarStyled>
          <DailyFocus completed={4} total={6} streak={12} />

          <WeeklyFlow />
        </DashboardSidebarStyled>
      </DashboardContentStyled>
    </DashboardStyled>
  );
}
