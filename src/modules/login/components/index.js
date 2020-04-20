import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import classNames from "classnames";

import styles from "./styles";

const Login = ({ classes, initialValues, validationSchema, login, error }) => {
  return (
    <div className={classes.wrapper}>
      <h2>Log In Page</h2>
      {error && <div className={classes.error}>{error}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={login}
      >
        {({ errors, status, isSubmitting }) => (
          <Form>
            <div className={classes.field}>
              <label htmlFor="username" className={classes.label}>
                Username
              </label>
              <Field
                name="username"
                type="text"
                className={classNames(classes.input, {
                  [classes.error]: errors,
                })}
              />
              <ErrorMessage name="username" component="div" />
            </div>
            <div className={classes.field}>
              <label htmlFor="password" className={classes.label}>
                Password
              </label>
              <Field
                name="password"
                type="password"
                className={classNames(classes.input, {
                  [classes.error]: errors,
                })}
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={classes.button}
              >
                Get JWT
              </button>
            </div>
            {status && <div>{status}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withStyles(styles)(Login);
