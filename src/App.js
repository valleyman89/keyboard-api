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
      <footer>
        <a href="https://stevenrolph.com" rel="noreferrer" target="_blank">
          Steven Rolph 2023
        </a>
      </footer>
    </div>
  );
}

export default App;
