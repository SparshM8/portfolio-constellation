import React, { createContext, useContext, useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "portfolio-constellation-theme";

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

const getSystemTheme = (): Theme => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function ThemeProvider({ children, defaultTheme = "light", switchable = false }: ThemeProviderProps) {
  const [hasExplicitPreference, setHasExplicitPreference] = useState(() => switchable && Boolean(localStorage.getItem(THEME_STORAGE_KEY)));
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = switchable ? localStorage.getItem(THEME_STORAGE_KEY) : null;
    if (stored === "light" || stored === "dark") return stored;
    return switchable ? getSystemTheme() : defaultTheme;
  });
  const hasMounted = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    if (hasMounted.current) root.classList.add("theme-ready");
    else {
      hasMounted.current = true;
      requestAnimationFrame(() => root.classList.add("theme-ready"));
    }
  }, [theme]);

  useEffect(() => {
    if (!switchable || hasExplicitPreference) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (event: MediaQueryListEvent) => setTheme(event.matches ? "dark" : "light");
    media.addEventListener("change", updateTheme);
    return () => media.removeEventListener("change", updateTheme);
  }, [hasExplicitPreference, switchable]);

  const toggleTheme = switchable ? () => {
    setTheme((previous) => {
      const next = previous === "light" ? "dark" : "light";
      localStorage.setItem(THEME_STORAGE_KEY, next);
      setHasExplicitPreference(true);
      return next;
    });
  } : undefined;

  return <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
