import React, { useEffect } from "react";
import { useSettingsContext } from "./../../context/index";
import "./ThemeToggle.css";
import { ReactComponent as ToogleSVG } from "./icon-moon.svg";

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
      <button type="button" onClick={toggleTheme}>
        <ToogleSVG />
      </button>
    </>
  );
};

export default ThemeToggle;
