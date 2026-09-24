import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const MobileHeaderStyled = styled(Box)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 56,
    padding: theme.spacing(0, 1.5),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borerBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export const MobileBrandStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const MobileBrandIconStyled = styled(Image)(({ theme }) => ({
  width: 28,
  height: 32,
  borderRadius: 8,
}));

export const MobileBrandTextStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const MenuButtonStyled = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 10,
  color: theme.palette.text.primary,

  "&.hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
