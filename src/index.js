import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";
import { universalReducer } from "./store/reducer";

const store = createStore(
  universalReducer,
  {
    bill: "",
    persons: "",
    selectedButton: "",
    tipAmount: 0,
    personAmount: 0,
    personAlert: false,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);
