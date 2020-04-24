import React, { Component } from "react";
import Card from "./child-componenttodo/card";
import Footer from "./child-componenttodo/footer";
import Content from "./child-componenttodo/content";
import "/home/thetamt3/Desktop/FE/baitap3-4/my-app/src/style.css/task.css/todo/child-componenttodo.css/form.css";
class Todo extends Component {
  constructor() {
    super();
    this.name = ["featue", "cms"];
    this.foot = ["march", "today"];
    this.content = ["Setup direct server"];
  }
  render() {
    return (
      <div className="todo">
        <div className="head">
          {this.name.map((name) => (
            <Card name={name} />
          ))}
        </div>
        <div className="Content">
          {this.content.map((content) => (
            <Content content={content} />
          ))}
        </div>
        <div className="foot">
          {this.foot.map((foot) => (
            <Footer content={foot} />
          ))}
        </div>
      </div>
    );
  }
}
export default Todo;
