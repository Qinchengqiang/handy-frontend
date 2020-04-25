import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/helpers/store";

import "./index.css";
// import { getAllProducts } from './redux/actions/productAction'

// store.dispatch(getAllProducts())

// console.log(store.dispatch(getAllProducts()))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
