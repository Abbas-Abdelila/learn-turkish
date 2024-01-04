"use client";

import { useTheme } from "next-themes";
import { Icons } from "@/components/icons";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button onClick={() => switchTheme()}>
      {theme === "dark" ? <Icons.sun /> : <Icons.moon />}
    </button>
  );
};

export default ThemeButton;
