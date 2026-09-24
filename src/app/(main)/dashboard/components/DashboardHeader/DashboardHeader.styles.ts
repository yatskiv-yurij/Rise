import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DashboardHeaderStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(4),
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

export const DashboardWelcomeStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const DashboardGreetingStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  lineHeight: 1.25,
  fontWeight: 700,
  color: theme.palette.text.primary,

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

export const DashboardDateStyled = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));
