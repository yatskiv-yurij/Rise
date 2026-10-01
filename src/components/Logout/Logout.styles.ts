import { Box, styled } from "@mui/material";

export const LogoutButtonStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  width: 24,
  height: 24,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 7,
  color: "#fff",
}));
