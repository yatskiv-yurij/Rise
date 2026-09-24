import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HabitRowStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "32px minmax(0, 1fr) auto",
  columnGap: theme.spacing(1.5),
  minHeight: 82,

  "&:not(:last-child)::before": {
    content: '""',
    position: "absolute",
    left: 15.5,
    top: 28,
    bottom: 0,
    width: 1,
    backgroundColor: theme.palette.divider,
  },

  "&:last-child": {
    minHeight: 64,
  },
}));

export const HabitTimeLineStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
}));

export const HabitStatusStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed?: boolean }>(({ theme, completed }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 22,
  height: 22,
  marginTop: 2,
  borderRadius: "50%",
  border: completed ? "none" : `1px solid ${theme.palette.divider}`,
  backgroundColor: completed
    ? theme.palette.success.main
    : theme.palette.background.paper,
  color: theme.palette.background.paper,

  "&::after": !completed
    ? {
        content: '""',
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: theme.palette.text.secondary,
      }
    : undefined,
}));

export const HabitContentStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  minWidth: 0,
  paddingTop: 2,
}));

export const HabitTitleRowStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const HabitNameStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed?: boolean }>(({ theme, completed }) => ({
  fontSize: "1rem",
  lineHeight: 1.3,
  fontWeight: 600,
  color: completed ? theme.palette.text.disabled : theme.palette.text.primary,
  textDecoration: completed ? "line-through" : "none",
}));

export const HabitCategoryStyled = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0.4, 0.6),
  borderRadius: 4,
  fontSize: "0.625rem",
  lineHeight: 1,
  fontWeight: 700,
  letterSpacing: "0.04em",
  textTransform: "uppercase",

  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.action.hover,
}));

export const HabitMetaStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  color: theme.palette.text.secondary,
}));

export const HabitTimeStyled = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  lineHeight: 1.2,
  color: theme.palette.text.secondary,
}));

export const HabitResultStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed?: boolean }>(({ theme, completed }) => ({
  alignSelf: "start",
  marginTop: 3,
  padding: theme.spacing(0.5, 1.25),
  borderRadius: 999,
  fontSize: "0.75rem",
  fontWeight: 600,
  whiteSpace: "nowrap",
  color: completed ? theme.palette.success.main : theme.palette.text.secondary,

  backgroundColor: completed
    ? theme.palette.success.main + "14"
    : "transparent",
  border: completed ? "none" : `1px solid ${theme.palette.divider}`,

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
