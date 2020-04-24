import React, { Component } from "react";
import "/home/thetamt3/Desktop/FE/baitap3-4/my-app/src/style.css/task.css/number.css";
class Number extends Component {
  render() {
    return (
      <div class="number">
        <p>
          <span>{this.props.num}</span>
          {this.props.topic}
        </p>
      </div>
    );
  }
}

export default Number;
