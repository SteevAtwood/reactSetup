import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import Search from "../components/Search/Search";

const UserPage = () => {
=======
import { useKeycloak } from "@react-keycloak/web";
import { Settings } from "../Settings";
import Wrapped from "../components/Wrapped/Wrapped";
import { Navigate } from "react-router-dom";

import "./UserPage.css";

const UserPage = () => {
  const { keycloak } = useKeycloak();
>>>>>>> 05811333254af06b55098a02d0719f219388ceae
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
<<<<<<< HEAD
=======
        console.log(receivedData);
>>>>>>> 05811333254af06b55098a02d0719f219388ceae
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
<<<<<<< HEAD
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
=======
        <form onSubmit={searchBarHandler}>
          <h1 className="main-h1">Welcome User</h1>
          <h2 className="main-h2">Please enter a password to get data...</h2>
          <label className="main-label">
            <input
              className="main-input-search"
              type="password"
              name="password"
              value={inputValue}
              onChange={inputValueHandler}
            />
          </label>
          <button type="submit" className="main-btn">Submit</button>
        </form>
      </div>
      <div>
        <p>
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
        </p>
>>>>>>> 05811333254af06b55098a02d0719f219388ceae
      </div>
    </>
  );
};

export default UserPage;