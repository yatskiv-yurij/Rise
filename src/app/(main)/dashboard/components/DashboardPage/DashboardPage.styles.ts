import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DashboardStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 2),
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
