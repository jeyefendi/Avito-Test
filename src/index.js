import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  cash: 5,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
