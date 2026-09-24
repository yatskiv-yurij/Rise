import { data } from "../../constants";
import {
  WeekFlowHeaderStyled,
  WeeklyFlowBarStyled,
  WeeklyFlowBarWrapperStyled,
  WeeklyFlowChartStyled,
  WeeklyFlowDaysStyled,
  WeeklyFlowDayStyled,
  WeeklyFlowLabelStyled,
  WeeklyFlowStyled,
} from "./WeeklyFlow.styles";

export default function WeeklyFlow() {
  const getBarHeight = (completed: number) => {
    if (completed === 0) {
      return 0;
    }

    const percentage = (completed / 6) * 100;

    return Math.max(percentage, 18);
  };
  return (
    <WeeklyFlowStyled>
      <WeekFlowHeaderStyled>
        <WeeklyFlowLabelStyled>Weekly Flow</WeeklyFlowLabelStyled>
      </WeekFlowHeaderStyled>

      <WeeklyFlowChartStyled>
        {data.map((item, index) => (
          <WeeklyFlowBarWrapperStyled key={`${item.day}-${index}`}>
            <WeeklyFlowBarStyled
              value={getBarHeight(item.value)}
              active={item.active}
            />
          </WeeklyFlowBarWrapperStyled>
        ))}
      </WeeklyFlowChartStyled>

      <WeeklyFlowDaysStyled>
        {data.map((item, index) => (
          <WeeklyFlowDayStyled key={`${item.day}-${index}`}>
            {item.day}
          </WeeklyFlowDayStyled>
        ))}
      </WeeklyFlowDaysStyled>
    </WeeklyFlowStyled>
  );
}
