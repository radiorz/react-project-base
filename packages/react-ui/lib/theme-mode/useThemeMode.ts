import { useState, useEffect } from "react";

const useThemeSwitch = () => {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", mediaQuery.matches);
      }
    };

    mediaQuery.addListener(handleChange);
    handleChange();

    return () => mediaQuery.removeListener(handleChange);
  }, [theme]);

  useEffect(() => {
    switch (theme) {
      case "light":
        document.documentElement.classList.remove("dark");
        break;
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      default:
        break;
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return [theme, toggleTheme];
};

export default useThemeSwitch;
