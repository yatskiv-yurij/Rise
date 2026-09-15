"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { useAppTheme } from "@/theme/ThemeProvider";

import {
  ContentStyled,
  PageStyled,
  SecondaryTextStyled,
  ThemeTestCardStyled,
} from "./page.styles";

export default function HomePage() {
  const { mode, setMode } = useAppTheme();

  return (
    <PageStyled>
      <Container maxWidth="md">
        <ContentStyled>
          <Stack spacing={3} sx={{ width: "100%" }}>
            <Box>
              <Typography variant="h1">Rise</Typography>
              <SecondaryTextStyled>
                Small habits.Big changes
              </SecondaryTextStyled>
            </Box>

            <Typography>
              Theme now: <strong>{mode}</strong>
            </Typography>

            <ThemeTestCardStyled>
              <Button variant="contained" onClick={() => setMode("light")}>
                Light
              </Button>
              <Button variant="outlined" onClick={() => setMode("dark")}>
                Dark
              </Button>
              <Button variant="text" onClick={() => setMode("system")}>
                System
              </Button>
            </ThemeTestCardStyled>
          </Stack>
        </ContentStyled>
      </Container>
    </PageStyled>
  );
}
