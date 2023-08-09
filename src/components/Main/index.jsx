import React from "react";
import "./Main.css";
import PlayButton from "../PlayButton";
import { useSettingsContext } from "./../../context/index";

const Main = ({ data }) => {
  const { setSearch } = useSettingsContext();
  const audioUrl = data.phonetics[0]?.audio;
  return (
    <>
      <section>
        <div className="parent">
          <div className="div1">
            <h1>{data.word}</h1>
            {data.phonetic ? <mark>{data.phonetic}</mark> : null}
          </div>
          <div className="div2">
            {audioUrl ? <PlayButton source={audioUrl} /> : null}
          </div>
        </div>

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
                {meaning.synonyms ? (
                  <button
                    onClick={() => setSearch(meaning.synonyms[0])}
                    id={meaning.synonyms[0]}
                    className="synonym"
                  >
                    {meaning.synonyms[0]}
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        ))}
        <h4>source</h4>
        <a href={data.sourceUrls[0]} rel="noreferrer" target="_blank">
          {data.sourceUrls[0]}
        </a>
      </section>
    </>
  );
};

export default Main;
