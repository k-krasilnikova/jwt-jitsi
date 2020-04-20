import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Jutsu } from "react-jutsu";

import styles from "./styles";

const Jitsi = ({ classes, call, room, name, password, handleClick }) => {
  return (
    <div className={classes.wrapper}>
      <h2>Jitsi Page</h2>
      {call ? (
        <Jutsu
          roomName={room}
          userName={name}
          password={password}
          loadingComponent={<p>loading ...</p>}
        />
      ) : (
        <button onClick={handleClick} className={classes.button}>
          Start / Join
        </button>
      )}
    </div>
  );
};

export default withStyles(styles)(Jitsi);
