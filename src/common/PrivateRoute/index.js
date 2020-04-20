import React from "react";
import { Route, Redirect } from "react-router-dom";

import { ROUTES } from "../../constants";

const PrivateRoute = ({ currentUser, component, ...rest }) => {
  return (
    <div>
      {!currentUser ? (
        <Redirect to={{ pathname: ROUTES.login }} />
      ) : (
        <Route {...rest} component={component} />
      )}
    </div>
  );
};

export default PrivateRoute;
