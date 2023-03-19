import React from "react";

import "./App.css";
import fonts from "./App.module.css";
import Square from "./components/Square";
import FontToggle from "./components/FontToggle";
import ThemeToggle from "./components/ThemeToggle";

import { useSettingsContext } from "./context";

function App() {
  const { fontFace, theme } = useSettingsContext();

  return (
    <div className={`App ${fonts[fontFace]}`} data-theme={theme}>
      <h1>hello world</h1>
      <ThemeToggle />
      <Square />
      <FontToggle />
    </div>
  );
}

export default App;
