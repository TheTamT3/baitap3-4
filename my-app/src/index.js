import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Bar from "./component/bar-component/bar";
import Number from "./component/task-component/number";
import * as serviceWorker from "./serviceWorker";
import Card from "./component/task-component/todo/child-componenttodo/card";
import Footer from "./component/task-component/todo/child-componenttodo/footer";
import Todo from "./component/task-component/todo/componenttodo";
import Talbe from "./component/task-component/todo/table-component";
import Frame from "/home/thetamt3/Desktop/FE/baitap3-4/my-app/src/component/task-component/todo/frame-table.js";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Bar />
    <Frame />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
