import React from "react";
import "./Main.css";
import PlayButton from "../PlayButton";
import { useSettingsContext } from "../../context";

const Main = () => {
  const { data } = useSettingsContext();

  return (
    <main>
      <section>
        <div className="details">
          <div>
            <h1>{data.word}</h1>
            <mark>{data.phonetic}</mark>
          </div>
          <PlayButton />
        </div>
        <div className="meanings">
          {data.meanings.map((meaning, index) => (
            <div className={meaning.partOfSpeech} key={index}>
              <div className="subtitle">
                <h2>{meaning.partOfSpeech}</h2>
                <hr />
              </div>
              <div className="meaning">
                <h3>meaning</h3>
                <ul>
                  {meaning.definitions.map((word, index) => (
                    <li key={index}>{word.definition}</li>
                  ))}
                </ul>
              </div>
              {meaning.synonyms[0] ? (
                <div className="synoynms">
                  <h3>synonyms</h3>
                  <a id={meaning.synonyms[0]} href="test" className="synonym">
                    {meaning.synonyms ? meaning.synonyms[0] : null}
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="source">
          <h4>source</h4>
          <a href={data.sourceUrls[0]} rel="noreferrer" target="_blank">
            {data.sourceUrls[0]}
          </a>
        </div>
      </section>
    </main>
  );
};

export default Main;
