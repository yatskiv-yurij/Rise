import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DailyQuoteStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(2),
  marginTop: theme.spacing(5),
  width: "fit-content",
}));

export const QuoteContentStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
}));

export const QuoteMarkStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyontent: "center",
  flexShrink: 1,

  height: 28,
  padding: theme.spacing(2, 0.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,

  fontSize: "0.8rem",
  fontWeight: 700,
}));

export const QuoteTextStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  lineHeight: 1.7,
  fontStyle: "italic",
  color: theme.palette.text.secondary,
}));

export const QuoteAuthorStyled = styled(Typography)(({ theme }) => ({
  alignSelf: "flex-end",
  marginTop: theme.spacing(1),
  fontSize: "1rem",
  lineHeight: 1.4,
  fontWeight: 600,
  color: theme.palette.text.secondary,
}));
