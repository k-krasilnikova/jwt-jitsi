import React from "react";
import { Route, Redirect } from "react-router-dom";

import { ROUTES } from "../../constants";

const PrivateRoute = (props) => {
  return (
    <div>
      {!props.currentUser ? (
        <Redirect
          to={{ pathname: ROUTES.login, state: { from: props.location } }}
        />
      ) : (
        <Route {...props} component={props.component} />
      )}
    </div>
  );
};

export default PrivateRoute;
