import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainLayoutRootStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

export const MainStyled = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  minHeight: "100vh",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0),
  },
}));
