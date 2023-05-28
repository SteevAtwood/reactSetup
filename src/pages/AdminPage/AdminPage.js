import React, { useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useKeycloak } from "@react-keycloak/web";
import AdminPanel from "../../components/AdminPanel/AdminPanel"

const AdminPage = () => {
  const { keycloak } = useKeycloak();
  const token = keycloak.token;
  const bearerToken = "Bearer " + token;

  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [password, setPassword] = useState("");

  console.log(bearerToken);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(bearerToken);
    const inputData = {
      text,
      link,
      password,
    };

    fetch("http://164.68.102.104:8081/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearerToken,
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
      <AdminPanel
        handleSubmit={handleSubmit}
        text={text}
        link={link}
        password={password}
        setText={setText}
        setLink={setLink}
        setPassword={setPassword}
      />
    </Wrapper>
  );
};

export default AdminPage;