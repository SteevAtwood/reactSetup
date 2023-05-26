import React from "react";
import { useKeycloak } from "@react-keycloak/web";

import "./Header.css";

const Header = () => {
  const { keycloak } = useKeycloak();
  const isAuthenticated = keycloak.authenticated;

  const loginClick = () => {
    keycloak.login();
  };

  console.log(keycloak.token);

  const logoutClick = () => {
    keycloak.logout();
  };

  return (
    <div className="main-header">
      <div className="main-btn">
        {!isAuthenticated && (
          <button type="button" className="btn" onClick={loginClick}>
            Login
          </button>
        )}

        {isAuthenticated && (
          <button type="button" className="btn" onClick={logoutClick}>
            Logout ({keycloak.tokenParsed.preferred_username})
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
