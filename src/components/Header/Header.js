import React from "react";
import { useKeycloak } from "@react-keycloak/web";

import "./Header.css";

const Header = () => {
  const { keycloak } = useKeycloak();
  const isAuthenticated = keycloak.authenticated;

  const loginClick = () => {
    keycloak.login({ redirectUri: "http://localhost:3000/admin-panel" });
  };

  const logoutClick = () => {
    keycloak.logout({ redirectUri: "http://localhost:3000" });
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
