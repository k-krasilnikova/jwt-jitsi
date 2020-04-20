import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Router = ({ classes }) => {
  return <div className={classes.wrapper}></div>;
};

export default withStyles(styles)(Router);
