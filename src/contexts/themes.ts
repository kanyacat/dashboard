import { createTheme } from "@mui/material";

const BREAKPOINTS = {
  xs: 370,
  sm: 670,
  md: 1000,
  lg: 1300,
  xl: 1536,
};

// Настройка светлой темы
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#635bff",
      light: "#fff",
      dark: "#222429",
    },
    secondary: {
      main: "#121621",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
});

// Настройка темной темы
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#635bff",
      light: "#27273a",
      dark: "#fff",
    },
    secondary: {
      main: "#1f2433",
    },
    text: {
      primary: "#fff",
      secondary: "#000",
    },
    background: {
      default: "#11111d",
      paper: "#121621",
    },
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
});
