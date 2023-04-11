import React from "react";
import "./PlayButton.css";
import { ReactComponent as PlayButtonSVG } from "./icon-play.svg";

const PlayButton = () => {
  return (
    <div className="playbutton">
      <audio id="audio" autoPlay={false} controlsList="">
        <source
          src="https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <button id="playpause" type="button" data-state="play">
        <PlayButtonSVG className="play" />
      </button>
    </div>
  );
};

export default PlayButton;
