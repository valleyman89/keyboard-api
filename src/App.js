import React from "react";

import { useSettingsContext } from "./context";

import "./App.css";
import fonts from "./Settings.module.css";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const { fontFace, theme } = useSettingsContext();

  return (
    <div className={`App ${fonts[fontFace]}`} data-theme={theme}>
      <div className="Container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
