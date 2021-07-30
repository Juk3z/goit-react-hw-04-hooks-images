import { useState } from "react";
import PropTypes from "prop-types";

function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (evt) => {
    setInputValue(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    onSubmit(inputValue);
    reset();
  };

  const reset = () => {
    setInputValue("");
  };

  return (
    <header className="Searchbar">
      <form onSubmit={submitHandler} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          onChange={inputHandler}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
