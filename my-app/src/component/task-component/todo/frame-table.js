import React, { Component } from "react";
import Table from "/home/thetamt3/Desktop/FE/baitap3-4/my-app/src/component/task-component/todo/table-component.js";
import "/home/thetamt3/Desktop/FE/baitap3-4/my-app/src/style.css/task.css/frame-table.css";
class Frame extends Component {
  render() {
    return (
      <div className="frame">
        <Table />
        <Table />
        <Table />
        <Table />
      </div>
    );
  }
}
export default Frame;
