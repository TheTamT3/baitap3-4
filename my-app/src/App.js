import React, { Component } from "react";
import "./App1.css";
import Bar from "./component/bar-component/bar";

//import TodoItem from "./component/TodoItem";

// class App extends Component {
//   constructor() {
//     super();
//     this.todoitem = ["da bong", "di cho", "di choi"];
//   }
//   render() {
//     return (
//       <div classname="App">
//         {this.todoitem.map((item, index) => (
//           <TodoItem key={index} tittle={item} />
//         ))}
//       </div>
//     );
//   }
// }

class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="header-left">
          <p>Project name</p>
        </div>
        <div class="header-right">
          <p>User name</p>
        </div>
      </div>
    );
  }
}
export default Header;
