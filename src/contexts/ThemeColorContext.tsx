import { ThemeProvider } from "@emotion/react";
import { createContext, useMemo, useState } from "react";
import { ChildrenProps } from "../types/childrenProps";
import { darkTheme, lightTheme } from "./themes";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export function ThemeColorProvider({ children }: ChildrenProps) {
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
