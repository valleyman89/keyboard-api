import React, { useEffect } from "react";
import { useSettingsContext } from "./../../context/index";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useSettingsContext();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  //   TODO: is this needed?
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <button type="button" onClick={toggleTheme}></button>
    </>
  );
};

export default ThemeToggle;
