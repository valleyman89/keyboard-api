import React, { createContext, useState } from "react";
import getData from "../data/fakeData.json";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  // Font
  const [fontFace, setFontFace] = useState("Serif");

  const userPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Theme
  const [theme, setTheme] = useState(
    userPrefersDark === true ? "dark" : "light"
  );

  // Data
  const [data, setData] = useState(getData[0]);

  return (
    <SettingsContext.Provider
      value={{ theme, setTheme, fontFace, setFontFace, data, setData }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return React.useContext(SettingsContext);
};
