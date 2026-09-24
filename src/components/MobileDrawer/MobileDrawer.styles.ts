import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

export const DrawerContentStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: 200,
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

export const DrawerBrandIconStyled = styled(Image)(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: 8,
}));

export const DrawerBrandTextStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 600,
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

export const DrawerWrapperStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
}));

export const DrawerAvatarStyled = styled(Image)(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: "50%",
}));

export const DrawerProfileNameStyled = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const LogoutButtonStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 7,
  color: theme.palette.text.secondary,
}));
