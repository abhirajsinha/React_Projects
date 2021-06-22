import React from "react";
import ReactDOM from "react-dom";
import { createStore,applyMiddleware } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

//function logger(obj,next,action)
//logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //MiddleWare
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

const logger = ({dispatch,getState}) => (next) => (action) => {
    //logger code
    console.log("ACTION_TYPE = ", action.type);
    next(action);
}

const store = createStore(rootReducer,applyMiddleware(logger));
// console.log('store',store);
// console.log('BeforeState',store.getState());

// store.dispatch({//Dispatch takes an object as an argument (Action Object)
//     type: 'ADD_MOVIES',
//     movies:[{name: 'Superman'}]
// });

// console.log('AfterState',store.getState());
ReactDOM.render(<App store={store} />, document.getElementById("root"));
