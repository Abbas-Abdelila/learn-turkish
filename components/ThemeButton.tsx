"use client";

import { useTheme } from "next-themes";
import { Icons } from "@/components/icons";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={() => switchTheme()}>
      {theme === "light" ? <Icons.moon /> : <Icons.sun />}
    </button>
  );
};

export default ThemeButton;
