import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import {
  CompletedCountStyled,
  DailyFocusLabelStyled,
  DailyFocusStyled,
  ProgressContentStyled,
  ProgressDescriptionStyled,
  ProgressRingStyled,
  ProgressValueStyled,
  StreakBadgeStyled,
} from "./DailyFocus.styles";

import { DailyFocusProps } from "../../types";

export default function DailyFocus({
  completed,
  total,
  streak,
}: DailyFocusProps) {
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <DailyFocusStyled>
      <DailyFocusLabelStyled>Flow Status</DailyFocusLabelStyled>

      <ProgressRingStyled progress={progress}>
        <ProgressContentStyled>
          <ProgressValueStyled>{progress}%</ProgressValueStyled>
          <ProgressDescriptionStyled>Daily Flow</ProgressDescriptionStyled>
        </ProgressContentStyled>
      </ProgressRingStyled>

      <CompletedCountStyled>
        {completed} of {total} completed
      </CompletedCountStyled>

      <StreakBadgeStyled>
        <LocalFireDepartmentSharpIcon sx={{ fontSize: 16 }} />
        {streak} DAY STREAK
      </StreakBadgeStyled>
    </DailyFocusStyled>
  );
}
