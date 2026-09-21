import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

export const DrawerContentStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: 280,
  height: "100%",
  padding: theme.spacing(3, 2),
  backgroundColor: theme.palette.background.paper,
}));

export const DrawerHeaderStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(4),
}));

export const DrawerBrandStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const DrawerBrandIconStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  borderRadius: 8,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
  fontSize: "0.75rem",
  fontWeight: 700,
}));

export const DrawerBrandTextStyled = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const DrawerNavigationStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.75),
}));

export const DrawerNavigationLinkStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  minHeight: 44,
  padding: theme.spacing(1, 1.5),
  borderRadius: 10,
  textDecoration: "none",
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  backgroundColor: active ? theme.palette.action.selected : "transparent",
  fontSize: "0.8rem",
  fontWeight: active ? 600 : 500,

  "& .MuiSvgIcon-root": {
    fontSize: 19,
  },

  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,
  },
}));

export const DrawerBottomStyled = styled(Box)(({ theme }) => ({
  marginTop: "auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const DrawerProfileDividerStyled = styled(Box)(({ theme }) => ({
  height: 1,
  width: "100%",
  backgroundColor: theme.palette.divider,
}));

export const DrawerProfileStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const DrawerAvatarStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.text.primary,
  fontSize: "0.7rem",
  fontWeight: 700,
}));

export const DrawerProfileNameStyled = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
}));
