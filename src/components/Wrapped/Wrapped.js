import React from "react";
import { useKeycloak } from "@react-keycloak/web";

import Header from "../Header/Header";

import "./Wrapped.css";


const Wrapped = (props) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  //  return isLoggedIn ? children : null;

  if (isLoggedIn == true) {
    return (
      <div className="main-wrapped">
        <Header />
        <div className="main-children">{props.children}</div>
      </div>
    );
  } else {
    return (
      <div className="main-wrapped">
        <Header />
        <div>{props.children}</div>
      </div>
    );
  }
};

export default Wrapped;
