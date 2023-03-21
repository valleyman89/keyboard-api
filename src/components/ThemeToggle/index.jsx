import "./ThemeToggle.css";
import { ReactComponent as ToogleSVG } from "./icon-moon.svg";
import { useSettingsContext } from "./../../context/index";
import React, { useEffect } from "react";
import Toggle from "react-toggle";

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
      <Toggle onChange={toggleTheme} icons={false} />
      <ToogleSVG className="toogleSVG" />
    </>
  );
};

export default ThemeToggle;
