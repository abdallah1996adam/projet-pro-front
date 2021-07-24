import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IconContext } from "react-icons/lib";

ReactDOM.render(
  <IconContext.Provider value={{ color: "#7ed56f", size: "7rem" }}>
    <App />
  </IconContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
