import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Jitsi = ({ classes, currentUser }) => {
  return (
    <div className={classes.wrapper}>
      <h2>Jitsi Page</h2>
    </div>
  );
};

export default withStyles(styles)(Jitsi);
