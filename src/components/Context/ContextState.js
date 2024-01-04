import React, { useState } from "react";
import { ContextData } from "./ContextVar";

function ContextState(props) {
  let [active, setActive] = useState("#");
  return (
    <ContextData.Provider value={{ active, setActive }}>
      {props.children}
    </ContextData.Provider>
  );
}

export default ContextState;
