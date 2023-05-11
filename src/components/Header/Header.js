import React from "react";
import { useKeycloak } from "@react-keycloak/web";




// import useAccountType, { ADMIN } from "../../hooks/useAccountType";



const Header = (props) => {
  const { keycloak } = useKeycloak();
  const isAuthenticated = keycloak.authenticated;
  // const accountType = useAccountType();
  // const isAdmin = accountType === ADMIN;

  // if (!isAdmin) {
  //   return null;
  // }

  const loginClick = async () => {
    try {
      await keycloak.login({ redirectUri: "http://localhost:3000/admin" });
    } catch (err) {
      console.error(err);
    }
  };

  const logoutClick = async () => {
    try {
      await keycloak.logout({ redirectUri: "http://localhost:3000" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div >
      <div >
        {!isAuthenticated && (
          <button type="button" className="text-blue-800" onClick={loginClick}>
            Login
          </button>
        )}

        {isAuthenticated && (
          <button type="button" className="text-blue-800" onClick={logoutClick}>
            Logout ({keycloak.tokenParsed.preferred_username})
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
