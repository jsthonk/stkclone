"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

interface Value {
  mode: string;
  setMode: (mode: string) => void;
}

export const ThemeProviderContext = createContext<Value | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<string>("");

  const handleThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  const value: Value = { mode, setMode };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used withing a ThemeProvider");
  }

  return context;
};
