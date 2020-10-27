import React, { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./styles/bundle.scss";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app-root")
);
