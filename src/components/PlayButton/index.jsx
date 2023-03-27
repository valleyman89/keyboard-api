import React from "react";
import "./PlayButton.css";
import { ReactComponent as PlayButtonSVG } from "./icon-play.svg";

const PlayButton = () => {
  return (
    <div className="playbutton">
      <button type="button">
        <PlayButtonSVG className="play" />
      </button>
    </div>
  );
};

export default PlayButton;
