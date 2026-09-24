import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RoutineSectionStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  minWidth: 0,
}));

export const RoutineHeaderStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
}));

export const RoutineTitleStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const AddActivityButtonStyled = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: theme.spacing(0.5, 1.25),
  borderRadius: 8,
  textTransform: "none",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.action.hover,

  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
}));

export const HabitListStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));
