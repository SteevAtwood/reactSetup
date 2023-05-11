import React from "react";
import { useKeycloak } from "@react-keycloak/web";

import Header from "../Header/Header";


const WrappedPattern = (props) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  //  return isLoggedIn ? children : null;

  if (isLoggedIn == true) {
    return (
      <div>
        <Header />
        <div>{props.children}</div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
      </div>
    );
  }
};

export default WrappedPattern;
