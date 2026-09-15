import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const createAppTheme = (mode: "light" | "dark") => {
  const palette = colors[mode];

  return createTheme({
    palette: {
      mode,

      primary: {
        main: palette.accent,
      },

      background: {
        default: palette.background,
        paper: palette.surface,
      },

      text: {
        primary: palette.text,
        secondary: palette.secondaryText,
      },

      divider: palette.border,
    },

    typography: {
      fontFamily: "var(--font-inter), Arial, sans-serif",

      h1: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },

      h2: {
        fontSize: "1.5rem",
        fontWeight: 700,
        lineHeight: 1.3,
      },

      h3: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },

      body1: {
        fontSize: "1rem",
        lineHeight: 1.6,
      },

      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
      },

      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },

    shape: {
      borderRadius: 12,
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            minHeight: 44,
            paddingInline: 18,
          },
        },
      },

      MuiTextField: {
        defaultProps: {
          fullWidth: true,
        },

        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 10,
            },
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${palette.border}`,
            boxShadow: "none",
            borderRadius: 16,
          },
        },
      },
    },
  });
};
