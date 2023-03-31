import React from "react";
import "./Main.css";
import Data from "../../data/fakeData.json";

const Main = () => {
  const word = Data[0];
  console.log(word);
  return (
    <section>
      <h1>{word.word}</h1>
      <mark>{word.phonetic}</mark>
      {word.meanings.map((meaning, index) => (
        <div key={index}>
          <div className="part-of-speech">
            <h2>{meaning.partOfSpeech}</h2>
            <hr />
          </div>
          <h3>meaning</h3>
          {meaning.definitions.map((definition, index) => (
            <ul key={index}>
              <li>{definition.definition}</li>
            </ul>
          ))}
          <h3>synonyms</h3>
          <span className="synonym">
            {meaning.synonyms ? meaning.synonyms[0] : null}
          </span>
        </div>
      ))}
      <h4>source</h4>
      <a href={word.sourceUrls[0]} rel="noreferrer" target="_blank">
        {word.sourceUrls[0]}
      </a>
    </section>
  );
};

export default Main;
