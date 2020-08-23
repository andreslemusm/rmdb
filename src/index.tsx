import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import "swiper/swiper.scss";
import "swiper/components/a11y";
import "swiper/components/autoplay";
import "swiper/components/mousewheel";
import "swiper/components/scrollbar";
import "swiper/components/virtual";
import "./styles/tailwind.output.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app-root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
