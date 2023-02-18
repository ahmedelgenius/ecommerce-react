import React, { useState } from "react";

const { createContext } = require("react");
export let DataContext = createContext([]);

export function DataContextProvider(props) {
  const [worldItem, setWorldItem] = useState(true);

  return (
    <DataContext.Provider value={{ setWorldItem, worldItem }}>
      {props.children}
    </DataContext.Provider>
  );
}
