import React from "react";

import { useSettingsContext } from "./context";

import "./App.css";
import fonts from "./Settings.module.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  const { data, fontFace, theme } = useSettingsContext();
  return (
    <div className={`App ${fonts[fontFace]}`} data-theme={theme}>
      <div className="Container">
        <Header />
        {data ? <Main /> : "no results"}
        <Footer />
      </div>
    </div>
  );
}

export default App;
