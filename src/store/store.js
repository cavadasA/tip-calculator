import { createStore } from "@reduxjs/toolkit";
import { universalReducer } from "./reducer";

export const store = createStore(
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