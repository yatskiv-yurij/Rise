import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DailyFocusStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
}));

export const DailyFocusLabelStyled = styled(Typography)(({ theme }) => ({
  alignSelf: "center",
  marginBottom: theme.spacing(2),
  fonstSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",

  color: theme.palette.text.secondary,
}));

export const ProgressRingStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "progress",
})<{ progress: number }>(({ theme, progress }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: 240,
  height: 240,
  borderRadius: "50%",
  background: `conic-gradient(from -90deg, ${theme.palette.primary.main} 0deg ${progress * 3.6}deg, ${theme.palette.divider} ${progress * 3.6}deg 360deg)`,

  "&::before": {
    content: '""',
    position: "absolute",
    width: 208,
    height: 208,
    borderRadius: "50%",
    backgroundColor: theme.palette.background.default,
  },
}));

export const ProgressContentStyled = styled(Box)(() => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  textAlign: "center",
  marginLeft: "-15px",
}));

export const ProgressValueStyled = styled(Typography)(({ theme }) => ({
  fontSize: "3.75rem",
  lineHeight: 1,
  fontWeight: 700,
  letterSpacing: "-0.05em",
  color: theme.palette.text.primary,
}));

export const ProgressDescriptionStyled = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.75),
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

export const CompletedCountStyled = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  fontSize: "1.25rem",
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const StreakBadgeStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  marginTop: theme.spacing(1.5),
  padding: theme.spacing(0.7, 1.25),
  borderRadius: 999,

  color: theme.palette.primary.main,
  backgroundColor: theme.palette.action.selected,

  fontSize: "0.75rem",
  fontWeight: 700,
}));
