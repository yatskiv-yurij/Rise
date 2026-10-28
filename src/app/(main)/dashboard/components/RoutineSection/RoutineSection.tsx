"use client";

import { Add } from "@mui/icons-material";

import HabitRow from "../HabitRow/HabitRow";

import {
  AddActivityButtonStyled,
  HabitListStyled,
  RoutineHeaderStyled,
  RoutineSectionStyled,
  RoutineTitleStyled,
} from "./RoutineSection.styles";

import type { DashboardHabit } from "@/types/dashboard";

type RoutineSectionProps = {
  habits: DashboardHabit[];
  onToggleHabit: (habit: DashboardHabit) => void;
  updatingHabitIds: string[];
};

export default function RoutineSection({
  habits,
  onToggleHabit,
  updatingHabitIds,
}: RoutineSectionProps) {
  return (
    <RoutineSectionStyled>
      <RoutineHeaderStyled>
        <RoutineTitleStyled>Your Routine</RoutineTitleStyled>

        <AddActivityButtonStyled startIcon={<Add />}>
          Add Activity
        </AddActivityButtonStyled>
      </RoutineHeaderStyled>

      <HabitListStyled>
        {habits?.map((habit) => (
          <HabitRow
            key={habit.id}
            habit={habit}
            onToggle={onToggleHabit}
            isUpdating={updatingHabitIds.includes(habit.id)}
          />
        ))}
      </HabitListStyled>
    </RoutineSectionStyled>
  );
}
