import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Router, Route } from "react-router-dom";

import PrivateRoute from "../../../common/PrivateRoute";
import HomePage from "../../jitsi";
import LoginPage from "../../login";
import { ROUTES } from "../../../constants";
import { history } from "../../../helpers/history";
import styles from "./styles";

const RouterComponent = ({ classes, currentUser, setUser, logout }) => {
  return (
    <div className={classes.wrapper}>
      <Router history={history}>
        {currentUser && <a onClick={logout}>Logout</a>}
        <PrivateRoute
          exact
          path={ROUTES.home}
          component={HomePage}
          currentUser={currentUser}
        />
        <Route
          path={ROUTES.login}
          component={() => (
            <LoginPage currentUser={currentUser} setUser={setUser} />
          )}
        />
      </Router>
    </div>
  );
};

export default withStyles(styles)(RouterComponent);
