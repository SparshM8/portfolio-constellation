/** Orbiting Archive design reminder: light and dark modes are two conditions of the same mapped creative field, not separate visual identities. */
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} data-cursor-label={theme === "dark" ? "LIGHT" : "DARK"}>
    {theme === "dark" ? <SunMedium size={16} /> : <MoonStar size={16} />}<span>{theme === "dark" ? "LIGHT FIELD" : "DARK FIELD"}</span>
  </button>;
}
