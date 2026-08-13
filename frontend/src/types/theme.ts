export type Theme = "light" | "dark";

export type ThemePreference = "system" | Theme;

export interface ThemeContextValue {
  systemTheme: Theme;
  themePreference: ThemePreference;
  effectiveTheme: Theme;
}