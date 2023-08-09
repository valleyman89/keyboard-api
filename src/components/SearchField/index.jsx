import React, { useRef } from "react";
import "./SearchField.css";
import { useSettingsContext } from "../../context";

const SearchField = () => {
  const { setSearch } = useSettingsContext();

  const searchRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchRef.current !== null)
      setSearch(searchRef.current.value.toLowerCase());
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        ref={searchRef}
        type="search"
        placeholder="Search for any word..."
        spellCheck={true}
        maxLength={"30"}
        pattern="^[a-zA-Z ]*$"
        title="Letters only"
      />
    </form>
  );
};

export default SearchField;
