import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DashboardStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 2, 4),
  },
}));

export const DashboardContentStyled = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 480px",
  gap: theme.spacing(5),
  alignItems: "start",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const DashboardSidebarStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  minWidth: 0,

  [theme.breakpoints.down("lg")]: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
    alignItems: "start",
    gap: theme.spacing(3),
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(3),
  },
}));
