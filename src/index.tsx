import React, { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";
import { unregister } from "./serviceWorker";
import "swiper/swiper.scss";
import "swiper/components/a11y/a11y.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./styles/tailwind.output.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app-root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
