import React from "react";
import "./FontToggle.css";
import { useSettingsContext } from "./../../context/index";

const FontToggle = () => {
  const { setFontFace } = useSettingsContext();

  const handleFontToggle = (selectedFont) => {
    setFontFace(selectedFont);
  };

  return (
    <select onChange={(e) => handleFontToggle(e.target.value)}>
      <option value="Serif">Serif</option>
      <option value="SansSerif">Sans-Serif</option>
      <option value="Mono">Mono</option>
    </select>
  );
};

export default FontToggle;
