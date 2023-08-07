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

  const [search, setSearch] = useState();

  return (
    <SettingsContext.Provider
      value={{
        theme,
        setTheme,
        fontFace,
        setFontFace,
        search,
        setSearch,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return React.useContext(SettingsContext);
};
