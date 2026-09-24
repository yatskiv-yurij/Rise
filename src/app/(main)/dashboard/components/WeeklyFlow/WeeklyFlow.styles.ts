import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WeeklyFlowStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2.5),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 20,
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(6),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    borderRadius: 16,
  },
}));

export const WeekFlowHeaderStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2.5),
}));

export const WeeklyFlowLabelStyled = styled(Typography)(({ theme }) => ({
  fonstSize: "0.65rem",
  fontWeight: 700,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: theme.palette.text.secondary,
}));

export const WeeklyFlowMenuStyled = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: 700,
  color: theme.palette.text.primary,
  cursor: "pointer",
}));

export const WeeklyFlowChartStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  height: 100,
  gap: theme.spacing(1),
  padding: theme.spacing(0, 0.5),
}));

export const WeeklyFlowBarWrapperStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: "100%",
  flex: 1,
}));

export const WeeklyFlowBarStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "value" && prop !== "active",
})<{ value: number; active?: boolean }>(({ theme, active, value }) => ({
  width: "100%",
  maxWidth: 38,
  height: `${value}%`,

  borderRadius: "6px 6px 2px 2px",
  backgroundColor: active
    ? theme.palette.primary.main
    : theme.palette.action.hover,
  transition: "height 200ms ease, background-color: 200ms ease",
  ...(active && {
    boxShadow: `0 0 16px ${theme.palette.primary.main}30`,
  }),
}));

export const WeeklyFlowDaysStyled = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: theme.spacing(1),
  marginTop: theme.spacing(1.25),
}));

export const WeeklyFlowDayStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  textAlign: "center",
  fontSize: "0.55rem",
  lineHeight: 1,
  fontWeight: 600,

  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
}));
