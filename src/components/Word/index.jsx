import React from "react";
import Data from "../../data/fakeData.json";

const Word = () => {
  const word = Data[0];
  console.log(word.phonetic);
  return <div>hello word</div>;
};

export default Word;
