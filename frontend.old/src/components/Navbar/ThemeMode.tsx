"use client";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeMode = () => {
  const { setTheme } = useTheme();
  const { theme } = useTheme();
  return (
    <div>
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        variant="ghost"
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
};

export default ThemeMode;
