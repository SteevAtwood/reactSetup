import React, { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Settings } from "../Settings";

import "./UserPage.css";

const UserPage = () => {
  const { keycloak } = useKeycloak();
  const [data, setData] = useState([]);

  const searchBarHandler = (event) => {
    event.preventDefault();
    fetch(Settings.BACKEND_URL + Settings.BACKEND_ENDPOINTS.SEARCH, {
      method: "get",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + keycloak.token,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })

      .then((recievedData) => {
        console.log(recievedData);
        setData(recievedData);
      })
      .catch(console.error);
  };

  return (
    <>
      <div>
        <form onSubmit={searchBarHandler} className="main-content">
          <h1 className="main-h1">Welcome User</h1>
          <label>
            Write Password:
            <input
              className="main-input-search"
              type="password"
              name="password"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.text}</h2>
            <p>{item.link}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPage;
