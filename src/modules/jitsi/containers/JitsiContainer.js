import React, { useState } from "react";

import Jitsi from "../components";

const JitsiContainer = ({ currentUser }) => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [call, setCall] = useState(false);
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if (room && name) setCall(true);
  };

  return (
    <Jitsi
      call={call}
      room={room}
      name={name}
      password={password}
      handleClick={handleClick}
      setRoom={setRoom}
      setName={setName}
      setPassword={setPassword}
    />
  );
};

export default JitsiContainer;
