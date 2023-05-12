import React from "react";

import "./UserPage.css";

const UserPage = () => {
  return (
    <div>
      <form className="main-content">
        <h1 className="main-h1">Welcome User</h1>
        <label>
          Write Password:
          <input className="main-input-search" type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserPage;
