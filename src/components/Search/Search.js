import React from "react";

import "./Search.css";

const Search = (props) => {
  return (
    <div>
      <form onSubmit={props.onSearchBarHandler}>
        <h1 className="main-h1">Welcome User</h1>
        <h2 className="main-h2">Please enter a password to get data...</h2>
        <label className="main-label">
          <input
            className="main-input-search"
            type="password"
            name="password"
            value={props.onInputValue}
            onChange={props.onInputValueHandler}
            data-testid="password-input"
          />
        </label>
        <button type="submit" className="main-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Search;
