import { ContextData } from "./ContextVar";
import React, { useState } from 'react'

export default function ContextState(props) {
    let [active,setActive]=useState('#')
  return (
    <ContextData.Provider value={{active,setActive}}>
     {props.children}
    </ContextData.Provider>
  )
}
