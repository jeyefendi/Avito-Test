import { legacy_createStore as createStore } from "redux";

const defaultState = {
  value: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const store = createStore(reducer);
