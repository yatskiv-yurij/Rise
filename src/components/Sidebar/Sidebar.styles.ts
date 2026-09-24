import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

export const SidebarRootStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: 182,
  minWidth: 182,
  minHeight: "100vh",
  padding: theme.spacing(3, 2),
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const BrandStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
  padding: theme.spacing(0, 0.5),
}));

export const BrandIconStyled = styled(Image)(({ theme }) => ({
  width: 34,
  height: 34,
  borderRadius: 7,
}));

export const BrandTextStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 600,
  letterSpacing: "-0.03em",
  color: theme.palette.text.primary,
}));

export const NavigationStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.75),
}));

export const NavigationLinkStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
  minHeight: 34,
  padding: theme.spacing(0.75, 1.25),
  borderRadius: 9,
  textDecoration: "none",
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  backgroundColor: active ? theme.palette.action.selected : "transparent",
  fontSize: "0.875rem",
  fontWeight: active ? 600 : 500,
  transition: "background-color 160ms ease, color 160ms ease",

  "& .MuiSvgIcon-root": {
    fontSize: "18px",
  },

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.primary.main,
  },
}));

export const SidebarBottomStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginTop: "auto",
}));

export const ProfileDividerStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 1,
  backgroundColor: theme.palette.divider,
}));

export const ProfileStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
}));

export const ProfileInfoStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  minWidth: 0,
}));

export const ProfileAvatarStyled = styled(Image)(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: "50%",
}));

export const ProfileNameStyled = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
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
