import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./utils/Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage/UserPage";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<UserPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
