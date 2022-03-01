import { App } from "./app";
import { StrictMode } from "react";
import { render } from "react-dom";
import { reportWebVitals } from "./report-web-vitals";
import "./index.css";
import "./bootstrap";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app-root")
);

/*
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
