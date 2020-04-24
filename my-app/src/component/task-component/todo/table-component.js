import React, { Component } from "react";
import Todo from "/home/thetamt3/Desktop/FE/baitap3-4/my-app/src/component/task-component/todo/componenttodo.js";
import "/home/thetamt3/Desktop/FE/baitap3-4/my-app/src/style.css/task.css/table-component.css";
import Number from "/home/thetamt3/Desktop/FE/baitap3-4/my-app/src/component/task-component/number.js";
class Table extends Component {
  render() {
    return (
      <div className="table">
        <Number num="30" topic="TODO" />
        <div className="table-list">
          <div className="write">
            <p>Write2 some thing here</p>
          </div>
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    );
  }
}
export default Table;
