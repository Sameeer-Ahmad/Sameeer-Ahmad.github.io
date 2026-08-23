import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const getInitialTheme = () => {
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
    document
      .getElementById("theme-color-meta")
      ?.setAttribute("content", theme === "dark" ? "#212428" : "#f3f4f6");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
