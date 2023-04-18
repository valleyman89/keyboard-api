import React from "react";
import "./SearchField.css";

const SearchField = () => {
  return (
    <hgroup>
      <input
        type="search"
        placeholder="Search for any word..."
        spellCheck={true}
        maxLength={"45"}
        pattern="^[a-zA-Z ]*$"
        title="Letters only"
      />{" "}
      <span className="error">Whoops, can't be empty...</span>
    </hgroup>
  );
};

export default SearchField;
