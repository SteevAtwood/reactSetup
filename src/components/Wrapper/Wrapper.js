import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Wrapper.css";

const Wrapped = (props) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  if (isLoggedIn == true) {
    return (
      <div className="main-wrapped">
        <Header />
        <div className="main-children">{props.children}</div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="main-wrapped">
        <Header />
        <Footer />
      </div>
    );
  }
};

export default Wrapped;
