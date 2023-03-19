import React, { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [fontFace, setFontFace] = useState("Serif");

  const userPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [theme, setTheme] = useState(
    userPrefersDark === true ? "dark" : "light"
  );

  return (
    <SettingsContext.Provider
      value={{ theme, setTheme, fontFace, setFontFace }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return React.useContext(SettingsContext);
};
