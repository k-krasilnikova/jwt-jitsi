import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Login = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <h2>Log In Page</h2>
    </div>
  );
};

export default withStyles(styles)(Login);
