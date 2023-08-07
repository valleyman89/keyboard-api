import React, { useState, useEffect } from "react";
import "./Main.css";
import PlayButton from "../PlayButton";
import axios, { CanceledError } from "axios";

const Main = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en/wrestle", {
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
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      {data && (
        <section>
          <h1>{data.word}</h1>
          <mark>{data.phonetic}</mark>
          <PlayButton />
          {data.meanings.map((meaning, index) => (
            <div key={index}>
              <div className="part-of-speech">
                <h2>{meaning.partOfSpeech}</h2>
                <hr />
              </div>
              <h3>meaning</h3>
              <ul>
                {meaning.definitions.map((word, index) => (
                  <li key={index}>{word.definition}</li>
                ))}
              </ul>
              {meaning.synonyms[0] ? (
                <div>
                  <h3>synonyms</h3>
                  <a id={meaning.synonyms[0]} href="test" className="synonym">
                    {meaning.synonyms ? meaning.synonyms[0] : null}
                  </a>
                </div>
              ) : null}
            </div>
          ))}
          <h4>source</h4>
          <a href={data.sourceUrls[0]} rel="noreferrer" target="_blank">
            {data.sourceUrls[0]}
          </a>
        </section>
      )}
    </>
  );
};

export default Main;
