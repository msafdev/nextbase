"use client";

import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

import { TbMoon, TbSun } from "react-icons/tb";

const DarkMode = ({ className = "" }: { className?: string }) => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const dark = sessionStorage.getItem("dark");
    if (dark === "true") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
    sessionStorage.setItem("dark", String(!isDark));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={cn("hover:[&>svg]:fill-primary", className)}
    >
      {!isDark ? <TbSun size={20} /> : <TbMoon size={20} />}
    </button>
  );
};
export default DarkMode;
