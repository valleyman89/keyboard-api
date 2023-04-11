import React from "react";
import "./Main.css";
import Data from "../../data/fakeData.json";
import PlayButton from "../PlayButton";
const Main = () => {
  const data = Data[0];
  // console.log(data);

  return (
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
  );
};

export default Main;
