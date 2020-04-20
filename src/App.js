import React from "react";
import { Router, Route } from "react-router-dom";

import PrivateRoute from "./common/PrivateRoute";
import HomePage from "./modules/jitsi";
import LoginPage from "./modules/login";
import { ROUTES } from "./constants";
import { history } from "./helpers/history";
import "./App.css";

function App({ currentUser }) {
  return (
    <div className="App">
      <Router history={history}>
        {/* {currentUser && <a onClick={() => console.log("Log out")}>Logout</a>} */}
        <PrivateRoute exact path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.login} component={LoginPage} />
      </Router>
    </div>
  );
}

export default App;
