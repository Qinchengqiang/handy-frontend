import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/helpers/store";
import {configureFakeBackend} from './redux/helpers/fakeBackend'
import "./index.css";
import { getAllProducts } from './redux/actions/productAction'

// import { createLogger } from 'redux-logger'
// import thunk from 'redux-thunk'

// const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }
// const store = createStore(reducer,
// 	applyMiddleware(...middleware)
// )
store.dispatch(getAllProducts())

configureFakeBackend();
console.log(store.dispatch(getAllProducts()))
ReactDOM.render(
	<Provider store={store}>
		<App />
	 </Provider>,
	document.getElementById("root")
);
