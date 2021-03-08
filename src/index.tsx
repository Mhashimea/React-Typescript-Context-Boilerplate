import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import "./index.css";
import App from "./App";
import Store from "./store";
import { initailState as auth } from "./store/auth";
import { initailState as app } from "./store/app";

const initialState = {
  auth,
  app,
};

ReactDOM.render(
  <Store.Provider initialState={initialState}>
    <App />
  </Store.Provider>,
  document.getElementById("root")
);
