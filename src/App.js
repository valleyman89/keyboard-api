import React, { useState, useEffect } from "react";

import { useSettingsContext } from "./context";
import axios, { CanceledError } from "axios";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import fonts from "./Settings.module.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const { fontFace, theme, search } = useSettingsContext();

  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + search, {
        signal: controller.signal,
      })
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false); // do it old way if this doesn't work, strict mode on
      });
    return () => controller.abort();
  }, [search]);

  return (
    <div className={`App ${fonts[fontFace]}`} data-theme={theme}>
      <div className="Container">
        <Header />
        {isLoading && <p>Please wait...</p>}
        {error && <ErrorPage />}
        {data && !error ? <Main data={data} /> : null}
        <Footer />
      </div>
    </div>
  );
}

export default App;
