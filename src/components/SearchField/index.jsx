import React from "react";
import "./SearchField.css";

const SearchField = () => {
  return (
    <>
      <input
        type="search"
        placeholder="Search for any word..."
        spellCheck={true}
        maxLength={"45"}
        pattern="^[a-zA-Z ]*$"
        title="Letters only"
      />{" "}
      <span className="error">Whoops, letters only...</span>
    </>
  );
};

export default SearchField;
