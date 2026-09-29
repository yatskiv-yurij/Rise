import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const SignPageStyled = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const BrandingSectionStyled = styled(Box)(({ theme }) => ({
  width: "50%",
  minHeight: "100vh",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: theme.palette.mode === "light" ? "#1B1C4B" : "#080914",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const BrandStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
}));

export const BrandIconStyled = styled(Image)(({ theme }) => ({
  width: 34,
  height: 34,
  borderRadius: 7,
}));

export const BrandNameStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "#fff",
}));

export const BrandingContentStyled = styled(Box)(({ theme }) => ({
  maxWidth: 400,
}));

export const BrandingTitleStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontSize: "2.75rem",
  lineHeight: 1.15,
  fontWeight: 700,
  letterSpacing: "-0.04em",
  color: "#fff",
}));

export const ConsistencyImageStyled = styled(Image)(({ theme }) => ({
  maxWidth: "210px",
  width: "100%",
  height: "auto",
  marginTop: theme.spacing(3),
}));

export const BrandingFooterStyled = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color: theme.palette.text.secondary,
  display: "block",
  marginBottom: 1,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
}));

export const FormSectionStyled = styled(Box)(({ theme }) => ({
  width: "50%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    width: "100%",
    minHeight: "100vh",
    padding: theme.spacing(3),
  },
}));

export const FormContainerStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
}));

export const FormHeaderStyled = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3.5),
}));

export const FormTitleStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: "2rem",
  lineHeight: 1.2,
  fontWeight: 700,
  letterSpacing: "-0.025em",
  color: theme.palette.text.primary,
}));

export const FormSubtitleStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.secondary,
}));

export const FormStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const FieldStyled = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
    lineHeight: 0.8,
  },

  "& .MuiInputBase-root": {
    height: 42,
    borderRadius: theme.shape.borderRadius,
    fontSize: "0.875rem",
    backgroundColor: theme.palette.background.paper,
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(1.25, 1.5),
  },

  "& .MuiInputLabel-shrink": {
    fontSize: "1rem",
  },
}));

export const PasswordToggleButtonStyled = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.75),
  color: theme.palette.text.secondary,

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const PasswordAdornmentStyled = styled(InputAdornment)(() => ({
  marginRight: 4,
}));

export const ForgotPasswordStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: theme.spacing(-1),
}));

export const ForgotPasswordButtonStyled = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  padding: 0,
  fontSize: "0.875rem",
  fontWeight: 500,
  textTransform: "none",
  color: theme.palette.primary.main,

  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const SubmitButtonStyled = styled(Button)(({ theme }) => ({
  minHeight: 42,
  marginTop: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  fontSize: "0.875rem",
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "none",

  "&:hover": {
    boxShadow: "none",
  },
}));

export const DividerStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  margin: theme.spacing(0.2, 0),
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",

  "&::before, &::after": {
    content: '""',
    flex: 1,
    height: 1,
    backgroundColor: theme.palette.divider,
  },
}));

export const SocialButtonStyled = styled(Button)(({ theme }) => ({
  width: "100%",
  minHeight: 38,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  fontSize: "0.875rem",
  fontWeight: 500,
  textTransform: "none",
  color: theme.palette.text.primary,
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.divider,
  },
}));

export const RegisterTextStyled = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  textAlign: "center",
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

export const RegisterButtonStyled = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  padding: 0,
  marginLeft: theme.spacing(0.5),
  fontSize: "0.875rem",
  fontWeight: 500,
  textTransform: "none",
  color: theme.palette.primary.main,
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "transparent",
  },
}));
