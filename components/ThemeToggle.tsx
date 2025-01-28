"use client";
import React from "react";
import { Switch } from "./ui/Switch";
import { useTheme } from "@/lib/theme/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return <Switch onCheckedChange={toggleTheme} checked={theme === "dark"} />;
};

export default ThemeToggle;
