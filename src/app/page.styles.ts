import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageStyled = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

export const ContentStyled = styled(Stack)(({ theme }) => ({
  width: "100%",
  gep: theme.spacing(3),
}));

export const ThemeTestCardStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
}));

export const SecondaryTextStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
