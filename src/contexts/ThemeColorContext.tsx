import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, ReactNode, useMemo, useState } from "react";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// Настройка светлой темы
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#635bff", // Основной цвет для светлой темы
      light: "#fff",
    },
    secondary: {
      main: "#121621", // Второстепенный цвет для светлой темы
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
    background: {
      default: "#ffffff", // Цвет фона для светлой темы
      paper: "#f5f5f5", // Цвет бумаги для светлой темы
    },
  },
});

// Настройка темной темы
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#635bff", // Основной цвет для темной темы
      light: "#27273a",
    },
    secondary: {
      main: "#1f2433", // Второстепенный цвет для темной темы
    },
    text: {
      primary: "#fff",
      secondary: "#000",
    },
    background: {
      default: "#11111d", // Цвет фона для темной темы
      paper: "#121621", // Цвет бумаги для темной темы
    },
  },
});

export function ThemeColorProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setIsDarkMode((prevMode) => (prevMode === true ? false : true));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
