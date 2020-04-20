import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Jutsu } from "react-jutsu";

import styles from "./styles";

const Jitsi = ({
  classes,
  call,
  room,
  name,
  password,
  handleClick,
  setRoom,
  setName,
  setPassword,
}) => {
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
        <form>
          <input
            id="room"
            type="text"
            placeholder="Room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="password"
            type="text"
            placeholder="Password (optional)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} type="submit">
            Start / Join
          </button>
        </form>
      )}
    </div>
  );
};

export default withStyles(styles)(Jitsi);
