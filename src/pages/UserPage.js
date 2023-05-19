import React, { useEffect, useState } from "react";
import Search from "../components/Search/Search";

const UserPage = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const searchBarHandler = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8081/search/${inputValue}`, {
      method: "get",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((receivedData) => {
        setData(receivedData);
      });
  };

  const inputValueHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Search
        onSearchBarHandler={searchBarHandler}
        onInputValue={inputValue}
        onInputValueHandler={inputValueHandler}
      />
      <div>
        {data ? (
          <div>
            <p>Here is your wanted book...</p>
            <ul>
              <li>{data.text}</li>
              <li>{data.link}</li>
            </ul>
          </div>
        ) : (
          "Nothing to read yet..."
        )}
      </div>
    </>
  );
};

export default UserPage;
