import { createMuiTheme } from "@material-ui/core/styles";

const white = "#FFFFFF";
const black = "#000000";

export const theme = createMuiTheme({
  typography: {
    button: {
      fontFamily: "Montserrat-Bold",
      fontSize: "12px",
      letterSpacing: "1.2px",
      lineHeight: "15px",
      outline: "none !important",
      boxShadow: "none !important",
    },
  },
  palette: {
    black,
    white,
    background: {
      default: white,
      action: "#E3E3E3",
      light: "#EBEBEB",
      main: "#F9F9F9",
      dark: "#D8D8D8",
      secondary: {
        light: "#E9F1FF",
        main: "#4C84FF00",
        dark: "#F9FBFF",
      },
    },
    primary: {
      light: "#5B8FFF",
      main: "#4C84FF",
      dark: "#2D6EFE",
      disabled: "#9B9B9B",
      contrastText: white,
      disabledText: "#FFFFFFCC",
    },
    secondary: {
      light: "#5B8FFF",
      main: "#4C84FF",
      dark: "#2D6EFE",
      disabled: "#9B9B9B",
    },
    danger: {
      light: "#DE1010",
      main: "#C40303",
      dark: "#8F0202",
      disabled: "#BC8787",
      contrastText: white,
      disabledText: "#FFFFFFCC",
    },
    neutral: {
      default: {
        light: "#CCCCCC",
        main: "#999999",
      },
      action: {
        light: "#888888",
        main: "#333333",
        dark: "#717171",
      },
    },
    text: {
      primary: "#121828",
      secondary: "#65748B",
      disabled: "rgba(55, 65, 81, 0.48)",
    },
  },
});
