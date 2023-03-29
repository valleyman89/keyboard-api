import React from "react";
import "./Main.css";
import Data from "../../data/fakeData.json";

const Main = () => {
  const word = Data[0];
  console.log(word);
  return (
    <div>
      <h1>{word.word}</h1>
      <span className="highlight">{word.phonetic}</span>
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
        </div>
      ))}
      <h4>source</h4>
      <a href="{word.sourceUrls[0]}">{word.sourceUrls[0]}</a>
    </div>
  );
};

export default Main;
