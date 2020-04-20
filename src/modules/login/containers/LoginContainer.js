import React, { useState } from "react";
import * as Yup from "yup";

import Login from "../components";
import { ROUTES } from "../../../constants";
import { history } from "../../../helpers/history";
import { loginCall } from "../../../apiCalls";

const LoginContainer = ({ setUser }) => {
  const [error, setError] = useState("");

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const login = ({ username, password }, { setSubmitting }) => {
    setError();
    loginCall(username, password).then(
      (user) => {
        if (user) {
          setUser("kakaka");
          history.push(ROUTES.home);
        }
      },
      (error) => {
        setError(JSON.stringify(error));
        setSubmitting(false);
      }
    );
  };

  return (
    <Login
      initialValues={initialValues}
      validationSchema={validationSchema}
      login={login}
      error={error}
    />
  );
};

export default LoginContainer;
