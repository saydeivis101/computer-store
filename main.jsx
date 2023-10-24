import { createRoot } from "react-dom/client";
import React from "react";
import { ComputerStore } from "./src/ComputerStore";
import "./main.css";
import { FiltersProvider } from "./src/context/FiltersProvider";

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <FiltersProvider>
      <ComputerStore />
    </FiltersProvider>
  </React.StrictMode>
);
