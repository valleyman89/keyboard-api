import React, { useEffect, useState } from "react";
import "./App.css";
import fonts from "./App.module.css";
import Square from "./components/Square";
function App() {
  const userPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useState(
    userPrefersDark === true ? "dark" : "light"
  );
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${fonts.Three}`} data-theme={theme}>
      <h1>hello world</h1>
      {/* <button onClick={toggleFont("Two")}>change font</button> */}
      <button onClick={toggleTheme}>
        toggle to {theme === "light" ? "Dark" : "Light"}
      </button>
      <Square />
    </div>
  );
}

export default App;
