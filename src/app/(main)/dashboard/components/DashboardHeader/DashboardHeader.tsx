"use client";

import WeekCalendar from "../WeekCalendar/WeekCalendar";
import {
  DashboardDateStyled,
  DashboardWelcomeStyled,
  DashboardGreetingStyled,
  DashboardHeaderStyled,
} from "./DashboardHeader.styles";

export default function DashboardHeader() {
  return (
    <DashboardHeaderStyled>
      <DashboardWelcomeStyled>
        <DashboardGreetingStyled>Good morning, Alex</DashboardGreetingStyled>
        <DashboardDateStyled>Monday, September 22, 2026</DashboardDateStyled>
      </DashboardWelcomeStyled>
      <WeekCalendar />
    </DashboardHeaderStyled>
  );
}
