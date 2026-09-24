import { Add } from "@mui/icons-material";

import HabitRow from "../HabitRow/HabitRow";

import {
  AddActivityButtonStyled,
  HabitListStyled,
  RoutineHeaderStyled,
  RoutineSectionStyled,
  RoutineTitleStyled,
} from "./RoutineSection.styles";

import { habits } from "../../constants";

export default function RoutineSection() {
  return (
    <RoutineSectionStyled>
      <RoutineHeaderStyled>
        <RoutineTitleStyled>Your Routine</RoutineTitleStyled>

        <AddActivityButtonStyled startIcon={<Add />}>
          Add Activity
        </AddActivityButtonStyled>
      </RoutineHeaderStyled>

      <HabitListStyled>
        {habits.map((habit) => (
          <HabitRow key={habit.id} habit={habit} />
        ))}
      </HabitListStyled>
    </RoutineSectionStyled>
  );
}
