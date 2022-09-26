import { App } from "./app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { reportWebVitals } from "./report-web-vitals";
import "./index.css";
import "./bootstrap";

const container = document.getElementById("app-root");
if (!container) {
  throw new Error("No container found");
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
