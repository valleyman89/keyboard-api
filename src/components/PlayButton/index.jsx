import React from "react";
import "./PlayButton.css";
import { ReactComponent as PlayButtonSVG } from "./icon-play.svg";

const PlayButton = (audioUrl) => {
  const audio = new Audio(audioUrl.source);

  return (
    <div className="playbutton">
      <button
        onClick={() => {
          audio.play();
        }}
      >
        <PlayButtonSVG className="play" />
      </button>
    </div>
  );
};

export default PlayButton;
