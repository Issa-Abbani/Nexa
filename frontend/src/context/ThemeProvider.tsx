import { useEffect, useState,} from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme, ThemePreference } from "../types/theme";



//Basically checks if dark mode is active. If true, it returns dark and if false it returns the only other optio - light -
function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

interface ThemeProviderProps {
  children: ReactNode;
}


export function ThemeProvider({ children }: ThemeProviderProps) {
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme());

  const [themePreference] = useState<ThemePreference>("system"); //Setter to be added later

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleChange(event: MediaQueryListEvent) {
      setSystemTheme(event.matches ? "dark" : "light");
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const effectiveTheme =
    themePreference === "system"
      ? systemTheme
      : themePreference;

  return (
    <ThemeContext.Provider
      value={{
        systemTheme,
        themePreference,
        effectiveTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}