import React, { useState } from "react";

import Router from "../components";
import { ROUTES } from "../../../constants";
import { history } from "../../../helpers/history";

const RouterContainer = () => {
  const [currentUser, setUser] = useState("");

  const logout = () => {
    setUser("");
    history.push(ROUTES.login);
  };

  return <Router currentUser={currentUser} setUser={setUser} logout={logout} />;
};

export default RouterContainer;
