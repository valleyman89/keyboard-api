import React from "react";
import "./SearchField.css";

const SearchField = () => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search for any word..."
        spellCheck={true}
        maxLength={"45"}
        pattern="^[a-zA-Z ]*$"
        title="Letters only"
      />
    </div>
  );
};

export default SearchField;
