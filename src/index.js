import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';

import "./index.css";
import App from "./components/App";
import movies from "./reducers";

const store=createStore(movies);
console.log('store',store);
console.log('BeforeState',store.getState());

// store.dispatch({//Dispatch takes an object as an argument (Action Object)
//     type: 'ADD_MOVIES',
//     movies:[{name: 'Superman'}]
// });

// console.log('AfterState',store.getState());
ReactDOM.render(<App store={store}/>, document.getElementById("root"));
