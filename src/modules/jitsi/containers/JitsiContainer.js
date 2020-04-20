import React, { useState } from "react";

import Jitsi from "../components";
import { JITSI_ROOM } from "../../../constants";

const JitsiContainer = () => {
  const [call, setCall] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (JITSI_ROOM.room && JITSI_ROOM.name) setCall(true);
  };

  return (
    <Jitsi
      call={call}
      room={JITSI_ROOM.room}
      name={JITSI_ROOM.name}
      password={JITSI_ROOM.password}
      handleClick={handleClick}
    />
  );
};

export default JitsiContainer;
