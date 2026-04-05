import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;