import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WeekCalendarStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2.5),

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1.5),
    width: "100%",
    justifyContent: "space-between",
  },
}));

export const WeekDayStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.5),
  minWidth: 24,
}));

export const WeekDayNameStyled = styled(Typography)(({ theme }) => ({
  fontSize: "0.6rem",
  lineHeight: 1,
  fontWeight: 600,
  color: theme.palette.text.secondary,
  textTransform: "uppercase",
}));

export const WeekDayNumberStyled = styled(Typography)(({ theme }) => ({
  fontSize: "0.7rem",
  lineHeight: 1,
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

export const ActiveWeekDayStyled = styled(WeekDayStyled)(({ theme }) => ({
  position: "relative",

  [`& ${WeekDayNameStyled}`]: {
    color: theme.palette.primary.main,
  },

  [`& ${WeekDayNumberStyled}`]: {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },

  "&::after": {
    content: '""',
    width: 4,
    height: 4,
    marginTop: theme.spacing(0.25),
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
  },
}));
