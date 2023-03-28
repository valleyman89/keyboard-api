import React from "react";

import "./App.css";
import fonts from "./Settings.module.css";

import Square from "./components/Square";
import FontToggle from "./components/FontToggle";
import ThemeToggle from "./components/ThemeToggle";

import { useSettingsContext } from "./context";
import PlayButton from "./components/PlayButton";
import SearchField from "./components/SearchField/index";

function App() {
  const { fontFace, theme } = useSettingsContext();

  return (
    <div className={`App ${fonts[fontFace]}`} data-theme={theme}>
      <h1>hello world</h1>
      <h2>{/* <PlayButton /> */}</h2>
      <ThemeToggle />
      <SearchField />
      {/* <Square /> */}

      {/* <FontToggle /> */}
    </div>
  );
}

export default App;
