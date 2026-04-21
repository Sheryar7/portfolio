import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // We use 'dark' as the standard class for Tailwind dark mode
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;