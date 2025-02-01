"use client";
import { useTheme } from "@/lib/theme/ThemeContext";
import { Moon, Sun } from "lucide-react";
import React from "react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      {theme === "dark" ? (
        <Moon className="h-15 w-15 text-black dark:text-white" />
      ) : (
        <Sun className="h-15 w-15 text-black dark:text-white" />
      )}
    </div>
  );
};

export default ThemeToggle;
