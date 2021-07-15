import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { BrowserRouter as Router } from "react-router-dom";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)) //comibine dev tools and thunk in one line
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
