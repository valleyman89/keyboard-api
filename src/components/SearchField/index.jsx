import React from "react";
import "./SearchField.css";
import { useSettingsContext } from "../../context";
import { useForm } from "react-hook-form";

const SearchField = () => {
  const { setSearch } = useSettingsContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => setSearch(data.search);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("search", { required: true, maxLength: 50 })}
        type="search"
        placeholder="Search for any word..."
        spellCheck={true}
        maxLength={"30"}
        pattern="^[a-zA-Z ]*$"
        title="Letters only"
        className={errors.search?.type === "required" ? "test" : null}
      />

      <button disabled={!isValid} type="submit"></button>

      {errors.search?.type === "required" && (
        <span className="error">Whoops, can't be empty... </span>
      )}
    </form>
  );
};

export default SearchField;
