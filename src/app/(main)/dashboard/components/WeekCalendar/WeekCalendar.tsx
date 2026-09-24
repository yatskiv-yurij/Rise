"use client";

import { weekDays } from "../../constants";

import {
  ActiveWeekDayStyled,
  WeekDayNameStyled,
  WeekDayNumberStyled,
  WeekCalendarStyled,
  WeekDayStyled,
} from "./WeekCalendar.styles";

export default function WeekCalendar() {
  return (
    <WeekCalendarStyled>
      {weekDays.map((day) => {
        const DayComponent = day.active ? ActiveWeekDayStyled : WeekDayStyled;

        return (
          <DayComponent key={`${day.name}-${day.number}`}>
            <WeekDayNameStyled>{day.name}</WeekDayNameStyled>
            <WeekDayNumberStyled>{day.number}</WeekDayNumberStyled>
          </DayComponent>
        );
      })}
    </WeekCalendarStyled>
  );
}
