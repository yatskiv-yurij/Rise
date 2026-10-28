"use client";

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

import { HabitRowProps } from "../../../types";

const time = (timestamp: string) => {
  return new Date(timestamp).toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export default function HabitRow({
  habit,
  onToggle,
  isUpdating = false,
}: HabitRowProps) {
  return (
    <HabitRowStyled>
      <HabitTimeLineStyled>
        <HabitStatusStyled
          completed={habit.completed}
          as="button"
          onClick={() => onToggle(habit)}
          disabled={isUpdating}
          aria-label={
            habit.completed
              ? `Mark ${habit.name} as incomplete`
              : `Mark ${habit.name} as complete`
          }
          aria-pressed={habit.completed}>
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
          <HabitCategoryStyled sx={{ backgroundColor: habit.color }}>
            {habit.category}
          </HabitCategoryStyled>
        </HabitTitleRowStyled>

        <HabitMetaStyled>
          <AccessTime sx={{ fontSize: 12 }} />
          <HabitTimeStyled>{habit?.scheduledTime}</HabitTimeStyled>
        </HabitMetaStyled>
      </HabitContentStyled>

      <HabitResultStyled completed={habit.completed}>
        {habit.completed
          ? `Completed at ${time(habit.completedAt ? habit.completedAt : "")}`
          : "Upcoming"}
      </HabitResultStyled>
    </HabitRowStyled>
  );
}
