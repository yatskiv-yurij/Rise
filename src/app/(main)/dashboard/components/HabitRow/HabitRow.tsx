import { AccessTime, TaskAlt } from "@mui/icons-material";

import {
  HabitCategoryStyled,
  HabitContentStyled,
  HabitMetaStyled,
  HabitNameStyled,
  HabitResultStyled,
  HabitRowStyled,
  HabitStatusStyled,
  HabitTimeStyled,
  HabitTimeLineStyled,
  HabitTitleRowStyled,
} from "./HabitRow.styles";

import { HabitRowProps } from "../../types";

export default function HabitRow({ habit }: HabitRowProps) {
  return (
    <HabitRowStyled>
      <HabitTimeLineStyled>
        <HabitStatusStyled completed={habit.completed}>
          {habit.completed && (
            <TaskAlt fontSize="small" sx={{ fontSize: 14, color: "#fff" }} />
          )}
        </HabitStatusStyled>
      </HabitTimeLineStyled>

      <HabitContentStyled>
        <HabitTitleRowStyled>
          <HabitNameStyled completed={habit.completed}>
            {habit.name}
          </HabitNameStyled>
          <HabitCategoryStyled>{habit.category}</HabitCategoryStyled>
        </HabitTitleRowStyled>

        <HabitMetaStyled>
          <AccessTime sx={{ fontSize: 12 }} />
          <HabitTimeStyled>{habit.time}</HabitTimeStyled>
        </HabitMetaStyled>
      </HabitContentStyled>

      <HabitResultStyled completed={habit.completed}>
        {habit.completed ? `Completed at ${habit.completedAt}` : "Upcoming"}
      </HabitResultStyled>
    </HabitRowStyled>
  );
}
