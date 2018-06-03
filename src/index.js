import "tachyons";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import App from "./containers/App";
import rootReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
