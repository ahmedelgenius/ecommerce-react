import React, { useState } from "react";

const { createContext } = require("react");
export let DataContext = createContext([]);

export function DataContextProvider(props) {
  const [worldItem, setWorldItem] = useState(true);

  const [cartNum, setCartNum] = useState(3);
  const setIncreaseCart = () => {
    setCartNum(cartNum + 1);
  };
  return (
    <DataContext.Provider
      value={{ setWorldItem, worldItem, cartNum, setIncreaseCart }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
