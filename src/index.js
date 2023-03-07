import React from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import App from "./App";
// import { AppProvider } from "./context/ProductContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // <AppProvider>
  <App />
  // </AppProvider>
);
