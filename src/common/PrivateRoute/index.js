import React from "react";
import { Route, Redirect } from "react-router-dom";

import { ROUTES } from "../../constants";

const PrivateRoute = ({ currentUser, component }) => {
  const PrivateComponent = component;
  return (
    <div>
      {!currentUser ? (
        <Redirect to={{ pathname: ROUTES.login }} />
      ) : (
        <Route
          component={() => <PrivateComponent currentUser={currentUser} />}
        />
      )}
    </div>
  );
};

export default PrivateRoute;
