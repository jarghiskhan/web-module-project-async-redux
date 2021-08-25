import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from  "react-router-dom"
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import logger from "redux-logger"
import { applyMiddleware, createStore } from "redux";
import { quotesReducer } from "./reducers/quotesReducer";
import { getQuotes } from "./actions/quoteActions";
import thunk from "redux-thunk"

const store = createStore(quotesReducer, applyMiddleware(logger, thunk))
store.dispatch(getQuotes)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
