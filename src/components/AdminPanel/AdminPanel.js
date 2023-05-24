import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { useKeycloak } from "@react-keycloak/web";

import "./AdminPanel.css";

const AdminPanel = () => {
  const keycloak = useKeycloak();
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [password, setPassword] = useState("");
  const token = keycloak.token;

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputData = {
      text,
      link,
      password,
    };

    fetch("http://localhost:8081/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data saved successfully!");
        } else {
          throw new Error("Error saving data");
        }
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <Wrapper>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Text:
            <input
              className="main-input-search"
              type="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </label>
          <label>
            Link:
            <input
              className="main-input-search"
              type="text"
              value={link}
              onChange={(event) => setLink(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              className="main-input-search"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AdminPanel;
